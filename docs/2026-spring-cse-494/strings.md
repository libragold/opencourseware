---
title: "Strings"
---

## Intro Strings + Rolling Hash
Many ideas in string problems can be extended to integer arrays and vice-versa. For that reason, in this section we stick to concepts which have a "string flavor."

### Rolling Hash - Core idea

Often, when comparing substrings of a string, looping through the substring is too slow. String hashing lets us compare substrings in $O(1)$ instead of spending time roughly the length of the substring.

The main idea is we will map each string to a number such that the probability of two unequal strings mapping to the same number is quite small.


We can define the hash of a function as:
$$
H(s) = s_0B^{k-1} + s_1B^{k-2} + 
\dots + s_{k-1}
$$
usually modulo some large prime.
Here $B$ is some integer (usually more than the alphabet size) and we map characters to numbers.

We can use a trick similar to prefix sums to be able to compute the hash of a string in $O(1)$. Start by computing all the prefix hashes:


For a string indexed from $0$:
```text
powB[0] = 1
for i in 0..n-1:
  powB[i+1] = powB[i] * B mod M
  pref[i+1] = (pref[i] * B + value(s[i])) mod M
```

Then:
$$
\text{hash}(l,r) = pref[r] - pref[l]\cdot B^{r-l}
$$
with the usual modulo fixup.

This gives the hash of substring $s[l..r-1]$ in $O(1)$.

This pseudocode is from the implementation on [KACTL](https://github.com/kth-competitive-programming/kactl/blob/main/content/strings/Hashing-codeforces.h) where the prefix hashes are exclusive on the index. For the modulo, they use unsigned integers which by default modulo by $2^{64}$ on overflow with some extra care for details. Addtionally, they take subarrays modulo two primes to reduce the probability of a hash collision.

What is the probability of a hash collision modulo a certain prime?
### What rolling hash is good for

- checking if two substrings are equal
- binary search + hash comparison to find the longest match from some points.

How can we use string hashing to find the Longest Palindromic Substring of a string faster than before?

Practice:
- [Finding Borders (CSES)](https://cses.fi/problemset/task/1732)
- [String Matching (CSES)](https://cses.fi/problemset/task/1753)
- [Finding Periods (CSES)](https://cses.fi/problemset/task/1733)
- [Good Substrings (CF 271D)](https://codeforces.com/problemset/problem/271/D)
- [Password (CF 126B)](https://codeforces.com/problemset/problem/126/B)
- [Who Says a Pun? (AtCoder ABC141 E)](https://atcoder.jp/contests/abc141/tasks/abc141_e)
---

## KMP
KMP is built around the **prefix function**.
This is one of the most important arrays in strings.

### Prefix function / LPS array

For each index $i$, let $\pi[i]$ be the length of the longest proper prefix of $s[0..i]$ that is also a suffix of $s[0..i]$.


### Computing the prefix function in linear time

```text
pi[0] = 0
for i in 1..n-1:
  j = pi[i-1]
  while j > 0 and s[i] != s[j]:
    j = pi[j-1]
  if s[i] == s[j]:
    j++
  pi[i] = j
```

Pseudocode adapted from [CP-Algos](https://cp-algorithms.com/string/prefix-function.html)

Why this works:
- suppose you want to extend the best border ending at $i-1$
- if the next character mismatches, the next candidate border is the border of that border
- so you “jump” through previously computed border lengths instead of restarting from scratch - (to be explained more clearly in class)

Since every iteration of the while loop decreases the value of the match by at least one, and the prefix function can only increase by at most one in each step, the whole algorithm runs in an amortized $O(n)$.


How can we use KMP to solve the string matching problem in linear time?
Problems:
- [Simons and Dividing the Rhythym](https://codeforces.com/problemset/problem/2205/E)