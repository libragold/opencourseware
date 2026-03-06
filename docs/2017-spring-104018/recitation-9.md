---
title: "Recitation 9"
---

**Problem 1** Find $\lim_{x \to 0^+}\frac{x^x-1}{\ln (x+1)}$.

**Solution** The limit is of type $0/0$. Moreover, we have 
$$\lim_{x\to 0}\frac{(x^x - 1)'}{(\ln(x+1))'} = \lim_{x\to 0}\frac{x^x(1 + \ln x)}{(1/(x+1))} = \lim_{x\to 0}(1+x)x^x(1 + \ln x) = -\infty.$$
 By l&#8217;Hôpital&#8217;s rule, the limit is $-\infty$.

**Problem 2** Find $\lim_{x \to 0}(e^{x}+e^{-x}-\cos x)^{\frac{1}{x^2}}$.

**Solution** The limit is of type $1^\infty$. Let $f(x) = e^x + e^{-x}-\cos x - 1$. We have 
$$\lim_{x \to 0}(e^{x}+e^{-x}-\cos x)^{\frac{1}{x^2}} = \lim_{x \to 0}\left[(1+f(x))^{\frac{1}{f(x)}}\right]^{\frac{f(x)}{x^2}}.$$
 Since $\lim_{x\to 0}f(x) = 0$, $\lim_{x \to 0}(1+f(x))^{\frac{1}{f(x)}} = e$. Moreover, $\lim_{x\to 0}f(x)/x^2$ is of type $0/0$, and 
$$\lim_{x\to 0}\frac{f'(x)}{(x^2)'} = \lim_{x\to 0}\frac{e^x - e^{-x} + \sin x}{2x}$$
 is again of type $0/0$, and 
$$\lim_{x\to 0}\frac{f''(x)}{(x^2)''} = \lim_{x\to 0}\frac{e^x + e^{-x} + \cos x}{2} = \frac{3}{2}.$$
 By l&#8217;Hôpital&#8217;s rule, $\lim_{x\to 0}\frac{f(x)}{x^2} = \frac{3}{2}$ and the limit is $e^{3/2}$.

**Problem 3** $\lim_{x \to 0^+}\frac{e^{\sin (-1+\cos x)}\sin (-1+\cos x)}{(e^x-1)^2}$.

**Solution** If $\lim_{x \to 0}\frac{\sin (-1+\cos x)}{(e^x-1)^2}$ exists, then 
$$\lim_{x \to 0}\frac{e^{\sin (-1+\cos x)}\sin (-1+\cos x)}{(e^x-1)^2} = \lim_{x\to 0}e^{\sin (-1+\cos x)}\lim_{x \rightarrow 0^+}\frac{\sin (-1+\cos x)}{(e^x-1)^2} = \lim_{x \to 0}\frac{\sin (-1+\cos x)}{(e^x-1)^2}.$$
 Note that $\lim_{x \to 0}\frac{\sin (-1+\cos x)}{(e^x-1)^2}$ is of type $0/0$ and  

$$\begin{aligned}\lim_{x \to 0}\frac{(\sin (-1+\cos x))'}{((e^x-1)^2)'} = \lim_{x\to 0}\frac{\cos(-1+\cos x)(-\sin x)}{2(e^x - 1)e^x} \\ = \lim_{x\to 0}\frac{-\cos(-1+\cos x)}{2e^x}\lim_{x\to 0}\frac{\sin x}{e^x - 1} = -\frac{1}{2}\lim_{x\to 0}\frac{\sin x}{e^x - 1}\end{aligned}$$
 if $\lim_{x\to 0}\frac{\sin x}{e^x - 1}$ exists.  
Finally, $\lim_{x\to 0}\frac{\sin x}{e^x - 1} = \lim_{x\to 0}\frac{\sin x}{x}\frac{x}{e^x - 1} = 1$. The answer is thus $\frac{-1}{2}$.

**Problem 4** Use Taylor&#8217;s theorem to calculate the following limit: $\lim_{x \rightarrow 0}\frac{\cos x- 1 + \frac{x^2}{2}-\frac{x^4}{4!}}{x(\sin x - x+\frac{x^3}{3!})}$.

**Solution** The 6th order Taylor polynomial of $\cos x$ is 
$$1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!}.$$
 By Taylor&#8217;s theorem, 


$$\lim_{x\to 0}\frac{\cos x - (1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!})}{x^6} = 0,$$
 and so 
$$\lim_{x\to 0}\frac{\cos x - 1 + \frac{x^2}{2!} - \frac{x^4}{4!}}{x^6} = -\frac{1}{6!}.$$
 The 5th order Taylor polynomial of $\sin x$ is 
$$x - \frac{x^3}{3!} + \frac{x^5}{5!}.$$
 By Taylor&#8217;s theorem, 
$$\lim_{x\to 0}\frac{\sin x - (x - \frac{x^3}{3!} + \frac{x^5}{5!})}{x^5} = 0,$$
 and so 
$$\lim_{x\to 0}\frac{\sin x - x + \frac{x^3}{3!}}{x^5} = \frac{1}{5!}.$$
 Finally, 
$$\lim_{x \rightarrow 0}\frac{\cos x- 1 + \frac{x^2}{2}-\frac{x^4}{4!}}{x(\sin x - x+\frac{x^3}{3!})} = \lim_{x\to 0}\frac{\cos x - 1 + \frac{x^2}{2!} - \frac{x^4}{4!}}{x^6}\lim_{x\to 0}\frac{x^5}{\sin x - x + \frac{x^3}{3!}} = -\frac{1}{6}.$$


**Problem 5** Use Taylor&#8217;s theorem to calculate $\sqrt{1.01}$ with precision of at least $10^{-6}$.

**Solution** Let $f(x) = \sqrt{1+x}$. Note that 
$$f'(x) = \frac{1}{2}(1+x)^{-1/2}, f''(x) = \frac{-1}{4}(1+x)^{-3/2}, f'''(x) = \frac{3}{8}(1+x)^{-5/2}.$$
 The 2nd order Taylor polynomial of $\sqrt{1+x}$ is 
$$P(x) = f(0) + \frac{f'(0)}{1!}x - \frac{f''(0)}{2!}x^2 = 1 + \frac{1}{2}x - \frac{1}{8}x^2.$$
 By Taylor&#8217;s theorem, for some $0 < c < 0.01$ 
$$|f(0.01) - P(0.01)| = \frac{f'''(c)}{3!}(0.01)^3 = \frac{(3/8)(1+c)^{-5/2}}{3!}10^{-6} < \frac{1}{16}10^{-6} < 10^{-7}.$$
 Therefore $f(0.01)$ is approximately $P(0.01)$ up to an error of $10^{-7}$.

**Problem 6** Use Taylor&#8217;s theorem to prove the following inequality, for every $x \in \mathbb{R}$: 
$$e^x \geq 1+x+x^2/2!+x^3/3!+x^4/4!+x^5/5!.$$


**Solution** The 5th order Taylor polynomial of $e^x$ is 
$$P(x) = 1+x+x^2/2!+x^3/3!+x^4/4!+x^5/5!,$$
 and 
$$f^{(6)}(x) = e^x.$$
 By Taylor&#8217;s theorem, for some $c$ between $0$ and $x$, 
$$e^x - P(x) = \frac{e^c}{6!}x^6,$$
 which is always $\ge 0$.

### Concavity

**Definition** If the graph of $f$ lies above (below) all of its tangents on an interval $I$, then it&#8217;s called _concave upward_ (_downward_) on $I$.

**Concavity test** How $f''$ helps determine the intervals of concavity? If $f''(x) > 0$ for all $x$ in $I$, then $f$ is concave upward on $I$. If $f''(x) < 0$ for all $x$ in $I$, then $f$ is concave downward on $I$.

**Definition** A point $P$ on curve $y = f(x)$ is called an _inflection point_ if $f$ is continuous there and curve changes from concave upward to concave downward, or from concave downward to concave upward, at $P$.

**Second derivative test** Suppose $f''$ is continuous near $c$. If $f'(c) = 0$ and $f''(c) > 0$, then $f$ has a local minimum at $c$. If $f'(c) = 0$ and $f''(c) < 0$, then $f$ has a local maximum at $c$.

**Example** Let&#8217;s discuss the curve $y = f(x) = x^4 - 4x^3$ with respect to concavity, points of inflection and local minima and local maxima. Note that $f'(x) = 4x^3 - 12x^2 = 4x^2(x-3)$ and $f''(x) = 12x^2 - 24x = 12x(x-2)$. The function is monotone decreasing on $(-\infty, 3)$ and increasing on $(3,\infty)$. Second derivative $f''(x) = 0$ gives $x = 0, 2$. Thus $(0, 0)$ and $(3, -27)$ are inflection points and $f$ is concave upward on $(-\infty, 0)$ and $(2, \infty)$, and it is concave downward on $(0,2)$. First derivative $f'(x) = 0$ gives $x = 0, 3$ are critical numbers. By the second derivative test, we know that $x = 3$ is a local minimum. However $x = 0$ is not local min/max because $f$ is monotone decreasing on $(-\infty, 3)$.
