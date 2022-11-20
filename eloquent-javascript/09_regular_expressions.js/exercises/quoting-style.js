let text = "'I'm the cook,' he said, '   it's my job.'";
// Change this call.

console.log(text.replace(/\'/g, "\"").replace(/\b\"\b/g, "'"));
// → "I'm the cook," he said, "it's my job."

console.log(text.replace(/(^|\W)'|'(\W|$)/g, '$1"$2'));
// → "I'm the cook," he said, "it's my job."