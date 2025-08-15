"use client"

import { useState, useEffect } from "react"
import Button3D from "./button-3d"

export default function WalletConnectButton({
  color = "indigo",
  className = "",
}: { color?: "purple" | "indigo"; className?: string }) {
  const [account, setAccount] = useState<string | null>(null)
  const [isConnecting, setIsConnecting] = useState(false)
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

  const detectAndConnectWallet = async () => {
    if (isConnecting) return

    setIsConnecting(true)
    setError(null)
    setShowError(false)

    try {
      // Check if we're in browser environment
      if (typeof window === "undefined") {
        throw new Error("Please use a web browser")
      }

      const ethereum = (window as any).ethereum

      // Check for any wallet provider
      if (!ethereum) {
        throw new Error("No crypto wallet found. Please install MetaMask, Coinbase Wallet, or Trust Wallet")
      }

      // Check if wallet is accessible
      if (!ethereum.request) {
        throw new Error("Wallet not properly initialized - please refresh the page")
      }

      console.log("Attempting to connect wallet...")

      // Try to connect without timeout first (let wallet handle its own timeout)
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      })

      console.log("Wallet response:", accounts)

      if (accounts && Array.isArray(accounts) && accounts.length > 0) {
        setAccount(accounts[0])
        setError(null)
        setShowError(false)
        console.log("Successfully connected:", accounts[0])
      } else {
        throw new Error("No accounts available - please unlock your wallet")
      }
    } catch (err: any) {
      console.error("Wallet connection error:", err)

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
      } else if (err.message?.includes("timeout")) {
        errorMessage = "Connection took too long - please try again"
      }

      setError(errorMessage)
      setShowError(true)
    } finally {
      setIsConnecting(false)
    }
  }

  const copyAddress = async () => {
    if (!account) return

    try {
      await navigator.clipboard.writeText(account)
      // Could add a "copied" state here if needed
    } catch (err) {
      console.error("Failed to copy address:", err)
    }
  }

  const getButtonText = () => {
    if (isConnecting) return "Connecting..."
    if (account) return `${account.slice(0, 6)}...${account.slice(-4)}`
    return "Connect Wallet"
  }

  const handleClick = () => {
    if (account) {
      copyAddress()
    } else {
      detectAndConnectWallet()
    }
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <Button3D onClick={handleClick} color={color} className={className}>
        {getButtonText()}
      </Button3D>
      {error && showError && (
        <div className="animate-pulse bg-red-500/90 text-white text-xs px-3 py-2 rounded-lg max-w-xs text-center backdrop-blur-sm border border-red-400/50 shadow-lg">
          {error}
        </div>
      )}
    </div>
  )
}
