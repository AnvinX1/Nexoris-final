import { NexorisLogo } from "./nexoris-logo"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-background border-t border-border py-12 md:py-16 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-8 md:mb-12">
          <div className="col-span-1 md:col-span-5">
            <NexorisLogo className="mb-4 md:mb-6" />
            <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 max-w-md leading-relaxed">
              Empowering businesses with innovative technology solutions. From cloud infrastructure to custom software
              development, we deliver excellence.
            </p>
            <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
              <div className="flex items-center gap-2 md:gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-3.5 w-3.5 md:h-4 md:w-4 flex-shrink-0" />
                <span className="text-xs md:text-sm">contact@nexoris.com</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="h-3.5 w-3.5 md:h-4 md:w-4 flex-shrink-0" />
                <span className="text-xs md:text-sm">+91 422 123 4567</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <MapPin className="h-3.5 w-3.5 md:h-4 md:w-4 flex-shrink-0" />
                <span className="text-xs md:text-sm">Town Hall, Coimbatore</span>
              </div>
            </div>
            <p className="text-xs md:text-sm text-muted-foreground/70 italic">Building tomorrow's technology, today</p>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h3 className="font-semibold text-foreground mb-3 md:mb-4 text-xs md:text-sm uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-2 md:space-y-3 text-muted-foreground">
              <li>
                <a
                  href="#about"
                  className="text-sm hover:text-foreground transition-colors hover:translate-x-1 inline-block"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#vision"
                  className="text-sm hover:text-foreground transition-colors hover:translate-x-1 inline-block"
                >
                  Vision & Values
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="text-sm hover:text-foreground transition-colors hover:translate-x-1 inline-block"
                >
                  Our Team
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h3 className="font-semibold text-foreground mb-3 md:mb-4 text-xs md:text-sm uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-2 md:space-y-3 text-muted-foreground">
              <li>
                <a
                  href="#solutions"
                  className="text-sm hover:text-foreground transition-colors hover:translate-x-1 inline-block"
                >
                  Solutions
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm hover:text-foreground transition-colors hover:translate-x-1 inline-block"
                >
                  Consulting
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm hover:text-foreground transition-colors hover:translate-x-1 inline-block"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-3">
            <h3 className="font-semibold text-foreground mb-3 md:mb-4 text-xs md:text-sm uppercase tracking-wider">
              Get in Touch
            </h3>
            <ul className="space-y-2 md:space-y-3 text-muted-foreground">
              <li>
                <a
                  href="#contact"
                  className="text-sm hover:text-foreground transition-colors hover:translate-x-1 inline-block"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#find-us"
                  className="text-sm hover:text-foreground transition-colors hover:translate-x-1 inline-block"
                >
                  Find Our Office
                </a>
              </li>
              <li>
                <a
                  href="#socials"
                  className="text-sm hover:text-foreground transition-colors hover:translate-x-1 inline-block"
                >
                  Social Media
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
            <p className="text-xs md:text-sm text-muted-foreground/70 text-center md:text-left">
              &copy; 2025 Nexoris. All rights reserved.
            </p>
            <div className="flex gap-4 md:gap-6 text-xs md:text-sm text-muted-foreground/70">
              <a href="#" className="hover:text-muted-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-muted-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
