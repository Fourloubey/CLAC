import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

interface ProjectImage {
  src: string;
  alt: string;
}

interface ProjectTemplateProps {
  name: string;
  description: string[];
  images: ProjectImage[];
}

const placeholderRatios = ["aspect-[4/3]", "aspect-[3/4]", "aspect-[1/1]", "aspect-[3/4]", "aspect-[4/3]", "aspect-[1/1]"];

const ProjectTemplate = ({ name, description, images }: ProjectTemplateProps) => {
  return (
    <Layout>
      {/* Photo grid */}
      <section className="w-full px-0 md:px-16 lg:px-20 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 items-start">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-contain"
                onError={(e) => {
                  // Show placeholder if image not found
                  const container = e.currentTarget.parentElement;
                  if (container) {
                    container.innerHTML = `<div class="w-full ${placeholderRatios[index] || "aspect-[4/3]"} bg-gray-200 flex items-center justify-center text-gray-500 text-sm">Photo ${index + 1}</div>`;
                  }
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Project text – right-aligned */}
      <section className="w-full px-6 md:px-16 lg:px-20 py-12 md:py-20">
        <div className="max-w-2xl ml-auto text-right">
          {description.map((paragraph, index) => (
            <p key={index} className={`text-sm md:text-base leading-relaxed ${paragraph === "" ? "h-3" : "mb-1"}`}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Back to projects link */}
      <div className="w-full flex justify-center pb-16">
        <Link
          to="/projets"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-sm font-bold tracking-[0.15em] uppercase hover:underline underline-offset-4 decoration-black transition-all"
        >
          Retour aux projets
        </Link>
      </div>
    </Layout>
  );
};

export default ProjectTemplate;
