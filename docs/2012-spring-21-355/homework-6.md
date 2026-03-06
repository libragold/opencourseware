---
title: "Homework 6"
---

Exercise: Give an example of each of the following, or prove that it cannot exist.

<ol>
  <li>
    A sequence that contains subsequences which converge to every point in the infinite set $\{1/n: n\in\mathbb{N}\}$
  </li>
  <li>
    A sequence that contains subsequences converging to every point in the interval $[0,1]$
  </li>
  <li>
    A sequence which has a bounded subsequence, but no convergent subsequence.
  </li>
</ol>

Proof.

<ol>
  <li>
    You can use the example for (b). Also there is a cheap way to get the example. For instance, $1/1, 1/1, 1/2, 1/1, 1/2, 1/3, 1/1, 1/2, 1/3, 1/4, 1/1, 1/2, 1/3, 1/4, 1/5, \ldots$. Each time, you go a bit further and rewind.
  </li>
  <li>
    Listing the rationals in $[0,1]$ suffices. For instance, $0, 1, 1/2, 1/3, 2/3, 1/4, 2/4, 3/4, \ldots$.
  </li>
  <li>
    It is not possible in $\mathbb{R}^k$. Because the bounded subsequence would have a convergent sub-subsequence. However, in a more general setting, it is possible. Think of $\mathbb{N}$ equipped with the discrete metric and $a_n = n$. Then $\{a_n\}$ itself is bounded and it doesn&#8217;t have any convergent subsequences. Also you may use the examples in Problem 3.
  </li>
</ol>

Exercise: Find all subsequential limits of the sequence $\{s_n\}$ defined by  

$$s_1=0; s_{2n}=\frac{s_{2n-1}}{2}; s_{2n+1}=\frac{1}{2}+s_{2n}.$$


Proof. The odd-numbered terms converge to $1$ and the even-numbered terms converge to $1/2$.

Exercise: For each of the following metric spaces, given an example of a Cauchy sequence which does not converge. In each case, assume $d(x,y)=|x-y|$.

<ol>
  <li>
    $X=\mathbb{Q}$
  </li>
  <li>
    $X=\mathbb{R}\backslash\mathbb{Q}$
  </li>
  <li>
    $X=(-1,1)$
  </li>
</ol>

Proof.

<ol>
  <li>
    Listing rationals approaching $\pi$ suffices. For instance, $3, 3.1, 3.14, 3.141, 3.1415, \ldots$.
  </li>
  <li>
    Listing irrationals approaching $$ suffices. For instance, $\frac{\pi}{1}, \frac{\pi}{2}, \frac{\pi}{3}, \ldots$.
  </li>
  <li>
    Any sequence converging to $-1$ suffices. For instance, $-1+\frac{1}{1}, -1+\frac{1}{2}, -1+\frac{1}{3}, \ldots$.
  </li>
</ol>

Exercise: Suppose that $\{p_n\}$ is a Cauchy sequence in a metric space $X$, and some subsequence of $\{p_n\}$ converges to $p\in X$. Prove that then the full sequence converges to $p$. That is, $\lim_{n\rightarrow\infty}p_n=p$.

Proof. For any $\epsilon>0$, there is some &#8216;good&#8217; subsequence of $\{p_n\}$ in which every element is in $(p-\epsilon/2, p+\epsilon/2)$. This is because some subsequence converges to $p$, so its tail must lie in the interval above. On the other hand, since $\{p_n\}$ is Cauchy, there is $N$ such that if $m,n\geq N$ then $d(p_m, p_n)<\epsilon/2$. Let $p_n$ be one of the elements in the &#8216;good&#8217; subsequence. Then for all $m\geq N$, $d(p_m,p)\leq d(p_m,p_n)+d(p_n,p)<\epsilon/2+\epsilon/2=\epsilon$. That is, $\lim_{n\rightarrow\infty}p_n=p$.

Exercise: Suppose $\{a_n\}$ and $\{b_n\}$ are Cauchy sequences in $\mathbb{R}$ with metric $d(x,y)=|x-y|$.

<ol>
  <li>
    Prove that the sequence $\{a_n+b_n\}$ is Cauchy.
  </li>
  <li>
    Prove that the sequence $\{a_n b_n\}$ is Cauchy.
  </li>
</ol>

Proof.

<ol>
  <li>
    For every $\epsilon > 0$ there is a positive integer $N_1, N_2\in\mathbb{N}$ with the following property: If $n\geq N_1$ and $m\geq N_1$, then $d(a_n, a_m)<\epsilon/2$, and if $n\geq N_2$ and $m\geq N_2$, then $d(b_n, b_m)<\epsilon/2$. Now let $N=\max(N_1, N_2)$. Then for any $n, m\geq N$, we have $d(a_n+b_n,a_m+b_m)\leq d(a_n,a_m)+d(b_n,b_m)<\epsilon$. This shows that $\{a_n+b_n\}$ is Cauchy.
  </li>
  <li>
    First we claim that $\{a_n\}$ is bounded. This is because $\{a_n\}$ is Cauchy, so there is $N$, such that for any $n\geq N$, $d(a_n, a_N)<1$. Let $A=\max(|a_1|, |a_2|, \ldots, |a_N|)+1$. Then $A$ is a bound for $\{a_n\}$. Also we can find a bound, say $B$, for $\{b_n\}$. Then pick any $M>A,B$. Follow the argument used in (a), for every $\epsilon > 0$, we can find $N$ such that if $n, m\geq N$, then $d(a_n, a_m)<\frac{\epsilon}{2M}$ and $d(a_n, a_m)<\frac{\epsilon}{2M}$. Hence if $n,m\geq N$, then $d(a_nb_n, a_mb_m)\leq d(a_nb_n, a_mb_n)+d(a_mb_n, a_mb_m)$$=|b_n|d(a_n,a_m)+|a_m|d(b_n.b_m)< B\times\frac{\epsilon}{2M}+A\times\frac{\epsilon}{2M}<\epsilon$. This tells us that $\{a_nb_n\}$ is Cauchy.
  </li>
</ol>
