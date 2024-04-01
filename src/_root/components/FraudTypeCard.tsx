import React, { useState } from 'react';

interface FraudTypeCardProps {
    title: string;
    image: string;
    videoUrl: string;
    description: string[];
}

const FraudTypeCard: React.FC<FraudTypeCardProps> = ({ title, image, videoUrl, description }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform ${isHovered ? 'hover:scale-105' : ''
                }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover object-center"
            />
            <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <div className="space-y-2">
                    {description.map((desc, index) => (
                        <p key={index} className="text-gray-600">{desc}</p>
                    ))}
                </div>
                <div className={`${isHovered ? 'block' : 'hidden'} mt-4`}>
                    <iframe
                        title={title}
                        src={videoUrl}
                        width="100%"
                        height="300"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default FraudTypeCard;
