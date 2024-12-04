import aspas from "../assets/aspas.png?url";

const DepoimentsList = [
  {
    name: "Jéssica Veterinário",
    role: "Coordenadora do CRAS",
    city: "Município: Santo Amaro da Imperatriz",
    text: "A convite, compartilho minha experiência com a implementação do Suas.info, uma ferramenta essencial para o registro e acompanhamento das atividades da Secretaria de Assistência Social de nosso município. A informatização dos dados e processos operacionais possibilita a centralização das informações sobre as famílias atendidas, permitindo que os profissionais acessem dados de forma rápida e organizada, otimizando o fluxo de trabalho e o tempo de atendimento. Como sistema integrado entre a assistência social, o Suas.info disponibiliza informações em tempo real, facilitando o acompanhamento contínuo dos casos e o monitoramento das ações em andamento. A integração dos dados proporciona uma visão detalhada dos programas em execução, o que contribui para o planejamento das ações e para um atendimento mais eficiente. A centralização dos dados também agiliza o acesso a informações sobre os serviços prestados e aqueles ainda necessários diante do referenciamento e acompanhamento de famílias e indivíduos. Além disso, a geração automática de relatórios, como os Planos de Acompanhamento Familiar (PAF), tornam o processo ainda mais dinâmico. Destaco também a rapidez e a qualidade do suporte técnico oferecido pela equipe responsável pelo sistema, que, sempre que necessário, proporciona atendimento ágil e eficaz. Em síntese, o Suas.info tem se mostrado uma ferramenta indispensável para o registro, proporcionando maior organização e controle nos processos.",
    img: "https://horario.com.br/wp-content/uploads/2022/11/geha_blog-21-11.jpg",
  },
  {
    name: "Andressa Spengles Gesumino",
    role: "Coordenadora do CRAS",
    city: "Município: Rancho Queimado",
    text: "A convite, compartilho minha experiência com a implementação do Suas.info, uma ferramenta essencial para o registro e acompanhamento das atividades da Secretaria de Assistência Social de nosso município. A informatização dos dados e processos operacionais possibilita a centralização das informações sobre as famílias atendidas, permitindo que os profissionais acessem dados de forma rápida e organizada, otimizando o fluxo de trabalho e o tempo de atendimento. Como sistema integrado entre a assistência social, o Suas.info disponibiliza informações em tempo real, facilitando o acompanhamento contínuo dos casos e o monitoramento das ações em andamento.",
    rating: 5,
    img: "https://horario.com.br/wp-content/uploads/2022/11/geha_blog-21-11.jpg",
  },
  {
    name: "Andressa Spengles Gesumino",
    role: "Coordenadora do CRAS",
    city: "Município: Rancho Queimado",
    text: "A convite, compartilho minha experiência com a implementação do Suas.info, uma ferramenta essencial para o registro e acompanhamento das atividades da Secretaria de Assistência Social de nosso município. A informatização dos dados e processos operacionais possibilita a centralização das informações sobre as famílias atendidas, permitindo que os profissionais acessem dados de forma rápida e organizada, otimizando o fluxo de trabalho e o tempo de atendimento. Como sistema integrado entre a assistência social,",
    rating: 5,
    img: "https://horario.com.br/wp-content/uploads/2022/11/geha_blog-21-11.jpg",
  },
];
const Depoiments = () => {
  return (
    <div className="bg-gray-400 py-10">
      <div className="container w-3/4 m-auto space-y-6">
        <h2 className="text-5xl font-medium text-[#333333]">
          Depoimentos de quem confia no nosso trabalho
        </h2>
        {DepoimentsList.map((depoiment, index) => (
          <div className="bg-white px-7 pt-10 pb-5 rounded-md" key={index}>
            <div className="flex justify-normal items-start gap-5">
              <div className="w-16">
                <img src={aspas} alt="aspas" className="p-1 -mt-5" />
              </div>
              <p className="italic w-full">{depoiment.text}</p>
            </div>
            <div className="flex justify-between items-end mt-5 pl-10">
              <div className="flex gap-7 items-center">
                <img
                  src={depoiment.img}
                  alt=""
                  className="w-14 h-14 rounded-full"
                />
                <div>
                  <h3 className="font-bold text-sm">{depoiment.name}</h3>
                  <p className="text-sm">{depoiment.role}</p>
                  <p className="text-sm">{depoiment.city}</p>
                </div>
              </div>

              <img
                src="https://static.vecteezy.com/system/resources/previews/013/743/771/non_2x/five-stars-rating-icon-png.png"
                alt=""
                className="w-auto h-10"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Depoiments;
