"use client"

import { useState } from "react"

type QRRedemptionProps = {
  coins: number
  onClose: () => void
}

export default function QRRedemption({ coins, onClose }: QRRedemptionProps) {
  const [walletAddress, setWalletAddress] = useState("")
  const [showQR, setShowQR] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerateQR = async () => {
    if (!walletAddress.trim()) {
      alert("Please enter your wallet address first!")
      return
    }

    setIsGenerating(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setShowQR(true)
    } catch (error) {
      alert("Failed to generate QR code. Please try again.")
    } finally {
      setIsGenerating(false)
    }
  }

  const qrData = `https://cvibe.game/redeem?coins=${coins}&wallet=${walletAddress}&session=${Math.random().toString(36).substring(7)}`

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-black/90 backdrop-blur-xl rounded-xl border-2 border-cyan-400 p-8 max-w-md w-full mx-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-pink-500/20 rounded-xl blur-sm"></div>
        <div className="relative z-10">
          <div className="text-center mb-6">
            <h3
              className="text-xl font-bold mb-2"
              style={{
                color: "#00ffff",
                textShadow: "0 0 10px #00ffff, 0 0 20px #00ffff",
              }}
            >
              Redeem CVIBE Coins
            </h3>
            <p
              style={{
                color: "#ffd700",
                textShadow: "0 0 5px #ffd700",
              }}
            >
              You earned {coins} CVIBE coins! 🪙
            </p>
          </div>

          {!showQR ? (
            <div className="space-y-4">
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  style={{
                    color: "#ff00ff",
                    textShadow: "0 0 5px #ff00ff",
                  }}
                >
                  Enter your wallet address:
                </label>
                <input
                  type="text"
                  value={walletAddress}
                  onChange={(e) => setWalletAddress(e.target.value)}
                  placeholder="0x1234567890123456789012345678901234567890"
                  className="w-full px-3 py-2 bg-black/50 border-2 border-cyan-400/50 rounded-lg text-cyan-100 placeholder-cyan-400/50 focus:outline-none focus:border-cyan-400"
                  style={{
                    boxShadow: "0 0 5px #06b6d4",
                  }}
                />
              </div>

              <div className="bg-blue-500/10 border border-blue-400/30 rounded-lg p-3">
                <p className="text-xs text-blue-300">
                  💡 <strong>How it works:</strong> We'll generate a secure QR code that you can scan with your wallet
                  app to claim your CVIBE tokens.
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleGenerateQR}
                  disabled={isGenerating}
                  className="flex-1 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white px-4 py-2 rounded-lg font-semibold transition-colors border border-purple-400"
                  style={{ boxShadow: "0 0 10px #8b5cf6" }}
                >
                  {isGenerating ? "Generating..." : "Generate QR Code"}
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors border border-indigo-400"
                  style={{ boxShadow: "0 0 10px #6366f1" }}
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div
                className="bg-white p-4 rounded-lg border-2 border-cyan-400 text-center"
                style={{
                  boxShadow: "0 0 15px #06b6d4",
                }}
              >
                <div className="text-black font-mono text-xs break-all bg-gray-100 p-2 rounded">{qrData}</div>
                <p className="text-black text-xs mt-2">📱 Scan with wallet app</p>
              </div>

              <div className="text-center">
                <p
                  className="text-sm mb-4"
                  style={{
                    color: "#00ff00",
                    textShadow: "0 0 5px #00ff00",
                  }}
                >
                  Scan this QR code with your wallet app to claim your {coins} CVIBE coins
                </p>
                <div
                  className="text-xs bg-black/50 rounded p-2 break-all border border-cyan-400/30"
                  style={{
                    color: "#ffff00",
                    textShadow: "0 0 3px #ffff00",
                  }}
                >
                  Wallet: {walletAddress.slice(0, 10)}...{walletAddress.slice(-8)}
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowQR(false)}
                  className="flex-1 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors border border-purple-400"
                  style={{ boxShadow: "0 0 10px #8b5cf6" }}
                >
                  Back
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors border border-indigo-400"
                  style={{ boxShadow: "0 0 10px #6366f1" }}
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
