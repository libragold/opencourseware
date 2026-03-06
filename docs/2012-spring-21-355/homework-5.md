---
title: "Homework 5"
---

Exercise: Use the definition of convergence to determine the following limits in $\mathbb{R}$:

<ol>
  <li>
    $\lim_{n\rightarrow\infty}\frac{3n+1}{n+5}$
  </li>
  <li>
    $\lim_{n\rightarrow\infty}(\sqrt{n^2+n}-n)$
  </li>
</ol>

Proof.

<ol>
  <li>
    $\lim_{n\rightarrow\infty}\frac{3n+1}{n+5}=3$
  </li>
  <li>
    $\lim_{n\rightarrow\infty}(\sqrt{n^2+n}-n)=\frac{n}{\sqrt{n^2+n}+n}=\frac{1}{2}$
  </li>
</ol>

Exercise:

<ol>
  <li>
    Give an example of a convergent sequence $\{s_n\}$ of positive real numbers such that $\lim_{n\rightarrow\infty}\frac{s_{n+1}}{s_n}=1$
  </li>
  <li>
    Give an example of a divergent sequence $\{s_n\}$ of positive real numbers such that $\lim_{n\rightarrow\infty}\frac{s_{n+1}}{s_n}=1$
  </li>
</ol>

Proof.

<ol>
  <li>
    $s_n=1$
  </li>
  <li>
    $s_n=n$
  </li>
</ol>

Exercise:

<ol>
  <li>
    Give an example of a convergent sequence $\{s_n\}$ of real numbers such that the set $\{s_n:n\in\mathbb{N}\}$ has exactly one limit point.
  </li>
  <li>
    Give an example of a convergent sequence $\{s_n\}$ of real numbers such that the set $\{s_n:n\in\mathbb{N}\}$ has no limit point.
  </li>
  <li>
    Prove: If a sequence $\{s_n\}$ of real numbers converges, then the set $\{s_n:n\in\mathbb{N}\}$ has at most one limit point.
  </li>
</ol>

Proof.

<ol>
  <li>
    $s_n=1/n$
  </li>
  <li>
    $s_n=1$
  </li>
  <li>
    Suppose $\lim_{n\rightarrow\infty}s_n=s$. Enough to show that if there is a limit point $t$ for the set $\{s_n:n\in\mathbb{N}\}$, then $s=t$. Deny. Then pick any positive real number $\epsilon<|s-t|/2$. There is an integer $N$ such that $n\geq N$ implies $|s-s_n|<\epsilon$. Observe that now $t$ is still the limit point of the set $\{s_n:n\geq N\}$, because chopping off finitely many points doesn&#8217;t change the limit point. However, by the choice of $\epsilon$ and $N$, for all $n\geq N$, $|t-s_n|>|s-t|/2>0$. A contradiction.
  </li>
</ol>

Exercise: Suppose $X\neq\emptyset$ is equipped with the discrete metric. Characterize all convergent sequences in $X$.

Proof.  
We say a sequence $\{s_n:n\in\mathbb{N}\}$ in $X$ is eventually constant if and only if there are $N\in\mathbb{N}$ and $s\in\ X$ such that for all $n>N$, $s_n=s$.  
We claim that all eventually constant sequences are all convergent sequences in $X$. Easy to see they are convergent. Left to see that every convergent sequence is eventually constant. Suppose $\{s_n:n\in\mathbb{N}\}$ convergences to $s$. By definition of convergence, there is an integer $N$ such that $n>N$ implies that $d(s_n,s)<1/2$, which, indeed, implies $s_n=s$ because of the discrete metric.

Exercise:

<ol>
  <li>
    Prove: If a sequence $\{s_n\}\subset\mathbb{R}$ converges in $\mathbb{R}$ then the sequence $\{|s_n|\}$ converges in $\mathbb{R}$.
  </li>
  <li>
    Give an example of a sequence $\{s_n\}\subset\mathbb{R}$ such that $\{|s_n|\}$ converges but $\{s_n\}$ does not converge.
  </li>
  <li>
    For a sequence $\{s_n\}\subset\mathbb{R}$ we define the sequences $\{s_n^+\}$ and $\{s_n^-\}$ where $s_n^+:=\max\{s_n, 0\}$ and $s_n^-:=\min\{s_n,0\}$ for all $n\in\mathbb{N}$. Prove: the sequence $\{s_n\}$ converges if and only if $\{s_n^+\}$ and $\{s_n^-\}$ converge.
  </li>
</ol>

Proof.

<ol>
  <li>
    Suppose $\{s_n\}$ converges to $s$. Then for every $\epsilon > 0$, there is an integer $N$ such that $n\geq N$ implies $|s_n-s| < \epsilon$. Notice that $||s_n|-|s||\leq |s_n-s| < \epsilon$. Hence $\{|s_n|\}$ converges to $|s|$.
  </li>
  <li>
    For example, $s_n=(-1)^n$.
  </li>
  <li>
    Suppose $\{s_n\}$ converges. Notice that $s_n^+=(s_n+|s_n|)/2$ and $s_n^-=(s_n-|s_n|)/2$. By (a) and theorem 3.4, we know $\{s_n^+\}$ and $\{s_n^-\}$ also converge. On the other hand, if $\{s_n^+\}$ and $\{s_n^-\}$ converge, $\{s_n\}$ converges since $s_n=s_n^++s_n^-$.
  </li>
</ol>
