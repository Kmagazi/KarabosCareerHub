import { ArrowDown, Mail, MapPin, Phone, Briefcase, Download, Github, Linkedin, UserCircle, UploadCloud } from 'lucide-react';
import { profile } from '@/data/portfolio';
import { downloadCv } from '@/lib/downloadCv';

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-navy-50 dark:bg-navy-950 overflow-hidden pt-20"
    >
      <div className="absolute inset-0 dark:block hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />
        <div className="absolute top-1/4 -right-32 w-[40rem] h-[40rem] bg-navy-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-32 w-[32rem] h-[32rem] bg-navy-700/30 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto container-px py-16 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-navy-100 dark:bg-white/5 border border-navy-200 dark:border-white/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <p className="text-navy-700 dark:text-navy-100 font-medium text-xs sm:text-sm tracking-wide">
                Available for administrative roles
              </p>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 dark:text-white leading-[1.1] mb-5">
              {profile.name}
            </h1>
            <h2 className="font-display text-xl sm:text-2xl text-navy-700 dark:text-navy-100 font-semibold leading-snug mb-6 max-w-xl">
              {profile.headline}
            </h2>
            <p className="text-navy-600 dark:text-navy-200 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
              Organised, deadline-driven, and detail-focused — I help teams keep their paperwork,
              tenders, and client communication running without a hitch.
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-9 text-sm text-navy-600 dark:text-navy-200">
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={15} /> {profile.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Phone size={15} /> {profile.phone}
              </span>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-700 dark:bg-white dark:hover:bg-navy-100 dark:text-navy-900 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-navy-900/20"
              >
                <Mail size={18} />
                Get In Touch
              </button>
              <button
                onClick={downloadCv}
                className="inline-flex items-center gap-2 border border-navy-300 dark:border-white/20 hover:border-navy-900 dark:hover:border-white/40 bg-white dark:bg-white/5 hover:bg-navy-50 dark:hover:bg-white/10 text-navy-900 dark:text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200"
              >
                <Download size={18} />
                Download CV
              </button>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-lg bg-navy-100 dark:bg-white/5 border border-navy-200 dark:border-white/10 flex items-center justify-center text-navy-700 dark:text-navy-200 hover:bg-navy-900 hover:text-white dark:hover:bg-white dark:hover:text-navy-900 transition-all"
              >
                <Github size={18} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-lg bg-navy-100 dark:bg-white/5 border border-navy-200 dark:border-white/10 flex items-center justify-center text-navy-700 dark:text-navy-200 hover:bg-navy-900 hover:text-white dark:hover:bg-white dark:hover:text-navy-900 transition-all"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-in">
            <div className="relative w-64 sm:w-72 lg:w-80">
              <div className="absolute -inset-3 bg-gradient-to-br from-navy-200/40 dark:from-white/10 to-transparent rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-navy-900/20 dark:shadow-navy-950/60 ring-1 ring-navy-200 dark:ring-white/10 bg-navy-100 dark:bg-navy-800">
                <div className="w-full aspect-[4/5] flex flex-col items-center justify-center gap-4 p-6 text-center">
                  <UserCircle
                    size={72}
                    className="text-navy-300 dark:text-navy-500"
                    strokeWidth={1.25}
                  />
                  <div>
                    <p className="font-display font-semibold text-navy-700 dark:text-navy-100 text-sm sm:text-base">
                      Profile Photo
                    </p>
                    <p className="text-navy-400 dark:text-navy-400 text-xs mt-1 leading-relaxed">
                      Upload your professional headshot here
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-navy-500 dark:text-navy-300 bg-white dark:bg-navy-900 border border-navy-200 dark:border-navy-600 px-3 py-1.5 rounded-full">
                    <UploadCloud size={13} />
                    Upload ready
                  </span>
                </div>
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white dark:bg-navy-800 rounded-xl px-4 py-3 shadow-xl ring-1 ring-navy-100 dark:ring-navy-700">
                <p className="font-display text-2xl font-bold text-navy-900 dark:text-white">100+</p>
                <p className="text-xs text-navy-500 dark:text-navy-300 leading-tight">
                  Documents managed weekly
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollTo('about')}
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-navy-400 dark:text-navy-300 hover:text-navy-900 dark:hover:text-white transition-colors animate-bounce"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
}
