import { CheckCircle2, Cpu, Heart } from 'lucide-react';
import { skillGroups } from '@/data/portfolio';
import SectionHeading from '@/components/SectionHeading';

const ICONS = [Cpu, Heart];

export default function Skills() {
  return (
    <section id="skills" className="section-pad bg-navy-50 dark:bg-navy-900">
      <div className="max-w-6xl mx-auto container-px">
        <SectionHeading
          eyebrow="Skills"
          title="What I bring to the office"
          description="A practical toolkit built through hands-on administrative, tender, and front-office work."
        />

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {skillGroups.map((group, gIdx) => {
            const Icon = ICONS[gIdx % ICONS.length];
            return (
              <div
                key={group.title}
                className="bg-white dark:bg-navy-800 rounded-2xl border border-navy-100 dark:border-navy-700 p-7 sm:p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-navy-900 dark:bg-white flex items-center justify-center shadow-md">
                    <Icon size={20} className="text-white dark:text-navy-900" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-navy-900 dark:text-white">
                    {group.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {group.skills.map((skill) => (
                    <div
                      key={skill}
                      className="group flex items-center gap-3 bg-navy-50 dark:bg-navy-900/50 border border-navy-100 dark:border-navy-700 rounded-lg px-3.5 py-3 transition-all duration-200 hover:border-navy-300 dark:hover:border-navy-500 hover:shadow-sm"
                    >
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white dark:bg-navy-800 border border-navy-200 dark:border-navy-600 flex items-center justify-center group-hover:bg-navy-900 group-hover:border-navy-900 dark:group-hover:bg-white dark:group-hover:border-white transition-colors">
                        <CheckCircle2
                          size={13}
                          className="text-navy-500 group-hover:text-white dark:group-hover:text-navy-900 transition-colors"
                        />
                      </span>
                      <span className="text-navy-800 dark:text-navy-100 font-medium text-sm">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
