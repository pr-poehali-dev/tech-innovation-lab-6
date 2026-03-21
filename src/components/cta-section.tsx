import { Button } from "@/components/ui/button"

const PHONE = "+79867244553"
const PHONE_DISPLAY = "+7 (986) 724-45-53"

function openMax() {
  const maxUrl = `https://max.ru/${PHONE}`
  const win = window.open(maxUrl, "_blank")
  setTimeout(() => {
    if (!win || win.closed || typeof win.closed === "undefined") {
      window.location.href = `tel:${PHONE}`
    }
  }, 1500)
}

export function CTASection() {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <div className="slide-up">
          <h2 className="text-5xl font-bold text-white mb-6 font-sans text-balance">Готовы обсудить ваш объект?</h2>
          <p className="text-xl text-white/70 mb-10 leading-relaxed max-w-2xl mx-auto">
            Оставьте заявку — выедем на объект, сделаем замеры и подготовим смету бесплатно. Работаем с
            управляющими компаниями и ТСЖ по всей Казани и Москве.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 pulse-button text-lg px-8 py-4"
              onClick={openMax}
            >
              Получить смету
            </Button>
            <a href={`tel:${PHONE}`}>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 bg-transparent w-full"
              >
                Позвонить {PHONE_DISPLAY}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}