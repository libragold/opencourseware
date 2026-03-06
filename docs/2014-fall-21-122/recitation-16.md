---
title: "Recitation 16"
---

**Example 1: (a)** Determine whether the sequence defined as follows is convergent or divergent. $a_1 = 1, a_{n+1} = 4 - a_n$ for $n\geq 1$. **(b)** What happens if the first term is $a_1 = 2$?

**Hint: (a)** It a sequence of alternating $1$ and $3$. **(b)** It is a constant sequence.

**Example 2:** Suppose you know that $\{a_n\}$ is a decreasing sequence and all its terms lie between $5$ and %8. Explain why the sequence has a limit. What can you say about the value of the limit?

**Hint:** Use the monotonic sequence theorem and the sandwich theorem.

**Example 3:** Determine whether the sequence is increasing, decreasing or not monotonic. Is the sequence bounded? **(a)** $a_n = (-2)^{n+1}$; **(b)** $a_n = 1/(2n+3)$; **(c)** $a_n = (2n-3)/(3n+4)$; **(d)** $a_n = n + 1/n$.

**Hint: (b)** $0 < a_n < 1$; **(c)** $-1 < a_n < 1$ and $a_n = \frac{2}{3} - \frac{17}{3(3n+4)}$; **(d)** $a_{n+1} - a_n = 1 - \frac{1}{n(n+1)} > 0$.

**Example 4:** Show that the sequence defined by $a_1 = 1, a_{n+1} = 3 - 1/a_n$ is increasing and $a_n < 3$ for all $n$. Deduce that $\{a_n\}$ is convergent and find its limit.

**Solution:** First of all, we want to show that $1 \leq a_n < 3$ for all $n$. Since $a_1$ already satisfies the hypothesis, it suffices to show if $1 \leq a_n < 3$, so is $a_{n+1}$ (see the remark below for further discussion). Since $a_{n+1} = 3 - 1/a_n$ and $1 \leq a_n < 3$, $1 < 3 - 1/1 \leq 3 - 1/a_n < 3 - 1/3 < 3$, hence $1 \leq a_{n+1} < 3$. Secondly, since $a_1 = 1 < 2 = a_2$, to show that $a_n < a_{n+1}$, it suffices to show that if $a_{n-1} < a_n$ then $a_n < a_{n+1}$ for all $n > 1$ (again see the remark below). Because $0 < a_{n-1} < a_n$, we know that $a_n = 3 - 1/a_{n-1} < 3 - 1/a_n = a_{n+1}$. This ends the proof of the monotonicity. Because the sequence is monotonic and bounded, it converges by the monotonic sequence theorem. Let $L$ be its limit. Then $1\leq L\leq 3$ and $L = 3 - 1/L$. Solve the equation and get $L = \frac{3+\sqrt{5}}{2}$.

**Remark:** The idea used in the proof is mathematical induction which is commonly used in mathematical proof.
