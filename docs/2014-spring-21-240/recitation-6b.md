---
title: "Recitation 6B"
---

**Problem 1:** Solve the equation $A\mathbf{x}=\mathbf{b}$ by using the LU factorization for $A=\begin{bmatrix}2&-4&2\\-4&5&2\\6&-9&1\end{bmatrix}=\begin{bmatrix}1&0&0\\-2&1&0\\3&-1&1\end{bmatrix}\begin{bmatrix}2&-4&2\\0&-3&6\\0&0&1\end{bmatrix}$ and $\mathbf{b}=\begin{bmatrix}6\\0\\6\end{bmatrix}$.

**Solution:** Let 
$$L=\begin{bmatrix}1&0&0\\-2&1&0\\3&-1&1\end{bmatrix}, U=\begin{bmatrix}2&-4&2\\0&-3&6\\0&0&1\end{bmatrix}.$$
 First we would like to solve $L\mathbf{y}=\mathbf{b}$. By forward substitution, we get $y_1 = 6, y_2=0+2y_1=12, y_3=6-3y_1+y_2=0$. Finally we would like to solve $U\mathbf{x}=\mathbf{y}$. By backward substitution, we get $x_3=0, x_2=(12-6x_3)/(-3)=-4, x_1=(6+4x_2-2x_3)/2=-5$.

**Problem 2:** Find an LU factorization of $A=\begin{bmatrix}2&-4&-2&3\\6&-9&-5&8\\2&-7&-3&9\\4&-2&-2&-1\\-6&3&3&4\end{bmatrix}$.

**Solution:** Start row-reducing the matrix $A$: 
$$\begin{bmatrix}\mathbf{2}&-4&-2&3\\\mathbf{6}&-9&-5&8\\\mathbf{2}&-7&-3&9\\\mathbf{4}&-2&-2&-1\\\mathbf{-6}&3&3&4\end{bmatrix}\sim \begin{bmatrix}2&-4&-2&3\\0&\mathbf{3}&1&-1\\0&\mathbf{-3}&-1&6\\0&\mathbf{6}&2&-7\\0&\mathbf{-9}&-3&13\end{bmatrix}\sim \begin{bmatrix}2&-4&-2&3\\0&3&1&-1\\0&0&0&\mathbf{5}\\0&0&0&\mathbf{-5}\\0&0&0&\mathbf{10}\end{bmatrix}\sim \begin{bmatrix}2&-4&-2&3\\0&3&1&-1\\0&0&0&5\\0&0&0&0\\0&0&0&0\end{bmatrix}=U$$
 Pick out the entries in boldface, normalized and assemble them to make 
$$L=\begin{bmatrix}1 & 0 & 0 & 0 & 0\\ 3 & 1 & 0 & 0 & 0\\ 1 & -1 & 1 & 0 & 0\\ 2 & 2 & -1 & 1 & 0 \\ -3 & -3 & 2 & 0 & 1\end{bmatrix}.$$


**Problem 3:** Consider the production model $\mathbf{x}=C\mathbf{x}+\mathbf{d}$ for an economy with two sectors, where 
$$C=\begin{bmatrix}.0 & .5\\ .6 & .2\end{bmatrix}, \mathbf{b}=\begin{bmatrix}50\\30\end{bmatrix}.$$
 Use an inverse matrix to determine the production level necessary to satisfy the final demand.

**Solution(sketch):** According to the equation, we obtain $(I-C)\mathbf{x}=\mathbf{d}$. Then use Gaussian elimination to solve it.
