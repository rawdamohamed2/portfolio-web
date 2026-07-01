import React from 'react'

const ImageCard = ({profileImage}) => {
    return (
        <div className='md:pt-2 pt-0 sm:pb-5 md:pb-1 min-h-[400px] lg:col-span-1 md:col-span-2 col-span-1' data-aos="fade-down" data-aos-delay="500">
            <div className="relative w-full">
                <div className='top-0 start-0 absolute h-[340px] w-full border-[8px] border-hoverBtn rounded-2xl shadow-[0px_0px_15px_#01cabc]'>
                </div>
                <div className='md:top-[20px] md:start-[20px] top-0 start-0 absolute h-[340px] w-full rounded-2xl'>
                    <img src={profileImage} alt="My-Photo" className="w-full h-full rounded-2xl"/>
                </div>
            </div>
        </div>
    )
}
export default ImageCard
