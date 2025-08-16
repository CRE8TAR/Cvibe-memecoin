import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "@/components/section-wrapper";
import SimpleHeading from "@/components/simple-heading";
import SimpleButton from "@/components/simple-button";
import WalletConnectButton from "@/components/wallet-connect-button";
import SimpleCard from "@/components/simple-card";

function SocialLink({
  href,
  label,
  description,
}: {
  href: string;
  label: string;
  description: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative rounded-xl border border-cyan-300/60 bg-gradient-to-br from-cyan-50/10 to-blue-50/5 backdrop-blur-xl p-6 shadow-lg transition-all duration-300 hover:border-cyan-300/80 hover:shadow-xl hover:scale-105 hover:bg-cyan-50/20"
    >
      <div className="flex items-center gap-4 mb-3">
        <div>
          <h3 className="font-bold text-cyan-100 text-lg">{label}</h3>
          <p className="text-cyan-200/80 text-sm">{description}</p>
        </div>
      </div>
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </a>
  );
}

export default function CommunityPage() {
  return (
    <main className="relative min-h-screen text-white">
      {/* Hero Section */}
      <SectionWrapper
        id="community-hero"
        className="h-[60vh] min-h-[420px] flex items-center"
        contentClassName="h-full flex items-center justify-center text-center"
      >
        <div className="max-w-4xl">
          <SimpleHeading text="Join the CVIBE Community" className="block" />
          <h1 className="sr-only">Join the CVIBE Community</h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-cyan-50/90 leading-relaxed">
            Connect with fellow CVIBE holders, share memes, participate in
            events, and help shape the future of our ocean-themed memecoin
            community.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center">
            <WalletConnectButton color="indigo" />
            <SimpleButton href="/" color="purple">
              Back to Home
            </SimpleButton>
          </div>
        </div>
      </SectionWrapper>

      {/* Main Community Content */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            {/* Left Side - Community Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-cyan-100 mb-8 text-center">
                  Connect With Us
                </h2>
                <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
                  <SocialLink
                    href="https://twitter.com/cvibe_official"
                    label="Twitter / X"
                    description="Latest updates, announcements, and memes"
                  />
                  <SocialLink
                    href="https://t.me/cvibe_community"
                    label="Telegram"
                    description="Real-time chat with the community"
                  />
                  <SocialLink
                    href="https://discord.gg/cvibe"
                    label="Discord"
                    description="Gaming, events, and voice chats"
                  />
                  <SocialLink
                    href="https://reddit.com/r/cvibe"
                    label="Reddit"
                    description="Discussions, AMAs, and community posts"
                  />
                </div>
              </div>

              <SimpleCard title="Community Guidelines">
                <ul className="space-y-2 text-sm">
                  <li>• Be respectful and welcoming to all members</li>
                  <li>• Share quality memes and ocean-themed content</li>
                  <li>• Help newcomers understand CVIBE and DeFi</li>
                  <li>• No spam, scams, or financial advice</li>
                  <li>• Keep discussions fun and positive</li>
                </ul>
              </SimpleCard>

              <SimpleCard title="Community Rewards">
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    <span>Participate in weekly meme contests</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    <span>Earn rewards for community contributions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    <span>Get early access to new features</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    <span>Join exclusive ocean-themed events</span>
                  </div>
                </div>
              </SimpleCard>

              <SimpleCard title="Governance & Voting">
                <p className="text-sm mb-3">
                  CVIBE holders can participate in community governance
                  decisions:
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Vote on new feature proposals</li>
                  <li>• Decide on partnership opportunities</li>
                  <li>• Choose community event themes</li>
                  <li>• Influence tokenomics updates</li>
                </ul>
              </SimpleCard>
            </div>

            {/* Right Side - Community Video */}
            <div className="lg:sticky lg:top-8">
              <div className="bg-cyan-50/10 backdrop-blur-sm rounded-xl border border-cyan-300/40 p-6 shadow-2xl">
                <h3 className="text-xl font-semibold text-cyan-100 mb-4 text-center">
                  Welcome to CVIBE Community
                </h3>

                {/* Video Container */}
                <div className="relative aspect-video rounded-lg overflow-hidden bg-black/50 border border-cyan-300/30">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/watch?v=EIYYXcT4gFs"
                    title="CVIBE Community Introduction"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>

                <div className="mt-4 text-center">
                  <p className="text-cyan-200/80 text-sm">
                    Learn about CVIBE community, our mission, and how to get
                    involved in the ocean-themed meme revolution.
                  </p>
                </div>

                {/* Video Stats */}
                <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                  <div className="bg-black/30 rounded-lg p-3 border border-cyan-400/30">
                    <div className="text-lg font-bold text-cyan-100">12.5K</div>
                    <div className="text-xs text-cyan-200/80">Members</div>
                  </div>
                  <div className="bg-black/30 rounded-lg p-3 border border-cyan-400/30">
                    <div className="text-lg font-bold text-cyan-100">24/7</div>
                    <div className="text-xs text-cyan-200/80">Active Chat</div>
                  </div>
                  <div className="bg-black/30 rounded-lg p-3 border border-cyan-400/30">
                    <div className="text-lg font-bold text-cyan-100">Ocean</div>
                    <div className="text-xs text-cyan-200/80">Vibes</div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="mt-6 text-center">
                  <p className="text-sm text-cyan-200/80 mb-4">
                    Ready to dive into the CVIBE community?
                  </p>
                  <div className="flex gap-3 justify-center">
                    <SimpleButton
                      href="https://t.me/cvibe_community"
                      color="indigo"
                    >
                      Join Telegram
                    </SimpleButton>
                    <SimpleButton
                      href="https://discord.gg/cvibe"
                      color="purple"
                    >
                      Join Discord
                    </SimpleButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Stats Section */}
      <section className="py-16 md:py-24 border-t border-cyan-300/20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-cyan-100 mb-4">
              Community Stats
            </h2>
            <p className="text-cyan-50/90 max-w-2xl mx-auto">
              Join thousands of CVIBE enthusiasts across all platforms
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <SimpleCard className="text-center">
              <div className="text-2xl font-bold text-cyan-100 mb-1">8.2K</div>
              <div className="text-sm text-cyan-200/80">Twitter Followers</div>
            </SimpleCard>

            <SimpleCard className="text-center">
              <div className="text-2xl font-bold text-cyan-100 mb-1">12.5K</div>
              <div className="text-sm text-cyan-200/80">Telegram Members</div>
            </SimpleCard>

            <SimpleCard className="text-center">
              <div className="text-2xl font-bold text-cyan-100 mb-1">6.8K</div>
              <div className="text-sm text-cyan-200/80">Discord Members</div>
            </SimpleCard>

            <SimpleCard className="text-center">
              <div className="text-2xl font-bold text-cyan-100 mb-1">3.1K</div>
              <div className="text-sm text-cyan-200/80">Reddit Subscribers</div>
            </SimpleCard>
          </div>
        </div>
      </section>
      {/* Community Gallery Section */}
      {/* <section className="py-16 md:py-24 border-t border-cyan-300/20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-cyan-100 mb-4">
              Community Gallery
            </h2>
            <p className="text-cyan-50/90 max-w-2xl mx-auto">
              Dive into the ocean vibes with our community-created content and
              memorable moments
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="group relative overflow-hidden rounded-xl border border-cyan-300/40 bg-gradient-to-br from-cyan-50/10 to-blue-50/5 backdrop-blur-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=300&width=400&text=Ocean+Memes"
                  alt="Community Ocean Memes"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg">
                    Ocean Memes Collection
                  </h3>
                  <p className="text-cyan-200 text-sm">
                    Best community-created memes
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-cyan-300/40 bg-gradient-to-br from-cyan-50/10 to-blue-50/5 backdrop-blur-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=300&width=400&text=Community+Events"
                  alt="Community Events"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg">
                    Community Events
                  </h3>
                  <p className="text-cyan-200 text-sm">
                    Highlights from our gatherings
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-cyan-300/40 bg-gradient-to-br from-cyan-50/10 to-blue-50/5 backdrop-blur-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=300&width=400&text=CVIBE+Artwork"
                  alt="CVIBE Community Artwork"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg">
                    Community Artwork
                  </h3>
                  <p className="text-cyan-200 text-sm">
                    Fan art and creative designs
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-cyan-300/40 bg-gradient-to-br from-cyan-50/10 to-blue-50/5 backdrop-blur-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=300&width=400&text=Trading+Success"
                  alt="Trading Success Stories"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg">
                    Success Stories
                  </h3>
                  <p className="text-cyan-200 text-sm">
                    Community trading wins
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-cyan-300/40 bg-gradient-to-br from-cyan-50/10 to-blue-50/5 backdrop-blur-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=300&width=400&text=Ocean+Vibes"
                  alt="Ocean Vibes Content"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg">
                    Ocean Vibes
                  </h3>
                  <p className="text-cyan-200 text-sm">
                    Peaceful ocean moments
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-cyan-300/40 bg-gradient-to-br from-cyan-50/10 to-blue-50/5 backdrop-blur-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=300&width=400&text=Community+Meetups"
                  alt="Community Meetups"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg">
                    Virtual Meetups
                  </h3>
                  <p className="text-cyan-200 text-sm">
                    Online community gatherings
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-cyan-200/80 text-sm mb-4">
              Want to see your content featured here?
            </p>
            <SimpleButton href="https://t.me/cvibe_community" color="indigo">
              Share Your Content
            </SimpleButton>
          </div>
        </div>
      </section> */}

      {/* Event Banner Section */}

      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="relative overflow-hidden rounded-2xl border border-cyan-300/40 shadow-2xl">
            <div className="relative aspect-[1/1] md:aspect-[1/1]">
              <video
                src="/video/communitymeme.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Community Events Section */}
      <section className="py-16 md:py-24 border-t border-cyan-300/20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-cyan-100 mb-4">
              Upcoming Events
            </h2>
            <p className="text-cyan-50/90 max-w-2xl mx-auto">
              Join our regular community events and connect with fellow CVIBE
              enthusiasts
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <a href="/events/meme-contest" className="group">
              <SimpleCard
                title="Weekly Meme Contest"
                className="text-center group-hover:scale-105 transition-transform duration-300"
              >
                <p className="text-sm mb-3">Every Friday at 8PM UTC</p>
                <p className="text-xs">
                  Submit your best ocean-themed memes and win CVIBE rewards!
                </p>
                <div className="mt-4">
                  <SimpleButton color="purple">Join Contest</SimpleButton>
                </div>
              </SimpleCard>
            </a>

            <a href="/events/ama" className="group">
              <SimpleCard
                title="Community AMA"
                className="text-center group-hover:scale-105 transition-transform duration-300"
              >
                <p className="text-sm mb-3">Monthly - First Sunday</p>
                <p className="text-xs">
                  Ask questions directly to the CVIBE team and community
                  leaders.
                </p>
                <div className="mt-4">
                  <SimpleButton color="indigo">Join AMA</SimpleButton>
                </div>
              </SimpleCard>
            </a>

            <a href="/events/trading" className="group">
              <SimpleCard
                title="Trading Discussion"
                className="text-center group-hover:scale-105 transition-transform duration-300"
              >
                <p className="text-sm mb-3">Daily at 2PM UTC</p>
                <p className="text-xs">
                  Share insights, discuss market trends, and learn from
                  experienced traders.
                </p>
                <div className="mt-4">
                  <SimpleButton color="purple">Join Discussion</SimpleButton>
                </div>
              </SimpleCard>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cyan-300/20 bg-transparent">
        <div className="container px-4 md:px-6">
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
          <div className="flex items-center justify-between border-t border-cyan-300/20 py-6 text-xs text-cyan-50/90">
            <p>© {new Date().getFullYear()} CVIBE. All rights reserved.</p>
            <p>Made with love and ocean vibes.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
