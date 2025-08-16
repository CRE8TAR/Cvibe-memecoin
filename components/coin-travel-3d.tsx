"use client";

import { useEffect, useRef } from "react";
import Coin3D from "./coin-3d";

type CoinTravel3DProps = {
  startSelector?: string;
  endSelector?: string;
};

export default function CoinTravel3D({
  startSelector = "#intro",
  endSelector = "footer",
}: CoinTravel3DProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    let frame: number;

    const animate = () => {
      if (!ref.current) return;

      const scroll = window.scrollY;
      const vh = window.innerHeight;
      const vw = window.innerWidth;

      const introSection = document.querySelector(
        startSelector
      ) as HTMLElement | null;
      const footerSection = document.querySelector(
        endSelector
      ) as HTMLElement | null;

      if (!introSection || !footerSection) {
        ref.current.style.opacity = "0";
        frame = requestAnimationFrame(animate);
        return;
      }

      const introTop = introSection.offsetTop;
      const footerTop = footerSection.offsetTop;

      const showAt = introTop - vh * 0.2;
      const hideAt = footerTop + vh * 0.2;

      if (scroll < showAt || scroll > hideAt) {
        ref.current.style.opacity = "0";
        frame = requestAnimationFrame(animate);
        return;
      }

      ref.current.style.opacity = "1";

      const travelStartAt = introTop + vh * 0.3;
      const time = Date.now() / 1000;

      if (scroll < travelStartAt) {
        const floatX = Math.sin(time * 0.8) * 15;
        const floatY = Math.cos(time * 1.0) * 12;
        const coinX = vw * 0.7;
        const coinY = vh * 0.2;

        ref.current.style.left = `${coinX + floatX}px`;
        ref.current.style.top = `${coinY + floatY}px`;
        ref.current.style.transform = "scale(1.3)";
      } else {
        const travelProgress = Math.min(
          1,
          (scroll - travelStartAt) / (hideAt - travelStartAt)
        );
        const startX = vw * 0.7;
        const startY = vh * 0.2;
        const endX = vw * 0.3;
        const endY = vh * 0.5;

        const controlX = startX - vw * 0.3;
        const controlY = startY + vh * 0.2;

        const t = travelProgress;
        const oneMinusT = 1 - t;

        const currentX =
          oneMinusT * oneMinusT * startX +
          2 * oneMinusT * t * controlX +
          t * t * endX;
        const currentY =
          oneMinusT * oneMinusT * startY +
          2 * oneMinusT * t * controlY +
          t * t * endY;

        const clampedX = Math.max(50, Math.min(vw - 250, currentX));
        const clampedY = Math.max(50, Math.min(vh - 250, currentY));

        const floatX = Math.sin(time * 1.2) * 8;
        const floatY = Math.cos(time * 1.4) * 6;

        let opacity = 1;
        let scale = 1.3;

        if (travelProgress > 0.85) {
          const fadeProgress = (travelProgress - 0.85) / 0.15;
          opacity = Math.max(0, 1 - fadeProgress * 4);
          scale = 1.3 - fadeProgress * 1.0;
        }

        ref.current.style.left = `${clampedX + floatX}px`;
        ref.current.style.top = `${clampedY + floatY}px`;
        ref.current.style.opacity = opacity.toString();
        ref.current.style.transform = `scale(${scale})`;
      }

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [startSelector, endSelector]);

  return (
    <div
      ref={ref}
      className="fixed pointer-events-none"
      style={{
        width: "200px",
        height: "200px",
        opacity: 0,
        zIndex: 95,
        transform: "scale(1.3)",
      }}
    >
      <Coin3D
        spinSpeed={2.6}
        metalness={0.95}
        roughness={0.15}
        frontImage="/images/cvibecoin.png"
        backImage="/images/cvibecoin.png"
      />
    </div>
  );
}
