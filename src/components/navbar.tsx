import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-black/95 backdrop-blur-md border-b border-amber-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="font-montserrat text-2xl font-black tracking-tight text-white uppercase">
              АДР<span className="text-amber-400">ИНСТРОЙ</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#services"
                className="font-geist text-white hover:text-amber-400 transition-colors duration-200"
              >
                Услуги
              </a>
              <a href="#advantages" className="font-geist text-white hover:text-amber-400 transition-colors duration-200">
                Преимущества
              </a>
              <a href="#faq" className="font-geist text-white hover:text-amber-400 transition-colors duration-200">
                Вопросы
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-amber-500 hover:bg-amber-600 text-black font-geist font-bold border-0" onClick={() => window.open("https://max.ru/+79867244553", "_blank")}>Получить смету</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-amber-400 transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/98 border-t border-amber-500/30">
              <a
                href="#services"
                className="block px-3 py-2 font-geist text-white hover:text-amber-400 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Услуги
              </a>
              <a
                href="#advantages"
                className="block px-3 py-2 font-geist text-white hover:text-amber-400 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Преимущества
              </a>
              <a
                href="#faq"
                className="block px-3 py-2 font-geist text-white hover:text-amber-400 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Вопросы
              </a>
              <div className="px-3 py-2">
                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-black font-geist font-bold border-0" onClick={() => window.open("https://max.ru/+79867244553", "_blank")}>
                  Получить смету
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}