---
title: "Recitation 4B"
---

**Problem 1:** Let $T: \mathbb{R}^2\to\mathbb{R}^2$ be the transformation that rotates each point in $\mathbb{R}^2$ about the origin through an angle $\phi$, with counterclockwise rotation for a positive angle. Assuming such a transformation is linear, find the standard matrix $A$ of this transformation.

**Solution:** It is enough to find $T(e_1), T(e_2)$ where $e_1$ and $e_2$ are the columns of the identity matrix. According to the description of $T$, we have 
$$T(e_1)=\begin{pmatrix}\cos\phi \\ \sin\phi\end{pmatrix}, T(e_2)=\begin{pmatrix}-\sin\phi \\ \cos\phi\end{pmatrix}.$$
 Therefore the standard matrix 
$$A=\begin{pmatrix}T(e_1) & T(e_2)\end{pmatrix}=\begin{pmatrix}\cos\phi & -\sin\phi \\ \sin\phi & \cos\phi\end{pmatrix}.$$

**Problem 2:** Let $T$ be the linear transformation whose standard matrix is 
$$A=\begin{pmatrix}1 & -4 & 8 & 1\\ 0 & 2 & -1 & 3 \\ 0 & 0 & 0 & 5\end{pmatrix}$$
 Does $T$ maps $\mathbb{R}^4$ onto $\mathbb{R}^3$? Is $T$ a one-to-one mapping?

**Solution:** Because the standard matrix is already an echelon form with each row containing a pivot position, its columns span $\mathbb{R}^3$. In other words, $T$ maps $\mathbb{R}^4$ onto $\mathbb{R}^3$. On the other hand, since not every columns is a pivot column, $Tx=0$ has a non-trivial solution. In other words, $T$ is not one-to-one.

**Problem 3:** Let $T(x_1, x_2)=(3x_1+x_2,5x_1+7x_2, x_1+3x_2)$. Show that $T$ is a one-to-one linear transformation. Does $T$ map $\mathbb{R}^2$ onto $\mathbb{R}^3$?

**Solution:** First we shall find the standard matrix of $T$. Let $x_1=1$ and $x_2=0$. We obtain 
$$T(e_1)=T \begin{pmatrix}1\\0\end{pmatrix}= \begin{pmatrix}3 \\ 5 \\ 1\end{pmatrix}.$$
 Let $x_1=0$ and $x_2=1$. We obtain 
$$T(e_2)=T \begin{pmatrix}0 \\ 1\end{pmatrix}= \begin{pmatrix}1 \\ 7 \\ 3\end{pmatrix}.$$
 Therefore the standard matrix of $T$ is 
$$A=\begin{pmatrix}3 & 1 \\ 5 & 7 \\ 1 & 3\end{pmatrix}$$
 Since the echelon form of $A$ contains two pivot columns, $T$ is one-to-one. On the other hand, since $A$ has three rows, not every row has a pivot position. Therefore $T$ does not map $\mathbb{R}^2$ onto $\mathbb{R}^3$. In general, a linear transformation never maps $\mathbb{R}^m$ onto $\mathbb{R}^n$ if $m < n$.
