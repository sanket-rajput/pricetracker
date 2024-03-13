import identifyEcommercePlatform from "./identifyEcommercePlatform";
import scrapProduct from "./scrapProduct";


async function scrapeAndStoreProduct(productUrl: any) {
    if (!productUrl) return;

    const identifiedPlatform = await identifyEcommercePlatform(productUrl)
    console.log(`The URL is from: ${identifiedPlatform}`);

    try {
        if (identifiedPlatform == "Flipkart") {
            // process scrapedFlipkartProduct as needed
            const scrapedProduct = await scrapProduct(productUrl, "flipkart");
            return (scrapedProduct);
        } else if (identifiedPlatform == "Amazoan") {
            // process scrapedAmazonProduct as needed
            const scrapedProduct = await scrapProduct(productUrl, "amazoan");
            return (scrapedProduct);
        } else {
            // Handle the case where the platform is unknown
            const scrapedProduct = await scrapProduct(productUrl, "search");
            return (scrapedProduct);
        }

    } catch (error: any) {
        throw new Error(`Failed to create/update product: ${error.message}`);
    }
}

export default scrapeAndStoreProduct;