---
title: "Practice problems"
---

**Problem 1.** Clasher needs to train Archers, Giants and Wizards from 2 Barracks within 45 minutes. The table below gives the training cost (in units of Elixir), the training time, damage per second, hit points and housing space of each troop.

| Troop | Training cost | Training time | Damage per second | Hit points | Housing space |
|---|---|---|---|---|---|
| Archer | 400 | 24 seconds | 22 | 44 | 1 |
| Giant | 940 | 2 minutes | 43 | 940 | 5 |
| Wizard | 3500 | 8 minutes | 170 | 156 | 4 |

In order to destroy the enemy, the total hit points of the troops have to be at least 18800 respectively. The total housing space cannot exceed 220. One of the Barrack is boosted and trains troops 4 times faster. For example, it takes only 2 minutes to train a wizard. Clasher will obtain 100 units of Elixir for each damage per second that the troops have.

(a) Formulate the linear program to maximize the difference between the return and the total training cost. Your linear program should also yield the number of troops trained in each Barrack.

(b) Set up the initial tableau for the linear program in (a) and perform one iteration on the tableau which uses the two phase method.

(c) Determine the dual of the linear program.

**Problem 2.** A group of skiers from Pittsburgh wants to tour around three ski resorts in USA: Snowbird in Utah, Jackson Hole in Wyoming, Aspen in Colorado. Below is the table of the costs for flights between the cities. Theses flights are all nonstop or one-stop.

| From\To | Pittsburgh, PA | Salt Lake City, UT | Jackson, WY | Aspen, CO |
|---|---|---|---|---|
| Pittsburgh, PA | – | $183 | $443 | $328 |
| Salt Lake City, UT | $183 | – | $279 | $323 |
| Jackson, WY | $333 | $279 | – | $409 |
| Aspen, CO | $423 | $356 | $403 | – |

Alternatively, there is a two-stop flight from Pittsburgh to Jackson that costs \$335 and there is one from Salt Lake City to Aspen that costs $317. The skiers are willing to take at most 1 two-stop flight. Formulate the linear program to find the tour trip plan that minimizes the cost.
