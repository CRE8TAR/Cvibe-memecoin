"use client"

import { useState } from "react"
import Button3D from "./button-3d"

export default function BuyDebitButton() {
  const [isProcessing, setIsProcessing] = useState(false)

  const handleDebitCardPurchase = async () => {
    if (isProcessing) return
    setIsProcessing(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      const purchaseUrl = "https://buy.moonpay.com/?apiKey=pk_test_123&currencyCode=eth"
      window.open(purchaseUrl, "_blank", "width=500,height=700,scrollbars=yes,resizable=yes")
    } catch (err) {
      console.error("Purchase error:", err)
    } finally {
      setIsProcessing(false)
    }
  }

  return <Button3D onClick={handleDebitCardPurchase}>{isProcessing ? "Opening..." : "Buy with Debit Card"}</Button3D>
}
