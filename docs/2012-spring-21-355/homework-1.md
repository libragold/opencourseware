---
title: "Homework 1"
---

Throughout the course, we take $\mathbb{N}=\{1, 2, 3, \ldots\}$ as the set of natural numbers.

Exercise. For each subset of $\mathbb{R}$, give its maximum, minimum, supremum and infimum, if they exist:
$$\{0, 8\}, (3, \infty), \left\{(-1)^n\cdot \left(1+\frac{1}{n}\right): n\in\mathbb{N}\right\}, \left\{ \frac{n}{n+1} : n\in\mathbb{N}\right\}$$

Proof.

| Set | Maximum | Minimum | Supremum | Infimum |
|---|---|---|---|---|
| $\{0, 8\}$ | 8 | | 8 | |
| $(3, \infty)$ | – | – | – | 3 |
| $\left\{(-1)^n\cdot \left(1+\frac{1}{n}\right): n\in\mathbb{N}\right\}$ | 3/2 | -2 | 3/2 | -2 |
| $\left\{ \frac{n}{n+1} : n\in\mathbb{N}\right\}$ | – | 1/2 | 1 | 1/2 |

Exercise: Prove that for any real number $x$, there exists an integer $m$ such that $m-1\leq x<m.$

Proof (sketch). Let $A=\left\{ m\in\mathbb{Z} : x<m\right\}$. Use Archimedean property to prove that $A$ is not empty and bounded below. Take $m$, the infimum of $A$ and prove that $m$ satisfies the property.

Exercise: Chapter 1, Ex 1

Proof (sketch). Prove by contradiction.

Exercise: Chapter 1, Ex 2

Proof. Suppose there exist two non-zero rational numbers $p, q$ such that
$$12=\left(\frac{p}{q}\right)^2.$$
We have
$$12\cdot q^2=p^2.$$
By the [fundamental theorem of arithmetic][1], the left-hand side has odd number of factors of 3, while the right-hand side even. Contradiction.

Exercise: Chapter 1, Ex 3

Proof. First, notice that $(1/x)x=x(1/x)=1$. For (a), the axioms (B) give $y=1y=((1/x)x)y=(1/x)(xy)=(1/x)(xz)=((1/x)x)z=1z=z$.  
For (b), as $xy=x=1x=x1$. By (a), we have $y=1$.  
For (c), as $xy=1=x(1/x)$. By (a), we have $y=1/x$.  
Subquestion (d) is a little bit tricky. One might start to argue as the following.  
Since $(1/x)x=x(1/x)=1$, by (c) we have $x=1/(1/x)$.  
But to use (c), one need to verify that $1/x\neq 0$. Also $1/(1/x)$ only makes sense when $1/x\neq 0$.  
We prove by contradiction. Suppose $1/x = 0$. Then $1=x(1/x)=x0=0x=0$. Contradiction. This finishes the proof for (d).

Exercise: Chapter 1, Ex 4

Proof (sketch). For $E$ is nonempty, pick any element in it and compare it with $\alpha, \beta$.

Exercise: Chapter 1, Ex 5

Proof (sketch). Denote $\alpha=\inf A$. Prove that $-\alpha$ is an upper bound of $-A$ and it is the least one.

Exercise: Chapter 1, Ex 8

Proof. Suppose an order can be defined in the complex field to turn it into an ordered field. Then $0<i^2=-1<0$. Contradiction.

Exercise: Chapter 1, Ex 9

Proof (sketch). Verify the lexicographic relation is really an order first. Now consider the y-axis and prove that it is non-empty and bounded above but it does not have the least upper bound. Thus under the dictionary order, the set of complex numbers does not have the least-upper-bound property. (Update: By y-axis, I mean all of the complex numbers whose real part is zero. And under lexicographic order, they are bounded by 1 from the top.)

Exercise: Chapter 1, Ex 13

Proof (sketch). View the complex numbers as the two dimensional Euclidean space. Then let $z=0$ in theorem 1.37(f) to get $\lvert x\rvert\leq\lvert x-y\rvert+\lvert y\rvert$. Switch $x$ and $y$, we have $\lvert y\rvert\leq\lvert y-x\rvert+\lvert x\rvert$. Finally, combine the two inequalities together.

 [1]: http://en.wikipedia.org/wiki/Fundamental_theorem_of_arithmetic
