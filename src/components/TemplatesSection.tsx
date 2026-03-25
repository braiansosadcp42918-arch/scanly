import { useState } from 'react';
import { motion } from 'framer-motion';
import { Store, Instagram, UtensilsCrossed, CalendarDays, UserCircle, Package, Check } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import { TEMPLATE_PRESETS } from '@/lib/qr-types';

export default function TemplatesSection() {
  const { t } = useI18n();
  const [activeTemplate, setActiveTemplate] = useState<string | null>(null);

  const templates = [
    { key: 'business', icon: Store, name: t('tpl.business'), desc: t('tpl.businessDesc'), color: '#0077b6' },
    { key: 'social', icon: Instagram, name: t('tpl.social'), desc: t('tpl.socialDesc'), color: '#e1306c' },
    { key: 'restaurant', icon: UtensilsCrossed, name: t('tpl.restaurant'), desc: t('tpl.restaurantDesc'), color: '#dc2626' },
    { key: 'events', icon: CalendarDays, name: t('tpl.events'), desc: t('tpl.eventsDesc'), color: '#16a34a' },
    { key: 'personal', icon: UserCircle, name: t('tpl.personal'), desc: t('tpl.personalDesc'), color: '#7c3aed' },
    { key: 'products', icon: Package, name: t('tpl.products'), desc: t('tpl.productsDesc'), color: '#b45309' },
  ];

  const handleTemplateClick = (key: string) => {
    const preset = TEMPLATE_PRESETS[key];
    if (!preset) return;
    setActiveTemplate(key);
    // Dispatch custom event for QRGenerator to listen to
    window.dispatchEvent(new CustomEvent('scanly-apply-template', { detail: { style: preset, templateKey: key } }));
    // Scroll to generator
    const el = document.getElementById('generator');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

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
          {templates.map((tp, i) => {
            const isActive = activeTemplate === tp.key;
            return (
              <motion.button
                key={tp.key}
                onClick={() => handleTemplateClick(tp.key)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className={`text-left bg-card rounded-2xl border-2 p-6 shadow-elevated hover:shadow-premium transition-all group cursor-pointer relative ${
                  isActive ? 'border-primary ring-2 ring-primary/20' : 'border-border'
                }`}
              >
                {isActive && (
                  <div className="absolute top-3 right-3 w-6 h-6 rounded-full gradient-bg flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-primary-foreground" />
                  </div>
                )}
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: `${tp.color}15` }}
                  >
                    <tp.icon className="w-5 h-5" style={{ color: tp.color }} />
                  </div>
                  {/* Mini color preview */}
                  <div className="flex gap-1">
                    <div className="w-4 h-4 rounded-full border border-border" style={{ backgroundColor: TEMPLATE_PRESETS[tp.key]?.dotsColor }} />
                    <div className="w-4 h-4 rounded-full border border-border" style={{ backgroundColor: TEMPLATE_PRESETS[tp.key]?.backgroundColor }} />
                  </div>
                </div>
                <h3 className="font-semibold mb-1">{tp.name}</h3>
                <p className="text-sm text-muted-foreground">{tp.desc}</p>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
