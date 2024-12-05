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
      <h2 className="text-2xl md:text-3xl lg:text-5xl text-[#0f3060] flex items-center justify-center gap-3 font-bold px-2 md:pl-16 py-2">
        <span className="flex flex-col md:flex-row text-nowrap md:gap-3">
          Municípios que confiam no{" "}
          <img
            src={suas_info}
            alt="logo do suas info"
            width={100}
            className="m-auto lg:w-auto lg:h-auto"
          />
        </span>
      </h2>

      <div className="w-full flex justify-center">
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-[65vw] md:max-w-screen-xl md:w-[75vw] m-auto"
        >
          <CarouselContent className="flex items-center">
            {PartnersList.map((partner, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                <div className="flex flex-col items-center justify-center p-6 aspect-square gap-10 border-none">
                  <img
                    src={partner.img}
                    alt="logo do município"
                    className="max-w-36"
                  />
                  <span className="italic text-lg font-medium">
                    desde {partner.since}
                  </span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext className="-mt-4 mr-5" />
        </Carousel>
      </div>
    </section>
  );
};

export default Partners;
