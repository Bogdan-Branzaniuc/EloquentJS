// Even when a request and its response are successfully delivered, the response
// may indicate failure—for example, if the request tries to use a request type
// that hasn’t been defined or the handler throws an error. To support this, send
// and defineRequestType follow the convention mentioned before, where the first
// argument passed to callbacks is the failure reason, if any, and the second is the
// actual result.
// These can be translated to promise resolution and rejection by our wrapper.
const { bigOak } = require("./crow-tech")
const { defineRequestType } = require("./crow-tech")

class Timeout extends Error { }

function request(nest, target, type, content) {    //smarter way of sending types of messages by requests 
    return new Promise((resolve, reject) => {
        let done = false;
        function attempt(n) {
            nest.send(target, type, content, (failed, value) => {
                done = true;
                if (failed) reject(failed);
                else resolve(value);
            });
            setTimeout(() => {
                if (done) return;
                else if (n < 3) attempt(n + 1);
                else reject(new Timeout("Timed out"));
            }, 250);
        }
        attempt(1);
    });
}

function requestType(name, handler) {    //just a way of wrapping the callbacks in a promisse
    defineRequestType(name, (nest, content, source,
        callback) => {
        try {
            Promise.resolve(handler(nest, content, source))
                .then(response => callback(null, response),
                    failure => callback(failure));
        } catch (exception) {
            callback(exception);
        }
    });
}

// requestType("note", (nest, content, source, done) => {
//     console.log(`${nest.name} received note: ${content} from: ${source}`);
//     //done();
// })

//request(bigOak, "Gilles' Garden", "note", "let's craw all at 7pm")

module.exports = { requestType, request }