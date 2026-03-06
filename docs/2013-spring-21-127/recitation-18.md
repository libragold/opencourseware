---
title: "Recitation 18"
---

In section D, I discussed the following puzzle.

Suppose there are 1000 coins. You can split them into two piles and calculate the product of the number of coins in each pile. And then for each pile, keep splitting it into two smaller piles and calculate the product of the number of coins in each smaller pile. And keep going until every pile has only one coin. Prove the sum of the products created along the way is independent from how you split the coins.

We are going to prove that if we start with $n$ coins, then the sum of the products is always $\frac{1}{2}n(n-1)$. And we prove this by induction.

Base case: if $n=1$, then the sum is $$. On the other hand, $\frac{1}{2}n(n-1)=0$.

Induction step: Suppose for all $k<n$, if we start with $k$ coins, then the sum of the products is always $\frac{1}{2}k(k-1)$. Now we have $n$ coins. And assume at the first we split them into $m$ coins and $n-m$ coins. The product we gain on the first split is $m(n-m)$. For the first pile of $m$ coins, by the induction hypothesis, the sum the products we are going to get is $\frac{1}{2}m(m-1)$. Similarly, for the second pile, the sum is going to be $\frac{1}{2}(n-m)(n-m-1)$. Thus the total sum is $m(n-m)+\frac{1}{2}m(m-1)+\frac{1}{2}(n-m)(n-m-1)=\frac{1}{2}n(n-1)$.
