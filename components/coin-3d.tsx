"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export type Coin3DProps = {
  className?: string
  metalness?: number
  roughness?: number
  spinSpeed?: number
}

export default function Coin3D({
  className = "w-full h-full",
  metalness = 0.85,
  roughness = 0.25,
  spinSpeed = 1.6,
}: Coin3DProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const cleanupRef = useRef<(() => void) | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1))
    renderer.setClearColor(0x000000, 0)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100)
    camera.position.set(0, 0, 3.2)

    const amb = new THREE.AmbientLight(0xffffff, 0.7)
    const dir = new THREE.DirectionalLight(0xffffff, 1.15)
    dir.position.set(2.5, 3, 2)
    const rimLight = new THREE.DirectionalLight(0xffffff, 0.4)
    rimLight.position.set(-2, -1.5, -2)
    scene.add(amb, dir, rimLight)

    const coin = new THREE.Group()
    scene.add(coin)

    const radius = 1
    const thickness = 0.2

    const rimMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#d9b24a"),
      metalness,
      roughness,
    })

    const faceMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#f7e08f"),
      metalness: 0.92,
      roughness: 0.22,
    })

    const accentMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#a78bfa"),
      metalness: 0.7,
      roughness: 0.35,
    })

    const rimGeo = new THREE.CylinderGeometry(radius, radius, thickness, 96, 1, true)
    rimGeo.rotateX(Math.PI / 2)
    const rim = new THREE.Mesh(rimGeo, rimMat)
    coin.add(rim)

    const faceFront = new THREE.Mesh(new THREE.CircleGeometry(radius - 0.02, 96), faceMat)
    faceFront.position.z = thickness / 2
    coin.add(faceFront)

    const faceBack = new THREE.Mesh(new THREE.CircleGeometry(radius - 0.02, 96), faceMat)
    faceBack.position.z = -thickness / 2
    faceBack.rotation.y = Math.PI
    coin.add(faceBack)

    const ringFront = new THREE.Mesh(new THREE.RingGeometry(radius * 0.78, radius * 0.92, 96), accentMat)
    ringFront.position.z = thickness / 2 + 0.001
    coin.add(ringFront)

    const ringBack = new THREE.Mesh(new THREE.RingGeometry(radius * 0.78, radius * 0.92, 96), accentMat)
    ringBack.position.z = -thickness / 2 + 0.001
    ringBack.rotation.y = Math.PI
    coin.add(ringBack)

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

    let raf = 0
    const clock = new THREE.Clock()
    const animate = () => {
      const t = clock.getElapsedTime()
      coin.rotation.y = t * spinSpeed
      coin.rotation.x = Math.sin(t * 0.9) * 0.12
      renderer.render(scene, camera)
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)

    cleanupRef.current = () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
      rimGeo.dispose()
      faceFront.geometry.dispose()
      faceBack.geometry.dispose()
      ringFront.geometry.dispose()
      ringBack.geometry.dispose()
      rimMat.dispose()
      faceMat.dispose()
      accentMat.dispose()
      renderer.dispose()
    }

    return () => {
      cleanupRef.current?.()
      cleanupRef.current = null
    }
  }, [metalness, roughness, spinSpeed])

  return <canvas ref={canvasRef} className={className} />
}
