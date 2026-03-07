---
title: "Assignment C"
---

Sometimes proving a theorem syntactically can be painful and fruitless unless you have useful derived rules of inference. In this exercise, we are given a logistic system $\mathcal{L}$ which is totally different from the one that we are familiar with, namely $\mathcal{P}$, and we are asked to prove that every wff can be derived in this new system.

Common Mistakes:

* Few students failed to realize that we are given an axiom schema instead of one concrete axiom, meaning that we are given a set of axioms which finally turns out to be too &#8216;powerful&#8217; that can prove anything.
* You are not allowed to use either the primitive rules of inference in $\mathcal{P}$ or the derived ones without proving them in $\mathcal{L}$ again.
* Semantic reasoning is falsely used by few students. However, you are expected to use syntactical reasoning throughout your answer.

Several students gave formal proofs to the question which look pretty fancy. While the proofs are a little bit contrived hiding the motivation away. I really like the solutions from students who shed light on the essence of the axiom schema. Here are the key steps in the solution which I think is natural and elegant.

1. Rule of Substitution holds in $\mathcal{L}$
2. If $\vdash A\vee B$, then $\vdash B\vee C$.
3. If $\vdash A\vee B$, then $\vdash C\vee D$.
4. $\vdash A\vee B$.
5. $\vdash A\supset B$.
6. $\vdash A$.
