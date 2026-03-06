---
title: "Recitation 6"
---

Given a 2nd order linear homogeneous differential equation $ay'' + by' + cy = 0$, the characteristic equation $ar^2 + br + c = 0$ may have two complex roots $r_1, r_2 = \lambda \pm i\mu$. In this case, we would still like to write the solution as $y = c_1 e^{r_1 x} + c_2 e^{r_1 x}$. But what does it mean to raise $e$ to a complex number?

Taylor expansion of 
$$e^t = \sum_{n=0}^\infty \frac{t^n}{n!}$$
 gives the clue: 
$$e^{it} = \sum_{n=0}^\infty \frac{(it)^n}{n!} = \sum_{n=0}^\infty\frac{(-1)^nt^{2n}}{(2n)!} + i\sum_{n=0}^\infty\frac{(-1)^nt^{2n+1}}{(2n+1)!} = \cos t + i \sin t.$$


Using _Euler&#8217;s formula_ $e^{it} = \cos t + i\sin t$, we can rewrite $y = c_1 e^{r_1 x} + c_2 e^{r_1 x}$, where $r_1, r_2 = \lambda \pm i\mu$, as a real-valued solution $y = e^{\lambda x}(C_1\cos\mu x + C_2 \sin \mu x)$.

**Example 1** Solve the IVP $16y'' - 8y' + 145y = 0, y(0) = -2, y'(0) = 1$.

**Solution** The characteristic equation $16r^2 - 8r + 145$ has complex roots $r = 1/4 \pm 3i$. The general solution of the DE is 
$$y = e^{x/4}\left(c_1\cos 3x + c_2\sin 3x\right)$$
. Thus 
$$y' = \frac{1}{4}e^{x/4}\left(c_1\cos 3x + c_2\sin 3x\right) + e^{x/4}\left(-3c_1\sin 3x + 3c_2\cos 3x\right).$$
 The initial conditions imply $c_1 = -2, c_1/4 + 3c_2 = 1$ and so $c_1 = -2, c_2 = 1/2$.

**Example 2** Solve the IVP $3y'' - y' + 2y = 0, y(0) = 2, y'(0) = 0$.

**Solution** The characteristic equation $3r^2 - r + 2 = 0$ has complex roots $r = \frac{1}{6} \pm \frac{\sqrt{23}}{6}i$. The general solution is 
$$y = e^{x/6}\left(c_1\cos\frac{\sqrt{23}}{6}x + c_2\sin\frac{\sqrt{23}}{6}x\right).$$
 The initial conditions imply $c_1 = 2, \frac{1}{6}c_1 + \frac{\sqrt{23}}{6}c_2 = 0$, and so $c_1 = 2, c_2 = \frac{-2}{\sqrt{23}}$.

**Example 3** Solve the IVP $5y'' + 2y' + 7y = 0, y(0) = 2, y'(0) = 1$.

**Solution** The characteristic equation $5r^2 + 2r + 7 = 0$ has complex roots $r = -\frac{1}{5} \pm \frac{\sqrt{34}{5}}i$. The general solution is 
$$y = e^{-x/5}\left(c_1\cos\frac{\sqrt{34}}{5}x + c_2\sin\frac{\sqrt{34}}{5}x\right).$$
 The initial conditions give $c_1 = 2, c_2 = \frac{7}{\sqrt{34}}$.
