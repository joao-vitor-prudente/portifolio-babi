import me from "@/assets/index/me.png";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface ExperienceProps {
  title: string;
  from: string;
  to: string;
  description: string;
}

export function Experience(props: ExperienceProps) {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <div className="p-2">
          <div>
            <h4 className="font-serif text-xl">{props.title}</h4>
            <p className="text-sm font-semibold">
              <span>{props.from}</span>
              <span>-</span>
              <span>{props.to}</span>
            </p>
          </div>
          <p className="xl:line-clamp-6 line-clamp-2">{props.description}</p>
        </div>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="p-2">
          <div>
            <h4 className="font-serif text-xl">{props.title}</h4>
            <p className="text-sm font-semibold">
              <span>{props.from}</span>
              <span>-</span>
              <span>{props.to}</span>
            </p>
          </div>
          <p>{props.description}</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

export function Experiences() {
  return (
    <div>
      <div className="flex gap-2">
        <div className="rounded-md bg-olive-200">
          <div className="border-b-8 border-primary">
            <h2 className="p-6 font-serif text-4xl">Currículo</h2>
          </div>
          <div>
            <h3 className="px-6 pt-6 font-serif text-3xl">Experiências</h3>
            <ul className="grid xl:grid-cols-2 grid-cols-1 gap-4 p-4">
              <li>
                <Experience
                  title="Fotografia"
                  from="2021"
                  to="Hoje"
                  description="Atuação como fotógrafa profissional, realizando ensaios, cobertura de eventos e produções fotográficas para diferentes públicos e projetos. Trabalho de forma independente e também em colaboração com outras equipes, integrando o coletivo audiovisual BSB Frame e as equipes Magnólia Photo e Sarah Noemi Photo. Experiência em captação, direção fotográfica, seleção e tratamento de imagens, com foco na qualidade visual e na construção de narrativas através da fotografia."
                />
              </li>
              <li>
                <Experience
                  title="Storymaker"
                  from="2024"
                  to="Hoje"
                  description="Atuação como storymaker, com foco na produção de conteúdos audiovisuais dinâmicos e estratégicos para redes sociais. Responsável pelo planejamento, captação, edição e publicação de fotos e vídeos em tempo real, registrando os principais momentos de forma criativa e espontânea. Experiência na produção de stories e reels, adaptando a linguagem e a identidade visual às necessidades de cada cliente ou evento."
                />
              </li>
              <li>
                <Experience
                  title="Igreja Batista do Lago"
                  from="Ago 2025"
                  to="Hoje"
                  description="Atuação na área de marketing e comunicação, com foco na gestão das redes sociais dos ministérios de jovens e adolescentes da Igreja Batista do Lago Norte. Responsável pelo planejamento e produção de conteúdos digitais, criação de peças gráficas, produção e edição de vídeos, copywriting e divulgação de eventos e campanhas. Desde 2021, também atuo na coordenação da comunicação do ministério de adolescentes, desenvolvendo estratégias de conteúdo e organização das demandas criativas."
                />
              </li>
              <li>
                <Experience
                  title="Faculdade Teológica Batista de Brasília"
                  from="Fev 2024"
                  to="Jun 2025"
                  description="Atuação na área de Comunicação, com foco na divulgação dos cursos oferecidos pela instituição, criação de materiais gráficos para comunicação interna e externa, edição de videoaulas e vídeos institucionais, gravação e produção de podcasts, além do planejamento, criação e gerenciamento de conteúdos para o Instagram institucional."
                />
              </li>
            </ul>
          </div>
          <div className="space-y-4 border-t-8 border-primary p-6">
            <h3 className="font-serif text-3xl">Objetivo Profissional</h3>
            <p>
              Busco ampliar minha experiência nas áreas de marketing,
              publicidade, comunicação e produção audiovisual, contribuindo de
              forma criativa e estratégica para o desenvolvimento de campanhas e
              projetos que conectem marcas e pessoas. Tenho como objetivo
              aprimorar continuamente minhas habilidades, acompanhar as
              tendências do mercado e colaborar para o crescimento e sucesso da
              equipe e da empresa.
            </p>
          </div>
        </div>
        <img src={me} alt="hero" className="h-[calc(100vh-1rem)] rounded-md" />
      </div>
    </div>
  );
}
