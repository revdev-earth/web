const EnterSection = () => (
  <section
    className="transition-all duration-300"
    style={{
      backgroundImage: `url(/fondo-2.jpeg)`,
      backgroundSize: "cover",
      backgroundPosition: "top",
    }}
  >
    <div className="container mx-auto px-5 md:px-6 pb-20 lg:pb-32 pt-20 lg:pt-32 text-white">
      <div className="flex flex-col gap-5 max-w-3xl text-left">
        <h2 className="text-6xl font-bold leading-[4rem]">
          Descubre Innovación Tecnológica Hoy
        </h2>
        <p className="text-2xl max-w-xl leading-10">
          Únete a la vanguardia digital con soluciones que impulsan el futuro.
        </p>
        <button className="w-fit">Explora Más</button>
      </div>
    </div>
  </section>
);

export default EnterSection;
