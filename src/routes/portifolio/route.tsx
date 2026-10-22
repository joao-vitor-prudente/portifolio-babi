import { createFileRoute } from "@tanstack/react-router";
import weddingsCover from "@/assets/portifolio/casamentos-cover.png";
import shootsCover from "@/assets/portifolio/ensaios-cover.png";
import eventsCover from "@/assets/portifolio/eventos-cover.png";
import comercialPhotographyCover from "@/assets/portifolio/fotografia-comercial-cover.png";
import type { FileRouteTypes } from "@/routeTree.gen";

export const Route = createFileRoute("/portifolio")({
  component: RouteComponent,
});

interface PortfolioCardProps {
  imageSrc: string;
  imageAlt: string;
  link: FileRouteTypes["to"];
  title: string;
  subtitle: string;
}

function PortfolioCard(props: PortfolioCardProps) {
  return (
    <Route.Link
      to={props.link}
      className="group relative block h-full shrink-0 overflow-hidden"
    >
      <img
        src={props.imageSrc}
        alt={props.imageAlt}
        className="block h-full w-auto object-contain transition duration-300 ease-out group-hover:scale-110 group-hover:brightness-33"
      />

      <div className="absolute inset-x-0 top-0 z-10 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="font-serif text-2xl font-medium">{props.title}</h3>
        <p className="mt-1 font-medium">{props.subtitle}</p>
      </div>
    </Route.Link>
  );
}

function RouteComponent() {
  return (
    <div className="space-y-2 bg-primary p-2">
      <div className="rounded-md bg-olive-200 p-2 font-serif text-4xl font-medium text-primary italic">
        <h2>Meu portifólio</h2>
      </div>
      <div className="flex h-[calc(100vh-20rem)] w-full overflow-x-scroll bg-primary [&>a:first-child]:rounded-l-md [&>a:last-child]:rounded-r-md">
        {" "}
        <PortfolioCard
          title="Ensaios"
          subtitle="Individuais • Casais e Familias • Proficionais"
          link="/"
          imageSrc={shootsCover}
          imageAlt="ensaios"
        />
        <PortfolioCard
          title="Eventos"
          subtitle="Sociais • Corporativos • Religiosos"
          link="/"
          imageSrc={eventsCover}
          imageAlt="eventos"
        />
        <PortfolioCard
          title="Fotografia Comercial"
          subtitle="Produtos • Moda • Campanhas"
          link="/"
          imageSrc={comercialPhotographyCover}
          imageAlt="fotografia comercial"
        />
        <PortfolioCard
          title="Casamentos"
          subtitle="Galerias por casamento"
          link="/"
          imageSrc={weddingsCover}
          imageAlt="casamentos"
        />
      </div>
    </div>
  );
}
