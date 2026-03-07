---
title: "Recitation 1"
---

**Definition** An ordinary differential equation (ODE) relates a function with its derivatives and a single (independent) variable.

**Examples** (1) $f'(x) = 0$, (2) $\frac{dy}{dt}=y$, (3) $\frac{dy}{dx}=y$. In the 2nd example, $y$ is seen as a function of $t$, whereas in the 3rd example, $y$ is a function of $x$.

### Slope Diagram

In the last lecture, you have seen the **slope diagram** (also known as **slope field**) of the ODE $y'=ay+b$. Slope diagram helps us visualize the actual solution to the ODE.

**Problem 1** Draw the slope field for the ODE $y' = \frac{-x}{y}$.

**Solution** See the excellent explanation on Khan Academy.

### Ordinary Differential Equation $y'=ay+b$

**Problem 2** Solve $y' = 2y + 3$.

**Solution** Rewrite the original ODE as $\frac{dy}{dx} = 2y+3$. Transform it to $\frac{dy}{2y+3} = dx$. Integrate both sides: $\frac{1}{2}\ln |2y+3| = x + C$, and so $2y+3 = \pm e^{2x+2C}=\pm e^{2C}e^{2x}$. Denote $\pm e^{2C}$ by a new constant $A$, we obtain $2y+3=Ae^{2x}$, thus $y=\frac{Ae^{2x}-3}{2}$.

**Remark** The general formula for $y' = ay+b$, where $a, b$ are constants, is $y = \frac{Ae^{ax}-b}{a}$.

### Initial Conditions and Initial Value Problem

A differential equation often has a family of solutions (for example, in the solution to Problem 2, one has the freedom to choose $A$), so to specify a unique solution, we usually need other data in addition (known as the **initial conditions**) to the differential equation.

The problem of finding the unique solution, given initial conditions, is sometimes called an **initial value problem** (IVP).

**Problem 3** Solve the initial value problem $y' = 3y+5, y(0) = -1$.

**Solution** Using the general formula in the remark above, $y=\frac{Ae^{3x}-5}{3}$. By the initial condition, $-1=y(0)=\frac{Ae^{3\cdot 0}-5}{3}=\frac{A-5}{3}$, so $A=2$. Therefore the solution to the IVP is $y=\frac{2e^{3x}-5}{3}$.

**Warnings**

  1. The initial value doesn&#8217;t necessarily have to just be $y$-values. Higher-order equations might have an initial value for both $y$ and $y'$, for example.
  2. An initial value problem doesn&#8217;t always have a unique solution. It&#8217;s possible for an initial value problem to have multiple solutions, or even no solution at all.
