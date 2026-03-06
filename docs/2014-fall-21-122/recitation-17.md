---
title: "Recitation 17"
---

**Example 1:** Find the exact area of the surface obtained by rotating the curve about the $x$-axis. $y=\sqrt{1+e^x}, 0\leq x\leq 1$.

**Hint:** Use the formula $\int_{x_1}^{x_2}2\pi f(x)\sqrt{1+(f'(x))^2}dx$ for the area of the surface.

**Example 2:** Use Newton&#8217;s method with the specified initial approximation $x_1 = -1$ to find $x_3$, the 3rd approximation to the root of the equation $x^7+4=0$.

**Hint:** Use the iteration $x_{n+1} = x_n - f(x_n)/f'(x_n)$, where $f(x) = x^7 + 4$.

**Example 3:** Investigate the equation $\{a_n\}$ defined by $a_1 = 2, a_{n+1} = \frac{1}{2}(a_n+6)$.

**Solution:** Suppose $2\leq a_n<6$. Because $a_{n+1}=\frac{1}{2}(a_n+6)$, $\frac{1}{2}(2+6)\leq a_{n+1}<\frac{1}{2}(6+6)$, hence $2\leq a_n<6$. The upshot is that if $2\leq a_n<6$ then so is $a_{n+1}$. Because $2\leq a_1<6$, so is $a_n$ for all $n$. Therefore $\{a_n\}$ is bounded. Because $a_n < 6$, we know that $a_{n+1}=\frac{1}{2}(a_n+6)>\frac{1}{2}(a_n+a_n)=a_n$, and that the sequence is increasing. By the monotonic sequence theorem, the sequence has a limit, say $L$. Take the limit on the recurrence relation $a_{n+1}=\frac{1}{2}(a_n+6)$ and get $L = \frac{1}{2}(L+6)$. Therefore $L=6$.

**Remark:** Note that $6 - a_{n+1} = 6 - \frac{1}{2}(a_n + 6) = \frac{1}{2}(6 - a_n)$. This means $\{6 - a_n\}$ is a geometric progression with initial term $4$ and common ratio $1/2$. Therefore $6 - a_n = 8\cdot (1/2)^n$ and $a_n = 6 - 8\cdot(1/2)^n$. From this general formula of $a_n$, we can immediately see that the sequence is bounded and increasing, and that the limit is $6$.
