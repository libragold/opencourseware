---
title: "Recitation 11A"
---

**Problem 1:** Describe all least-squares solutions of the equation $Ax=b$, where $A=\begin{bmatrix}1 & 1 & 0\\ 1 & 1 & 0\\ 1 & 0 & 1\\ 1 & 0 & 1\end{bmatrix}, b=\begin{bmatrix}1 \\ 3 \\ 8 \\ 2\end{bmatrix}$.

**Solution:** All least-squares solutions of $Ax=b$ is given by $A^TAx=A^Tb$. Note $A^TA=\begin{bmatrix}4 & 2 & 2 \\ 2 & 2 & 0 \\ 2 & 0 & 2\end{bmatrix}, A^Tb=\begin{bmatrix}14 \\ 4 \\ 10\end{bmatrix}$. The solution of $A^TAx=A^Tb$ is $x_1 = 5-x_3, x_2 = 2-x_3, x_3 = x_3$, which also describes all least-squares solutions of $Ax=b$.

**Problem 2:** Find (a) the orthogonal projection of $b$ onto $\mathrm{Col}A$ and (b) a least-squares solution of $Ax=b$, where $A=\begin{bmatrix}1 & 5 \\ 3 & 1 \\ -2 & 4\end{bmatrix}, b=\begin{bmatrix}4\\-2\\-3\end{bmatrix}$.

**Solution:** (a) Suppose the columns of $A$ are $a_1, a_2$. The projection $\hat{b} = \frac{b\cdot a_1}{a_1\cdot a_1}a_1 + \frac{b\cdot a_2}{a_2\cdot a_2}a_2 = \frac{2}{7}a_1 + \frac{1}{7}a_2 =$. (b) The least-square solution is given by the coefficients in the projection identity $\hat{x}=\begin{bmatrix}2/7 \\ 1/7\end{bmatrix}$.

**Problem 3:** Find (a) QR factorization of $A=\begin{bmatrix}1 & 2 & 5\\ -1 & 1 & -4 \\ -1 & 4 & -3\\ 1 & -4 & 7 \\ 1 & 2 & 1\end{bmatrix}$ and (b) a least-squares solution of $Ax=b$, where $b=\begin{bmatrix}7\\2\\3\\6\\5\end{bmatrix}$.

**Solution:** (a) Denote its column vectors by $x_1, x_2, x_3$. Using Gram-Schimidt, we get $v_1 = x_1 = \begin{bmatrix}1 \\ -1 \\ -1 \\ 1 \\ 1\end{bmatrix}$, $v_2 = x_2 - \frac{x_2\cdot v_1}{v_1\cdot v_1}v_1 = \begin{bmatrix}3 \\ 0 \\ 3 \\ -3 \\ 3\end{bmatrix}\sim \begin{bmatrix}1 \\ 0 \\ 1 \\ -1 \\ 1\end{bmatrix}$ and $v_3 = x_3 - \frac{x_3\cdot v_1}{v_1\cdot v_1}v_1 - \frac{x_3\cdot v_2}{v_2\cdot v_2}v_2 = \begin{bmatrix}2 \\ 0 \\ 2 \\ 2 \\ -2\end{bmatrix}\sim \begin{bmatrix}1 \\ 0 \\ 1 \\ 1 \\ -1\end{bmatrix}$. Normalize $v_1, v_2, v_3$ and get $\hat{v}_1 = v_1 / \sqrt{5}$, $\hat{v}_2 = v_2 / 2$ and $\hat{v}_3 = v_3 / 2$. Therefore $Q=\begin{bmatrix}1/\sqrt{5} & 1/2 & 1/2 \\ -1/\sqrt{5} & 0 & 0 \\ -1/\sqrt{5} & 1/2 & 1/2 \\ 1/\sqrt{5} & -1/2 & 1/2 \\ 1/\sqrt{5} & 1/2 & -1/2\end{bmatrix}$ and $R = Q^TA = \begin{bmatrix}\sqrt(5) & \sqrt(5) & 5\sqrt(5) \\ 0 & 6 & -2 \\ 0 & 0 & 4\end{bmatrix}$. (b) The least-squares solution of $Ax=b$ is given by $R\hat{x}=Q^Tb=\begin{bmatrix}13/\sqrt{5} \\ 9/2 \\ 11/2\end{bmatrix}$. By back substitution, we obtain $\hat{x}=\begin{bmatrix}-203 / 120 \\ 29/24 \\ 11/8\end{bmatrix}$.
