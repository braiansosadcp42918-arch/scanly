import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useI18n } from '@/lib/i18n';

export default function PrivacyPolicy() {
  const { lang } = useI18n();

  const content: Record<string, JSX.Element> = {
    es: (
      <>
        <h1 className="text-3xl font-bold mb-6">Política de Privacidad</h1>
        <p className="text-muted-foreground mb-4">Última actualización: 23 de marzo de 2026</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">1. Información que recopilamos</h2>
        <p className="mb-4">Scanly es una herramienta que funciona completamente en tu navegador. <strong>No recopilamos, almacenamos ni transmitimos datos personales</strong> a ningún servidor externo. Toda la generación de códigos QR ocurre localmente en tu dispositivo.</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">2. Almacenamiento local</h2>
        <p className="mb-4">Utilizamos el almacenamiento local del navegador (localStorage) exclusivamente para guardar tus preferencias de idioma y tema visual. Esta información permanece en tu dispositivo y nunca es enviada a terceros.</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">3. Cookies y publicidad</h2>
        <p className="mb-4">Nuestro sitio puede mostrar anuncios a través de Google AdSense, que utiliza cookies para personalizar anuncios. Google puede utilizar información sobre tus visitas a este y otros sitios web para mostrar anuncios relevantes. Puedes gestionar tus preferencias de anuncios en <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">la configuración de anuncios de Google</a>.</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">4. Servicios de terceros</h2>
        <p className="mb-4">Los únicos servicios de terceros integrados son:</p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Google AdSense (publicidad)</li>
          <li>Google Fonts (tipografías)</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">5. Derechos del usuario</h2>
        <p className="mb-4">Al no recopilar datos personales, no existe información que debamos eliminar o proporcionar. Si tienes alguna consulta, puedes contactarnos.</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">6. Cambios en esta política</h2>
        <p className="mb-4">Nos reservamos el derecho de actualizar esta política. Los cambios serán publicados en esta misma página.</p>
      </>
    ),
    en: (
      <>
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-muted-foreground mb-4">Last updated: March 23, 2026</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">1. Information We Collect</h2>
        <p className="mb-4">Scanly runs entirely in your browser. <strong>We do not collect, store, or transmit personal data</strong> to any external server. All QR code generation happens locally on your device.</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">2. Local Storage</h2>
        <p className="mb-4">We use your browser's local storage (localStorage) only to save your language and theme preferences. This information stays on your device and is never sent to third parties.</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">3. Cookies and Advertising</h2>
        <p className="mb-4">Our site may display ads through Google AdSense, which uses cookies to personalize ads. Google may use information about your visits to this and other websites to show relevant ads. You can manage your ad preferences at <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Ads Settings</a>.</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">4. Third-Party Services</h2>
        <p className="mb-4">The only integrated third-party services are:</p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Google AdSense (advertising)</li>
          <li>Google Fonts (typography)</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">5. User Rights</h2>
        <p className="mb-4">Since we do not collect personal data, there is no information to delete or provide. If you have any questions, feel free to contact us.</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">6. Changes to This Policy</h2>
        <p className="mb-4">We reserve the right to update this policy. Changes will be posted on this page.</p>
      </>
    ),
    pt: (
      <>
        <h1 className="text-3xl font-bold mb-6">Política de Privacidade</h1>
        <p className="text-muted-foreground mb-4">Última atualização: 23 de março de 2026</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">1. Informações que coletamos</h2>
        <p className="mb-4">Scanly funciona inteiramente no seu navegador. <strong>Não coletamos, armazenamos ou transmitimos dados pessoais</strong> para nenhum servidor externo. Toda a geração de códigos QR acontece localmente no seu dispositivo.</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">2. Armazenamento local</h2>
        <p className="mb-4">Utilizamos o armazenamento local do navegador (localStorage) apenas para salvar suas preferências de idioma e tema. Esta informação permanece no seu dispositivo e nunca é enviada a terceiros.</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">3. Cookies e publicidade</h2>
        <p className="mb-4">Nosso site pode exibir anúncios através do Google AdSense, que utiliza cookies para personalizar anúncios. Você pode gerenciar suas preferências em <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Configurações de anúncios do Google</a>.</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">4. Serviços de terceiros</h2>
        <p className="mb-4">Os únicos serviços de terceiros integrados são:</p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Google AdSense (publicidade)</li>
          <li>Google Fonts (tipografia)</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">5. Direitos do usuário</h2>
        <p className="mb-4">Como não coletamos dados pessoais, não há informações para excluir ou fornecer. Se tiver alguma dúvida, entre em contato.</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">6. Alterações nesta política</h2>
        <p className="mb-4">Reservamo-nos o direito de atualizar esta política. As alterações serão publicadas nesta página.</p>
      </>
    ),
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container max-w-3xl py-16">
        <article className="prose prose-sm dark:prose-invert max-w-none text-foreground leading-relaxed">
          {content[lang] || content.es}
        </article>
      </main>
      <Footer />
    </div>
  );
}
