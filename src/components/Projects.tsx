import { FileText, ClipboardList, Megaphone, ArrowUpRight, Wrench } from 'lucide-react';
import { projects } from '@/data/portfolio';
import SectionHeading from '@/components/SectionHeading';

const ICONS = [FileText, ClipboardList, Megaphone];

export default function Projects() {
  return (
    <section id="projects" className="section-pad bg-white dark:bg-navy-950">
      <div className="max-w-6xl mx-auto container-px">
        <SectionHeading
          eyebrow="Projects"
          title="Work translated into results"
          description="Real responsibilities from my roles, framed as the outcomes they produced."
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-7">
          {projects.map((project, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            return (
              <article
                key={project.title}
                className="group relative flex flex-col bg-white dark:bg-navy-800 rounded-2xl border border-navy-100 dark:border-navy-700 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-navy-900/15 dark:hover:shadow-navy-950/40 hover:border-navy-200 dark:hover:border-navy-500"
              >
                <div className="h-1.5 bg-gradient-to-r from-navy-700 to-navy-400 transition-all duration-500 group-hover:from-navy-900 group-hover:to-navy-500 dark:group-hover:from-white dark:group-hover:to-navy-300" />

                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-navy-900 dark:bg-white flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      <Icon size={22} className="text-white dark:text-navy-900" strokeWidth={1.75} />
                    </div>
                    <span className="font-display text-3xl font-extrabold text-navy-100 dark:text-navy-700 leading-none transition-colors duration-300 group-hover:text-navy-200 dark:group-hover:text-navy-600">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-navy-900 dark:text-white mb-2.5 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-navy-500 dark:text-navy-300 text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  <ul className="space-y-3 mb-6 flex-1">
                    {project.details.map((detail, dIdx) => (
                      <li
                        key={detail}
                        className="flex gap-3 text-sm text-navy-600 dark:text-navy-200 leading-relaxed"
                      >
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-navy-50 dark:bg-navy-900 border border-navy-100 dark:border-navy-600 flex items-center justify-center text-[10px] font-bold text-navy-500 dark:text-navy-300 mt-0.5">
                          {dIdx + 1}
                        </span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-5 border-t border-navy-100 dark:border-navy-700">
                    <p className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy-400 dark:text-navy-400 uppercase tracking-wide mb-2.5">
                      <Wrench size={12} />
                      Technologies
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-medium text-navy-700 dark:text-navy-100 bg-navy-50 dark:bg-navy-900 border border-navy-100 dark:border-navy-600 px-2.5 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <span className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-1 group-hover:-translate-x-1">
                  <ArrowUpRight size={18} className="text-navy-300 dark:text-navy-400" />
                </span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
