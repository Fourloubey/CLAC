import ProjectTemplate from "@/components/ProjectTemplate";

const images = Array.from({ length: 6 }, (_, i) => ({
  src: `/images/projets/leon/leon${i + 1}.jpg`,
  alt: `Projet Léon – Photo ${i + 1}`,
}));

const description = [
  "léon",
  "",
  "situation extension",
  "localisation bordeaux",
  "surface créée 33.00 m²",
  "coût 105 000 € ttc",
  "statut livraison 2023",
  "",
  "En plein centre ville, ce nouvel espace de vie en double hauteur permet d'offrir une perspective dégagée vers le jardin. L'enjeu principal était de conserver une lumière naturelle suffisante dans les espaces existants qui, en plus d'être orientés Nord, se trouvent désormais en second jour.",
  "",
  "La mezzanine ajourée a été pensée de façon à offrir un éclairage naturel et animé au sein de la pièce de vie.",
];

const Leon = () => (
  <ProjectTemplate name="léon" description={description} images={images} />
);

export default Leon;
