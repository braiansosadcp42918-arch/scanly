import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useI18n } from '@/lib/i18n';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  const { lang, t } = useI18n();

  const content: Record<string, JSX.Element> = {
    es: (
      <>
        <h1 className="text-3xl font-bold mb-6">Política de Privacidad</h1>
        <p className="text-muted-foreground mb-4">Última actualización: 23 de marzo de 2026</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">1. Información que recopilamos</h2>
        <p className="mb-4">Scanly es una herramienta que funciona completamente en tu navegador. <strong>No recopilamos, almacenamos ni transmitimos datos personales</strong> a ningún servidor externo.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">2. Almacenamiento local</h2>
        <p className="mb-4">Utilizamos el almacenamiento local del navegador (localStorage) exclusivamente para guardar tus preferencias de idioma y tema visual.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">3. Cookies y publicidad</h2>
        <p className="mb-4">Nuestro sitio puede mostrar anuncios a través de Google AdSense, que utiliza cookies para personalizar anuncios. Puedes gestionar tus preferencias en <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">la configuración de anuncios de Google</a>.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">4. Servicios de terceros</h2>
        <ul className="list-disc pl-6 mb-4 space-y-1"><li>Google AdSense (publicidad)</li><li>Google Fonts (tipografías)</li></ul>
        <h2 className="text-xl font-semibold mt-8 mb-3">5. Derechos del usuario</h2>
        <p className="mb-4">Al no recopilar datos personales, no existe información que debamos eliminar o proporcionar.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">6. Cambios en esta política</h2>
        <p className="mb-4">Nos reservamos el derecho de actualizar esta política. Los cambios serán publicados en esta misma página.</p>
      </>
    ),
    en: (
      <>
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-muted-foreground mb-4">Last updated: March 23, 2026</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">1. Information We Collect</h2>
        <p className="mb-4">Scanly runs entirely in your browser. <strong>We do not collect, store, or transmit personal data</strong> to any external server.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">2. Local Storage</h2>
        <p className="mb-4">We use your browser's localStorage only to save your language and theme preferences.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">3. Cookies and Advertising</h2>
        <p className="mb-4">Our site may display ads through Google AdSense, which uses cookies. You can manage preferences at <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Ads Settings</a>.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">4. Third-Party Services</h2>
        <ul className="list-disc pl-6 mb-4 space-y-1"><li>Google AdSense (advertising)</li><li>Google Fonts (typography)</li></ul>
        <h2 className="text-xl font-semibold mt-8 mb-3">5. User Rights</h2>
        <p className="mb-4">Since we do not collect personal data, there is no information to delete or provide.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">6. Changes to This Policy</h2>
        <p className="mb-4">We reserve the right to update this policy. Changes will be posted on this page.</p>
      </>
    ),
    pt: (
      <>
        <h1 className="text-3xl font-bold mb-6">Política de Privacidade</h1>
        <p className="text-muted-foreground mb-4">Última atualização: 23 de março de 2026</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">1. Informações que coletamos</h2>
        <p className="mb-4">Scanly funciona inteiramente no seu navegador. <strong>Não coletamos, armazenamos ou transmitimos dados pessoais</strong>.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">2. Armazenamento local</h2>
        <p className="mb-4">Utilizamos o localStorage apenas para salvar suas preferências de idioma e tema.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">3. Cookies e publicidade</h2>
        <p className="mb-4">Nosso site pode exibir anúncios através do Google AdSense. Você pode gerenciar suas preferências em <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Configurações de anúncios do Google</a>.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">4. Serviços de terceiros</h2>
        <ul className="list-disc pl-6 mb-4 space-y-1"><li>Google AdSense (publicidade)</li><li>Google Fonts (tipografia)</li></ul>
        <h2 className="text-xl font-semibold mt-8 mb-3">5. Direitos do usuário</h2>
        <p className="mb-4">Como não coletamos dados pessoais, não há informações para excluir ou fornecer.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">6. Alterações nesta política</h2>
        <p className="mb-4">Reservamo-nos o direito de atualizar esta política.</p>
      </>
    ),
    fr: (
      <>
        <h1 className="text-3xl font-bold mb-6">Politique de Confidentialité</h1>
        <p className="text-muted-foreground mb-4">Dernière mise à jour : 23 mars 2026</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">1. Informations collectées</h2>
        <p className="mb-4">Scanly fonctionne entièrement dans votre navigateur. <strong>Nous ne collectons, stockons ni transmettons de données personnelles</strong>.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">2. Stockage local</h2>
        <p className="mb-4">Nous utilisons le localStorage uniquement pour sauvegarder vos préférences de langue et de thème.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">3. Cookies et publicité</h2>
        <p className="mb-4">Notre site peut afficher des annonces via Google AdSense. Gérez vos préférences sur <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">les paramètres Google Ads</a>.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">4. Services tiers</h2>
        <ul className="list-disc pl-6 mb-4 space-y-1"><li>Google AdSense (publicité)</li><li>Google Fonts (typographie)</li></ul>
        <h2 className="text-xl font-semibold mt-8 mb-3">5. Droits de l'utilisateur</h2>
        <p className="mb-4">Aucune donnée personnelle n'étant collectée, il n'y a rien à supprimer ou fournir.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">6. Modifications</h2>
        <p className="mb-4">Nous nous réservons le droit de mettre à jour cette politique.</p>
      </>
    ),
    de: (
      <>
        <h1 className="text-3xl font-bold mb-6">Datenschutzrichtlinie</h1>
        <p className="text-muted-foreground mb-4">Letzte Aktualisierung: 23. März 2026</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">1. Erhobene Daten</h2>
        <p className="mb-4">Scanly läuft vollständig in Ihrem Browser. <strong>Wir erheben, speichern oder übertragen keine personenbezogenen Daten</strong>.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">2. Lokaler Speicher</h2>
        <p className="mb-4">Wir nutzen den localStorage ausschließlich zum Speichern Ihrer Sprach- und Theme-Einstellungen.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">3. Cookies und Werbung</h2>
        <p className="mb-4">Unsere Website kann Anzeigen über Google AdSense anzeigen. Verwalten Sie Ihre Einstellungen unter <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Ads-Einstellungen</a>.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">4. Drittanbieter-Dienste</h2>
        <ul className="list-disc pl-6 mb-4 space-y-1"><li>Google AdSense (Werbung)</li><li>Google Fonts (Typografie)</li></ul>
        <h2 className="text-xl font-semibold mt-8 mb-3">5. Nutzerrechte</h2>
        <p className="mb-4">Da keine personenbezogenen Daten erhoben werden, gibt es keine Daten zum Löschen oder Bereitstellen.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">6. Änderungen</h2>
        <p className="mb-4">Wir behalten uns das Recht vor, diese Richtlinie zu aktualisieren.</p>
      </>
    ),
    it: (
      <>
        <h1 className="text-3xl font-bold mb-6">Informativa sulla Privacy</h1>
        <p className="text-muted-foreground mb-4">Ultimo aggiornamento: 23 marzo 2026</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">1. Informazioni raccolte</h2>
        <p className="mb-4">Scanly funziona interamente nel tuo browser. <strong>Non raccogliamo, memorizziamo né trasmettiamo dati personali</strong>.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">2. Archiviazione locale</h2>
        <p className="mb-4">Utilizziamo il localStorage solo per salvare le tue preferenze di lingua e tema.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">3. Cookie e pubblicità</h2>
        <p className="mb-4">Il nostro sito può mostrare annunci tramite Google AdSense. Gestisci le tue preferenze su <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Impostazioni annunci Google</a>.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">4. Servizi di terze parti</h2>
        <ul className="list-disc pl-6 mb-4 space-y-1"><li>Google AdSense (pubblicità)</li><li>Google Fonts (tipografia)</li></ul>
        <h2 className="text-xl font-semibold mt-8 mb-3">5. Diritti dell'utente</h2>
        <p className="mb-4">Non raccogliendo dati personali, non ci sono informazioni da eliminare o fornire.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">6. Modifiche</h2>
        <p className="mb-4">Ci riserviamo il diritto di aggiornare questa informativa.</p>
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
