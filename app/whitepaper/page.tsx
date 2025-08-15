import type React from "react"
import Image from "next/image"
import Link from "next/link"
import SectionWrapper from "@/components/section-wrapper"
import Heading3D from "@/components/heading-3d-css"
import Button3D from "@/components/button-3d"
import WalletConnectButton from "@/components/wallet-connect-button"
import GlassCard from "@/components/glass-card"

function TableOfContents() {
  const sections = [
    { id: "abstract", title: "Abstract", page: "1" },
    { id: "introduction", title: "Introduction", page: "2" },
    { id: "tokenomics", title: "Tokenomics", page: "3" },
    { id: "technology", title: "Technology", page: "5" },
    { id: "governance", title: "Governance", page: "7" },
    { id: "roadmap", title: "Roadmap", page: "9" },
    { id: "security", title: "Security", page: "11" },
    { id: "conclusion", title: "Conclusion", page: "13" },
  ]

  return (
    <div className="bg-cyan-50/10 backdrop-blur-sm rounded-xl border border-cyan-300/40 p-6">
      <h3 className="text-xl font-semibold text-cyan-100 mb-6">Table of Contents</h3>
      <div className="space-y-3">
        {sections.map((section, index) => (
          <a
            key={index}
            href={`#${section.id}`}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-cyan-50/10 transition-colors group"
          >
            <span className="text-cyan-100 group-hover:text-cyan-50">{section.title}</span>
            <span className="text-cyan-200/70 text-sm">Page {section.page}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

function WhitepaperSection({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-12 border-t border-cyan-300/20 first:border-t-0">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-cyan-100 mb-8">{title}</h2>
        <div className="max-w-4xl mx-auto">{children}</div>
      </div>
    </section>
  )
}

export default function WhitepaperPage() {
  return (
    <main className="relative min-h-[100dvh] text-white">
      {/* Hero */}
      <SectionWrapper
        id="whitepaper-hero"
        className="h-[60vh] min-h-[460px] flex items-center"
        contentClassName="h-full flex items-center justify-center text-center"
      >
        <div className="max-w-4xl">
          <Heading3D text="Whitepaper" className="block" />
          <h1 className="sr-only">CVIBE Whitepaper</h1>
          <p className="mt-4 text-lg text-cyan-50/90 max-w-2xl mx-auto">
            Explore CVIBE&apos;s mission, token mechanics, and vision for an ocean-sized memetic ecosystem.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row justify-center">
            <Button3D href="#abstract" color="purple">
              Read Whitepaper
            </Button3D>
            <Button3D href="/tokenomics" color="indigo">
              View Tokenomics
            </Button3D>
            <WalletConnectButton color="cyan" />
          </div>
        </div>
      </SectionWrapper>

      {/* Document Info */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <GlassCard title="Document Information">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <div className="text-sm text-cyan-200/70 mb-1">Version</div>
                    <div className="font-semibold text-cyan-100">v1.2.0</div>
                  </div>
                  <div>
                    <div className="text-sm text-cyan-200/70 mb-1">Last Updated</div>
                    <div className="font-semibold text-cyan-100">December 2024</div>
                  </div>
                  <div>
                    <div className="text-sm text-cyan-200/70 mb-1">Authors</div>
                    <div className="font-semibold text-cyan-100">CVIBE Core Team</div>
                  </div>
                  <div>
                    <div className="text-sm text-cyan-200/70 mb-1">Status</div>
                    <div className="font-semibold text-green-400">Active</div>
                  </div>
                </div>
                <div className="mt-6 flex gap-3">
                  <Button3D color="purple">Download PDF</Button3D>
                  <Button3D color="indigo">Share Document</Button3D>
                </div>
              </GlassCard>
            </div>
            <div>
              <TableOfContents />
            </div>
          </div>
        </div>
      </section>

      {/* Abstract */}
      <WhitepaperSection id="abstract" title="Abstract">
        <GlassCard>
          <p className="text-cyan-50/90 leading-relaxed mb-6">
            CVIBE represents a new paradigm in community-driven meme tokens, combining fair launch mechanics with
            sustainable tokenomics and innovative utility features. Built on the principles of transparency, community
            governance, and long-term value creation, CVIBE aims to establish itself as the premier ocean-themed
            memecoin ecosystem.
          </p>
          <p className="text-cyan-50/90 leading-relaxed mb-6">
            This whitepaper outlines the technical architecture, economic model, governance structure, and roadmap for
            the CVIBE ecosystem. Our approach prioritizes community ownership, security, and sustainable growth while
            maintaining the fun and engaging nature that makes meme tokens special.
          </p>
          <div className="bg-cyan-400/10 border border-cyan-400/30 rounded-lg p-4">
            <h4 className="font-semibold text-cyan-100 mb-2">Key Highlights</h4>
            <ul className="text-sm text-cyan-50/90 space-y-1">
              <li>• 92% community allocation with fair launch</li>
              <li>• Zero buy/sell taxes for frictionless trading</li>
              <li>• Liquidity permanently locked and contract renounced</li>
              <li>• Multi-utility ecosystem with gaming and NFTs</li>
              <li>• Decentralized governance through DAO structure</li>
            </ul>
          </div>
        </GlassCard>
      </WhitepaperSection>

      {/* Introduction */}
      <WhitepaperSection id="introduction" title="Introduction">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <GlassCard title="The Meme Token Revolution">
              <p className="text-sm text-cyan-50/90 leading-relaxed mb-4">
                Meme tokens have evolved from simple jokes to legitimate financial instruments with real utility and
                community value. CVIBE builds upon this evolution by creating a sustainable ecosystem that rewards
                community participation while maintaining the playful spirit of meme culture.
              </p>
              <p className="text-sm text-cyan-50/90 leading-relaxed">
                Our ocean theme resonates with the concept of riding waves - both literal and metaphorical -
                representing the ups and downs of crypto markets and the community&apos;s journey together.
              </p>
            </GlassCard>

            <GlassCard title="Problem Statement" className="mt-6">
              <p className="text-sm text-cyan-50/90 leading-relaxed mb-4">Many meme tokens suffer from:</p>
              <ul className="text-sm text-cyan-50/90 space-y-2">
                <li>• Unfair token distribution favoring insiders</li>
                <li>• High taxes that discourage trading</li>
                <li>• Lack of real utility beyond speculation</li>
                <li>• Centralized control and rug pull risks</li>
                <li>• Short-term focus without sustainable growth</li>
              </ul>
            </GlassCard>
          </div>

          <div>
            <GlassCard title="CVIBE Solution">
              <p className="text-sm text-cyan-50/90 leading-relaxed mb-4">CVIBE addresses these issues through:</p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-cyan-400/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-cyan-400 text-sm">🌊</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-cyan-100 mb-1">Fair Launch</h5>
                    <p className="text-xs text-cyan-50/80">
                      No presale, no team allocation. Everyone starts on equal footing.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-cyan-400/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-cyan-400 text-sm">💎</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-cyan-100 mb-1">Zero Taxes</h5>
                    <p className="text-xs text-cyan-50/80">No buy or sell taxes, maximizing value for holders.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-cyan-400/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-cyan-400 text-sm">🎮</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-cyan-100 mb-1">Real Utility</h5>
                    <p className="text-xs text-cyan-50/80">
                      Gaming, NFTs, staking, and governance create lasting value.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-cyan-400/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-cyan-400 text-sm">🔒</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-cyan-100 mb-1">Security First</h5>
                    <p className="text-xs text-cyan-50/80">Locked liquidity, renounced contract, and audited code.</p>
                  </div>
                </div>
              </div>
            </GlassCard>

            <div className="mt-6">
              <Image
                src="/placeholder.svg?height=300&width=400&text=CVIBE+Ecosystem"
                alt="CVIBE Ecosystem Overview"
                width={400}
                height={300}
                className="w-full rounded-xl border border-cyan-300/40 bg-cyan-50/10"
              />
            </div>
          </div>
        </div>
      </WhitepaperSection>

      {/* Technology */}
      <WhitepaperSection id="technology" title="Technology Architecture">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <GlassCard title="Smart Contract Design">
              <p className="text-sm text-cyan-50/90 leading-relaxed mb-4">
                CVIBE is built on a robust ERC-20 smart contract optimized for gas efficiency and security. The contract
                implements industry best practices and has been audited by leading security firms.
              </p>

              <h5 className="font-semibold text-cyan-100 mb-3">Key Features:</h5>
              <ul className="text-sm text-cyan-50/90 space-y-2 mb-4">
                <li>• Gas-optimized transfers and approvals</li>
                <li>• No hidden functions or backdoors</li>
                <li>• Immutable supply cap of 1 billion tokens</li>
                <li>• Standard ERC-20 compatibility</li>
                <li>• Emergency pause functionality (renounced)</li>
              </ul>

              <div className="bg-black/30 rounded-lg p-4 border border-cyan-400/20">
                <h6 className="font-semibold text-cyan-100 mb-2">Contract Address</h6>
                <code className="text-xs text-cyan-200 break-all">
                  0x7x8y9z1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t
                </code>
              </div>
            </GlassCard>
          </div>

          <div>
            <GlassCard title="Blockchain Infrastructure">
              <p className="text-sm text-cyan-50/90 leading-relaxed mb-4">
                CVIBE leverages Ethereum&apos;s proven infrastructure while planning for multi-chain expansion to
                provide users with choice and flexibility.
              </p>

              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-cyan-100 mb-2">Current Deployment</h5>
                  <div className="bg-green-500/10 border border-green-400/30 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      <span className="text-sm font-semibold text-green-400">Ethereum Mainnet</span>
                    </div>
                    <p className="text-xs text-cyan-50/80">Primary deployment with full functionality and liquidity</p>
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold text-cyan-100 mb-2">Planned Expansions</h5>
                  <div className="space-y-2">
                    <div className="bg-yellow-500/10 border border-yellow-400/30 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                        <span className="text-sm font-semibold text-yellow-400">Polygon</span>
                      </div>
                      <p className="text-xs text-cyan-50/80">Q2 2025 - Lower fees for gaming</p>
                    </div>

                    <div className="bg-blue-500/10 border border-blue-400/30 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        <span className="text-sm font-semibold text-blue-400">Arbitrum</span>
                      </div>
                      <p className="text-xs text-cyan-50/80">Q3 2025 - DeFi integrations</p>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </WhitepaperSection>

      {/* Governance */}
      <WhitepaperSection id="governance" title="Governance Model">
        <GlassCard title="Decentralized Autonomous Organization (DAO)">
          <p className="text-cyan-50/90 leading-relaxed mb-6">
            CVIBE will transition to a fully decentralized governance model through a DAO structure, giving token
            holders direct control over the project&apos;s future direction.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-semibold text-cyan-100 mb-4">Governance Rights</h4>
              <ul className="text-sm text-cyan-50/90 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></span>
                  <div>
                    <strong>Proposal Creation:</strong> Holders with 1M+ CVIBE can create proposals
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></span>
                  <div>
                    <strong>Voting Power:</strong> 1 CVIBE = 1 vote on all proposals
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></span>
                  <div>
                    <strong>Treasury Control:</strong> Community controls development funds
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></span>
                  <div>
                    <strong>Feature Decisions:</strong> Vote on new features and partnerships
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-cyan-100 mb-4">Proposal Types</h4>
              <div className="space-y-3">
                <div className="bg-purple-500/10 border border-purple-400/30 rounded-lg p-3">
                  <h5 className="font-semibold text-purple-400 mb-1">Development Proposals</h5>
                  <p className="text-xs text-cyan-50/80">New features, integrations, and technical improvements</p>
                </div>

                <div className="bg-indigo-500/10 border border-indigo-400/30 rounded-lg p-3">
                  <h5 className="font-semibold text-indigo-400 mb-1">Treasury Proposals</h5>
                  <p className="text-xs text-cyan-50/80">
                    Funding allocation for marketing, partnerships, and development
                  </p>
                </div>

                <div className="bg-cyan-500/10 border border-cyan-400/30 rounded-lg p-3">
                  <h5 className="font-semibold text-cyan-400 mb-1">Community Proposals</h5>
                  <p className="text-xs text-cyan-50/80">Events, contests, and community initiatives</p>
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </WhitepaperSection>

      {/* Security */}
      <WhitepaperSection id="security" title="Security & Audits">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <GlassCard title="Security Measures">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-400 text-sm">✓</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-cyan-100 mb-1">Contract Audit</h5>
                    <p className="text-sm text-cyan-50/80">
                      Comprehensive security audit by CertiK with zero critical issues found.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-400 text-sm">✓</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-cyan-100 mb-1">Liquidity Lock</h5>
                    <p className="text-sm text-cyan-50/80">
                      100% of liquidity tokens locked permanently using Unicrypt.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-400 text-sm">✓</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-cyan-100 mb-1">Ownership Renounced</h5>
                    <p className="text-sm text-cyan-50/80">
                      Contract ownership renounced, preventing any malicious changes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-400 text-sm">✓</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-cyan-100 mb-1">No Mint Function</h5>
                    <p className="text-sm text-cyan-50/80">
                      Supply is fixed at 1 billion tokens with no ability to create more.
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          <div>
            <GlassCard title="Audit Results">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full border border-green-400/30">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span className="font-semibold">AUDIT PASSED</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-black/30 rounded-lg p-4 border border-cyan-400/20">
                  <h5 className="font-semibold text-cyan-100 mb-2">Audit Summary</h5>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-cyan-200/70">Critical Issues</div>
                      <div className="font-bold text-green-400">0</div>
                    </div>
                    <div>
                      <div className="text-cyan-200/70">High Issues</div>
                      <div className="font-bold text-green-400">0</div>
                    </div>
                    <div>
                      <div className="text-cyan-200/70">Medium Issues</div>
                      <div className="font-bold text-yellow-400">2</div>
                    </div>
                    <div>
                      <div className="text-cyan-200/70">Low Issues</div>
                      <div className="font-bold text-blue-400">3</div>
                    </div>
                  </div>
                  <p className="text-xs text-cyan-50/80 mt-3">
                    All medium and low issues have been resolved in the final contract.
                  </p>
                </div>

                <Button3D color="purple" className="w-full">
                  View Full Audit Report
                </Button3D>
              </div>
            </GlassCard>
          </div>
        </div>
      </WhitepaperSection>

      {/* Conclusion */}
      <WhitepaperSection id="conclusion" title="Conclusion">
        <GlassCard>
          <p className="text-cyan-50/90 leading-relaxed mb-6">
            CVIBE represents more than just another meme token - it&apos;s a comprehensive ecosystem designed to provide
            lasting value to its community while maintaining the fun and engaging spirit that makes meme culture
            special.
          </p>

          <p className="text-cyan-50/90 leading-relaxed mb-6">
            Through fair tokenomics, robust security measures, innovative utility features, and community-driven
            governance, CVIBE is positioned to become a leading force in the next generation of meme tokens.
          </p>

          <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-indigo-500/10 border border-cyan-400/30 rounded-lg p-6">
            <h4 className="font-semibold text-cyan-100 mb-4 text-center">Join the Wave</h4>
            <p className="text-sm text-cyan-50/90 text-center mb-6">
              Be part of the CVIBE community and help shape the future of ocean-themed DeFi.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row justify-center">
              <Button3D href="/tokenomics" color="purple">
                View Tokenomics
              </Button3D>
              <Button3D href="/community" color="indigo">
                Join Community
              </Button3D>
              <WalletConnectButton color="cyan" />
            </div>
          </div>
        </GlassCard>
      </WhitepaperSection>

      {/* Footer */}
      <footer className="border-t border-cyan-300/20 bg-transparent">
        <div className="container px-4 md:px-6">
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
  )
}
