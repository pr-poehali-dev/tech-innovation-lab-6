import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "С какими заказчиками вы работаете?",
      answer:
        "Мы работаем с управляющими компаниями, ТСЖ, жилищными кооперативами и администрациями МКД. Заключаем официальные договоры подряда с полным пакетом документации.",
    },
    {
      question: "Как рассчитывается стоимость работ?",
      answer:
        "Стоимость рассчитывается индивидуально по смете на основании объёма и вида работ. Мы выезжаем на объект, производим замеры и предоставляем детальную смету. Итоговая цена не превышает согласованную.",
    },
    {
      question: "Есть ли гарантия на выполненные работы?",
      answer:
        "Да, на все виды работ предоставляется гарантия. Сроки гарантии зависят от вида работ и указываются в договоре. На кровельные работы — до 5 лет, на герметизацию швов — до 3 лет.",
    },
    {
      question: "В каких регионах вы работаете?",
      answer:
        "Основной регион работы — Казань и Республика Татарстан. Также выполняем проекты в Москве. По вопросам других регионов — уточняйте при обращении.",
    },
    {
      question: "Какие документы вы предоставляете после завершения работ?",
      answer:
        "По завершении работ предоставляем акты выполненных работ КС-2 и КС-3, исполнительную документацию, гарантийный паспорт объекта и счёт-фактуру.",
    },
    {
      question: "Как быстро вы можете приступить к работам?",
      answer:
        "После согласования договора и сметы — в течение 3-5 рабочих дней. В экстренных случаях (аварийные ситуации) выезжаем в день обращения.",
    },
  ]

  return (
    <section id="faq" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на популярные вопросы о сотрудничестве с АДР Инстрой
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}