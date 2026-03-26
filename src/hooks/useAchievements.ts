import { useState, useEffect } from 'react';

const STATS_KEY = 'scanly-stats';

export interface UserStats {
  totalCreated: number;
  totalDownloaded: number;
  typesUsed: string[];
  usedLogo: boolean;
  usedPassword: boolean;
  customizedColors: boolean;
}

const DEFAULT_STATS: UserStats = {
  totalCreated: 0,
  totalDownloaded: 0,
  typesUsed: [],
  usedLogo: false,
  usedPassword: false,
  customizedColors: false,
};

export interface Achievement {
  id: string;
  nameKey: string;
  descKey: string;
  icon: string;
  check: (stats: UserStats) => boolean;
}

export const ACHIEVEMENTS: Achievement[] = [
  { id: 'first_qr', nameKey: 'ach.first_qr', descKey: 'ach.first_qr_desc', icon: '🎯', check: s => s.totalCreated >= 1 },
  { id: 'five_qrs', nameKey: 'ach.five_qrs', descKey: 'ach.five_qrs_desc', icon: '⭐', check: s => s.totalCreated >= 5 },
  { id: 'ten_qrs', nameKey: 'ach.ten_qrs', descKey: 'ach.ten_qrs_desc', icon: '🏆', check: s => s.totalCreated >= 10 },
  { id: 'first_download', nameKey: 'ach.first_download', descKey: 'ach.first_download_desc', icon: '📥', check: s => s.totalDownloaded >= 1 },
  { id: 'logo_master', nameKey: 'ach.logo_master', descKey: 'ach.logo_master_desc', icon: '🎨', check: s => s.usedLogo },
  { id: 'color_artist', nameKey: 'ach.color_artist', descKey: 'ach.color_artist_desc', icon: '🖌️', check: s => s.customizedColors },
  { id: 'password_guard', nameKey: 'ach.password_guard', descKey: 'ach.password_guard_desc', icon: '🔒', check: s => s.usedPassword },
  { id: 'type_explorer', nameKey: 'ach.type_explorer', descKey: 'ach.type_explorer_desc', icon: '🧭', check: s => s.typesUsed.length >= 5 },
  { id: 'all_types', nameKey: 'ach.all_types', descKey: 'ach.all_types_desc', icon: '👑', check: s => s.typesUsed.length >= 9 },
];

function getStats(): UserStats {
  try {
    const s = localStorage.getItem(STATS_KEY);
    if (s) return { ...DEFAULT_STATS, ...JSON.parse(s) };
  } catch {}
  return { ...DEFAULT_STATS };
}

function saveStats(stats: UserStats) {
  localStorage.setItem(STATS_KEY, JSON.stringify(stats));
}

export function trackQRCreated(type: string) {
  const stats = getStats();
  stats.totalCreated++;
  if (!stats.typesUsed.includes(type)) stats.typesUsed = [...stats.typesUsed, type];
  saveStats(stats);
  window.dispatchEvent(new Event('scanly-stats-update'));
}

export function trackDownload() {
  const stats = getStats();
  stats.totalDownloaded++;
  saveStats(stats);
  window.dispatchEvent(new Event('scanly-stats-update'));
}

export function trackLogoUsed() {
  const stats = getStats();
  if (!stats.usedLogo) {
    stats.usedLogo = true;
    saveStats(stats);
    window.dispatchEvent(new Event('scanly-stats-update'));
  }
}

export function trackPasswordUsed() {
  const stats = getStats();
  if (!stats.usedPassword) {
    stats.usedPassword = true;
    saveStats(stats);
    window.dispatchEvent(new Event('scanly-stats-update'));
  }
}

export function trackColorsCustomized() {
  const stats = getStats();
  if (!stats.customizedColors) {
    stats.customizedColors = true;
    saveStats(stats);
    window.dispatchEvent(new Event('scanly-stats-update'));
  }
}

export function useAchievements() {
  const [stats, setStats] = useState<UserStats>(getStats);

  useEffect(() => {
    const handler = () => setStats(getStats());
    window.addEventListener('scanly-stats-update', handler);
    window.addEventListener('storage', handler);
    return () => {
      window.removeEventListener('scanly-stats-update', handler);
      window.removeEventListener('storage', handler);
    };
  }, []);

  const unlocked = ACHIEVEMENTS.filter(a => a.check(stats));
  const progress = Math.round((unlocked.length / ACHIEVEMENTS.length) * 100);

  return { stats, achievements: ACHIEVEMENTS, unlocked, progress };
}
