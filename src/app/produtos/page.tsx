'use client'

import { useState } from 'react'
import PageTransition from '@/components/PageTransition'
import Link from 'next/link'

// Dados de exemplo dos produtos
const produtos = [
  {
    id: 1,
    nome: 'Bolsa Classic Noir',
    preco: 'R$ 2.890,00',
    descricao: 'Elegância atemporal em couro premium',
    categoria: 'Clássica'
  },
  {
    id: 2,
    nome: 'Bolsa Metropolitan',
    preco: 'R$ 3.490,00',
    descricao: 'Sofisticação urbana em cada detalhe',
    categoria: 'Contemporânea'
  },
  {
    id: 3,
    nome: 'Bolsa Evening Luxe',
    preco: 'R$ 2.590,00',
    descricao: 'Perfeita para ocasiões especiais',
    categoria: 'Clássica'
  },
  {
    id: 4,
    nome: 'Bolsa Minimal Chic',
    preco: 'R$ 2.190,00',
    descricao: 'Minimalismo refinado e funcional',
    categoria: 'Contemporânea'
  },
  {
    id: 5,
    nome: 'Bolsa Executive',
    preco: 'R$ 3.890,00',
    descricao: 'Estilo profissional com elegância',
    categoria: 'Exclusiva'
  },
  {
    id: 6,
    nome: 'Bolsa Artisan',
    preco: 'R$ 4.290,00',
    descricao: 'Obra-prima artesanal única',
    categoria: 'Exclusiva'
  },
]

export default function Produtos() {
  const [filtroAtivo, setFiltroAtivo] = useState<string>('TODAS')

  // Filtrar produtos com base na categoria selecionada
  const produtosFiltrados = produtos.filter(produto => {
    if (filtroAtivo === 'TODAS') return true
    if (filtroAtivo === 'CLÁSSICAS' && produto.categoria === 'Clássica') return true
    if (filtroAtivo === 'CONTEMPORÂNEAS' && produto.categoria === 'Contemporânea') return true
    if (filtroAtivo === 'EXCLUSIVAS' && produto.categoria === 'Exclusiva') return true
    return false
  })

  return (
    <PageTransition>
      <main className="min-h-screen pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-black text-white overflow-hidden">
        {/* Background GIF */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src="/products/product_ery.gif"
            alt="ERYBYERI Produtos"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Translucent Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/80 z-10"></div>

        <div className="relative z-20 max-w-7xl mx-auto text-center px-2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-4 sm:mb-6 tracking-wide">
            Nossa Coleção
          </h1>
          <p className="text-base sm:text-lg font-light tracking-wider text-gray-300 max-w-2xl mx-auto px-4">
            Cada peça é cuidadosamente criada para expressar elegância e
            exclusividade
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <button
              onClick={() => setFiltroAtivo('TODAS')}
              className={`px-4 sm:px-6 py-2 text-xs sm:text-sm tracking-wider border border-black transition-all duration-300 ${
                filtroAtivo === 'TODAS'
                  ? 'bg-black text-white'
                  : 'bg-transparent text-black hover:bg-black hover:text-white'
              }`}
            >
              TODAS
            </button>
            <button
              onClick={() => setFiltroAtivo('CLÁSSICAS')}
              className={`px-4 sm:px-6 py-2 text-xs sm:text-sm tracking-wider border border-black transition-all duration-300 ${
                filtroAtivo === 'CLÁSSICAS'
                  ? 'bg-black text-white'
                  : 'bg-transparent text-black hover:bg-black hover:text-white'
              }`}
            >
              CLÁSSICAS
            </button>
            <button
              onClick={() => setFiltroAtivo('CONTEMPORÂNEAS')}
              className={`px-4 sm:px-6 py-2 text-xs sm:text-sm tracking-wider border border-black transition-all duration-300 ${
                filtroAtivo === 'CONTEMPORÂNEAS'
                  ? 'bg-black text-white'
                  : 'bg-transparent text-black hover:bg-black hover:text-white'
              }`}
            >
              CONTEMPORÂNEAS
            </button>
            <button
              onClick={() => setFiltroAtivo('EXCLUSIVAS')}
              className={`px-4 sm:px-6 py-2 text-xs sm:text-sm tracking-wider border border-black transition-all duration-300 ${
                filtroAtivo === 'EXCLUSIVAS'
                  ? 'bg-black text-white'
                  : 'bg-transparent text-black hover:bg-black hover:text-white'
              }`}
            >
              EXCLUSIVAS
            </button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          {produtosFiltrados.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg font-light text-gray-600">Nenhum produto encontrado nesta categoria.</p>
            </div>
          ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
            {produtosFiltrados.map((produto) => {
              // Array de imagens para alternar entre os produtos
              const images = [
                '/products/product_casual_bag_green.png',
                '/products/product_casual_bag_white.png',
                '/products/product_casual_bag_yellow.png',
                '/products/product_night_bag_blue.png',
                '/products/product_night_bag_pink.png',
                '/products/product_special_bag_shell.png'
              ];
              // Usar o ID do produto para manter consistência nas imagens
              const imageSrc = images[(produto.id - 1) % images.length];

              return (
              <div
                key={produto.id}
                className="group px-2"
              >
                {/* Product Image */}
                <Link href={`/produtos/${produto.id}`}>
                  <div className="aspect-[3/4] bg-gray-100 mb-4 sm:mb-6 overflow-hidden relative rounded-sm cursor-pointer">
                    <img
                      src={imageSrc}
                      alt={produto.nome}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
                  </div>
                </Link>

                {/* Product Info */}
                <div className="space-y-2">
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="text-base sm:text-lg font-light tracking-wide">
                      {produto.nome}
                    </h3>
                    <span className="text-[10px] sm:text-xs font-light text-gray-500 tracking-wider shrink-0">
                      {produto.categoria}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-light text-gray-600">
                    {produto.descricao}
                  </p>
                  <p className="text-base sm:text-lg font-light pt-2">{produto.preco}</p>
                </div>

                {/* Hover Button */}
                <Link
                  href={`/produtos/${produto.id}`}
                  className="mt-3 sm:mt-4 w-full py-2.5 sm:py-3 border border-black text-xs sm:text-sm tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black hover:text-white block text-center"
                >
                  VER DETALHES
                </Link>
              </div>
              );
            })}
          </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 text-center">
            <div className="px-2">
              <h3 className="text-lg sm:text-xl font-light tracking-wider mb-3 sm:mb-4">
                PRODUÇÃO LIMITADA
              </h3>
              <p className="text-xs sm:text-sm font-light text-gray-600 leading-relaxed">
                Cada modelo é produzido em quantidade limitada para garantir
                exclusividade.
              </p>
            </div>
            <div className="px-2">
              <h3 className="text-lg sm:text-xl font-light tracking-wider mb-3 sm:mb-4">
                MATERIAIS PREMIUM
              </h3>
              <p className="text-xs sm:text-sm font-light text-gray-600 leading-relaxed">
                Selecionamos apenas os melhores couros e materiais de
                fornecedores certificados.
              </p>
            </div>
            <div className="px-2 sm:col-span-2 md:col-span-1">
              <h3 className="text-lg sm:text-xl font-light tracking-wider mb-3 sm:mb-4">
                GARANTIA VITALÍCIA
              </h3>
              <p className="text-xs sm:text-sm font-light text-gray-600 leading-relaxed">
                Confiamos na qualidade do nosso trabalho e oferecemos garantia
                vitalícia em defeitos de fabricação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 sm:mb-6">
            Fique por Dentro
          </h2>
          <p className="text-base sm:text-lg font-light text-gray-300 mb-8 sm:mb-10 md:mb-12 px-4">
            Receba em primeira mão novidades sobre lançamentos exclusivos
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="flex-1 px-4 sm:px-6 py-3 sm:py-4 bg-transparent border border-white/30 text-white placeholder:text-gray-400 focus:outline-none focus:border-white transition-colors text-sm sm:text-base"
            />
            <button className="px-8 sm:px-12 py-3 sm:py-4 border border-white text-xs sm:text-sm tracking-wider hover:bg-white hover:text-black transition-all duration-300 shrink-0">
              INSCREVER
            </button>
          </div>
        </div>
      </section>
    </main>
    </PageTransition>
  )
}
