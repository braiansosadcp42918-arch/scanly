import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useI18n } from '@/lib/i18n';

export default function TermsOfUse() {
  const { lang } = useI18n();

  const content: Record<string, JSX.Element> = {
    es: (
      <>
        <h1 className="text-3xl font-bold mb-6">Términos de Uso</h1>
        <p className="text-muted-foreground mb-4">Última actualización: 23 de marzo de 2026</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">1. Aceptación de los términos</h2>
        <p className="mb-4">Al acceder y utilizar Scanly, aceptas estos términos de uso en su totalidad. Si no estás de acuerdo con alguno de estos términos, te pedimos que no utilices el servicio.</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">2. Descripción del servicio</h2>
        <p className="mb-4">Scanly es una herramienta web gratuita para generar códigos QR personalizados. El servicio se proporciona "tal cual" sin garantías de ningún tipo.</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">3. Uso permitido</h2>
        <p className="mb-4">Puedes usar Scanly para fines personales y comerciales. Sin embargo, no está permitido:</p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Utilizar el servicio para actividades ilegales</li>
          <li>Generar códigos QR con contenido malicioso, fraudulento o engañoso</li>
          <li>Intentar vulnerar la seguridad del sitio</li>
          <li>Reproducir, duplicar o revender el servicio</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">4. Propiedad intelectual</h2>
        <p className="mb-4">Los códigos QR generados son de tu propiedad. Sin embargo, la marca Scanly, su diseño, código fuente y elementos visuales son propiedad exclusiva de sus creadores.</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">5. Limitación de responsabilidad</h2>
        <p className="mb-4">Scanly no se hace responsable por el uso que los usuarios hagan de los códigos QR generados, ni por daños directos o indirectos derivados del uso del servicio.</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">6. Disponibilidad</h2>
        <p className="mb-4">No garantizamos la disponibilidad ininterrumpida del servicio. Nos reservamos el derecho de modificar, suspender o descontinuar el servicio en cualquier momento.</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">7. Modificaciones</h2>
        <p className="mb-4">Nos reservamos el derecho de modificar estos términos en cualquier momento. El uso continuado del servicio implica la aceptación de los términos actualizados.</p>
      </>
    ),
    en: (
      <>
        <h1 className="text-3xl font-bold mb-6">Terms of Use</h1>
        <p className="text-muted-foreground mb-4">Last updated: March 23, 2026</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">1. Acceptance of Terms</h2>
        <p className="mb-4">By accessing and using Scanly, you agree to these terms of use in full. If you disagree with any of these terms, please do not use the service.</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">2. Service Description</h2>
        <p className="mb-4">Scanly is a free web tool for generating custom QR codes. The service is provided "as is" without warranties of any kind.</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">3. Permitted Use</h2>
        <p className="mb-4">You may use Scanly for personal and commercial purposes. However, the following is not permitted:</p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Using the service for illegal activities</li>
          <li>Generating QR codes with malicious, fraudulent, or misleading content</li>
          <li>Attempting to breach site security</li>
          <li>Reproducing, duplicating, or reselling the service</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">4. Intellectual Property</h2>
        <p className="mb-4">Generated QR codes are your property. However, the Scanly brand, design, source code, and visual elements are the exclusive property of their creators.</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">5. Limitation of Liability</h2>
        <p className="mb-4">Scanly is not responsible for how users utilize generated QR codes, nor for direct or indirect damages resulting from the use of the service.</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">6. Availability</h2>
        <p className="mb-4">We do not guarantee uninterrupted availability. We reserve the right to modify, suspend, or discontinue the service at any time.</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">7. Modifications</h2>
        <p className="mb-4">We reserve the right to modify these terms at any time. Continued use of the service implies acceptance of updated terms.</p>
      </>
    ),
    pt: (
      <>
        <h1 className="text-3xl font-bold mb-6">Termos de Uso</h1>
        <p className="text-muted-foreground mb-4">Última atualização: 23 de março de 2026</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">1. Aceitação dos termos</h2>
        <p className="mb-4">Ao acessar e utilizar o Scanly, você aceita estes termos de uso na íntegra. Se não concordar com algum destes termos, pedimos que não utilize o serviço.</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">2. Descrição do serviço</h2>
        <p className="mb-4">Scanly é uma ferramenta web gratuita para gerar códigos QR personalizados. O serviço é fornecido "como está" sem garantias de qualquer tipo.</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">3. Uso permitido</h2>
        <p className="mb-4">Você pode usar o Scanly para fins pessoais e comerciais. No entanto, não é permitido:</p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Utilizar o serviço para atividades ilegais</li>
          <li>Gerar códigos QR com conteúdo malicioso, fraudulento ou enganoso</li>
          <li>Tentar violar a segurança do site</li>
          <li>Reproduzir, duplicar ou revender o serviço</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">4. Propriedade intelectual</h2>
        <p className="mb-4">Os códigos QR gerados são de sua propriedade. No entanto, a marca Scanly, seu design, código-fonte e elementos visuais são propriedade exclusiva de seus criadores.</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">5. Limitação de responsabilidade</h2>
        <p className="mb-4">Scanly não se responsabiliza pelo uso que os usuários façam dos códigos QR gerados, nem por danos diretos ou indiretos decorrentes do uso do serviço.</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">6. Disponibilidade</h2>
        <p className="mb-4">Não garantimos a disponibilidade ininterrupta do serviço. Reservamo-nos o direito de modificar, suspender ou descontinuar o serviço a qualquer momento.</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">7. Modificações</h2>
        <p className="mb-4">Reservamo-nos o direito de modificar estes termos a qualquer momento. O uso continuado do serviço implica a aceitação dos termos atualizados.</p>
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
