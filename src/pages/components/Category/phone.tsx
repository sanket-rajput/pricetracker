import React from "react";
import { useRouter } from "next/router";

function Phone() {
    const titles = [
        "Redmi 12 5G Moonstone Silver 6GB RAM 128GB ROM",
        "OPPO A59 5G (Silk Gold, 4GB RAM, 128GB Storage) | 5000 mAh Battery with 33W SUPERVOOC Charger | 6.56 HD+ 90Hz Display",
        "Redmi Note 13 5G (Arctic White, 6GB RAM, 128GB Storage) | MTK Dimensity 6080 5G | 7.6mm, Slimmest Note Ever",
        "OnePlus 12R (Iron Gray, 8GB RAM, 128GB Storage)",
        "Vivo V29 5G ((Red, 128 GB) (8 GB RAM))",
        "Apple iPhone 15 Pro Max (256 GB) - Black Titanium",
        "Samsung Galaxy A73 5G Awesome Gray, 8GB RAM, 128GB Storage",
        "Samsung Galaxy S24 Ultra 5G AI Smartphone (Titanium Gray, 12GB, 512GB Storage)",
        "Google Pixel 7 (Obsidian, 128 GB)  (8 GB RAM)",
        "realme 12 Pro 5G (Submarine Blue, 8GB RAM 256 GB Storage)",
        "Honor 90 5G (Emerald Green, 256 GB)  (8 GB RAM)",
        "vivo X100 (Stargaze Blue, 256 GB)  (12 GB RAM)",
        "Redmi Note 13 Pro+ (Fusion White, 12GB RAM, 256GB Storage)",
        "Apple iPhone 15 (128 GB) - Blue",
        "iQOO 12 5G (Legend, 12GB RAM, 256GB Storage) | India's 1st Snapdragon® 8 Gen 3 Mobile Platform | India's only Flagship with 50MP + 50MP + 64MP Camera",
        "Oppo Reno 11 5G (Wave Green,128 GB) (8 GB RAM)"
    ];

    const prices = ["12,999", "13,999","17,999","39,999","31,147","1,48,900","42,999","1,39,999","43,999","24,649","25,745","63,999","32,987","72,200","52,999","28,299"];

    const images = [
        "/assets/cateorgyWisePhoto/phone/redmi12.png",
        "/assets/cateorgyWisePhoto/phone/oppoa59.png",
        "/assets/cateorgyWisePhoto/phone/redminote13.png",
        "/assets/cateorgyWisePhoto/phone/oneplus12r.png",
        "/assets/cateorgyWisePhoto/phone/vivov29.png",
        "/assets/cateorgyWisePhoto/phone/iphone15promax.png",
        "/assets/cateorgyWisePhoto/phone/samsunga73.png",
        "/assets/cateorgyWisePhoto/phone/samsungs24.png",
        "/assets/cateorgyWisePhoto/phone/pixel7.png",
        "/assets/cateorgyWisePhoto/phone/realme12pro.png",
        "/assets/cateorgyWisePhoto/phone/honor90.png",
        "/assets/cateorgyWisePhoto/phone/vivox100.png",
        "/assets/cateorgyWisePhoto/phone/redmi13pro+.png",
        "/assets/cateorgyWisePhoto/phone/iphone15.png",
        "/assets/cateorgyWisePhoto/phone/iqoo12.png",
        "/assets/cateorgyWisePhoto/phone/opporeno11.png"
    ];

    const router = useRouter();

    const handleDivClick = (title:any, price:any, image:any) => {
        // Navigate to the second page with the title, price, and image query parameters
        router.push(`/components/Category/displayPage?title=${encodeURIComponent(title)}&price=${encodeURIComponent(price)}&image=${encodeURIComponent(image)}`);
    };

    return (
        <>
            <div className="flex flex-wrap m-0 p-0">
  {titles.map((title, index) => (
    <div key={index} className={`max-w-sm rounded overflow-hidden shadow-lg m-4 cursor-pointer ${index < 3 ? 'mt-24' : ''}`} onClick={() => handleDivClick(title, prices[index], images[index])}>
      <div className="img h-44 w-44 flex justify-center items-center"> {/* Set fixed height and width */}
        <img src={images[index]} alt="Phone" className="w-full h-full object-cover" /> {/* Apply object-cover to ensure images fit inside */}
      </div>
      <div className="px-4 py-2">
        <div className="font-bold text-lg mb-1">{title}</div>
        <p className="text-gray-700 text-base mb-1">Price: ₹{prices[index]}</p>
        {/* Add the rating div here */}
        <div className="flex items-center">
          <svg className="fill-current text-gray-500 w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
          </svg>
          {/* <p className="text-gray-700">{ratings[index]}</p> */}
        </div>
        {/* End of rating div */}
        <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View Details</button>
      </div>
    </div>
  ))}
</div>
       
        </>
    );
}

export default Phone;
