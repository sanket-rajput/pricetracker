import { NextApiRequest, NextApiResponse } from "next";
import scrapeAndStoreProduct from "./scrapAndStoreProduct";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const productUrl = req.query.url as string;

        const data = await scrapeAndStoreProduct(productUrl);
        const allData = {
            title1: data?.f_scrapData.title,
            price1: data?.f_scrapData.price,
            image1: data?.f_scrapData.image,
            des1: data?.f_scrapData.des,
            rating1: data?.f_scrapData.rating,
            url1: data?.f_scrapData.url,
            title2: data?.s_scrapData.title,
            price2: data?.s_scrapData.price,
            image2: data?.s_scrapData.image,
            des2: data?.s_scrapData.des,
            rating2: data?.s_scrapData.rating,
            url2: data?.s_scrapData.url
        }

        res.status(200).json({ allData });
    } catch (error) {
        console.error('Error running Puppeteer script:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
}