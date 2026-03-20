import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-orbitron text-2xl font-bold text-white mb-4">
              АДР<span className="text-red-500">Инстрой</span>
            </h2>
            <p className="font-space-mono text-gray-300 mb-6 max-w-md">
              Профессиональный ремонт и обслуживание многоквартирных домов. Работаем с УК, ТСЖ и ЖСК.
            </p>
            <div className="flex flex-col space-y-2">
              <a href="tel:+74951234567" className="flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Phone size={16} />
                <span className="font-space-mono text-sm">+7 (495) 123-45-67</span>
              </a>
              <a href="mailto:info@adr-instroy.ru" className="flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Mail size={16} />
                <span className="font-space-mono text-sm">info@adr-instroy.ru</span>
              </a>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin size={16} />
                <span className="font-space-mono text-sm">Москва и Московская область</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Фасады и кровля
                </a>
              </li>
              <li>
                <a href="#services" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Инженерные системы
                </a>
              </li>
              <li>
                <a href="#services" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Электрика
                </a>
              </li>
              <li>
                <a href="#services" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Благоустройство
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Компания</h3>
            <ul className="space-y-2">
              <li>
                <a href="#advantages" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  О нас
                </a>
              </li>
              <li>
                <a href="#faq" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Вопросы
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-red-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-space-mono text-gray-400 text-sm">© 2026 АДР Инстрой. Все права защищены.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="font-space-mono text-gray-400 hover:text-red-500 text-sm transition-colors duration-200">
                Политика конфиденциальности
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
