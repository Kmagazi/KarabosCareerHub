import { CalendarClock, FileStack, Users, CheckCircle2, Target } from 'lucide-react';
import { profile } from '@/data/portfolio';
import SectionHeading from '@/components/SectionHeading';

const STATS = [
  { icon: FileStack, value: '100+', label: 'Documents organised weekly' },
  { icon: CalendarClock, value: '3+', label: 'Years of admin experience' },
  { icon: Users, value: '10+', label: 'Events supported' },
];

const TRAITS = ['Detail-oriented', 'Deadline-driven', 'Clear communicator', 'Reliable team player'];

export default function About() {
  return (
    <section id="about" className="section-pad bg-white dark:bg-navy-950">
      <div className="max-w-6xl mx-auto container-px">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl shadow-xl ring-1 ring-navy-100 dark:ring-navy-700 bg-navy-50 dark:bg-navy-800 p-8 sm:p-10 h-full min-h-[20rem] flex flex-col justify-center">
              <div className="font-display text-6xl sm:text-7xl font-extrabold text-navy-200 dark:text-navy-700 leading-none mb-4">
                “
              </div>
              <p className="font-display text-lg sm:text-xl font-semibold text-navy-700 dark:text-navy-100 leading-snug">
                Turning chaotic paperwork into organised, deadline-proof systems.
              </p>
              <p className="text-sm text-navy-500 dark:text-navy-300 mt-4">
                — {profile.name}
              </p>
            </div>
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-32 h-32 bg-navy-50 dark:bg-navy-800 rounded-2xl -z-10" />
            <div className="hidden sm:block absolute -top-6 -left-6 w-24 h-24 border-2 border-navy-200 dark:border-navy-700 rounded-2xl -z-10" />
          </div>

          <div className="lg:col-span-7">
            <SectionHeading eyebrow="About Me" title="Reliable support behind every deadline" align="left" />
            <div className="space-y-5 text-navy-600 dark:text-navy-200 text-base sm:text-lg leading-relaxed">
              {profile.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="flex flex-wrap gap-2.5 mt-7">
              {TRAITS.map((trait) => (
                <span
                  key={trait}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-navy-700 dark:text-navy-200 bg-navy-50 dark:bg-white/5 border border-navy-100 dark:border-white/10 px-3.5 py-1.5 rounded-full"
                >
                  <CheckCircle2 size={14} className="text-navy-500 dark:text-navy-300" />
                  {trait}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-5 mt-10">
              {STATS.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="p-5 rounded-xl bg-navy-50 dark:bg-white/5 border border-navy-100 dark:border-white/10 hover:border-navy-200 dark:hover:border-white/20 hover:shadow-sm transition-all"
                >
                  <Icon className="text-navy-600 dark:text-navy-300 mb-3" size={24} strokeWidth={1.75} />
                  <p className="font-display text-2xl sm:text-3xl font-bold text-navy-900 dark:text-white">
                    {value}
                  </p>
                  <p className="text-xs sm:text-sm text-navy-500 dark:text-navy-300 leading-snug mt-0.5">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 sm:mt-20 rounded-2xl bg-navy-50 dark:bg-white/5 border border-navy-100 dark:border-white/10 p-7 sm:p-9">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-navy-900 dark:bg-white dark:text-navy-900 flex items-center justify-center">
              <Target size={20} className="text-white dark:text-navy-900" strokeWidth={1.75} />
            </div>
            <h3 className="font-display text-xl font-bold text-navy-900 dark:text-white">
              Career Goals
            </h3>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {profile.goals.map((goal, idx) => (
              <div key={goal} className="flex gap-3">
                <span className="flex-shrink-0 font-display text-2xl font-extrabold text-navy-200 dark:text-navy-700 leading-none">
                  0{idx + 1}
                </span>
                <p className="text-navy-600 dark:text-navy-200 text-sm sm:text-base leading-relaxed">
                  {goal}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
