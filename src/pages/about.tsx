import React from 'react';
import Footer from './components/footer';

const AboutUsPage = () => {
    return (
        <>
        <div className="bg-gray-100 min-h-screen py-12 px-4 m-12 p-24 text-justify sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">About Us:</h1>
                <p className="text-lg text-gray-700 mb-6">
                    Welcome to PriceTraker, your premier destination for effortlessly finding the best prices on your favorite products across various e-commerce platforms. We understand the importance of saving time and money while shopping online, which is why we've developed a user-friendly tool to help you make informed purchasing decisions.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                    At PriceTraker, we're dedicated to simplifying the shopping experience for consumers like you. Whether you're searching for electronics, fashion items, home goods, or anything in between, our platform is designed to provide you with real-time pricing information from leading e-commerce websites.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                    Our team of experts has curated a database of products and prices from a wide range of online retailers. Using advanced algorithms and data analysis techniques, we compare prices across multiple platforms to ensure that you get the best deal possible. Whether it's Amazon, eBay, Walmart, or any other major online marketplace, we've got you covered.
                </p>
                <h2 className="text-2xl font-semibold mb-4">Why Choose PriceTraker?</h2>
                <ol className="list-decimal text-lg text-gray-700 mb-6">
                    <li>Seamless Price Comparison: Simply input the link or name of the product you're interested in, and we'll show you where it's available at the best price.</li>
                    <li>Instant Results: Our platform delivers fast and accurate results, saving you the hassle of manually comparing prices across different websites.</li>
                    <li>Transparent and Unbiased: We pride ourselves on providing transparent and unbiased information, so you can trust the results you receive.</li>
                    <li>User-Friendly Interface: Our intuitive interface makes it easy for users of all levels to navigate and find the information they need.</li>
                    <li>Save Time and Money: By leveraging our platform, you can save both time and money by quickly identifying the most cost-effective option for your desired product.</li>
                </ol>
                <p className="text-lg text-gray-700">
                    Whether you're a savvy shopper looking to stretch your budget or someone who simply wants to make sure they're getting the best deal, PriceTraker is here to help. Join us today and take the guesswork out of online shopping. Thank you for choosing PriceTraker as your go-to resource for finding the best prices on the products you love.
                </p>
                <h2 className="text-2xl font-semibold mb-4">How to Access the Tool:</h2>
                <ol className="list-decimal text-lg text-gray-700 mb-6">
                    <li>Visit Our Website: Go to [YourWebsite.com].</li>
                    <li>Input Product Information: Enter the link or name of the product you want to compare.</li>
                    <li>Click "Submit": Hit the submit button to see the comparison results instantly.</li>
                </ol>
                <p className="text-lg text-gray-700">
                    That's it! With just three simple steps, you can access our Product Price Comparison Tool and find the best deals across various e-commerce platforms.
                </p>
                
            </div>
            
        </div>
        {/* <Footer/> */}
        </>
    );
}

export default AboutUsPage;
