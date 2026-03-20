import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Сергей Михайлов",
    role: "Председатель ТСЖ «Центральное»",
    initials: "СМ",
    content:
      "АДР Инстрой отремонтировали фасад нашего дома и заменили все стояки ХВС. Работы выполнены качественно, в срок. Документы предоставили в полном объёме.",
  },
  {
    name: "Ирина Соколова",
    role: "Директор УК «Комфорт Плюс»",
    initials: "ИС",
    content:
      "Сотрудничаем уже третий год. Герметизация швов, ремонт кровли, замена электрощитов — всё делают профессионально. Рекомендуем как надёжного подрядчика.",
  },
  {
    name: "Андрей Власов",
    role: "Управляющий ЖСК «Весна»",
    initials: "АВ",
    content:
      "Провели полное благоустройство двора: плитка, детская площадка, отмостки. Цены честные, смета не превысила согласованную. Жители довольны результатом.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Нам доверяют управляющие компании</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Отзывы заказчиков о нашей работе
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">{testimonial.initials}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
