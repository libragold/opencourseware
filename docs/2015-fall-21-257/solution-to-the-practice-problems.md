---
title: "Solution to the Practice Problems"
---

**Solution 1a.** Say the Barracks are Barrack 1 and Barrack 2 and the latter is boosted. Let $x_1, x_2$ be the number of Archers trained from Barrack 1 and Barrack 2 respectively. Define $x_3, x_4$ for Giants and $x_5, x_6$ for Wizards similarly. We can formulate the linear program as follows.

| | |
|---|---|
| **Maximize** | $$\begin{gathered}(100\times 22 - 400)(x_1+x_2) \\ +(100\times 43 - 940)(x_3+x_4) \\ +(100\times 170 - 3500)(x_5+x_6)\end{gathered}$$ |
| **Subject to** | $44(x_1+x_2)+940(x_3+x_4)+156(x_5+x_6)\ge 18800$ Hit points constraint |
| | $(x_1+x_2)+5(x_3+x_4)+4(x_5+x_6)\le 220$ Housing space constraint |
| | $0.4x_1+2x_3+8x_5 \le 45$ Training time constraint for Barrack 1 |
| | $0.1x_2+0.5x_4+2x_6 \le 45$ Training time constraint for Barrack 2 |
| | $x_1, \dots, x_6 \ge 0$ |

**Solution 1b.** Insert a surplus variable $p_1$ and an artificial variable $a_1$ for the first constraint, and insert slack variables $s_2, s_3, s_4$ for the last three constraints respectively.

| | |
|---|---|
| **Maximize** | $1800x_1+1800x_2+3360x_3+3360x_4+13500x_5+13500x_6$ |
| **Subject to** | $44x_1+44x_2+940x_3+940x_4+156x_5+156x_6 - p_1 + a_1 = 18800$ |
| | $x_1+x_2+5x_3+5x_4+4x_5+4x_6 + s_2=220$ |
| | $0.4x_1+2x_3+8x_5+s_3=45$ |
| | $0.1x_2+0.5x_4+2x_6+s_4=45$ |
| | $x_1, \dots, x_6, p_1, a_1, s_2, s_3, s_4 \ge 0$ |

The artificial objective function is $-a_1 = 44x_1+44x_2+940x_3+940x_4+156x_5+156x_6 - p_1 - 18800$. Therefore we get the initial tableau.

| $x_1$ | $x_2$ | $x_3$ | $x_4$ | $x_5$ | $x_6$ | $p_1$ | $a_1$ | $s_2$ | $s_3$ | $s_4$ | |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 44 | 44 | 940 | 940 | 156 | 156 | -1 | 1 | | | | 18800 |
| 1 | 1 | 5 | 5 | 4 | 4 | | | 1 | | | 220 |
| 0.4 | | 2 | | 8 | | | | | 1 | | 45 |
| | 0.1 | | 0.5 | | 2 | | | | | 1 | 45 |
| -1800 | -1800 | -3360 | -3360 | -13500 | -13500 | | | | | | |
| -44 | -44 | -940 | -940 | -156 | -156 | 1 | | | | | -18800 |

We may choose any variable among $x_1, \dots, x_6$ as the entering variable as their coefficients in the artificial objective function are negative. We choose $x_3$ here. Now the replacement quantities are $18800/940 = 20, 220/5 = 44, 45/2 = 22.5$. So the first entry in column 3 is the pivot. Couple of row operations yield:

| $x_1$ | $x_2$ | $x_3$ | $x_4$ | $x_5$ | $x_6$ | $p_1$ | $a_1$ | $s_2$ | $s_3$ | $s_4$ | |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 11/235 | 11/235 | 1 | 1 | 39/235 | 39/235 | -1/940 | 1/940 | | | | 20 |
| 36/47 | 36/47 | | | 149/47 | 149/47 | 1/188 | 1/188 | 1 | | | 120 |
| 72/235 | -22/235 | | -2 | 1802/235 | -78/235 | 1/470 | -1/470 | | 1 | | 5 |
| | 0.1 | | 0.5 | | 2 | | | | | 1 | 45 |
| -77208/47 | -77208/47 | | | -608292/47 | -608292/47 | -168/47 | -168/47 | | | | 67200 |
| | | | | | | | 1 | | | | |

**Solution 1c.** The dual linear program is as follows.

| | |
|---|---|
| **Minimize** | $19200y_1+220y_2+45y_3+45y_4$ |
| **Subject to** | $44y_1+y_2+0.4y_3 \ge 1800$ |
| | $44y_1 + y_2 + 0.1y_4 \ge 1800$ |
| | $940y_1+5y_2+2y_3 \ge 3360$ |
| | $940y_1 + 5y_2+0.5y_4 \ge 3360$ |
| | $156y_1 + 4y_2+ 8y_3 \ge 13500$ |
| | $156y_1 + 4y_2+2y_4 \ge 13500$ |
| | $y_1 \le 0, y_2, y_3, y_4 \ge 0$ |

**Solution 2.** Denote the cities by 1, 2, 3, 4. Let $x_{ij}$ denote whether the skiers travel from city $i$ to city $j$. In addition, let $b_1, b_2$ be the binary variables indicating whether they will take the non-stop/one-stop flight and the two-stop flight from Pittsburgh to Jackson respectively. Similarly define $b_3, b_4$ for the flights from Salt Lake City to Aspen.

| | |
|---|---|
| **Maximize** | $\begin{gathered}Mx_{11}+183x_{12}+(443b_1+335b_2)+328x_{14} \\ +183x_{21}+Mx_{22}+279x_{23}+(323b_3+317b_4) \\ +333x_{31}+279x_{32}+Mx_{33}+409x_{34}+\\ 423x_{41}+356x_{42}+403x_{43}+Mx_{44}\end{gathered}$ |
| **Subject to** | $x_{i1}+x_{i2}+x_{i3}+x_{i4} = 1$ for all $i = 1, 2, 3, 4$. |
| | $x_{1j}+x_{2j}+x_{3j}+x_{4j} = 1$ for all $j = 1, 2, 3, 4$. |
| | $\sum_{i \in D, j\notin D}x_{ij} \ge 1$ for all proper subsets $D$. |
| | $b_1 + b_2 \le x_{13}$ |
| | $b_3 + b_4 \le x_{24}$ |
