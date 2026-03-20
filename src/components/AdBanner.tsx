import { useI18n } from '@/lib/i18n';

export default function AdBanner({ className = '' }: { className?: string }) {
  const { t } = useI18n();

  return (
    <div className={`w-full flex items-center justify-center ${className}`}>
      <div className="w-full max-w-3xl bg-secondary/50 border border-border rounded-xl p-4 text-center">
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground/60 block mb-1">{t('ad.label')}</span>
        <div className="h-16 md:h-20 flex items-center justify-center text-muted-foreground/40 text-sm">
          {t('ad.placeholder')}
        </div>
      </div>
    </div>
  );
}
