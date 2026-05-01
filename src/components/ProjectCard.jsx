import Link from 'next/link';

export default function ProjectCard({ project }) {
  return (
    <article
      style={{
        border: '1px solid rgba(245,245,247,0.1)',
        backgroundColor: 'rgba(255,255,255,0.02)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.35)',
      }}
      className="overflow-hidden rounded-2xl"
    >
      <img
        src={project.thumbnail}
        alt={project.title}
        className="h-44 w-full object-cover"
      />

      <div className="flex flex-col gap-4 p-5">
        <h3 style={{ color: '#f5f5f7' }} className="text-lg font-semibold leading-tight">
          {project.title}
        </h3>
        <p style={{ color: 'rgba(245,245,247,0.7)' }} className="text-sm leading-relaxed">
          {project.description}
        </p>
        <Link
          href={`/projects/${project.slug}`}
          style={{
            color: '#f5f5f7',
            border: '1px solid rgba(245,245,247,0.22)',
            backgroundColor: 'rgba(245,245,247,0.05)',
          }}
          className="inline-flex w-fit items-center rounded-full px-4 py-2 text-sm transition-all duration-200 hover:bg-white/10"
        >
          View Project
        </Link>
      </div>
    </article>
  );
}
