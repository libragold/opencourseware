---
title: "Homework 9"
---

If not stated otherwise, we assume that the metric spaces $\mathbb{R}$ and $\mathbb{Q}$ are quipped with the Euclidean metric $d(x,y)=|x-y|$.

Exercise: If $K\subset\mathbb{R}$ and $f:K\rightarrow\mathbb{R}$ is continuous. Show that either $f(x)=0$ for some $x\in K$ or there exists $n\in\mathbb{N}$ such that $|f(x)|>1/n$ for all $x\in K$.

Proof. Since $f$ is continuos and $K$ is compact, $f(K)$ is a compact subset of $\mathbb{R}$, hence is closed. If $0\notin f(K)$, then there exists $n\in\mathbb{N}$ such that $[-1/n, 1/n]\cap f(K)=\emptyset$, which gives us that $|f(x)|>1/n$ for all $x\in K$.

Exercise: Let $I=[0,1]$ be the closed unit interval. Suppose $f$ is a continuous mapping from $I$ to $I$. Prove that there exists at least one $x\in I$ such that $f(x)=x$. Hint: Consider the function $g(x)=f(x)-x$.

Proof. Since $g(0)=f(0)-0\geq 0$ and $g(1)=f(1)-1\leq 0$, by the intermediate value theorem, there exists at least one $x\in I$ such that $g(x)=0$, i.e., $f(x)=x$.

Exercise: Give an example (with proof) of two real-valued functions $f$ and $g$ which are uniformly continuous, but whose product $f\cdot g$ is not uniformly continuous.

Proof. (An example without proof) Let $f(x)=g(x)=x$ for all $x\in\mathbb{R}$.

Exercise: Let $f:E\rightarrow\mathbb{R}$ be a uniformly continuous function on the open interval $E=(a,b)\subset\mathbb{R}$. Show that $f$ can be extended to a uniformly continuos function on the closed interval $[a,b]$. More precisely, show that there is a uniformly continuous function $g:[a,b]\rightarrow\mathbb{R}$such that $f(x)=g(x)$ for all $x\in (a,b)$. Hint: show first that $\lim_{x\rightarrow a}f(x)$ and $\lim_{x\rightarrow b}f(x)$ exist.

Proof. (Sketch) Following the hint, we first prove that the limits exist.

Claim: For any sequence $\{a_n\}$ that converges to $a$, the sequence $\{f(a_n)\}$ is actually a Cauchy sequence in $\{\mathbb{R}\}$, thus converges.

Proof of claim: to show that $\{f(a_n)\}$ is a Cauchy sequence, it&#8217;s sufficient to show that for every $\epsilon>0$, there is $N$ such that if $m,n\geq N$ then $|f(a_m)-f(a_n)|<\epsilon$. Pick your favorite $\epsilon$ first. As $f$ is uniformly continuous, there is $\delta> 0$ such that for any $x,y\in(a,b)$ if $|x-y|\delta$, $|f(x)-f(y)|<\epsilon$. As $\{a_n\}$ converges to $a$, there is $N$ such that for all $n\geq N$, $|a_n-a|<\delta/2$. Thus for any $m,n\geq N$, $|a_m-a_n|\leq|a_m-a|+|a_n-a|<\delta$, whence $|f(a_m)-f(a_n)|<\epsilon$.

Now, we&#8217;ve shown that for every sequence $\{a_n\}$ that converges to $a$, the sequence $\{f(a_n)\}$ converges. But how do you know for two different sequences $\{a_n\}$ and $\{b_n\}$ that converge to $a$, $\{f(a_n)\}$ and $\{f(b_n)\}$ have the same limit?

There is a slick way to resolve this. We can mingle $\{a_n\}$ and $\{b_n\}$ together. Specifically, consider a new sequence $\{a_1, b_1, a_2, b_2, \ldots\}$, denoted as $c_n$. Now $c_n$ converges to $a$, so $\{f(c_n)\}$ converges. Meanwhile, we know that $\{f(a_n)\}$ and $\{f(b_n)\}$ are two subsequences of $\{f(c_n)\}$, so they share the same limit.

Now we can extend $f$ to $g$ by feeding in the limits at $a$ and $b$. Since $g$ is a continuous function on a closed interval $[a,b]$, its uniformly continuity follows immediately.

Exercise: Let $a< b$ be real numbers. A function $f:(a,b)\rightarrow\mathbb{R}$ is said to be convex if  

$$f(\lambda x+(1-\lambda)y)\leq f(x)+(1-\lambda)f(y) \text{ for all } x,y\in(a,b) \text{ and all } \lambda\in (0,1).$$
  
Prove that every convex function is continuos. Hint: prove first that if $a<s<t<u<b$, then  

$$\frac{f(t)-f(s)}{t-s}\leq\frac{f(u)-f(s)}{u-s}\leq\frac{f(u)-f(t)}{u-t}$$

Proof. First, we prove the first inequality in the hint. Notice that  

$$\frac{f(t)-f(s)}{t-s}\leq\frac{f(u)-f(s)}{u-s}$$
  
is equivalent to  

$$f(t)\leq\frac{t-s}{u-s}f(u)+\frac{u-t}{u-s}f(s).$$

But notice that if we take $x=u$, $y=s$ and $\lambda=\frac{t-s}{u-s}$ and plug them into the convexity inequality, the above inequality holds immediately. Similarly, we can prove the second inequality in the hint.

For $a<x<y<b$, let $k(x,y)=\frac{f(x)-f(y)}{x-y}$. By the inequality chain in the hint, we know that if $a<s<t<u<b$, $k(s,t)\leq k(s,u)\leq k(t,u)$. Now for any $x\in(a,b)$ and $\epsilon>0$, pick $\delta\in(0,\epsilon)$ such that $a<x-\delta<x+\delta<b$ and $x_1\in(a,x-\delta), x_2\in(x+\delta,b)$. For any $y\in(x-\delta,x+\delta)$, by the chain inequality in the hint, $k(x,y)$ is bounded below by $k(x_1,x)$ and is bounded above $k(x,x_2)$. Thus there is $B$ such that $|k(x,y)|<B$ for all $y\in(x-\delta,x+\delta)$. Whence, for all $y\in(x-\delta/B, x+\delta/B)$, $|f(x)-f(y)|<B|x-y|<\delta<epsilon$. This shows that $f$ is continuous.
