const { readFileSync, writeFileSync } = require("fs");

console.log("start");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

// vytvoří novej file když path kterou deklarujeme nenajde spojení ( neni tam daný file) a potom když už existuje tak jenom přepíše jeho obsah o druhou proměnou
// flag by měl dělat to že nepřepisuje ale připisuje k tomu ( přidává za )
writeFileSync(
    "./content/result-sync.txt",
    `here is the result: ${first},${second}`,
    { flag: "a" }
);

console.log("done with this task");
console.log("starting the next one...");
