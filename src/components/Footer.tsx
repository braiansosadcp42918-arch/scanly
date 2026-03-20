import { QrCode } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-border py-12 bg-card/50">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <a href="#" className="flex items-center gap-2 font-extrabold text-lg mb-3">
              <div className="gradient-bg rounded-lg p-1.5">
                <QrCode className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="gradient-text">Scanly</span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              {t('footer.desc')}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3">{t('footer.links')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#generator" className="hover:text-foreground transition-colors">{t('nav.generator')}</a></li>
              <li><a href="#features" className="hover:text-foreground transition-colors">{t('nav.features')}</a></li>
              <li><a href="#templates" className="hover:text-foreground transition-colors">{t('nav.templates')}</a></li>
              <li><a href="#faq" className="hover:text-foreground transition-colors">{t('nav.faq')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3">{t('footer.legal')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">{t('footer.privacy')}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t('footer.terms')}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t('footer.notice')}</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Scanly. {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
}
