---
title: "Homework 12"
---

Exercise: Suppose $f:\mathbb{R}\rightarrow\mathbb{R}$ is continuous on $\mathbb{R}$, and differentiable in $\mathbb{R}\backslash\{a\}$. Suppose further that $\lim_{x\rightarrow a}f'(x)$ exists. Prove that $f$ is differentiable at $a$, and $f'(a)=\lim_{x\rightarrow a}f'(x)$.

Proof. Let $\{a_n\}$ be a sequence of real numbers approaching $a$, but none of them are equal to $a$. We want to show that under the given assumption the sequence $\frac{f(a_n)-f(a)}{a_n-a}$ has a limit. By the mean value theorem, for each $a_n$, there is a $b_n$ sitting between $a$ and $a_n$ such that $\frac{f(a_n)-f(a)}{a_n-a}=f'(b_n)$. As $b_n$ is also converging to $a$ and $f'(x)$ is continuous at $a$. So the limit exists and it&#8217;s equal to $\lim_{x\rightarrow a}f'(x)$.

Exercise: Suppose for some integer $n\geq 2$ that the derivatives $f', \ldots, f^{(n)}$ exist and are continuous on an open interval $I$ containing $x_0$ and that $f'(x_0)=\ldots=f^{(n-1)}(x_0)=0$, but $f^{(n)}\neq 0$. Use Taylor&#8217;s Theorem to prove:

  1. If $n$ is even and $f^{(n)}(x_0)<0$ then $f$ has a local maximum at $x_0$.
  2. If $n$ is even and $f^{(n)}(x_0)>0$ then $f$ has a local minimum at $x_0$.
  3. If $n$ is odd then $f$ has neither a local maximum nor a local minimum at $x_0$.

Proof. By the assumptions, $f(x)=f(x_0)+(a_n+h(x))(x-x_0)^n$ where $a_n=\frac{f^{(n)}(x_0)}{n!}$ and $\lim_{x\rightarrow x_0}h(x)=0$.

  1. If $a_n>0$, as $\lim_{x\rightarrow x_0}h(x)=0$, there is a neighborhood of $x_0$, denoted as $I_0$, such that $a_n+h(x)<0$ for every $x\in I_0$. Since $n$ is even, $f(x)-f(x_0)=(a_n+h(x))(x-x_0)^n\leq 0$ for every $x\in I_0$. And the equality holds if and only if $x=x_0$. So $f$ achieves a local miximum at $x_0$.
  2. The same reasoning as above but with all the inequalities reversed.
  3. Suppose $a_n>0$. The same argument tells us that for every $x\in I_0$, $f(x)-f(x_0)=(a_n+h(x))(x-x_0)^n$ has the same sign as $x-x_0$ if $n$ is odd. Thus $f$ has no local extremal at $x_0$. Suppose $a_n<0$, one can argue $f(x)-f(x_0)=(a_n+h(x))(x-x_0)^n$ has the opposite sign of $x-x_0$. Thus the same.

Exercise:

  1. Suppose $f(x)=c$ for all $x\in[0,1]$. Prove that $f$ is Riemann integrable and $\int_0^1 f(x)dx=c$.
  2. Suppose $f(x)=x$ for all $x\in[0,1]$. Prove that $f$ is Riemann integrable and $\int_0^1f(x)dx=\frac{1}{2}$.
  3. Suppose $f:[0,1]\rightarrow\mathbb{R}$, $f(x)=0$ for all $x\in[0,1]$ except that $f(x)=1$ for $x=\frac{1}{2}$. Prove that $f$ is Riemann integrable and $\int_0^1f(x)dx=0$.

Proof.

  1. Whichever partition you choose, the Riemann sum is always $c$. So the integral is $c$.
  2. Let a partition $P$ be $0 = x_0 < x_1 < \ldots < x_n = 1)$ with all gaps less than $\delta$. The the lower Riemann sum is $x_0(x_1-x_0)+x_1(x_2-x_1)+\ldots+x_{n-1}(x_n-x_{n-1})$, while the upper one is $x_1(x_1-x_0)+x_2(x_2-x_1)+\ldots+x_{n}(x_n-x_{n-1})$. The difference between the two sums is $(x_1-x_0)^2+(x_2-x_1)^2+\ldots+(x_n-x_{n-1})^2$, which is less than $\delta((x_1-x_0)+(x_2-x_1)+\ldots+(x_n-x_{n-1}))=\delta$. So $f$ is Riemann integrable. To calculate to value of the integral, just look at the average of the lower sum and the upper sum, which turns out to be $1/2$.
  3. Same argument as the previous one, but upper one is less than $\delta$, while the lower equals $$. Hence the integral is $$.

Exercise: Suppose $f:[0,1]\rightarrow\mathbb{R}$ is continuous, $f(x)\geq 0$ for all $x\in[0,1]$, and $\int_0^1f(x)dx=0$. Prove that $f(x)=0$ for all $x\in[0,1]$.

Proof. (Sketch) Suppose for contradiction that $f(x_0)>0$ for some $x_0\in[0,1]$. As $f$ is continuos, there is a non-empty interval $(a,b)\subset[0,1]$ on which $f$ is bigger than $h=f(x_0)/2>0$. Thus the integral is greater than or equal to $h(a-b)$ which is positive. Contradiction.
