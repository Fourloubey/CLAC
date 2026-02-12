import ProjectTemplate from "@/components/ProjectTemplate";

const images = Array.from({ length: 6 }, (_, i) => ({
  src: `https://i.imgur.com/PLACEHOLDER_lucien-${i + 1}.jpg`,
  alt: `Projet Lucien – Photo ${i + 1}`,
}));

const description = [
  "lucien",
  "",
  "situation rénovation",
  "localisation talence",
  "surface rénovée 55.00 m²",
  "coût 100 000 € ttc",
  "statut livraison 2020",
  "",
  "Cette échoppe a été entièrement repensée de façon à proposer un intérieur plus actuel grâce à l'organisation de ses espaces, aux teintes et aux matériaux choisis.",
  "",
  "La double hauteur dans le salon ainsi que la mise en place de fenêtres de toit ont permis d'apporter plus de volume et de luminosité au sein de cette échoppe initialement sombre.",
];

const Lucien = () => (
  <ProjectTemplate name="lucien" description={description} images={images} />
);

export default Lucien;
