---
title: "Homework 8"
---

If not stated otherwise, we assume that the metric spaces $\mathbb{R}$ and $\mathbb{Q}$ are quipped with the Euclidean metric $d(x,y)=|x-y|$.

Exercise: Prove using the definition of continuity that the function $f:[0,\infty)\rightarrow\mathbb{R}$ defined by $f(x)=\sqrt{x}$ is continuous at every point $p\in[0,\infty)$.

Proof. Suppose $\epsilon>0$. Let $\delta=\epsilon^2$. If $|p-q|<\delta$, then $|f(p)-f(q)|^2\leq|\sqrt{p}-\sqrt{q}||\sqrt{p}+\sqrt{q}|=|p-q|<\epsilon^2$, i.e., $|f(p)-f(q)|<\epsilon$.

Exercise: Consider the function $f:\mathbb{R}\rightarrow\mathbb{R}$ defined by  

$$f(x)=\bigg\{{\begin{array}{cl}1/2^k&\text{if }|x|\in[1/2^k,1/2^{k-1}),\text{ for some } k\in\mathbb{Z},\\0&\text{if }x=0\end{array}}$$
  
Prove that $f$ is continuous at $x=0$.

Proof. Let $g(x)=0$ and $h(x)=|x|$. Since $g(x)\leq f(x)\leq h(x)$ and $g(0)=f(0)=h(0)$, by problem 5 and the continuity of $g(x)$ and $h(x)$, we know that $f$ is continuous at $$.

Exercise: Suppose $f:\mathbb{R}\rightarrow\mathbb{R}$ satisfies $\lim_{h\rightarrow 0}[f(x+h)-f(x-h)]=0$ for every $x\in\mathbb{R}$. Does this imply $f$ is continuous? Give a proof or a counterexample.

Proof. Suppose $f(x) = 0$ for all $x\in\mathbb{R}$ but $$, and $f(0)=1$. Then $f$ satisfies the requirement, but fails to be continuous.

Exercise: Suppose $(X,d)$ is a metric space and $f,g:X\rightarrow\mathbb{R}$. State whether the following statements are true or false. If the statement is true, prove it. If it is false, give a counterexample.

  1. If $f$ is continuous on $X$, then $|f|$ is continuous on $X$, where $|f|(x)=|f(x)|$ for all $x\in X$.
  2. If |f| is continuous at $p\in X$, then $f$ is continuous at $p$.
  3. Define $h: X\rightarrow\mathbb{R}$ by $h(x)=\max\{f(x),g(x)\}$ for all $x\in X$. If $f$ and $g$ are continuous at $p\in X$, then $h$ is continuous at $p$.
  4. If $f$ is continuous at $p\in X$, and if $f(p)>M$ for some $M\in\mathbb{R}$, then there is a neighborhood $N$ of $p$ in $X$, such that $f(x)>M$ for all $x\in N$.
  5. Suppose $d$ is the discrete metric on $X$. Then every map $f:X\rightarrow\mathbb{R}$ is continuous on $X$.

Proof.

  1. Since |f| is really the composition of two continuous functions, i.e., the function $f$ followed by the absolute value function, so it&#8217;s continuous.
  2. Suppose $X=\mathbb{R}$ and $f(x)=1$ if $x\geq 0$, otherwise $f(x)=-1$. Then $|f|$ is a constant function, which is continuous, but $f$ itself fails to be continuous at $x=0$.
  3. As $h(x)=\max\{f(x),g(x)\}=(f(x)+g(x)-|f(x)-g(x)|)/2$, $h$ is continuos.
  4. Consider the pre-image of $(M,\infty]$. Since its an open set containing $f(p)$, by the continuity of $f$ at $p$, the pre-image is a neighborhood of $p$. Let $N=f^{-1}(M,\infty]$. It works.
  5. Choose your favorite map $f:X\rightarrow\mathbb{R}$. Whatever $x\in X$ and $\epsilon>0$ are, always pick $\delta=1$. If $|x-x'|<\delta=1$, then $x=x'$, hence $f(x)-f(x')=0<\epsilon$.

Exercise: Suppose $f$,$g$ and $h$ are functions from $\mathbb{R}$ to $\mathbb{R}$ satisfying $g(x)\leq h(x)\leq f(x)$ for all $x\in\mathbb{R}$. Further, suppose $f$ and $g$ are continuous at $x=a$ and $f(a)=g(a)$. Then, prove that $h$ is continuous at $x=a$.

Proof. Let $b=f(a)=g(a)=h(a)$. As $f$ and $g$ are continuous at $x=a$, for every $\epsilon > 0$, there are $\delta_1 > 0$ and $\delta_2 > 0$, such that if $|x-a|<\delta_1$, then $|f(x)-b|<\epsilon$, and if $|x-a|<\delta_2$, then $|g(x)-b|<\epsilon$. Let $\delta$ be the minimum of $\delta_1$ and $\delta_2$. If $|x-a|<\delta$, then $h(x)-b\leq f(x)-b<\epsilon$ and $b-h(x)\leq b-g(x)<\epsilon$. This finishes the proof of the continuity at $a$.
