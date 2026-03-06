---
title: "Recitation 4A"
---

**Problem 1:** Let $\mathbf{b}=\begin{bmatrix}-1 \\ 0 \\ 0\end{bmatrix}$ and let $A$ be the matrix $\begin{bmatrix}1 & -3 & 5 & -5\\0 & 1 & -3 & 5\\2 & -4 & 4 & -4\end{bmatrix}$. Is $\mathbf{b}$ in the range of the linear transformation $\mathbf{x}\mapsto A\mathbf{x}$? Why or why not?

**Solution:** Because \`$\mathbf{b}$ is in the range of the linear transformation $\mathbf{x}\mapsto A\mathbf{x}$&#8216; is equivalent to say \`$\mathbf{b}$ is a linear combination of the columns of $A$&#8216;. Therefore it is enough to check if the augmented matrix 
$$\begin{bmatrix}1 & -3 & 5 & -5 & -1\\0 & 1 & -3 & 5 & 0\\2 & -4 & 4 & -4 & 0\end{bmatrix}$$
 is consistent. By row reductions, its echelon form is  

$$\begin{bmatrix}1 & -3 & 5 & -5 & -1\\0 & 1 & -3 & 5 & 0\\0 & 0 & 0 & -4 & 2\end{bmatrix}$$
 which is consistent. Therefore $\mathbf{b}$ is in the range of the linear transformation.

**Problem 2:** Let $T: \mathbb{R}^2\to\mathbb{R}^2$ be the transformation that first performs a horizontal shear that maps $e_2$ into $e_2-e_1/2$ and then reflects the result through the $x_2$-axis. Assuming $T$ is linear, find its standard matrix.

**Solution:** It is enough to find $Te_1$ and $Te_2$. Noticing that $T$ transforms $e_1$ to $e_1$ via the horizontal shear first and then transforms $e_1$ to $-e_1$ via the reflection, $Te_1 = -e_1=\begin{bmatrix}-1\\ 0\end{bmatrix}$. On the other hand, $T$ transforms $e_2$ to $e_2 - e_1 / 2$ via the horizontal shear first and then transforms $e_2-e_1/2$ to $e_2+e_1/2$ via the reflection. Therefore $Te_2=e_2+e_1/2=\begin{bmatrix}1/2\\1\end{bmatrix}$. Hence the standard matrix of $T$ is 
$$\begin{bmatrix}-1 & 1/2\\0 & 1\end{bmatrix}.$$
