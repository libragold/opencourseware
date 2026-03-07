---
title: "Assignment F"
---

Independence results like this are often established by semantics.

Common Mistakes:

* Few students forgot to show that MP preserves &#8216;truths&#8217;, thus they didn&#8217;t state that all theorems are &#8216;true&#8217;.
* Checking all possible valuations of the axiom schemata is crucial in the proof of independence.

Challenge: Prove that [Peirce&#8217;s Law][1] $A\supset B\supset A\supset A$ cannot be deduced by using only axiom schemata $A\supset .B\supset A$ and $[A\supset .B\supset C]\supset .A\supset B\supset .A\supset C$.

Hint: design a three-valued truth assignment and show that any consequence deduced from the axioms will always take value T and Peirce&#8217;s Law won&#8217;t. You may consider the following table and try to figure out what values x, y and z should take respectively.

| $A$ | $B$ | $A\supset B$ |
|---|---|---|
| T | T | T |
| T | M | M |
| T | F | F |
| M | T | x |
| M | M | y |
| M | F | z |
| F | T | T |
| F | M | T |
| F | F | T |

 [1]: http://en.wikipedia.org/wiki/Peirce's_law
