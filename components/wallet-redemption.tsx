"use client"

import { useState } from "react"

type WalletRedemptionProps = {
  coins: number
  onClose: () => void
}

export default function WalletRedemption({ coins, onClose }: WalletRedemptionProps) {
  const [account, setAccount] = useState<string | null>(null)
  const [isConnecting, setIsConnecting] = useState(false)
  const [isRedeeming, setIsRedeeming] = useState(false)
  const [redeemed, setRedeemed] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const connectWallet = async () => {
    setIsConnecting(true)
    setError(null)

    try {
      if (typeof window !== "undefined" && (window as any).ethereum) {
        const accounts = await (window as any).ethereum.request({
          method: "eth_requestAccounts",
        })
        if (accounts && accounts.length > 0) {
          setAccount(accounts[0])
        } else {
          throw new Error("No accounts found")
        }
      } else {
        throw new Error("No wallet found - please install MetaMask")
      }
    } catch (err: any) {
      setError(err.message || "Failed to connect wallet")
    } finally {
      setIsConnecting(false)
    }
  }

  const handleRedeem = async () => {
    if (!account) {
      await connectWallet()
      return
    }

    setIsRedeeming(true)
    setError(null)

    try {
      await new Promise((resolve) => setTimeout(resolve, 3000))
      console.log(`Would send ${coins} CVIBE tokens to ${account}`)
      setRedeemed(true)
    } catch (err: any) {
      setError(err.message || "Redemption failed")
    } finally {
      setIsRedeeming(false)
    }
  }

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
              Redeem to Wallet
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

          {error && (
            <div className="mb-4 p-3 bg-red-500/20 border border-red-400/50 rounded-lg">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          {!redeemed ? (
            <div className="space-y-4">
              {account ? (
                <div className="bg-black/50 rounded-lg p-4 border border-cyan-400/30">
                  <p
                    className="text-sm mb-2"
                    style={{
                      color: "#00ff00",
                      textShadow: "0 0 5px #00ff00",
                    }}
                  >
                    Connected wallet:
                  </p>
                  <p
                    className="font-mono text-sm break-all"
                    style={{
                      color: "#ffff00",
                      textShadow: "0 0 3px #ffff00",
                    }}
                  >
                    {account.slice(0, 10)}...{account.slice(-8)}
                  </p>
                </div>
              ) : (
                <div className="bg-yellow-500/10 border-2 border-yellow-400/50 rounded-lg p-4">
                  <p
                    className="text-sm"
                    style={{
                      color: "#ffff00",
                      textShadow: "0 0 5px #ffff00",
                    }}
                  >
                    Please connect your wallet to redeem coins
                  </p>
                </div>
              )}

              <div className="flex gap-3">
                <button
                  onClick={handleRedeem}
                  disabled={isConnecting || isRedeeming}
                  className="flex-1 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white px-4 py-2 rounded-lg font-semibold transition-colors border border-purple-400"
                  style={{ boxShadow: "0 0 10px #8b5cf6" }}
                >
                  {isConnecting
                    ? "Connecting..."
                    : isRedeeming
                      ? "Sending Tokens..."
                      : account
                        ? `Redeem ${coins} CVIBE`
                        : "Connect Wallet"}
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
            <div className="space-y-4 text-center">
              <div className="text-6xl mb-4">✅</div>
              <h4
                className="text-lg font-semibold"
                style={{
                  color: "#00ff00",
                  textShadow: "0 0 10px #00ff00",
                }}
              >
                Success!
              </h4>
              <p
                style={{
                  color: "#ffd700",
                  textShadow: "0 0 5px #ffd700",
                }}
              >
                {coins} CVIBE coins have been sent to your wallet!
              </p>
              <p
                className="text-xs"
                style={{
                  color: "#ff00ff",
                  textShadow: "0 0 3px #ff00ff",
                }}
              >
                Transaction may take a few minutes to confirm on the blockchain
              </p>

              <button
                onClick={onClose}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors border border-purple-400"
                style={{ boxShadow: "0 0 10px #8b5cf6" }}
              >
                Awesome!
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
