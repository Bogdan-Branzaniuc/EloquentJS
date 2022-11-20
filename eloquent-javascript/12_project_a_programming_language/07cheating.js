// Cheating
// When we defined if and while, you probably noticed that they were more
// or less trivial wrappers around JavaScript’s own if and while. Similarly, the
// values in Egg are just regular old JavaScript values.
// If you compare the implementation of Egg, built on top of JavaScript, with
// the amount of work and complexity required to build a programming language
// directly on the raw functionality provided by a machine, the difference is huge.
// Regardless, this example ideally gave you an impression of the way programming languages work.
// And when it comes to getting something done, cheating is more effective than
// doing everything yourself. Though the toy language in this chapter doesn’t do
// anything that couldn’t be done better in JavaScript, there are situations where
// writing small languages helps get real work done.
// Such a language does not have to resemble a typical programming language.
// If JavaScript didn’t come equipped with regular expressions, for example, you
// could write your own parser and evaluator for regular expressions.
// Or imagine you are building a giant robotic dinosaur and need to program
// its behavior. JavaScript might not be the most effective way to do this. You
// might instead opt for a language that looks like this:
// behavior walk
// perform when
// destination ahead
// actions
// move left-foot
// 213
// move right-foot
// behavior attack
// perform when
// Godzilla in-view
// actions
// fire laser-eyes
// launch arm-rockets
// This is what is usually called a domain-specific language, a language tailored
// to express a narrow domain of knowledge. Such a language can be more expressive than a general-purpose language because it is designed to describe exactly
// the things that need to be described in its domain, and nothing else.
