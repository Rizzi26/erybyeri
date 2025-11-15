'use client'

import { useState } from 'react'
import PageTransition from '@/components/PageTransition'

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Formatar a mensagem para o WhatsApp
    const mensagemWhatsApp = `
*Nova mensagem do site ERYBYERI*

*Nome:* ${formData.nome}
*E-mail:* ${formData.email}
${formData.telefone ? `*Telefone:* ${formData.telefone}` : ''}
*Assunto:* ${formData.assunto}

*Mensagem:*
${formData.mensagem}
    `.trim()

    // Número do WhatsApp (formato internacional sem espaços, hífens ou parênteses)
    const numeroWhatsApp = '5512982270733'

    // Criar URL do WhatsApp com a mensagem
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagemWhatsApp)}`

    // Abrir WhatsApp em nova aba
    window.open(urlWhatsApp, '_blank')

    // Limpar formulário
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      assunto: '',
      mensagem: '',
    })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <PageTransition>
      <main className="min-h-screen pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-4 sm:mb-6 tracking-wide">
            Fale Conosco
          </h1>
          <p className="text-base sm:text-lg font-light tracking-wider text-gray-300">
            Estamos aqui para atendê-lo
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20 lg:gap-24">
            {/* Contact Form */}
            <div className="px-2 sm:px-0">
              <h2 className="text-3xl sm:text-4xl font-light mb-6 sm:mb-8">Envie uma Mensagem</h2>
              <p className="text-base sm:text-lg font-light text-gray-600 mb-8 sm:mb-10 md:mb-12 leading-relaxed">
                Preencha o formulário abaixo e nossa equipe entrará em contato
                o mais breve possível.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div>
                  <label
                    htmlFor="nome"
                    className="block text-xs sm:text-sm font-light tracking-wider mb-2"
                  >
                    NOME COMPLETO *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-300 focus:border-black focus:outline-none transition-colors text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs sm:text-sm font-light tracking-wider mb-2"
                  >
                    E-MAIL *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-300 focus:border-black focus:outline-none transition-colors text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label
                    htmlFor="telefone"
                    className="block text-xs sm:text-sm font-light tracking-wider mb-2"
                  >
                    TELEFONE
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-300 focus:border-black focus:outline-none transition-colors text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label
                    htmlFor="assunto"
                    className="block text-xs sm:text-sm font-light tracking-wider mb-2"
                  >
                    ASSUNTO *
                  </label>
                  <select
                    id="assunto"
                    name="assunto"
                    value={formData.assunto}
                    onChange={handleChange}
                    required
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-300 focus:border-black focus:outline-none transition-colors bg-white text-sm sm:text-base"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="duvidas">Dúvidas sobre Produtos</option>
                    <option value="pedido">Informações de Pedido</option>
                    <option value="personalizado">Pedido Personalizado</option>
                    <option value="parceria">Parcerias</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="mensagem"
                    className="block text-xs sm:text-sm font-light tracking-wider mb-2"
                  >
                    MENSAGEM *
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-300 focus:border-black focus:outline-none transition-colors resize-none text-sm sm:text-base"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 sm:py-4 text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] hover:bg-gray-800 transition-all duration-300"
                >
                  ENVIAR MENSAGEM
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="px-2 sm:px-0">
              <h2 className="text-3xl sm:text-4xl font-light mb-6 sm:mb-8">Informações de Contato</h2>

              <div className="space-y-8 sm:space-y-10 md:space-y-12">
                <div>
                  <h3 className="text-xs sm:text-sm font-light tracking-wider mb-3 sm:mb-4">ENDEREÇO</h3>
                  <p className="text-base sm:text-lg font-light text-gray-600 leading-relaxed">
                    Rua da Elegância, 1234
                    <br />
                    Jardins, São Paulo - SP
                    <br />
                    CEP: 01234-567
                  </p>
                </div>

                <div>
                  <h3 className="text-xs sm:text-sm font-light tracking-wider mb-3 sm:mb-4">CONTATO</h3>
                  <div className="text-base sm:text-lg font-light text-gray-600 leading-relaxed space-y-2">
                    <p className="break-all">E-mail: contato@erybyeri.com</p>
                    <p>Telefone: +55 (12) 98227-0733</p>
                    <p>
                      WhatsApp:{' '}
                      <a
                        href="https://wa.me/5512982270733"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-black transition-colors underline"
                      >
                        +55 (12) 98227-0733
                      </a>
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs sm:text-sm font-light tracking-wider mb-3 sm:mb-4">
                    HORÁRIO DE ATENDIMENTO
                  </h3>
                  <p className="text-base sm:text-lg font-light text-gray-600 leading-relaxed">
                    Segunda a Sexta: 10h às 19h
                    <br />
                    Sábado: 10h às 15h
                    <br />
                    Domingo: Fechado
                  </p>
                </div>

                <div>
                  <h3 className="text-xs sm:text-sm font-light tracking-wider mb-3 sm:mb-4">REDES SOCIAIS</h3>
                  <div className="flex flex-wrap gap-4 sm:gap-6">
                    <a
                      href="#"
                      className="text-sm sm:text-base text-gray-600 hover:text-black transition-colors"
                    >
                      Instagram
                    </a>
                    <a
                      href="#"
                      className="text-sm sm:text-base text-gray-600 hover:text-black transition-colors"
                    >
                      Facebook
                    </a>
                    <a
                      href="#"
                      className="text-sm sm:text-base text-gray-600 hover:text-black transition-colors"
                    >
                      Pinterest
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 sm:mt-10 md:mt-12 aspect-[4/3] bg-gray-100 flex items-center justify-center rounded-sm">
                <span className="text-gray-400 font-light tracking-wider text-sm sm:text-base">MAPA EM BREVE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-10 sm:mb-12 text-center">
            Perguntas Frequentes
          </h2>

          <div className="space-y-6 sm:space-y-8">
            <div className="border-b border-gray-200 pb-6 sm:pb-8">
              <h3 className="text-lg sm:text-xl font-light mb-3 sm:mb-4">
                Como posso fazer um pedido personalizado?
              </h3>
              <p className="font-light text-gray-600 leading-relaxed text-sm sm:text-base">
                Entre em contato conosco através do formulário acima selecionando
                "Pedido Personalizado" ou visite nossa loja física para uma
                consulta detalhada com nossa equipe.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6 sm:pb-8">
              <h3 className="text-lg sm:text-xl font-light mb-3 sm:mb-4">
                Qual o prazo de entrega?
              </h3>
              <p className="font-light text-gray-600 leading-relaxed text-sm sm:text-base">
                Como cada peça é feita sob encomenda, o prazo médio de produção é
                de 3 a 4 semanas. Para pedidos personalizados, o prazo pode variar
                de acordo com a complexidade do projeto.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6 sm:pb-8">
              <h3 className="text-lg sm:text-xl font-light mb-3 sm:mb-4">
                Vocês fazem entregas internacionais?
              </h3>
              <p className="font-light text-gray-600 leading-relaxed text-sm sm:text-base">
                Sim, realizamos entregas para diversos países. Entre em contato
                para mais informações sobre custos e prazos de envio internacional.
              </p>
            </div>

            <div className="pb-6 sm:pb-8">
              <h3 className="text-lg sm:text-xl font-light mb-3 sm:mb-4">
                Como cuidar da minha bolsa ERYBYERI?
              </h3>
              <p className="font-light text-gray-600 leading-relaxed text-sm sm:text-base">
                Cada bolsa vem com um guia de cuidados específico. Recomendamos
                evitar exposição prolongada ao sol e umidade excessiva. Para
                limpeza, utilize apenas produtos específicos para couro.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
    </PageTransition>
  )
}
