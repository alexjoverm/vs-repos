/**
 * Replaces variable literals in a a string denoted by {var}
 *
 * Example:
 *
 *   const helloMessage = 'Hello {name}!'
 *   const helloJohn = replace(helloMessage, { name: 'John' })
 *   console.log(helloJohn) // 'Hello John!'
 */
// module.exports = function replace(literal, vars) {
//   for (const [key, value] of Object.entries(vars)) {
//     literal = literal.replace(`{${key}}`, value);
//   }

//   return literal;
// };

export default class Calculator {
  _checkArgs(a, b) {
    if (a === undefined || b === undefined) {
      throw new Error("2 arguments are required");
    }
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("The arguments must be numbers");
    }
  }

  add(a, b) {
    this._checkArgs(a, b);
    return a + b;
  }

  subtract(a, b) {
    this._checkArgs(a, b);
    return a - b;
  }
}
