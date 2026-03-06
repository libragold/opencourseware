---
title: "Recitation 8"
---

**Example 1** Determine whether $2x - 3, x^3 + 1, 2x^2 - 1, x^2 + x + 1$ are linearly independent.

**Solution** The Wronskian of $2x - 3, x^3 + 1, 2x^2 - 1, x^2 + x + 1$ is 
$$\begin{vmatrix}2x - 3 & x^3 + 1 & 2x^2 - 1 & x^2 + x + 1 \\ 2 & 3x^2 & 4x & 2x+1 \\ 0 & 6x & 4 & 2 \\ 0 & 6 & 0 & 0\end{vmatrix} = -24 \neq 0.$$
 Therefore these functions are linear independent.

**Remark** Wronskian is defined for any set of functions. There functions do not necessarily come from ODEs.

**Strategy** Find $n$ solutions $y_1, \dots, y_n$ to an $n$th order homogeneous linear differential equation and compute $W(y_1, \dots, y_n)$. If $W(y_1, \dots, y_n) \neq 0$, then $y_1, \dots, y_n$ form a fundamental set of solutions, that is, the general solution is $y = c_1y_1 + \dots c_n y_n$.

**Example 2** Verify $1, x, x^3$ form a fundamental set of solutions of $xy''' - y'' = 0$.

**Solution** It is easy to verify $1, x, x^3$ are three solutions of $xy''' - y'' = 0$. Their Wronskian is given by 
$$\begin{vmatrix}1 & x & x^3 \\ 0 & 1 & 3x^2 \\ 0 & 0 & 6x\end{vmatrix} = 6x \neq 0.$$
 This shows they form a fundamental set of solutions.

**Example 3** Use the method of reduction of order to solve 
$$(2-x)y''' + (2x-3)y'' - xy' + y = 0$$
 given that $y_1 = e^x$ is a solution.

**Example 4** Use reduction of order to solve 
$$x^2(x+3)y''' - 3x(x+2)y'' + 6(1+x)y' - 6y = 0$$
 given that $y_1 = x^2$ is a solution.
