import suas_info from "../assets/suas_info.png?url";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import sao_paulo from "../assets/sao_paulo.jpeg?url";
import ponta_grossa from "../assets/ponta_grossa.jpeg?url";
import maringa from "../assets/maringa.png?url";
import rio_preto from "../assets/rio_preto.png?url";

const PartnersList = [
  {
    since: 2016,
    img: rio_preto,
  },
  {
    since: 2016,
    img: sao_paulo,
  },
  {
    since: 2016,
    img: ponta_grossa,
  },
  {
    since: 2016,
    img: maringa,
  },
  {
    since: 2016,
    img: maringa,
  },
];

const Partners = () => {
  return (
    <section id="parceiros" className="py-10 grid gap-5">
      <h2 className="text-5xl text-[#0f3060] flex items-center gap-3 font-bold pl-16 py-2">
        Municípios que confiam no{" "}
        <img src={suas_info} alt="logo do suas info" />
      </h2>

      <div className="w-full flex justify-center">
        <Carousel
          opts={{
            align: "center",
          }}
          className="w-full max-w-screen-xl"
        >
          <CarouselContent>
            {PartnersList.map((partner, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                <div className="p-1">
                  <div className="flex flex-col items-center justify-center p-6 aspect-square gap-10 border-none">
                    <img
                      src={partner.img}
                      alt="logo do município"
                      className="max-h-36"
                    />
                    <span className="italic text-lg font-medium">
                      desde {partner.since}
                    </span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Partners;
