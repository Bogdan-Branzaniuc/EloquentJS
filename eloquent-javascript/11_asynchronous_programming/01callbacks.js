setTimeout(() => console.log("Tick"), 500)

const { bigOak } = require("./crow-tech")

console.log(bigOak)

bigOak.readStorage("food caches", caches => {
    let firstCache = caches[0];
    bigOak.readStorage(firstCache, info => {
        console.log(info);
    });
});

const { defineRequestType } = require("./crow-tech");
console.log(defineRequestType)

defineRequestType("note", (nest, content, source, done) => {
    console.log(`${nest.name} received note: ${content} from: ${source}`);
    done();
});

bigOak.send("Gilles' Garden", "note", "let's craw all at 7pm",
    (e) => e ? console.log(e) : undefined);
