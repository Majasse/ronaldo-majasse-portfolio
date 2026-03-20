import { motion } from "motion/react";
import { 
  Github, 
  Mail, 
  Smartphone, 
  Globe, 
  Database, 
  Code2, 
  Cpu, 
  ExternalLink,
  ChevronRight
} from "lucide-react";

const projects = [
  {
    title: "Telecom CRM & Billing",
    description: "Sistema completo de gestão de clientes e faturação para o setor de telecomunicações.",
    tech: ["PHP", "MySQL", "REST API"],
    link: "https://github.com/Majasse"
  },
  {
    title: "Digital Wallet",
    description: "Carteira digital com integração de pagamentos móveis (M-Pesa/e-Mola).",
    tech: ["Kotlin", "Firebase", "Node.js"],
    link: "https://github.com/Majasse"
  },
  {
    title: "Offline Logistics System",
    description: "App Android robusto que funciona sem internet com sincronização automática de dados.",
    tech: ["Java", "SQLite", "Android SDK"],
    link: "https://github.com/Majasse"
  },
  {
    title: "Fleet Management",
    description: "Dashboard em tempo real para monitoramento de veículos e telemetria avançada.",
    tech: ["React", "PHP", "IoT"],
    link: "https://github.com/Majasse"
  }
];

const skills = [
  { name: "Android (Kotlin/Java)", icon: <Smartphone className="w-5 h-5" /> },
  { name: "Full-Stack (PHP/JS)", icon: <Globe className="w-5 h-5" /> },
  { name: "Databases (MySQL/Firebase)", icon: <Database className="w-5 h-5" /> },
  { name: "APIs REST", icon: <Cpu className="w-5 h-5" /> },
  { name: "Git & DevOps", icon: <Code2 className="w-5 h-5" /> }
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-sky-500/30">
      {/* Hero Section */}
      <header className="relative h-[70vh] flex flex-col items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_70%)]" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4">
            Ronaldo Majasse
          </h1>
          <p className="text-xl md:text-2xl text-sky-400 font-medium mb-8">
            Full-Stack Developer | Android | IT Specialist
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-slate-400">
            <a href="mailto:ronaldomajasse@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
              <span>ronaldomajasse@gmail.com</span>
            </a>
            <a href="https://github.com/RonaldoMajasse/My-portifolio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
              <span>github.com/RonaldoMajasse</span>
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-12 bg-gradient-to-b from-sky-500 to-transparent" />
        </motion.div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-24 space-y-32">
        {/* About Section */}
        <section id="about" className="grid md:grid-template-columns-[1fr_2fr] gap-12 items-start">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white sticky top-24"
          >
            Sobre Mim
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg text-slate-400 leading-relaxed"
          >
            <p>
              Desenvolvedor de software com mais de <span className="text-white font-medium text-xl">6 anos</span> de experiência em aplicações web, mobile e sistemas empresariais de larga escala.
            </p>
            <p>
              Especializado no ecossistema <span className="text-sky-400">Android (Kotlin/Java)</span>, PHP moderno e arquitetura de APIs REST. Tenho um foco particular em soluções <span className="italic text-slate-300">offline-first</span>, garantindo que sistemas críticos funcionem em qualquer condição de conectividade.
            </p>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-12">
          <div className="flex items-end justify-between">
            <h2 className="text-3xl font-bold text-white">Projetos em Destaque</h2>
            <a href="https://github.com/Majasse" className="text-sky-400 hover:underline flex items-center gap-1 text-sm font-medium">
              Ver todos no GitHub <ChevronRight className="w-4 h-4" />
            </a>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-slate-900/50 border border-white/5 rounded-2xl p-8 hover:bg-slate-900 hover:border-sky-500/30 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-slate-600 group-hover:text-sky-400 transition-colors" />
                </div>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 text-xs font-medium bg-slate-800 text-slate-300 rounded-full border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10"
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-12">
          <h2 className="text-3xl font-bold text-white">Especialidades</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex flex-col items-center justify-center p-6 bg-slate-900/30 border border-white/5 rounded-xl hover:border-sky-500/20 transition-colors"
              >
                <div className="text-sky-400 mb-3">
                  {skill.icon}
                </div>
                <span className="text-sm font-medium text-slate-300 text-center">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-12 mt-24">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Ronaldo Majasse. Todos os direitos reservados.
          </p>
          <div className="flex gap-8">
            <a href="https://github.com/RonaldoMajasse/My-portifolio" className="text-slate-500 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="mailto:ronaldomajasse@gmail.com" className="text-slate-500 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
