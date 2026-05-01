import { getProjectBySlug } from '@/data/projects';
import { notFound } from 'next/navigation';

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const isPdf = project.linkType === 'pdf';

  return (
    <main
      style={{ backgroundColor: '#050509', minHeight: '100vh', color: '#f5f5f7' }}
      className="flex items-center justify-center px-6 py-20"
    >
      <div
        style={{
          border: '1px solid rgba(245,245,247,0.1)',
          boxShadow: '0 8px 40px rgba(0,0,0,0.6)',
          backgroundColor: 'rgba(255,255,255,0.03)',
        }}
        className="max-w-2xl w-full rounded-2xl p-10 flex flex-col gap-8"
      >
        {/* Thumbnail */}
        {project.thumbnail && (
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-56 object-cover rounded-xl"
            style={{ border: '1px solid rgba(245,245,247,0.08)' }}
          />
        )}

        {/* Tags */}
        {project.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  color: 'rgba(245,245,247,0.55)',
                  border: '1px solid rgba(245,245,247,0.12)',
                  backgroundColor: 'rgba(245,245,247,0.05)',
                }}
                className="text-xs px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h1
          style={{ color: '#f5f5f7' }}
          className="text-3xl font-bold leading-tight tracking-tight"
        >
          {project.title}
        </h1>

        {/* Description */}
        <p
          style={{ color: 'rgba(245,245,247,0.65)' }}
          className="text-base leading-relaxed"
        >
          {project.description}
        </p>

        {/* CTA Button */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: 'rgba(245,245,247,0.07)',
            border: '1px solid rgba(245,245,247,0.2)',
            color: '#f5f5f7',
          }}
          className="project-cta inline-flex items-center gap-2 self-start px-6 py-3 rounded-full text-sm font-medium transition-all duration-200"
        >
          {isPdf ? (
            <>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="12" y1="18" x2="12" y2="12" />
                <line x1="9" y1="15" x2="15" y2="15" />
              </svg>
              View PDF
            </>
          ) : (
            <>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Visit Site
            </>
          )}
        </a>
      </div>

      <style>{`
        .project-cta:hover {
          background: rgba(245,245,247,0.12) !important;
          border-color: rgba(245,245,247,0.4) !important;
          box-shadow: 0 0 16px rgba(245,245,247,0.08);
          transform: translateY(-1px);
        }
      `}</style>
    </main>
  );
}
