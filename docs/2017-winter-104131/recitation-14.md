---
title: "Recitation 14"
---

### First order linear equation

**Constant coefficients** The general solution to $y'=ay+b$, where $a$ and $b$ are constants, is $y=\frac{Ae^{ax}-b}{a}$. Here $A$ is a constant that can be determined given an initial condition.

**Integrating factor** The big idea of integrating factor is to multiply both sides of $y'+p(x)y=q(x)$ by $\mu(x) = \exp \int p(x)dx$ so that the left hand side becomes $(\mu y)'$.

**Separable equation** A separable equation is an equation of the form $a(x)dx = b(y)dy$. Let $A(x), B(y)$ be the anti-derivative of $a(x), b(y)$. Then $A(x) = B(y) + C$ for some constant $C$ depending on the initial condition.

**Exact equation** Suppose we have the differential equation $M(x,y)+N(x,y)y'=0$ and a region $D$. If there is a function $\Psi(x,y)$ so that $\Psi_x(x,y) = M(x,y), \Psi_y = N(x,y)$ for all $(x,y)\in D$, then we call the differential equation _exact_ in $D$. In this case, the implicit solution is $\Psi(x,y) = c$ for $(x,y)\in D$, and we call $\Psi(x,y)$ the _potential function_.

**Test for exact differential equation** Suppose the region $D$ is [simply connected][1]. The differential equation $M(x,y)+N(x,y)y'=0$ is exact in $D$ if and only if $M_y(x,y) = N_x(x,y)$ at each $(x,y)\in D$.

**Integrating factor + exact equation** It is sometimes possible to convert a differential equation that is not exact into an exact equation by multiplying the equation by a suitable _integrating factor_.

**Existence and uniqueness** Suppose that $F(x,y)$ is a continuous function defined in some region 
$$R = (x_0-\delta, x_0+\delta)\times (y_0-\epsilon, y_0+\epsilon)$$
 containing the point $(x_0, y_0)$. Then there exists $\delta_1 > 0$ so that a solution $y=f(x)$ to $y'=F(x,y)$ is defined for $x\in (x_0-\delta_1, x_0+\delta_1)$. Suppose, furthermore, that $\frac{\partial F}{\partial y}(x,y)$ is a continuous function defined on $R$. Then there exists $\delta_2 > 0$ so that the solution is the unique solution to $y'=F(x,y)$ for $x\in (x_0-\delta_2, x_0 + \delta_2)$.

### Second order linear equation

**Homogeneous with constant coefficients** The characteristic equation of $ay'' + by' + c=0$ is $ar^2 + br + c = 0$. Let $r_1, r_2$ be the roots of the characteristic equation. (1) When $r_1, r_2$ are distinct reals, the general solution is $y = c_1e^{r_1x} + c_2e^{r_2x}$; (2) When $r_1, r_2 = \lambda \pm i\mu$ are complex, the general solution is $y=e^{\lambda x}(c_1\cos \mu x + c_2\sin \mu x)$; (3) When $r_1, r_2 = r$ are repeated roots, the general solution is $y=e^{rx}(c_1 + c_2x$.

**Non-homongenous** The general solution of the second order nonhomogeneous linear equation $y'' + p(x)y' + q(x)y = g(x)$ can be expressed in the form $y = y_h + y_p$, where $y_p$ is any particular function that satisfies the nonhomogeneous equation and $y_h$ is a general solution to the homogeneous equation $y'' + p(x)y' + q(x)y = 0$.

### Higher order linear equation

**Homogeneous with constant coefficients** The characteristic equation of 
$$y^{(n)} + a_1y^{(n-1)} + a_2y^{(n-2)} + \dots + a_ny = 0$$
 is 
$$r^n + a_1r^{n-1} + a_2r^{n-2} + \dots + a_n = 0.$$
 If the roots of the characteristic equation are distinct reals $r_1, r_2, \dots, r_n$, then the general solution is 
$$c_1e^{r_1x} + c_2e^{r_2x} + \dots + c_ne^{r_nx}.$$


**Existence and uniqueness** Given a linear differential equation 
$$y^{(n)} + p_1(x)y^{(n-1)} + p_2(x)y^{(n-2)} + \dots + p_n(x)y = g(x)$$
 with initial conditions 
$$y(x_0)=y_0, y'(x_0)=y_1, \dots, y^{(n-1)}(x_0)=y_{n-1}, x_0 \in (x_1, x_2).$$
 If $p_1, \dots, p_n, g$ are continuous on the open interval $(x_1, x_2)$, then there exists exactly one solution to the initial value problem for $x_1 < x < x_2$.

**Wronskian** For $n$ functions $f_1(x), \dots, f_n(x)$, the Wronskian $W(f_1, \dots, f_n)$ is defined by 
$$\begin{vmatrix} f_{1}(x) & f_{2}(x) & \cdots & f_{n}(x) \\ f_{1}'(x) & f_{2}'(x) & \cdots & f_{n}'(x)\\ \vdots & \vdots & \ddots & \vdots \\ f_{1}^{(n-1)}(x) & f_{2}^{(n-1)}(x) & \cdots & f_{n}^{(n-1)}(x) \end{vmatrix}.$$
 (1) If the Wronskian of $n$ functions is not identically zero, then these $n$ functions are linearly independent. (2) If the Wronskian of $n$ solutions to an $n$th order homogeneous linear differential equation does not vanish on an interval $(x_1, x_2)$, then these solutions form a fundamental set of solutions.

**Order reduction** Order reduction is employed when one solution $y_1(x)$ is known and other linearly independent solutions are desired. Assume the other solutions are of the form $y = vy_1$. Plugging this substitution into the differential equation then leads to a linear differential for $v$ of a lower order.

**Radius of convergence of series solutions** If the Taylor series of $p_1(x), p_2(x), \dots, p_n(x)$ converge for $|x-x_0| < r$, then the series solutions to 
$$y^{(n)} + p_1(x)y^{(n-1)} + p_2(x)y^{(n-2)} + \dots + p_n(x)y = 0$$
 converge for $|x-x_0|<r$. In other words, the radius of convergence of the series solutions is at least the minimum radius of convergence of $p_1(x), p_2(x), \dots, p_n(x)$.

 [1]: https://en.wikipedia.org/wiki/Simply_connected_space
