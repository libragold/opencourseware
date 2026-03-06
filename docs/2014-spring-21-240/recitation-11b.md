---
title: "Recitation 11B"
---

**Problem:** Suppose $M$ is the matrix  $\begin{bmatrix}3&-2&4\\-2&6&2\\4&2&3\end{bmatrix}$. Follow the steps to find the orthogonal diagonalization of $M$  
(a) Find the eigenvalues of $M$ and their correspondent eigenspaces.  
(b) Find the orthonormal basis of each eigenspace.  
(c) Find the orthogonal diagonalization of $M$.

**Solution:**

(a) The characteristic equation is given by 
$$\begin{vmatrix}3-\lambda & -2 & 4 \\ -2 & 6-\lambda & 2 \\ 4 & 2 & 3-\lambda\end{vmatrix}=-(\lambda+2)(\lambda-7)^2$$
 Therefore the eigenvalues are $\lambda_1=-2, \lambda_2=7$. The eigenspace associated to $\lambda=-2$ is the solution set of 
$$\begin{bmatrix}5 & -2 & 4 \\ -2 & 8 & 2 \\ 4 & 2 & 5\end{bmatrix}\begin{bmatrix}x_1 \\ x_2 \\ x_3\end{bmatrix}=\begin{bmatrix}0 \\ 0 \\ 0\end{bmatrix}\implies \begin{bmatrix}x_1 \\ x_2 \\ x_3\end{bmatrix}=x_2\begin{bmatrix}2 \\ 1 \\ -2\end{bmatrix},$$
 that is, the subspace $V_1$ spanned by $\begin{bmatrix}2 \\ 1 \\ -2\end{bmatrix}$. The eigenspace associated to $\lambda=7$ is the solution set of 
$$\begin{bmatrix}-4 & -2 & 4 \\ -2 & -1 & 2 \\ 4 & 2 & -4\end{bmatrix}\implies \begin{bmatrix}x_1 \\ x_2 \\ x_3\end{bmatrix}=x_1\begin{bmatrix}1 \\ -2 \\ 0\end{bmatrix}+x_3\begin{bmatrix}0 \\ 2 \\ 1\end{bmatrix},$$
 that is the subspace $V_2$ spanned by $\begin{bmatrix}1 \\ -2 \\ 0\end{bmatrix}$ and $\begin{bmatrix}0 \\ 2 \\ 1\end{bmatrix}$. Remark: The dimension of each eigenspace is equal to the algebraic multiplicity of each eigenvalue in the characteristic equation. The eigenspaces are mutually orthogonal.

(b) The orthonormal basis for $V_1$ is formed by 
$$\begin{bmatrix}2 \\ 1 \\ -2\end{bmatrix}\sim\begin{bmatrix}2/3 \\ 1/3 \\ -2/3\end{bmatrix}.$$
 The orthonormal basis for $V_2$ is formed by 
$$\begin{bmatrix}1 \\ -2 \\ 0\end{bmatrix}\sim \begin{bmatrix}1/\sqrt{5} \\ -2/\sqrt{5} \\ 0\end{bmatrix}, \begin{bmatrix}0 \\ 2 \\ 1\end{bmatrix} - (-4/\sqrt{5})\begin{bmatrix}1/\sqrt{5} \\ -2/\sqrt{5} \\ 0\end{bmatrix} = \begin{bmatrix}4/5 \\ -2/5 \\ 1\end{bmatrix}\sim \begin{bmatrix}4/\sqrt{45} \\ 2/\sqrt{45} \\ 5/\sqrt{45}\end{bmatrix}.$$


(c) Put $P=\begin{bmatrix}2/3 & 1/\sqrt{5} & 4/\sqrt{45}\\1/3 & -2/\sqrt{5} & 2/\sqrt{45}\\-2/3 & 0 & 5/\sqrt{45}\end{bmatrix}$ and $D=\begin{bmatrix}-2 & 0 & 0\\ 0 & 7 & 0\\ 0 & 0 & 7\end{bmatrix}$. Then $M=PDP^T$.
