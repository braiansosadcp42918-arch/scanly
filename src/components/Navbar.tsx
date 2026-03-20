import { useTheme } from '@/hooks/useTheme';
import { Moon, Sun, QrCode } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const { isDark, toggle } = useTheme();

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
          <a href="#generator" className="hover:text-foreground transition-colors">Generador</a>
          <a href="#features" className="hover:text-foreground transition-colors">Funciones</a>
          <a href="#templates" className="hover:text-foreground transition-colors">Plantillas</a>
          <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
        </div>

        <button
          onClick={toggle}
          className="p-2 rounded-lg bg-secondary hover:bg-muted transition-colors"
          aria-label="Cambiar tema"
        >
          {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
      </div>
    </motion.nav>
  );
}
