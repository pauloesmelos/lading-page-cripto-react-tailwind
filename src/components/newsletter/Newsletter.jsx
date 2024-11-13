import React from 'react';
import { MdEmail } from "react-icons/md";

const Newsletter = () => {
  return (
    <section className="w-full bg-slate-950 py-14">
      <div className="w-full max-w-[1200px] px-5 mx-auto">
        <div className="w-full grid md:grid-cols-3">
            <div className="text-white">
                <h1>Needing to organize your finances ?</h1>
                <p>Sign up to our newsletter for updates.</p>
            </div>
            <div>
                <div>
                    <div>
                        <MdEmail />
                        <input placeholder="Your e-mail" type="email" /> {/* codar um hook de email */}
                    </div>
                    <button className="w-[120px] px-4 py-2 bg-green text-neutral-700 font-semibold rounded-md hover:shadow-lg
                    hover:shadow-emerald-600 duration-150 ease-linear">
                        Sign up
                    </button>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter;