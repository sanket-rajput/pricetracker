async function identifyEcommercePlatform(url:any) {
    if(/amazon\.in|amazon\.com/.test(url))
    {
        return 'Amazoan'
    }   
    else if(/flipkart\.com/.test(url)){
        return 'Flipkart'
    } 
    else{
        return 'Search'
    }
}
export default identifyEcommercePlatform;