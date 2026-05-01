import Image from 'next/image';

export default function HeroBanner() {
  return (
    <section
      style={{ backgroundColor: '#050509' }}
      className="relative w-full min-h-105 flex items-center border-b border-white/10"
    >
      <div className="container mx-auto px-8 py-16 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left: Text Content */}
        <div className="flex-1 max-w-2xl">
          <h1
            style={{ color: '#f5f5f7' }}
            className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6"
          >
            A Living Portfolio of Projects, Platforms, and Purpose.
          </h1>
          <p
            style={{ color: 'rgba(245,245,247,0.65)' }}
            className="text-lg md:text-xl leading-relaxed font-light"
          >
            Designed, developed, and architected to build a scalable ecosystem for community impact.
          </p>
        </div>

        {/* Right: Photo + Identity */}
        <div className="flex flex-col items-center gap-4 shrink-0">
          <div
            style={{
              border: '1px solid rgba(245,245,247,0.15)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.6), 0 0 0 1px rgba(245,245,247,0.05)',
            }}
            className="w-48 h-48 md:w-56 md:h-56 rounded-lg overflow-hidden"
          >
            <Image
              src="/images/trincell.jpg"
              alt="Trincell Shelvin"
              width={224}
              height={224}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          <div className="text-center">
            <p
              style={{ color: '#f5f5f7' }}
              className="text-lg font-semibold tracking-wide"
            >
              Trincell Shelvin
            </p>
            <p
              style={{ color: 'rgba(245,245,247,0.5)' }}
              className="text-sm tracking-widest uppercase mt-1"
            >
              Architect&nbsp;•&nbsp;Founder&nbsp;•&nbsp;Creator
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
