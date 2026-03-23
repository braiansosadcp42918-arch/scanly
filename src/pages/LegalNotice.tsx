import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useI18n } from '@/lib/i18n';

export default function LegalNotice() {
  const { lang } = useI18n();

  const content: Record<string, JSX.Element> = {
    es: (
      <>
        <h1 className="text-3xl font-bold mb-6">Aviso Legal</h1>
        <p className="text-muted-foreground mb-4">Última actualización: 23 de marzo de 2026</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">1. Información del titular</h2>
        <p className="mb-4">Este sitio web es operado bajo la marca <strong>Scanly</strong>. Scanly es un proyecto independiente dedicado a la generación gratuita de códigos QR.</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">2. Objeto del sitio</h2>
        <p className="mb-4">El propósito de este sitio es proporcionar una herramienta gratuita para la creación y personalización de códigos QR. No se requiere registro ni suscripción para utilizar el servicio.</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">3. Propiedad intelectual</h2>
        <p className="mb-4">Todos los contenidos del sitio web, incluyendo pero no limitado a textos, gráficos, logotipos, iconos, imágenes, código fuente y software, son propiedad de Scanly o de sus respectivos propietarios y están protegidos por las leyes de propiedad intelectual.</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">4. Exclusión de responsabilidad</h2>
        <p className="mb-4">Scanly no garantiza la ausencia de errores en el contenido del sitio ni que éste se encuentre permanentemente actualizado. El usuario utiliza el servicio bajo su propia responsabilidad.</p>
        <p className="mb-4">No nos hacemos responsables de:</p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>El contenido codificado en los QR por los usuarios</li>
          <li>La disponibilidad continua del servicio</li>
          <li>Daños derivados del uso o imposibilidad de uso del servicio</li>
          <li>El contenido de sitios web enlazados desde los QR generados</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">5. Enlaces externos</h2>
        <p className="mb-4">Este sitio puede contener enlaces a páginas externas. No nos hacemos responsables del contenido ni de las políticas de privacidad de dichos sitios.</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">6. Legislación aplicable</h2>
        <p className="mb-4">Este aviso legal se rige por la legislación vigente. Para cualquier controversia, las partes se someterán a los tribunales competentes.</p>
      </>
    ),
    en: (
      <>
        <h1 className="text-3xl font-bold mb-6">Legal Notice</h1>
        <p className="text-muted-foreground mb-4">Last updated: March 23, 2026</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">1. Owner Information</h2>
        <p className="mb-4">This website is operated under the <strong>Scanly</strong> brand. Scanly is an independent project dedicated to free QR code generation.</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">2. Purpose</h2>
        <p className="mb-4">The purpose of this site is to provide a free tool for creating and customizing QR codes. No registration or subscription is required.</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">3. Intellectual Property</h2>
        <p className="mb-4">All website content, including but not limited to text, graphics, logos, icons, images, source code, and software, are the property of Scanly or their respective owners and are protected by intellectual property laws.</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">4. Disclaimer</h2>
        <p className="mb-4">Scanly does not guarantee error-free content or permanent updates. Users use the service at their own risk.</p>
        <p className="mb-4">We are not responsible for:</p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Content encoded in QR codes by users</li>
          <li>Continuous service availability</li>
          <li>Damages from use or inability to use the service</li>
          <li>Content of websites linked from generated QR codes</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">5. External Links</h2>
        <p className="mb-4">This site may contain links to external pages. We are not responsible for their content or privacy policies.</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">6. Applicable Law</h2>
        <p className="mb-4">This legal notice is governed by applicable law. For any dispute, the parties shall submit to the competent courts.</p>
      </>
    ),
    pt: (
      <>
        <h1 className="text-3xl font-bold mb-6">Aviso Legal</h1>
        <p className="text-muted-foreground mb-4">Última atualização: 23 de março de 2026</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">1. Informações do titular</h2>
        <p className="mb-4">Este site é operado sob a marca <strong>Scanly</strong>. Scanly é um projeto independente dedicado à geração gratuita de códigos QR.</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">2. Objetivo do site</h2>
        <p className="mb-4">O propósito deste site é fornecer uma ferramenta gratuita para a criação e personalização de códigos QR. Não é necessário registro ou assinatura.</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">3. Propriedade intelectual</h2>
        <p className="mb-4">Todo o conteúdo do site, incluindo textos, gráficos, logos, ícones, imagens, código-fonte e software, são propriedade do Scanly ou de seus respectivos proprietários e são protegidos pelas leis de propriedade intelectual.</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">4. Isenção de responsabilidade</h2>
        <p className="mb-4">Scanly não garante conteúdo livre de erros ou atualizações permanentes. Os usuários utilizam o serviço por sua própria conta e risco.</p>
        <p className="mb-4">Não nos responsabilizamos por:</p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Conteúdo codificado nos QR pelos usuários</li>
          <li>Disponibilidade contínua do serviço</li>
          <li>Danos decorrentes do uso ou impossibilidade de uso do serviço</li>
          <li>Conteúdo de sites vinculados a partir dos QR gerados</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">5. Links externos</h2>
        <p className="mb-4">Este site pode conter links para páginas externas. Não nos responsabilizamos pelo conteúdo ou políticas de privacidade desses sites.</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">6. Legislação aplicável</h2>
        <p className="mb-4">Este aviso legal é regido pela legislação vigente. Para qualquer controvérsia, as partes se submeterão aos tribunais competentes.</p>
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
