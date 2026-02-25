"use client"

import Image from "next/image"

interface CardProps {
  className?: string
}

export function ClassicCard({ className }: CardProps) {
  return (
    <div className={`aspect-[1.75/1] rounded-xl shadow-2xl overflow-hidden ${className}`}>
      <div className="w-full h-full bg-gradient-to-br from-[#f7e9d7] to-[#f3c98b] flex flex-col justify-between p-8 relative overflow-hidden">
        {/* Elegant gold top border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#e6b800] via-[#ffd700] to-[#e6b800]" />

        {/* Logo and brand */}
        <div className="relative z-10 flex items-start justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-serif font-extrabold text-[#1a1614] tracking-tight leading-none drop-shadow-lg">
              The Self Bakery
            </h1>
            <p className="text-xs text-[#bfa14a] tracking-[0.25em] uppercase mt-2 font-sans font-semibold">
              Crafted with Belgian Passion
            </p>
          </div>
          <div className="w-14 h-14 md:w-16 md:h-16 relative flex-shrink-0">
            <Image
              src="/images/self-bakery-logo.jpeg"
              alt="The Self Bakery logo"
              fill
              className="object-contain rounded-full border-2 border-[#ffd700] shadow-lg"
            />
          </div>
        </div>

        {/* Contact details */}
        <div className="relative z-10">
          <div className="w-16 h-1 bg-gradient-to-r from-[#ffd700] via-[#e6b800] to-[#ffd700] mb-4 rounded-full" />
          <p className="text-xs text-[#bfa14a] font-sans uppercase tracking-wider mb-1 font-bold">
            Artisan Chocolatier
          </p>
          <p className="text-lg font-extrabold text-[#1a1614] font-serif">
            Elise De Smet
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
            <p className="text-xs text-[#7c6a4d] font-sans">hello@selfbakery.be</p>
            <p className="text-xs text-[#7c6a4d] font-sans">+32 3 555 1234</p>
          </div>
          <p className="text-xs text-[#bfa14a] font-sans mt-1 font-semibold">Antwerp, Belgium</p>
        </div>
      </div>
    </div>
  )
}

export function DarkCard({ className }: CardProps) {
  return (
    <div className={`aspect-[1.75/1] rounded-xl shadow-2xl overflow-hidden ${className}`}>
      <div className="w-full h-full bg-gradient-to-br from-[#1a1614] to-[#3a2c1a] flex relative overflow-hidden">
        {/* Left panel */}
        <div className="w-2/5 bg-gradient-to-b from-[#ffd700] to-[#bfa14a] p-6 md:p-8 flex flex-col justify-between relative">
          <div className="w-12 h-12 md:w-14 md:h-14 relative">
            <Image
              src="/images/self-bakery-logo.jpeg"
              alt="The Self Bakery logo"
              fill
              className="object-contain rounded-full border-2 border-[#fff7c2] shadow-lg"
            />
          </div>
          <div>
            <p className="text-xs text-[#1a1614]/80 font-sans uppercase tracking-wider font-bold">Since 2024</p>
          </div>
        </div>

        {/* Right panel */}
        <div className="w-3/5 p-6 md:p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-serif font-extrabold text-[#fff7c2] leading-tight drop-shadow-lg">
              The Self<br />Bakery
            </h1>
            <p className="text-xs text-[#ffd700] tracking-[0.2em] uppercase mt-2 font-sans font-semibold">
              Belgian Chocolate Dreams
            </p>
          </div>

          <div>
            <p className="text-xs text-[#fff7c2]/90 font-sans uppercase tracking-wider mb-1 font-bold">
              Head of Creation
            </p>
            <p className="text-sm font-extrabold text-[#ffd700] font-serif">
              Luc Van Hout
            </p>
            <p className="text-xs text-[#fff7c2]/70 font-sans mt-2">
              luc@selfbakery.be
            </p>
            <p className="text-xs text-[#fff7c2]/70 font-sans">
              +32 3 555 5678
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function MinimalCard({ className }: CardProps) {
  return (
    <div className={`aspect-[1.75/1] rounded-xl shadow-2xl overflow-hidden ${className}`}>
      <div className="w-full h-full bg-[#fffbe6] flex flex-col items-center justify-center p-8 relative overflow-hidden">
        {/* Corner gold accents */}
        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#ffd700]" />
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#ffd700]" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#ffd700]" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#ffd700]" />

        {/* Center content */}
        <div className="w-16 h-16 md:w-20 md:h-20 relative mb-4">
          <Image
            src="/images/self-bakery-logo.jpeg"
            alt="The Self Bakery logo"
            fill
            className="object-contain rounded-full border-2 border-[#ffd700]"
          />
        </div>

        <h1 className="text-2xl md:text-3xl font-serif font-extrabold text-[#1a1614] tracking-tight text-center">
          The Self Bakery
        </h1>
        <p className="text-xs text-[#bfa14a] tracking-[0.3em] uppercase mt-1 font-sans font-semibold">
          Antwerp’s Sweetest Touch
        </p>

        <div className="w-10 h-px bg-[#ffd700] my-3" />

        <p className="text-xs font-extrabold text-[#1a1614] font-serif">Sophie Janssens</p>
        <p className="text-xs text-[#7c6a4d] font-sans mt-1">
          sophie@selfbakery.be | +32 3 555 7890
        </p>
        <p className="text-xs text-[#bfa14a] font-sans font-semibold">
          Antwerp, Belgium
        </p>
      </div>
    </div>
  )
}

export function PremiumCard({ className }: CardProps) {
  return (
    <div className={`aspect-[1.75/1] rounded-xl shadow-2xl overflow-hidden ${className}`}>
      <div className="w-full h-full bg-gradient-to-br from-[#1a1614] to-[#4b3a1a] p-8 flex flex-col justify-between relative overflow-hidden">
        {/* Gold accent lines */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#ffd700] to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#ffd700] to-transparent" />

        {/* Top */}
        <div className="relative z-10 flex items-start justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-serif font-extrabold text-[#ffd700] tracking-tight leading-none drop-shadow-lg">
              The Self Bakery
            </h1>
            <p className="text-xs text-[#fff7c2] tracking-[0.25em] uppercase mt-2 font-sans font-semibold">
              Belgian Luxury Sweets
            </p>
          </div>
          <div className="w-14 h-14 md:w-16 md:h-16 relative flex-shrink-0 rounded-full overflow-hidden border-2 border-[#ffd700] shadow-lg">
            <Image
              src="/images/self-bakery-logo.jpeg"
              alt="The Self Bakery logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Bottom */}
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-[#ffd700]" />
            <p className="text-xs text-[#ffd700] font-sans uppercase tracking-[0.2em] font-bold">
              Creative Director
            </p>
          </div>
          <p className="text-sm font-extrabold text-[#ffd700] font-serif">
            Maxime Peeters
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
            <p className="text-xs text-[#fff7c2]/80 font-sans">maxime@selfbakery.be</p>
            <p className="text-xs text-[#fff7c2]/80 font-sans">+32 3 555 2468</p>
          </div>
          <p className="text-xs text-[#ffd700]/80 font-sans mt-1 font-semibold">
            Antwerp, Belgium | Benelux & EU
          </p>
        </div>
      </div>
    </div>
  )
}
