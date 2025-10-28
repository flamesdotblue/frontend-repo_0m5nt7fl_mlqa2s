import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <section id="skills" className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Skills</h2>
            <p className="mt-2 text-gray-600">Technologies I use frequently</p>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {[
                'React',
                'TypeScript',
                'Tailwind CSS',
                'FastAPI',
                'Python',
                'C/C++',
                'MongoDB',
                'Git & GitHub',
                'Node.js',
                'Vite',
                'Docker',
                'Linux',
              ].map((s) => (
                <div key={s} className="rounded-lg border border-gray-200 bg-white shadow-sm px-3 py-2 text-sm text-gray-800">
                  {s}
                </div>
              ))}
            </div>
          </div>
        </section>
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-black/5 py-6 text-center text-sm text-gray-600 bg-white">
        © {new Date().getFullYear()} Your Name — Built with care and curiosity.
      </footer>
    </div>
  );
}

export default App;
