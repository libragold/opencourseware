---
title: "Recitation 7A"
---

Background: A graph consists of vertices and edges. An edge is an unordered pair of vertices. Two vertices are adjacent if they appear in some edge of the graph.

In this example, vertex 1 and 2 are adjacent while 1 and 4 are not. The degree of a vertex is the number of edges adjacent to the vertex. In this example, the vertex degrees are 2, 3, 3, 2. In the mathematical field of graph theory, the Laplacian matrix of a graph with $n$ vertices is an $n\times n$ matrix $L:=(l_{ij})$ defined as 
$$l_{ij}:=\begin{cases}\text{degree of vertex }i & \text{if }i=j \\ -1 & \text{if }i\neq j\text{ and vertex }i\text{ is adjacent to vertex }j \\ 0 & \text{otherwise}\end{cases}.$$


**Problem 1:** Find the Laplacian matrix $Q$ for the example kite graph G and calculate its determinant, $(1,1)$-cofactor and $(1,2)$-cofactor.

Solution: According to the definition of the Laplacian matrix, 
$$Q = \begin{bmatrix}2 & -1 & -1 & 0 \\ -1 & 3 & -1 & -1 \\ -1 & -1 & 3 & -1 \\ 0 & -1 & -1 & 2\end{bmatrix}.$$
 The row replacements in row 1, 2, 3 do not change the determinant: 
$$\begin{aligned}\mathrm{det}Q & = \begin{vmatrix}2 & -1 & -1 & 0 \\ -1 & 3 & -1 & -1 \\ -1 & -1 & 3 & -1 \\ 0 & -1 & -1 & 2\end{vmatrix} \\ & = \begin{vmatrix}2 & -1 & -1 & 0 \\ -1 & 3 & -1 & -1 \\ -1 & -1 & 3 & -1 \\ 0+2-1-1 & -1-1+3-1 & -1-1+3-1 & 2+0-1-1\end{vmatrix} \\ & = \begin{vmatrix}2 & -1 & -1 & 0 \\ -1 & 3 & -1 & -1 \\ -1 & -1 & 3 & -1 \\ 0& 0 & 0 & 0\end{vmatrix} \\ & = 0.\end{aligned}$$
 The $(1,1)$-cofactor is 
$$(-1)^{1+1}\begin{vmatrix}3 & -1 & -1\\ -1 & 3 & -1 \\ -1 & -1 & 2 \end{vmatrix}=8.$$
 The $(1,2)$-cofactor is 
$$(-1)^{1+2}\begin{vmatrix}-1 & -1 & 0 \\ -1 & 3 & -1 \\ -1 & -1 & 2\end{vmatrix}=8.$$


Remark: Here are two facts about Laplacian matrices:

  1. Its determinant is always 0.
  2. All cofactors are equal.

**Problem 2:** Prove that the determinant of the matrix 
$$\begin{bmatrix}1 & 1 & 1 \\ a & b & c \\ a^2 & b^2 & c^2\end{bmatrix}$$
 is not equal to 0 if and only if $a, b, c$ are distinct numbers.

Solution: Row replacements do not change the determinant: 
$$\begin{aligned}\begin{vmatrix}1 & 1 & 1 \\ a & b & c \\ a^2 & b^2 & c^2\end{vmatrix} & = \begin{vmatrix}1 & 1 & 1 \\ a & b & c \\ 0 & b^2-ab & c^2-ac\end{vmatrix} \\ & = \begin{vmatrix}1 & 1 & 1 \\ 0 & b-a & c-a \\ 0 & b(b-a) & c(c-a)\end{vmatrix} \\ & = \begin{vmatrix}1 & 1 & 1 \\ 0 & b-a & c-a \\ 0 & 0 & (c-b)(c-a)\end{vmatrix}\\&=&(b-a)(c-b)(c-a).\end{aligned}$$
 Therefore the determinant $(a-b)(b-c)(c-a)$ is not zero if and if none of the factors is zero, i.e., $a,b,c$ take different values.
