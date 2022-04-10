import Link from 'next/link'
import React from 'react'
import LinkButton from './LinkButton'
import { FiExternalLink } from "react-icons/fi"

export default function MobileJobCard({ title, subtitle, prize, variant, to, type }) {
  return (
    <div className='p-4 py-5 rounded-3xl w-full mb-5 flex justify-between items-end' style={styles[variant]}>
        <div>
            <p style={styles[variant].title} className="font-semibold">{title}</p>
            <p style={styles[variant].subtitle} className="font-semibold">{subtitle}</p>
        </div>
        <div>
            <Link href='/' passHref>
                <a className='flex p-3 md:border border-none border-[#1B1B18] rounded-lg w-full md:w-32 justify-center'><FiExternalLink className='text-gray-500 md:text-black' /><span className='ml-2 text-xs hidden md:block'>More info</span></a>
            </Link>
        </div>
    </div>
  )
}


const styles = {
    job: {
        background: '#EFEFEE',
        title: {
            color: '#1B1B18',
        },
        subtitle: {
            color: '#97928E'
        }
    }
}

