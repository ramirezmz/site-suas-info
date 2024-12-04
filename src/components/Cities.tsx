import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import sao_paulo_cidade from "../assets/sao_paulo_cidade.png?url";
import belo_horizonte_cidade from "../assets/belo_horizonte_cidade.png?url";
import rio_preto_cidade from "../assets/rio_preto_cidade.png?url";

const CitiesList = [
  {
    img: belo_horizonte_cidade,
  },
  {
    img: sao_paulo_cidade,
  },
  {
    img: rio_preto_cidade,
  },
];

const Cities = () => {
  return (
    <section id="partners1" className="grid mt-10 mb-20">
      <h2 className="text-2xl text-[#3b3a3a] grid items-center gap-3 pl-16 pb-5">
        <span className="border border-black w-44"></span>
        Municípios com quem cocriamos
      </h2>

      <div className="w-full flex justify-center">
        <Carousel
          opts={{
            align: "center",
          }}
          className="w-full max-w-screen-xl"
        >
          <CarouselContent>
            {CitiesList.map((city, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 basis-1"
              >
                <div className="p-1">
                  <img
                    src={city.img}
                    alt="logo do município"
                    className="max-h-36"
                  />
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

export default Cities;
