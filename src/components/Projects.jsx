import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'IoT Climate Monitor',
    desc:
      'A low-power sensor network that logs temperature and humidity to a cloud dashboard with alerting and offline caching.',
    stack: ['C++', 'ESP32', 'MQTT', 'FastAPI', 'MongoDB'],
    live: '#',
    repo: '#',
  },
  {
    title: 'Pathfinding Visualizer',
    desc:
      'Interactive web app to compare A*, Dijkstra, and BFS on custom grids. Includes weighted nodes and diagonal movement.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind'],
    live: '#',
    repo: '#',
  },
  {
    title: 'Resume Ranker',
    desc:
      'Ranks resumes against job descriptions using TF‑IDF and cosine similarity. Exportable insights and heatmaps.',
    stack: ['Python', 'scikit-learn', 'Pandas', 'FastAPI'],
    live: '#',
    repo: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Projects</h2>
            <p className="text-gray-600 mt-2">A few things I’ve built recently</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-xl border border-gray-200 bg-white hover:shadow-lg transition-shadow overflow-hidden">
              <div className="h-36 bg-gradient-to-br from-blue-100 to-purple-100" />
              <div className="p-5">
                <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-700 transition-colors">{p.title}</h3>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.stack.map((t) => (
                    <span key={t} className="text-xs rounded-full border border-gray-200 px-2.5 py-1 bg-gray-50 text-gray-700">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <a
                    href={p.live}
                    className="inline-flex items-center gap-1.5 text-sm text-blue-700 hover:underline"
                  >
                    <ExternalLink size={16} /> Live
                  </a>
                  <a
                    href={p.repo}
                    className="inline-flex items-center gap-1.5 text-sm text-gray-700 hover:underline"
                  >
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
