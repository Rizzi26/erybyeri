'use client'

import { useState } from 'react'
import PageTransition from '@/components/PageTransition'

// Tipos
type Formato = 'casual' | 'handbag' | 'suitcase' | 'nightbag' | null
type Cor = string | null
type QuantidadeCores = 'uma' | 'duas' | null
type CategoriaCor = 'piquet' | 'premium' | null

interface FormData {
  formato: Formato
  quantidadeCores: QuantidadeCores
  cor: Cor
  categoriaCor: CategoriaCor
  corSecundaria: Cor
  acessorios: string[]
  nome: string
  telefone: string
}

// Dados dos formatos de bolsa
const formatos = [
  {
    id: 'casual' as const,
    nome: 'Trapézio',
    descricao: 'Perfeita para o dia a dia, espaçosa e versátil',
    imagem: '/bases/trapezio_base.png',
    preco: 289
  },
  {
    id: 'handbag' as const,
    nome: 'Baguette',
    descricao: 'Elegância clássica para todas as ocasiões',
    imagem: '/bases/baguette_base.png',
    preco: 329
  },
  {
    id: 'suitcase' as const,
    nome: 'Suite Case',
    descricao: 'Compacta e sofisticada, ideal para viagens',
    imagem: '/bases/suite_case_base.png',
    preco: 379
  },
  {
    id: 'nightbag' as const,
    nome: 'Plissê',
    descricao: 'Glamour para suas noites especiais',
    imagem: '/bases/plisse_base.png',
    preco: 349
  }
]

// Preços de cores (segunda cor por categoria)
const precoCores = {
  uma: 0,           // Incluído no preço base
  piquet: 60,       // Adicional para segunda cor Piquet
  premium: 120      // Adicional para segunda cor Premium
}

// Paleta de cores disponíveis
const cores = [
  { id: 'preto', nome: 'Preto', hex: '#000000' },
  { id: 'branco', nome: 'Branco', hex: '#FFFFFF' },
  { id: 'nude', nome: 'Nude', hex: '#E8D4C4' },
  { id: 'caramelo', nome: 'Caramelo', hex: '#8B5A2B' },
  { id: 'bordo', nome: 'Bordô', hex: '#722F37' },
  { id: 'verde', nome: 'Verde Musgo', hex: '#4A5D23' },
  { id: 'azul', nome: 'Azul Marinho', hex: '#1C3A5F' },
  { id: 'rosa', nome: 'Rosa Blush', hex: '#E8B4B8' },
]

// Acessórios disponíveis por modelo
const todosAcessorios = [
  // Acessórios comuns
  { id: 'alca-corrente', nome: 'Alça de Corrente Dourada', preco: 49 },
  { id: 'alca-couro', nome: 'Alça Extra em Couro', preco: 69 },
  { id: 'chaveiro', nome: 'Chaveiro Personalizado', preco: 29 },
  { id: 'forro-seda', nome: 'Forro em Seda', preco: 59 },
  { id: 'monograma', nome: 'Monograma Bordado', preco: 39 },
  { id: 'fechadura', nome: 'Fechadura Premium', preco: 45 },
  { id: 'bolso-interno', nome: 'Bolso Interno com Zíper', preco: 35 },
  { id: 'protecao', nome: 'Proteção de Base em Metal', preco: 25 },
  // Acessórios específicos
  { id: 'organizador', nome: 'Organizador Interno', preco: 55 },
  { id: 'espelho', nome: 'Espelho Compacto Interno', preco: 19 },
  { id: 'porta-cartao', nome: 'Porta Cartões Removível', preco: 35 },
  { id: 'alca-transversal', nome: 'Alça Transversal Ajustável', preco: 79 },
  { id: 'cadeado', nome: 'Cadeado Decorativo', preco: 39 },
  { id: 'lenco', nome: 'Lenço de Seda para Alça', preco: 45 },
  { id: 'dust-bag', nome: 'Dust Bag Personalizado', preco: 29 },
  { id: 'tag-bagagem', nome: 'Tag de Bagagem em Couro', preco: 35 },
]

// Mapeamento de acessórios por formato
const acessoriosPorFormato: Record<string, string[]> = {
  // Trapézio - bolsa casual do dia a dia
  casual: [
    'alca-couro',
    'alca-transversal',
    'chaveiro',
    'bolso-interno',
    'organizador',
    'monograma',
  ],
  // Baguette - elegante e compacta
  handbag: [
    'alca-corrente',
    'alca-couro',
    'chaveiro',
    'forro-seda',
    'espelho',
    'lenco',
  ],
  // Suite Case - viagem/trabalho
  suitcase: [
    'alca-transversal',
    'fechadura',
    'cadeado',
    'organizador',
    'porta-cartao',
    'tag-bagagem',
    'dust-bag',
    'protecao',
  ],
  // Plissê - noite/festa
  nightbag: [
    'alca-corrente',
    'forro-seda',
    'espelho',
    'monograma',
    'fechadura',
    'lenco',
  ],
}

export default function MonteSuaBolsa() {
  const [step, setStep] = useState(1)
  const [subStep, setSubStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    formato: null,
    quantidadeCores: null,
    cor: null,
    categoriaCor: null,
    corSecundaria: null,
    acessorios: [],
    nome: '',
    telefone: ''
  })
  const [showInstagramModal, setShowInstagramModal] = useState(false)
  const [mensagemCopiada, setMensagemCopiada] = useState('')

  const totalSteps = 4

  // Handlers
  const handleFormatoSelect = (formato: Formato) => {
    // Limpa acessórios ao mudar de formato (pois cada formato tem acessórios diferentes)
    setFormData({ ...formData, formato, acessorios: [] })
  }

  // Obter acessórios disponíveis para o formato selecionado
  const getAcessoriosDisponiveis = () => {
    if (!formData.formato) return []
    const idsDisponiveis = acessoriosPorFormato[formData.formato] || []
    return todosAcessorios.filter(a => idsDisponiveis.includes(a.id))
  }

  const handleQuantidadeCoresSelect = (quantidade: QuantidadeCores) => {
    if (quantidade === 'uma') {
      setFormData({ ...formData, quantidadeCores: quantidade, categoriaCor: null, corSecundaria: null })
    } else {
      setFormData({ ...formData, quantidadeCores: quantidade })
    }
  }

  const handleCorSelect = (cor: string) => {
    setFormData({ ...formData, cor })
  }

  const handleTecidoCorSelect = (categoria: CategoriaCor, cor: string) => {
    setFormData({ ...formData, categoriaCor: categoria, corSecundaria: cor })
  }

  const handleAcessorioToggle = (acessorioId: string) => {
    const novosAcessorios = formData.acessorios.includes(acessorioId)
      ? formData.acessorios.filter(a => a !== acessorioId)
      : [...formData.acessorios, acessorioId]
    setFormData({ ...formData, acessorios: novosAcessorios })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Máscara de telefone (XX) XXXXX-XXXX
  const handleTelefoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '') // Remove tudo que não é número

    if (value.length <= 11) {
      // Aplica a máscara
      if (value.length > 2) {
        value = `(${value.slice(0, 2)}) ${value.slice(2)}`
      }
      if (value.length > 10) {
        value = `${value.slice(0, 10)}-${value.slice(10)}`
      }
    }

    setFormData({ ...formData, telefone: value })
  }

  // Calcular total de sub-etapas na etapa 2
  const getTotalSubSteps = () => {
    if (formData.quantidadeCores === 'duas') return 3 // quantidade > cor principal > tecido+cor secundária
    return 2 // quantidade > cor única
  }

  const nextStep = () => {
    if (step === 2) {
      const totalSubs = getTotalSubSteps()
      if (subStep < totalSubs) {
        setSubStep(subStep + 1)
        return
      }
    }
    if (step < totalSteps) {
      setStep(step + 1)
      setSubStep(1)
    }
  }

  const prevStep = () => {
    if (step === 2 && subStep > 1) {
      // Voltando dentro da etapa 2 - limpar dados da sub-etapa atual
      if (subStep === 3) {
        // Voltando da sub-etapa 3 (tecido+cor secundária) - limpar seleção
        setFormData({ ...formData, categoriaCor: null, corSecundaria: null })
      } else if (subStep === 2) {
        // Voltando da sub-etapa 2 (cor principal) - limpar cor
        setFormData({ ...formData, cor: null })
      }
      setSubStep(subStep - 1)
      return
    }

    if (step > 1) {
      const prevStepNum = step - 1

      if (step === 4) {
        // Voltando da etapa 4 (finalizar) para etapa 3 - não precisa limpar nada
      } else if (step === 3) {
        // Voltando da etapa 3 (acessórios) para etapa 2 - limpar acessórios
        setFormData({ ...formData, acessorios: [] })
      } else if (step === 2) {
        // Voltando da etapa 2 para etapa 1 - limpar todas as cores
        setFormData({
          ...formData,
          quantidadeCores: null,
          cor: null,
          categoriaCor: null,
          corSecundaria: null
        })
      }

      setStep(prevStepNum)

      if (prevStepNum === 2) {
        // Voltando para etapa 2, ir para última sub-etapa
        const totalSubs = formData.quantidadeCores === 'duas' ? 3 : 2
        setSubStep(totalSubs)
      } else {
        setSubStep(1)
      }
    }
  }

  const canProceed = () => {
    switch (step) {
      case 1: return formData.formato !== null
      case 2:
        if (subStep === 1) return formData.quantidadeCores !== null
        if (subStep === 2) return formData.cor !== null
        if (subStep === 3) return formData.categoriaCor !== null && formData.corSecundaria !== null
        return false
      case 3: return true // Acessórios são opcionais
      case 4: return formData.nome.trim() !== '' && formData.telefone.length >= 14
      default: return false
    }
  }

  // Enviar pedido
  const handleSubmit = () => {
    const formatoData = formatos.find(f => f.id === formData.formato)
    const formatoNome = formatoData?.nome || ''
    const formatoPreco = formatoData?.preco || 0
    const corNome = cores.find(c => c.id === formData.cor)?.nome || ''
    const corSecundariaNome = cores.find(c => c.id === formData.corSecundaria)?.nome || ''
    const categoriaNome = formData.categoriaCor === 'piquet' ? 'Piquet' : formData.categoriaCor === 'premium' ? 'Premium' : ''

    const acessoriosSelecionados = formData.acessorios.map(a => {
      const acessorio = todosAcessorios.find(ac => ac.id === a)
      return acessorio ? `  - ${acessorio.nome}: ${formatarPreco(acessorio.preco)}` : ''
    }).filter(Boolean).join('\n')

    const precoCorSecundaria = formData.categoriaCor === 'piquet' ? precoCores.piquet : precoCores.premium
    const corInfo = formData.quantidadeCores === 'duas'
      ? `• Cor Principal: ${corNome} (incluso)\n• Cor Secundária: ${corSecundariaNome} (${categoriaNome}): + ${formatarPreco(precoCorSecundaria)}`
      : `• Cor: ${corNome} (incluso)`

    const acessoriosInfo = formData.acessorios.length > 0
      ? `• Acessórios: + ${formatarPreco(getPrecoAcessorios())}\n${acessoriosSelecionados}`
      : '• Acessórios: Nenhum selecionado'

    const mensagem = `
*Monte sua Bolsa - ERYBYERI*

*Nome:* ${formData.nome}
*Telefone:* ${formData.telefone}

*Configuração da Bolsa:*
• Formato: ${formatoNome} - ${formatarPreco(formatoPreco)}
${corInfo}
${acessoriosInfo}

━━━━━━━━━━━━━━━━━━
*TOTAL: ${formatarPreco(getPrecoTotal())}*
━━━━━━━━━━━━━━━━━━

Gostaria de mais informações sobre essa configuração!
    `.trim()

    // Enviar direto para Instagram DM
    navigator.clipboard.writeText(mensagem)
    setMensagemCopiada(mensagem)
    setShowInstagramModal(true)
  }

  const abrirInstagramDM = () => {
    // Tenta abrir o app do Instagram diretamente
    const instagramAppUrl = 'instagram://user?username=erybyeri'
    const instagramWebUrl = 'https://ig.me/m/erybyeri'

    // Detecta se é mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

    if (isMobile) {
      // Tenta abrir o app primeiro
      window.location.href = instagramAppUrl

      // Fallback para web após um pequeno delay se o app não abrir
      setTimeout(() => {
        window.location.href = instagramWebUrl
      }, 2500)
    } else {
      // Desktop: abre no navegador
      window.open(instagramWebUrl, '_blank')
    }

    setShowInstagramModal(false)
  }

  // Obter nome do formato selecionado
  const getFormatoNome = () => formatos.find(f => f.id === formData.formato)?.nome || ''
  const getCorNome = () => cores.find(c => c.id === formData.cor)?.nome || ''
  const getCorSecundariaNome = () => cores.find(c => c.id === formData.corSecundaria)?.nome || ''
  const getCategoriaNome = () => formData.categoriaCor === 'piquet' ? 'Piquet' : formData.categoriaCor === 'premium' ? 'Premium' : ''

  // Formatador de preço
  const formatarPreco = (valor: number) => {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  // Cálculo de preços
  const getPrecoBase = () => formatos.find(f => f.id === formData.formato)?.preco || 0
  const getPrecoCores = () => {
    if (formData.quantidadeCores !== 'duas') return 0
    if (formData.categoriaCor === 'piquet') return precoCores.piquet
    if (formData.categoriaCor === 'premium') return precoCores.premium
    return 0
  }
  const getPrecoAcessorios = () => {
    return formData.acessorios.reduce((total, acessorioId) => {
      const acessorio = todosAcessorios.find(a => a.id === acessorioId)
      return total + (acessorio?.preco || 0)
    }, 0)
  }
  const getPrecoTotal = () => getPrecoBase() + getPrecoCores() + getPrecoAcessorios()

  // Label da sub-etapa atual
  const getSubStepLabel = () => {
    if (step !== 2) return ''
    if (subStep === 1) return 'Quantidade de Cores'
    if (subStep === 2) return formData.quantidadeCores === 'duas' ? 'Cor Principal' : 'Cor'
    if (subStep === 3) return 'Tecido e Cor Secundária'
    return ''
  }

  return (
    <PageTransition>
      <main className="min-h-screen pt-16 sm:pt-20">
        {/* Hero Section - GIF Banner */}
        <section className="w-full h-48 sm:h-56 md:h-64 bg-black overflow-hidden">
          {/* Mobile */}
          <img
            src="/bases/ErybyeriMakeUp-cell.gif"
            alt="ERYBYERI"
            className="w-full h-full object-cover object-center sm:hidden"
          />
          {/* Desktop */}
          <img
            src="/bases/ErybyeriMakeUp.gif"
            alt="ERYBYERI"
            className="w-full h-full object-cover object-center hidden sm:block"
          />
        </section>

        {/* Progress Bar */}
        <section className="py-6 sm:py-8 px-4 sm:px-6 md:px-8 border-b border-gray-100">
          <div className="max-w-2xl mx-auto">
            {/* Barra de progresso */}
            <div className="relative h-1 bg-gray-200 rounded-full mb-4">
              <div
                className="absolute left-0 top-0 h-full bg-black rounded-full transition-all duration-500"
                style={{ width: `${((step - 1) / 3) * 100}%` }}
              />
            </div>

            {/* Indicador de etapa */}
            <div className="flex items-center justify-center gap-2 text-sm">
              <span className="font-light text-gray-400">Etapa {step} de 4</span>
              {step === 2 && (
                <span className="font-light text-gray-400">({subStep}/{getTotalSubSteps()})</span>
              )}
              <span className="text-gray-300">—</span>
              <span className="font-light text-black">
                {step === 1 && 'Formato'}
                {step === 2 && getSubStepLabel()}
                {step === 3 && 'Acessórios'}
                {step === 4 && 'Finalizar'}
              </span>
            </div>
          </div>
        </section>

        {/* Form Steps */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
          <div className="max-w-6xl mx-auto">

            {/* Step 1: Formato */}
            {step === 1 && (
              <div className="animate-fadeIn">
                <div className="text-center mb-10 sm:mb-12">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4">
                    Escolha o Formato
                  </h2>
                  <p className="text-sm sm:text-base font-light text-gray-600">
                    Selecione o modelo que melhor combina com seu estilo
                  </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                  {formatos.map((formato) => (
                    <div
                      key={formato.id}
                      onClick={() => handleFormatoSelect(formato.id)}
                      className={`group cursor-pointer transition-all duration-300 rounded-lg overflow-hidden border border-gray-100 ${
                        formData.formato === formato.id
                          ? 'shadow-xl scale-[1.02] -translate-y-1 border-gray-200'
                          : 'hover:shadow-md hover:border-gray-200'
                      }`}
                    >
                      <div className="aspect-[3/4] bg-gray-100 overflow-hidden relative">
                        <img
                          src={formato.imagem}
                          alt={formato.nome}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {formData.formato === formato.id && (
                          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                              <span className="text-black text-xl">✓</span>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="p-3 sm:p-4 bg-white">
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="text-base sm:text-lg font-light tracking-wide">
                            {formato.nome}
                          </h3>
                          <span className="text-sm sm:text-base font-normal text-black">
                            {formatarPreco(formato.preco)}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm font-light text-gray-500">
                          {formato.descricao}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Cor - Sub-etapas */}
            {step === 2 && (
              <div className="animate-fadeIn">
                {/* Sub-etapa 1: Quantidade de cores */}
                {subStep === 1 && (
                  <>
                    <div className="text-center mb-10 sm:mb-12">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4">
                        Quantas Cores?
                      </h2>
                      <p className="text-sm sm:text-base font-light text-gray-600">
                        Escolha se deseja sua bolsa {getFormatoNome()} com uma ou duas cores
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
                      <div
                        onClick={() => handleQuantidadeCoresSelect('uma')}
                        className={`cursor-pointer transition-all duration-300 p-8 sm:p-10 text-center bg-white border border-gray-100 rounded-lg ${
                          formData.quantidadeCores === 'uma'
                            ? 'shadow-xl scale-[1.02] -translate-y-1 border-gray-200'
                            : 'hover:shadow-md hover:border-gray-200'
                        }`}
                      >
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-800" />
                        <h3 className="text-lg font-light mb-2">Uma Cor</h3>
                        <p className="text-sm font-light text-gray-500">
                          Visual uniforme e elegante
                        </p>
                      </div>
                      <div
                        onClick={() => handleQuantidadeCoresSelect('duas')}
                        className={`cursor-pointer transition-all duration-300 p-8 sm:p-10 text-center bg-white border border-gray-100 rounded-lg ${
                          formData.quantidadeCores === 'duas'
                            ? 'shadow-xl scale-[1.02] -translate-y-1 border-gray-200'
                            : 'hover:shadow-md hover:border-gray-200'
                        }`}
                      >
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden flex">
                          <div className="w-1/2 h-full bg-gray-800" />
                          <div className="w-1/2 h-full bg-gray-400" />
                        </div>
                        <h3 className="text-lg font-light mb-2">Duas Cores</h3>
                        <p className="text-sm font-light text-gray-500">
                          Combinação personalizada e única
                        </p>
                      </div>
                    </div>
                  </>
                )}

                {/* Sub-etapa 2: Cor principal */}
                {subStep === 2 && (
                  <>
                    <div className="text-center mb-10 sm:mb-12">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4">
                        {formData.quantidadeCores === 'duas' ? 'Cor Principal' : 'Escolha a Cor'}
                      </h2>
                      <p className="text-sm sm:text-base font-light text-gray-600">
                        {formData.quantidadeCores === 'duas'
                          ? 'Selecione a cor principal da sua bolsa'
                          : 'Selecione a cor para sua bolsa ' + getFormatoNome()}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto">
                      {cores.map((cor) => (
                        <div
                          key={cor.id}
                          onClick={() => handleCorSelect(cor.id)}
                          className={`cursor-pointer transition-all duration-300 p-4 sm:p-6 text-center rounded-lg border border-gray-100 bg-white ${
                            formData.cor === cor.id
                              ? 'shadow-xl scale-[1.02] -translate-y-1 border-gray-200'
                              : 'hover:shadow-md hover:border-gray-200'
                          }`}
                        >
                          <div
                            className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full mb-3 sm:mb-4 transition-all duration-300 ${
                              formData.cor === cor.id ? 'scale-110 shadow-lg' : ''
                            }`}
                            style={{
                              backgroundColor: cor.hex,
                              border: cor.hex === '#FFFFFF' ? '1px solid #e5e5e5' : 'none'
                            }}
                          />
                          <span className="text-xs sm:text-sm font-light tracking-wide">
                            {cor.nome}
                          </span>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* Sub-etapa 3: Tecido + Cor secundária (apenas para duas cores) */}
                {subStep === 3 && formData.quantidadeCores === 'duas' && (
                  <>
                    <div className="text-center mb-10 sm:mb-12">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4">
                        Escolha o Tecido e Cor
                      </h2>
                      <p className="text-sm sm:text-base font-light text-gray-600">
                        Clique na cor desejada para selecionar o tecido
                      </p>
                    </div>

                    <div className="flex flex-col gap-8 max-w-3xl mx-auto">
                      {/* Piquet */}
                      <div className={`p-6 sm:p-8 transition-all duration-300 bg-white rounded-lg border border-gray-100 ${
                        formData.categoriaCor === 'piquet' ? 'shadow-xl scale-[1.01] -translate-y-1 border-gray-200' : 'hover:border-gray-200'
                      }`}>
                        <div className="flex justify-between items-start mb-6">
                          <div>
                            <h3 className="text-xl font-light mb-1">Piquet</h3>
                            <p className="text-sm font-light text-gray-500">
                              Textura clássica e atemporal
                            </p>
                          </div>
                          <span className="text-sm sm:text-base font-normal text-black">
                            + {formatarPreco(precoCores.piquet)}
                          </span>
                        </div>
                        <div className="grid grid-cols-4 sm:grid-cols-8 gap-3 sm:gap-4">
                          {cores.map((cor) => (
                            <div
                              key={cor.id}
                              onClick={() => handleTecidoCorSelect('piquet', cor.id)}
                              className="flex flex-col items-center cursor-pointer group"
                            >
                              <div
                                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full mb-1 transition-all duration-200 ${
                                  formData.categoriaCor === 'piquet' && formData.corSecundaria === cor.id
                                    ? 'scale-125 shadow-lg'
                                    : 'group-hover:scale-110'
                                }`}
                                style={{
                                  backgroundColor: cor.hex,
                                  border: cor.hex === '#FFFFFF' ? '1px solid #e5e5e5' : 'none'
                                }}
                              />
                              <span className="text-[10px] sm:text-xs font-light text-gray-500 text-center leading-tight">
                                {cor.nome}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Premium */}
                      <div className={`p-6 sm:p-8 transition-all duration-300 bg-white rounded-lg border border-gray-100 ${
                        formData.categoriaCor === 'premium' ? 'shadow-xl scale-[1.01] -translate-y-1 border-gray-200' : 'hover:border-gray-200'
                      }`}>
                        <div className="flex justify-between items-start mb-6">
                          <div>
                            <h3 className="text-xl font-light mb-1">Premium</h3>
                            <p className="text-sm font-light text-gray-500">
                              Acabamento sofisticado e luxuoso
                            </p>
                          </div>
                          <span className="text-sm sm:text-base font-normal text-black">
                            + {formatarPreco(precoCores.premium)}
                          </span>
                        </div>
                        <div className="grid grid-cols-4 sm:grid-cols-8 gap-3 sm:gap-4">
                          {cores.map((cor) => (
                            <div
                              key={cor.id}
                              onClick={() => handleTecidoCorSelect('premium', cor.id)}
                              className="flex flex-col items-center cursor-pointer group"
                            >
                              <div
                                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full mb-1 transition-all duration-200 ${
                                  formData.categoriaCor === 'premium' && formData.corSecundaria === cor.id
                                    ? 'scale-125 shadow-lg'
                                    : 'group-hover:scale-110'
                                }`}
                                style={{
                                  backgroundColor: cor.hex,
                                  border: cor.hex === '#FFFFFF' ? '1px solid #e5e5e5' : 'none'
                                }}
                              />
                              <span className="text-[10px] sm:text-xs font-light text-gray-500 text-center leading-tight">
                                {cor.nome}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Preview da seleção */}
                    {formData.corSecundaria && (
                      <div className="mt-8 text-center">
                        <p className="text-sm font-light text-gray-500 mb-3">Sua combinação:</p>
                        <div className="flex items-center justify-center gap-4">
                          <div className="flex flex-col items-center">
                            <div
                              className="w-12 h-12 rounded-full"
                              style={{
                                backgroundColor: cores.find(c => c.id === formData.cor)?.hex,
                                border: formData.cor === 'branco' ? '1px solid #e5e5e5' : 'none'
                              }}
                            />
                            <span className="text-xs font-light mt-1">Principal</span>
                          </div>
                          <span className="text-gray-400">+</span>
                          <div className="flex flex-col items-center">
                            <div
                              className="w-12 h-12 rounded-full"
                              style={{
                                backgroundColor: cores.find(c => c.id === formData.corSecundaria)?.hex,
                                border: formData.corSecundaria === 'branco' ? '1px solid #e5e5e5' : 'none'
                              }}
                            />
                            <span className="text-xs font-light mt-1">{getCategoriaNome()}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            )}

            {/* Step 3: Acessórios */}
            {step === 3 && (
              <div className="animate-fadeIn">
                <div className="text-center mb-10 sm:mb-12">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4">
                    Adicione Acessórios
                  </h2>
                  <p className="text-sm sm:text-base font-light text-gray-600">
                    Acessórios disponíveis para sua {getFormatoNome()} (opcional)
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 max-w-3xl mx-auto">
                  {getAcessoriosDisponiveis().map((acessorio) => (
                    <div
                      key={acessorio.id}
                      onClick={() => handleAcessorioToggle(acessorio.id)}
                      className={`cursor-pointer transition-all duration-300 p-4 sm:p-5 flex items-center justify-between rounded-lg border ${
                        formData.acessorios.includes(acessorio.id)
                          ? 'shadow-xl scale-[1.02] -translate-y-1 bg-black text-white border-black'
                          : 'border-gray-100 hover:border-gray-200 hover:shadow-md bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-5 h-5 sm:w-6 sm:h-6 border flex items-center justify-center flex-shrink-0 transition-all rounded ${
                            formData.acessorios.includes(acessorio.id)
                              ? 'border-white bg-white'
                              : 'border-gray-300'
                          }`}
                        >
                          {formData.acessorios.includes(acessorio.id) && (
                            <span className="text-black text-sm">✓</span>
                          )}
                        </div>
                        <span className="text-sm sm:text-base font-light">
                          {acessorio.nome}
                        </span>
                      </div>
                      <span className={`text-sm font-normal flex-shrink-0 ${
                        formData.acessorios.includes(acessorio.id) ? 'text-white' : 'text-black'
                      }`}>
                        + {formatarPreco(acessorio.preco)}
                      </span>
                    </div>
                  ))}
                </div>

                {formData.acessorios.length > 0 && (
                  <div className="mt-8 text-center">
                    <p className="text-sm font-light text-gray-500">
                      {formData.acessorios.length} acessório{formData.acessorios.length > 1 ? 's' : ''} selecionado{formData.acessorios.length > 1 ? 's' : ''}
                      <span className="mx-2">•</span>
                      <span className="text-black font-normal">+ {formatarPreco(getPrecoAcessorios())}</span>
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Step 4: Finalizar */}
            {step === 4 && (
              <div className="animate-fadeIn">
                <div className="text-center mb-10 sm:mb-12">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4">
                    Finalize seu Pedido
                  </h2>
                  <p className="text-sm sm:text-base font-light text-gray-600">
                    Revise sua bolsa e escolha como deseja nos contatar
                  </p>
                </div>

                <div className="max-w-3xl mx-auto">
                  {/* Resumo com Preços */}
                  <div className="bg-gray-50 p-6 sm:p-8 mb-8 sm:mb-10">
                    <h3 className="text-lg sm:text-xl font-light mb-6 tracking-wide">
                      RESUMO DA SUA BOLSA
                    </h3>
                    <div className="space-y-4">
                      {/* Formato/Base */}
                      <div className="flex justify-between items-center py-3 border-b border-gray-200">
                        <div>
                          <span className="text-sm font-light text-gray-600">Formato</span>
                          <p className="text-sm sm:text-base font-light">{getFormatoNome()}</p>
                        </div>
                        <span className="text-sm sm:text-base font-normal">{formatarPreco(getPrecoBase())}</span>
                      </div>

                      {/* Cores */}
                      {formData.quantidadeCores === 'duas' ? (
                        <>
                          <div className="flex justify-between items-center py-3 border-b border-gray-200">
                            <div className="flex items-center gap-3">
                              <span className="text-sm font-light text-gray-600">Cor Principal:</span>
                              <div
                                className="w-5 h-5 rounded-full"
                                style={{
                                  backgroundColor: cores.find(c => c.id === formData.cor)?.hex,
                                  border: formData.cor === 'branco' ? '1px solid #e5e5e5' : 'none'
                                }}
                              />
                              <span className="text-sm font-light">{getCorNome()}</span>
                            </div>
                            <span className="text-sm text-gray-400">Incluso</span>
                          </div>
                          <div className="flex justify-between items-center py-3 border-b border-gray-200">
                            <div className="flex items-center gap-3">
                              <span className="text-sm font-light text-gray-600">Cor Secundária ({getCategoriaNome()}):</span>
                              <div
                                className="w-5 h-5 rounded-full"
                                style={{
                                  backgroundColor: cores.find(c => c.id === formData.corSecundaria)?.hex,
                                  border: formData.corSecundaria === 'branco' ? '1px solid #e5e5e5' : 'none'
                                }}
                              />
                              <span className="text-sm font-light">{getCorSecundariaNome()}</span>
                            </div>
                            <span className="text-sm sm:text-base font-normal">+ {formatarPreco(getPrecoCores())}</span>
                          </div>
                        </>
                      ) : (
                        <div className="flex justify-between items-center py-3 border-b border-gray-200">
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-light text-gray-600">Cor:</span>
                            <div
                              className="w-5 h-5 rounded-full"
                              style={{
                                backgroundColor: cores.find(c => c.id === formData.cor)?.hex,
                                border: formData.cor === 'branco' ? '1px solid #e5e5e5' : 'none'
                              }}
                            />
                            <span className="text-sm font-light">{getCorNome()}</span>
                          </div>
                          <span className="text-sm text-gray-400">Incluso</span>
                        </div>
                      )}

                      {/* Acessórios */}
                      <div className="py-3 border-b border-gray-200">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-light text-gray-600">Acessórios</span>
                          {formData.acessorios.length > 0 && (
                            <span className="text-sm sm:text-base font-normal">+ {formatarPreco(getPrecoAcessorios())}</span>
                          )}
                        </div>
                        {formData.acessorios.length > 0 ? (
                          <ul className="space-y-1 mt-2">
                            {formData.acessorios.map(a => {
                              const acessorio = todosAcessorios.find(ac => ac.id === a)
                              return (
                                <li key={a} className="flex justify-between text-sm font-light text-gray-500">
                                  <span>{acessorio?.nome}</span>
                                  <span>{formatarPreco(acessorio?.preco || 0)}</span>
                                </li>
                              )
                            })}
                          </ul>
                        ) : (
                          <span className="text-sm font-light text-gray-400">Nenhum selecionado</span>
                        )}
                      </div>

                      {/* Total */}
                      <div className="flex justify-between items-center pt-4">
                        <span className="text-lg font-light">TOTAL</span>
                        <span className="text-xl sm:text-2xl font-normal">{formatarPreco(getPrecoTotal())}</span>
                      </div>
                    </div>
                  </div>

                  {/* Dados de Contato */}
                  <div className="mb-8 sm:mb-10">
                    <h3 className="text-lg sm:text-xl font-light mb-6 tracking-wide">
                      SEUS DADOS
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs sm:text-sm font-light tracking-wider mb-2">
                          NOME *
                        </label>
                        <input
                          type="text"
                          name="nome"
                          value={formData.nome}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-300 focus:border-black focus:outline-none transition-colors text-base"
                          placeholder="Seu nome"
                        />
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-light tracking-wider mb-2">
                          TELEFONE *
                        </label>
                        <input
                          type="tel"
                          name="telefone"
                          value={formData.telefone}
                          onChange={handleTelefoneChange}
                          required
                          maxLength={15}
                          className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-300 focus:border-black focus:outline-none transition-colors text-base"
                          placeholder="(00) 00000-0000"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="mt-12 sm:mt-16 pt-8 border-t border-gray-200">
              {/* Preço Total */}
              {getPrecoTotal() > 0 && step !== 4 && (
                <div className="text-center mb-6">
                  <span className="text-sm text-gray-500">Total parcial: </span>
                  <span className="text-xl font-normal">{formatarPreco(getPrecoTotal())}</span>
                </div>
              )}

              <div className={`flex items-center ${
                step === 1 ? 'justify-center' : 'justify-between'
              }`}>
                {step > 1 && (
                  <button
                    onClick={prevStep}
                    className="px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm tracking-wider border border-black transition-all duration-300 hover:bg-black hover:text-white"
                  >
                    VOLTAR
                  </button>
                )}

                {step < totalSteps ? (
                  <button
                    onClick={nextStep}
                    disabled={!canProceed()}
                    className={`px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm tracking-wider transition-all duration-300 ${
                      canProceed()
                        ? 'bg-black text-white hover:bg-gray-800'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    CONTINUAR
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={!canProceed()}
                    className={`px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm tracking-wider transition-all duration-300 ${
                      canProceed()
                        ? 'bg-black text-white hover:bg-gray-800'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    ENVIAR VIA INSTAGRAM
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-12 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-8 sm:mb-12 text-center">
              Como Funciona?
            </h2>

            {/* Mobile: Timeline horizontal compacta */}
            <div className="sm:hidden">
              <div className="flex items-center justify-between mb-6">
                <div className="flex flex-col items-center flex-1">
                  <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center text-sm font-light">
                    1
                  </div>
                  <span className="text-xs font-light mt-2">Configure</span>
                </div>
                <div className="flex-1 h-px bg-black/20 -mt-5"></div>
                <div className="flex flex-col items-center flex-1">
                  <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center text-sm font-light">
                    2
                  </div>
                  <span className="text-xs font-light mt-2">Converse</span>
                </div>
                <div className="flex-1 h-px bg-black/20 -mt-5"></div>
                <div className="flex flex-col items-center flex-1">
                  <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center text-sm font-light">
                    3
                  </div>
                  <span className="text-xs font-light mt-2">Receba</span>
                </div>
              </div>
              <p className="text-center text-xs text-gray-500 font-light leading-relaxed">
                Escolha sua bolsa ideal, entre em contato pelo Instagram e receba sua peça exclusiva feita artesanalmente.
              </p>
            </div>

            {/* Desktop: Cards */}
            <div className="hidden sm:grid sm:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-light">
                  1
                </div>
                <h3 className="text-lg font-light mb-2">Configure</h3>
                <p className="text-sm font-light text-gray-600">
                  Escolha formato, cor e acessórios da sua bolsa ideal
                </p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-light">
                  2
                </div>
                <h3 className="text-lg font-light mb-2">Converse</h3>
                <p className="text-sm font-light text-gray-600">
                  Entre em contato para finalizar detalhes e orçamento
                </p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-light">
                  3
                </div>
                <h3 className="text-lg font-light mb-2">Receba</h3>
                <p className="text-sm font-light text-gray-600">
                  Sua bolsa exclusiva será criada artesanalmente
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Modal Instagram */}
      {showInstagramModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowInstagramModal(false)}
          />

          {/* Modal */}
          <div className="relative bg-white w-full max-w-lg p-6 sm:p-8 animate-fadeIn">
            <button
              onClick={() => setShowInstagramModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-light mb-2">Mensagem Copiada!</h3>
              <p className="text-sm text-gray-600 font-light">
                Sua configuração foi copiada. Clique no botão abaixo para abrir o Instagram e cole a mensagem na DM.
              </p>
            </div>

            {/* Preview da mensagem */}
            <div className="bg-gray-50 p-4 mb-6 max-h-40 overflow-y-auto">
              <pre className="text-xs text-gray-600 whitespace-pre-wrap font-sans">
                {mensagemCopiada}
              </pre>
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={abrirInstagramDM}
                className="w-full py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white text-sm tracking-wider hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                </svg>
                ABRIR INSTAGRAM DM
              </button>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(mensagemCopiada)
                }}
                className="w-full py-3 border border-gray-300 text-sm tracking-wider hover:border-black transition-colors text-gray-600 hover:text-black"
              >
                COPIAR NOVAMENTE
              </button>
            </div>

            <p className="text-xs text-gray-400 text-center mt-4">
              No celular, o Instagram abrirá diretamente na conversa
            </p>
          </div>
        </div>
      )}
    </PageTransition>
  )
}
