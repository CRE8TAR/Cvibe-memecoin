"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import * as THREE from "three"
import QRRedemption from "./qr-redemption"
import WalletRedemption from "./wallet-redemption"

export default function Game3D() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const gameStateRef = useRef<{
    scene?: THREE.Scene
    renderer?: THREE.WebGLRenderer
    camera?: THREE.PerspectiveCamera
    baseball?: THREE.Mesh
    targetCharacter?: THREE.Group
    pitcherCharacter?: THREE.Group
    coins: THREE.Mesh[]
    gameActive: boolean
    animationId?: number
    cleanup?: () => void
  }>({
    coins: [],
    gameActive: false,
  })

  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [gameStarted, setGameStarted] = useState(false)
  const [showQRRedemption, setShowQRRedemption] = useState(false)
  const [showWalletRedemption, setShowWalletRedemption] = useState(false)

  // Calculate CVIBE coins earned (100 points = 1 CVIBE coin)
  const cvibeCoins = Math.floor(score / 100)

  // Game mechanics
  const startGame = useCallback(() => {
    const gameState = gameStateRef.current
    gameState.gameActive = true

    // Clear existing coins
    gameState.coins.forEach((coin) => {
      if (gameState.scene) {
        gameState.scene.remove(coin)
      }
    })
    gameState.coins = []

    // Reset baseball position
    if (gameState.baseball) {
      gameState.baseball.position.set(-3.5, 1.8, 0)
    }

    // Reset target position
    if (gameState.targetCharacter) {
      gameState.targetCharacter.position.set(4, 0, 0)
      gameState.targetCharacter.rotation.y = 0
    }
  }, [])

  const endGame = useCallback(() => {
    const gameState = gameStateRef.current
    gameState.gameActive = false
    setGameOver(true)

    // Reset baseball position
    if (gameState.baseball) {
      gameState.baseball.position.set(-3.5, 1.8, 0)
    }
  }, [])

  const spawnCoins = useCallback((position: THREE.Vector3) => {
    const gameState = gameStateRef.current
    if (!gameState.scene) return

    for (let i = 0; i < 5; i++) {
      const coinGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.02, 16)
      const coinMaterial = new THREE.MeshLambertMaterial({ color: 0xffd700 })
      const coin = new THREE.Mesh(coinGeometry, coinMaterial)

      coin.position.copy(position)
      coin.position.y += 0.5
      coin.position.x += (Math.random() - 0.5) * 2
      coin.position.z += (Math.random() - 0.5) * 2
      coin.castShadow = true

      gameState.coins.push(coin)
      gameState.scene.add(coin)
    }
  }, [])

  const restartGame = useCallback(() => {
    // Stop any ongoing animations
    if (gameStateRef.current.animationId) {
      cancelAnimationFrame(gameStateRef.current.animationId)
    }

    // Reset all state
    setGameOver(false)
    setGameStarted(false)
    setScore(0)
    setShowQRRedemption(false)
    setShowWalletRedemption(false)

    // Reset game state
    const gameState = gameStateRef.current
    gameState.gameActive = false

    // Clear coins
    gameState.coins.forEach((coin) => {
      if (gameState.scene) {
        gameState.scene.remove(coin)
      }
    })
    gameState.coins = []

    // Reset positions
    if (gameState.baseball) {
      gameState.baseball.position.set(-3.5, 1.8, 0)
    }
    if (gameState.targetCharacter) {
      gameState.targetCharacter.position.set(4, 0, 0)
      gameState.targetCharacter.rotation.y = 0
    }

    // Restart after a brief delay
    setTimeout(() => {
      setGameStarted(true)
    }, 100)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Initialize Three.js scene
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1))
    renderer.setClearColor(0x000000, 0)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    camera.position.set(0, 2, 8)

    // Store in game state
    gameStateRef.current.scene = scene
    gameStateRef.current.renderer = renderer
    gameStateRef.current.camera = camera

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(5, 10, 5)
    directionalLight.castShadow = true
    directionalLight.shadow.mapSize.width = 2048
    directionalLight.shadow.mapSize.height = 2048
    scene.add(ambientLight, directionalLight)

    // Ground
    const groundGeometry = new THREE.PlaneGeometry(20, 20)
    const groundMaterial = new THREE.MeshLambertMaterial({ color: 0x4ade80 })
    const ground = new THREE.Mesh(groundGeometry, groundMaterial)
    ground.rotation.x = -Math.PI / 2
    ground.receiveShadow = true
    scene.add(ground)

    // Create Pitcher Character (facing backwards)
    const createPitcher = () => {
      const pitcher = new THREE.Group()

      // Body
      const bodyGeometry = new THREE.BoxGeometry(0.6, 1.4, 0.3)
      const bodyMaterial = new THREE.MeshLambertMaterial({ color: 0x1e40af })
      const body = new THREE.Mesh(bodyGeometry, bodyMaterial)
      body.position.y = 1.4
      body.castShadow = true

      // Head
      const headGeometry = new THREE.SphereGeometry(0.3, 16, 16)
      const headMaterial = new THREE.MeshLambertMaterial({ color: 0xfdbcbc })
      const head = new THREE.Mesh(headGeometry, headMaterial)
      head.position.y = 2.4
      head.castShadow = true

      // Baseball cap
      const capGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.15, 16)
      const capMaterial = new THREE.MeshLambertMaterial({ color: 0x991b1b })
      const cap = new THREE.Mesh(capGeometry, capMaterial)
      cap.position.y = 2.55
      cap.castShadow = true

      // Arms
      const armGeometry = new THREE.CylinderGeometry(0.1, 0.12, 1.0, 8)
      const armMaterial = new THREE.MeshLambertMaterial({ color: 0xfdbcbc })

      const leftArm = new THREE.Mesh(armGeometry, armMaterial)
      leftArm.position.set(-0.5, 1.6, 0)
      leftArm.rotation.z = Math.PI / 3
      leftArm.castShadow = true

      const rightArm = new THREE.Mesh(armGeometry, armMaterial)
      rightArm.position.set(0.5, 1.6, 0)
      rightArm.rotation.z = -Math.PI / 3
      rightArm.castShadow = true

      // Legs
      const legGeometry = new THREE.CylinderGeometry(0.12, 0.15, 1.2, 8)
      const legMaterial = new THREE.MeshLambertMaterial({ color: 0x374151 })

      const leftLeg = new THREE.Mesh(legGeometry, legMaterial)
      leftLeg.position.set(-0.2, 0.6, 0)
      leftLeg.castShadow = true

      const rightLeg = new THREE.Mesh(legGeometry, legMaterial)
      rightLeg.position.set(0.2, 0.6, 0)
      rightLeg.castShadow = true

      pitcher.add(body, head, cap, leftArm, rightArm, leftLeg, rightLeg)
      pitcher.position.set(-4, 0, 0)
      return pitcher
    }

    // Create Target Character (facing forward)
    const createTarget = () => {
      const target = new THREE.Group()

      // Body
      const bodyGeometry = new THREE.CylinderGeometry(0.3, 0.4, 1.6, 8)
      const bodyMaterial = new THREE.MeshLambertMaterial({ color: 0xf59e0b })
      const body = new THREE.Mesh(bodyGeometry, bodyMaterial)
      body.position.y = 1.6
      body.castShadow = true

      // Head (TARGET AREA - bigger for easier hitting)
      const headGeometry = new THREE.SphereGeometry(0.35, 16, 16)
      const headMaterial = new THREE.MeshLambertMaterial({ color: 0xfef3c7 })
      const head = new THREE.Mesh(headGeometry, headMaterial)
      head.position.y = 2.6
      head.castShadow = true
      head.userData = { isHead: true } // Mark as target

      // Anime hair
      const hairGeometry = new THREE.SphereGeometry(0.4, 8, 8)
      const hairMaterial = new THREE.MeshLambertMaterial({ color: 0x8b5cf6 })
      const hair = new THREE.Mesh(hairGeometry, hairMaterial)
      hair.position.y = 2.8
      hair.scale.set(1.2, 0.6, 1.2)
      hair.castShadow = true

      // Hair spikes
      for (let i = 0; i < 6; i++) {
        const spikeGeometry = new THREE.ConeGeometry(0.08, 0.3, 6)
        const spike = new THREE.Mesh(spikeGeometry, hairMaterial)
        const angle = (i / 6) * Math.PI * 2
        spike.position.set(Math.cos(angle) * 0.35, 3.0, Math.sin(angle) * 0.35)
        spike.rotation.z = angle
        spike.castShadow = true
        target.add(spike)
      }

      // Eyes
      const eyeGeometry = new THREE.SphereGeometry(0.12, 8, 8)
      const eyeMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff })
      const pupilGeometry = new THREE.SphereGeometry(0.06, 8, 8)
      const pupilMaterial = new THREE.MeshLambertMaterial({ color: 0x3b82f6 })

      const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial)
      leftEye.position.set(-0.15, 2.65, 0.3)
      const leftPupil = new THREE.Mesh(pupilGeometry, pupilMaterial)
      leftPupil.position.set(-0.15, 2.65, 0.36)

      const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial)
      rightEye.position.set(0.15, 2.65, 0.3)
      const rightPupil = new THREE.Mesh(pupilGeometry, pupilMaterial)
      rightPupil.position.set(0.15, 2.65, 0.36)

      // Mouth
      const mouthGeometry = new THREE.SphereGeometry(0.05, 8, 8)
      const mouthMaterial = new THREE.MeshLambertMaterial({ color: 0x000000 })
      const mouth = new THREE.Mesh(mouthGeometry, mouthMaterial)
      mouth.position.set(0, 2.4, 0.32)
      mouth.scale.set(1, 0.5, 0.5)

      // Arms
      const armGeometry = new THREE.CylinderGeometry(0.08, 0.1, 0.9, 8)
      const armMaterial = new THREE.MeshLambertMaterial({ color: 0xfef3c7 })

      const leftArm = new THREE.Mesh(armGeometry, armMaterial)
      leftArm.position.set(-0.5, 1.8, 0)
      leftArm.rotation.z = Math.PI / 2
      leftArm.castShadow = true

      const rightArm = new THREE.Mesh(armGeometry, armMaterial)
      rightArm.position.set(0.5, 1.8, 0)
      rightArm.rotation.z = -Math.PI / 2
      rightArm.castShadow = true

      target.add(body, head, hair, leftEye, leftPupil, rightEye, rightPupil, mouth, leftArm, rightArm)
      target.position.set(4, 0, 0)
      return target
    }

    // Create Baseball
    const createBaseball = () => {
      const ballGeometry = new THREE.SphereGeometry(0.08, 16, 16)
      const ballMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff })
      const ball = new THREE.Mesh(ballGeometry, ballMaterial)
      ball.position.set(-3.5, 1.8, 0)
      ball.castShadow = true
      return ball
    }

    // Create game objects
    const pitcherCharacter = createPitcher()
    const targetCharacter = createTarget()
    const baseball = createBaseball()

    scene.add(pitcherCharacter, targetCharacter, baseball)

    // Store in game state
    gameStateRef.current.pitcherCharacter = pitcherCharacter
    gameStateRef.current.targetCharacter = targetCharacter
    gameStateRef.current.baseball = baseball

    // Mouse/Touch controls
    let isDragging = false
    let startPos = { x: 0, y: 0 }
    let currentPos = { x: 0, y: 0 }

    const getMousePos = (event: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect()
      if (event instanceof MouseEvent) {
        return {
          x: ((event.clientX - rect.left) / rect.width) * 2 - 1,
          y: -((event.clientY - rect.top) / rect.height) * 2 + 1,
        }
      } else {
        const touch = event.touches[0]
        return {
          x: ((touch.clientX - rect.left) / rect.width) * 2 - 1,
          y: -((touch.clientY - rect.top) / rect.height) * 2 + 1,
        }
      }
    }

    const onMouseDown = (event: MouseEvent | TouchEvent) => {
      if (!gameStateRef.current.gameActive || !gameStateRef.current.baseball) return
      event.preventDefault()
      isDragging = true
      startPos = getMousePos(event)
    }

    const onMouseMove = (event: MouseEvent | TouchEvent) => {
      if (!isDragging || !gameStateRef.current.gameActive || !gameStateRef.current.baseball) return
      event.preventDefault()
      currentPos = getMousePos(event)
    }

    const onMouseUp = (event: MouseEvent | TouchEvent) => {
      if (
        !isDragging ||
        !gameStateRef.current.gameActive ||
        !gameStateRef.current.baseball ||
        !gameStateRef.current.targetCharacter
      )
        return
      event.preventDefault()
      isDragging = false

      // Calculate throw direction and power
      const deltaX = currentPos.x - startPos.x
      const deltaY = currentPos.y - startPos.y
      const power = Math.min(Math.sqrt(deltaX * deltaX + deltaY * deltaY) * 10, 15)

      // Animate baseball throw
      const targetPos = gameStateRef.current.targetCharacter.position.clone()
      targetPos.y += 2.6 // Aim for head height

      const startBallPos = gameStateRef.current.baseball.position.clone()
      let throwProgress = 0

      const animateThrow = () => {
        if (!gameStateRef.current.baseball || !gameStateRef.current.gameActive) return

        throwProgress += 0.02
        if (throwProgress >= 1) {
          // Check hit detection
          const distance = gameStateRef.current.baseball.position.distanceTo(targetPos)
          if (distance < 0.5) {
            // HIT! Spawn coins and add score
            spawnCoins(targetPos)
            setScore((prev) => prev + 1)
            // Reset for next throw
            gameStateRef.current.baseball.position.set(-3.5, 1.8, 0)
          } else {
            // MISS! Game over
            endGame()
          }
          return
        }

        // Parabolic trajectory
        const t = throwProgress
        gameStateRef.current.baseball.position.x = startBallPos.x + (targetPos.x - startBallPos.x) * t
        gameStateRef.current.baseball.position.z = startBallPos.z + (targetPos.z - startBallPos.z) * t
        gameStateRef.current.baseball.position.y =
          startBallPos.y + (targetPos.y - startBallPos.y) * t + Math.sin(t * Math.PI) * 2

        requestAnimationFrame(animateThrow)
      }

      animateThrow()
    }

    // Event listeners
    canvas.addEventListener("mousedown", onMouseDown)
    canvas.addEventListener("mousemove", onMouseMove)
    canvas.addEventListener("mouseup", onMouseUp)
    canvas.addEventListener("touchstart", onMouseDown)
    canvas.addEventListener("touchmove", onMouseMove)
    canvas.addEventListener("touchend", onMouseUp)

    // Resize handler
    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const width = Math.max(1, Math.floor(rect.width))
      const height = Math.max(1, Math.floor(rect.height))
      if (canvas.width !== width || canvas.height !== height) {
        renderer.setSize(width, height, false)
        camera.aspect = width / height
        camera.updateProjectionMatrix()
      }
    }
    resize()
    window.addEventListener("resize", resize)

    // Animation loop
    const clock = new THREE.Clock()
    const animate = () => {
      const t = clock.getElapsedTime()

      // Animate coins
      gameStateRef.current.coins.forEach((coin, index) => {
        coin.rotation.y = t * 3
        coin.position.y = 0.5 + Math.sin(t * 2 + index) * 0.1
      })

      // Animate target character - movement starts at 80 points
      if (gameStateRef.current.targetCharacter) {
        if (score >= 80) {
          // Fast nervous movement when score is 80+
          gameStateRef.current.targetCharacter.position.x = 4 + Math.sin(t * 8) * 0.8
          gameStateRef.current.targetCharacter.position.z = Math.cos(t * 6) * 0.6
          gameStateRef.current.targetCharacter.rotation.y = Math.sin(t * 10) * 0.3
        } else {
          // Normal idle animation
          gameStateRef.current.targetCharacter.rotation.y = Math.sin(t * 0.5) * 0.1
        }
      }

      renderer.render(scene, camera)
      gameStateRef.current.animationId = requestAnimationFrame(animate)
    }
    gameStateRef.current.animationId = requestAnimationFrame(animate)

    // Start game when gameStarted becomes true
    if (gameStarted && !gameStateRef.current.gameActive) {
      startGame()
    }

    // Cleanup function
    gameStateRef.current.cleanup = () => {
      if (gameStateRef.current.animationId) {
        cancelAnimationFrame(gameStateRef.current.animationId)
      }
      window.removeEventListener("resize", resize)
      canvas.removeEventListener("mousedown", onMouseDown)
      canvas.removeEventListener("mousemove", onMouseMove)
      canvas.removeEventListener("mouseup", onMouseUp)
      canvas.removeEventListener("touchstart", onMouseDown)
      canvas.removeEventListener("touchmove", onMouseMove)
      canvas.removeEventListener("touchend", onMouseUp)
      renderer.dispose()
    }

    return () => {
      if (gameStateRef.current.cleanup) {
        gameStateRef.current.cleanup()
      }
    }
  }, [gameStarted, startGame, endGame, spawnCoins, score])

  return (
    <div className="relative w-full h-full">
      <canvas ref={canvasRef} className="w-full h-full" />

      {/* NEON SCOREBOARD */}
      <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm rounded-xl border-2 border-cyan-400 p-6 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-pink-500/20 rounded-xl blur-sm"></div>
        <div className="relative z-10">
          <div
            className="text-2xl font-bold mb-2"
            style={{
              color: "#00ffff",
              textShadow: "0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff, 0 0 40px #00ffff",
            }}
          >
            SCORE: {score}
          </div>

          <div className="mb-3">
            <div className="flex justify-between items-center mb-1">
              <span
                className="text-sm font-semibold"
                style={{
                  color: "#ff00ff",
                  textShadow: "0 0 5px #ff00ff, 0 0 10px #ff00ff",
                }}
              >
                Progress to next CVIBE coin:
              </span>
              <span
                className="text-sm font-bold"
                style={{
                  color: "#ffff00",
                  textShadow: "0 0 5px #ffff00, 0 0 10px #ffff00",
                }}
              >
                {score % 100}/100
              </span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-3 border border-cyan-400">
              <div
                className="h-full rounded-full transition-all duration-300 relative overflow-hidden"
                style={{
                  width: `${score % 100}%`,
                  background: "linear-gradient(90deg, #00ffff, #ff00ff, #ffff00)",
                  boxShadow: "0 0 10px #00ffff, inset 0 0 10px rgba(255,255,255,0.2)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
              </div>
            </div>
          </div>

          <div
            className="text-xl font-bold mb-2"
            style={{
              color: "#ffd700",
              textShadow: "0 0 10px #ffd700, 0 0 20px #ffd700, 0 0 30px #ffd700",
            }}
          >
            CVIBE COINS: {cvibeCoins} 🪙
          </div>

          {score >= 80 && (
            <div
              className="text-sm font-bold mb-2 animate-pulse"
              style={{
                color: "#ff0000",
                textShadow: "0 0 10px #ff0000, 0 0 20px #ff0000",
              }}
            >
              ⚠️ TARGET IS MOVING! ⚠️
            </div>
          )}

          <div
            className="text-xs"
            style={{
              color: "#00ff00",
              textShadow: "0 0 5px #00ff00",
            }}
          >
            1 head shot = 1 point
            <br />
            100 points = 1 CVIBE coin!
            {score >= 80 && (
              <>
                <br />
                <span style={{ color: "#ff0000", textShadow: "0 0 5px #ff0000" }}>Target moves at 80+ points!</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Game Over Overlay */}
      {gameOver && (
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-black/90 backdrop-blur-sm rounded-xl border-2 border-cyan-400 p-8 text-center max-w-md relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-pink-500/20 rounded-xl blur-sm"></div>
            <div className="relative z-10">
              <h3
                className="text-3xl font-bold mb-4"
                style={{
                  color: "#ff0080",
                  textShadow: "0 0 10px #ff0080, 0 0 20px #ff0080, 0 0 30px #ff0080",
                }}
              >
                GAME OVER!
              </h3>

              <p
                className="text-xl mb-2"
                style={{
                  color: "#00ffff",
                  textShadow: "0 0 5px #00ffff",
                }}
              >
                Final Score: {score} points
              </p>

              <p
                className="text-2xl font-bold mb-4"
                style={{
                  color: "#ffd700",
                  textShadow: "0 0 10px #ffd700, 0 0 20px #ffd700",
                }}
              >
                You earned: {cvibeCoins} CVIBE coins! 🪙
              </p>

              <p
                className="text-sm mb-6"
                style={{
                  color: "#ff6600",
                  textShadow: "0 0 5px #ff6600",
                }}
              >
                You missed the head shot!
              </p>

              {cvibeCoins > 0 && (
                <div className="mb-6 p-4 bg-black/50 rounded-lg border border-cyan-300/30">
                  <p
                    className="text-sm mb-3"
                    style={{
                      color: "#00ff00",
                      textShadow: "0 0 5px #00ff00",
                    }}
                  >
                    Redeem your CVIBE coins:
                  </p>
                  <div className="flex gap-3 justify-center">
                    <button
                      onClick={() => setShowQRRedemption(true)}
                      className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors border border-purple-400"
                      style={{
                        boxShadow: "0 0 10px #8b5cf6",
                      }}
                    >
                      📱 QR Code
                    </button>
                    <button
                      onClick={() => setShowWalletRedemption(true)}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors border border-indigo-400"
                      style={{
                        boxShadow: "0 0 10px #6366f1",
                      }}
                    >
                      💳 To Wallet
                    </button>
                  </div>
                </div>
              )}

              <button
                onClick={restartGame}
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors border border-cyan-400"
                style={{
                  boxShadow: "0 0 15px #06b6d4",
                }}
              >
                PLAY AGAIN
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Start Game Overlay */}
      {!gameStarted && !gameOver && (
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-black/90 backdrop-blur-sm rounded-xl border-2 border-cyan-400 p-8 text-center max-w-md relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-pink-500/20 rounded-xl blur-sm"></div>
            <div className="relative z-10">
              <h3
                className="text-3xl font-bold mb-4"
                style={{
                  color: "#00ffff",
                  textShadow: "0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff",
                }}
              >
                CVIBE BASEBALL
              </h3>

              <p
                className="text-lg mb-6"
                style={{
                  color: "#ffff00",
                  textShadow: "0 0 5px #ffff00",
                }}
              >
                Hit the target's head to earn CVIBE coins!
              </p>

              <button
                onClick={() => setGameStarted(true)}
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors border border-cyan-400 text-lg"
                style={{
                  boxShadow: "0 0 15px #06b6d4",
                }}
              >
                START GAME
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Instructions */}
      <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg border border-cyan-400 p-3">
        <div
          className="text-xs text-center"
          style={{
            color: "#00ffff",
            textShadow: "0 0 5px #00ffff",
          }}
        >
          Click and drag to aim • Release to throw • Hit the head to score!
          {score >= 80 && <span style={{ color: "#ff0000", textShadow: "0 0 5px #ff0000" }}> • Target is moving!</span>}
        </div>
      </div>

      {/* Redemption Modals */}
      {showQRRedemption && <QRRedemption coins={cvibeCoins} onClose={() => setShowQRRedemption(false)} />}
      {showWalletRedemption && <WalletRedemption coins={cvibeCoins} onClose={() => setShowWalletRedemption(false)} />}
    </div>
  )
}
