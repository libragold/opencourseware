---
title: "Homework 10"
---

If not stated otherwise, we assume that the metric spaces $\mathbb{R}$ and $\mathbb{Q}$ are quipped with the Euclidean metric $d(x,y)=|x-y|$.

Exercise: Use definition to determine the derivative of the function  

$$f(x)=\frac{1}{\sqrt{x}}, x>0$$


Proof. Using the definition, we can calculate the derivative  

$$\begin{aligned}\lim_{t\rightarrow x}\frac{f(t)-f(x)}{t-x}&= \lim_{t\rightarrow x}\frac{1/\sqrt{t}-1/\sqrt{x}}{t-x}\\&= \lim_{t\rightarrow x}-\frac{1}{\sqrt{tx}(\sqrt{t}+\sqrt{x})}\\&= -\frac{1}{2x\sqrt{x}}\end{aligned}$$


Thus $f'(x)=-\frac{1}{2x\sqrt{x}}$

Exercise: Let $f$ be defined for all $x\in\mathbb{R}$, and suppose that  

$$|f(x)-f(y)|\leq |x-y|^2$$
  
for all $x,y\in\mathbb{R}$. Prove that $f'(x)=0$ for all $x\in\mathbb{R}$. Prove that $f'(x)=0$ for all $x\in\mathbb{R}$. Hence $f$ is a constant function.

Proof. Whenever $x\neq y$, $|f(x)-f(y)|/|x-y|\leq|x-y|$. So $\lim_{y\rightarrow x}|f(x)-y(y)|/|x-y|=0$, which implies that $f'(x)=0$ for all $x\in\mathbb{R}$.

Exercise: Assume $f:(a,b)\rightarrow \mathbb{R}$ is injective, and let $g$ denote its left inverse function. That is, for all $x\in(a,b)$, $g(f(x))=x$.

Further, assume that

  * $f$ is differentiable at a point $x\in(a,b)$ with $f'(x)\neq 0$. Prove that if $g$ is continuous at the point $f(x)$, then $g$ is differentiable at $f(x)$, and $g'(f(x))=1/f'(x)$. Hint: Use Theorem 4.2.
  * $f$ is continuous on $a,b$ and differentiable at a point $x\in(a,b)$ with $f'(x)\neq 0$. Prove that $g$ is differentiable at the point $f(x)$, and that $g'(f(x))=1/f'(x)$. Hint: Use Theorem 4.2. Also you may use, without proof, the fact that $g$ is continuous at $f(x)$.

Proof. Let $Y$ be the range of $f$. Pick any sequence in $Y$, say $\{y_n\}$, whose limit is $y=f(x)$.

We want to show that $\lim_{n\rightarrow\infty}\frac{g(y_n)-g(y)}{y_n-y}$ exists, and it&#8217;s equal to $1/f'(x)$.

As $y_n\in Y$ and $f$ is injective, let $x_n$ be the unique number in $(a,b)$ such that $f(x_n)=y_n$, hence $x_n=g(f(x_n))=g(y_n)$.

As $g$ is continuouss at $y$, $\lim_{n\rightarrow\infty}x_n=g(\lim_{n\rightarrow\infty}y_n)=g(y)=g(f(x))=x$. Thus $\frac{g(y_n)-g(y)}{y_n-y}=\frac{x_n-x}{f(x_n)-f(x)}$, whence $g'(f(x))$ exists as $f'(x)\neq 0$, and it&#8217;s equal to $1/f'(x)$.

Exercise: Let $h$ be the real-valued function defined by  

$$h(x)=\bigg\{{\begin{array}{cc}f(x)&\text{if }a\leq x\leq b\\g(x)&\text{if }b\leq x\leq c\end{array}}$$
  
where $f:[a,b]\rightarrow\mathbb{R}$ and $g:[b,c]\rightarrow\mathbb{R}$ are differentiable and $f(b)=g(b)$. Prove that $h$ is differentiable on $[a,c]$ if and only if $f'(b)=g'(b)$.

Proof. (Sketch) Easy to see that $h$ is differentiable on $[a,c]$ if and only if $h$ is differentiable at $b$, which is equivalent to say $f'(b)=g'(b)$ by the definition of differentiability.
