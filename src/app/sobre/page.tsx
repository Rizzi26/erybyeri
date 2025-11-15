import Link from 'next/link'
import PageTransition from '@/components/PageTransition'

export const metadata = {
  title: 'Sobre - ERYBYERI',
  description: 'Conheça a história e os valores da ERYBYERI',
}

export default function Sobre() {
  return (
    <PageTransition>
      <main className="min-h-screen pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="py-20 sm:py-24 md:py-28 lg:py-32 px-4 sm:px-6 md:px-8 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-6 sm:mb-8 tracking-wide">
            Nossa História
          </h1>
          <p className="text-lg sm:text-xl font-light tracking-wider text-gray-300">
            Uma jornada dedicada à excelência e sofisticação
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 sm:gap-16 md:gap-20 lg:gap-24 items-center mb-20 sm:mb-24 md:mb-28 lg:mb-32">
            <div className="aspect-[4/5] bg-gray-100 rounded-sm overflow-hidden">
              <img
                src="/14.png"
                alt="Bolsa ERYBYERI"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-2 sm:px-0">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6 sm:mb-8 leading-tight">
                Onde Tudo Começou
              </h2>
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg font-light text-gray-600 leading-relaxed">
                <p>
                  ERYBYERI nasceu da paixão por criar peças que transcendem o
                  tempo. Fundada com a visão de combinar artesanato tradicional
                  com design contemporâneo, cada bolsa conta uma história única
                  de dedicação e excelência.
                </p>
                <p>
                  Nossa jornada começou com um simples ideal: criar acessórios
                  que não apenas complementem, mas elevem o estilo pessoal de
                  quem os carrega. Cada peça é um testemunho do nosso
                  compromisso com a qualidade incomparável.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 sm:gap-16 md:gap-20 lg:gap-24 items-center">
            <div className="order-2 md:order-1 px-2 sm:px-0">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6 sm:mb-8 leading-tight">
                Nosso Compromisso
              </h2>
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg font-light text-gray-600 leading-relaxed">
                <p>
                  Acreditamos que a verdadeira luxúria reside nos detalhes.
                  Cada costura, cada material, cada acabamento é
                  meticulosamente selecionado e executado por artesãos
                  especializados que compartilham nossa visão de perfeição.
                </p>
                <p>
                  Nosso compromisso vai além da estética. Buscamos criar peças
                  duráveis que se tornam companheiras de vida, envelhecendo com
                  graça e desenvolvendo caráter único ao longo do tempo.
                </p>
              </div>
            </div>
            <div className="aspect-[4/5] bg-gray-100 order-1 md:order-2 rounded-sm overflow-hidden">
              <img
                src="/16.png"
                alt="Bolsa ERYBYERI"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gray-50 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light mb-12 sm:mb-16 md:mb-20 text-center px-2">
            Nossos Valores
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
            <div className="text-center px-2">
              <div className="mb-4 sm:mb-6">
                <div className="w-16 sm:w-20 h-16 sm:h-20 mx-auto border border-black flex items-center justify-center">
                  <span className="text-xl sm:text-2xl font-light">01</span>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-light tracking-wider mb-3 sm:mb-4">EXCELÊNCIA</h3>
              <p className="text-xs sm:text-sm font-light text-gray-600 leading-relaxed">
                Buscamos perfeição em cada detalhe, desde a seleção de
                materiais até o acabamento final.
              </p>
            </div>

            <div className="text-center px-2">
              <div className="mb-4 sm:mb-6">
                <div className="w-16 sm:w-20 h-16 sm:h-20 mx-auto border border-black flex items-center justify-center">
                  <span className="text-xl sm:text-2xl font-light">02</span>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-light tracking-wider mb-3 sm:mb-4">EXCLUSIVIDADE</h3>
              <p className="text-xs sm:text-sm font-light text-gray-600 leading-relaxed">
                Produção limitada garante que cada peça mantém sua unicidade e
                valor especial.
              </p>
            </div>

            <div className="text-center px-2">
              <div className="mb-4 sm:mb-6">
                <div className="w-16 sm:w-20 h-16 sm:h-20 mx-auto border border-black flex items-center justify-center">
                  <span className="text-xl sm:text-2xl font-light">03</span>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-light tracking-wider mb-3 sm:mb-4">ARTESANATO</h3>
              <p className="text-xs sm:text-sm font-light text-gray-600 leading-relaxed">
                Valorizamos técnicas artesanais tradicionais combinadas com
                inovação moderna.
              </p>
            </div>

            <div className="text-center px-2 sm:col-span-2 lg:col-span-1">
              <div className="mb-4 sm:mb-6">
                <div className="w-16 sm:w-20 h-16 sm:h-20 mx-auto border border-black flex items-center justify-center">
                  <span className="text-xl sm:text-2xl font-light">04</span>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-light tracking-wider mb-3 sm:mb-4">SUSTENTABILIDADE</h3>
              <p className="text-xs sm:text-sm font-light text-gray-600 leading-relaxed">
                Comprometidos com práticas responsáveis e materiais de origem
                ética.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light mb-6 sm:mb-8 px-2">
            Artesanato Excepcional
          </h2>
          <p className="text-base sm:text-lg font-light text-gray-600 mb-10 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
            Cada bolsa ERYBYERI passa por um rigoroso processo de criação que
            pode levar semanas. Nossos artesãos dedicam-se a garantir que cada
            peça atinja nossos padrões inflexíveis de qualidade.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
            <div className="aspect-square bg-gray-100 flex items-center justify-center rounded-sm">
              <span className="text-gray-400 font-light tracking-wider text-xs sm:text-sm">PROCESSO 1</span>
            </div>
            <div className="aspect-square bg-gray-100 flex items-center justify-center rounded-sm">
              <span className="text-gray-400 font-light tracking-wider text-xs sm:text-sm">PROCESSO 2</span>
            </div>
            <div className="aspect-square bg-gray-100 flex items-center justify-center rounded-sm sm:col-span-2 md:col-span-1">
              <span className="text-gray-400 font-light tracking-wider text-xs sm:text-sm">PROCESSO 3</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-black text-white px-4 sm:px-6 md:px-8 overflow-hidden">
        {/* Background GIF */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src="/product_diferent.gif"
            alt="ERYBYERI Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Translucent Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/80 z-10"></div>

        <div className="relative z-20 max-w-4xl mx-auto text-center px-2">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light mb-6 sm:mb-8">
            Experimente a Diferença
          </h2>
          <p className="text-base sm:text-lg font-light text-gray-300 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto px-4">
            Descubra como uma bolsa ERYBYERI pode transformar seu estilo.
          </p>
          <Link
            href="/produtos"
            className="inline-block border border-white px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300"
          >
            EXPLORAR COLEÇÃO
          </Link>
        </div>
      </section>
    </main>
    </PageTransition>
  )
}
