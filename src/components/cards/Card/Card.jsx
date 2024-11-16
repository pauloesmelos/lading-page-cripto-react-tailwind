import React from 'react';

const Card = ({ id, flat, price, storage, users, sendLimit, pathImg }) => {
  const style = {
    card: {
      normal: `w-[300px] border border-neutral-100 text-black p-8 rounded-xl hover:scale-[1.03] duration-150 ease-linear
    cursor-pointer shadow-md hover:shadow-xl mx-auto`,
    best: `w-[300px] border-neutral-100 text-black p-8 rounded-xl hover:scale-[1.03] duration-150 ease-linear
    cursor-pointer shadow-md hover:shadow-xl bg-neutral-200 mx-auto`
    }
  }
  return (
    <div className={id === 1 ? style.card.best : style.card.normal}>
      <div className="flex flex-col gap-7">
        <div className="mt-[-80px] bg-transparent">
          <img 
            alt={flat} 
            title={flat} 
            src={pathImg} 
            className="object-cover w-[100px] h-full mx-auto bg-transparent"
          />
        </div>
        <div>
          <h2 className="font-bold text-2xl text-center">
            {flat}
          </h2>
        </div>
        <div>
          <p className="font-bold text-4xl text-center">
            $ {price}
          </p>
        </div>
        <div className="text-center">
          <p className="border-b p-2">
            {storage}
          </p>
          <p className="border-b p-2">
            {`${users} Granted User`}
          </p>
          <p className="border-b p-2 mb-2">
            {`Send up to ${sendLimit}`}
          </p>
          {id === 1 && (
            <p className="text-green bg-white font-bold rounded-xl py-2 px-10 animatePiscar border-2 border-green">
              Best choose
            </p>
          )
          }
        </div>
        <button className="py-2 px-6 font-medium text-neutral-800 bg-green rounded-md w-full mt-8
        hover:bg-slate-800 duration-150 ease-linear hover:text-green hover:shadow-lg
        hover:shadow-black/40">
          Start Trial
        </button>
      </div>
    </div>
  )
}

export default Card;