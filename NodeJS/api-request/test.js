const axios = require("axios");
// const cTable = require("console.table");
// const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const url = "https://api.adviceslip.com/advice";

const getRequest = async () => {
    try {
        const response = await axios.get(url);
        // console.log(response.data);
        return response;
    } catch (error) {
        console.log(error);
    }
};

(async () => {
    const response = await getRequest()

    console.log(response);
})()

