import { useTheme } from '@/hooks/useTheme';
import { useI18n, LANG_LABELS, type Lang } from '@/lib/i18n';
import { Moon, Sun, QrCode, Globe, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

export default function Navbar() {
  const { isDark, toggle } = useTheme();
  const { lang, setLang, t } = useI18n();
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setShowLangMenu(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 glass border-b border-border/50"
    >
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2.5 font-extrabold text-xl tracking-tight">
          <div className="gradient-bg rounded-lg p-1.5">
            <QrCode className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="gradient-text">Scanly</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#generator" className="hover:text-foreground transition-colors">{t('nav.generator')}</a>
          <a href="#features" className="hover:text-foreground transition-colors">{t('nav.features')}</a>
          <a href="#templates" className="hover:text-foreground transition-colors">{t('nav.templates')}</a>
          <a href="#faq" className="hover:text-foreground transition-colors">{t('nav.faq')}</a>
        </div>

        <div className="flex items-center gap-2">
          {/* Language selector */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setShowLangMenu(!showLangMenu)}
              className="p-2 rounded-lg bg-secondary hover:bg-muted transition-colors inline-flex items-center gap-1.5 text-xs font-medium"
            >
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">{LANG_LABELS[lang]}</span>
            </button>
            {showLangMenu && (
              <div className="absolute right-0 top-full mt-1 bg-card border border-border rounded-lg shadow-elevated py-1 min-w-[140px] z-50">
                {(Object.keys(LANG_LABELS) as Lang[]).map(l => (
                  <button
                    key={l}
                    onClick={() => { setLang(l); setShowLangMenu(false); }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-secondary transition-colors ${
                      lang === l ? 'font-semibold text-primary' : 'text-foreground'
                    }`}
                  >
                    {LANG_LABELS[l]}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={toggle}
            className="p-2 rounded-lg bg-secondary hover:bg-muted transition-colors"
            aria-label={t('nav.theme')}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="md:hidden p-2 rounded-lg bg-secondary hover:bg-muted transition-colors"
          >
            {showMobileMenu ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {showMobileMenu && (
        <div className="md:hidden border-t border-border/50 bg-card/95 backdrop-blur-xl">
          <div className="container py-4 flex flex-col gap-3 text-sm font-medium">
            <a href="#generator" onClick={() => setShowMobileMenu(false)} className="py-2 hover:text-primary transition-colors">{t('nav.generator')}</a>
            <a href="#features" onClick={() => setShowMobileMenu(false)} className="py-2 hover:text-primary transition-colors">{t('nav.features')}</a>
            <a href="#templates" onClick={() => setShowMobileMenu(false)} className="py-2 hover:text-primary transition-colors">{t('nav.templates')}</a>
            <a href="#faq" onClick={() => setShowMobileMenu(false)} className="py-2 hover:text-primary transition-colors">{t('nav.faq')}</a>
          </div>
        </div>
      )}
    </motion.nav>
  );
}
