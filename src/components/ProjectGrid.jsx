import ProjectCard from '@/components/ProjectCard';

export default function ProjectGrid({ projects }) {
  return (
    <section style={{ backgroundColor: '#050509' }} className="w-full px-6 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <h2 style={{ color: '#f5f5f7' }} className="text-3xl font-semibold tracking-tight">
            Featured Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
