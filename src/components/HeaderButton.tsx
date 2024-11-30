import { ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import WhatsApp_icon from "../assets/WhatsApp_icon.png?url";
import { useToast } from "@/hooks/use-toast";

interface HeaderButtonProps {
  title: string;
}

const HeaderButton = ({ title }: HeaderButtonProps) => {
  const { toast } = useToast();

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          toast({
            title: "Ocorreu um erro ao enviar a mensagem.",
            description: "Verifique os campos e tente novamente.",
            className: "bg-red-500 text-white",
          });
          throw new Error("Ocorreu um erro ao enviar a mensagem.");
        }
        toast({
          title: "Sua mensagem foi enviada com sucesso!",
          description: "Entraremos em contato em breve.",
          className: "bg-green-500 text-white",
        });
        form.reset();
      })
      .catch(() => {
        toast({
          title: "Ocorreu um erro ao enviar a mensagem.",
          description: "Verifique os campos e tente novamente.",
          className: "bg-red-500 text-white",
        });
      });
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <button className="rounded-[4px] bg-green-500 text-white font-semibold px-6 py-2 hover:bg-green-600 transition-all flex items-center h-11 max-h-11 text-nowrap">
            <span>{title}</span>
            <ArrowRight size={32} />
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl">
              Solicite uma demostração
            </DialogTitle>
            <DialogDescription className="ml-auto">
              <img src="" alt="Suas Info Logo" />
            </DialogDescription>
          </DialogHeader>

          <form
            method="POST"
            action="https://formspree.io/f/mnnqollz"
            onSubmit={handleSubmitForm}
          >
            <div className="flex flex-col gap-5">
              <label className="grid gap-1">
                Nome*:
                <input
                  className="border border-gray-600 rounded-sm p-1"
                  type="text"
                  name="name"
                  required
                  placeholder="Seu nome ou nome da empresa"
                />
              </label>
              <label className="grid gap-1">
                Email*:
                <input
                  className="border border-gray-600 rounded-sm p-1"
                  type="email"
                  name="email"
                  required
                  placeholder="seuemail@exemplo.com"
                />
              </label>
              <label className="grid gap-1">
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

            <DialogClose asChild>
              <button
                type="submit"
                className=" rounded-sm w-full bg-blue-500 text-white font-semibold px-6 py-2 hover:bg-blue-600 transition-all mt-5"
              >
                Enviar
              </button>
            </DialogClose>
            <button
              type="button"
              className="w-full border border-gray-950 rounded-sm font-semibold px-6 py-2 hover:border-blue-600 hover:text-white hover:bg-blue-600 transition-all mt-2"
            >
              <a
                href="https://wa.me/5522998052982?text=Olá!%20Quero%20agendar%20uma%20demonstração%20do%20Suas.Info!"
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
            </button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HeaderButton;
