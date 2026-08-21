import { Briefcase, CalendarDays, Building2 } from 'lucide-react';
import { experience } from '@/data/portfolio';
import SectionHeading from '@/components/SectionHeading';

export default function Experience() {
  return (
    <section id="experience" className="section-pad bg-navy-50 dark:bg-navy-900">
      <div className="max-w-6xl mx-auto container-px">
        <SectionHeading eyebrow="Work Experience" title="Where I've put these skills to work" align="center" />

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-5 sm:left-6 top-3 bottom-3 w-px bg-navy-200 dark:bg-navy-700" />

          <div className="space-y-8 sm:space-y-10">
            {experience.map((item) => (
              <div key={`${item.role}-${item.organisation}`} className="relative pl-16 sm:pl-20">
                <div className="absolute left-0 top-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-navy-900 dark:bg-white flex items-center justify-center ring-4 ring-navy-50 dark:ring-navy-900 shadow-md">
                  <Briefcase size={18} className="text-white dark:text-navy-900" strokeWidth={1.75} />
                </div>

                <div className="bg-white dark:bg-navy-800 border border-navy-100 dark:border-navy-700 rounded-2xl p-6 hover:shadow-lg hover:border-navy-200 dark:hover:border-navy-500 transition-all duration-200">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-navy-900 dark:text-white leading-tight">
                        {item.role}
                      </h3>
                      <p className="inline-flex items-center gap-1.5 text-navy-500 dark:text-navy-300 font-medium text-sm mt-1">
                        <Building2 size={14} />
                        {item.organisation}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy-700 dark:text-navy-100 bg-navy-50 dark:bg-navy-900 border border-navy-200 dark:border-navy-600 px-3 py-1.5 rounded-full whitespace-nowrap">
                      <CalendarDays size={13} />
                      {item.period}
                    </span>
                  </div>
                  <ul className="space-y-2.5">
                    {item.highlights.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-navy-600 dark:text-navy-200 leading-relaxed text-sm sm:text-base"
                      >
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-navy-400 dark:bg-navy-500 mt-2" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
