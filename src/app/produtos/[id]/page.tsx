'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import PageTransition from '@/components/PageTransition'
import Link from 'next/link'

// Dados dos produtos (mesmo do page.tsx)
const produtos = [
  {
    id: 1,
    nome: 'Bolsa Classic Noir',
    preco: 'R$ 2.890,00',
    descricao: 'Elegância atemporal em couro premium',
    categoria: 'Clássica',
    descricaoDetalhada: 'Uma bolsa que transcende o tempo, confeccionada em couro premium com acabamento impecável. Perfeita para quem busca sofisticação em cada detalhe.',
    materiais: 'Couro premium italiano, forro em suede',
    dimensoes: '30cm x 25cm x 12cm',
    imagens: [
      '/products/product_casual_bag_green.png',
      '/products/product_casual_bag_white.png',
      '/products/product_casual_bag_yellow.png',
    ]
  },
  {
    id: 2,
    nome: 'Bolsa Metropolitan',
    preco: 'R$ 3.490,00',
    descricao: 'Sofisticação urbana em cada detalhe',
    categoria: 'Contemporânea',
    descricaoDetalhada: 'Design contemporâneo que combina funcionalidade e estilo. Ideal para o dia a dia urbano sem abrir mão da elegância.',
    materiais: 'Couro legítimo, detalhes em metal dourado',
    dimensoes: '32cm x 28cm x 14cm',
    imagens: [
      '/products/product_casual_bag_white.png',
      '/products/product_night_bag_blue.png',
      '/products/product_night_bag_pink.png',
    ]
  },
  {
    id: 3,
    nome: 'Bolsa Evening Luxe',
    preco: 'R$ 2.590,00',
    descricao: 'Perfeita para ocasiões especiais',
    categoria: 'Clássica',
    descricaoDetalhada: 'Criada especialmente para eventos noturnos e ocasiões especiais. Compacta e elegante, com acabamento luxuoso.',
    materiais: 'Couro premium com aplicações metálicas',
    dimensoes: '25cm x 18cm x 8cm',
    imagens: [
      '/products/product_casual_bag_yellow.png',
      '/products/product_special_bag_shell.png',
      '/products/product_night_bag_pink.png',
    ]
  },
  {
    id: 4,
    nome: 'Bolsa Minimal Chic',
    preco: 'R$ 2.190,00',
    descricao: 'Minimalismo refinado e funcional',
    categoria: 'Contemporânea',
    descricaoDetalhada: 'Design minimalista que valoriza as linhas limpas e a funcionalidade. Perfeita para quem aprecia a simplicidade sofisticada.',
    materiais: 'Couro natural, fecho magnético',
    dimensoes: '28cm x 22cm x 10cm',
    imagens: [
      '/products/product_night_bag_blue.png',
      '/products/product_casual_bag_yellow.png',
      '/products/product_casual_bag_green.png',
    ]
  },
  {
    id: 5,
    nome: 'Bolsa Executive',
    preco: 'R$ 3.890,00',
    descricao: 'Estilo profissional com elegância',
    categoria: 'Exclusiva',
    descricaoDetalhada: 'Desenvolvida para profissionais que valorizam estilo e organização. Compartimentos internos planejados para otimizar seu dia.',
    materiais: 'Couro estruturado, organizadores internos',
    dimensoes: '35cm x 30cm x 15cm',
    imagens: [
      '/products/product_night_bag_pink.png',
      '/products/product_night_bag_blue.png',
      '/products/product_special_bag_shell.png',
    ]
  },
  {
    id: 6,
    nome: 'Bolsa Artisan',
    preco: 'R$ 4.290,00',
    descricao: 'Obra-prima artesanal única',
    categoria: 'Exclusiva',
    descricaoDetalhada: 'Peça única confeccionada por artesãos mestres. Cada detalhe é trabalhado manualmente, resultando em uma verdadeira obra de arte.',
    materiais: 'Couro premium artesanal, costuras manuais',
    dimensoes: '33cm x 27cm x 13cm',
    imagens: [
      '/products/product_special_bag_shell.png',
      '/products/product_casual_bag_white.png',
      '/products/product_night_bag_pink.png',
    ]
  },
]

export default function ProdutoDetalhes() {
  const params = useParams()
  const router = useRouter()
  const [imagemAtual, setImagemAtual] = useState(0)
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
  })

  const produto = produtos.find(p => p.id === parseInt(params.id as string))

  if (!produto) {
    return (
      <PageTransition>
        <main className="min-h-screen pt-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-light mb-4">Produto não encontrado</h1>
            <Link href="/produtos" className="text-sm tracking-wider hover:opacity-70">
              Voltar para produtos
            </Link>
          </div>
        </main>
      </PageTransition>
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const mensagemWhatsApp = `
*Interesse em produto - ${produto.nome}*

*Nome:* ${formData.nome}
*E-mail:* ${formData.email}
${formData.telefone ? `*Telefone:* ${formData.telefone}` : ''}

Oi, gostei dessa bolsa (${produto.nome}), quero saber mais sobre pagamento e entrega etc.
    `.trim()

    const numeroWhatsApp = '5512982270733'
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagemWhatsApp)}`

    window.open(urlWhatsApp, '_blank')

    setFormData({
      nome: '',
      email: '',
      telefone: '',
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <PageTransition>
      <main className="min-h-screen pt-16 sm:pt-20">
        {/* Breadcrumb */}
        <section className="py-6 px-4 sm:px-6 md:px-8 border-b border-gray-200">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-black">Home</Link>
              <span>/</span>
              <Link href="/produtos" className="hover:text-black">Produtos</Link>
              <span>/</span>
              <span className="text-black">{produto.nome}</span>
            </div>
          </div>
        </section>

        {/* Product Details */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20">
              {/* Galeria de Imagens */}
              <div>
                <div className="aspect-[3/4] bg-gray-100 rounded-sm overflow-hidden mb-4">
                  <img
                    src={produto.imagens[imagemAtual]}
                    alt={produto.nome}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {produto.imagens.map((imagem, index) => (
                    <button
                      key={index}
                      onClick={() => setImagemAtual(index)}
                      className={`aspect-square bg-gray-100 rounded-sm overflow-hidden border-2 transition-all ${
                        imagemAtual === index ? 'border-black' : 'border-transparent hover:border-gray-300'
                      }`}
                    >
                      <img
                        src={imagem}
                        alt={`${produto.nome} - ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Informações do Produto */}
              <div>
                <div className="mb-8">
                  <span className="text-xs tracking-wider text-gray-500 uppercase">{produto.categoria}</span>
                  <h1 className="text-4xl sm:text-5xl font-light mt-2 mb-4">{produto.nome}</h1>
                  <p className="text-3xl font-light mb-6">{produto.preco}</p>
                  <p className="text-base text-gray-600 leading-relaxed mb-6">{produto.descricaoDetalhada}</p>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8 space-y-4">
                  <div>
                    <h3 className="text-sm tracking-wider mb-2 font-light">MATERIAIS</h3>
                    <p className="text-sm text-gray-600">{produto.materiais}</p>
                  </div>
                  <div>
                    <h3 className="text-sm tracking-wider mb-2 font-light">DIMENSÕES</h3>
                    <p className="text-sm text-gray-600">{produto.dimensoes}</p>
                  </div>
                </div>

                {/* Formulário de Contato Simplificado */}
                <div className="border-t border-gray-200 pt-8">
                  <h3 className="text-2xl font-light mb-4">Interessado nesta bolsa?</h3>
                  <p className="text-sm text-gray-600 mb-6">
                    Preencha seus dados e envie uma mensagem pelo WhatsApp
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        name="nome"
                        placeholder="Nome completo *"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors text-sm"
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="E-mail *"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors text-sm"
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        name="telefone"
                        placeholder="Telefone (opcional)"
                        value={formData.telefone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors text-sm"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-black text-white py-4 text-sm tracking-wider hover:bg-gray-800 transition-all duration-300"
                    >
                      ENVIAR MENSAGEM VIA WHATSAPP
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Produtos Relacionados */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-light mb-12 text-center">Você Também Pode Gostar</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
              {produtos
                .filter(p => p.id !== produto.id)
                .slice(0, 3)
                .map((produtoRelacionado) => (
                  <Link
                    key={produtoRelacionado.id}
                    href={`/produtos/${produtoRelacionado.id}`}
                    className="group cursor-pointer"
                  >
                    <div className="aspect-[3/4] bg-gray-100 mb-4 sm:mb-6 overflow-hidden relative rounded-sm">
                      <img
                        src={produtoRelacionado.imagens[0]}
                        alt={produtoRelacionado.nome}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
                    </div>
                    <h3 className="text-lg font-light tracking-wide">{produtoRelacionado.nome}</h3>
                    <p className="text-sm text-gray-600 mt-2">{produtoRelacionado.descricao}</p>
                    <p className="text-lg font-light mt-2">{produtoRelacionado.preco}</p>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}
