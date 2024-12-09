import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Button } from "@/components/ui/button"
import { AnimatedHeroContent } from "@/components/animated-hero-content"
import { WhoWeWorkWith } from "@/components/who-we-work-with"
import { AnimatedQuoteSection } from "@/components/animated-quote-section"
import { OrchestatingMassPerception } from "@/components/orchestrating-mass-perception"
import { WhoWeAreSection } from "@/components/who-we-are-section"
import { ConcludingSection } from "@/components/concluding-section"
import { CoreComponents } from "@/components/core-components"
import { VisionFlywheel } from "@/components/vision-flywheel"
import { TimelineProcess } from "@/components/timeline-process"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Sorenborn - Strategic Communications for Industry-Defining Companies</title>
        <meta name="description" content="Sorenborn crafts worldviews and narratives for the world's most important companies." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`min-h-screen bg-white text-gray-900 ${geistSans.variable} ${geistMono.variable}`}>
        <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-200">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="relative h-12 w-48">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SORENBORN-Logo%20-%20Large%20(1)-XE9rhs74QUH3JGrJHSVDlcrbHlZ3Fa.png"
                alt="Sorenborn"
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
            <nav className="hidden lg:block">
              <ul className="flex space-x-8">
                <li><a href="#vision" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Vision</a></li>
                <li><a href="#who-we-work-with" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Who We Work With</a></li>
                <li><a href="#how-we-work" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">How We Work</a></li>
                <li><a href="#who-we-are" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Who We Are</a></li>
              </ul>
            </nav>
          </div>
        </header>

        <main className="pt-20">
          <section className="min-h-[90vh] flex items-center bg-white text-gray-900 relative overflow-hidden">
            <div className="container mx-auto px-4 py-20 relative z-10">
              <AnimatedHeroContent />
            </div>
          </section>

          <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 text-center text-blue-900">The Brutal Reality</h2>
              <div className="max-w-4xl mx-auto text-center mb-16">
                <p className="text-2xl md:text-3xl text-gray-700">
                  Sadly, most companies never pull this off. They have frontier tech, a good story, ambitious plans – and still fail. Because they can't make others see the future.
                </p>
              </div>
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-3xl font-semibold mb-8">Eventually, the best founders realize:</p>
                <p className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-900">Brilliance alone won't save you.</p>
                <p className="text-3xl mb-8">Only two questions matter:</p>
                <ol className="text-3xl font-semibold space-y-4">
                  <li className="text-blue-600">1. Can you sell your vision?</li>
                  <li className="text-blue-600">2. And can you execute it?</li>
                </ol>
              </div>
            </div>
          </section>

          <WhoWeWorkWith />
          <VisionFlywheel />
          <OrchestatingMassPerception />
          <AnimatedQuoteSection />
          <TimelineProcess />
          <CoreComponents />
          <WhoWeAreSection />
          <ConcludingSection showGetInTouch={true} />
        </main>

        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; {new Date().getFullYear()} Sorenborn. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  )
}

