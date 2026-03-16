import React from 'react'

const Loader = () => {
    return (
        <div className={'w-full h-[500px] flex flex-col items-center justify-center'}>
            <div
                className="w-[180px] h-[180px] border-4 border-t-effectColor border-gray-300 rounded-full animate-spin"
            ></div>
        </div>
    )
}
export default Loader
