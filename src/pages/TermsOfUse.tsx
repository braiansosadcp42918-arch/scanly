import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useI18n } from '@/lib/i18n';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function TermsOfUse() {
  const { lang, t } = useI18n();

  const content: Record<string, JSX.Element> = {
    es: (
      <>
        <h1 className="text-3xl font-bold mb-6">Términos de Uso</h1>
        <p className="text-muted-foreground mb-4">Última actualización: 23 de marzo de 2026</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">1. Aceptación de los términos</h2>
        <p className="mb-4">Al acceder y utilizar Scanly, aceptas estos términos de uso en su totalidad.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">2. Descripción del servicio</h2>
        <p className="mb-4">Scanly es una herramienta web gratuita para generar códigos QR personalizados. El servicio se proporciona "tal cual".</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">3. Uso permitido</h2>
        <p className="mb-4">Puedes usar Scanly para fines personales y comerciales. No está permitido:</p>
        <ul className="list-disc pl-6 mb-4 space-y-1"><li>Utilizar el servicio para actividades ilegales</li><li>Generar QR con contenido malicioso o fraudulento</li><li>Intentar vulnerar la seguridad del sitio</li><li>Reproducir, duplicar o revender el servicio</li></ul>
        <h2 className="text-xl font-semibold mt-8 mb-3">4. Propiedad intelectual</h2>
        <p className="mb-4">Los códigos QR generados son de tu propiedad. La marca Scanly y sus elementos visuales son propiedad exclusiva de sus creadores.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">5. Limitación de responsabilidad</h2>
        <p className="mb-4">Scanly no se hace responsable por el uso que los usuarios hagan de los códigos QR generados.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">6. Disponibilidad</h2>
        <p className="mb-4">No garantizamos la disponibilidad ininterrumpida del servicio.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">7. Modificaciones</h2>
        <p className="mb-4">Nos reservamos el derecho de modificar estos términos en cualquier momento.</p>
      </>
    ),
    en: (
      <>
        <h1 className="text-3xl font-bold mb-6">Terms of Use</h1>
        <p className="text-muted-foreground mb-4">Last updated: March 23, 2026</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">1. Acceptance of Terms</h2>
        <p className="mb-4">By accessing and using Scanly, you agree to these terms of use in full.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">2. Service Description</h2>
        <p className="mb-4">Scanly is a free web tool for generating custom QR codes. The service is provided "as is".</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">3. Permitted Use</h2>
        <p className="mb-4">You may use Scanly for personal and commercial purposes. The following is not permitted:</p>
        <ul className="list-disc pl-6 mb-4 space-y-1"><li>Using the service for illegal activities</li><li>Generating QR codes with malicious or fraudulent content</li><li>Attempting to breach site security</li><li>Reproducing, duplicating, or reselling the service</li></ul>
        <h2 className="text-xl font-semibold mt-8 mb-3">4. Intellectual Property</h2>
        <p className="mb-4">Generated QR codes are your property. The Scanly brand and visual elements are the exclusive property of their creators.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">5. Limitation of Liability</h2>
        <p className="mb-4">Scanly is not responsible for how users utilize generated QR codes.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">6. Availability</h2>
        <p className="mb-4">We do not guarantee uninterrupted availability.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">7. Modifications</h2>
        <p className="mb-4">We reserve the right to modify these terms at any time.</p>
      </>
    ),
    pt: (
      <>
        <h1 className="text-3xl font-bold mb-6">Termos de Uso</h1>
        <p className="text-muted-foreground mb-4">Última atualização: 23 de março de 2026</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">1. Aceitação dos termos</h2>
        <p className="mb-4">Ao acessar e utilizar o Scanly, você aceita estes termos na íntegra.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">2. Descrição do serviço</h2>
        <p className="mb-4">Scanly é uma ferramenta web gratuita para gerar códigos QR personalizados.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">3. Uso permitido</h2>
        <p className="mb-4">Você pode usar o Scanly para fins pessoais e comerciais. Não é permitido:</p>
        <ul className="list-disc pl-6 mb-4 space-y-1"><li>Utilizar o serviço para atividades ilegais</li><li>Gerar QR com conteúdo malicioso ou fraudulento</li><li>Tentar violar a segurança do site</li><li>Reproduzir, duplicar ou revender o serviço</li></ul>
        <h2 className="text-xl font-semibold mt-8 mb-3">4. Propriedade intelectual</h2>
        <p className="mb-4">Os códigos QR gerados são de sua propriedade. A marca Scanly é propriedade exclusiva de seus criadores.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">5. Limitação de responsabilidade</h2>
        <p className="mb-4">Scanly não se responsabiliza pelo uso que os usuários façam dos QR gerados.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">6. Disponibilidade</h2>
        <p className="mb-4">Não garantimos a disponibilidade ininterrupta do serviço.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">7. Modificações</h2>
        <p className="mb-4">Reservamo-nos o direito de modificar estes termos a qualquer momento.</p>
      </>
    ),
    fr: (
      <>
        <h1 className="text-3xl font-bold mb-6">Conditions d'Utilisation</h1>
        <p className="text-muted-foreground mb-4">Dernière mise à jour : 23 mars 2026</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">1. Acceptation des conditions</h2>
        <p className="mb-4">En accédant à Scanly, vous acceptez ces conditions d'utilisation dans leur intégralité.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">2. Description du service</h2>
        <p className="mb-4">Scanly est un outil web gratuit pour générer des codes QR personnalisés.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">3. Utilisation autorisée</h2>
        <p className="mb-4">Vous pouvez utiliser Scanly à des fins personnelles et commerciales. Il est interdit de :</p>
        <ul className="list-disc pl-6 mb-4 space-y-1"><li>Utiliser le service pour des activités illégales</li><li>Générer des QR avec du contenu malveillant ou frauduleux</li><li>Tenter de violer la sécurité du site</li><li>Reproduire, dupliquer ou revendre le service</li></ul>
        <h2 className="text-xl font-semibold mt-8 mb-3">4. Propriété intellectuelle</h2>
        <p className="mb-4">Les codes QR générés vous appartiennent. La marque Scanly est la propriété exclusive de ses créateurs.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">5. Limitation de responsabilité</h2>
        <p className="mb-4">Scanly n'est pas responsable de l'utilisation faite des codes QR générés.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">6. Disponibilité</h2>
        <p className="mb-4">Nous ne garantissons pas une disponibilité ininterrompue du service.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">7. Modifications</h2>
        <p className="mb-4">Nous nous réservons le droit de modifier ces conditions à tout moment.</p>
      </>
    ),
    de: (
      <>
        <h1 className="text-3xl font-bold mb-6">Nutzungsbedingungen</h1>
        <p className="text-muted-foreground mb-4">Letzte Aktualisierung: 23. März 2026</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">1. Annahme der Bedingungen</h2>
        <p className="mb-4">Durch den Zugriff auf Scanly akzeptieren Sie diese Nutzungsbedingungen vollständig.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">2. Dienstbeschreibung</h2>
        <p className="mb-4">Scanly ist ein kostenloses Web-Tool zur Erstellung benutzerdefinierter QR-Codes.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">3. Erlaubte Nutzung</h2>
        <p className="mb-4">Sie dürfen Scanly für persönliche und kommerzielle Zwecke nutzen. Nicht erlaubt ist:</p>
        <ul className="list-disc pl-6 mb-4 space-y-1"><li>Den Dienst für illegale Aktivitäten nutzen</li><li>QR-Codes mit bösartigem oder betrügerischem Inhalt generieren</li><li>Die Sicherheit der Website verletzen</li><li>Den Dienst reproduzieren, duplizieren oder weiterverkaufen</li></ul>
        <h2 className="text-xl font-semibold mt-8 mb-3">4. Geistiges Eigentum</h2>
        <p className="mb-4">Generierte QR-Codes sind Ihr Eigentum. Die Marke Scanly ist Eigentum ihrer Ersteller.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">5. Haftungsbeschränkung</h2>
        <p className="mb-4">Scanly haftet nicht für die Nutzung der generierten QR-Codes durch Benutzer.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">6. Verfügbarkeit</h2>
        <p className="mb-4">Wir garantieren keine ununterbrochene Verfügbarkeit des Dienstes.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">7. Änderungen</h2>
        <p className="mb-4">Wir behalten uns das Recht vor, diese Bedingungen jederzeit zu ändern.</p>
      </>
    ),
    it: (
      <>
        <h1 className="text-3xl font-bold mb-6">Termini di Utilizzo</h1>
        <p className="text-muted-foreground mb-4">Ultimo aggiornamento: 23 marzo 2026</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">1. Accettazione dei termini</h2>
        <p className="mb-4">Accedendo a Scanly, accetti questi termini di utilizzo nella loro interezza.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">2. Descrizione del servizio</h2>
        <p className="mb-4">Scanly è uno strumento web gratuito per generare codici QR personalizzati.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">3. Uso consentito</h2>
        <p className="mb-4">Puoi usare Scanly per scopi personali e commerciali. Non è consentito:</p>
        <ul className="list-disc pl-6 mb-4 space-y-1"><li>Utilizzare il servizio per attività illegali</li><li>Generare QR con contenuti dannosi o fraudolenti</li><li>Tentare di violare la sicurezza del sito</li><li>Riprodurre, duplicare o rivendere il servizio</li></ul>
        <h2 className="text-xl font-semibold mt-8 mb-3">4. Proprietà intellettuale</h2>
        <p className="mb-4">I codici QR generati sono di tua proprietà. Il marchio Scanly è proprietà esclusiva dei suoi creatori.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">5. Limitazione di responsabilità</h2>
        <p className="mb-4">Scanly non è responsabile per l'uso che gli utenti fanno dei codici QR generati.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">6. Disponibilità</h2>
        <p className="mb-4">Non garantiamo la disponibilità ininterrotta del servizio.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">7. Modifiche</h2>
        <p className="mb-4">Ci riserviamo il diritto di modificare questi termini in qualsiasi momento.</p>
      </>
    ),
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container max-w-3xl py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          {t('legal.back')}
        </Link>
        <article className="prose prose-sm dark:prose-invert max-w-none text-foreground leading-relaxed">
          {content[lang] || content.es}
        </article>
      </main>
      <Footer />
    </div>
  );
}
