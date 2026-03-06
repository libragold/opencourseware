---
title: "Recitation 25"
---

**Example 1:** Find the Taylor series for $f(x)=\cos x$ centered at the given value of $a=\pi$. [Assume that $f$ has a power series expansion. Do not show that $R_n(x)\to 0$.] Also find the associated radius of convergence.

**Solution:** (1) $f(x)=\cos x$ and $f(\pi)=-1$; (2) $f'(x)=-\sin x$ and $f'(\pi)=0$; (3) $f''(x)=-\cos x$ and $f''(\pi)=1$; (4) $f'''(x)=\sin x$ and $f'''(x)=0$; and this pattern repeats indefinitely. Therefore the Taylor series at $\pi$ is $-1+\frac{1}{2!}(x-\pi)^2-\frac{1}{4!}(x-\pi)^4+\frac{1}{6!}(x-\pi)^6-\frac{1}{8!}(x-\pi)^8+\ldots=\sum_{n=0}^\infty(-1)^{n-1}\frac{1}{(2n)!}(x-\pi)^{2n}$.

**The binomial series theorem:** if $k$ is any real number and $|x|<1$, then $(1+x)^k = \sum_{n=0}^\infty {k\choose n}x^n = 1+\frac{k}{1!}x+\frac{k(k-1)}{2!}x^2+\frac{k(k-1)(k-2)}{3!}x^3+\ldots$.

**Example 2:** Use the binomial series to expand the function $\frac{1}{(2+x)^3}$ as a power series. State the radius of convergence.

**Hint:** Use $\frac{1}{(2+x)^3}=\frac{1}{8}(1+x/2)^{-3}$ and the binomial series theorem.

**Important Maclaurin series:**

  1. $\frac{1}{1-x}=\sum_{n=0}^\infty x^n=1+x+x^2+x^3+\ldots$;
  2. $e^x=\sum_{n=0}^\infty\frac{x^n}{n!}=1+\frac{x}{1!}+\frac{x^2}{2!}+\frac{x^3}{3!}+\ldots$;
  3. $\sin x=\sum_{n=0}^\infty(-1)^n\frac{x^{2n+1}}{(2n+1)!}=x-\frac{x^3}{3!}+\frac{x^5}{5!}-\frac{x^7}{7!}+\ldots$;
  4. $\cos x=\sum_{n=0}^\infty(-1)^n\frac{x^{2n}}{(2n)!}=1-\frac{x^2}{2!}+\frac{x^4}{4!}-\frac{x^6}{6!}+\ldots$;
  5. $\tan^{-1}x=\sum_{n=0}^\infty(-1)^n\frac{x^{2n+1}}{2n+1}=x-\frac{x^3}{3}+\frac{x^5}{5}-\frac{x^7}{7}+\ldots$;
  6. $\ln(1+x)=\sum_{n=0}^\infty(-1)^{n-1}\frac{x^n}{n}=x-\frac{x^2}{2}+\frac{x^3}{3}-\frac{x^4}{4}+\ldots$.

**Example 3:** Use the important Maclaurin series to obtain the Maclaurin series for the given function **(a)** $f(x) = x\cos(x^2/2)$; **(b)** $f(x)=\frac{x}{4+x^2}$.

**Hint: (a)** Use the Maclaurin series of $\cos x$; **(b)** Use the Maclaurin series of $1/(1-x)$.

**Example 4:** Use series to evaluate the limit $\lim_{x\to 0}\frac{\sin x-x+x^3/6}{x^5}$.

**Hint:** Use the Maclaurin series of $\sin x$.

**Example 5:** Find the sum of the series $\sum_{n=0}^\infty(-1)^n\frac{x^{4n}}{n!}$.

**Solution:** Use the Maclaurin series of $e^x=\sum_{n=0}^\infty\frac{x^n}{n!}$. By replacing $x$ with $-x^4$, we obtain $\sum_{n=0}^\infty(-1)^n\frac{x^{4n}}{n!}=e^{-x^4}$.
