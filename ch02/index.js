//
// A demonstration of the defining and lexical scopes.
//
// ```shell
// node index.js
// defining scope
// lexical scope
// ```
this.scope = "lexical scope";

const scopeOf = {
	scope: "defining scope",

	traditional: function() {
		return this.scope;
	},

	allow: () => {
		return this.scope;
	},
};

console.log(scopeOf.traditional());
console.log(scopeOf.allow());
