import { createFileRoute } from "@tanstack/react-router";
import featured1 from "@/assets/bio/featured-1.png";
import featured2 from "@/assets/bio/featured-2.png";
import featured3 from "@/assets/bio/featured-3.png";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/bio")({
  component: RouteComponent,
});

const images = [
  { src: featured1, alt: "featured 1", height: 392, width: 321 },
  { src: featured2, alt: "featured 2", height: 213, width: 321 },
  { src: featured3, alt: "featured 3", height: 403, width: 321 },
];

const reciprocalAspectRatios = images.reduce(
  (sum, image) => sum + image.height / image.width,
  0
);

function RouteComponent() {
  const availableHeight = "calc(100vh - 12rem)";
  return (
    <div className="flex w-screen gap-2 bg-primary p-2">
      <div
        className="flex shrink-0 flex-col"
        style={{
          width: `min(calc(100vw - 1rem), calc((${availableHeight}) / ${reciprocalAspectRatios}))`,
        }}
      >
        <div className="rounded-t-md bg-olive-200 p-2 font-medium text-primary">
          <h2 className="flex flex-col font-serif text-4xl italic">
            <span className="w-fit">Beatriz Dossi</span>
            <span className="w-fit">Publicitária</span>
          </h2>
        </div>
        <div className="h-[calc(100vh-12rem)]">
          {images.map((image) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              style={{
                width: `min(100%, ${availableHeight} / ${reciprocalAspectRatios}))`,
              }}
              className="h-auto min-h-0 last:rounded-b-md"
            />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="space-y-2 rounded-md bg-olive-200 p-6">
          <h3 className="font-serif text-3xl">
            Muito prazer, pode me chamar de Babi!
          </h3>
          <p>
            Sou fotógrafa, publicitária e apaixonada por contar histórias
            através da criatividade.
          </p>
          <p>
            Sempre acreditei que a comunicação vai muito além das palavras. Ela
            está nos detalhes, nas imagens, nas cores e nas diferentes formas de
            enxergar o mundo. Foi essa paixão que me aproximou da fotografia, do
            audiovisual e da publicidade, três universos que se encontram
            naquilo que mais amo fazer: transformar ideias em histórias.
          </p>
          <p>
            Minha trajetória é construída entre câmeras, projetos, campanhas e
            muitas ideias que saem do papel. Em cada trabalho, busco unir
            sensibilidade, estratégia e criatividade para criar algo que não
            seja apenas bonito, mas que também tenha significado. Acredito que
            cada pessoa, marca ou projeto carrega uma história única, e meu
            propósito é encontrar a melhor maneira de comunicá-la, seja através
            de uma fotografia, de uma campanha publicitária ou de uma produção
            audiovisual.
          </p>
          <p>
            Este espaço é um pedacinho do meu universo criativo. Aqui,
            compartilho meus trabalhos, experiências e projetos que traduzem um
            pouco da minha forma de enxergar o mundo. Porque, para mim, criar é
            mais do que produzir algo visual. É dar vida a ideias, transmitir
            sentimentos e contar histórias que merecem ser lembradas. Seja
            bem-vindo ao meu mundo criativo!
          </p>
        </div>
        <div className="space-y-2 rounded-md bg-olive-200/90 p-6">
          <h3 className="font-serif text-3xl">Criatividade com propósito</h3>
          <p>
            Acredito que toda ideia tem potencial para se transformar em algo
            significativo quando encontra a maneira certa de ser comunicada. Meu
            trabalho nasce do desejo de unir criatividade, sensibilidade e
            estratégia para dar vida a histórias, conectar pessoas e transformar
            ideias em experiências visuais.
          </p>
          <p>
            Seja através da fotografia, do audiovisual ou da publicidade, busco
            compreender a essência de cada pessoa, marca ou projeto, criando
            soluções que vão além da estética e transmitam mensagens
            verdadeiras.
          </p>
          <p>
            Valorizo a autenticidade, a atenção aos detalhes e a construção de
            relações de confiança. Cada trabalho é uma oportunidade de explorar
            novas perspectivas, encontrar soluções criativas e entregar
            resultados que façam sentido para quem está por trás de cada
            história. Mais do que criar imagens ou desenvolver campanhas, quero
            produzir uma comunicação que tenha identidade, gere conexões e deixe
            boas histórias para contar.
          </p>
        </div>
        <div className="col-span-2 rounded-md bg-olive-200/80 p-6 space-y-2">
          <h3 className="font-serif text-3xl">Entre em contato</h3>
          <form className="grid grid-cols-2 gap-2">
            <div className="space-y-2">
              <Label>Nome *</Label>
              <Input />
            </div>
            <div className="space-y-2">
              <Label>Sobrenome *</Label>
              <Input />
            </div>
            <div className="space-y-2">
              <Label>Email *</Label>
              <Input />
            </div>
            <div className="space-y-2">
              <Label>Telefone *</Label>
              <Input />
            </div>
            <div className="space-y-2">
              <Label>Mensagem *</Label>
              <Textarea />
            </div>
            <Button className="col-span-2">Enviar</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
