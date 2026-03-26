import { Link } from 'react-router-dom';
import { ArrowLeft, QrCode, Download, Trophy, Clock, Trash2, Plus } from 'lucide-react';
import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';
import { useAchievements, ACHIEVEMENTS } from '@/hooks/useAchievements';
import { useQRHistory } from '@/hooks/useQRCode';
import { Progress } from '@/components/ui/progress';
import Navbar from '@/components/Navbar';

const CONTENT_TYPE_KEYS: Record<string, string> = {
  url: 'ct.url', text: 'ct.text', wifi: 'ct.wifi', email: 'ct.email',
  phone: 'ct.phone', location: 'ct.location', sms: 'ct.sms',
  vcard: 'ct.vcard', social: 'ct.social',
};

export default function Dashboard() {
  const { t } = useI18n();
  const { stats, unlocked, progress } = useAchievements();
  const { history, clearHistory } = useQRHistory();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container py-8 max-w-4xl">
        <div className="flex items-center gap-3 mb-8">
          <Link to="/" className="p-2 rounded-lg bg-secondary hover:bg-muted transition-colors">
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold">{t('dash.title')}</h1>
            <p className="text-sm text-muted-foreground">{t('dash.subtitle')}</p>
          </div>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-card rounded-2xl border border-border p-5 shadow-elevated text-center">
            <QrCode className="w-6 h-6 mx-auto mb-2 text-primary" />
            <p className="text-2xl font-extrabold">{stats.totalCreated}</p>
            <p className="text-xs text-muted-foreground">{t('dash.totalCreated')}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-card rounded-2xl border border-border p-5 shadow-elevated text-center">
            <Download className="w-6 h-6 mx-auto mb-2 text-primary" />
            <p className="text-2xl font-extrabold">{stats.totalDownloaded}</p>
            <p className="text-xs text-muted-foreground">{t('dash.totalDownloaded')}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-card rounded-2xl border border-border p-5 shadow-elevated text-center">
            <Trophy className="w-6 h-6 mx-auto mb-2 text-primary" />
            <p className="text-2xl font-extrabold">{unlocked.length}/{ACHIEVEMENTS.length}</p>
            <p className="text-xs text-muted-foreground">{t('dash.achievementsUnlocked')}</p>
          </motion.div>
        </div>

        {/* Achievement progress */}
        <div className="bg-card rounded-2xl border border-border p-6 shadow-elevated mb-8">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <Trophy className="w-4 h-4 text-primary" /> {t('ach.title')}
          </h3>
          <Progress value={progress} className="h-2 mb-3" />
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
            {ACHIEVEMENTS.map(ach => {
              const isUnlocked = unlocked.some(u => u.id === ach.id);
              return (
                <div
                  key={ach.id}
                  className={`text-center p-2 rounded-xl transition-all ${
                    isUnlocked ? 'bg-primary/5' : 'opacity-40 grayscale'
                  }`}
                >
                  <div className="text-xl mb-0.5">{ach.icon}</div>
                  <p className="text-[10px] font-medium">{t(ach.nameKey)}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* History */}
        <div className="bg-card rounded-2xl border border-border p-6 shadow-elevated">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" /> {t('hist.title')} ({history.length})
            </h3>
            {history.length > 0 && (
              <button onClick={clearHistory} className="text-xs text-destructive hover:underline inline-flex items-center gap-1">
                <Trash2 className="w-3 h-3" /> {t('hist.clear')}
              </button>
            )}
          </div>

          {history.length === 0 ? (
            <div className="text-center py-12">
              <QrCode className="w-16 h-16 text-muted-foreground/20 mx-auto mb-4" />
              <p className="text-sm text-muted-foreground mb-4">{t('dash.noHistory')}</p>
              <Link
                to="/"
                className="gradient-bg text-primary-foreground px-6 py-2.5 rounded-xl text-sm font-semibold shadow-premium hover:opacity-90 transition-opacity inline-flex items-center gap-2"
              >
                <Plus className="w-4 h-4" /> {t('dash.createFirst')}
              </Link>
            </div>
          ) : (
            <div className="space-y-3 max-h-[500px] overflow-y-auto">
              {history.map(item => (
                <div key={item.id} className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border">
                  <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                    <QrCode className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{t(CONTENT_TYPE_KEYS[item.type] || item.type)}</p>
                    <p className="text-xs text-muted-foreground truncate">{item.data.slice(0, 60)}</p>
                    <p className="text-[10px] text-muted-foreground/60 mt-0.5">
                      {new Date(item.createdAt).toLocaleDateString()} {new Date(item.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
