import { faqs } from '@/lib/data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FaqPage() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-secondary py-20 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold !font-headline">Frequently Asked Questions</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Answers to common questions about our services and the real estate process.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="bg-background border rounded-lg shadow-sm px-6">
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
