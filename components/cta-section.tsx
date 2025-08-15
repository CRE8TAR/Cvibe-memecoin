import BuyCryptoButton from "./buy-crypto-button"
import BuyDebitButton from "./buy-debit-button"
import GlassCard from "./glass-card"
import Heading3D from "./heading-3d-css"

export default function CTASection() {
  return (
    <section className="relative w-full py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6">
            <Heading3D text="Ready to Ride the Wave?" />
            <h2 className="sr-only">Ready to Ride the Wave?</h2>
          </div>
          <p className="mt-4 text-lg text-cyan-50/90">
            Join the CVIBE community and be part of the next-gen meme revolution.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <BuyDebitButton />
            <BuyCryptoButton />
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <GlassCard title="Join Community">
            Connect with fellow CVIBE holders, share memes, and stay updated on the latest developments.
          </GlassCard>
          <GlassCard title="Track Progress">
            Follow our roadmap, tokenomics updates, and partnership announcements as we grow together.
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
