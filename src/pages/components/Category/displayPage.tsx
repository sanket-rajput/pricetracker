import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import fetchData from "./diplayCategoryProductResult"; // Assuming this function fetches data from an API
import Footer from "../Footer";
import LoadingAnimation from '../../../../public/assets/loading-2.json';
import Lottie from "lottie-react";
// import CustomLayout from "../CustomLayout";

// Define a TypeScript interface for the data structure
interface ProductData {
  title1: string;
  price1: string;
  image1: string;
  des1: string;
  rating1: string;
  title2: string;
  price2: string;
  image2: string;
  des2: string;
  rating2: string;
  url1: string;
  url2: string;
  savedRuppes: string,
  platform1logo: string,
  platform2logo: string,
  platform1: string,
  platform2: string
}

function DisplayProduct() {
  const router = useRouter();
  const { title } = router.query;
  const [productData, setProductData] = useState<ProductData | null>(null); // You can define a type for productData if possible
  const [loading, setLoading] = useState<boolean>(true); // State to track loading status

  const handleBuyNowClickFirstPlatform = () => {
    window.open(productData?.url1, '_blank');
  };

  const handleBuyNowClickSecondPlatform = () => {
    window.open(productData?.url2, '_blank');
  };
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        console.log(title);
        const data = await fetchData(title); // Call fetchData with title
        setProductData(data); // Set fetched data to state
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Set loading to false after fetching data (whether successful or not)
      }
    };

    if (title) {
      fetchProductData();
    }
  }, [title]); // Fetch data whenever title changes

  return (
    <>
      {/* <CustomLayout> */}


      <div style={{ marginTop: '150px' }} className="ml-20 mr-20 mb-10">
        {/* Render fetched product data */}
        {!loading && productData && (
          <div className="max-w-full mx-auto p-6 border rounded-lg shadow-md flex bg-white dark:bg-gray-800 font-roboto">
            <div style={{ paddingTop:"15px",paddingBottom:"15px", width: '400px', height: '450px', backgroundColor: "white", borderRadius: "5px" }} className="flex-shrink-0 mr-6">
              <img src={productData.image1} alt={productData.title1} className="w-full h-full object-contain rounded-lg" />
            </div>

            {/* Title of the product */}
            <div className="flex flex-col justify-between w-full">
              <div>
                <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-2">{productData.title1}</h2>

              </div>

              {/* First Ecommerce Website Link or details */}
              <div className="flex" style={{ border: '3px solid white', padding: '10px', marginTop: "5px", justifyContent:"space-around" }}>
                <div style={{ height: "90px", width: "130px", alignItems: "center", justifyContent: 'center', display: 'flex' }}>
                  <img src={productData.platform1logo}></img>
                </div>
                <div className="ml-10" style={{ display: 'flex', alignItems: "center" }}>
                  <p style={{fontSize:"25px"}} className="text-xl mr-10 font-bold text-gray-900 dark:text-gray-200 ">₹ {productData.price1}</p>
                  <p style={{fontSize:"25px"}} className="text-xl font-bold text-gray-900 dark:text-gray-200">Rating: {productData.rating1}</p>

                </div>

                <div className="ml-10" style={{ height: "70px", alignItems: "center", justifyContent: 'center', display: 'flex' }}>
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-lg self-end" onClick={handleBuyNowClickFirstPlatform}>
                    Buy From {productData.platform1}
                  </button>
                </div>
              </div>

              {/* Second Ecommerce Website Link or details */}
              <div className="flex" style={{ border: '3px solid white', padding: '10px', marginTop: "10px", justifyContent:"space-around"}}>
                <div style={{ height: "90px", width: "130px", alignItems: "center", justifyContent: 'center', display: 'flex' }}>
                  <img src={productData.platform2logo}></img>
                </div>

                <div className="ml-10" style={{ display: 'flex', alignItems: "center" }}>
                  <p style={{fontSize:"25px"}} className="text-xl mr-10 font-bold text-gray-900 dark:text-gray-200 ">₹ {productData.price2}</p>
                  <p style={{fontSize:"25px"}} className="text-xl font-bold text-gray-900 dark:text-gray-200">Rating: {productData.rating2}</p>

                </div>


                <div className="ml-10" style={{ height: "70px", alignItems: "center", justifyContent: 'center', display: 'flex' }}>
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-lg self-end" onClick={handleBuyNowClickSecondPlatform}>
                    Buy From {productData.platform2}
                  </button>
                </div>

              </div>



              <div>
                {/* Desciption of the product */}
                <div className="flex items-center mb-2">
                  {/* {renderRatingStars(product.rating)} */}
                </div>
                <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-2">Description</h2>
                <p className="text-white-200  text-justify dark:text-gray-300 mb-4">{productData.des1}</p>
              </div>

            </div>
          </div>
        )}

        <div className="m-auto">
          {loading && (
            <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-200 bg-opacity-75">
              <div className="text-center">
                <div className="w-96 h-96 mx-auto">
                  <Lottie animationData={LoadingAnimation} />
                  <p className="mt-4 text-gray-700">Loading please wait...</p>
                </div>
              </div>
            </div>
          )}
        </div>



      </div>
      {/* </CustomLayout> */}

    </>

  );
};

DisplayProduct.getLayout = (page: React.ReactNode) => {
  return <>{page}</>;
};

export default DisplayProduct;
