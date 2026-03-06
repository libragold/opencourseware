---
title: "Recitation 6A"
---

**Problem 1:** When a deep space probe is launched, corrections may be necessary to place the probe on a precisely calculated trajectory. Radio telemetry provides a stream of vectors, $\mathbf{x_1}, \ldots, \mathbf{x_k}$, giving information at different times about how the probe&#8217;s position compares with its planned trajectory. Let $X_k$ be the matrix $[\mathbf{x_1} \ldots \mathbf{x_k}]$. The matrix $G_k=X_kX_k^T$ is computed as the radar data are analyzed. When $\mathbf{x_{k+1}}$ arrives, a new $G_{k+1}$ must be computed. Since the data vectors arrive at high speed, the computational burden could be severe. But partitioned matrix multiplication helps tremendously. Compute the column-row expansions of $G_k$ and $G_{k+1}$, and describe what must be computed in order to update $G_k$ to form $G_{k+1}$.

**Solution:** By the column-row expansion rule, 
$$G_k=X_kX_k^T=\mathbf{x_1}\mathbf{x_1}^T+\ldots+\mathbf{x_k}\mathbf{x_k}^T.$$
 Similarly, 
$$G_{k+1}=X_kX_k^T=\mathbf{x_1}\mathbf{x_1}^T+\ldots+\mathbf{x_{k+1}}\mathbf{x_{k+1}}^T.$$
 Therefore $G_{k+1}=G_k+\mathbf{x_{k+1}}\mathbf{x_{k+1}}^T$.

**Problem 2:** Solve the equation $A\mathbf{x}=\mathbf{b}$ by using the LU factorization for $A=\begin{bmatrix}2 & -6 & 4 \\ -4 & 8 & 0\\0 & -4 & 6\end{bmatrix}=\begin{bmatrix}1 & 0 & 0 \\ -2 & 1 & 0\\0 & 1 & 1\end{bmatrix}\begin{bmatrix}2 & -6 & 4 \\ 0 & -4 & 8\\0 & 0 & -2\end{bmatrix}$ and $\mathbf{b}=\begin{bmatrix}2 \\ -4 \\ 6\end{bmatrix}$.

**Solution:** Given the LU factorization of $A=LU$, it is enough to solve $L\mathbf{y}=\mathbf{b}$ and $U\mathbf{x}=\mathbf{y}$ consecutively. By row reduction, we have 
$$\begin{bmatrix}1 & 0 & 0 & 2 \\ -2 & 1 & 0 & -4\\0 & 1 & 1 & 6\end{bmatrix}\sim \begin{bmatrix}1 & 0 & 0 & 2 \\ 0 & 1 & 0 & 0\\0 & 1 & 1 & 6\end{bmatrix}\sim \begin{bmatrix}1 & 0 & 0 & 2 \\ 0 & 1 & 0 & 0\\0 & 0 & 1 & 6\end{bmatrix}.$$
 Therefore $\mathbf{y}=\begin{bmatrix}2 \\ 0 \\ 6\end{bmatrix}$. Again by row reduction, we have 
$$\begin{bmatrix}2 & -6 & 4 & 2 \\ 0 & -4 & 8 & 0\\0 & 0 & -2 & 6\end{bmatrix}\sim\begin{bmatrix}1 & -3 & 2 & 1 \\ 0 & 1 & -2 & 0\\0 & 0 & 1 & -3\end{bmatrix}\sim\begin{bmatrix}1 & -3 & 0 & 7 \\ 0 & 1 & 0 & -6\\0 & 0 & 1 & -3\end{bmatrix}\sim\begin{bmatrix}1 & 0 & 0 & -11 \\ 0 & 1 & 0 & -6\\0 & 0 & 1 & -3\end{bmatrix}.$$
 So the solution of the original equation is $\mathbf{x}=\begin{bmatrix}-11 \\ -6 \\ -3\end{bmatrix}$.
