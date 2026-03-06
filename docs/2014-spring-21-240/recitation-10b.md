---
title: "Recitation 10B"
---

**Problem 1:** Let $y=\begin{bmatrix}4\\8\\1\end{bmatrix}, u_1=\begin{bmatrix}2/3\\1/3\\2/3\end{bmatrix}, u_2=\begin{bmatrix}-2/3\\2/3\\1/3\end{bmatrix}$, and $W=\mathrm{Span}\{u_1, u_2\}$. Let $U=\begin{bmatrix}u_1 & u_2\end{bmatrix}$. Compute $U^TU$ and $UU^T$. Compute $\mathrm{proj}_Wy$ and $(UU^T)y$.

**Solution:** Compute $U^TU=\begin{bmatrix}u_1^T\\u_2^T\end{bmatrix}\begin{bmatrix}u1 & u_2\end{bmatrix}=\begin{bmatrix}u_1^Tu_1 & u_1^Tu_2 \\u_2^Tu_1 & u_2^Tu_2\end{bmatrix}=\begin{bmatrix}1 & 0 \\ 0 & 1\end{bmatrix}$. This implies that $u_1, u_2$ form an orthornomal basis of $W$. On the other hand, $UU^T = \begin{bmatrix}2/3 & -2/3\\ 1/3 & 2/3\\ 2/3 & 1/3\end{bmatrix}\begin{bmatrix}2/3 & 1/3 & 2/3 \\ -2/3 & 2/3 & 1/3\end{bmatrix}=\frac{1}{9}\begin{bmatrix}8 & -2 & 2 \\ -2 & 5 & 4 \\ 2 & 4 & 5\end{bmatrix}$. Because $u_1, u_2$ form an orthonormal basis, the projection of $y$ onto $W$ is given by $(y\cdot u_1)u_1 + (y\cdot u_2)u_2 = \begin{bmatrix}2 \\ 4 \\ 5\end{bmatrix}$. Another way to compute the projection is to multiply $UU^T$ with $y$. In other words, $(UU^T)y$ gives the same vector $\begin{bmatrix}2 \\ 4 \\ 5\end{bmatrix}$.

**Problem 2:** Find an orthogonal basis for the column space of the matrix $\begin{bmatrix}1 & 2 & 5\\-1 & 1 & -4\\-1 & 4 & -3\\1 & -4 & 7\\1 & 2 & 1\end{bmatrix}$.

**Solution:** Denote its column vectors by $x_1, x_2, x_3$. Using Gram-Schimidt, we get $v_1 = x_1$, $v_2 = x_2 - \frac{x_2\cdot v_1}{v_1\cdot v_1}v_1 = \begin{bmatrix}3 \\ 0 \\ 3 \\ -3 \\ 3\end{bmatrix}\sim \begin{bmatrix}1 \\ 0 \\ 1 \\ -1 \\ 1\end{bmatrix}$ and $v_3 = x_3 - \frac{x_3\cdot v_1}{v_1\cdot v_1}v_1 - \frac{x_3\cdot v_2}{v_2\cdot v_2}v_2 = \begin{bmatrix}2 \\ 0 \\ 2 \\ 2 \\ -2\end{bmatrix}\sim \begin{bmatrix}1 \\ 0 \\ 1 \\ 1 \\ -1\end{bmatrix}$.
