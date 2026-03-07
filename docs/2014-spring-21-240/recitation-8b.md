---
title: "Recitation 8B"
---

**Problem 1:** Is $\mathbf{x}=\begin{bmatrix}3\\-2\\1\end{bmatrix}$ an eigenvector of $A=\begin{bmatrix}-4&3&3\\2&-3&-2\\-1&0&-2\end{bmatrix}$?

**Solution:** Because $A\mathbf{x}=\begin{bmatrix}-15\\10\\-5\end{bmatrix}=(-5)\mathbf{x}$, it is an eigenvector.

**Problem 2:** Is $\lambda=4$ an eigenvalue of $A=\begin{bmatrix}3&0&-1\\2&3&1\\-3&4&5\end{bmatrix}$.

**Solution:** Because $A-\lambda I=\begin{bmatrix}-1&0&-1\\2&-1&1\\-3&4&1\end{bmatrix}$ is not invertible, it is an eigenvalue.

**Problem 3:** Find a basis for the eigenspace corresponding to $\lambda=-5$ of $A=\begin{bmatrix}-4&1&1\\2&-3&2\\3&3&-2\end{bmatrix}$.

**Solution:** It is enough to find a basis for the solution set of $(A-\lambda I)\mathbf{x}=\mathbf{0}$. By row reduction, we obtain 
$$\begin{bmatrix}1&1&1\\2&2&2\\3&3&3\end{bmatrix}\sim \begin{bmatrix}1&1&1\\0&0&0\\0&0&0\end{bmatrix}.$$
Therefore the parametric vector form of the solutions is $\begin{bmatrix}x_1\\x_2\\x_3\end{bmatrix}=\begin{bmatrix}-1\\1\\0\end{bmatrix}x_2+\begin{bmatrix}-1\\0\\1\end{bmatrix}x_3$. In other words, a basis can be $\begin{bmatrix}-1\\1\\0\end{bmatrix}, \begin{bmatrix}-1\\0\\1\end{bmatrix}.$

**Problem 4:** If $A^2$ is the zero matrix, then the only eigenvalue of $A$ is $$.

**Solution:** Suppose $\lambda$ is an eigenvalue of $A$ and $\mathbf{x}\neq \mathbf{0}$ that satisfies $A\mathbf{x}=\lambda\mathbf{x}$. Now we have $\mathbf{0}=A^2\mathbf{x}=A(A\mathbf{x})=A(\lambda\mathbf{x})=\lambda(A\mathbf{x})=\lambda(\lambda\mathbf{x})=\lambda^2\mathbf{x}$. Since $\mathbf{x}\neq 0$, $\lambda^2=0$, which implies $\lambda=0$.

**Problem 5:** Find the characteristic equation of $\begin{bmatrix}4&0&-1\\0&4&-1\\1&0&2\end{bmatrix}$.

**Solution:** The characteristic polynomial is $\mathrm{det}\left(\lambda I - A\right)$, which is equal to 
$$\begin{aligned}\begin{vmatrix}\lambda-4 & 0 & 1 \\ 0 & \lambda-4 & 1 \\ -1 & 0 & \lambda-2\end{vmatrix} &=(\lambda-4)\begin{vmatrix}\lambda-4 & 1 \\ 0 & \lambda - 2\end{vmatrix}+\begin{vmatrix}0 & \lambda-4 \\ -1 & 0\end{vmatrix}\\&=(\lambda-4)(\lambda-4)(\lambda-2)+(\lambda-4)\\&=(\lambda-4)(\lambda-3)^2.\end{aligned}$$
Therefore, the characteristic equation is $(\lambda-4)(\lambda-3)^2=0$.
