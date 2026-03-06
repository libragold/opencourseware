---
title: "Recitation 19"
---

**Example 1:** Determine whether the series is convergent or divergent. If it is convergent, find its sum. **(a)** $\sum\frac{1+3^n}{2^n}$; **(b)** $\sum\frac{1}{1+(2/3)^n}$; **(c)** $\sum (3/5^n+2/n)$.

**Hint: (a) (b)** Find the limit of $a_n$. **(c)** If $\sum a_n$ is convergent and $\sum b_n$ is divergent, then $\sum (a_n + b_n)$ is divergent.

**Example 2:** Determine whether the series $\sum_{n=1}^{\infty}\frac{3}{n(n+3)}$ is convergent or divergent by expressing $s_n$ as a telescoping sum. If it is convergent, find its sum.

**Hint:** Note that $\frac{3}{k(k+3)} = \frac{1}{k} - \frac{1}{k+3}$. We have $s_n = \sum_{k=1}^n\frac{3}{k(k+3)} = \sum_{k=1}^n(\frac{1}{k} - \frac{1}{k+3}) = 1/1 + 1/2 + 1/3 - 1/(n+1) - 1/(n+2) - 1/(n+3)$.

**Example 3:** Find the values of $x$ for which the series $\sum_{n=0}^\infty (-4)^n(x-5)^n$ converges. find the sum of the series for those values of $x$.

**Hint:** This is a geometric series with initial term $1$ and common ratio $-4(x-5)$. It is convergent if and only if $-1 < -4(x-5) < 1$, i.e., $19/4 < x < 21/4$. When it converges, the sum is $1 / (1 - (-4)(x-5)) = 1/(4x-19)$.

**Example 4:** Use the integral test to determine whether the series $\sum_{n=1}^\infty \frac{n}{n^2+1}$ is convergent or divergent.

**Hint:** Consider $f(x) = \frac{x}{x^2+1}$ for $x > 1$. Check it is continuous, positive and ultimately decreasing.

**Example 5:** Determine whether the series is convergent or divergent. **(a)** $1 + 1/8 + 1/27 + 1/64 + 1/125 + \ldots$; **(b)** $\sum_{n=1}^\infty\frac{1}{n^2+4}$; **(c)** $\sum_{n=2}^\infty\frac{1}{n\ln n}$.

**Hint:** Consider $f(x) = 1/x^3$, $f(x) = \frac{1}{x^2+4}$, $f(x) = \frac{1}{x\ln x}$ for (a), (b), (c) respectively. Check they are continuous, positive and ultimately decreasing.
