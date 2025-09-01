"use client"

import { useState } from "react"
import Button3D from "./button-3d"
import GlassCard from "./glass-card"

export default function ContractAddress() {
  const [copied, setCopied] = useState(false)
  const contractAddress = "BbTVRjunZp12E3HXp29aPXAfG5Ca4hohTpArCACxpump"

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
    <GlassCard title="You can find $CVIBE  Here:">
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
