const Reasons = [
  {
    title: "Solução inteligente",
    description:
      "O SUAS INFO é uma solução inteligente que facilita a gestão de informações do SUAS.",
  },
  {
    title: "Suporte Humanizado",
    description:
      "O SUAS INFO é fácil de usar e permite que você gerencie suas informações de forma eficiente.",
  },
  {
    title: "Completo e Integrado",
    description:
      "O SUAS INFO oferece suporte técnico para ajudá-lo a resolver qualquer problema que possa surgir.",
  },
  {
    title: "Inteligência de Dados",
    description:
      "O SUAS INFO é seguro e protege suas informações de forma confiável.",
  },
  {
    title: "Segurança e dados protegidos",
    description:
      "O SUAS INFO oferece um preço acessível para que você possa gerenciar suas informações de forma eficiente.",
  },
];

const ReasonsWhy = () => {
  return (
    <div className="container w-3/4 m-auto flex flex-col justify-center items-center h-[60vh] ">
      <h2 className="text-4xl font-bold py-5">
        Por que escolher o SUAS INFO para sua gestão?
      </h2>
      <div>
        <div className="flex">
          {Reasons.map((reason, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center my-4 text-center"
            >
              <h3 className="text-2xl">{reason.title}</h3>
              <p className="text-center">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReasonsWhy;
