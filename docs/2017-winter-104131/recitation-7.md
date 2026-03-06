---
title: "Recitation 7"
---

**Example 1** Solve $y'' + 4y' + 4y = 0$.

The characteristic equation $r^2 + 4r + 4 = (r+2)^2 = 0$ has a repeated root $r=-2$, and so $y_1 = e^{-2x}$ is a solution. Assume the general solution is of the form $y = v(x)e^{-2x}$. Then 
$$\begin{aligned}y' &= v'(x)e^{-2x} + v(x)(-2)e^{-2x} = (v' - 2v)e^{-2x}, \\ y'' &= v''(x)e^{-2x} + v'(x)(-2)e^{-2x} \cdot 2 + v(x)(-2)^2e^{-2x} = (v'' - 4v + 4v)e^{-2x}.\end{aligned}$$


Therefore $v$ satisfies $[(v''-4v'+4v) + 4(v'-2v) + 4v]e^{-2x} = 0$, and so $v'' = 0$ implies $v(x) = c_1 + c_2x$. Therefore $y = (c_1 + c_2 x) e^{-2x}$ is a solution. In other words, the linear combination of $y_1 = e^{-2x}, y_2 = xe^{-2x}$ is a solution.

We use Wronskian to verify $y_1, y_2$ for a _fundamental set of solutions_, that is, $y = c_1 y_1 + c_2 y_2$ generates all solutions: 
$$W(y_1, y_2) = \begin{vmatrix}y_1 & y_2 \\ y_1' & y_2'\end{vmatrix} = \begin{vmatrix}e^{-2x} & xe^{-2x} \\ -2e^{-2x} & (1-2x)e^{-2x}\end{vmatrix} = e^{-4x} \neq 0.$$


In general, if the characteristic equation of $ay'' + by' + cy = 0$ has a repeated root $r$, then $y = (c_1 + c_2x)e^{rx}$ is the general solution.

### Higher order linear differential equation

**Existence and uniqueness theorem** Given a linear DE with initial conditions 
$$\begin{aligned}y^{(n)} + p_1(x)y^{(n-1)} + p_2(x)y^{(n-2)} + \dots + p_n(x)y = g(x), \\ y(x_0) = y_0, y'(x_0) = y_1, \dots, y^{(n-1)}(x_0) = y_{n-1}.\end{aligned}$$
 If $p_1, p_2, \dots, p_n, g$ are continuous on the open interval $(x_1, x_2)$, then there exists exactly one solution to the IVP for $x_1 < x < x_2$.

**Example 2** Determine the interval in which solutions to $(x-1)y^{(4)} + (x+1)y'' + (\tan x)y = 0$ with the initial conditions $y(0) = y'(0) = y''(0) = y^{(3)}(0) = 0$ are sure to exist.

**Solution** This is a 4th order homogeneous linear differential equation. The DE is equivalent to 
$$y^{(4)} + \frac{x+1}{x-1}y'' + \frac{\tan x}{x-1}y = 0.$$
 The coefficients $\frac{x+1}{x-1}$ and $\frac{\tan x}{x-1}$ are not continuous at $1, \pm \pi /2$ respectively. By the E&U theorem, there exists a solution to the IVP for $-\pi/2 < x < 1$.

**Example 3** Determine the Wronskian of $x, x^2, 1/x$ and verify they form a fundamental set of solutions to $x^3y''' + x^2y'' - 2xy' + 2y = 0$.

**Solution** The Wronskian is 
$$W(x, x^2, 1/x) = \begin{vmatrix}x & x^2 & 1/x \\ 1 & 2x & -1/x^2 \\ 0 & 2 & 2/x^3\end{vmatrix} = 6/x.$$
 It is easy to check $x, x^2, 1/x$ are three solutions of the DE. Since their Wronskian is nonzero, they form a fundamental set of solutions.
