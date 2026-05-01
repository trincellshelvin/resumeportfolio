import HeroBanner from '@/components/HeroBanner';
import ContactBar from '@/components/ContactBar';
import ProjectGrid from '@/components/ProjectGrid';
import { projects } from '@/data/projects';

export default function ResumePortfolioPage() {
  return (
    <main style={{ backgroundColor: '#050509' }} className="min-h-screen">
      <HeroBanner />
      <ContactBar />
      <ProjectGrid projects={projects} />
    </main>
  );
}
