import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "./-hero";
import { InstagramFeatured } from "./-instagram-featured";
import { Experiences } from "./-experiences";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="w-screen space-y-2 bg-primary p-2">
      <Hero />
      <InstagramFeatured />
      <Experiences />
    </main>
  );
}
