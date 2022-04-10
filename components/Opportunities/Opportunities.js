import React from 'react';
import OportunityComponent from './OpportunityComponent';
import opportunities from './opportunity.data';


export default function Opportunities() {
  return (
    <main className='w-full md:w-1/2'>
        <p className='font-bold mb-5'>Opportunities</p>
        {opportunities.map((item, index) => (
            <OportunityComponent key={index} numberOf={item.numberOf} text={item.text}/>
        ))}
    </main>
  )
}
