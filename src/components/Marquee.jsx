import React from "react";

const Marquee = () => {
  const images = [
    "logos/logoyzi.svg",
    "logos/aninmca.svg",
    "logos/ventures.svg",
    "logos/logoyzi.svg",
    "logos/aninmca.svg",
    "logos/ventures.svg",
  ];

  return (
    <section className="bg-black py-20 w-full overflow-hidden text-white pb-50">
      <div className="flex-center mb-20 ">
        <p className="font-general uppercase text-5xl md:text-8xl text-white special-font">
          <b>Our Partners</b>
        </p>
      </div>
      <div className="flex w-max animate-marquee items-center gap-10">
        {images.map((img, index) => (
          <div key={index} className="flex items-center justify-center">
            <img
              src={img}
              alt="logo"
              className="h-28 w-auto object-contain brightness-0 invert"
            />
          </div>
        ))}

        {images.map((img, index) => (
          <div
            key={`dup-${index}`}
            className="flex items-center justify-center"
          >
            <img
              src={img}
              alt="logo"
              className="h-28 w-auto object-contain brightness-0 invert"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
