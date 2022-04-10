import React from 'react'
import SectionHeader from '../section-header'


export default function OpportunityComponent({ numberOf, text}) {
  return (
    <div className='mb-3 w-full'>
        <SectionHeader title={numberOf} />
        <p>{text}</p>
    </div>
  )
}
