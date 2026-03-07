---
title: "Homework 7"
---

Exercise: Let $x\geq 0$. Consider the sequence $\{a_n\}$ defined by $a_n=x^n$. Prove that $\{a_n\}$ converges if and only if $x\leq 1$. For $x\leq 1$, determine the limit of $\{a_n\}$.

Proof. If $\{a_n\}$ converges to $a$. Clearly $a\geq 0$. Since $a_{n+1}=xa_n$, we have $a=xa$ by taking limit on both side. If $x=1$, obviously $a=1$. If $x\neq 1$, the equation $a=xa$ gives us that $a=0$. Furthermore, if $0\leq x<1$, obviously $a=\lim{x^n}=0$. On the other hand, if $x>1$, $a_n=x^n>1$. But we've shown that if $\{a_n\}$ converges, its limit is $0$. So for $x>1$, the sequence doesn't converge.

Exercise: Let $a<0$ and $x_1<$ be the real numbers. Define a sequence $\{x_n\}$ by  

$$x_{n+1}=\frac{1}{2}\left(x_n+\frac{a}{x_n}\right)\text{ for all }n\in\mathbb{N}$$

1. Prove that $x_{n+1}\leq x_n$ for all $n\geq 2$.
2. Prove that $\{x_n\}$ converges to $x\in\mathbb{R}$ where $x>0$ and $x^2=a$.

Proof.

1. First, we claim that $x_n^2\geq a$ for all $n\geq 2$. This is because $x_n^2-a=\frac{1}{4}\left(x_{n-1}+a/x_{n-1}\right)^2-a=\frac{1}{4}\left(x_{n-1}-a/x_{n-1}\right)^2\geq 0$. Now, we show that $x_{n+1}\leq x_n$ for all $n\geq 2$. Simply calculate the difference, $x_n-x_{n+1}=x_n-(x_n+a/x_n)/2=(x_n^2-a)/2x_n$. Easy to see that all $x_n$'s are positive. Combining the fact that $x_n^2\geq a$ for all $n\geq 2$, we know that $x_{n+1}\leq x_n$.
2. Since $\{x_n\}$ is decreasing sequence with positive entries, it converges. Suppose the limit is $x$. Take limit on both sides of the defining equation, we have $x=(x+a/x)/2$, thus $x^2=a$. Obviously $x$ is non-negative.

Exercise: For a sequence of real numbers $\{a_n\}$, denote, by $\{s_n\}$, the sequence of its arithmetic means as follows  

$$s_n=\frac{1}{n}\sum^n_{k=1}{a+k}=\frac{1}{n}(a_1+a_2+\cdots+a_n)$$

1. Prove: If $\{a_n\}$ converges to $a$, then $\{s_n\}$ converges to $a$.
2. Give an example of a divergent sequence $\{a_n\}$ such that $\lim_{n\rightarrow\infty}s_n=0$
3. Define the sequence $\{b_n\}$ by $b_n=a_{n+1}-a_n$ for all $n\in\mathbb{N}$. Suppose $\{s_n\}$ converges to $s$ and $\{nb_n\}$ converges to $0$. Prove that $\lim_{n\rightarrow\infty}a_n=s$. Hint: show that $\sum^n_{k=1}{kb_k}=na_{n+1}-\sum^n_{k=1}a_k$.

Proof (sketch).

1. Fix your favorite $\epsilon>0$ first. There is $N$ such that if $n>N$, $|a_n-a|<\epsilon/2$. Denote $S=\sum_{k\leq N}(a_k-a)$. Now for $n>N$, $|s_n-a|=\frac{1}{n}|S+\sum_{N<k\leq n}(a_k-a)|\leq\frac{1}{n}(|S|+(n-N)\epsilon/2)$. Then try to find $M$ such that if $n>M$, $|s_n-a|<\epsilon$. And this shows that $\lim s_n=a$.
2. Take $a_n=(-1)^n$. Then $|s_n|\leq 1/n$, hence converges to $0$.
3. Follow the hint, we can prove by induction that $\sum_{k=1}^n{kb_k}=na_{n+1}-ns_n$. Thus $a_{n+1}=s_n+\frac{1}{n}\sum_{k=1}^n{kb_k}$. But $\{nb_n\}$ converges to $0$, by the previous result, its arithmetic means $\{\frac{1}{n}\sum_{k=1}^n{kb_k}\}$ converges to $0$. Hence $\{a_n\}$ converges to the limit of $\{s_n\}$, which is $s$.

Exercise: We define the Fibonacci sequence $\{F_n\}$ by  

$$F_0=0, F_1=1 \text{ and } F_{n+1}=F_n+F_{n-1} \text{ for } n\geq 1$$

1. Prove that for all $n\in\mathbb{N}$,
   $$F_n=\frac{1}{\sqrt{5}}\left[\left(\frac{1+\sqrt{5}}{2}\right)^n-\left(\frac{1-\sqrt{5}}{2}\right)^n\right]$$
2. Define the sequence $\{a_n\}$ of real numbers by $a_0=1$ and $a_n=1+1/a_{n-1}$ for all $n\in\mathbb{N}$. Prove that for all $n\in\mathbb{N}$, $a_n=F_{n+1}/F_{n}$.
3. Prove that $\lim_{n\rightarrow\infty}a_n=(1+\sqrt{5})/2$.

Proof (sketch).

1. This can be verified by induction.
2. Prove by induction. For $n=1$, $a_0=1=1/1=F_2/F_1$. Suppose $a_{n-1}=F_{n+1}/F_n$. Since $a_n=1+1/a_{n-1}$, we have $a_n=1+F_n/F_{n+1}=(F_n+F_{n+1})/F_{n+1}=F_{n+2}/F_{n+1}$. This finishes the inductive step.
3. Denote $\alpha=(1+\sqrt{5})/2$. Since $a_n=F_{n+1}/F_{n}=(\alpha^{n+1}-\alpha^{-n-1})/(\alpha^{n}-\alpha^{-n})=(\alpha-\alpha^{-2n-1})/(1-\alpha^{-2n})$, $\lim a_n=\alpha$.
