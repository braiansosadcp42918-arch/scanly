import { QrCode } from 'lucide-react';

export default function Footer() {
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
              Generador de códigos QR profesional, gratuito y sin registro. Crea, personaliza y descarga en segundos.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3">Enlaces</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#generator" className="hover:text-foreground transition-colors">Generador</a></li>
              <li><a href="#features" className="hover:text-foreground transition-colors">Funciones</a></li>
              <li><a href="#templates" className="hover:text-foreground transition-colors">Plantillas</a></li>
              <li><a href="#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Política de privacidad</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Términos de uso</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Aviso legal</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Scanly. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
