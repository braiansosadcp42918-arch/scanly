import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

const COOKIE_KEY = 'scanly-cookie-consent';

export default function CookieConsent() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, 'accepted');
    setVisible(false);
  };

  const dismiss = () => {
    localStorage.setItem(COOKIE_KEY, 'dismissed');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-sm z-50"
        >
          <div className="bg-card border border-border rounded-2xl p-5 shadow-elevated">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                <Cookie className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold mb-1">{t('cookie.title')}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{t('cookie.desc')}</p>
                <div className="flex items-center gap-2 mt-3">
                  <button
                    onClick={accept}
                    className="px-4 py-1.5 rounded-lg gradient-bg text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity"
                  >
                    {t('cookie.accept')}
                  </button>
                  <button
                    onClick={dismiss}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t('cookie.dismiss')}
                  </button>
                </div>
              </div>
              <button onClick={dismiss} className="text-muted-foreground hover:text-foreground transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
