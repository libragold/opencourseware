---
title: "Homework 11"
---

Exercise: Use the mean value theorem to establish: $1/8<\sqrt{51}-7<1/7$.

Proof. Consider $f(x)=\sqrt{x}$. By the mean value theorem, there is $x\in(49,51)$ such that $f'(x)=f(51)-f(49)/2$. Notice that $f'(x)=\frac{1}{2\sqrt{x}}$. Hence $\sqrt{51}-7=f(51)-f(49)=1/\sqrt{x}\in(1/\sqrt{51},1/\sqrt{49})\subset(1/8,1/7)$.

Exercise: Prove that at most one of the following functions $f$ and $g$ can be a derivative of a real-valued function on $\mathbb{R}$.

Proof. We prove a stronger result that $g$ is not a derivative of any real-valued function.

Suppose for sake of contradiction $g(x)=G'(x)$. Then $-g(-x)=G'(-x)$. But $g(x)+g(-x)$, on one hand, is the derivative of $G(x)-G(-x)$, and on the other hand, always equals 0 except at the point 0. This contradicts the immediate value theorem for derivates.

Exercise: Suppose $f,g:[a,b]\rightarrow\mathbb{R}$ are differentiable on $[a,b]$, and


$$f(x)g'(x)-f'(x)g(x)\neq 0 \text{ for all }x\in[a,b]$$
 

Suppose there are $a\leq x_1<x_2\leq b$ with $f(x_1)=f(x_2)=0$. Then there is a point $z\in(x_1,x_2)$ with $g(z)=0$.

Proof. First, it&#8217;s easy to see that $g(x_1)\neq 0 \neq g(x_2)$. Suppose for sake of contradiction that $g(z)\neq 0$ for all $z\in(x_1,x_2)$. Define $h(x)=f(x)/g(x)$ on $[x_1,x_2]$. Note that $h(x_1)=0=h(x_2)$. By the mean value theorem, there is $z\in(x_1,x_2)$ such that $h'(z)=0$. However, $0=h'(z)=(f(z)g'(z)-f'(z)g(z))/g^2(z)$, which contradicts the condition given in the problem.

Exercise: Let $f:[a,b]\rightarrow\mathbb{R}$ be differentiable and suppose $f'$ is continuous on $[a,b]$. Prove that for $\epsilon > 0$, there exists $\delta > 0$ such that  

$$\left|\frac{f(t)-f(x)}{t-x}-f'(x)\right|<\epsilon$$
  
for all points $x,t\in[a,b]$ with $0<|t-x|<\delta$.

Proof. Since $f'$ is continuos on $[a,b]$, $f'$ is uniformly continuous on $[a,b]$. For any $\epsilon > 0$, there is $\delta > 0$, such that whenever$|x-s|<\delta$, $|f'(x)-f'(s)|<\epsilon$. Now, for all points $x,t\in[a,b]$ with $0<|t-x|<\delta$, by the mean value theorem, there is $s$ between $t$ and $x$, such that $f'(s)=\frac{f(t)-f(x)}{t-x}$. We have,


$$\left|\frac{f(t)-f(x)}{t-x}-f'(x)\right|=|f'(s)-f'(x)|<\epsilon ,$$
 

since $|s-x|<|t-x|<\delta$.

Exercise: Suppose $f:\mathbb{R}\rightarrow\mathbb{R}$ is differentiable at $a\in\mathbb{R}$, and suppose two sequences $\{x_n\}$ and $\{y_n\}$ in $\mathbb{R}$ that satisfy $x_n\neq y_n, x_n\leq a\leq y_n$ for all $n\in\mathbb{N}$, and $\lim_{n\rightarrow\infty}x_n=a=\lim_{n\rightarrow\infty}y_n$. Prove that


$$\lim_{n\rightarrow\infty}\frac{f(y_n)-f(x_n)}{y_n-x_n}=f'(a).$$
 

Proof. By definition of the derivative, we have  

$$f(y_n)-f(a)=[f'(a)+r(y_n)](y_n-a)$$
  
and  

$$f(a)-f(x_n)=[f'(a)+r(x_n)](a-x_n)$$
  
where $\lim_{x\rightarrow a}r(x)=0$.

Add these two equations together, we have  

$$f(y_n)-f(x_n)=f'(a)(y_n-x_n)+r(y_n)(y_a-a)+r(x_n)(a-x_n)$$
  
which implies,  

$$\frac{f(y_n)-f(x_n)}{y_n-x_n}=f'(a)+r(y_n)\frac{y_n-a}{y_n-x_n}+r(x_n)\frac{a-x_n}{y_n-x_n}$$


Notice that both $\frac{y_n-a}{y_n-x_n}$ and $\frac{a-x_n}{y_n-x_n}$ are between 0 and 1. So if we take the limit over the previous equation, we will get the conclusion.
