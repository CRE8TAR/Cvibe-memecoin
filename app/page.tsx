import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "@/components/section-wrapper";
import Heading3D from "@/components/heading-3d-css";
import Button3D from "@/components/button-3d";
import CoinTravel3D from "@/components/coin-travel-3d";
import FooterCoin3D from "@/components/footer-coin-3d";
import BuyCryptoButton from "@/components/buy-crypto-button";
import BuyDebitButton from "@/components/buy-debit-button";
import ContractAddress from "@/components/contract-address";
import CTASection from "@/components/cta-section";
import GlassCard from "@/components/glass-card";

function SocialMediaCard({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative rounded-xl border border-cyan-300/60 bg-gradient-to-br from-cyan-50/10 to-blue-50/5 backdrop-blur-xl p-6 shadow-lg transition-all duration-300 hover:border-cyan-300/80 hover:shadow-xl hover:scale-105 hover:bg-cyan-50/20"
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative z-10">
        <h3 className="font-bold text-cyan-100 text-lg mb-2">{title}</h3>
        <p className="text-cyan-200/80 text-sm">{description}</p>
      </div>
    </a>
  );
}

export default function Page() {
  return (
    <main className="relative min-h-screen text-white">
      <CoinTravel3D startSelector="#intro" endSelector="footer" />

      <SectionWrapper
        id="hero"
        className="h-screen min-h-[560px] flex items-center"
        contentClassName="h-full flex items-center justify-center text-center"
      >
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/60 bg-cyan-100/10 px-4 py-2 text-sm text-cyan-100 backdrop-blur-sm">
            Next gen Meme Token on the Waves
          </div>

          <div className="mt-8">
            <Heading3D text="Ride the Meme Wave" />
            <h1 className="sr-only">Ride the Meme Wave</h1>
          </div>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-cyan-50/90 leading-relaxed">
            The community-powered token making waves. Built for speed, fairness
            and fun with ocean-sized memes and good vibes. Join the movement and
            ride the tide of decentralization.
          </p>

          <div className="mt-6 text-center">
            <p className="text-lg text-cyan-100 font-semibold">
              Buy Now with a Debit Card or Crypto!
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center">
            <BuyDebitButton />
            <BuyCryptoButton />
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row justify-center">
            <Button3D href="/game">Play CVIBE Game</Button3D>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="intro" className="py-20 md:py-28">
        <div className="mb-12 text-center">
          <Heading3D text="What is CVIBE?" />
          <h2 className="sr-only">What is CVIBE?</h2>
        </div>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-lg text-cyan-50/90 leading-relaxed">
              CVIBE token is a next-gen meme coin engineered for virality, speed
              and community rewards. Crafted with modern token standards,
              transparent tokenomics and zero team dump mechanics.
            </p>
            <ul className="mt-8 space-y-4 text-base">
              <li className="flex items-start gap-3">
                <span className="mt-2 inline-block h-2 w-2 rounded-full bg-cyan-400" />
                <span className="text-cyan-50/90">
                  Fair launch, LP locked and renounced mint community first from
                  day one.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 inline-block h-2 w-2 rounded-full bg-cyan-400" />
                <span className="text-cyan-50/90">
                  Optimized contract for low gas and high throughput.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 inline-block h-2 w-2 rounded-full bg-cyan-400" />
                <span className="text-cyan-50/90">
                  Rewards, quests and viral friendly referral drops.
                </span>
              </li>
            </ul>
          </div>
          <div>
            <Image
              src="/images/coinmeme.jpg"
              width={560}
              height={480}
              alt="CVIBE Visual"
              className="mx-auto aspect-video rounded-xl object-cover ring-1 ring-cyan-300/40 bg-cyan-50/10 backdrop-blur-sm shadow-2xl"
            />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="about" className="py-20 md:py-28">
        <div className="mb-12 text-center">
          <Heading3D text="About" />
          <h2 className="sr-only">About</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <GlassCard title="Vision">
            Empower a global beach loving community to create culture. Fun,
            transparent and unstoppable.
          </GlassCard>
          <GlassCard title="Tokenomics">
            1,000,000,000 supply • 0% tax • LP locked • No presale • Renounced
            mint. Simple. Fair. Clean.
          </GlassCard>
          <GlassCard title="Chain">
            Deployed on a fast, low fee L1/L2. Verified contract and open
            analytics for full transparency.
          </GlassCard>
        </div>
      </SectionWrapper>

      <SectionWrapper id="community" className="py-20 md:py-28">
        <div className="mb-12 text-center">
          <Heading3D text="Join Our Community" />
          <h2 className="sr-only">Join Our Community</h2>
          <p className="mt-4 text-lg text-cyan-50/90 max-w-2xl mx-auto">
            Connect with thousands of CVIBE enthusiasts across all platforms.
            Share memes, get updates, and be part of the ocean-themed
            revolution.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <SocialMediaCard
            href="https://twitter.com/cvibe_official"
            title="Twitter / X"
            description="Latest updates, announcements, and community highlights"
          />
          <SocialMediaCard
            href="https://t.me/cvibe_community"
            title="Telegram"
            description="Real-time chat, support, and community discussions"
          />
          <SocialMediaCard
            href="https://discord.gg/cvibe"
            title="Discord"
            description="Gaming events, voice chats, and exclusive channels"
          />
          <SocialMediaCard
            href="https://reddit.com/r/cvibe"
            title="Reddit"
            description="In-depth discussions, AMAs, and community posts"
          />
        </div>
        <div className="mt-10 text-center">
          <Button3D href="/community">Explore Full Community</Button3D>
        </div>
      </SectionWrapper>

      <SectionWrapper id="how-to-buy" className="py-20 md:py-28">
        <div className="mb-12 text-center">
          <Heading3D text="How to Buy" />
          <h2 className="sr-only">How to Buy</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <GlassCard title="1. Choose Payment Method">
            Buy directly with your debit card for instant purchase, or use
            crypto from your wallet for lower fees.
          </GlassCard>
          <GlassCard title="2. Complete Purchase">
            Follow the secure checkout process. Debit card purchases are
            processed instantly through our partners.
          </GlassCard>
          <GlassCard title="3. Receive CVIBE">
            Your CVIBE tokens will be sent directly to your wallet. Start riding
            the wave immediately!
          </GlassCard>
        </div>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <BuyDebitButton />
          <BuyCryptoButton />
        </div>
      </SectionWrapper>

      <SectionWrapper id="contract-address" className="py-20 md:py-28">
        <div className="mb-12 text-center">
          <Heading3D text="Contract Address" />
          <h2 className="sr-only">Contract Address</h2>
        </div>
        <div className="max-w-2xl mx-auto">
          <ContractAddress />
        </div>
      </SectionWrapper>

      <SectionWrapper id="why-cvibe" className="py-20 md:py-28">
        <div className="mb-12 text-center">
          <Heading3D text="Why CVIBE?" />
          <h2 className="sr-only">Why CVIBE?</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <GlassCard title="Fair Launch">
            No presales or team allocations. Everyone surfs the same wave.
          </GlassCard>
          <GlassCard title="Security First">
            Audited contract, LP locked and transparent analytics.
          </GlassCard>
          <GlassCard title="Low Fees">
            Gas-optimized contract means more memes and fewer fees.
          </GlassCard>
          <GlassCard title="Community Rewards">
            Quests, drops and incentives for active contributors.
          </GlassCard>
          <GlassCard title="Partnerships">
            Collaborations with brands, artists and communities.
          </GlassCard>
          <GlassCard title="Open & Transparent">
            Open-source and clear roadmap with governance.
          </GlassCard>
        </div>
      </SectionWrapper>

      <CTASection />

      <footer className="border-t border-cyan-300/20 bg-transparent">
        <div className="container px-4 md:px-6">
          <div className="py-8">
            <FooterCoin3D />
          </div>
          <div className="flex flex-wrap items-center gap-4 py-10 md:flex-row md:items-center md:justify-between">
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
                className="text-cyan-100 hover:text-cyan-200 hover:underline underline-offset-4 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/tokenomics"
                className="text-cyan-100 hover:text-cyan-200 hover:underline underline-offset-4 transition-colors"
              >
                Tokenomics
              </Link>
              <Link
                href="/whitepaper"
                className="text-cyan-100 hover:text-cyan-200 hover:underline underline-offset-4 transition-colors"
              >
                Whitepaper
              </Link>
              <Link
                href="/roadmap"
                className="text-cyan-100 hover:text-cyan-200 hover:underline underline-offset-4 transition-colors"
              >
                Roadmap
              </Link>
              <Link
                href="/community"
                className="text-cyan-100 hover:text-cyan-200 hover:underline underline-offset-4 transition-colors"
              >
                Community
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-between border-t border-purple-300/20 py-6 text-xs text-cyan-50/90">
            <p>© {new Date().getFullYear()} CVIBE. All rights reserved.</p>
            <p>Made for Fun and Meme vibes.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
