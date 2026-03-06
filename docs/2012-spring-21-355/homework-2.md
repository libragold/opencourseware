---
title: "Homework 2"
---

Exercise: Let $A,B,C$ be sets and let $f:A\rightarrow B, g:B\rightarrow C$ be functions. The composite function $g\circ f:A\rightarrow C$ is defined as follows: $g\circ f(x)=g(f(x))$. Prove:

<ol>
  <li>
    If $f$ and $g$ are injective, then $g\circ f$ is injective.
  </li>
  <li>
    If $g\circ f$ is injective, then $g\circ f$ is injective.
  </li>
  <li>
    If $f$ is onto $B$ and $g$ is onto $C$, then $g\circ f$ is onto $C$.
  </li>
  <li>
    If $g\circ f$ is onto $C$, then $g$ is onto $C$.
  </li>
  <li>
    If $g\circ f$ is injective and $f$ is onto $B$, then $g$ is injective.
  </li>
  <li>
    If $g\circ f$ is onto $C$ and $g$ is injective, then $f$ is onto $B$.
  </li>
</ol>

Proof (general idea). To prove a function is an injection, always pick two elements in its domain whose values are the same and try to use the given conditions to show these two elements coincide with each other. On the other hand, to show a function is surjective onto a certain set, try to find the pre-image for everyone in that set.

Exercise: Let $A$ be a set, and let $f:A\rightarrow A$ be a function such that for all functions $g: A\rightarrow A$, the identity $f\circ g=g\circ f$ holds. Prove that $f:id_A$.

Proof. Pick any element $a\in A$, and let $g$ be the constant function which maps everything to $a$. As $f\circ g=g\circ f$, we have $f(a)=a$.

Exercise: Show the relation $\sim$ (two sets are equivalent if there exists a 1-1 mapping from one onto the other) is an equivalence relation.

Proof. (Sketch) For reflexivity, think of the identity function. For symmetry, consider the inverse function. For transitivity, use the fact that the composite of two bijections is a bijection.

Exercise: Are the following sets finite, countable or uncountable? Explain your answer in each case.

<ol>
  <li>
    $\left\{(x,y)\in\mathbb{N}\times\mathbb{R}\:xy=1\right\}$
  </li>
  <li>
    $(1/4,3/4)$
  </li>
  <li>
    $\left\{x=a+b\sqrt{2}:a,b\in\mathbb{Q}\right\}$
  </li>
  <li>
    $\mathbb{R}\backslash\mathbb{Q}$
  </li>
  <li>
    $\bigcap^\infty_{n=1}(-1/n, 1/n)$
  </li>
  <li>
    $\left\{A\subset\mathbb{N}:A \text{ is finite, or } \mathbb{N}\backslash A \text{ is finite}\right\}$
  </li>
  <li>
    $\mathcal{P}(\mathbb{N}):=\{A\subset\mathbb{N}\}$
  </li>
</ol>

Proof. (Sketch)

<ol>
  <li>
    The projection that maps $(x, y)$ to its first coordinate $x$ is a bijection from the given set to the natural numbers. Thus its countable.
  </li>
  <li>
    Suppose $(1/4,3/4)$ is finite or countable (or say at most countable), then we can express the reals as the countable union of translations of $(1/4,3/4)$. To be specific, they are $(1/4,3/4)$. Thus the reals are countable which contradicts with the fact that the reals are uncountable. Another way to prove is to give an explicit bijection form $(1/4,3/4)$ to $\mathbb{R}$. One of them those bijection is $x\mapsto\tan((2x-1)\pi)$.
  </li>
  <li>
    Define a function from $\mathbb{Q}\times\mathbb{Q}$ to the given set such that $(a,b)$ is mapped to $a+b\sqrt{2}$ and prove it&#8217;s a bijection.
  </li>
  <li>
    Suppose the irrationals are countable, plus the fact that rationals are countable, as reals are the union of rationals and irrationals, we get a contradiction.
  </li>
  <li>
    It&#8217;s $\{0\}$, so it&#8217;s finite.
  </li>
  <li>
    The given set is the union of the set $F$ that consists of all finite subsets of natural numbers and the set $CF$ that consists of all co-finite subsets of natural numbers. There is a natural bijection between $F$ and $CF$ which is $A\mapsto \mathbb{N}\backslash A$. Thus to prove the given set is countable, enough to show $F$ is countable. Notice that every finite subset of $\mathbb{N}$ is included in $\{1,2,\ldots, n\}$ for some $n\in\mathbb{N}$, so $F$ can be written as the set of all subsets of $\{1\}$ union the set of all subsets of $\{1,2\}$ union the set of all subsets of $\{1,2,3\}$ and so forth. So $F$ is the union of countably many finite sets, thus countable. This concludes the proof.
  </li>
  <li>
    Assume that there exists a bijection $f:\mathbb{N}\rightarrow\mathcal{P}(\mathbb{N})$ and consider the set $A=\{n\in\mathbb{N}:n\notin f(n)\}$. Let $a\in\mathbb{N}$ such that $f(a)=A$. Then $a\in A \Leftrightarrow a\in f(a) \Leftrightarrow a\notin A$, contradiction.
  </li>
</ol>
