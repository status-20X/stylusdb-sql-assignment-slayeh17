// tests/index.test.js

test("Basic Jest Test", () => {
    expect(1).toBe(1);
});

// src/csvReader.js

const fs = require("fs");
const csv = require("csv-parser");

function readCSV(filePath) {
    const results = [];

    return new Promise((resolve, reject) => {
        fs.createReadStream(filePath)
            .pipe(csv())
            .on("data", (data) => results.push(data))
            .on("end", () => {
                resolve(results);
            })
            .on("error", (error) => {
                reject(error);
            });
    });
}

module.exports = readCSV;
