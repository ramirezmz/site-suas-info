import { useToast } from "@/hooks/use-toast";
import suas_info from "../assets/suas_info.png?url";
import vf_soft from "../assets/vf_soft.png?url";
import WhatsApp_icon from "../assets/WhatsApp_icon.png?url";
import whatsapp from "../assets/whatsapp.svg?url";
import web_icon from "../assets/web_icon.jpg?url";
import email_icon from "../assets/email_icon.jpg?url";
import { Button } from "./ui/button";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Ocorreu um erro ao enviar a mensagem.");
      }

      toast({
        title: "Sua mensagem foi enviada com sucesso!",
        description: "Entraremos em contato em breve.",
        className: "bg-green-500 text-white",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Ocorreu um erro ao enviar a mensagem.",
        description: "Verifique os campos e tente novamente.",
        className: "bg-red-500 text-white",
      });
    }
  };
  return (
    <section
      id="contato"
      className="flex justify-between px-10 md:px-20 pt-6 pb-10 flex-col md:flex-row gap-5 md:gap-0"
    >
      <div className="images flex flex-col md:w-1/2 justify-center gap-5">
        <h2 className="text-3xl mb-5">Entre em Contato</h2>
        <div className="flex flex-col justify-center items-center">
          <img src={suas_info} alt="" className="w-96" />
          <img src={vf_soft} alt="" className="w-64" />
        </div>
        <div className="grid gap-2">
          <span className="flex items-center gap-2">
            <img src={whatsapp} alt="WhatsApp" width={24} height={24} />
            <span className="font-extralight">41 9 9823 8165</span>
          </span>
          <span className="flex items-center gap-2">
            <img src={email_icon} alt="Email" width={24} height={24} />
            <span className="font-extralight">suas.info@.com.br</span>
          </span>
          <span className="flex items-center gap-2">
            <img src={web_icon} alt="Site" width={24} height={24} />
            <span className="font-extralight">www.suas.info.com.br</span>
          </span>
        </div>
      </div>
      <div className="form md:w-1/2">
        <div className="bg-[#c5c6d2] max-w-lg m-auto p-10 rounded-md grid gap-5">
          <p className="text-xl font-bold">Solicite o nosso contato</p>
          <form
            method="POST"
            action="https://formspree.io/f/mnnqollz"
            onSubmit={handleSubmitForm}
          >
            <div className="flex flex-col gap-5">
              <label className="grid gap-1 font-semibold">
                Nome*:
                <input
                  className="border border-gray-600 rounded-sm p-1"
                  type="text"
                  name="name"
                  required
                  placeholder="Seu nome ou nome da empresa"
                />
              </label>
              <label className="grid gap-1 font-semibold">
                Email*:
                <input
                  className="border border-gray-600 rounded-sm p-1"
                  type="email"
                  name="email"
                  required
                  placeholder="seuemail@exemplo.com"
                />
              </label>
              <label className="grid gap-1 font-semibold">
                Telefone*:
                <input
                  className="border border-gray-600 rounded-sm p-1"
                  type="tel"
                  name="telephone"
                  required
                  minLength={11}
                  placeholder="DDD + Número"
                />
              </label>
              <input
                type="hidden"
                name="defaultMessage"
                value="Quero uma demonstração do Suas.Info"
              />
            </div>
            <div>
              <Button type="submit" className="w-full mt-5" variant={"default"}>
                Enviar
              </Button>

              <Button type="button" className="w-full mt-2" variant={"outline"}>
                <a
                  href="https://wa.me/41998238165?text=Olá!%20Quero%20agendar%20uma%20demonstração%20do%20Suas.Info!"
                  target="_blank"
                  className="flex justify-center items-center gap-2"
                >
                  Ir para o Whatsapp
                  <img
                    src={WhatsApp_icon}
                    alt="WhatsApp Icon"
                    width={24}
                    height={24}
                  />
                </a>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
