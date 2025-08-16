import Image from "next/image"
import Link from "next/link"
import SectionWrapper from "@/components/section-wrapper"
import Heading3D from "@/components/heading-3d-css"
import Button3D from "@/components/button-3d"
import WalletConnectButton from "@/components/wallet-connect-button"
import FooterCoin3D from "@/components/footer-coin-3d"
import GlassCard from "@/components/glass-card"
import AppProviders from "@/components/app-providers"

export default function RoadmapPage() {
  return (
    <AppProviders>
      <main className="relative min-h-[100dvh] text-cyan-100">
        {/* Hero */}
        <SectionWrapper
          id="roadmap-hero"
          className="h-[60vh] min-h-[460px] flex items-center"
          contentClassName="h-full flex items-center justify-center text-center"
        >
          <div className="max-w-4xl">
            <Heading3D text="Roadmap" className="block" />
            <h1 className="sr-only">Roadmap</h1>
            <p className="mt-4 max-w-2xl mx-auto text-base text-cyan-200 md:text-lg">
              Shipping in public. Iterating with the community. Here&apos;s how CVIBE grows from wave to wave.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row justify-center">
              <Button3D href="/tokenomics" color="purple">
                See Tokenomics
              </Button3D>
              <WalletConnectButton color="indigo" />
            </div>
          </div>
        </SectionWrapper>

        {/* Phases */}
        <section className="relative py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-3">
              <GlassCard title="Phase 1 — Launch">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Fair launch, LP locked, contract verification</li>
                  <li>Website v1, social channels live</li>
                  <li>Community quests and first giveaways</li>
                </ul>
              </GlassCard>
              <GlassCard title="Phase 2 — Growth">
                <ul className="list-disc pl-5 space-y-2">
                  <li>DEX liquidity boosts and partnerships</li>
                  <li>Memetic campaigns and creator collaborations</li>
                  <li>Listing on analytics/trackers</li>
                </ul>
              </GlassCard>
              <GlassCard title="Phase 3 — Expansion">
                <ul className="list-disc pl-5 space-y-2">
                  <li>CEX outreach, multi-chain exploration</li>
                  <li>Community governance experiments</li>
                  <li>Ecosystem grants and events</li>
                </ul>
              </GlassCard>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <GlassCard title="Security & Trust">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Audits and transparency</li>
                  <li>Open-source components</li>
                  <li>Ongoing monitoring</li>
                </ul>
              </GlassCard>
              <GlassCard title="Community">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Creator onboarding</li>
                  <li>Referral rewards</li>
                  <li>IRL meetups and online AMAs</li>
                </ul>
              </GlassCard>
              <GlassCard title="Build & Iterate">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Feature experiments</li>
                  <li>Performance improvements</li>
                  <li>Tooling and docs</li>
                </ul>
              </GlassCard>
            </div>

            <div className="mt-10 grid items-center gap-10 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold text-cyan-100">Join the journey</h3>
                <p className="mt-4 text-cyan-200">
                  CVIBE evolves with its community. Share ideas, propose features, and ride the wave with us.
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <WalletConnectButton color="indigo" />
                  <Button3D href="/" color="purple">
                    Back to Home
                  </Button3D>
                </div>
              </div>
              <div>
                <Image
                  src="public/images/cvibecoin.png"
                  alt="Roadmap Milestones"
                  width={560}
                  height={420}
                  className="mx-auto aspect-video rounded-xl object-cover ring-1 ring-purple-300/60 bg-purple-50/70 backdrop-blur"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-purple-300/30 bg-transparent">
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
                  <p className="text-xs text-cyan-200">Ride the meme wave responsibly.</p>
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
            <div className="flex items-center justify-between border-t border-purple-300/20 py-6 text-xs text-cyan-200">
              <p>&copy; {new Date().getFullYear()} CVIBE. All rights reserved.</p>
              <p>Made for Fun and Meme vibes.</p>
            </div>
          </div>
        </footer>
      </main>
    </AppProviders>
  )
}
