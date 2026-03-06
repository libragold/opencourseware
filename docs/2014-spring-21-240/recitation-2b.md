---
title: "Recitation 2B"
---

**Example 1:** Given $u=\begin{bmatrix}1\\-2\end{bmatrix}$ and $v=\begin{bmatrix}2\\-5\end{bmatrix}$, find $4\mathbf{u}, (-3)\mathbf{v}$ and $4\mathbf{u}+(-3)\mathbf{v}$.

**Solution:** $4\mathbf{u}=\begin{bmatrix}4\\-8\end{bmatrix}$, $(-3)\mathbf{v}=\begin{bmatrix}-6\\15\end{bmatrix}$ and $4\mathbf{u}+(-3)\mathbf{v}=\begin{bmatrix}-2\\7\end{bmatrix}$.

**Example 2:** Let $\mathbf{a_1}=\begin{bmatrix}1\\-2\\-5\end{bmatrix}$, $\mathbf{a_2}=\begin{bmatrix}2\\5\\6\end{bmatrix}$ and $\mathbf{b}=\begin{bmatrix}7\\4\\-3\end{bmatrix}$. Determine whether $\mathbf{b}$ can be generated as a linear combination of $\mathbf{a_1}$ and $\mathbf{a_2}$. That is, determine whether weights $x_1$ and $x_2$ exist such that 
$$x_1\mathbf{a_1} + x_2\mathbf{a_2} = \mathbf{b}.$$
 If the vector equation has a solution, find it.

**Solution:** The following augmented matrix corresponds to the vector equation $x_1\mathbf{a_1}+x_2\mathbf{a_2}=\mathbf{b}$. 
$$\begin{bmatrix}1 & 2 & 7\\-2 & 5 & 4\\ -5 & 6 & -3\end{bmatrix}$$
 Reduce this matrix to its echelon form 
$$\begin{bmatrix}1 & 2 & 7\\0 & 1 & 2\\ 0 & 0 & 0\end{bmatrix}$$
 which tells us 
$$x_1 = 3, x_2=2.$$


**Example 3:** For $\mathbf{v_1}, \mathbf{v_2}, \mathbf{v_3}$ in $\mathbb{R}^m$, write the linear combination $3\mathbf{v_1}-5\mathbf{v_2}+7\mathbf{v_3}$ as a matrix times a vector.

**Solution:** Suppose $A$ is an $m\times 3$ matrix and $\mathbf{x}$ is in $\mathbb{R}$

**Example 4:** Compute $A\mathbf{x}$, where $A=\begin{bmatrix}2 & 3 & 4\\ -1 & 5 & -3\\ 6 & -2 & 8\end{bmatrix}$ and $x=\begin{bmatrix}x_1 \\ x_2 \\ x_3\end{bmatrix}$.

**Solution:** Use the Row-Vector Rule, we have 
$$\begin{bmatrix}2 & 3 & 4\\ -1 & 5 & -3\\ 6 & -2 & 8\end{bmatrix}\begin{bmatrix}x_1 \\ x_2 \\ x_3\end{bmatrix} = \begin{bmatrix}2x_1+3x_2+4x_3\\-x_1+5x_2-3x_3\\6x_1-2x_2+8x_3\end{bmatrix}.$$


**Example 5:** Determine if the following homogeneous system has a nontrivial solution. Then describe the solution set. 
$$\begin{aligned}3x_1 + 5x_2 - 4x_3 &=& 0\\-3x_1 - 2x_2 + 4x_3 &=& 0\\6x_1 + x_2 - 8x_3 &=& 0\end{aligned}$$


**Solution:** Apply row reduction on the correspondent augmented matrix 
$$\begin{bmatrix}3 & 5 & -4 & 0\\ -3 & -2 & 4 & 0\\ 6 & 1 & -8 & 0\end{bmatrix}.$$
 We obtain 
$$\begin{bmatrix}3 & 0 & -4 & 0\\0 & 3 & 0 & 0\\0 & 0 & 0 & 0\end{bmatrix}$$
  
which tells us that the solution set is $x_1 = 4x_3/3, x_2 = 0$ and $x_3$ is a free variable. For instance, when $x_3=3$, $x_1=4, x_2=0, x_3=3$ is a nontrivial solution.

**Example 6:** Describe all solutions of $A\mathbf{x}=\mathbf{b}$, where 
$$A=\begin{bmatrix}3 & 5 & -4\\-3 & -2 & 4\\6 & 1 & -8\end{bmatrix}$$
 and 
$$\mathbf{b}=\begin{bmatrix}7\\-1\\-4\end{bmatrix}.$$


**Solution:** Apply row reduction on the correspondent augmented matrix 
$$\begin{bmatrix}3 & 5 & -4 & 7\\ -3 & -2 & 4 & -1\\ 6 & 1 & -8 & -4\end{bmatrix}.$$
 We obtain 
$$\begin{bmatrix}3 & 5 & -4 & 7\\ 0 & 3 & 0 & 6\\ 0 & -9 & 0 & -18\end{bmatrix}$$
 and then 
$$\begin{bmatrix}3 & 0 & -4 & -3\\ 0 & 1 & 0 & 2\\ 0 & 0 & 0 & 0\end{bmatrix},$$
  
which tells us $x_1=-1+4x_3/3, x_2=2$ and $x_3$ is a free variable.
