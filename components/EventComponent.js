import React from 'react'
import LinkButton from './LinkButton'
import SectionHeader from './section-header'

export default function EventComponent({date, title, text, startTime, endTime, eventLocation}) {
  return (
    <div className='flex flex-col md:flex-row justify-between py-7 mb:py-12 md:border-b border-black md:mb-10'>
        <SectionHeader title={date} isStroked={true}/>
        <div className='w-full md:w-1/2'>
            <div>
                <h4 className='text-[#1B1B18] font-bold mb-3'>{title}</h4>
                <p className='mb-3'>{text}</p>
            </div>
            <div className='flex justify-between mb-3'>
                <div>
                    <span className='text-xs'>Time</span>
                    <div>
                        <p className='text-sm font-semibold'>{startTime}PM {" "} - {endTime}PM CEST</p>
                    </div>
                </div>
                <div>
                    <span className='text-xs'>Location</span>
                    <div>
                        <p className='text-sm font-semibold'>{eventLocation}</p>
                    </div>
                </div>
            </div>
            <LinkButton linkTo="/" type="job" />
        </div>
    </div>
  )
}
