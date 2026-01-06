import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react';

const Accordion = () => {

    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "How long does the battery last on a single charge?",
            answer: "Our headphones offer up to 40 hours of playback with Active Noise Cancelling (ANC) enabled, and up to 40 hours with ANC off. Need a boost? A quick 10-minute charge gives you 4 hours of listening time."
        },
        {
            question: "Is the active noise cancelling adjustable?",
            answer: "Yes, the active noise cancelling features multiple levels that you can adjust through our companion app. You can choose from full ANC, ambient mode to hear your surroundings, or customize the level to your preference."
        },
        {
            question: "Are they water and sweat resistant?",
            answer: "Yes, our headphones feature IPX4 water resistance rating, making them protected against sweat and light rain. They're perfect for workouts and outdoor activities, though they shouldn't be submerged in water."
        },
        {
            question: "What is included in the box?",
            answer: "The package includes the headphones, a premium carrying case, USB-C charging cable, 3.5mm audio cable for wired listening, airplane adapter, and a quick start guide with warranty information."
        },
        {
            question: "Do they support multi-point Bluetooth pairing?",
            answer: "Yes, our headphones support multi-point Bluetooth pairing, allowing you to connect to two devices simultaneously. Seamlessly switch between your laptop and phone without needing to manually disconnect and reconnect."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <div className="space-y-4">
            {faqs.map((faq, index) => (
                <div
                    key={index}
                    className="bg-slate-800/40 backdrop-blur-sm border border-cyan-500/30 rounded-2xl overflow-hidden transition-all duration-300"
                >
                    <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-800/60 transition-colors duration-200"
                    >
                        <span className="text-white font-medium text-lg pr-4">
                            {faq.question}
                        </span>
                        <div className="text-cyan-400 shrink-0">
                            {openIndex === index ? (
                                <ChevronUp className="w-6 h-6" />
                            ) : (
                                <ChevronDown className="w-6 h-6" />
                            )}
                        </div>
                    </button>

                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                            }`}
                    >
                        <div className="px-8 pb-6">
                            <p className="text-slate-400 leading-relaxed">
                                {faq.answer}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Accordion
