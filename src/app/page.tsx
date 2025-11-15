import Link from 'next/link'
import PageTransition from '@/components/PageTransition'

export default function Home() {
  return (
    <PageTransition>
      <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-black text-white overflow-hidden">
        {/* Background GIF */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src="/erybyeri.gif"
            alt="ERYBYERI Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Translucent Overlay - permite ver o GIF através */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/80 z-10"></div>

        <div className="relative z-20 text-center px-4 sm:px-6 md:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em] lg:tracking-[0.3em] mb-4 sm:mb-6">
            ERYBYERI .
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] mb-8 sm:mb-10 md:mb-12 max-w-xl md:max-w-2xl mx-auto px-4">
            ONDE SOFISTICAÇÃO ENCONTRA EXCLUSIVIDADE
          </p>
          <Link
            href="/produtos"
            className="inline-block border border-white px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300"
          >
            EXPLORAR COLEÇÃO
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-20">
          <div className="w-[1px] h-12 sm:h-16 bg-white/30 animate-pulse"></div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 sm:gap-16 md:gap-20 lg:gap-24 items-center">
            <div className="px-2 sm:px-0">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 sm:mb-8 leading-tight">
                Elegância<br />Atemporal
              </h2>
              <p className="text-base sm:text-lg font-light leading-relaxed text-gray-600 mb-6 sm:mb-8">
                Cada peça é cuidadosamente elaborada para refletir a essência da
                sofisticação moderna. Nossos artesãos dedicam-se a criar bolsas
                que transcendem tendências, oferecendo designs que permanecem
                eternamente elegantes.
              </p>
              <Link
                href="/sobre"
                className="inline-block border border-black px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm tracking-[0.12em] sm:tracking-[0.15em] hover:bg-black hover:text-white transition-all duration-300"
              >
                CONHEÇA NOSSA HISTÓRIA
              </Link>
            </div>
            <div className="aspect-[3/4] bg-gray-100 rounded-sm overflow-hidden">
              <img
                src="/13.png"
                alt="Bolsa ERYBYERI"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-black text-white px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-12 md:gap-16">
            <div className="text-center px-2">
              <div className="text-3xl sm:text-4xl font-light mb-4 sm:mb-6">01</div>
              <h3 className="text-lg sm:text-xl font-light tracking-wider mb-3 sm:mb-4">ARTESANAL</h3>
              <p className="font-light text-gray-300 leading-relaxed text-sm sm:text-base">
                Cada peça é meticulosamente confeccionada à mão por artesãos
                especializados, garantindo qualidade incomparável.
              </p>
            </div>
            <div className="text-center px-2">
              <div className="text-3xl sm:text-4xl font-light mb-4 sm:mb-6">02</div>
              <h3 className="text-lg sm:text-xl font-light tracking-wider mb-3 sm:mb-4">EXCLUSIVIDADE</h3>
              <p className="font-light text-gray-300 leading-relaxed text-sm sm:text-base">
                Produção limitada para assegurar que cada bolsa seja única e
                especial para quem a possui.
              </p>
            </div>
            <div className="text-center px-2 sm:col-span-2 md:col-span-1">
              <div className="text-3xl sm:text-4xl font-light mb-4 sm:mb-6">03</div>
              <h3 className="text-lg sm:text-xl font-light tracking-wider mb-3 sm:mb-4">PREMIUM</h3>
              <p className="font-light text-gray-300 leading-relaxed text-sm sm:text-base">
                Utilizamos apenas materiais de primeira linha, selecionados
                criteriosamente para garantir durabilidade e elegância.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center px-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 sm:mb-8">
            Descubra Sua Próxima Peça
          </h2>
          <p className="text-base sm:text-lg font-light text-gray-600 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto px-4">
            Explore nossa coleção exclusiva e encontre a bolsa perfeita que
            complementa seu estilo único.
          </p>
          <Link
            href="/produtos"
            className="inline-block bg-black text-white px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] hover:bg-gray-800 transition-all duration-300"
          >
            VER PRODUTOS
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12">
            <div className="px-2">
              <h4 className="font-light tracking-[0.15em] sm:tracking-[0.2em] mb-3 sm:mb-4 text-sm sm:text-base">ERYBYERI</h4>
              <p className="text-xs sm:text-sm font-light text-gray-600 leading-relaxed">
                Bolsas exclusivas que definem elegância e sofisticação.
              </p>
            </div>
            <div className="px-2">
              <h4 className="font-light tracking-[0.15em] sm:tracking-[0.2em] mb-3 sm:mb-4 text-xs sm:text-sm">NAVEGAÇÃO</h4>
              <div className="flex flex-col space-y-2 text-xs sm:text-sm">
                <Link href="/" className="font-light text-gray-600 hover:text-black transition-colors">Home</Link>
                <Link href="/sobre" className="font-light text-gray-600 hover:text-black transition-colors">Sobre</Link>
                <Link href="/produtos" className="font-light text-gray-600 hover:text-black transition-colors">Produtos</Link>
                <Link href="/contato" className="font-light text-gray-600 hover:text-black transition-colors">Contato</Link>
              </div>
            </div>
            <div className="px-2 sm:col-span-2 md:col-span-1">
              <h4 className="font-light tracking-[0.15em] sm:tracking-[0.2em] mb-3 sm:mb-4 text-xs sm:text-sm">CONTATO</h4>
              <div className="text-xs sm:text-sm font-light text-gray-600 space-y-2">
                <p className="break-all">contato@erybyeri.com</p>
                <p>+55 (12) 98227-0733</p>
              </div>
            </div>
          </div>
          <div className="pt-6 sm:pt-8 border-t border-gray-200 text-center text-xs sm:text-sm font-light text-gray-500 px-2">
            <p>&copy; 2025 ERYBYERI. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
    </PageTransition>
  );
}
