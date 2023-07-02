import React from 'react'

const BaseModal = () => {


    return (
        <>
            <button className="btn text-white" onClick={() => (showModal())}>open modal</button>
            {modal == true ? (
                <>
                    <div class="py-12 bg-opacity-5 bg-gray-250 shadow-lg backdrop-blur-md transition duration-500 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" >
                        <div role="alert" class=" bg-opacity-50 px-24 py-10 shadow-lg backdrop-blur-md max-sm:px-8 flex items-center justify-center">
                            <div class="relative text-white py-8 px-5 md:px-10 bg-black rounded-xl border-t-2 border-b-2 border-[#000AFF]">

                            </div>
                        </div>
                    </div>
                </>) : ''}
            <div class="py-12 bg-opacity-5 bg-gray-250 shadow-lg backdrop-blur-md transition duration-500 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" >
                <div role="alert" class=" bg-opacity-50 px-24 py-10 shadow-lg backdrop-blur-md max-sm:px-8 flex items-center justify-center">
                    <div class="relative text-white py-8 px-5 md:px-10 bg-black rounded-xl border-t-2 border-b-2 border-[#000AFF]">

                    </div>
                </div>
            </div>
        </>
    )
}

export default BaseModal