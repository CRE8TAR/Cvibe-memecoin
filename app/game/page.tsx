import Game3D from "@/components/game-3d";
import SimpleHeading from "@/components/simple-heading";
import SimpleButton from "@/components/simple-button";

export default function GamePage() {
  return (
    <main className="relative min-h-screen text-white">
      {/* Game Hero - Adjusted height and padding */}
      <section className="h-auto min-h-[180px] flex items-center justify-center px-4 py-8">
        <div className="max-w-4xl text-center w-full px-4">
          <SimpleHeading text="CVIBE Baseball Game" className="block" />
          <h1 className="sr-only">CVIBE Head Shot Game</h1>
          <p className="mt-4 text-base text-cyan-50/90">
            Hit the target's head to earn CVIBE coins! Miss the head and it's
            game over.
          </p>
          <div className="mt-6">
            <SimpleButton href="/" color="purple">
              Back to Home
            </SimpleButton>
          </div>
        </div>
      </section>

      {/* Game Area - Adjusted height */}
      <section className="py-4 px-4">
        <div className="w-full h-[65vh] min-h-[500px]">
          <Game3D />
        </div>
      </section>

      {/* Game Instructions */}
      <section className="py-8 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-cyan-50/10 backdrop-blur-sm rounded-xl border border-cyan-300/40 p-6">
            <h3 className="text-lg font-semibold text-cyan-100 mb-4">
              How to Play
            </h3>
            <ul className="text-sm text-cyan-50/90 space-y-2 text-left">
              <li>• Click and drag to aim the baseball</li>
              <li>• Release to throw at the target character</li>
              <li>• Hit the head to earn coins and points</li>
              <li>• Miss the head = Game Over</li>
              <li>• Collect as many CVIBE coins as possible!</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
