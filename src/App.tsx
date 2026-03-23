/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import {
  Code2,
  Layout,
  Database,
  Search,
  Smartphone,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Layers,
} from 'lucide-react';

const skills = [
  { name: 'UX Research and User Flows', icon: Search },
  { name: 'Wireframing and Prototyping', icon: Layout },
  { name: 'Design Systems', icon: Layers },
  { name: 'Frontend (React/Next.js)', icon: Code2 },
  { name: 'Data Visualization', icon: Database },
  { name: 'UI Design (Web and Mobile)', icon: Smartphone },
];

const experience = [
  {
    company: 'EMD TECH',
    role: 'UI/UX Designer and Product Specialist',
    period: '2023 - Present',
    description:
      'Redesigned enterprise systems, dashboards, and digital workflows with a focus on clarity, efficiency, and scalable user experience.',
    tags: ['Enterprise', 'Dashboards', 'Design Systems'],
  },
  {
    company: 'Shoprite Mozambique',
    role: 'Technical Assistant and Digital Systems',
    period: '2017 - 2020',
    description:
      'Supported telecom digital systems, assisted users with mobile services, and identified usability issues in day-to-day service flows.',
    tags: ['Telecom', 'Digital Systems', 'Usability'],
  },
  {
    company: 'Kawena Mozambique',
    role: 'Digital User Experience (Telecom)',
    period: '2023',
    description:
      'Worked with telecom digital platforms, analyzed user journeys, and improved interaction quality across digital touchpoints.',
    tags: ['Telecom', 'User Journeys', 'Platforms'],
  },
  {
    company: 'Sasseka Mozambique',
    role: 'Digital UX Experience',
    period: '2015 - 2016',
    description:
      'Improved digital telecom experiences by reviewing flows, platform interactions, and opportunities to simplify the user journey.',
    tags: ['Telecom', 'UX Review', 'Service Flows'],
  },
  {
    company: 'Teledata Maputo',
    role: 'Banking Systems User Experience',
    period: '2014',
    description:
      'Analyzed financial interfaces and identified UX improvement opportunities for banking-related systems and workflows.',
    tags: ['Banking', 'Interface Analysis', 'UX'],
  },
  {
    company: 'Indico Seguros Mozambique',
    role: 'Digital UX Support (Banking)',
    period: '2013',
    description:
      'Supported digital banking systems and improved the understanding of user needs, interaction patterns, and service usability.',
    tags: ['Banking', 'Digital Support', 'User Experience'],
  },
  {
    company: 'UNICEF - Polio Campaign',
    role: 'UX Data Assistant',
    period: '2013',
    description:
      'Worked with data collection and analysis in field operations, helping improve the usability of digital and operational tools.',
    tags: ['NGO', 'Data Collection', 'Field Tools'],
  },
];

const projectGroups = [
  {
    name: 'Mobile Applications',
    gridClass: 'xl:grid-cols-4',
    projects: [
      {
        company: 'EMD TECH',
        image: '/projects/portfolio/portfolio-1.png',
      },
      {
        company: 'Shoprite Mozambique',
        image: '/projects/portfolio/portfolio-2.png',
      },
      {
        company: 'Kawena Mozambique',
        image: '/projects/portfolio/portfolio-3.png',
      },
      {
        company: 'Sasseka Mozambique',
        image: '/projects/portfolio/portfolio-4.png',
      },
    ],
  },
  {
    name: 'Web Applications',
    gridClass: 'xl:grid-cols-3',
    projects: [
      {
        company: 'Teledata Maputo',
        image: '/projects/portfolio/portfolio-5.png',
      },
      {
        company: 'Indico Seguros',
        image: '/projects/portfolio/portfolio-6.png',
      },
      {
        company: 'UNICEF',
        image: '/projects/portfolio/portfolio-7.png',
      },
      {
        company: 'Personal Projects',
        image: '/projects/portfolio/portfolio-8.png',
      },
      {
        company: 'React Experiences',
        image: '/projects/portfolio/portfolio-9.png',
      },
    ],
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] selection:bg-brand selection:text-black">
      <nav className="fixed top-0 z-50 flex w-full items-center justify-end px-6 py-8 text-white md:px-24">
        <div className="flex gap-8 text-xs font-medium uppercase tracking-[0.24em] opacity-70">
          <a href="#work" className="transition-opacity hover:opacity-100">
            Work
          </a>
          <a href="#about" className="transition-opacity hover:opacity-100">
            About
          </a>
          <a href="#contact" className="transition-opacity hover:opacity-100">
            Contact
          </a>
        </div>
      </nav>

      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-36 pb-18 md:px-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_36%,rgba(255,255,255,0.2),transparent_17%),radial-gradient(circle_at_78%_18%,rgba(163,104,255,0.18),transparent_22%),linear-gradient(180deg,rgba(8,8,10,0.42)_0%,rgba(5,5,5,0.68)_46%,rgba(5,5,5,0.88)_100%)]" />
        <div className="absolute left-[-2%] top-[12%] h-[28rem] w-[28rem] rounded-full bg-white/12 blur-[145px]" />
        <div className="absolute left-[14%] top-[38%] h-[16rem] w-[16rem] rounded-full bg-white/6 blur-[110px]" />
        <div className="absolute inset-y-0 right-[-8%] hidden w-[42%] rounded-full bg-[#8e5dff]/12 blur-[150px] lg:block" />

        <div className="relative z-10 grid w-full items-center gap-14 lg:grid-cols-[minmax(0,0.88fr)_minmax(460px,1.12fr)] xl:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[42rem]"
          >
            <span className="mb-6 inline-flex rounded-full border border-white/14 bg-white/6 px-4 py-2 text-[11px] font-display font-semibold uppercase tracking-[0.28em] text-white/82 backdrop-blur-md">
              UI/UX Designer and Product Specialist
            </span>
            <h1 className="mb-7 text-4xl font-display font-semibold leading-[0.92] tracking-[-0.08em] text-white sm:text-5xl md:text-[5.35rem]">
              RONALDO
              <br />
              MAJASSE
            </h1>
            <p className="max-w-xl text-base leading-8 font-medium text-white/72 md:text-lg">
              Product designer focused on enterprise systems, telecom services,
              banking platforms, retail experiences, and NGO tools, combining
              UX strategy with frontend execution.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="inline-flex items-center rounded-full bg-white px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-black shadow-[0_14px_40px_rgba(255,255,255,0.18)] transition-all hover:-translate-y-1 hover:bg-white/92"
              >
                View Projects
              </a>
              <a
                href="#about"
                className="inline-flex items-center rounded-full border border-white/16 bg-black/16 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/84 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-white/28 hover:bg-white/8"
              >
                Explore Skills
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative mx-auto w-full max-w-[820px]"
          >
            <div className="absolute -left-10 top-10 h-44 w-44 rounded-full bg-brand/20 blur-[90px]" />
            <div className="absolute -right-8 top-16 h-56 w-56 rounded-full bg-[#8e5dff]/22 blur-[120px]" />

            <div className="relative overflow-hidden rounded-[2.6rem] bg-[#0d0b12]/92 p-4 shadow-[0_30px_90px_rgba(0,0,0,0.55)]">
              <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(8,6,14,0.96)_0%,rgba(12,10,18,0.9)_42%,rgba(10,8,16,0.94)_100%)]" />
              <div className="absolute left-[12%] top-[16%] h-[28%] w-[22%] rounded-[2rem] bg-white/10 backdrop-blur-xl" />
              <div className="absolute left-[18%] top-[22%] h-[16%] w-[12%] rounded-[1.3rem] bg-white/12" />
              <div className="absolute left-[34%] top-[12%] h-[58%] w-[18%] rounded-[2.2rem] bg-[#8e5dff]/22" />
              <div className="absolute right-[14%] bottom-[12%] h-44 w-44 rounded-full bg-brand/16 blur-[90px]" />
              <div className="absolute right-[14%] top-[14%] h-[62%] w-[34%] rounded-[2.6rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.04))]" />
              <div className="absolute right-[22%] top-[20%] h-[46%] w-[18%] rounded-[2.1rem] bg-[#8e5dff]/22 blur-sm" />
              <div className="relative z-10 flex min-h-[430px] items-end justify-center px-3 pb-3 pt-6 md:min-h-[520px] md:justify-end">
                <div className="absolute left-[10%] top-12 h-24 w-24 rounded-full bg-white/10 blur-[70px]" />
                <div className="absolute inset-x-[12%] bottom-5 top-12 rounded-[2.5rem] bg-[linear-gradient(180deg,rgba(142,93,255,0.34),rgba(255,255,255,0.06))]" />
                <div className="absolute inset-x-[24%] bottom-0 top-10 rounded-full bg-[#8e5dff]/18 blur-[100px]" />
                <div className="relative z-10 h-[320px] w-[78%] rounded-[2.5rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.03))] shadow-[0_24px_80px_rgba(0,0,0,0.34)] md:h-[430px] md:w-[58%]" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="relative overflow-hidden border-t border-white/5 py-32 px-6 md:px-24">
        <img
          src="/profile/ronaldo-workspace-card.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-y-0 right-0 hidden h-full w-[42%] object-cover opacity-12 lg:block"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,1)_0%,rgba(5,5,5,0.97)_54%,rgba(5,5,5,0.88)_100%)]" />
        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-[1.75rem] border border-white/8 bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-brand/30 hover:bg-white/[0.05]"
            >
              <skill.icon className="mb-6 h-8 w-8 text-brand opacity-50 transition-opacity group-hover:opacity-100" />
              <h3 className="mb-4 text-xl font-display font-medium leading-snug">
                {skill.name}
              </h3>
              <div className="h-px w-12 bg-white/10 transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </section>

      <section id="work" className="bg-zinc-950 py-32 px-6 md:px-24">
        <div className="flex flex-col gap-24 md:flex-row">
          <div className="md:w-1/3">
            <h2 className="sticky top-32 text-4xl font-display font-bold">
              PROFESSIONAL
              <br />
              EXPERIENCE
            </h2>
          </div>
          <div className="space-y-24 md:w-2/3">
            {experience.map((exp) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative border-l border-white/10 pl-8"
              >
                <div className="absolute top-0 -left-[5px] h-2 w-2 rounded-full bg-brand" />
                <span className="mb-2 block text-xs font-mono opacity-40">
                  {exp.period}
                </span>
                <h3 className="mb-1 text-2xl font-display font-bold">
                  {exp.company}
                </h3>
                <p className="mb-4 text-sm font-medium text-brand">
                  {exp.role}
                </p>
                <p className="mb-6 leading-relaxed opacity-60">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-widest opacity-50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 md:px-24">
        <div className="mb-16 max-w-6xl">
          <span className="mb-4 block text-xs font-display font-semibold uppercase tracking-[0.3em] text-brand">
            Projects
          </span>
        </div>

        <div className="space-y-18">
          {projectGroups.map((group) => (
            <div key={group.name} className="mb-16 last:mb-0">
              <div className="mb-8 flex items-center gap-6">
                <h3 className="text-2xl font-display font-bold uppercase tracking-[0.18em] text-white/90">
                  {group.name}
                </h3>
                <div className="hidden h-px flex-1 bg-white/10 md:block" />
              </div>

              <div className={`grid grid-cols-1 gap-8 md:grid-cols-2 ${group.gridClass}`}>
                {group.projects.map((project, index) => (
                  <motion.div
                    key={`${group.name}-${project.company}`}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true, amount: 0.2 }}
                    whileHover={{ y: -10 }}
                    className="group relative aspect-video overflow-hidden rounded-2xl border border-white/5 bg-zinc-900"
                  >
                    <img
                      src={project.image}
                      alt=""
                      aria-hidden="true"
                      className="h-full w-full scale-[1.03] object-cover opacity-78 transition-all duration-700 group-hover:scale-100 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-95 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute bottom-7 left-7 translate-y-3 transition-transform duration-500 group-hover:translate-y-0">
                      <h4 className="text-2xl font-display font-bold text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.45)]">
                        {project.company}
                      </h4>
                    </div>
                    <div className="absolute top-7 right-7 opacity-0 transition-opacity group-hover:opacity-100">
                      <ExternalLink aria-hidden="true" className="h-6 w-6" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer
        id="contact"
        className="border-t border-white/5 py-32 px-6 text-center md:px-24"
      >
        <h2 className="mb-12 text-5xl font-display font-bold tracking-tighter md:text-7xl">
          LET&apos;S BUILD
          <br />
          TOGETHER
        </h2>
        <div className="mb-16 flex justify-center gap-8">
          <a
            href="mailto:ronaldomajasse@gmail.com"
            className="rounded-full border border-white/10 p-4 transition-all hover:bg-white hover:text-black"
          >
            <Mail className="h-6 w-6" />
          </a>
          <a
            href="https://github.com/Majasse"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 p-4 transition-all hover:bg-white hover:text-black"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="#"
            className="rounded-full border border-white/10 p-4 transition-all hover:bg-white hover:text-black"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
        <p className="text-xs uppercase tracking-[0.5em] opacity-30">
          Copyright 2026 Ronaldo Majasse - UI/UX Designer
        </p>
      </footer>
    </div>
  );
}
