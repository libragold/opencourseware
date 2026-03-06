---
title: "Recitation 5A"
---

**System of Linear Equation, Row Reduction and Echelon Form**

  1. Three row operations: **replacement** (add multiple of a row to another), **interchange**, **scaling** (multiply a row by a non-zero number).
  2. Example of an **echelon form** 
$$\begin{bmatrix}* & * & * & * \\ 0 & 0 & * & * \\ 0 & 0 & 0 & *\end{bmatrix}.$$

  3. Example of a **reduced echelon form** 
$$\begin{bmatrix}1 & * & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1\end{bmatrix}.$$

  4. Question: Does every entry in a reduced echelon form have to be either 0 or 1?
  5. **Pivot position**: the positions of the leading entries in the echelon form.
  6. **Pivot column**: the columns of the pivot positions.
  7. Given a system of linear equations, the variables correspondent to pivot columns of the augmented matrix are **basic variables**. The rest of the variables are **free variables**.
  8. **Existence and uniqueness theorem**: A system of linear equations is consistent if and only if the rightmost column of its augmented matrix is not a pivot column. A consistent system of linear equations has a unique solution if and only if it has **no** free variables.

**Vector Equation and Matrix Equation**

  1. It only makes sense to multiply a matrix with a vector if the number of columns is equal to the dimension of the vector.
  2. **Row vector rule**: use dot product to compute multiplication of a matrix with a vector.
  3. Question: Given a constant $c$ and a vector $x\in\mathbb{R}^n$. Find out a matrix $A$ such that $c\mathbf{x}=A\mathbf{x}$ for all $\mathbf{x}$.

**Solution Sets of Linear Systems**

  1. **Parametric vector form**: One can write the solution set of a linear system in the vector form such as $\mathbf{x}=\mathbf{p}+s\mathbf{u}+t\mathbf{v}$. The geometric interpretation of this specific solution set is a plane through the point $\mathbf{p}$ spanned by $\mathbf{u}, \mathbf{v}$.
  2. Suppose the solution set of the **homogeneous system** $A\mathbf{x}=\mathbf{0}$ is $\mathbf{x}=s\mathbf{u}+t\mathbf{v}$ and the **non-homogeneous system** $A\mathbf{x}=\mathbf{b}$ has a solution $\mathbf{p}$. Then the solution set of the non-homogeneous system is exactly $\mathbf{x}=\mathbf{p}+s\mathbf{u}+t\mathbf{v}$, the solution set of the homogeneous one translated by $\mathbf{p}$.
  3. Question: Is homogeneous system always consistent?

**Linear Independence**

  1. A set of $n$ dimensional vectors $\{v_1, \ldots, v_p\}$ is **linearly independent** if and only if $v_1x_1 + \ldots + v_px_p=0$ has only the trivial solution.
  2. If $p > n$, then the set of $n$ dimensional vectors $\{v_1, \ldots, v_p\}$ is always **linearly dependent.**
  3. **Characterization of Linear Dependence:** the set of vectors $\{v_1, \ldots, v_p\}$ is linearly dependent if and only if one of the vectors is a linear combination of the rest.
  4. Question: Suppose $\{v_1, v_2, v_3\}$ is linearly dependent. Is it necessarily true that $v_1$ is a linear combination of $v_2, v_3$?

**Linear Transformation**

  1. A linear transformation $T$ is associated to its **standard matrix** $A$ in the sense that $T(x)=Ax$ for all vectors $x$.
  2. A linear transformation $T$ is **one-to-one** if and only if $Ax=0$ only has the trivial solution, where $A$ is $T$&#8216;s standard matrix. It is **onto** if and only if $Ax=b$ has a solution for all $b$.
  3. Practically, in order to see if $T$ is one-to-one, one only needs to check if all columns of $A$ are pivot columns. To see if $T$ is onto, one only needs to check if every row of $A$ contains a pivot position.
