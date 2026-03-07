---
title: "Homework 4"
---

Exercise: Consider the set $E=\{2^{-n}:n\in\mathbb{N}\}\cup\{0\}\subset\mathbb{R}$. Prove that every open cover of $E$ has a finite subcover.

Proof. Choose $U\in E$ such that $0\in U$. As $U$ is open, it contains an interval centered at $$ with a positive radius. So there exists $m\in\mathbb{N}$ such that $2^{-n}\in U$ for every $n>m$. Continue to pick $U_1, U_2, \ldots, U_m$ cover $2^{-1}, 2^{-2}, \ldots, 2^{-m}$ respectively. Hence we&#8217;ve got the finite subcover.

Exercise: Give an example of an open cover of $[0,1)$ which has no finite subcover.

Proof. (Sketch) Take $E=\{(-1,1-1/n):n\in\mathbb{N}\}$ which is an open cover of $[0,1)$. Then prove it doesn&#8217;t have a finite subcover.

Exercise: Let $X$ be a metric space.

* Prove that if $K_1$ and $K_2$ are compact subsets of $X$, then $K_1\cup K_2$ is compact.
* Let $\{K_\alpha\}$ be any collection of compact sets in $X$. Show that $\bigcap_\alpha K_\alpha$ is compact.

Proof.

* Suppose $E$ is an open cover for $K_1\cup K_2$. Observe that $E$ is also an open cover for both $K_1$ and $K_2$, we can choose two finite subcovers for $K_1$ and $K_2$ respectively. Collect those two finite subcovers together, we get the finite subcover for $K_1\cup K_2$.
* Pick a compact set $K$ from the collection and let $C$ be the interdiv of all compact sets in the collection. As compact sets are closed and $C$ is the interdiv of compact sets, $C$ is closed. Now $C$ is a closed subset of a compact set $K$, so $C$ is compact.

Remark: Using the first result, one can prove by induction that the union of finitely many compact sets is compact.

Exercise: Let $k\in\mathbb{N}$, and suppose $K\subset G\subset\mathbb{R}^k$, where the set $K$ is compact and the set $G$ is open. Show that there exists a compact set $K_0$ such that $K\subset K_0\subset G$ and $K$ is contained in the interior of $K_0$.

Proof. Consider the following collection of open sets:  

$$E=\{N_r(x):x\in K, r>0, N_{2r}(x)\subset G\}.$$
  
As $G$ is open and $K\subset G$, for each point $x$ in $K$, there is a positive $r$ such that $N_{2r}(x)\subset G$. So $E$ is really an open cover of $K$. Since $K$ is compact, there exist finitely many points in $K$, say $x_1, x_2, \ldots, x_n$ and positive reals $r_1, r_2, \ldots, r_n$ such that $N_{r_1}(x_1), N_{r_2}(x_2), \ldots, N_{r_n}(x_n)$ cover $K$ and $N_{2r_1}(x_1), N_{2r_2}(x_2), \ldots, N_{2r_n}(x_n)\subset G$. Let $K_0=\bigcup_{i=1}^n{\overline{N_{r_i}(x_i)}}$. From above, we know that $K\subset\bigcup_{i=1}^n{N_{r_i}(x_i)}\subset int(K_0)$ and $K_0\subset\bigcup_{i=1}^n{N_{2r_i}(x_i)}\subset G$. Left to show $K_0$ is compact. But this is obvious, since $K_0$ is the finite union of compact sets.

Exercise: Let $V\subset\mathbb{R}$ be an open set. For all $x\in V$ we define $I_x := (a_x, b_x)$, where $a_x:=\inf\{q\in\mathbb{R}:(q,x]\subset V)\}$ and $b_x:=\sup\{p\in\mathbb{R}:[x,p)\subset V]\}$.

* Prove: For all $x\in V$, we have $a_x,b_x\notin V$, and $V=\bigcup_{x\in V}I_x$.
* Prove: For all $x,y\in V$ we have $I_x=I_y$ or $I_x\cap I_y=\emptyset$.
* Prove: If $S$ is a collection of disjoint open intervals in $\mathbb{R}$, then $S$ is at most countable. Hint: Use that the $\mathbb{Q}$ is countable.

Proof. (Sketch)

* We are only going to prove $a_x\notin V$. $b_x\notin V$ would be similar. Assume, for sake of contradiction, $a_x\in V$. For $V$ is open, there is a positive $r$ such that $N_r(a_x)\subset V$. By the definition of $a_x$, there is $a'\in[a_x,a_x+r)$ such that $(a',x]\subset V$. This gives us $(a_x-r,x]=(a_x-r,a_x+r)\cup(a',x]\subset V$. Hence $a_x-r\geq a_x$. A contradiction. Notice that $x\in I_x$ for all $x\in V$ as $V$ is open. Clearly $V\subset\bigcup_{x\in V}I_x$. Enough to show for every $x\in V$, $I_x\subset V$. This part is left to the readers.
* Suppose $I_x\cap I_y\neq\emptyset$. Let $z\in I_x\cap I_y$. Enough to see $I_x=I_z$ and $I_y=I_z$. Details are left to the readers.
* First observe that there is always a rational number in an open intervals. So for every open interval in $S$, pick one rational in it. Since the open intervals in $S$ are disjoint, the rationals we&#8217;ve chosen should be different. As there are only countably many rationals, we conclude $S$ is at most countable.

Remark: This problem shows that every open subset of $\mathbb{R}$ can be written uniquely as a union of at most countably many disjoint open intervals. (Require a little work to show the uniqueness.)
