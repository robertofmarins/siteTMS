import { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Calculator, 
  Package, 
  Users, 
  Mail, 
  Phone,
  Award,
  Target,
  Zap,
  ChevronDown,
  Building2,
  Wrench,
  TrendingUp
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Update active section based on scroll position
      const sections = ['home', 'about-company', 'about-me', 'services', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const services = [
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Orçamentos Precisos",
      description: "Estruturo orçamentos detalhados e organizados, permitindo visualizar lucros e despesas com total transparência antes de cada decisão estratégica."
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Gestão de Suprimentos",
      description: "Conectando você aos melhores fornecedores parceiros, otimizando custos e prazos com gestão estratégica para maximizar a lucratividade."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Consultoria Personalizada",
      description: "Acompanhamento completo do projeto do início ao fim, com foco em excelência operacional e máxima rentabilidade para seu negócio."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              
                <img 
                  src="/logop.png" 
                  alt="Descrição da imagem" 
                  className="w-10 h-10 object-contain rounded-lg"
                />
              
              <span className={`ml-3 text-xl font-bold transition-colors ${
                scrollY > 50 ? 'text-gray-900' : 'text-white'
              }`}>
                TMS Engenharia
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Início' },
                { id: 'about-company', label: 'Empresa' },
                { id: 'about-me', label: 'Sobre Mim' },
                { id: 'services', label: 'Serviços' },
                { id: 'contact', label: 'Contato' }
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-purple-600 ${
                    activeSection === id 
                      ? 'text-purple-600' 
                      : scrollY > 50 ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {label}
                </button>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? (
                <X className={`w-6 h-6 ${scrollY > 50 ? 'text-gray-900' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${scrollY > 50 ? 'text-gray-900' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { id: 'home', label: 'Início' },
                { id: 'about-company', label: 'Empresa' },
                { id: 'about-me', label: 'Sobre Mim' },
                { id: 'services', label: 'Serviços' },
                { id: 'contact', label: 'Contato' }
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>

        <div className="relative z-10 flex items-center min-h-screen px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="text-white">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                  <Award className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Especialista em Construção Civil</span>
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                  Precisão em
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                    orçamentos
                  </span>
                  excelência em suprimentos
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Transformo desafios em oportunidades, ajudando empresas da construção civil a alcançar maior lucratividade através de orçamentos precisos e gestão estratégica.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/5521969110667?text=Olá!%20Gostaria%20de%20mais%20informações."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                  >
                    Trabalhe Comigo
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                  
                  <button
                    onClick={() => scrollToSection('about-company')}
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-200"
                  >
                    Saiba Mais
                  </button>
                </div>
              </div>

              {/* Visual Element */}
              <div className="relative">
                <div className="relative z-10 bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl p-4 mb-3">
                        <Target className="w-8 h-8 text-white mx-auto" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">100%</h3>
                      <p className="text-gray-300 text-sm">Precisão</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl p-4 mb-3">
                        <TrendingUp className="w-8 h-8 text-white mx-auto" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">+50%</h3>
                      <p className="text-gray-300 text-sm">Lucratividade</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl p-4 mb-3">
                        <Zap className="w-8 h-8 text-white mx-auto" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">24h</h3>
                      <p className="text-gray-300 text-sm">Resposta</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-4 mb-3">
                        <Users className="w-8 h-8 text-white mx-auto" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">100+</h3>
                      <p className="text-gray-300 text-sm">Projetos</p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-20 blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full opacity-20 blur-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/70" />
        </div>
      </section>

      {/* About Company Section */}
      <section id="about-company" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center bg-purple-100 rounded-full px-4 py-2 mb-6">
                <Building2 className="w-4 h-4 mr-2 text-purple-600" />
                <span className="text-sm font-semibold text-purple-600">Nossa Empresa</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Precisão e
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  {' '}Qualidade
                </span>
              </h2>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Na nossa empresa, entendemos que um orçamento preciso é a base para o sucesso de qualquer projeto. Por isso, trabalhamos com rigor e transparência em cada etapa, analisando detalhadamente cada necessidade e oferecendo soluções personalizadas.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Além disso, garantimos a excelência no processo de fornecimento de materiais, assegurando que seus projetos sejam executados com os melhores recursos, no prazo e com a qualidade que você espera.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Com nossa expertise, você pode contar com orçamentos confiáveis e suprimentos de alta performance para transformar sua visão em realidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about-me" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Photo */}
            <div className="relative order-2 lg:order-1">
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-purple-100 to-blue-100 p-2">
                  <img 
                    src="/thais.png" 
                    alt="Thais Meirelles - Engenheira Civil" 
                    className="w-full h-full object-cover rounded-2xl shadow-lg"
                  />
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-10" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full opacity-10" />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-4 py-2 mb-6">
                <Users className="w-4 h-4 mr-2 text-purple-600" />
                <span className="text-sm font-semibold text-purple-600">Sobre Mim</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Transformando
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  {' '}Desafios
                </span>
                em Oportunidades
              </h2>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Trabalhei por muitos anos na coordenação de equipes e na responsabilidade técnica, colaborando com pequenas empresas do setor da construção civil. Durante esse período, percebi que muitas enfrentavam grandes dificuldades para se manter no mercado, principalmente devido a erros em orçamentos e na compra de materiais.
                </p>
                
                <p>
                  Essas experiências me ensinaram lições valiosas e reforçaram minha vontade de fazer a diferença. Decidi seguir um novo caminho, criando minha própria consultoria para ajudar esses empresários a superar desafios e alcançar maior lucratividade.
                </p>
                
                <p>
                  Trago uma abordagem distinta e personalizada para construção civil, ajudando a transformar uma base enfraquecida por práticas de baixo custo em processos sólidos e estratégicos, capazes de entregar excelência.
                </p>
              </div>

              {/* Skills/Stats */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl">
                  <h4 className="text-2xl font-bold text-gray-900">15+</h4>
                  <p className="text-gray-600">Anos de Experiência</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                  <h4 className="text-2xl font-bold text-gray-900">200+</h4>
                  <p className="text-gray-600">Projetos Realizados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20.5V18H19v2.5L11.5 28l1.5 1.5L20 22l6.5 7.5 1.5-1.5L20 20.5z'/%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Wrench className="w-4 h-4 mr-2 text-white" />
              <span className="text-sm font-medium text-white">Nossos Serviços</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              O Que
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                {' '}Ofereço
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Soluções completas para impulsionar seu negócio na construção civil com precisão, qualidade e resultados garantidos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 h-full">
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl p-4 w-fit mb-6 group-hover:shadow-lg transition-shadow duration-300">
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mt-6">
                    <div className="w-12 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-20 transition-all duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center bg-purple-100 rounded-full px-4 py-2 mb-6">
                <Mail className="w-4 h-4 mr-2 text-purple-600" />
                <span className="text-sm font-semibold text-purple-600">Entre em Contato</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Vamos trabalhar
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  {' '}juntos
                </span>
              </h2>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Pronto para transformar seu negócio? Entre em contato e descubra como podemos impulsionar seus resultados.
              </p>

              {/* Contact Info */}
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-3 mr-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">E-mail</h4>
                    <p className="text-gray-700">thaismeirellesengcivil@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-3 mr-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Telefone</h4>
                    <p className="text-gray-700">(21) 97893-1271</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-full p-6 w-fit mx-auto mb-6">
                  <Building2 className="w-12 h-12 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Pronto para começar?
                </h3>
                
                <p className="text-gray-700 mb-8">
                  Entre em contato via WhatsApp e solicite uma consultoria gratuita para seu projeto.
                </p>
                
                <a
                  href="https://wa.me/5521969110667?text=Olá!%20Gostaria%20de%20mais%20informações."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  Iniciar Conversa no WhatsApp
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <img 
                  src="/logop.png" 
                  alt="Descrição da imagem" 
                  className="w-10 h-10 object-contain rounded-lg"
                />
              <span className="text-xl font-bold">TMS Engenharia</span>
            </div>
            
            <p className="text-gray-400 text-center md:text-right">
              © 2025 TMS Engenharia. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;