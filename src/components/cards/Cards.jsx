import React from 'react';
import { cards } from '../../data/data';
import Card from './Card/Card';

const Cards = () => {
  const [plans, setPlans] = React.useState([]);
  React.useEffect(() => {
    setPlans(cards);
  }, []);

  return (
    <section className="w-full py-24 bg-white">
      <div className="w-full max-w-[1200px] mx-auto px-5">
        <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 lg:gap-4 sm:gap-16 gap-24">
            {plans.map((plan) => (
                <Card 
                  key={plan.id * Math.random()} 
                  {...plan}
                />
            ))}
        </div>
      </div>
    </section>
  )
}

export default Cards;