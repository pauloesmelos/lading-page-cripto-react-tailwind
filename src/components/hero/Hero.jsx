import React from 'react';
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <section className="w-full">
      {/* -100 de MT pois ao deixar h-screen com o tamanho da navbar a página jogava o hero pra baixo */}
      <div className="w-full h-screen mt-[-100px] flex justify-center items-center max-w-[1200px] mx-auto px-3">
        <div className="flex flex-col items-center gap-6 text-white">
          <p className="text-green font-bold text-sm">
            GROWING WITH DATA ANALYTICS
          </p>
          <h1 className="text-3xl md:text-6xl font-bold">
            Grow with data.
          </h1>
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-lg md:text-4xl font-bold">
              Fast, flexibe and secure for
            </p>
            <ReactTyped
              className="text-lg md:text-4xl font-bold text-neutral-500"
              strings={[
                "SaaS", "SELIC", "CDB", "Fortune Tiger", "BTC", "BTB"
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </div>
          <h3 className="text-neutral-500 font-semibold text-lg md:text-xl text-center">
            {/* text center num texto longo ajustou em telas mobile (UI/UX) */}
            Monitor your data analytics to increase revenue for BTB, BTC & SASS platforms.
          </h3>
          <button className="w-[150px] px-8 py-2 bg-green text-neutral-700 font-semibold rounded-md hover:shadow-md
          hover:shadow-emerald-600 duration-150 ease-linear">
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero;