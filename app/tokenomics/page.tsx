import Image from "next/image"
import Link from "next/link"
import SectionWrapper from "@/components/section-wrapper"
import Heading3D from "@/components/heading-3d-css"
import Button3D from "@/components/button-3d"
import WalletConnectButton from "@/components/wallet-connect-button"
import FooterCoin3D from "@/components/footer-coin-3d"
import GlassCard from "@/components/glass-card"
import AppProviders from "@/components/app-providers"

function TokenomicsChart() {
  const data = [
    { label: "Community", percentage: 92, color: "bg-cyan-400", description: "Fair distribution to community" },
    { label: "CEX/LP/Market", percentage: 5, color: "bg-purple-400", description: "Exchange listings & liquidity" },
    {
      label: "Treasury/Partnerships",
      percentage: 3,
      color: "bg-indigo-400",
      description: "Development & partnerships",
    },
  ]

  return (
    <div className="bg-cyan-50/10 backdrop-blur-sm rounded-xl border border-cyan-300/40 p-6">
      <h3 className="text-xl font-semibold text-cyan-100 mb-6 text-center">Token Distribution</h3>

      {/* Pie Chart Visual */}
      <div className="relative w-64 h-64 mx-auto mb-6">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 via-purple-400 to-indigo-400 opacity-20"></div>
        <div className="absolute inset-2 rounded-full bg-black/50 backdrop-blur-sm"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-100">1B</div>
            <div className="text-sm text-cyan-200/80">Total Supply</div>
          </div>
        </div>

        {/* Segments */}
        <div className="absolute inset-0">
          <div
            className="w-full h-full rounded-full border-8 border-cyan-400"
            style={{ clipPath: "polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 50% 100%)" }}
          ></div>
          <div
            className="absolute inset-0 w-full h-full rounded-full border-4 border-purple-400"
            style={{ clipPath: "polygon(50% 50%, 50% 0%, 60% 0%, 60% 100%, 50% 100%)" }}
          ></div>
          <div
            className="absolute inset-0 w-full h-full rounded-full border-2 border-indigo-400"
            style={{ clipPath: "polygon(50% 50%, 50% 0%, 55% 0%, 55% 100%, 50% 100%)" }}
          ></div>
        </div>
      </div>

      {/* Legend */}
      <div className="space-y-3">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-black/30 rounded-lg border border-cyan-400/20"
          >
            <div className="flex items-center gap-3">
              <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
              <div>
                <div className="font-semibold text-cyan-100">{item.label}</div>
                <div className="text-xs text-cyan-200/70">{item.description}</div>
              </div>
            </div>
            <div className="text-lg font-bold text-cyan-100">{item.percentage}%</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function TokenMetrics() {
  const metrics = [
    { label: "Total Supply", value: "1,000,000,000", unit: "CVIBE", icon: "🪙" },
    { label: "Circulating Supply", value: "920,000,000", unit: "CVIBE", icon: "🌊" },
    { label: "Buy Tax", value: "0", unit: "%", icon: "💰" },
    { label: "Sell Tax", value: "0", unit: "%", icon: "💸" },
    { label: "Liquidity Pool", value: "Locked", unit: "Forever", icon: "🔒" },
    { label: "Contract", value: "Renounced", unit: "Verified", icon: "✅" },
  ]

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="bg-cyan-50/10 backdrop-blur-sm rounded-xl border border-cyan-300/40 p-4 text-center"
        >
          <div className="text-2xl mb-2">{metric.icon}</div>
          <div className="text-lg font-bold text-cyan-100 mb-1">
            {metric.value} <span className="text-sm font-normal text-cyan-200/80">{metric.unit}</span>
          </div>
          <div className="text-sm text-cyan-200/70">{metric.label}</div>
        </div>
      ))}
    </div>
  )
}

function SecurityFeatures() {
  const features = [
    {
      title: "Liquidity Locked",
      description: "LP tokens permanently locked to prevent rug pulls",
      icon: "🔐",
      status: "Active",
    },
    {
      title: "Contract Renounced",
      description: "Ownership renounced, no one can modify the contract",
      icon: "🚫",
      status: "Verified",
    },
    {
      title: "No Mint Function",
      description: "Supply is fixed, no new tokens can be created",
      icon: "⛔",
      status: "Disabled",
    },
    {
      title: "Audit Complete",
      description: "Smart contract audited by security experts",
      icon: "🛡️",
      status: "Passed",
    },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {features.map((feature, index) => (
        <div key={index} className="bg-cyan-50/10 backdrop-blur-sm rounded-xl border border-cyan-300/40 p-6">
          <div className="flex items-start gap-4">
            <div className="text-3xl">{feature.icon}</div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-cyan-100">{feature.title}</h4>
                <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-400/30">
                  {feature.status}
                </span>
              </div>
              <p className="text-sm text-cyan-200/80">{feature.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function TokenomicsPage() {
  return (
    <AppProviders>
      <main className="relative min-h-[100dvh] text-white">
        {/* Hero */}
        <SectionWrapper
          id="tokenomics-hero"
          className="h-[60vh] min-h-[460px] flex items-center"
          contentClassName="h-full flex items-center justify-center text-center"
        >
          <div className="max-w-4xl">
            <Heading3D text="Tokenomics" className="block" />
            <h1 className="sr-only">Tokenomics</h1>
            <p className="mt-4 max-w-2xl mx-auto text-base text-cyan-50/90 md:text-lg">
              Simple, fair, and transparent. CVIBE is engineered for longevity with clean mechanics and community-first
              distribution.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row justify-center">
              <Button3D href="/whitepaper" color="purple">
                Read Whitepaper
              </Button3D>
              <WalletConnectButton color="indigo" />
            </div>
          </div>
        </SectionWrapper>

        {/* Token Metrics */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-cyan-100 mb-4">Token Metrics</h2>
              <p className="text-cyan-50/90 max-w-2xl mx-auto">
                CVIBE features a clean and simple token structure designed for fairness and transparency.
              </p>
            </div>
            <TokenMetrics />
          </div>
        </section>

        {/* Distribution Chart */}
        <section className="py-16 md:py-24 border-t border-cyan-300/20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-start">
              <div>
                <h2 className="text-3xl font-bold text-cyan-100 mb-6">Token Distribution</h2>
                <div className="space-y-6">
                  <GlassCard title="Community Allocation (92%)">
                    <p className="text-sm mb-3">
                      The vast majority of tokens go directly to the community through fair launch mechanisms:
                    </p>
                    <ul className="text-sm space-y-2">
                      <li>• Fair launch liquidity pool</li>
                      <li>• Community rewards and airdrops</li>
                      <li>• Staking and yield farming rewards</li>
                      <li>• Contest prizes and giveaways</li>
                    </ul>
                  </GlassCard>

                  <GlassCard title="Exchange & Liquidity (5%)">
                    <p className="text-sm mb-3">Reserved for exchange listings and market making:</p>
                    <ul className="text-sm space-y-2">
                      <li>• CEX listing requirements</li>
                      <li>• Additional liquidity pools</li>
                      <li>• Market maker partnerships</li>
                      <li>• Cross-chain bridge liquidity</li>
                    </ul>
                  </GlassCard>

                  <GlassCard title="Treasury & Partnerships (3%)">
                    <p className="text-sm mb-3">Minimal allocation for sustainable development:</p>
                    <ul className="text-sm space-y-2">
                      <li>• Development funding</li>
                      <li>• Strategic partnerships</li>
                      <li>• Marketing initiatives</li>
                      <li>• Emergency reserves</li>
                    </ul>
                  </GlassCard>
                </div>
              </div>

              <div className="lg:sticky lg:top-8">
                <TokenomicsChart />
              </div>
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-16 md:py-24 border-t border-cyan-300/20">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-cyan-100 mb-4">Security & Trust</h2>
              <p className="text-cyan-50/90 max-w-2xl mx-auto">
                CVIBE implements industry-leading security measures to protect the community and ensure long-term
                sustainability.
              </p>
            </div>
            <SecurityFeatures />
          </div>
        </section>

        {/* Utility & Use Cases */}
        <section className="py-16 md:py-24 border-t border-cyan-300/20">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-cyan-100 mb-4">Utility & Use Cases</h2>
              <p className="text-cyan-50/90 max-w-2xl mx-auto">
                CVIBE tokens have multiple utilities within the ecosystem and beyond.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <GlassCard title="Gaming Rewards">
                <div className="text-center mb-4">🎮</div>
                <p className="text-sm">
                  Earn CVIBE tokens by playing our baseball game and other community games. High scores = more rewards!
                </p>
              </GlassCard>

              <GlassCard title="Community Governance">
                <div className="text-center mb-4">🗳️</div>
                <p className="text-sm">
                  Hold CVIBE to participate in community decisions, vote on proposals, and shape the future of the
                  project.
                </p>
              </GlassCard>

              <GlassCard title="Staking Rewards">
                <div className="text-center mb-4">💎</div>
                <p className="text-sm">
                  Stake your CVIBE tokens to earn additional rewards and support the network while earning passive
                  income.
                </p>
              </GlassCard>

              <GlassCard title="NFT Marketplace">
                <div className="text-center mb-4">🖼️</div>
                <p className="text-sm">
                  Use CVIBE to buy, sell, and trade ocean-themed NFTs in our upcoming marketplace ecosystem.
                </p>
              </GlassCard>

              <GlassCard title="Premium Features">
                <div className="text-center mb-4">⭐</div>
                <p className="text-sm">
                  Access exclusive features, early game releases, and premium community perks with CVIBE tokens.
                </p>
              </GlassCard>

              <GlassCard title="Merchant Payments">
                <div className="text-center mb-4">🛒</div>
                <p className="text-sm">
                  Spend CVIBE at partner merchants and online stores. Growing ecosystem of accepting businesses.
                </p>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Roadmap Preview */}
        <section className="py-16 md:py-24 border-t border-cyan-300/20">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-cyan-100 mb-4">Economic Roadmap</h2>
              <p className="text-cyan-50/90 max-w-2xl mx-auto">
                Our planned economic developments and token utility expansions.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <GlassCard title="Phase 1: Foundation" className="border-l-4 border-l-cyan-400">
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span>Fair launch completed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span>Liquidity pool established</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                    <span>Community building</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                    <span>First CEX listings</span>
                  </div>
                </div>
              </GlassCard>

              <GlassCard title="Phase 2: Expansion" className="border-l-4 border-l-purple-400">
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                    <span>Staking platform launch</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                    <span>NFT marketplace beta</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                    <span>Gaming ecosystem</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                    <span>Cross-chain bridges</span>
                  </div>
                </div>
              </GlassCard>

              <GlassCard title="Phase 3: Ecosystem" className="border-l-4 border-l-indigo-400">
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                    <span>DAO governance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                    <span>DeFi integrations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                    <span>Merchant adoption</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                    <span>Global partnerships</span>
                  </div>
                </div>
              </GlassCard>
            </div>

            <div className="mt-10 text-center">
              <Button3D href="/roadmap" color="purple">
                View Full Roadmap
              </Button3D>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-cyan-300/20 bg-transparent">
          <div className="container px-4 md:px-6">
            <div className="py-6">
              <FooterCoin3D />
            </div>
            <div className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  width={32}
                  height={32}
                  alt="Token Logo"
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-cyan-100">CVIBE</p>
                  <p className="text-xs text-cyan-200/80">Ride the meme wave responsibly.</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <Link href="/" className="text-cyan-100 hover:underline underline-offset-4">
                  Home
                </Link>
                <Link href="/tokenomics" className="text-cyan-100 hover:underline underline-offset-4">
                  Tokenomics
                </Link>
                <Link href="/whitepaper" className="text-cyan-100 hover:underline underline-offset-4">
                  Whitepaper
                </Link>
                <Link href="/roadmap" className="text-cyan-100 hover:underline underline-offset-4">
                  Roadmap
                </Link>
                <Link href="/community" className="text-cyan-100 hover:underline underline-offset-4">
                  Community
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-cyan-300/20 py-6 text-xs text-cyan-50/90">
              <p>&copy; {new Date().getFullYear()} CVIBE. All rights reserved.</p>
              <p>Made with love and ocean vibes.</p>
            </div>
          </div>
        </footer>
      </main>
    </AppProviders>
  )
}
