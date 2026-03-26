import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { useAchievements } from '@/hooks/useAchievements';
import { useI18n } from '@/lib/i18n';
import { Progress } from '@/components/ui/progress';

export default function AchievementsPanel() {
  const { t } = useI18n();
  const { achievements, unlocked, progress } = useAchievements();
  const unlockedIds = new Set(unlocked.map(a => a.id));

  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
            <Trophy className="w-8 h-8 inline mr-2 text-primary" />
            {t('ach.title')} <span className="gradient-text">{t('ach.progress')}</span>
          </h2>
          <div className="max-w-xs mx-auto mt-4">
            <Progress value={progress} className="h-2" />
            <p className="text-xs text-muted-foreground mt-1.5">
              {unlocked.length}/{achievements.length} {t('ach.unlocked')}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-4">
          {achievements.map((ach, i) => {
            const isUnlocked = unlockedIds.has(ach.id);
            return (
              <motion.div
                key={ach.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`relative bg-card rounded-2xl border p-4 md:p-5 text-center transition-all ${
                  isUnlocked
                    ? 'border-primary/30 shadow-premium'
                    : 'border-border opacity-50 grayscale'
                }`}
              >
                <div className="text-2xl md:text-3xl mb-2">{ach.icon}</div>
                <h4 className="text-xs md:text-sm font-semibold mb-0.5">{t(ach.nameKey)}</h4>
                <p className="text-[10px] md:text-xs text-muted-foreground">{t(ach.descKey)}</p>
                {isUnlocked && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full gradient-bg flex items-center justify-center text-[10px] text-primary-foreground"
                  >
                    ✓
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
