"use client"

import { useState } from "react"
import Button3D from "./button-3d"
import GlassCard from "./glass-card"

export default function ContractAddress() {
  const [copied, setCopied] = useState(false)
  const contractAddress = "7x8y9z1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t"

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  return (
    <GlassCard title="You can find $CVIBE on Ethereum Here:">
      <div className="space-y-4">
        <div className="text-cyan-50/90">
          <p className="text-sm font-semibold text-cyan-100 mb-2">Contract Address (CA):</p>
          <div className="bg-cyan-950/30 rounded-lg p-3 border border-cyan-300/20">
            <code className="text-xs text-cyan-200 break-all font-mono">{contractAddress}</code>
          </div>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <Button3D onClick={copyAddress}>{copied ? "✓ Copied!" : "Copy Address"}</Button3D>
          <div className="text-xs text-cyan-200/70">Always verify the contract address before trading</div>
        </div>
      </div>
    </GlassCard>
  )
}
