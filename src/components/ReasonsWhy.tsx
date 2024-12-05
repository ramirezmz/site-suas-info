import suas_info from "../assets/suas_info.png?url";
import dados_protegidos from "../assets/dados_protegidos.png?url";
import inteligencia_dados from "../assets/inteligencia_dados.png?url";
import solucao_inteligente from "../assets/solucao_inteligente.png?url";
import suporte_humanizado from "../assets/suporte_humanizado.png?url";
import integrado from "../assets/integrado.png?url";

const Reasons = [
  {
    title: "Solução inteligente",
    description:
      "O SUAS INFO é uma solução inteligente que facilita a gestão de informações do SUAS.",
    icon: solucao_inteligente,
  },
  {
    title: "Suporte Humanizado",
    description:
      "O SUAS INFO é fácil de usar e permite que você gerencie suas informações de forma eficiente.",
    icon: suporte_humanizado,
  },
  {
    title: "Completo e Integrado",
    description:
      "O SUAS INFO oferece suporte técnico para ajudá-lo a resolver qualquer problema que possa surgir.",
    icon: integrado,
  },
  {
    title: "Inteligência de Dados",
    description:
      "O SUAS INFO é seguro e protege suas informações de forma confiável.",
    icon: inteligencia_dados,
  },
  {
    title: "Segurança e dados protegidos",
    description:
      "O SUAS INFO oferece um preço acessível para que você possa gerenciar suas informações de forma eficiente.",
    icon: dados_protegidos,
  },
];

const ReasonsWhy = () => {
  return (
    <section id="reasons" className="container w-full mx-auto grid gap-5 px-4">
      <h2 className="text-2xl md:text-5xl font-bold py-5 text-[#3b3a3a] flex items-center gap-3 justify-center">
        Por que escolher o{" "}
        <img src={suas_info} alt="Logo do Suas Info" width={100} height={100} />{" "}
        para sua gestão?
      </h2>
      <div className="flex flex-col sm:flex-row w-full justify-around m-auto">
        {Reasons.map((reason, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center my-4 text-center gap-5"
          >
            <img src={reason.icon} alt={reason.title} className="w-28 h-28" />
            <h3 className="text-lg w-36">{reason.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReasonsWhy;
