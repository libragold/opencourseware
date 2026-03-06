---
title: "Recitation 10A"
---

Denote a $2\times 2$ orthogonal matrix by $\begin{bmatrix}a & c\\ b & d\end{bmatrix}$.

Since it is an orthogonal matrix, the entries satisfy 
$$a^2+b^2=1, ac+bd=0, c^2+d^2=1.$$


Since $a^2+b^2=1$, it is standard to parametrize $a$ and $b$ by $a=\cos\theta$ and $b=\sin\theta$. Using the last two equations, we can get $c=\mp \sin\theta, d=\pm\cos\theta$. In other words, we have two types of orthogonal matrix 
$$A = \begin{bmatrix}\cos\theta & -\sin\theta \\ \sin\theta & \cos\theta\end{bmatrix}, B = \begin{bmatrix}\cos\theta & \sin\theta \\ \sin\theta & -\cos\theta\end{bmatrix}.$$


**Problem:** What are the eigenvalues and correspondent eigenvectors of the matrix $B$? How are those two eigenvectors related to each other? What does the linear transformation $S$ that sends $x$ to $Bx$ do? What about the linear transformation $T$ that sends $x$ to $B^2x$?

**Solution:** To get the eigenvalues of the matrix $B$, consider the characteristic equation $det\left(B-\lambda I\right)=\begin{vmatrix}\cos\theta-\lambda & \sin\theta \\ \sin\theta & -\cos\theta-\lambda\end{vmatrix}=(\cos\theta-\lambda)(-\cos\theta-\lambda)-\sin^2\theta=\lambda^2-1=0$. This gives us two eigenvalues $\lambda_1 = 1, \lambda_2=-1$.

For $\lambda_1=1$, the eigenvector can be $\mathbf{u}=(\sin\theta, 1-\cos\theta)$. For $\lambda_2=-1$, the eigenvector can be $\mathbf{v}=(-\sin\theta, 1+\cos\theta)$. These two vectors $\mathbf{u}, \mathbf{v}$ are perpendicular to each other because their inner product is $$. Now we have two perpendicular directions $\mathbf{u}$ and $\mathbf{v}$. On one hand, because the vector $\mathbf{u}$ is correspondent to the eigenvalue $1$, $S$ preserves all the vectors who have the same direction as $\mathbf{u}$. On the other hand, because the vector $\mathbf{v}$ is correspondent to the eigenvalue $-1$, $S$ reverses the direction of all the vectors who have the same direction as $\mathbf{v}$. Therefore $S$ is a reflection across the line through the origin with direction $\mathbf{u}$. Since the composition of two same reflections does nothing, the linear transformation $T$ that sends $x$ to $B^2x$ is an identity map. Also it is easy to check $B^2$ is indeed an identity matrix.
