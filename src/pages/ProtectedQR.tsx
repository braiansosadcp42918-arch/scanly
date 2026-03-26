import { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Lock, Unlock, ExternalLink, ArrowLeft, ShieldCheck, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { decryptData } from '@/lib/crypto';
import { useI18n } from '@/lib/i18n';

export default function ProtectedQR() {
  const { t } = useI18n();
  const [searchParams] = useSearchParams();
  const encryptedData = searchParams.get('d') || '';
  const [password, setPassword] = useState('');
  const [decrypted, setDecrypted] = useState<string | null>(null);
  const [error, setError] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const handleUnlock = () => {
    if (!password.trim()) return;
    const result = decryptData(encryptedData, password);
    if (result) {
      const controlChars = result.split('').filter(c => c.charCodeAt(0) < 32 && c !== '\n' && c !== '\r').length;
      if (controlChars > result.length * 0.3) {
        setError(true);
        setAttempts(a => a + 1);
        return;
      }
      setDecrypted(result);
      setError(false);
    } else {
      setError(true);
      setAttempts(a => a + 1);
    }
  };

  const isUrl = decrypted?.startsWith('http');

  if (!encryptedData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center p-8">
          <ShieldAlert className="w-16 h-16 text-destructive mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">{t('protected.invalid')}</h1>
          <Link to="/" className="text-primary hover:underline text-sm inline-flex items-center gap-1 mt-4">
            <ArrowLeft className="w-4 h-4" /> {t('legal.back')}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="bg-card rounded-2xl border border-border p-8 shadow-elevated text-center">
          <AnimatePresence mode="wait">
            {!decrypted ? (
              <motion.div key="locked" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div className="gradient-bg w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Lock className="w-8 h-8 text-primary-foreground" />
                </div>
                <h1 className="text-2xl font-extrabold mb-2">{t('protected.title')}</h1>
                <p className="text-sm text-muted-foreground mb-6">{t('protected.subtitle')}</p>
                <div className="space-y-4">
                  <input
                    type="password"
                    value={password}
                    onChange={e => { setPassword(e.target.value); setError(false); }}
                    onKeyDown={e => e.key === 'Enter' && handleUnlock()}
                    placeholder={t('protected.enter')}
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-sm text-center focus:outline-none focus:ring-2 focus:ring-ring"
                    autoFocus
                  />
                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-destructive"
                    >
                      {t('protected.wrong')} {attempts > 2 ? '🔐' : ''}
                    </motion.p>
                  )}
                  <button
                    onClick={handleUnlock}
                    className="w-full gradient-bg text-primary-foreground py-3 rounded-xl font-semibold shadow-premium hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
                  >
                    <Unlock className="w-4 h-4" />
                    {t('protected.unlock')}
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div key="unlocked" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                  <ShieldCheck className="w-8 h-8 text-green-500" />
                </div>
                <h1 className="text-2xl font-extrabold mb-2">{t('protected.success')}</h1>
                <div className="bg-secondary rounded-xl p-4 mt-4 mb-6">
                  <p className="text-xs text-muted-foreground mb-1">{t('protected.content')}</p>
                  <p className="text-sm font-medium break-all">{decrypted}</p>
                </div>
                {isUrl && (
                  <a
                    href={decrypted}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full gradient-bg text-primary-foreground py-3 rounded-xl font-semibold shadow-premium hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {t('protected.open')}
                  </a>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="text-center mt-6">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" /> {t('legal.back')}
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
