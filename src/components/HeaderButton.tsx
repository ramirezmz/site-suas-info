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
import suas_info from "../assets/suas_info.png?url";
import { Button } from "./ui/button";

interface HeaderButtonProps {
  title: string;
}

const HeaderButton = ({ title }: HeaderButtonProps) => {
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
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant={"secondary"}
            className="flex items-center max-h-10 text-nowrap gap-1 w-full"
          >
            <span>{title}</span>
            <ArrowRight size={32} />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl">
              Solicite uma demostração
            </DialogTitle>
            <DialogDescription className="ml-auto">
              <img
                src={suas_info}
                alt="Suas Info Logo"
                width={150}
                height={50}
              />
            </DialogDescription>
          </DialogHeader>

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

            <DialogClose asChild>
              <Button
                type="submit"
                className="w-full px-6 py-2 mt-5"
                variant={"default"}
              >
                Enviar
              </Button>
            </DialogClose>
            <Button
              type="button"
              className="w-full px-6 py-2 mt-2"
              variant={"outline"}
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
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HeaderButton;
