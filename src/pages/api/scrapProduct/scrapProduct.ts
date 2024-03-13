import puppeteer from "puppeteer";
import f_scrap from "./scrap";
import compareProduct from "./compareProduct"
import { browser } from "process";


// product title selector
const amazonTitleSelector = "span#productTitle";
const flipkartTitleSelector = "span.B_NuCI";

// product price selector
const amazonPriceSelector = "span.a-price-whole";
const flipkartPriceSelector = "div._30jeq3._16Jk6d";

// product image selector 
const amazonImageSelector = "img#landingImage";
const flipkartImageSelector = "img._396cs4._2amPTt._3qGmMb";

// product description selector
const amazoanDescriptionSelector = "ul.a-unordered-list.a-vertical.a-spacing-mini";
const flipkartDescriptionSelector = "div._1mXcCf.RmoJUa";

// product rating selector 
const amazoanRatingSelector = "span.a-icon-alt";
const flipkartRatingSelector = "div._3LWZlK";

//product search link
const amazoanSearchLink = "https://www.amazon.in/s?k="
const flipkartSearchLink = "https://www.flipkart.com/search?q=$";

//product link picker selector while second product is been scraped
const amazoanLinkPicker = "a.a-link-normal.s-underline-text.s-underline-link-text.s-link-style.a-text-normal";
const flipkartLinkPicker = "a._1fQZEK";



async function scrapProduct(url: any, ecommercePlatform: any) {
    try {

        //Scrap product

        let f_scrapData, s_scrapData;
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        if (ecommercePlatform == "amazoan") {

            f_scrapData = await f_scrap(page, url, amazonTitleSelector, amazonPriceSelector, amazonImageSelector, amazoanDescriptionSelector, amazoanRatingSelector);
            await page.goto(`${flipkartSearchLink}${encodeURIComponent(f_scrapData?.title)}`, { waitUntil: 'domcontentloaded' });
            const productUrl = await page.$eval(flipkartLinkPicker, (element: any) => element.href);
            s_scrapData = await f_scrap(page, productUrl, flipkartTitleSelector, flipkartPriceSelector, flipkartImageSelector, flipkartDescriptionSelector, flipkartRatingSelector);
        }
        else if (ecommercePlatform == "flipkart") {

            s_scrapData = await f_scrap(page, url, flipkartTitleSelector, flipkartPriceSelector, flipkartImageSelector, flipkartDescriptionSelector, flipkartRatingSelector);
            await page.goto(`${amazoanSearchLink}${encodeURIComponent(s_scrapData?.title)}`, { waitUntil: 'domcontentloaded' });
            const productUrl = await page.$eval(amazoanLinkPicker, (element: any) => element.href);
            f_scrapData = await f_scrap(page, productUrl, amazonTitleSelector, amazonPriceSelector, amazonImageSelector, amazoanDescriptionSelector, amazoanRatingSelector);

        }
        else {console.log("HI");
            // scrap from amazoan platform through title provided by the user
            await page.goto(`${amazoanSearchLink}${encodeURIComponent(url)}`, { waitUntil: 'domcontentloaded' });
            const productUrl1 = await page.$eval(amazoanLinkPicker, (element: any) => element.href);
            f_scrapData = await f_scrap(page, productUrl1, amazonTitleSelector, amazonPriceSelector, amazonImageSelector, amazoanDescriptionSelector, amazoanRatingSelector);

            // scrap from flipkart platform through title provided by the upper statements
            await page.goto(`${flipkartSearchLink}${encodeURIComponent(f_scrapData?.title)}`, { waitUntil: 'domcontentloaded' });
            const productUrl2 = await page.$eval(flipkartLinkPicker, (element: any) => element.href);
            s_scrapData = await f_scrap(page, productUrl2, flipkartTitleSelector, flipkartPriceSelector, flipkartImageSelector, flipkartDescriptionSelector, flipkartRatingSelector);
        }
        browser.close();
        let comparedDetails = await compareProduct(f_scrapData, s_scrapData);
        return (comparedDetails);


    } catch (error) {

    }
}

export default scrapProduct;