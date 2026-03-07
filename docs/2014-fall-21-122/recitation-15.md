---
title: "Recitation 15"
---

**Example 1:** Use Newton&#8217;s method to find all roots of the equation correct to six decimal places.

**Hint:** Sketch the graphs of $y=3\cos x$ and $y=x+1$. The first intersection lies on $-2\pi < x < -\pi$, the second $-\pi < x < -\pi / 2$ and the last $0 < x < \pi / 2$. Set $f(x) = 3\cos x - x - 1$. Newton&#8217;s iteration says $x_{n+1} = x_n - \frac{3\cos x_n - x_n - 1}{-3\sin x_n - 1}$. Take the initial approximations as $-\pi, -\pi / 2, 0$, we get $x= -3.637958, -1.862365, -0.889470$.

**Example 2:** Explain why Newton&#8217;s method doesn&#8217;t work for finding the root of the equation $x^3-3x+6=0$ if the initial approximation is chosen to be $x_1 = 1$.

**Hint:** Try to work out $x_2$.

**Example 3:** Find a formula for the general term $a_n$ of the sequence, assuming that the pattern of the first few terms continues. **(a)** $\left\{-3, 2, -4/3. 8/9, -16/27, \ldots\right\}$. **(b)** $\left\{1/2, -4/3, 9/4, -16/5, -25/6, \ldots\right\}$.

**Answer: (a)** $a_n = (-3)(-2/3)^{n-1}$. **(b)** $a_n = (-1)^{n+1}n^2/(n+1)$.

**Example 4:** Determine whether the sequence converges or diverges. If it converges, find the limit. **(a)** $a_n = \frac{3+5n^2}{n+n^2}$. **(b)** $a_n=\tan\left(\frac{2n\pi}{1+8n}\right)$. **(c)** $a_n = n^2/\sqrt{n^3+4n}$. **(d)** $a_n = \ln(n+1)-\ln n$. **(e)** $a_n = (\cos^2n)/2^n$. **(f)** $\{0,1,0,0,1,0,0,0,1,\ldots\}$.

**Hint: (a)** The limit of a quotient of two polynomials of the same degree is equal to the quotient of their leading coefficients. **(b)** In side the tangent function, the limit is $\pi/4$. **(c)** The numerator is $n^2$ and the denominator is roughly $n^{3/2}$. **(d)** It is equal to $\ln(1+1/n)$. **(e)** The absolute value is no greater than $1/2^n$. **(f)** It does not converge.

**Remark: (f)** Intuitively, if the sequence converged, the limit would be $0$. However, $1$ appears indefinitely (though less and less frequently), the limit cannot be $0$. For people who are interested in the rigorous proof using the definition of limit, here is the argument. For sake of contradiction, suppose the limit of the sequence is $L$. Let $\delta = 1/2$. There should be $N$ so that $L - 1/2 < a_n < L + 1/2$ for all $n > N$. However, this means $L -1/2 < 0$ and $1 < L+1/2$, hence $1/2 < L < 1/2$, which yields a contradiction.
