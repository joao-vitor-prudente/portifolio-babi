import hero from "@/assets/index/hero.png";

export function Hero() {
  return (
    <div className="flex gap-2">
      <header className="grow rounded-md bg-olive-200 p-6">
        <h1 className="font-serif text-6xl font-medium text-primary italic">Criação com sentimento</h1>
      </header>
      <img src={hero} alt="hero" className="h-[calc(100vh-6rem)] rounded-md" />
    </div>
  );
}
