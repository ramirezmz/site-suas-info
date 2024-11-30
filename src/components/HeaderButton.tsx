import { ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

interface HeaderButtonProps {
  title: string;
}

const HeaderButton = ({ title }: HeaderButtonProps) => {
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
            <DialogTitle>Solicite uma demostração</DialogTitle>
          </DialogHeader>
          <p>conteúdo</p>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HeaderButton;
