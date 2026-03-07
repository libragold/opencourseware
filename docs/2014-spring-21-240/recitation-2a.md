---
title: "Recitation 2A"
---

**Definition:** If $A$ is an $m\times n$ matrix with columns $\mathbf{a_1}, \ldots, \mathbf{a_n}$ and if $\mathbf{x}$ is in $\mathbb{R}^n$, then the product of $A$ and $\mathbf{x}$, denoted by $Ax$, is 
$$[\mathbf{a_1} \ldots \mathbf{a_n}]\begin{bmatrix}x_1\\ \vdots\\ x_n\end{bmatrix}=x_1\mathbf{a_1} + \ldots + x_n\mathbf{a_n}.$$

**Example 1:**

1. 
$$\begin{bmatrix}1 & 2 & -1\\0 & -5 & 3\end{bmatrix}\begin{bmatrix}4\\3\\7\end{bmatrix}=4\begin{bmatrix}1\\0\end{bmatrix}+3\begin{bmatrix}2\\-5\end{bmatrix}+7\begin{bmatrix}-1\\3\end{bmatrix}=\begin{bmatrix}3\\ 6\end{bmatrix}.$$

2. 
$$\begin{bmatrix}2 & -3 \\8 & 0 \\ -5 & 2 \end{bmatrix}\begin{bmatrix}4\\7\end{bmatrix}=4\begin{bmatrix}2\\8\\-5\end{bmatrix}+7\begin{bmatrix}-3\\0\\2\end{bmatrix}=\begin{bmatrix}-13\\ 32\\-6\end{bmatrix}.$$

**Row vector rule:** If $A$ is an $m\times n$ matrix with rows $\begin{bmatrix}\mathbf{b_1}\\ \vdots \\ \mathbf{b_m}\end{bmatrix}$ and if $\mathbf{x}$ is in $\mathbb{R}^n$, then the product of $A$ and $\mathbf{x}$, denoted by $Ax$, is equal to 
$$\begin{bmatrix}\mathbf{b_1}\\ \vdots \\ \mathbf{b_m}\end{bmatrix}\mathbf{x}=\begin{bmatrix}\mathbf{b_1}\cdot\mathbf{x}\\ \vdots \\ \mathbf{b_m}\cdot\mathbf{x}\end{bmatrix}.$$

**Example 2:** For $\mathbf{v_1}, \mathbf{v_2}, \mathbf{v_3}$ in $\mathbb{R}^m$, write the linear combination $3\mathbf{v_1}-5\mathbf{v_2}+7\mathbf{v_3}$ as a matrix times a vector.

**Solution:** 
$$3\mathbf{v_1}-5\mathbf{v_2}+7\mathbf{v_3} = [\mathbf{v_1}, \mathbf{v_2}, \mathbf{v_3}]\begin{bmatrix}3\\-5\\7\end{bmatrix}=A\mathbf{x}.$$
