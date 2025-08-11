import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-lime-400 hover:text-lime-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-lime-400 to-green-400 bg-clip-text text-transparent">
            Política de Privacidad
          </h1>
          <p className="text-slate-300 text-lg">Última actualización: Enero 2025</p>
        </div>

        <div className="prose prose-invert prose-lime max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-lime-400">1. Introducción</h2>
            <p className="text-slate-300 leading-relaxed">
              En Advento, respetamos tu privacidad y nos comprometemos a proteger tus datos personales. Esta política
              describe cómo recopilamos, usamos y protegemos tu información.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-lime-400">2. Información que Recopilamos</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Podemos recopilar y procesar los siguientes datos personales:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
              <li>
                <strong>Información de contacto:</strong> nombre, correo electrónico, teléfono
              </li>
              <li>
                <strong>Datos técnicos:</strong> dirección IP, tipo de navegador, sistema operativo, cookies y datos de
                uso
              </li>
              <li>
                <strong>Información proporcionada voluntariamente:</strong> cuando completas formularios, encuestas o te
                suscribes a nuestras comunicaciones
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-lime-400">3. Uso de la Información</h2>
            <p className="text-slate-300 leading-relaxed mb-4">Utilizamos tus datos para:</p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
              <li>Proporcionar, operar y mejorar nuestros servicios</li>
              <li>Enviar información relevante sobre Advento (si te has suscrito)</li>
              <li>Cumplir con requisitos legales o regulatorios</li>
              <li>Personalizar tu experiencia en nuestro sitio</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-lime-400">4. Cookies</h2>
            <p className="text-slate-300 leading-relaxed">
              Usamos cookies y tecnologías similares para mejorar la experiencia del usuario. Puedes configurar tu
              navegador para rechazarlas, pero algunas funciones podrían no estar disponibles.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-lime-400">5. Compartición de Datos</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              <strong>No vendemos tus datos personales.</strong> Podemos compartir información con:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
              <li>Proveedores de servicios que nos ayudan a operar nuestro sitio</li>
              <li>Autoridades legales si es requerido por ley</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-lime-400">6. Seguridad</h2>
            <p className="text-slate-300 leading-relaxed">
              Implementamos medidas técnicas y organizativas para proteger tu información. Sin embargo, ningún sistema
              es completamente seguro.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-lime-400">7. Tus Derechos</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              De acuerdo con la legislación aplicable (incluyendo GDPR y leyes locales), tienes derecho a:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
              <li>Acceder a tus datos personales</li>
              <li>Solicitar su corrección o eliminación</li>
              <li>Retirar tu consentimiento para el tratamiento de datos</li>
              <li>Portabilidad de tus datos</li>
              <li>Oponerte al procesamiento de tus datos</li>
            </ul>
            <p className="text-slate-300 leading-relaxed mt-4">
              Para ejercer estos derechos, puedes contactarnos a través de los canales disponibles en nuestro sitio web.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-lime-400">8. Retención de Datos</h2>
            <p className="text-slate-300 leading-relaxed">
              Conservamos tus datos personales solo durante el tiempo necesario para cumplir con los propósitos
              descritos en esta política o según lo requiera la ley.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-lime-400">9. Cambios en esta Política</h2>
            <p className="text-slate-300 leading-relaxed">
              Podemos actualizar esta política de privacidad ocasionalmente. Te notificaremos sobre cambios
              significativos publicando la nueva política en esta página.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-lime-400">10. Contacto</h2>
            <p className="text-slate-300 leading-relaxed">
              Para cualquier pregunta sobre esta política de privacidad, puedes escribirnos a través de nuestros canales
              de contacto disponibles en el sitio web.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            <Link href="/terminos" className="text-lime-400 hover:text-lime-300 transition-colors">
              Ver Términos y Condiciones
            </Link>
            <Link
              href="/"
              className="bg-lime-400 text-slate-900 px-6 py-2 rounded-lg font-semibold hover:bg-lime-300 transition-colors"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
