// fetchData.js
const fetchData = async (searchPrompt:any) => {
    try {
        const response = await fetch(`/api/scrapProduct/displayRequest?url=${searchPrompt}`);
        const jsonData = await response.json();
        console.log(jsonData.allData);
        return jsonData.allData; // Return the fetched data
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Throw the error to handle it in the component
    }
};

export default fetchData;