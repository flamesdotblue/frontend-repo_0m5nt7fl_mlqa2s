import { Rocket, Code } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 text-blue-700 px-3 py-1 text-xs font-medium mb-4">
              <Rocket size={16} /> Engineering Student Portfolio
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Building real-world solutions with curiosity and clean code
            </h1>
            <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
              I’m an engineering student passionate about turning complex problems into elegant, performant products. I enjoy full‑stack development, embedded systems, and data-driven design.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-4 py-2.5 text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                <Code size={18} /> View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md bg-white text-gray-800 px-4 py-2.5 text-sm font-medium border border-gray-200 hover:border-gray-300 shadow-sm"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 p-1 shadow-xl">
              <div className="h-full w-full rounded-[0.65rem] bg-white grid grid-cols-2 gap-4 p-4">
                <div className="rounded-md bg-blue-50 border border-blue-100" />
                <div className="rounded-md bg-purple-50 border border-purple-100" />
                <div className="rounded-md bg-indigo-50 border border-indigo-100" />
                <div className="rounded-md bg-pink-50 border border-pink-100" />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white/80 backdrop-blur rounded-lg border border-gray-200 shadow-sm px-4 py-3 text-sm">
              <span className="font-semibold text-gray-800">Tech Focus:</span>{' '}
              <span className="text-gray-600">React • FastAPI • Python • C/C++ • MongoDB</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
