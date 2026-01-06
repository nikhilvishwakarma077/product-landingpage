import React from 'react'
import { Star } from 'lucide-react';

const ReviewCards = () => {

    const reviews = [
        {
            name: "Alex M.",
            verified: true,
            time: "2d ago",
            rating: 5,
            title: "Coding focus unlocked",
            review: "The noise cancellation is unreal. I use these for coding 8 hours a day. It completely blocks out the coffee shop noise. Best investment for my productivity.",
            avatar: "AM"
        },
        {
            name: "Sarah J.",
            verified: true,
            time: "1w ago",
            rating: 5,
            title: "Insane value",
            review: "Better bass than my AirPods Pro at half the price. I was skeptical at first, but the sound profile is perfect for hip-hop and electronic music.",
            avatar: "SJ"
        },
        {
            name: "David K.",
            verified: true,
            time: "3w ago",
            rating: 5,
            title: "Finally, real battery life",
            review: "Battery life actually lasts as long as they say. Finally. I went a whole week of commuting without charging the case once. Highly recommend.",
            avatar: "DK"
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5">
            {reviews.map((review, index) => (
                <div
                    key={index}
                    className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-linear-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                            {review.avatar}
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2">
                                <h4 className="text-white font-semibold">{review.name}</h4>
                                {review.verified && (
                                    <span className="text-cyan-400 text-xs">✓ Verified Buyer</span>
                                )}
                            </div>
                            <p className="text-slate-500 text-sm">{review.time}</p>
                        </div>
                    </div>

                    <div className="flex gap-1 mb-3">
                        {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-cyan-400 text-cyan-400" />
                        ))}
                    </div>

                    <h5 className="text-white font-semibold mb-2">{review.title}</h5>
                    <p className="text-slate-400 text-sm leading-relaxed">{review.review}</p>
                </div>
            ))}
        </div>
    )
}

export default ReviewCards
