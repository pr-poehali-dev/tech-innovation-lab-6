import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const features = [
  {
    title: "Фасады и входные группы",
    description: "Ремонт фасадов, цоколей, входных групп. Штукатурка и композитные панели. Замена парапетов и люков на чердак.",
    icon: "Building2",
    badge: "Фасад",
  },
  {
    title: "Кровля и герметизация",
    description: "Устройство мягкой и скатной кровли. Герметизация межпанельных швов. Локальное утепление квартир (высотные работы).",
    icon: "Home",
    badge: "Кровля",
  },
  {
    title: "Инженерные системы",
    description: "Замена розливов и стояков ГВС/ХВС/канализации. Замена розливов центрального отопления. Опрессовка и промывка систем.",
    icon: "Wrench",
    badge: "Сантехника",
  },
  {
    title: "Электрика и освещение",
    description: "Замена электрощитов, стоячных кабелей, светильников. Монтаж кабель-каналов. Прокладка слаботочных кабелей.",
    icon: "Zap",
    badge: "Электрика",
  },
  {
    title: "Лестницы и конструкции",
    description: "Ремонт лестничных клеток. Демонтаж и монтаж поручней. Сварочные работы. Демонтаж мусоростволов с заливкой отверстий.",
    icon: "Layers",
    badge: "Конструкции",
  },
  {
    title: "Благоустройство территории",
    description: "Устройство отмосток и детских площадок. Монтаж полусфер. Укладка плитки. Снос и обрезка зелёных насаждений. Уборка снега.",
    icon: "TreePine",
    badge: "Территория",
  },
]

export function FeaturesSection() {
  return (
    <section id="services" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Полный спектр услуг для МКД</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            30 видов работ для управляющих компаний, ТСЖ и жилищных кооперативов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Icon name={feature.icon} size={32} className="text-red-500" fallback="Wrench" />
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
