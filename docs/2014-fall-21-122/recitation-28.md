---
title: "Recitation 28"
---

**Polar coordinates:** We extend the meaning of polar coordinates $(r, \theta)$ to the case in which $r$ is negative by agreeing that, the points $(-r, \theta)$ and $(r,\theta)$, lie on the same line through $O$ and at the same distance $r$ from $O$, but on opposite sides of $O$. If $r>0$, the point $(r,\theta)$ lies in the same quadrant as $\theta$; if $r<0$, it lies in the quadrant on the opposite side of the pole. Notice that $(-r,\theta)$ represents the same point as $(r,\theta+\pi)$.

**Symmetry:** When we sketch polar curves it is sometimes helpful to take advantage of symmetry.

  1. If a polar equation is unchanged when $\theta$ is replaced by $-\theta$, the curve is symmetric about the polar axis.
  2. If the equation is unchanged when $r$ is replaced by $-r$, or when $\theta$ is replaced by $\theta+\pi$, the curve is symmetric about the pole. (This means that the curve remains unchanged if we rotate it through $180^\circ$ about the origin.)
  3. If the equation is unchanged when $\theta$ is replaced by $\pi-\theta$, the curve is symmetric about the vertical line $\theta=\pi/2$.

**Example 1:** Determine the symmetry of the curves (a) $r = 2$; (b) $\theta = 1$; (c) $r = 2\cos\theta$; (d) $r=1+\sin\theta$; (e) $r=\cos 2\theta$.

**Hint:** The curve is symmetric about (a) the polar axis, the pole and the vertical line; (b) the pole; (c) the polar axis; (d) the vertical line; (e) the polar axis, the pole and the vertical line.

**Example 2:** Sketch the region in the plane consisting of points whose polar coordinates satisfy the given conditions $2 < r < 3, 5\pi / 3 \leq \theta \leq 7\pi/3$.

**Hint:** $5\pi / 3 \leq \theta \leq 7\pi/3$ is equivalent to $-\pi / 3 \leq \theta \leq \pi/3$.

**Example 3:** Find a formula for the distance between the points with polar coordinates $(r_1, \theta_1)$ and $(r_2, \theta_2)$.

**Solution:** The distance is equal to 
$$\begin{aligned}\sqrt{(x_1 - x_2)^2 + (y_1 - y_2)^2} & = \sqrt{(r_1\cos\theta_1 - r_2\cos\theta_2)^2+(r_1\sin\theta_1 - r_2\sin\theta_2)^2} \\ & = \sqrt{r_1^2 + r_2^2 - 2r_1r_2(\cos\theta_1\cos\theta_2 + \sin\theta_1\sin\theta_2)} \\ & = \sqrt{r_1^2+r_2^2-2r_1r_2\cos(\theta_1-\theta_2)}.\end{aligned}$$


**Example 4:** Identify the curve $r^2\cos 2\theta = 1$ by finding a Cartesian equation for the curve.

**Solution:** Note that $\cos^2\theta = \cos^2\theta - \sin^2\theta$ and $x = r\cos\theta, y=r\sin\theta$. The Cartesian equation is $x^2 - y^2 = 1$, and so the curve is a hyperbla.

**Example 5:** Find a polar equation for the curve represented by the given Cartesian equation $x^2 + y^2 = 2cx$.

**Solution:** Note that $x^2 + y^2 = r^2$ and $x=r\cos\theta$. The polar equation is $r^2 = 2cr\cos\theta$, and so $r=2c\cos\theta$ (note that the case $r=0$ is already included).

**Example 6:** Sketch the curve with the given polar equation $r=2\cos 4\theta$ by first sketching the graph of $r$ as a function of $\theta$ in Cartesian coordinates.

**Hint:** Sketch first the graph of $r=2\cos4\theta$ for $0 \leq \theta \leq 2\pi$.

**Petals:** $r=\cos(k\theta)$ is an equation of a rose. If $k$ is even, the rose has $2k$ petals. If $k$ is odd, the rose has $k$ petals.
