"use client"

import { useState, useEffect } from "react"
import Button3D from "./button-3d"

export default function BuyCryptoButton() {
  const [isConnecting, setIsConnecting] = useState(false)
  const [account, setAccount] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [showError, setShowError] = useState(false)

  // Auto-hide error after 3 seconds
  useEffect(() => {
    if (error && showError) {
      const timer = setTimeout(() => {
        setShowError(false)
        setError(null)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [error, showError])

  const connectWalletAndBuy = async () => {
    if (isConnecting) return
    setIsConnecting(true)
    setError(null)
    setShowError(false)

    try {
      if (typeof window !== "undefined" && (window as any).ethereum) {
        const accounts = await (window as any).ethereum.request({
          method: "eth_requestAccounts",
        })
        if (accounts && accounts.length > 0) {
          setAccount(accounts[0])
          setTimeout(() => {
            window.open("https://app.uniswap.org/#/swap", "_blank")
          }, 1000)
        } else {
          throw new Error("No accounts available - please unlock your wallet")
        }
      } else {
        throw new Error("No crypto wallet found. Please install MetaMask, Coinbase Wallet, or Trust Wallet")
      }
    } catch (err: any) {
      console.error("Connection error:", err)

      let errorMessage = "Connection failed - please try again"

      // Handle specific error cases
      if (err.code === 4001) {
        errorMessage = "Connection rejected by user"
      } else if (err.code === -32002) {
        errorMessage = "Connection request already pending - check your wallet"
      } else if (err.code === -32603) {
        errorMessage = "Internal wallet error - please try again"
      } else if (err.message?.includes("No crypto wallet")) {
        errorMessage = "No wallet found - please install MetaMask or another crypto wallet"
      } else if (err.message?.includes("unlock")) {
        errorMessage = "Please unlock your wallet and try again"
      } else if (err.message?.includes("not properly initialized")) {
        errorMessage = "Wallet not ready - please refresh the page"
      }

      setError(errorMessage)
      setShowError(true)
    } finally {
      setIsConnecting(false)
    }
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <Button3D onClick={connectWalletAndBuy}>{isConnecting ? "Connecting..." : "Buy with Crypto"}</Button3D>
      {error && showError && (
        <div className="animate-pulse bg-red-500/90 text-white text-xs px-3 py-2 rounded-lg max-w-xs text-center backdrop-blur-sm border border-red-400/50 shadow-lg">
          {error}
        </div>
      )}
    </div>
  )
}
