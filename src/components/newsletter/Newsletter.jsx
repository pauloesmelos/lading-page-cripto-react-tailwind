import React from 'react';
import { MdEmail } from "react-icons/md";

const Newsletter = () => {
  const [inputNewsletter, setInputNewsletter] = React.useState(false);
  const handleInputNewsletter = ({ target }) => {
    if(target.ariaLabel === "newsletter") {
      setInputNewsletter(true)
    }
    else setInputNewsletter(false);
  }
  const style = {
    inputNewsletter: {
      active: "flex items-center bg-white rounded-md gap-5 p-2 border-2 border-sky-500 w-[250px]",
      notActive: "flex items-center bg-white rounded-md gap-5 p-2 border-2 border-transparent w-[250px]"
    }
  }

  return (
    <section onClick={handleInputNewsletter} className="w-full bg-slate-950 py-20">
      <div className="w-full max-w-[1200px] px-5 mx-auto">
        <div className="w-full grid md:grid-cols-3">
            <div className="text-white col-span-2 flex flex-col gap-5">
                <h1 className="text-4xl font-bold">
                  Needing to organize your finances ?
                </h1>
                <p className="text-xl font-light text-green">
                  Sign up to our newsletter for updates.
                </p>
            </div>
            <div className="flex flex-col gap-6 mt-10 md:mt-0">
                <div className="flex flex-col md:flex-row items-center gap-6">
                    <div 
                      className={inputNewsletter ? style.inputNewsletter.active : style.inputNewsletter.notActive}
                      onClick={handleInputNewsletter}
                      aria-label="newsletter"
                    >
                        <MdEmail 
                          className="text-emerald-500"
                          size={25} 
                          aria-label="newsletter"
                        />
                        <input 
                          className="bg-transparent w-full outline-none group" 
                          type="email" 
                          name="email" 
                          id="email" 
                          placeholder="Your email"
                          aria-label="newsletter"
                        /> {/* codar um hook de email */}
                    </div>
                    <button className="w-[120px] px-4 py-2 bg-green text-neutral-700 font-semibold rounded-md hover:shadow-lg
                    hover:shadow-emerald-600 duration-150 ease-linear border border-green">
                        Sign up
                    </button>
                </div>
                <div className="text-sm md:text-lg">
                  <p className="font-medium text-white">
                    We care about the protection of your data and money. Red our {" "}
                    <a 
                      href="#" 
                      target="_blank" 
                      rel="noopener noreferrer" /* impedindo acesso a links maliciosos */
                      className="text-green border-b border-green hover:opacity-70 duration-150 ease-linear"
                    >
                      Privacy Policy
                    </a>
                  </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter;