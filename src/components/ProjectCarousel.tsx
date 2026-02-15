import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import ProjectLightbox from './ProjectLightbox';

interface Project {
  id: string;
  filename: string;
  caption: string;
  uploaded: string;
}

// Static test data
const testProjects: Project[] = [
  {
    id: "kitchen-remodel-1707912345",
    filename: "kitchen-remodel-1707912345.jpg",
    caption: "Load-bearing wall removal — York, PA",
    uploaded: "2026-02-14"
  },
  {
    id: "foundation-repair-1708012345",
    filename: "foundation-repair-1708012345.jpg",
    caption: "Foundation stabilization — Lancaster, PA",
    uploaded: "2026-02-13"
  },
  {
    id: "beam-replacement-1708112345",
    filename: "beam-replacement-1708112345.jpg",
    caption: "Steel beam installation — Harrisburg, PA",
    uploaded: "2026-02-12"
  },
  {
    id: "deck-inspection-1708212345",
    filename: "deck-inspection-1708212345.jpg",
    caption: "Deck structural assessment — Reading, PA",
    uploaded: "2026-02-11"
  }
];

export default function ProjectCarousel() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const baseUrl = import.meta.env.VITE_PROJECTS_BASE_URL || 'https://projects.laederconsulting.com';

  // Fetch manifest on component mount
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        if (!baseUrl) {
          console.warn('VITE_PROJECTS_BASE_URL not configured');
          setLoading(false);
          return;
        }

        const response = await fetch(`${baseUrl}/manifest.json`);
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const data: Project[] = await response.json();
        setProjects(Array.isArray(data) ? data : []);
      } catch (error) {
        console.warn('Failed to fetch project manifest:', error);
        // Fallback to test data for development
        if (import.meta.env.DEV) {
          setProjects(testProjects);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [baseUrl]);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const navigateLightbox = (index: number) => {
    setCurrentIndex(index);
  };

  // Show nothing while loading or if no projects
  if (loading || !projects.length) {
    return null;
  }

  return (
    <>
      <section id="projects" className="py-20 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-brand-green mb-4">Recent Projects</h2>
          <div className="w-24 h-1 bg-brand-lime mx-auto mb-12"></div>

          <Swiper
            modules={[Navigation]}
            navigation={true}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 }
            }}
            loop={false}
            className="project-carousel"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={project.id}>
                <div
                  className="cursor-pointer group"
                  onClick={() => openLightbox(index)}
                >
                  <div className="overflow-hidden rounded-xl border border-slate-200">
                    <img
                      src={`${baseUrl}/images/thumbs/${project.filename}`}
                      alt={project.caption}
                      className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <p className="mt-3 text-sm text-gray-600 text-center">{project.caption}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {lightboxOpen && (
        <ProjectLightbox
          projects={projects}
          currentIndex={currentIndex}
          baseUrl={baseUrl}
          onClose={closeLightbox}
          onNavigate={navigateLightbox}
        />
      )}
    </>
  );
}