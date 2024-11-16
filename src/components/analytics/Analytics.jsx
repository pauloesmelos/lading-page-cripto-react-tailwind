import React from 'react';
import Laptop from "../../assets/laptop.jpg";

const Analytics = () => {
  return (
    <section className="w-full bg-white py-16">
     <div className="w-full max-w-[1200px] mx-auto px-5">
        <div className="w-full grid grid-cols-1 gap-16 md:gap-0 md:grid-cols-2">
            <img 
                className="object-cover w-[400px] h-full mx-auto md:mx-0" 
                src={Laptop} 
                alt="Laptop" 
                title="Laptop"
            />
            <div className="flex flex-col gap-3 place-content-center">
                <p className="font-bold text-green tracking-wider">
                    DATA ANALYTICS DASHBOARD
                </p>
                <h1 className="text-4xl text-black font-bold">
                    Manage Data Analytics
                </h1>
                <p className="text-neutral-500 font-medium">
                    Analytics your CRIPTOS and other founds with our complete dashboard! <br/>
                    Analytics your SELIC and other founds with our complete dashboard!
                </p>
                <button className="px-4 py-2 w-[40%] md:w-[150px] bg-black text-white rounded-md font-semibold hover:scale-[1.03]
                 hover:shadow-lg hover:shadow-slate-400 duration-150 ease-linear mt-5">
                    Get Started
                </button>
            </div>
        </div>
     </div> 
    </section>
  )
}

export default Analytics;