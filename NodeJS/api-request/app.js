const axios = require("axios");
const cTable = require("console.table");
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const url = "https://api.adviceslip.com/advice";

axios.get(url)
    .then(response => createTable(response.data))
    .catch(error => console.log(error));

function createTable(json) {

    const data = {id: json.slip.id, advice: json.slip.advice};
    
    const table = cTable.getTable([data]);

    console.log(table);

    const csvWriter = createCsvWriter({
        path: './file.csv',
        header: [
            {id: 'id', title: 'ID'},
            {id: 'advice', title: 'ADVICE'},
        ], 
        append: true
    });

    const records = [data];

    csvWriter.writeRecords(records) 
    .then(() => {console.log('...Done');
    });
}

