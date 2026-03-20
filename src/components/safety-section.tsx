import Icon from "@/components/ui/icon"

const advantages = [
  {
    icon: "ShieldCheck",
    title: "Работаем официально",
    description: "Заключаем договор, предоставляем акты выполненных работ и гарантийные обязательства на все виды работ.",
  },
  {
    icon: "Users",
    title: "Собственные бригады",
    description: "Только штатные сотрудники без субподряда. Полный контроль качества на каждом этапе.",
  },
  {
    icon: "Clock",
    title: "Соблюдаем сроки",
    description: "Чёткое планирование и контроль хода работ. Сдаём объекты в срок, указанный в договоре.",
  },
  {
    icon: "FileText",
    title: "Полная документация",
    description: "Смета, договор, акты КС-2 и КС-3, исполнительная документация — всё по требованиям законодательства.",
  },
]

export function SafetySection() {
  return (
    <section id="advantages" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-orbitron">Почему выбирают АДР Инстрой</h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advantages.map((item, index) => (
            <div
              key={index}
              className="flex gap-6 p-6 rounded-xl border border-red-500/20 bg-white/5 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                  <Icon name={item.icon} size={24} className="text-red-400" fallback="Star" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}