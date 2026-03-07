---
title: "Homework 3"
---

Exercise: Find the interior of the following sets:

1. $\{\frac{1}{n}:n\in\mathbb{N}\}$
2. $[0,3]\cup(3,5)$
3. $\{x:|x|<2\}\cap\{x:|x|\geq 1\}$

Proof.

1. The interior is empty since for each point in the given set, it always has a neighborhood disjoint with the set.
2. The given set is actually $[0,5)$ whose interior is $(0,5)$.
3. Notice that it&#8217;s really the union of two intervals $(-2,-1],[1,2)$, thus the interior is $(-2,-1)\cup(1,2)$

Exercise: Classify the following sets of real numbers as open, closed or neither:

1. $\mathbb{R}\backslash\{2^n:n\in\mathbb{Z}\}$
2. $\mathbb{N}$
3. $\{x\in\mathbb{R}\backslash\mathbb{Q}:0<x<1\}$
4. $\{x\in\mathbb{Q}:0\leq x\leq 1\}$

Proof. (Sketch)

1. Neither. First, look at 0, an element in the given set. It has no neighborhood contained in the given set. Thus it&#8217;s not open. Second, look at 1, an element in the complement. Again, none of its neighborhood are contained in the complement. So the complement is not open, hence the given set is not closed.
2. Closed. Try to prove its complement is open.
3. Neither. Pick any irrational between 0 and 1, its neighborhood always has a rational. Thus it&#8217;s not open. On the other hand, pick any rational number between 0 and 1, its neighborhood always has an irrational. Thus its complement is not open.
4. Neither. Similar to the reason above.

Exercise:

1. Let $S$ and $T$ be subsets of some metric space $(X,d)$. Show $\overline{(S\cap T)}\subset \overline{S}\cap \overline{T}$.
2. Let $\{A_i\}_{i=1}^{\infty}$ be subsets of a metric space $X$. If $B_n=\bigcup_{i=1}^{n}A_i$, prove that $\bigcup_{i=1}^n\overline{A_i}=\overline{B_n}$.
3. Let $\{A_i\}_{i=1}^{\infty}$ be subsets of a metric space $X$. If $B=\bigcup_{i=1}^{n}A_i$, prove that $\bigcup_{i=1}^n\overline{A_i}\subset\overline{B}$.
4. Can the inclusions in a) and c) be proper? If so, give an example.

Proof.

1. As $\overline{S}$ is closed, and $S\cap T\subset S\subset\overline{S}$, we have $\overline{S\cap T}\subset\overline{S}$ as $\overline{S\cap T}$ is the smallest closed set that contains $S\cap T$. Similarly, $\overline{S\cap T}\subset\overline{T}$. So $\overline{S\cap T}\subset\overline{S}\cap\overline{T}$.
2. As $A_i\subset B_n$, $\overline{A_i}\subset\overline{B_n}$. Thus $\bigcup_{i=1}^n\overline{A_i}\subset\overline{B_n}$. On the other hand, we have $B_n=\bigcup_{i=1}^n{A_i}\subset\bigcup_{i=1}^n\overline{A_i}$, and $\bigcup_{i=1}^n\overline{A_i}$ is closed as it&#8217;s the union of finitely many closed sets. Thus $\overline{B_n}\subset\bigcup_{i=1}^n\overline{A_i}$.
3. Same proof as one direction of the previous.
4. For a), take $S=(-1,0), T=(0,1)$. For c), take $A_i=\{\frac{1}{i}\}$.

Exercise: Prove or give a counterexample: If $E$ is closed and contains so isolated points, then $E$ is perfect.

Proof. No isolated points means that all points are limit points. Thus by definition, it&#8217;s perfect.

Exercise: Determine whether or not each of the following functions defines a metric on $\mathbb{R}$.

1. $d(x,y)=\log\left(\frac{x}{y}\right)$
2. $d(x,y)=1-e^{|x-y|}$
3. $d(x,y)=||x|-|y||$

Proof.

1. Not a metric. It&#8217;s even not well-defined since the domain of log function contains only positive numbers.
2. Not a metric, since it can take negative values.
3. Not a metric since $d(-1,1)=0$

Exercise: Let $X$ be an infinite set. For $p,q\in X$, define

$$d(x,y)=\begin{cases}1&\text{if }p\neq q\\0&\text{if }p=q\end{cases}$$
 

Prove that this is a metric. Which subsets of the resulting metric space are open? Which are closed?

Proof. (Sketch) Easy to verify it&#8217;s a metric. Consider any subset, say $A$, of $X$. For any $x$ in $A$, think of its neighborhood with radius $1/2$, it really is the singleton $\{x\}$ which is included in $A$. Thus we&#8217;ve showed that $A$ is open. On the other hand, the complement of arbitrary set is also closed. So in conclusion, every subset is both open and closed. Remark: this kind of topology is called [discrete topology][1].

[1]: http://en.wikipedia.org/wiki/Discrete_space
