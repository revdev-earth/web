import Image from "next/image";
import React from "react";
import RobotHandImage from "./robot-hand.jpeg";

const UsSection = () => (
  <section className="container mx-auto px-5 md:px-6 pt-16 md:pt-20 lg:pt-32 pb-8">
    <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 w-full items-center">
      <div className="flex-1 items-center lg:items-start">
        <div className="flex flex-col gap-4">
          <h2 className="whitespace-pre-line text-3xl font-semibold mb-4">
            Sobre nosotros
          </h2>
          {/* <p>
            Welcome to Rev Dev, a leading technology company. We are dedicated
            to providing innovative solutions to meet the ever-evolving needs of
            our clients.
          </p>
          <p>
            With a focus on cutting-edge technology and a commitment to
            excellence, we strive to deliver the highest quality products and
            services to help businesses thrive in the digital age.
          </p> */}
          <p>
            Bienvenido a Rev Dev, una empresa líder en tecnología. Estamos
            dedicados a proporcionar soluciones innovadoras para satisfacer las
            necesidades siempre cambiantes de nuestros clientes.
          </p>
          <p>
            Con un enfoque en tecnología de vanguardia y un compromiso con la
            excelencia, nos esforzamos por ofrecer productos y servicios de la
            más alta calidad para ayudar a las empresas a prosperar en la era
            digital.
          </p>
        </div>
      </div>
      <div className="flex-1 lg:max-w-1/2 h-full justify-center lg:justify-start">
        <div className="flex-shrink-0 mx-auto w-full h-full">
          <Image
            src={RobotHandImage}
            alt="Robot Hand"
            className="w-full rounded-lg md:rounded-xl lg:rounded-2xl"
            width={400}
            height={400}
            decoding="async"
            data-nimg="fill"
          />
        </div>
      </div>
    </div>
  </section>
);

export default UsSection;
