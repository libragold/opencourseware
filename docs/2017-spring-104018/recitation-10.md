---
title: "Recitation 10"
---

**Problem 1** Find the following indefinite integrals: (a) $\int \frac{x}{\sqrt{1-x^2}}dx$; (b) $\int x\sqrt{1-x^2}dx$; (c) $\int x^2\sqrt{1-x^2}dx$.

**Solution** (a) Let $y = 1 - x^2$. Thus $dy = -2xdx$. The integral is equal to 
$$\int -\frac{1}{2}y^{-1/2}dy = -y^{1/2} + C = -\sqrt{1-x^2} + C.$$
 (b) The integral is equal to 
$$\int -\frac{1}{2}y^{1/2}dy = -\frac{1}{3}y^{3/2} + C = -\frac{1}{3}(1-x^2)^{3/2}+C.$$
 (c) Substitute $x = \sin u$ and $dx = \cos u du$. Then $\sqrt{1-x^2} = \sqrt{1-\sin^2 u} = \cos u$. The integral is equal to 
$$\int \sin^2u\cos^2u du = \frac{1}{4}\int \sin^2 2u du = \frac{1}{8}\int (1-\cos 4u)du = \frac{1}{8}(u - \tfrac{1}{4}\sin 4u) + C.$$
 Note that $u = \arcsin x$ and 
$$\tfrac{1}{4}\sin 4u = \tfrac{1}{2}\sin 2u\cos 2u = \sin u\cos u(1-2sin^2 u) = x\sqrt{1-x^2}(1-2x^2).$$
 Therefore the integral is equal to 
$$\frac{1}{8}\left(\arcsin x - x\sqrt{1-x^2}\left(1-2x^2\right)\right) + C.$$


**Problem 2** Find the following indefinite integrals: (a) $\int \frac{2x+7}{(x-1)(x^2-5x+6)}dx$; (b) $\int \frac{x^3+x^2-2x-4}{x^2-5x+6}dx$.

**Solution** (a) The partial fraction decomposition of 
$$\frac{2x+7}{(x-1)(x^2-5x+6)} = \frac{A}{x-1} + \frac{B}{x-2} + \frac{C}{x-3}.$$
 Multiplying both sides by $x - 1$ and plugging in $x = 1$ gives $A = \tfrac{9}{2}$. Similarly, we get $B = -11, C = \tfrac{13}{2}$. The integral is thus 
$$\tfrac{9}{2}\ln |x-1| - 11 \ln|x-2| + \tfrac{13}{2} \ln |x-3| + C.$$
 (b) By long polynomial division, $\frac{x^3+x^2-2x-4}{x^2-5x+6} = x + 6 + \frac{22x - 40}{x^2-5x+6}$. The partial fraction decomposition of 
$$\frac{22x - 40}{x^2-5x+6} = \frac{A}{x-2} + \frac{B}{x-3}.$$
 Solve for $A, B$ and get $A = -4, B = 26$. The integral is thus 
$$\tfrac{1}{2}x^2 + 6x - 4\ln |x-2| + 26\ln |x-3| + C.$$


**Reduction formulas** For indefinite integrals of powers of trig functions, we have two useful reduction formulas (try to prove them by integration by parts): 
$$\begin{aligned}m\int \cos^m x dx &= \cos^{m-1}x\sin x + (m-1)\int \cos^{m-2}x dx; \\ m\int \sin^m x dx &= -\sin^{m-1}\cos x + (m-1)\int \sin^{m-2}x dx.\end{aligned}$$


**Proof of the 1st reduction formula** Start by setting: 
$$I_n = \int \cos^n x dx.$$
 <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y">N</span></span>ow re-write as: 
$$I_n = \int \cos^{n-1}x \cos x dx.$$
 Integrating by this substitution: $\cos x dx = d(\sin x), I_n = \int \cos^{n-1}x d(\sin x)$. Now integrating by parts: 
$$\begin{aligned}\int \cos^n x dx & = \cos^{n-1}x \sin x - \int \sin x d(\cos^{n-1}x) \\ &= \cos^{n-1}x \sin x + (n-1)\int \sin x \cos^{n-2} x \sin x dx \\ & = \cos^{n-1}x\sin x + (n-1)\int \cos^{n-2} x(1-\cos^2 x)dx \\ &= \cos^{n-1}x\sin x + (n-1)I_{n-2} - (n-1)I_n. \end{aligned}$$
 Solving for $I_n$: $nI_n = \cos^{n-1}x\sin x + (n-1)I_{n-2}$.

**Problem 3** Find the following indefinite integrals: (a) $\int x^3\sin x dx$; (b) $\int \cos^3 x dx$; (c) $\int \cos^4 x dx$; (d) $\int \frac{1}{\sin^2 x} dx$; (e) $\int \frac{1}{\sin x} dx$.

**Solution** (a) Using integration by parts, we obtain 
$$\int x^3\sin x dx = \int -x^3d\cos x = -x^3\cos x - \int \cos x d(-x^3) = -x^3\cos x + 3\int x^2\cos x dx.$$
 By integration by parts again, 
$$\int x^2\cos x dx = \int x^2 d\sin x = x^2\sin x - \int \sin x d(x^2) = x^2\sin x - 2\int x\sin x dx.$$
 Again, integration by parts gives 
$$\int x\sin x dx = \int -xd\cos x = -x\cos x - \int \cos xd(-x) = -x\cos x + \sin x + C.$$
 The integral is thus 
$$3(x^2-2)\sin x - x(x^2-6)\cos x + C.$$
 (b) By the reduction formula for $m = 3$, the integral equals 
$$\frac{1}{3}\cos^2 x\sin x + \frac{2}{3}\int \cos x dx = \frac{1}{3}\cos^2 x\sin x + \frac{2}{3}\sin x + C.$$
 (c) By the reduction formula for $m = 4$, the integral equals 
$$\frac{1}{4}\cos^3 x\sin x + \frac{3}{4}\int \cos^2 x dx.$$
 By the reduction formula for $m = 2$, 
$$\int \cos^2 x dx = \frac{1}{2}\left(\cos x \sin x + \frac{1}{2}\int dx\right) = \frac{1}{2}\cos x\sin x + \frac{1}{2}x + C.$$
 The integral is thus 
$$\frac{1}{4}\cos^3 x \sin x + \frac{1}{8} \cos x \sin x + \frac{1}{8} x + C.$$
 (d) By the reduction formula for $m = 0$, 
$$\int sin^{-2}x dx = -\sin^{-1}\cos x + C = -\cot x + C.$$
 (e) Substitute $x = 2u$ and $dx = 2 du$ and get 
$$\begin{aligned}\int \frac{1}{\sin 2u} 2du &= \int \frac{1}{\sin u\cos u}du \\ &= \int \frac{\sin^2 u + \cos^2 u}{\sin u\cos u}du \\ &= \int \tan u du + \int \cot u du \\ &= -\ln |\cos u| + \ln |\sin u| + C \\ &= \ln |\tan (x/2)| + C.\end{aligned}$$


**Fact** Using integration by parts, we can get 
$$\int e^x\sin x dx = \frac{1}{2}e^x(\sin x - \cos x) + C, \int e^x\cos x dx = \frac{1}{2}e^x(\sin x + \cos x).$$


**Problem 4** Find the following indefinite integrals: (a) $\int xe^x\sin x dx$; (b) $\int x^2e^{x}\sin x dx$; (c) $\int \frac{\ln x}{x^2} dx$.

**Solution outline** (a) Let $f(x) = x, g(x) = \frac{1}{2}e^x(\sin x - \cos x)$. The integral equals 
$$\int f dg = fg - \int g df = \frac{1}{2}xe^x(\sin x - \cos x) - \frac{1}{2}\int e^x(\sin x - \cos x) dx.$$
 Use the fact twice then. (b) Let $f(x) = x^2, g(x) = \frac{1}{2}e^x(\sin x - \cos x)$. The integral equals 
$$\int f dg = fg - \int g df = \frac{1}{2}x^2e^x(\sin x - \cos x) - \int xe^x(\sin x - \cos x)dx.$$
 The answer to $\int xe^x\sin x dx$ is given by part (a). The answer to $\int xe^x\cos x dx$ can be obtained similarly. (c) Integration by parts gives 
$$\int \frac{\ln x}{x^2} dx = \int \ln x d(-1/x) = -\frac{\ln x}{x} - \int (-1/x)d(\ln x) = -\frac{\ln x}{x} + \int 1/x^2dx = -\frac{\ln x}{x} - \frac{1}{x} + C.$$


**Problem 5** Let $f\colon [0,2] \to \mathbb{R}$ be the function defined by $f(x)=0$ for $x \in [0,1]$ and $f(x)=1$ for $x \in (1,2]$. Show that $f$ does not have antiderivative.

**Solution** Assume, for the sake of contradiction, that $f$ has an antiderivative $F$. For every $0 < h < 1$, by mean value theorem, $\frac{F(1 + h) - F(1)}{h} = F'(1+c) = f(1+c)$ for some $0 < c < h$. Therefore $\frac{F(1 + h) - F(1)}{h} = 1$ for every $0 < h < 1$, and so 
$$0 = f(1) = F'(1) = \lim_{h\to 0^+}\frac{F(1 + h) - F(1)}{h} = 1.$$
 A contradiction.

**Problem 6** Let $f\colon [0,2] \to \mathbb{R}$ be a function such that for all $x \in [0,1]$ we have $f(x)<0$ and for all $x \in (1,2]$ we have $f(x)>0$. Show that $f$ does not have antiderivative.

**Solution** Similar to problem 5, using mean value theorem, if the antiderivative exists, then $\frac{F(1+h)-F(1)}{h} > 0$ for all $0 < h < 1$. Therefore 
$$0 > f(1) = F'(1) = \lim_{h\to 0^+}\frac{F(1 + h) - F(1)}{h} \ge 0.$$
 A contradiction.
