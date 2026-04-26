---
title: "Game Theory"
---

## Introduction to Games
A **combinatorial game** is usually a two-player game where:

- Both players know the full state of the game.
- There is no randomness.
- Players alternate turns.
- The game eventually ends.

Under **normal play**, the player who cannot move loses. Under **misere play**, the player who cannot move wins. Most of the games we will cover will be under normal play.

It is also true that under the above conditions, exactly one of the players has a winning strategy.

Games can also be **partial** or **impartial**. In an impartial game, at any position, both players have the same available moves. In a partial game, players may have different moves. A game being impartial allows us to make some simplifications to the way in which we analyze them.


### Win and Loss Positions
For impartial games, we classify every state as either:
- **Winning**: the current player can force a win.
- **Losing**: the current player will lose if the opponent plays optimally.
Here, the current player refers to the player whose move it is to make.

This gives a simple rule to determine whether a position is winning or losing:
- The current position is winning if there is at least one move that gives the opponnet a losing position.
- Otherwise, the current position is losing.

This can often inspire a dynamic programming based solution to some problems. Sometimes in problems listing out the table for a few numbers to try and find a pattern is a good starting point.

---

### Subtraction Games
In one example of a subtaction game, there is one pile with `n` stones and on a turn, a player may remove $1$, $2$, or $3$ stones from the pile. If a player cannot make a move, they lose. A subtraction game can be played with any set of sizes of stones that can be removed.

In the specific instance of $1$, $2$, or $3$ stones, listing out the first few cases may reveal a pattern. What's an easy way to characterize the winning strategy for the pattern revealed?

In the general case, we can do the dynamic programming trick. Suppose we are given a subtraction set of size $k$ and wish to figure out the winner in a pile of $n$ stones. Let $dp[i]$ be false if the the game with i stones is losing and true if it is winning. The transition involves testing all moves that leave a nonnegative number of stones remaining and seeing if any of them are winning.

```cpp
dp[0] = false;
for (int i = 1; i <= n; i++) {
    dp[i] = false;
    for (int a : moves) {
        if (i - a >= 0 && dp[i - a] == false) {
            dp[i] = true;
        }
    }
}
```
The code above runs in $O(nk)$ time.

[Stones (AC)](https://atcoder.jp/contests/dp/tasks/dp_k?)

What if a move consists of either dividing the number of stones in the pile by $2$ rounded down or subtracting $1$ stone. Can you solve this problem for $n=10^9$ as well? (Source: Hacker Devils Contest)

We can also extend this dynamic programming idea and think about games a little bit more generally by considering the game space as a DAG. Here the nodes are positions and edges are moves a player can make. We can use the same recurrence and process the nodes in reverse topological order to determine the win/loss states.

---
### Mimicry / Exploiting Symmetry 
Cram: In an $n$ by $m$ grid, Alice and Bob take turns placing $1$ by $2$ dominoes such that no 2 dominoes overlap with Alice going first. Who wins if $n$ and $m$ are both even? Who wins if $n$ is even and $m$ is odd.

Bowling Pins: There are $n$ bowling pins in a line and in a move, a player may knock down either $1$ or $2$ adjacent bowling pins. Who wins?

---
### Parity Arguments

Greedy Nim:
Alice and Bob play a game with many piles of stones. In a move, a player may remove any number of stones from the largest pile of stones. For which starting configurations does Alice win if she goes first?

Factor Game: Initially an integer greater than $1$ is written on a board. In a player's turn, they make take a factor of the number written on the board that is greater than 1 and subtract it from the original number. The original number is replaced with this new difference. The person who makes the number $0$ loses the game. Who wins if Alice goes first? Source: A mock aime I was unable to find.

[Ordinary Game (AC)](https://atcoder.jp/contests/abc048/tasks/arc064_b)

---
### Strategy Stealing
Two-move chess: In this variant of chess, white takes two moves followed by black taking two moves and so on. Prove that under optimal play, white will never lose.

Chomp: Given an $n$ by $m$ chocolate, Alice and Bob take turns eating chocolate. In a move, they select a previously uneaten square and eat all squares to the right and underneath it. Alice goes first and whoever eats the last square loses. Who wins the game?

---
### Problems

Games don't need to fall into one of these categories and they don't need to be impartial for the concepts to apply, but these can useful starting places when thinking about problems. Often playing the game a lot in small scenarios or listing out data and looking for a pattern can be helpful. It can also be helpful to put yourself in the shoes of one of the players and try to consider strategies that would make you win.

- [Removing Coins (AC)](https://atcoder.jp/contests/agc033/tasks/agc033_c)
- [Bob Mindset (RUPC)](https://codeforces.com/gym/105813/problem/I)
- [Caught in the Middle (2nd Universal Cup Stage 24)](https://qoj.ac/problem/8287)
- [Farm Game (CF)](https://codeforces.com/problemset/problem/1942/E)
- [Splitting Pairs (NAC 2023)](https://open.kattis.com/problems/splittingpairs)
