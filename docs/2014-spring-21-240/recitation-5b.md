---
title: "Recitation 5B"
---

**The Invertible Matrix Theorem:** Let $A$ be a square $n\times n$ matrix. Then the following statements are equivalent.

* $A$ is invertible matrix.
* $A$ is row equivalent to the $n\times n$ identity matrix.
* $A$ has $n$ pivot positions.
* The equation $Ax=0$ has only the trivial solution.
* The columns of $A$ form a linearly independent set.
* The linear transformation $x\mapsto Ax$ is one-to-one.
* The equation $Ax=b$ has at least one solution for each $b$ in $\mathbb{R}^n$.
* The columns of $A$ span $\mathbb{R}^n$.
* The linear transformation $x\mapsto Ax$ maps $\mathbb{R}^n$ onto $\mathbb{R}^n$.
* There is an $n\times n$ matrix $C$ such that $CA=I$.
* There is an $n\times n$ matrix $D$ such that $AD=I$.
* $A^T$ is an invertible matrix.

**Problem 1:** Suppose $AB=AC$, where $B$ and $C$ are $n\times p$ matrices and $A$ is invertible. Show that $B=C$. Is this true, in general, when $A$ is not invertible?

**Solution:** If $A$ is invertible, then we can multiply $A^{-1}$ on the left of each side of $AB=AC$ and get $A^{-1}AB=A^{-1}AC$. As $A^{-1}A=I$, $B=C$. In general, it is not true that $AB=AC$ implies $B=C$. For instance, if $A$ is the zero matrix, then $AB=AC$ always holds but it is not necessary the case that $B=C$.

**Problem 2:** Suppose $A$, $B$ and $C$ are invertible $n\times n$ matrices. Show that $ABC$ is also invertible by producing a matrix $D$ such that $(ABC)D=I$ and $D(ABC)=I$.

**Solution:** Let $D$ be $C^{-1}B^{-1}A^{-1}$. Easy to check $(ABC)D=I$ and $D(ABC)=I$.

**Problem 3:** Determine which of the matrices are invertible. 
$$\begin{bmatrix}5 & 7 \\ -3 & -6\end{bmatrix}, \begin{bmatrix}3 & 0 & 0 \\ -3 & -4 & 0 \\ 8 & 5 & -3\end{bmatrix}, \begin{bmatrix}3 & 0 & -3 \\ 2 & 0 & 4 \\ -4 & 0 & 7\end{bmatrix}$$

**Solution:** As for the first matrix, as two columns are not multiple of each other, they are linearly independent. By the invertible matrix theorem, it is invertible. As for the second one, its transpose has $n$ pivot positions. By the invertible matrix theorem, the transpose is invertible. Again by the theorem, the second matrix itself is invertible. As for the last one, its second column is a zero vector. By the invertible matrix theorem, the matrix is not invertible because its columns are not linearly independent.

**Problem 4:** Let $A$ and $B$ be $n\times n$ matrices. Show that if $AB$ is invertible, so is $A$.

**Solution:** By the invertible matrix theorem, we can find $C$ such that $ABC=I$. In other words, $A(BC)=I$. Again by the invertible matrix theorem, $A$ is invertible because $BC$ is the left inverse of $A$.

**Problem 5:** Suppose $T$ and $U$ are linear transformations from $\mathbb{R}^n$ to $\mathbb{R}^n$ such that $T(U(x))=x$ for all $x$ in $\mathbb{R}^n$. Is it true that $U(T(x))=x$ for all $x$ in $\mathbb{R}^n$?

**Solution:** Let $A$ and $B$ be the standard matrix of $T$ and $U$. The assumption that $T(U(x))=x$ for all $x$ implies $AB=I$. Therefore $A$ and $B$ are inverse of each other and $BA=I$. Hence $U(T(x))=x$ for all $x$ in $\mathbb{R}^n$.
