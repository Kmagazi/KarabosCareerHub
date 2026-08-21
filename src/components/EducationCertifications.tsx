import { Award, GraduationCap, Calendar } from 'lucide-react';
import { certifications, education } from '@/data/portfolio';
import SectionHeading from '@/components/SectionHeading';

export default function EducationCertifications() {
  return (
    <section id="education" className="section-pad bg-white dark:bg-navy-950">
      <div className="max-w-6xl mx-auto container-px">
        <SectionHeading eyebrow="Education & Certifications" title="Foundations behind my skills" align="center" />

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-navy-900 dark:bg-white flex items-center justify-center shadow-md">
                <GraduationCap size={20} className="text-white dark:text-navy-900" strokeWidth={1.75} />
              </div>
              <h3 className="font-display text-xl font-bold text-navy-900 dark:text-white">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((item) => (
                <div
                  key={item.title}
                  className="group border border-navy-100 dark:border-navy-700 rounded-xl p-5 hover:border-navy-200 dark:hover:border-navy-500 hover:shadow-md transition-all duration-200"
                >
                  <p className="font-display font-bold text-navy-900 dark:text-white">{item.title}</p>
                  <p className="text-navy-500 dark:text-navy-300 text-sm mt-1">{item.institution}</p>
                  <p className="inline-flex items-center gap-1.5 text-navy-600 dark:text-navy-200 text-xs font-semibold mt-3 bg-navy-50 dark:bg-navy-900 px-2.5 py-1 rounded-full">
                    <Calendar size={12} />
                    {item.period}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-navy-900 dark:bg-white flex items-center justify-center shadow-md">
                <Award size={20} className="text-white dark:text-navy-900" strokeWidth={1.75} />
              </div>
              <h3 className="font-display text-xl font-bold text-navy-900 dark:text-white">
                Certifications
              </h3>
            </div>
            <div className="space-y-4">
              {certifications.map((item) => (
                <div
                  key={item.title}
                  className="group flex items-start gap-3 border border-navy-100 dark:border-navy-700 rounded-xl p-5 hover:border-navy-200 dark:hover:border-navy-500 hover:shadow-md transition-all duration-200"
                >
                  <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-navy-50 dark:bg-navy-900 border border-navy-100 dark:border-navy-600 flex items-center justify-center mt-0.5">
                    <Award size={16} className="text-navy-500 dark:text-navy-300" />
                  </span>
                  <div>
                    <p className="font-semibold text-navy-900 dark:text-white leading-snug">
                      {item.title}
                    </p>
                    <p className="text-navy-500 dark:text-navy-300 text-sm mt-1">{item.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
