import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TerminosPage() {
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
            Términos y Condiciones de Servicio
          </h1>
          <p className="text-slate-300 text-lg">Última actualización: Enero 2025</p>
        </div>

        <div className="prose prose-invert prose-lime max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-lime-400">1. Introducción</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Bienvenido a Advento ("nosotros", "nuestro" o "la Compañía"). Este documento describe los Términos y
              Condiciones de Servicio aplicables al uso de nuestro sitio web y cualquier servicio o contenido ofrecido a
              través de él.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Al acceder o utilizar Advento, aceptas estos términos. Si no estás de acuerdo con alguno de ellos, te
              recomendamos no usar nuestros servicios.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-lime-400">2. Uso Permitido</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              El sitio y su contenido están destinados exclusivamente para fines informativos y/o comerciales
              relacionados con Advento. No está permitido:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
              <li>Usar el sitio con fines ilegales o no autorizados</li>
              <li>Intentar acceder sin autorización a sistemas o datos</li>
              <li>Interferir con el funcionamiento normal del sitio</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-lime-400">3. Propiedad Intelectual</h2>
            <p className="text-slate-300 leading-relaxed">
              Todo el contenido, marcas y material gráfico de Advento son propiedad de la Compañía o se utilizan bajo
              licencia. No se permite su reproducción sin autorización previa por escrito.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-lime-400">4. Limitación de Responsabilidad</h2>
            <p className="text-slate-300 leading-relaxed">
              Advento no garantiza que el sitio esté libre de errores o interrupciones. No seremos responsables por
              daños directos o indirectos derivados del uso o imposibilidad de uso de nuestros servicios.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-lime-400">5. Enlaces a Terceros</h2>
            <p className="text-slate-300 leading-relaxed">
              Nuestro sitio puede contener enlaces a sitios externos. No somos responsables del contenido o prácticas de
              privacidad de esos sitios.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-lime-400">6. Modificaciones</h2>
            <p className="text-slate-300 leading-relaxed">
              Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios se publicarán en
              esta página con la fecha de actualización.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-lime-400">7. Legislación Aplicable</h2>
            <p className="text-slate-300 leading-relaxed">
              Estos términos se regirán e interpretarán de acuerdo con las leyes aplicables.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-lime-400">8. Contacto</h2>
            <p className="text-slate-300 leading-relaxed">
              Para cualquier pregunta sobre estos términos, puedes escribirnos a través de nuestros canales de contacto
              disponibles en el sitio web.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            <Link href="/privacidad" className="text-lime-400 hover:text-lime-300 transition-colors">
              Ver Política de Privacidad
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
