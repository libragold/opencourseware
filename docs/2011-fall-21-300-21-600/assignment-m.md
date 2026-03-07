---
title: "Assignment M"
---

The first two problems are designed to review the previous concepts, while the third is an exercise dealing with [prenex normal form][1].

Common Mistakes:

* In X2000(e), there are three occurrences of $z$ in the given formula, one of which is free. So to decide whether $gx$ is free for $z$, you are not supposed to check for those bound variables. In X2000(g), since there is no free occurrence of $x$, $u$ is free for $x$ vacuously.
* In 2200, you might want to calculate for every quantifier whether it occurs positively or negatively. Many students made a mistake on $\forall z$. Since it is under the scope of a $\sim$ and followed by an $\supset$, it occurs positively. Also, some students erased all negations together with all quantifiers, or put them in wrong places.

Highlight:

* Arash gives an interesting proof for X1223. His approach is based on a different interpretation to the syntax. By evaluating every propositional variable with integer values, he defines inductively the value of a wff along the formation of the wff by letting $\mathcal{V}~A=-\mathcal{V}A$ and $\mathcal{V}[A\vee B]=-\mathcal{V}\mathcal{A}-\mathcal{V}\mathcal{B}$. As a corollary, $\mathcal{V}[A\supset B]=\mathcal{V}\mathcal{A}-\mathcal{V}\mathcal{B}$. If is easy to verify the evaluation of each axiom scheme is always zero, and Modus Ponens preserves this property. Thus by induction on proof, we know the evaluation of each theorem of $\mathcal{K}$ is always zero. However, one can easily find integer evaluations for $p$ and $q$ so that the value of the given formula is not zero.

Comment:

* It is easy to prove that all theorems in $\mathcal{K}$ are always theorems of $\mathcal{P}$. The question rises, is it possible that a theorem in $\mathcal{P}$ is not a theorem in $\mathcal{K}$? Thanks to Arash&#8217;s method, we can answer this question immediately. One can prove that $p\supset .\sim p\supset q$ is not a theorem in $\mathcal{K}$ which is provable in $\mathcal{P}$.

[1]: http://en.wikipedia.org/wiki/Prenex_normal_form
