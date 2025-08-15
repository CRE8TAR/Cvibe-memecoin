declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string }) => Promise<string[]>
      on?: (event: string, handler: (...args: any[]) => void) => void
      removeListener?: (event: string, handler: (...args: any[]) => void) => void
    }
  }
}

export {}
