---
title: "Recitation 1A"
---

Today we covered two examples.

**Example 1:** Solve the given system of equations. 
$$\begin{aligned}x_1 & - & 2x_2 & + & x_3 & = & 0\\& & 2x_2 & - & 8x_3 & = & 0\\-4x_1 & + & 5x_2 & + & 9x_3 & = & 9.\end{aligned}$$


**Solution 1:** We turn the system into an augmented matrix. 
$$\begin{bmatrix}1 & -2 & 1 & 0\\0 & 2 & -8 & 8\\-4 & 5 & 9 & 9\end{bmatrix}$$
 Add 4 times the first row to the third row. 
$$\begin{bmatrix}1 & -2 & 1 & 0\\0 & 2 & -8 & 8\\0 & -3 & 13 & 9\end{bmatrix}$$
 Add the second row to the first row.
$$\begin{bmatrix}1 & 0 & -7 & 8\\0 & 2 & -8 & 8\\0 & -3 & 13 & 9\end{bmatrix}$$
 Divide the second row by 2. 
$$\begin{bmatrix}1 & 0 & -7 & 8\\0 & 1 & -4 & 4\\0 & -3 & 13 & 9\end{bmatrix}$$
 Add 3 times the second row to the third row. 
$$\begin{bmatrix}1 & 0 & -7 & 8\\0 & 1 & -4 & 4\\0 & 0 & 1 & 21\end{bmatrix}$$
 Add 7 times the third row to the first row and add 4 times the third row to the second row. 
$$\begin{bmatrix}1 & 0 & 0 & 155\\0 & 1 & 0 & 88\\0 & 0 & 1 & 21\end{bmatrix}$$
 This gives the solution 
$$x_1=155, x_2=88, x_3=21.$$


**Example 2:** Determine if the following system is consistent. 
$$\begin{aligned}& & x_2 & - & 4x_3 & = & 8\\2x_1& - & 3x_2 &+ & 2x_3& = & 1\\5x_1 & - & 8x_2 & + & 7x_3 & = & 1.\end{aligned}$$


**Solution 2:** First we write down the augmented matrix. 
$$\begin{bmatrix}0 & 1 & -4 & 8\\2 & -3 & 2 & 1\\5 & -8 & 7 & 1\end{bmatrix}$$
 Interchange the first row and the second row because we want to obtain $x_1$ in the first equation. 
$$\begin{bmatrix}2 & -3 & 2 & 1\\0 & 1 & -4 & 8\\5 & -8 & 7 & 1\end{bmatrix}$$
 Add -5/2 times row 1 to row 3. 
$$\begin{bmatrix}2 & -3 & 2 & 1\\0 & 1 & -4 & 8\\0 & -1/2 & 2 & -3/2\end{bmatrix}$$
 Add 1/2 times row 2 to row 3. 
$$\begin{bmatrix}2 & -3 & 2 & 1\\0 & 1 & -4 & 8\\0 & 0 & 0 & 5/2\end{bmatrix}$$
 The last row in the augmented matrix says $0=5/2$ which is impossible. Therefore the original system is inconsistent, i.e., has no solution.
