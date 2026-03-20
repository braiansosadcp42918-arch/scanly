import { Zap, Palette, Download, Shield, Smartphone, History } from 'lucide-react';
import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';

export default function FeaturesSection() {
  const { t } = useI18n();

  const features = [
    { icon: Zap, title: t('feat.instant'), desc: t('feat.instantDesc') },
    { icon: Palette, title: t('feat.custom'), desc: t('feat.customDesc') },
    { icon: Download, title: t('feat.export'), desc: t('feat.exportDesc') },
    { icon: Shield, title: t('feat.error'), desc: t('feat.errorDesc') },
    { icon: Smartphone, title: t('feat.responsive'), desc: t('feat.responsiveDesc') },
    { icon: History, title: t('feat.history'), desc: t('feat.historyDesc') },
  ];

  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
            {t('feat.title1')} <span className="gradient-text">{t('feat.title2')}</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">{t('feat.subtitle')}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={i}
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
