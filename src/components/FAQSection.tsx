import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: '¿Es realmente gratis?', a: 'Sí, Scanly es 100% gratuito. No hay límites de generación, sin registro ni pagos ocultos.' },
  { q: '¿Los códigos QR caducan?', a: 'No. Los QR generados con Scanly son estáticos y funcionan para siempre. No dependen de nuestro servidor.' },
  { q: '¿Puedo usar los QR con fines comerciales?', a: 'Absolutamente. Los códigos QR que generas son tuyos y puedes usarlos como quieras.' },
  { q: '¿En qué formatos puedo descargar?', a: 'Puedes descargar en PNG y SVG de alta resolución, ideales para impresión y web.' },
  { q: '¿Puedo agregar mi logo al QR?', a: 'Sí. Sube tu logo desde la sección de personalización y ajusta el tamaño. Recomendamos usar corrección de errores alta (H).' },
  { q: '¿Mis datos son almacenados?', a: 'No. Todo se procesa en tu navegador. No enviamos ningún dato a servidores externos.' },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container max-w-2xl">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
            Preguntas <span className="gradient-text">frecuentes</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-card rounded-xl border border-border overflow-hidden shadow-elevated">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left font-medium text-sm hover:bg-secondary/50 transition-colors"
              >
                {faq.q}
                <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${open === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-4 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
