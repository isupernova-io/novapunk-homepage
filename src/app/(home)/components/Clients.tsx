import Image, { StaticImageData } from "next/image";
import client1 from "@/assets/images/clients/1.svg";
import client2 from "@/assets/images/clients/2.svg";
import client3 from "@/assets/images/clients/3.svg";
import client4 from "@/assets/images/clients/4.svg";

type ClientLogo = {
  image: StaticImageData;
  alt: string;
}

const clientsData: ClientLogo[] = [
  { image: client1, alt: "Client Logo" },
  { image: client2, alt: "Client Logo" },
  { image: client3, alt: "Client Logo" },
  { image: client4, alt: "Client Logo" },
];

const Clients = () => {
  return (
    <section className="size-full lg:px-7.5 md:px-5 px-4 overflow-hidden">
      <div className="container relative z-10">
        <div className="grid md:grid-cols-5 grid-cols-2 border-y-2 border-default-100 divide-x-2 divide-y-2 divide-default-100">
          <div className="md:col-span-1 col-span-2">
            <div className="relative bg-default-100 py-9 px-7.5 h-full flex flex-col items-center justify-center">
              <p className="text-default-900 text-sm">
                Trusted by <span className="text-primary">100,000+</span>{" "}
                marketers & teams
              </p>

              <div className="decoration">
                <span className="decoration-top"></span>
                <span className="decoration-bottom"></span>
              </div>
            </div>
          </div>

          {clientsData.map((client, idx) => (
            <div key={idx} className="py-9 px-7.5 h-full flex flex-col items-center justify-center">
              <Image
                src={client.image}
                loading="lazy"
                alt={client.alt}
                className="h-6.25 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
