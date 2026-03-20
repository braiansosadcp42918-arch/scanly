import { motion } from 'framer-motion';
import { Store, Instagram, UtensilsCrossed, CalendarDays, UserCircle, Package } from 'lucide-react';

const templates = [
  { icon: Store, name: 'Negocios', desc: 'Link a tu web o tienda online', color: '#0077b6' },
  { icon: Instagram, name: 'Redes sociales', desc: 'Conecta tu perfil de Instagram, TikTok...', color: '#e1306c' },
  { icon: UtensilsCrossed, name: 'Restaurantes', desc: 'Menú digital para tu restaurante', color: '#dc2626' },
  { icon: CalendarDays, name: 'Eventos', desc: 'Invitaciones y entradas digitales', color: '#16a34a' },
  { icon: UserCircle, name: 'Tarjeta personal', desc: 'Comparte tu vCard con un escaneo', color: '#7c3aed' },
  { icon: Package, name: 'Productos', desc: 'QR para etiquetas y empaques', color: '#b45309' },
];

export default function TemplatesSection() {
  return (
    <section id="templates" className="py-16 md:py-24 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
            Plantillas para cada <span className="gradient-text">necesidad</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Inspiración lista para usar. Selecciona una plantilla y personaliza al instante.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {templates.map((t, i) => (
            <motion.a
              key={t.name}
              href="#generator"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="bg-card rounded-2xl border border-border p-6 shadow-elevated hover:shadow-premium transition-all group cursor-pointer"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: `${t.color}15` }}
              >
                <t.icon className="w-5 h-5" style={{ color: t.color }} />
              </div>
              <h3 className="font-semibold mb-1">{t.name}</h3>
              <p className="text-sm text-muted-foreground">{t.desc}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
