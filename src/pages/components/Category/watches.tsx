import React from "react";
import { useRouter } from "next/router";

function Watch() {
    const titles = ["Watch 1", "Watch 2", "Watch 3"];
    const prices = ["$100", "$150", "$200"];
    const images = [
        "public/assets/images/w1.jpeg",
        "public/assets/images/w2.jpeg",
        "public/assets/images/w3.jpeg",
        "public/assets/images/w4.jpeg"
    ];
    const ratings = [4.5, 3.8, 4.2];

    const router = useRouter();

    const handleDivClick = (title: string | number | boolean, price: string | number | boolean, image: string | number | boolean) => {
        // Navigate to the second page with the title, price, and image query parameters
        router.push(`/components/Category/displayPage?title=${encodeURIComponent(title)}&price=${encodeURIComponent(price)}&image=${encodeURIComponent(image)}`);
    };

    return (
        <div className="flex flex-wrap m-0 p-0">
            {titles.map((title, index) => (
                <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg m-4 cursor-pointer" onClick={() => handleDivClick(title, prices[index], images[index])}>
                    <div className="img h-38 flex justify-center items-center">
                        <img src={images[index]} alt="Watch" className="w-full h-full object-cover" />
                    </div>
                    <div className="px-4 py-2">
                        <div className="font-bold text-lg mb-1">{title}</div>
                        <p className="text-gray-700 text-base mb-1">Price: {prices[index]}</p>
                        {/* Add the rating div here */}
                        <div className="flex items-center">
                            <svg className="fill-current text-gray-500 w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
                            </svg>
                            <p className="text-gray-700">{ratings[index]}</p>
                        </div>
                        {/* End of rating div */}
                        <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View Details</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Watch;
