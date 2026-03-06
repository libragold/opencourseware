---
title: "Recitation 21"
---

**Example 1:** Determine whether the series is absolutely convergent, conditionally convergent, or divergent. **(a)** $\sum_{n=1}^\infty\frac{n}{5^n}$; **(b)** $\sum_{n=1}^\infty\frac{10^n}{(n+1)4^{2n+1}}$; **(c)** $\sum_{n=1}^\infty\frac{\cos(n\pi/3)}{n!}$; **(d)** $\sum_{n=1}^\infty(1+1/n)^{n^2}$.

**Hint:** **(a, b)** Use the ratio test. **(b)** Compare the $|\frac{\cos(n\pi/3)}{n!}|$ with $\frac{1}{n!}$. **(d)** Note that $\lim_{n\to\infty}(1+1/n)^{n^2}=\infty$.

**Example 2:** The terms of a series are defined recursively by the equations $a_1 = 2, a_{n+1}=\frac{5n+1}{4n+3}a_n$. Determine whether $\sum a_n$ converges or diverges.

**Hint:** Note that the sequence is (ultimately) increasing and hence does not converge to $$.

**Example 3:** For what values of $x$ does the series $\sum_{n=1}^\infty\frac{(x-2)^n}{n^2+1}$ converge?

**Hint:** If $x=2$, the series converges apparently. Otherwise, observe that $\lim_{n\to\infty}|a_{n+1}/a_n| = |x-2|$. The ratio test shows that if $1<x<3$ then the series converges and if $x<1$ or $x>3$ then the series diverges. If $x = 1$, then the series converges by the alternating series test. If $x=3$, then the series converges by the integral test. Therefore the series converges if and only if $1\leq x \leq 3$.

**Example 4:** Test the series for convergence or divergence. **(a)** $\sum_{n=1}^\infty (-1)^{n+1}\frac{n^2}{n^3+4}$; **(b)** $\sum_{n=1}^\infty(-1)^n\sin(\pi/n)$.

**Hint: (a)** Note that this is an alternating sequence, $(n+1)^2/((n+1)^3+4) < n^2/(n^3+4)$ for all $n > 1$ and $n^2/(n^3+4)\to 0$ as $n\to\infty$. **(b)** Note that this is an alternating sequence, $\sin(\pi/n+1) < \sin(\pi/n)$ for all $n > 1$ and $\sin(\pi/n)\to 0$ as $n\to\infty$.

**Example 5:** Show that the series $\sum_{n=1}^\infty \frac{(-1)^{n+1}}{n^6}$ is convergent. How many terms of the series do we need to add in order to find the sum to the accuracy of $0.00005$?

**Solution:** Note that this is an alternating series, $1/(n+1)^6 < 1/n^6$ for all $n$ and $1/n^6\to 0$ as $n\to\infty$. By the alternating series test, the series converges. For alternating series, the error between $s_n$ (the partial sum of the first $n$ terms) and the sum of the series is bounded by $a_{n+1}$. In order to find the sum to the accuracy of $0.00005$, it is sufficient to find $n$ such that $1/(n+1)^6 < 0.00005$, hence $n = 5$ suffices.
