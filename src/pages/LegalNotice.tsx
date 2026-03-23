import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useI18n } from '@/lib/i18n';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function LegalNotice() {
  const { lang, t } = useI18n();

  const content: Record<string, JSX.Element> = {
    es: (
      <>
        <h1 className="text-3xl font-bold mb-6">Aviso Legal</h1>
        <p className="text-muted-foreground mb-4">Última actualización: 23 de marzo de 2026</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">1. Información del titular</h2>
        <p className="mb-4">Este sitio web es operado bajo la marca <strong>Scanly</strong>. Scanly es un proyecto independiente dedicado a la generación gratuita de códigos QR.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">2. Objeto del sitio</h2>
        <p className="mb-4">Proporcionar una herramienta gratuita para la creación y personalización de códigos QR.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">3. Propiedad intelectual</h2>
        <p className="mb-4">Todos los contenidos del sitio son propiedad de Scanly o de sus respectivos propietarios y están protegidos por las leyes de propiedad intelectual.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">4. Exclusión de responsabilidad</h2>
        <p className="mb-4">No nos hacemos responsables de:</p>
        <ul className="list-disc pl-6 mb-4 space-y-1"><li>El contenido codificado en los QR por los usuarios</li><li>La disponibilidad continua del servicio</li><li>Daños derivados del uso del servicio</li><li>El contenido de sitios web enlazados desde los QR</li></ul>
        <h2 className="text-xl font-semibold mt-8 mb-3">5. Enlaces externos</h2>
        <p className="mb-4">No nos hacemos responsables del contenido ni de las políticas de privacidad de sitios externos.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">6. Legislación aplicable</h2>
        <p className="mb-4">Este aviso legal se rige por la legislación vigente.</p>
      </>
    ),
    en: (
      <>
        <h1 className="text-3xl font-bold mb-6">Legal Notice</h1>
        <p className="text-muted-foreground mb-4">Last updated: March 23, 2026</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">1. Owner Information</h2>
        <p className="mb-4">This website is operated under the <strong>Scanly</strong> brand. Scanly is an independent project dedicated to free QR code generation.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">2. Purpose</h2>
        <p className="mb-4">To provide a free tool for creating and customizing QR codes.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">3. Intellectual Property</h2>
        <p className="mb-4">All website content is the property of Scanly or their respective owners and is protected by intellectual property laws.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">4. Disclaimer</h2>
        <p className="mb-4">We are not responsible for:</p>
        <ul className="list-disc pl-6 mb-4 space-y-1"><li>Content encoded in QR codes by users</li><li>Continuous service availability</li><li>Damages from use of the service</li><li>Content of websites linked from generated QR codes</li></ul>
        <h2 className="text-xl font-semibold mt-8 mb-3">5. External Links</h2>
        <p className="mb-4">We are not responsible for the content or privacy policies of external sites.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">6. Applicable Law</h2>
        <p className="mb-4">This legal notice is governed by applicable law.</p>
      </>
    ),
    pt: (
      <>
        <h1 className="text-3xl font-bold mb-6">Aviso Legal</h1>
        <p className="text-muted-foreground mb-4">Última atualização: 23 de março de 2026</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">1. Informações do titular</h2>
        <p className="mb-4">Este site é operado sob a marca <strong>Scanly</strong>.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">2. Objetivo do site</h2>
        <p className="mb-4">Fornecer uma ferramenta gratuita para criação e personalização de códigos QR.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">3. Propriedade intelectual</h2>
        <p className="mb-4">Todo o conteúdo do site é propriedade do Scanly ou de seus respectivos proprietários.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">4. Isenção de responsabilidade</h2>
        <p className="mb-4">Não nos responsabilizamos por:</p>
        <ul className="list-disc pl-6 mb-4 space-y-1"><li>Conteúdo codificado nos QR pelos usuários</li><li>Disponibilidade contínua do serviço</li><li>Danos decorrentes do uso do serviço</li><li>Conteúdo de sites vinculados a partir dos QR</li></ul>
        <h2 className="text-xl font-semibold mt-8 mb-3">5. Links externos</h2>
        <p className="mb-4">Não nos responsabilizamos pelo conteúdo de sites externos.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">6. Legislação aplicável</h2>
        <p className="mb-4">Este aviso legal é regido pela legislação vigente.</p>
      </>
    ),
    fr: (
      <>
        <h1 className="text-3xl font-bold mb-6">Mentions Légales</h1>
        <p className="text-muted-foreground mb-4">Dernière mise à jour : 23 mars 2026</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">1. Informations sur le propriétaire</h2>
        <p className="mb-4">Ce site est exploité sous la marque <strong>Scanly</strong>.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">2. Objet du site</h2>
        <p className="mb-4">Fournir un outil gratuit pour créer et personnaliser des codes QR.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">3. Propriété intellectuelle</h2>
        <p className="mb-4">Tout le contenu du site est la propriété de Scanly ou de ses propriétaires respectifs.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">4. Clause de non-responsabilité</h2>
        <p className="mb-4">Nous ne sommes pas responsables :</p>
        <ul className="list-disc pl-6 mb-4 space-y-1"><li>Du contenu encodé dans les QR par les utilisateurs</li><li>De la disponibilité continue du service</li><li>Des dommages liés à l'utilisation du service</li><li>Du contenu des sites liés depuis les QR générés</li></ul>
        <h2 className="text-xl font-semibold mt-8 mb-3">5. Liens externes</h2>
        <p className="mb-4">Nous ne sommes pas responsables du contenu des sites externes.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">6. Droit applicable</h2>
        <p className="mb-4">Ces mentions légales sont régies par le droit applicable.</p>
      </>
    ),
    de: (
      <>
        <h1 className="text-3xl font-bold mb-6">Impressum</h1>
        <p className="text-muted-foreground mb-4">Letzte Aktualisierung: 23. März 2026</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">1. Angaben zum Betreiber</h2>
        <p className="mb-4">Diese Website wird unter der Marke <strong>Scanly</strong> betrieben.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">2. Zweck der Website</h2>
        <p className="mb-4">Bereitstellung eines kostenlosen Tools zur Erstellung und Anpassung von QR-Codes.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">3. Geistiges Eigentum</h2>
        <p className="mb-4">Alle Inhalte der Website sind Eigentum von Scanly oder ihren jeweiligen Eigentümern.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">4. Haftungsausschluss</h2>
        <p className="mb-4">Wir haften nicht für:</p>
        <ul className="list-disc pl-6 mb-4 space-y-1"><li>Von Nutzern in QR-Codes kodierte Inhalte</li><li>Kontinuierliche Dienstverfügbarkeit</li><li>Schäden aus der Nutzung des Dienstes</li><li>Inhalte verlinkter Websites</li></ul>
        <h2 className="text-xl font-semibold mt-8 mb-3">5. Externe Links</h2>
        <p className="mb-4">Wir sind nicht verantwortlich für Inhalte externer Websites.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">6. Anwendbares Recht</h2>
        <p className="mb-4">Dieses Impressum unterliegt dem geltenden Recht.</p>
      </>
    ),
    it: (
      <>
        <h1 className="text-3xl font-bold mb-6">Avviso Legale</h1>
        <p className="text-muted-foreground mb-4">Ultimo aggiornamento: 23 marzo 2026</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">1. Informazioni sul titolare</h2>
        <p className="mb-4">Questo sito è gestito con il marchio <strong>Scanly</strong>.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">2. Scopo del sito</h2>
        <p className="mb-4">Fornire uno strumento gratuito per la creazione e personalizzazione di codici QR.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">3. Proprietà intellettuale</h2>
        <p className="mb-4">Tutti i contenuti del sito sono proprietà di Scanly o dei rispettivi proprietari.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">4. Esclusione di responsabilità</h2>
        <p className="mb-4">Non siamo responsabili per:</p>
        <ul className="list-disc pl-6 mb-4 space-y-1"><li>Contenuti codificati nei QR dagli utenti</li><li>Disponibilità continua del servizio</li><li>Danni derivanti dall'uso del servizio</li><li>Contenuti di siti web collegati dai QR</li></ul>
        <h2 className="text-xl font-semibold mt-8 mb-3">5. Link esterni</h2>
        <p className="mb-4">Non siamo responsabili del contenuto di siti esterni.</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">6. Legge applicabile</h2>
        <p className="mb-4">Questo avviso legale è regolato dalla legge applicabile.</p>
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
