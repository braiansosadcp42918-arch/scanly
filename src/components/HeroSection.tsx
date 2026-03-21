import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Zap, QrCode } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

const floatingQRs = [
  { x: '10%', y: '20%', size: 40, delay: 0, duration: 6 },
  { x: '85%', y: '15%', size: 32, delay: 1.2, duration: 7 },
  { x: '75%', y: '70%', size: 36, delay: 0.6, duration: 5.5 },
  { x: '15%', y: '75%', size: 28, delay: 1.8, duration: 6.5 },
  { x: '50%', y: '10%', size: 24, delay: 2.4, duration: 8 },
];

export default function HeroSection() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
      {/* Animated background blobs */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full gradient-bg opacity-[0.07] blur-3xl"
          animate={{ scale: [1, 1.15, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-accent/10 blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>

      {/* Floating QR icons */}
      {floatingQRs.map((qr, i) => (
        <motion.div
          key={i}
          className="absolute -z-10 text-primary/[0.06]"
          style={{ left: qr.x, top: qr.y }}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: [0, 0.8, 0],
            y: [20, -20, 20],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: qr.duration,
            repeat: Infinity,
            delay: qr.delay,
            ease: 'easeInOut',
          }}
        >
          <QrCode style={{ width: qr.size, height: qr.size }} />
        </motion.div>
      ))}

      <div className="container text-center max-w-3xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6"
            animate={{ boxShadow: ['0 0 0 0 hsl(var(--primary) / 0)', '0 0 0 8px hsl(var(--primary) / 0.08)', '0 0 0 0 hsl(var(--primary) / 0)'] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            {t('hero.badge')}
          </motion.div>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {t('hero.title1')}{' '}
          <motion.span
            className="gradient-text"
            initial={{ backgroundSize: '200% 200%' }}
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            {t('hero.title2')}
          </motion.span>{' '}
          {t('hero.title3')}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {t('hero.subtitle')}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <motion.a
            href="#generator"
            className="gradient-bg text-primary-foreground px-8 py-3.5 rounded-xl font-semibold text-base shadow-premium hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <Zap className="w-4 h-4" />
            {t('hero.cta')}
          </motion.a>
          <motion.a
            href="#features"
            className="px-8 py-3.5 rounded-xl font-semibold text-base border border-border bg-card hover:bg-secondary transition-colors inline-flex items-center gap-2"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            {t('hero.secondary')}
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown className="w-4 h-4" />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
