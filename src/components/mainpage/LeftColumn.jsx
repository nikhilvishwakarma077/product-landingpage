import React, { useState } from 'react'
import { images } from "../../data/appData.js"

const LeftColumn = () => {

    const [selectedImage, setSelectedImage] = useState(0);

    const imageTypes = [
        { type: 'product', alt: 'Headphones on stand' },
        { type: 'lifestyle', alt: 'Person wearing headphones' },
        { type: 'detail', alt: 'Headphones detail view' },
        { type: 'video', alt: 'Product video' }
    ];

    return (
        <div className="space-y-4">
            <div className="bg-linear-to-br from-orange-400 via-orange-500 to-orange-600 rounded-3xl overflow-hidden aspect-square flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center">
                    <img
                        src={images.productImg}
                        alt="Sonic Pro Wireless Headphones"
                        className="w-full h-full object-contain drop-shadow-2xl"
                    />
                </div>
            </div>

            <div className="grid grid-cols-4 gap-3">
                {imageTypes.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`relative aspect-square rounded-xl overflow-hidden transition-all duration-300 ${selectedImage === index
                            ? 'ring-2 ring-cyan-400 ring-offset-2 ring-offset-slate-900'
                            : 'opacity-60 hover:opacity-100'
                            }`}
                    >
                        {image.type === 'video' ? (
                            <div className="w-full h-full bg-slate-700 flex items-center justify-center">
                                <div className="w-12 h-12 bg-cyan-400/20 rounded-full flex items-center justify-center">
                                    <div className="w-0 h-0 border-l-8 border-l-cyan-400 border-t-6 border-t-transparent border-b-6 border-b-transparent ml-1"></div>
                                </div>
                            </div>
                        ) : (
                            <img
                                src={images.productImg2}
                                alt={image.alt}
                                className="w-full h-full object-cover"
                            />
                        )}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default LeftColumn
