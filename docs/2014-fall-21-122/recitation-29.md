---
title: "Recitation 29"
---

**Example 1:** Investigate the family of polar curves given by $r=1+c\sin\theta$. How does the shape change as $c$ changes? (These curves are called limaçons, after a French word for snail, because of the shape of the curves for certain values of $c$.)

**Hint:** The curve is symmetric about the vertical line $\theta=\pi/2$. The curve given by $c$ and the one given by $-c$ are symmetric about the polar axis. If $c=0$, the curve is a circle. If $c=1$, the curve has a &#8220;cusp&#8221; at the origin. If $c>1$, the curve crosses itself at the origin.

**Example 2:** The Cartesian coordinates of a point are given $(2,-2)$ (i) Find polar coordinates $(r,\theta)$ of the point, where $r>0$ and $0\leq\theta < 2\pi$. (ii) Find polar coordinates $(r,\theta)$ of the point, where $r<0$ and $0\leq\theta<2\pi$.

**Solution:** (i) $(2\sqrt{2}, 7\pi/4)$; (ii) $(-2\sqrt{2}, 3\pi/4)$.

**Example 3:** Find the points on the given curve where the tangent line is horizontal or vertical. $r=3\cos\theta$.

**Solution:** The curve (in Cartesian coordinates) can be parametrized by $\theta$: $x=r\cos\theta = 3\cos^2\theta, y=r\sin\theta=3\sin\theta\cos\theta$. The point where the tangent line is horizontal (respectively, vertical) is given by $\theta$ such that $dy/d\theta = 3\cos^2\theta - 3\sin^2\theta = 0$ (respectively, $dx/d\theta = -6\sin\theta\cos\theta = 0$), i.e. $\theta = n\pi/4$, where $n$ is odd (respectively, $\theta = n\pi/4$, where $n$ is even). The corresponding points are, in polar coordinates, $(3/\sqrt{2}, \pm\pi/4)$ (respectively, $(0,0), (3,0)$).

**Remark:** The curve is actually, in Cartesian coordinates, a circle centered at $(3/2, 0)$ with radius $3/2$.

**Example 4:** Find the area of the region enclosed by one loop of the curve $r=1+2\sin\theta$ (inner loop).

**Solution:** The inner loop is given by $7\pi/6 \leq \theta \leq 11\pi/6$ (that is exactly when $r\leq 0$). The are enclosed by the inner loop is $\int_{7\pi/6}^{11\pi/6}\frac{1}{2}(1+2\sin\theta)^2d\theta = \pi - \frac{3}{2}\sqrt{3}$.

**Example 5:** Find the area of the region that lies inside the first curve and outside the second curve. $r=3\cos\theta, r=1+\cos\theta$.

**Solution:** The intersections $(r,\theta)$ of the curves satisfy $r=3\cos\theta=1+\cos\theta$, and so the intersections are $(3/2, \pm\frac{\pi}{3})$. The area that lies inside the first curve and outside the second curve is then given by $A=\int_{-\pi/3}^{\pi/3}\frac{1}{2}[(3\cos\theta)^2-(1+\cos\theta)^2]d\theta = \pi$

**Example 6:** Find all points of intersection of the given curves $r=\sin\theta, r=\sin 2\theta$.

**Solution:** The intersection $(r,\theta)$ stisfies $r=\sin\theta=\sin2\theta=2\sin\theta\cos\theta$, and so either $\sin\theta = 0$ or $\cos\theta=1/2$. Therefore the intersections are $(0,0), (\sqrt{3}/2, \pi/3), (\sqrt{3}/2, 2\pi/3)$.

**Example 7:** Find the exact length of the polar curve $r=2\cos\theta, 0\leq\theta\leq\pi$.

**Solution:** The length of the curve is $\int_0^\pi \sqrt{(2\cos\theta)^2+(2\sin\theta)^2}d\theta =2\pi$.
