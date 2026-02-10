import ProjectTemplate from "@/components/ProjectTemplate";

const images = Array.from({ length: 6 }, (_, i) => ({
  src: `/images/projets/ariette/ariette${i + 1}.jpg`,
  alt: `Projet Ariette – Photo ${i + 1}`,
}));

const description = [
  "ariette",
  "",
  "situation extension",
  "localisation dax",
  "surface créée 20.00 m²",
  "coût 135 500 € ttc",
  "statut livraison 2023",
  "",
  "La création de cette extension a été pensée de façon à offrir un nouveau volume aux lignes plus actuelles tout en s'intégrant avec l'écriture locale de cette habitation existante classée élément remarquable.",
  "",
  "Une réflexion sur les techniques et matériaux locaux a été apportée tout au long de ce projet, lui accordant toute sa singularité et légitimité.",
];

const Ariette = () => (
  <ProjectTemplate name="ariette" description={description} images={images} />
);

export default Ariette;
