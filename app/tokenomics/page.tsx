import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "@/components/section-wrapper";
import Heading3D from "@/components/heading-3d-css";
import Button3D from "@/components/button-3d";
import WalletConnectButton from "@/components/wallet-connect-button";
import FooterCoin3D from "@/components/footer-coin-3d";
import GlassCard from "@/components/glass-card";
import AppProviders from "@/components/app-providers";

function TokenomicsChart() {
  const data = [
    {
      label: "Community",
      percentage: 92,
      color: "bg-cyan-400",
      description: "Fair distribution to community",
    },
    {
      label: "CEX/LP/Market",
      percentage: 5,
      color: "bg-purple-400",
      description: "Exchange listings & liquidity",
    },
    {
      label: "Treasury/Partnerships",
      percentage: 3,
      color: "bg-indigo-400",
      description: "Development & partnerships",
    },
  ];

  return (
    <div className="bg-cyan-50/10 backdrop-blur-sm rounded-xl border border-cyan-300/40 p-6">
      <h3 className="text-xl font-semibold text-cyan-100 mb-6 text-center">
        Token Distribution
      </h3>

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
            style={{
              clipPath:
                "polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 50% 100%)",
            }}
          ></div>
          <div
            className="absolute inset-0 w-full h-full rounded-full border-4 border-purple-400"
            style={{
              clipPath: "polygon(50% 50%, 50% 0%, 60% 0%, 60% 100%, 50% 100%)",
            }}
          ></div>
          <div
            className="absolute inset-0 w-full h-full rounded-full border-2 border-indigo-400"
            style={{
              clipPath: "polygon(50% 50%, 50% 0%, 55% 0%, 55% 100%, 50% 100%)",
            }}
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
                <div className="text-xs text-cyan-200/70">
                  {item.description}
                </div>
              </div>
            </div>
            <div className="text-lg font-bold text-cyan-100">
              {item.percentage}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TokenMetrics() {
  const metrics = [
    {
      label: "Total Supply",
      value: "1,000,000,000",
      unit: "CVIBE",
      icon: (
        <svg
          className="w-5 h-5 text-cyan-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
    },
    {
      label: "Circulating Supply",
      value: "920,000,000",
      unit: "CVIBE",
      icon: (
        <svg
          className="w-5 h-5 text-cyan-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
    },
    {
      label: "Buy Tax",
      value: "0",
      unit: "%",
      icon: (
        <svg
          className="w-5 h-5 text-green-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
        </svg>
      ),
    },
    {
      label: "Sell Tax",
      value: "0",
      unit: "%",
      icon: (
        <svg
          className="w-5 h-5 text-red-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
        </svg>
      ),
    },
    {
      label: "Liquidity Pool",
      value: "Locked",
      unit: "Forever",
      icon: (
        <svg
          className="w-5 h-5 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
        </svg>
      ),
    },
    {
      label: "Contract",
      value: "Renounced",
      unit: "Verified",
      icon: (
        <svg
          className="w-5 h-5 text-green-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="bg-cyan-50/10 backdrop-blur-sm rounded-xl border border-cyan-300/40 p-4 text-center"
        >
          {/* Icon wrapper */}
          <div className="flex justify-center items-center w-12 h-12 mb-2">
            {metric.icon}
          </div>

          <div className="text-lg font-bold text-cyan-100 mb-1">
            {metric.value}{" "}
            <span className="text-sm font-normal text-cyan-200/80">
              {metric.unit}
            </span>
          </div>
          <div className="text-sm text-cyan-200/70">{metric.label}</div>
        </div>
      ))}
    </div>
  );
}

function SecurityFeatures() {
  const features = [
    {
      title: "Liquidity Locked",
      description: "LP tokens permanently locked to prevent rug pulls",
      icon: (
        <svg className="w-8 h-8 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
        </svg>
      ),
      status: "Active",
    },
    {
      title: "Contract Renounced",
      description: "Ownership renounced, no one can modify the contract",
      icon: (
        <svg className="w-8 h-8 text-red-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z" />
        </svg>
      ),
      status: "Verified",
    },
    {
      title: "No Mint Function",
      description: "Supply is fixed, no new tokens can be created",
      icon: (
        <svg className="w-8 h-8 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2l3.09 6.26L22,9.27l-5 4.87 1.18 6.88L12,17.77l-6.18 3.25L7,14.14 2,9.27l6.91-1.01L12,2z" />
        </svg>
      ),
      status: "Disabled",
    },
    {
      title: "Audit Complete",
      description: "Smart contract audited by security experts",
      icon: (
        <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11H16V16H8V11H9.2V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.4,8.7 10.4,10V11H13.6V10C13.6,8.7 12.8,8.2 12,8.2Z" />
        </svg>
      ),
      status: "Passed",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-cyan-50/10 backdrop-blur-sm rounded-xl border border-cyan-300/40 p-6"
        >
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
  );
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
              Simple, fair, and transparent. CVIBE is engineered for longevity
              with clean mechanics and community-first distribution.
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
              <h2 className="text-3xl font-bold text-cyan-100 mb-4">
                Token Metrics
              </h2>
              <p className="text-cyan-50/90 max-w-2xl mx-auto">
                CVIBE features a clean and simple token structure designed for
                fairness and transparency.
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
                <h2 className="text-3xl font-bold text-cyan-100 mb-6">
                  Token Distribution
                </h2>
                <div className="space-y-6">
                  <GlassCard title="Community Allocation (92%)">
                    <p className="text-sm mb-3">
                      The vast majority of tokens go directly to the community
                      through fair launch mechanisms:
                    </p>
                    <ul className="text-sm space-y-2">
                      <li>• Fair launch liquidity pool</li>
                      <li>• Community rewards and airdrops</li>
                      <li>• Staking and yield farming rewards</li>
                      <li>• Contest prizes and giveaways</li>
                    </ul>
                  </GlassCard>

                  <GlassCard title="Exchange & Liquidity (5%)">
                    <p className="text-sm mb-3">
                      Reserved for exchange listings and market making:
                    </p>
                    <ul className="text-sm space-y-2">
                      <li>• CEX listing requirements</li>
                      <li>• Additional liquidity pools</li>
                      <li>• Market maker partnerships</li>
                      <li>• Cross-chain bridge liquidity</li>
                    </ul>
                  </GlassCard>

                  <GlassCard title="Treasury & Partnerships (3%)">
                    <p className="text-sm mb-3">
                      Minimal allocation for sustainable development:
                    </p>
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
              <h2 className="text-3xl font-bold text-cyan-100 mb-4">
                Security & Trust
              </h2>
              <p className="text-cyan-50/90 max-w-2xl mx-auto">
                CVIBE implements industry-leading security measures to protect
                the community and ensure long-term sustainability.
              </p>
            </div>
            <SecurityFeatures />
          </div>
        </section>

        {/* Detailed Tokenomics */}
        <section className="py-16 md:py-24 border-t border-cyan-300/20">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-cyan-100 mb-4">
                Detailed Tokenomics
              </h2>
              <p className="text-cyan-50/90 max-w-2xl mx-auto">
                Comprehensive breakdown of CVIBE's economic model and token
                mechanics.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-6">
                <GlassCard title="Token Economics">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-black/30 rounded-lg">
                      <span className="text-cyan-200">Token Standard</span>
                      <span className="font-semibold text-cyan-100">
                        ERC-20
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-black/30 rounded-lg">
                      <span className="text-cyan-200">Blockchain</span>
                      <span className="font-semibold text-cyan-100">
                        Ethereum
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-black/30 rounded-lg">
                      <span className="text-cyan-200">Max Supply</span>
                      <span className="font-semibold text-cyan-100">
                        1,000,000,000 CVIBE
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-black/30 rounded-lg">
                      <span className="text-cyan-200">Decimals</span>
                      <span className="font-semibold text-cyan-100">18</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-black/30 rounded-lg">
                      <span className="text-cyan-200">Launch Type</span>
                      <span className="font-semibold text-green-400">
                        Fair Launch
                      </span>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard title="Fair Launch Mechanics">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                      <div>
                        <strong className="text-cyan-100">No Presale:</strong>
                        <span className="text-cyan-50/80">
                          {" "}
                          No private or public presale rounds
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                      <div>
                        <strong className="text-cyan-100">
                          No Team Allocation:
                        </strong>
                        <span className="text-cyan-50/80">
                          {" "}
                          Team gets tokens same way as community
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                      <div>
                        <strong className="text-cyan-100">
                          Equal Opportunity:
                        </strong>
                        <span className="text-cyan-50/80">
                          {" "}
                          Everyone starts on the same footing
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                      <div>
                        <strong className="text-cyan-100">
                          Transparent Launch:
                        </strong>
                        <span className="text-cyan-50/80">
                          {" "}
                          All transactions visible on-chain
                        </span>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </div>

              <div className="space-y-6">
                <GlassCard title="Multi-Chain Expansion">
                  <div className="space-y-4">
                    <div className="bg-green-500/10 border border-green-400/30 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        <span className="font-semibold text-green-400">
                          Ethereum Mainnet
                        </span>
                      </div>
                      <p className="text-sm text-cyan-50/80">
                        Primary deployment with full functionality
                      </p>
                    </div>

                    <div className="bg-yellow-500/10 border border-yellow-400/30 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <span className="font-semibold text-yellow-400">
                          Polygon (Q2 2025)
                        </span>
                      </div>
                      <p className="text-sm text-cyan-50/80">
                        Lower fees for gaming and micro-transactions
                      </p>
                    </div>

                    <div className="bg-blue-500/10 border border-blue-400/30 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                        <span className="font-semibold text-blue-400">
                          Arbitrum (Q3 2025)
                        </span>
                      </div>
                      <p className="text-sm text-cyan-50/80">
                        DeFi integrations and advanced features
                      </p>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard title="Governance Model">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                      <div>
                        <strong className="text-cyan-100">
                          DAO Structure:
                        </strong>
                        <span className="text-cyan-50/80">
                          {" "}
                          Decentralized governance through token holders
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                      <div>
                        <strong className="text-cyan-100">Voting Power:</strong>
                        <span className="text-cyan-50/80">
                          {" "}
                          1 CVIBE = 1 vote on all proposals
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                      <div>
                        <strong className="text-cyan-100">
                          Proposal Threshold:
                        </strong>
                        <span className="text-cyan-50/80">
                          {" "}
                          1M+ CVIBE required to create proposals
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                      <div>
                        <strong className="text-cyan-100">
                          Treasury Control:
                        </strong>
                        <span className="text-cyan-50/80">
                          {" "}
                          Community controls development funds
                        </span>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap Preview */}
        <section className="py-16 md:py-24 border-t border-cyan-300/20">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-cyan-100 mb-4">
                Economic Roadmap
              </h2>
              <p className="text-cyan-50/90 max-w-2xl mx-auto">
                Our planned economic developments and token utility expansions.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <GlassCard
                title="Phase 1: Foundation"
                className="border-l-4 border-l-cyan-400"
              >
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

              <GlassCard
                title="Phase 2: Expansion"
                className="border-l-4 border-l-purple-400"
              >
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

              <GlassCard
                title="Phase 3: Ecosystem"
                className="border-l-4 border-l-indigo-400"
              >
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
                  src="public/images/cvibecoin.png"
                  width={32}
                  height={32}
                  alt="Token Logo"
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-cyan-100">CVIBE</p>
                  <p className="text-xs text-cyan-200/80">
                    Ride the meme wave responsibly.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <Link
                  href="/"
                  className="text-cyan-100 hover:underline underline-offset-4"
                >
                  Home
                </Link>
                <Link
                  href="/tokenomics"
                  className="text-cyan-100 hover:underline underline-offset-4"
                >
                  Tokenomics
                </Link>
                <Link
                  href="/whitepaper"
                  className="text-cyan-100 hover:underline underline-offset-4"
                >
                  Whitepaper
                </Link>
                <Link
                  href="/roadmap"
                  className="text-cyan-100 hover:underline underline-offset-4"
                >
                  Roadmap
                </Link>
                <Link
                  href="/community"
                  className="text-cyan-100 hover:underline underline-offset-4"
                >
                  Community
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-cyan-300/20 py-6 text-xs text-cyan-50/90">
              <p>
                &copy; {new Date().getFullYear()} CVIBE. All rights reserved.
              </p>
              <p>Made for Fun and Meme vibes.</p>
            </div>
          </div>
        </footer>
      </main>
    </AppProviders>
  );
}
