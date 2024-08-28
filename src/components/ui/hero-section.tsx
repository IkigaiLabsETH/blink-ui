// components/HeroSection.tsx

import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="container flex flex-col items-center justify-center space-y-6 bg-sand py-16 text-center dark:bg-transparent md:py-24"
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-black dark:text-white drop-shadow-lg">
        Unlock the Power of Solana with BARK Actions & Blinks
      </h1>
      <p className="max-w-2xl text-lg leading-relaxed text-grey sm:text-xl sm:leading-8">
        Dive into a wide range of actions that leverage the speed and security of the Solana blockchain. From managing tokens to participating in governance, explore how BARK Actions and Blinks can enhance your blockchain experience.
      </p>
      <div className="flex gap-4">
        <Link href="/get-started" className={cn(buttonVariants({ size: "lg", variant: "primary" }))}>
          Get Started
        </Link>
        <Link href="/learn-more" className={cn(buttonVariants({ size: "lg", variant: "outline" }))}>
          Learn More
        </Link>
      </div>
    </section>
  );
}