import Link from 'next/link'

export default function Footer() {
  return (
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
  )
}
