---
title: "Recitation 23"
---

**Example 1:** Find a power series representation for the function $f(x) = \frac{x}{2x^2+1}$ and determine the interval of convergence.

**Solution:** Let $y = -2x^2$ in $1/(1-y)=\sum_{n=0}^\infty y^n$. We obtain $1/(1+2x^2)=\sum_{n=0}^\infty (-2x^2)^n = \sum_{n=0}^\infty (-2)^nx^{2n}$, and then $x/(2x^2+1)=\sum_{n=0}^\infty (-2)^nx^{2n+1}$. Because this is a geometric series, it converges when $|-2x^2| < 1$, that is, $|x| < 1/\sqrt{2}$. Therefore the interval of convergence is $(-1 / \sqrt{2}, 1/\sqrt{2})$.

**Example 2:** Find a power series representation and the radius and the interval of convergence for **(a)** $f(x) = \ln(x^2+4)$; **(b)** $f(x)=\tan^{-1}(2x)$.

**Hint: (a)** Write out the power series of $f'(x) = 2x/(x^2+4)$ and integrate both sides; **(b)** Write out the power series of $f'(x) = 2/(1+4x^2)$ and integrate both sides.

**Example 3:** Find the radius of convergence and interval of convergence of the series $\sum_{n=1}^\infty \frac{n!x^n}{1\cdot 3\cdot 5\cdot \ldots \cdot (2n-1)}$.

**Solution:** Let $a_n = \frac{n!x^n}{1\cdot 3\cdot 5\cdot \ldots \cdot (2n-1)}$. Note that $\frac{a_{n+1}}{a_n} = \frac{(n+1)x}{2n+1}$ and it goes to $x/2$ as $n\to\infty$. By the ratio test, when $|x| < 2$, the series converges. If $|x| = 2$, $|a_n| = 2\cdot 4\cdot 6\cdot \ldots \cdot (2n) / 1\cdot 3\cdot 5\cdot \ldots \cdot (2n-1) > 1$. The limit test says the series diverges. Therefore the radius of convergence is $2$ and the interval of convergence is $(-2, 2)$.

**Example 4:** Test the series for convergence or divergence. **(a)** $\sum_{n=2}^\infty \frac{1}{n\sqrt{\ln n}}$; **(b)** $\sum_{n=2}^\infty\frac{(-1)^{n-1}}{\sqrt{n}-1}$; **(c)** $\sum_{n=1}^\infty\left(\frac{n}{n+1}\right)^{n^2}$.

**Hint: (a)** Use the integral test; **(b)** Use the alternating series test; **(c)** Note that $\sqrt[n]{\left(\frac{n}{n+1}\right)^{n^2}} = \left(\frac{n}{n+1}\right)^{n} = \left(1+1/n\right)^{-n} = e^{-n\ln(1+1/n)}$. By l&#8217;Hospital&#8217;s rule, $\lim_{x\to\infty} x\ln(1+1/x) = 1$, and so $\sqrt[n]{\left(\frac{n}{n+1}\right)^{n^2}}\to e^{-1} < 1$ as $n\to\infty$. Use the root test.
