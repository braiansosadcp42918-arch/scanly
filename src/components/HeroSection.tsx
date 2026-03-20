import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Zap } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

export default function HeroSection() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full gradient-bg opacity-[0.07] blur-3xl" />
      </div>

      <div className="container text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            {t('hero.badge')}
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
            {t('hero.title1')}{' '}
            <span className="gradient-text">{t('hero.title2')}</span>{' '}
            {t('hero.title3')}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#generator"
              className="gradient-bg text-primary-foreground px-8 py-3.5 rounded-xl font-semibold text-base shadow-premium hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              <Zap className="w-4 h-4" />
              {t('hero.cta')}
            </a>
            <a
              href="#features"
              className="px-8 py-3.5 rounded-xl font-semibold text-base border border-border bg-card hover:bg-secondary transition-colors inline-flex items-center gap-2"
            >
              {t('hero.secondary')}
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
