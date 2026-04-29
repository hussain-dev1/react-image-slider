import React, { useState, useEffect } from 'react';

export const Image_slider = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [val, setVal] = useState(0);

    const images = [
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
    ];
    const setPrevious = () => {
        setCurrentImage(prev=>(prev - 1 >= 0?prev - 1:prev));
    };
    const setNext = () => {
        setCurrentImage(prev=>(prev + 1<images.length?prev + 1:prev));
    };

    const updateImage = (index) => () => {
        setCurrentImage(index);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage(prev =>
                (prev + 1 < images.length ? prev + 1 : 0)
            );
        }, 2000);

        return () => clearInterval(interval);
    }, [images.length]);


    return (
        <>
            <div className='w-full h-screen flex flex-col items-center justify-center gap-3 p-3'>
             <div className="mx-11 w-[90%] h-[300px] md:w-[50%] lg:w-[50%] p-1 border-2  border-black rounded-sm flex justify-center items-center">
                <img
                    className="h-[100%] w-[100%] object-cover rounded-sm transition-all duration-700"
                    src={images[currentImage]}
                    alt=""
                />
                </div>  

                <div className="flex flex-row gap-2 mt-3">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`border-black border-1 shadow-sm rounded-full h-3 w-3 transition-all duration-300
                            ${currentImage === index ? "bg-red-200 scale-125 " : "bg-transparent"}
                    `}
                        />
                    ))}
                </div>

                <div className='flex flex-row gap-2'>
                    {
                        images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt="" onClick={updateImage(index)}
                                className={` flex w-[100px] h-[60px] rounded-sm transition-all duration-300 cursor-pointer
                                ${currentImage === index ? "border-1 border-red-500 scale-125 shadow-sm" : "border-1 border-gray-300"}
                            `}
                            />
                        ))
                    }
                </div>

                <div>Image {currentImage + 1} of {images.length}</div>
                <div className='flex flex-row'>
                    <button className='bg-gray-200 py-3 px-4 rounded hover:cursor-pointer shadow-sm border-1 border-black outline-none m-3 text-black font-serif active:bg-gray-100' onClick={setPrevious}>Previous</button>
                    <button className='bg-gray-200 py-3 px-4 rounded hover:cursor-pointer shadow-sm border-1 border-black outline-none m-3 text-black font-serif active:bg-gray-100' onClick={setNext}>Next</button>
                </div>
            </div>
        </>
    );
};