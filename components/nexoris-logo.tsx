import Image from "next/image"

export function NexorisLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="relative">
        <Image
          src="/images/design-mode/Favs/android-chrome-192x192.png"
          alt="Nexoris Logo"
          width={32}
          height={32}
          className="w-8 h-8"
          priority
        />
      </div>
      <span className="text-xl font-bold text-foreground font-nexoris">Nexoris</span>
    </div>
  )
}
