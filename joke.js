"use strict"

const axios  = require("axios");
const JOKES_API = "https://icanhazdadjoke.com";

async function getJoke() {
    const result = await axios.get(JOKES_API);
    return result.data.joke;
}

module.exports = {
    getJoke
};
