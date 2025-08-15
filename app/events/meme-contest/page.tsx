import SimpleHeading from "@/components/simple-heading"
import SimpleButton from "@/components/simple-button"
import SimpleCard from "@/components/simple-card"
import Link from "next/link"

export default function MemeContestPage() {
  return (
    <main className="relative min-h-screen text-white">
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <SimpleHeading text="Weekly Meme Contest" />
            <p className="mt-6 text-lg text-cyan-50/90">
              Submit your best ocean-themed memes and win CVIBE rewards every Friday!
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <SimpleCard title="Contest Rules">
                <ul className="text-left space-y-2 text-sm">
                  <li>• Submit original ocean/beach themed memes</li>
                  <li>• One entry per person per week</li>
                  <li>• Must include CVIBE branding</li>
                  <li>• No offensive or inappropriate content</li>
                  <li>• Voting closes Friday 8PM UTC</li>
                </ul>
              </SimpleCard>

              <SimpleCard title="Prizes">
                <div className="text-left space-y-2 text-sm">
                  <div>1st Place: 1000 CVIBE tokens</div>
                  <div>2nd Place: 500 CVIBE tokens</div>
                  <div>3rd Place: 250 CVIBE tokens</div>
                  <div>Participation: 50 CVIBE tokens</div>
                </div>
              </SimpleCard>
            </div>

            <div className="mt-8 flex gap-4 justify-center">
              <SimpleButton href="https://discord.gg/cvibe" color="purple">
                Submit Entry
              </SimpleButton>
              <SimpleButton href="/community" color="indigo">
                Back to Community
              </SimpleButton>
            </div>
          </div>
        </div>
      </section>
      <footer className="border-t border-cyan-300/20 bg-transparent mt-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-wrap items-center gap-4 py-8 text-sm">
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
          <div className="flex items-center justify-between border-t border-cyan-300/20 py-6 text-xs text-cyan-50/90">
            <p>&copy; {new Date().getFullYear()} CVIBE. All rights reserved.</p>
            <p>Made with love and ocean vibes.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
