import { Zap, Palette, Download, Shield, Smartphone, History } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  { icon: Zap, title: 'Generación instantánea', desc: 'Tu QR se actualiza en tiempo real mientras escribes.' },
  { icon: Palette, title: 'Personalización total', desc: 'Colores, estilos, esquinas, logos y presets profesionales.' },
  { icon: Download, title: 'Exportación premium', desc: 'Descarga en PNG, SVG de alta resolución.' },
  { icon: Shield, title: 'Corrección de errores', desc: 'Hasta 30% de redundancia para QR siempre legibles.' },
  { icon: Smartphone, title: '100% responsive', desc: 'Funciona perfecto en móvil, tablet y escritorio.' },
  { icon: History, title: 'Historial local', desc: 'Tus últimos 20 códigos QR guardados automáticamente.' },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
            Funciones de nivel <span className="gradient-text">profesional</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Todo lo que necesitas para crear QR con calidad premium, sin pagar nada.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="bg-card rounded-2xl border border-border p-6 shadow-elevated hover:shadow-premium transition-shadow group"
            >
              <div className="gradient-bg w-10 h-10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <f.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-1.5">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
