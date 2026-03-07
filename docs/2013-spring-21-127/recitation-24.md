---
title: "Recitation 24"
---

Today we discussed that the Chinese remainder theorem is not applicable unless all $n_i$s are pairwise relatively prime, in which case we need to break each single linear congruence equation that causes the problem into equivalent equations.

For instance, suppose we want to solve $x\equiv 3 \mod 6, x\equiv 4 \mod 7, x\equiv 5 \mod 8$ for $x$. Then we could replace $x\equiv 3 \mod 6$ by $x\equiv 3 \mod 2$ and $x\equiv 3 \mod 3$. Also notice that $x\equiv 5 \mod 8$ implies $x\equiv 3 \mod 2$. So it is enough to solve $x\equiv 3 \mod 3, x\equiv 4 \mod 7, x\equiv 5 \mod 8$, in which case we could apply the Chinese remainder theorem.

Also we covered an elegant proof of Fermat&#8217;s little theorem. In that proof, we considered two [reduced residue systems](http://en.wikipedia.org/wiki/Reduced_residue_system), $1, 2, \ldots, p-1$ and $a, 2a, \ldots, (p-1)a$. Since they are both reduced residue systems, the products should be the same in modulo $p$ arithmetic. Hence $(p-1)!\equiv (p-1)!a^{p-1} \mod p$.

One can also use this idea to prove Euler&#8217;s theorem, which says the following.

If $n$ and $a$ are coprime positive integers, then $a^{\phi(n)}\equiv 1 \mod n$, where $\phi(n)$ is Euler&#8217;s totient function.
