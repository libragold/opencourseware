---
title: "Number Theory"
---

## Divisors

A huge number of problems boil down to: “loop $i = 1 \dots \lfloor \sqrt{n}\rfloor$ and use the factor pair $(i, n/i)$.”

### Enumerating all divisors (divisor pairs)

Key idea:
- If $i \mid n$, then both $i$ and $\frac{n}{i}$ are divisors. In every divisor pair, one of the numbers must be less than or equal to $\sqrt{n}$.
- Therefore, we only need to check $i \le \sqrt{n}$.

Make sure to avoid double-counting when $i^2 = n$.

Practice:
- [Counting Divisors (CSES)](https://cses.fi/problemset/task/1713) (may need to be careful with your implementation to avoid TLE)
- [Common Divisors(CSES)](https://cses.fi/problemset/task/1081)
- [kth divisor (CF)](https://codeforces.com/problemset/problem/762/A)
- [Secret Message (recent CF div 2)](https://codeforces.com/contest/2194/problem/C)
- [Division or Subtraction (AC)](https://atcoder.jp/contests/abc161/tasks/abc161_f)
- [Tonya and Burenka-179 (CF)](https://codeforces.com/contest/1718/problem/C)
---

### Some useful divisor formulas:
For smaller values of $n$ these can often be done naively, however these are still useful to know:
If $n = \prod p_i^{e_i}$, then:

$\tau(n)$, $\sigma(n)$, and $P(n)$ represent the number, sum, and product of divisors of $n$ respectively.
$$
\tau(n) = \prod (e_i + 1)
$$

$$
\sigma(n) = \prod \frac{p_i^{e_i+1}-1}{p_i-1}
$$

$$
P(n) = n^{\frac{\tau(n)}{2}}
$$
---

## Sieve of Eratosthenes

When constraints involve many queries or large ranges, factoring by $\sqrt{n}$ per query is too slow.
The sieve family lets you precompute prime/primality/least-prime-factor in very close to linear time.

### Classic Sieve (primality)

```text
is_prime[0]=is_prime[1]=false
is_prime[2..N]=true
for p in 2..floor(sqrt(N)):
  if is_prime[p]:
    for x in p*p, p*p+p, ..., <= N:
      is_prime[x]=false
```

The time complexity is $O(n\log(\log n))$.

Notes:
- Start marking at $p^2$ (smaller multiples were marked earlier). In some variations, you may need to start from $2p$, but this doesnt change the asymptotics of sieve.
- Use this when you need primality for *all* numbers up to $N$.

Practice:
- [T-primes (CF)](https://codeforces.com/problemset/problem/230/B)
- [Sherlock and his girlfriend (CF)](https://codeforces.com/problemset/problem/776/B)
---

### SPF sieve (smallest prime factor) for fast factorization

Goal: precompute `spf[x]` = smallest prime dividing `x`.
Then each factorization is $O(\log x)$ by repeated division.

```text
spf[1]=1
for i in 2..N:
  if spf[i]==0:              // i is prime
    spf[i]=i
    for j in i*i, i*i+i, ..., <= N:
      if spf[j]==0:
        spf[j]=i
```
Note that from the prime factorization, you can find all divisors in $O(\text{\# of divisors})$ instead of $O(\sqrt{n})$, which can be relevant sometimes. 

Use cases:
- many factorizations
- counting prime exponents / computing divisor counts for many numbers

You can even compute totients for all numbers with sieve.

- [Enlarge GCD (CF)](https://codeforces.com/problemset/problem/1034/A)
---

### “Sieve over values” (iterate multiples)

This pattern is *not* about primality; it’s about counting multiples efficiently:
- for each value $d$, look at all multiples $k = d, 2d, 3d, \dots$

```text
for d in 1..N:
  for k in d, 2d, 3d, ..., <= N:
    // do something with (d divides k)
```
If the inner computation is $O(1)$, this has time complexity $O(n\log n)$.

Let's revisit: [Counting Divisors (CSES)](https://cses.fi/problemset/task/1713)

Practice:
- [Not Divisible (AtCoder ABC170 D)](https://atcoder.jp/contests/abc170/tasks/abc170_d)
- [Common Divisors (CSES)](https://cses.fi/problemset/task/1081) - (Can we find a better time complexity than before?)
- [Turn on the Light 3](https://qoj.ac/contest/2021/problem/10724)
---
Problems
- [Prime Generator (SPOJ)](https://www.spoj.com/problems/PRIME1/)
---

## GCD / LCM 

### Core identities 

- Euclidean Algorithm:
$$
\gcd(a,b) = \gcd\bigl(b,\ a \text{ mod } b\bigr)
$$

- LCM via gcd:
$$
\mathrm{lcm}(a,b) = \frac{a}{\gcd(a,b)} \cdot b
$$

Implementation note: compute as `(a / gcd(a,b)) * b` to reduce overflow risk.

---

### LCM/GCD via prime exponents

To compute $\mathrm{lcm}(a_1,\dots,a_n)$ (especially under a modulus), you often:
1. factor all numbers
2. keep the maximum exponent of each prime
3. rebuild the lcm as $\prod p^{\max e_p}$ (optionally modulo $M$)

Similarly for $\gcd$ you may take the minimum exponent of each prime.

Practice:
- [Flatten (AtCoder ABC152 E)](https://atcoder.jp/contests/abc152/tasks/abc152_e)

---
Problems:
- [GCD on Blackboard (AtCoder ABC125 C)](https://atcoder.jp/contests/abc125/tasks/abc125_c)
- [CGCDSSQ (CF 475D)](https://codeforces.com/problemset/problem/475/D)
---