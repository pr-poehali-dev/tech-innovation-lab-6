export function AboutSection() {
  const stats = [
    { value: "30+", label: "видов работ" },
    { value: "130+", label: "объектов сдано" },
    { value: "7+", label: "лет на рынке" },
    { value: "100%", label: "официальные договоры" },
  ]

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6 font-sans">О компании АДР Инстрой</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              АДР Инстрой — подрядная организация, специализирующаяся на ремонте и обслуживании
              многоквартирных домов. Основной регион — Казань и Республика Татарстан,
              также работаем в Москве. Сотрудничаем с управляющими компаниями, ТСЖ и ЖСК.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Выполняем весь комплекс работ: от ремонта фасадов и кровли до замены инженерных систем
              и благоустройства территорий. Собственные бригады, официальные договоры, полная документация.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-xl border border-yellow-800/30 bg-white/5">
                <div className="text-4xl font-bold text-yellow-800 mb-2 font-orbitron">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}