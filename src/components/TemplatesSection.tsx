import { motion } from 'framer-motion';
import { Store, Instagram, UtensilsCrossed, CalendarDays, UserCircle, Package } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

export default function TemplatesSection() {
  const { t } = useI18n();

  const templates = [
    { icon: Store, name: t('tpl.business'), desc: t('tpl.businessDesc'), color: '#0077b6' },
    { icon: Instagram, name: t('tpl.social'), desc: t('tpl.socialDesc'), color: '#e1306c' },
    { icon: UtensilsCrossed, name: t('tpl.restaurant'), desc: t('tpl.restaurantDesc'), color: '#dc2626' },
    { icon: CalendarDays, name: t('tpl.events'), desc: t('tpl.eventsDesc'), color: '#16a34a' },
    { icon: UserCircle, name: t('tpl.personal'), desc: t('tpl.personalDesc'), color: '#7c3aed' },
    { icon: Package, name: t('tpl.products'), desc: t('tpl.productsDesc'), color: '#b45309' },
  ];

  return (
    <section id="templates" className="py-16 md:py-24 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
            {t('tpl.title1')} <span className="gradient-text">{t('tpl.title2')}</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">{t('tpl.subtitle')}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {templates.map((tp, i) => (
            <motion.a
              key={i}
              href="#generator"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="bg-card rounded-2xl border border-border p-6 shadow-elevated hover:shadow-premium transition-all group cursor-pointer"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: `${tp.color}15` }}
              >
                <tp.icon className="w-5 h-5" style={{ color: tp.color }} />
              </div>
              <h3 className="font-semibold mb-1">{tp.name}</h3>
              <p className="text-sm text-muted-foreground">{tp.desc}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
