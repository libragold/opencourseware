---
title: "Recitation 5"
---

### Second-order linear ordinary differential equation

Second-order linear ordinary differential equation of the form $a(x)y'' + b(x)y' + c(x) = g(x)$ is _homogeneous_ if $g(x) = 0$. We will focus on the homogeneous 2nd-order ODE where $a,b,c$ are constants.

**Problem 1** Find the general solution of $y''+2y'-3y=0$.

**Solution** Let&#8217;s guess the solution is $y=e^{rx}$ for some constant $r$. Then $(r^2+2r-3)e^{rx} = 0$ and so $r^2+2r-3=0$ (the characteristic equation) gives $r_1 = 1, r_2 = -3$. These two roots correspond to the solutions $y_1 = e^x, y_2 = e^{-3x}$. The general solution is thus $y = c_1e^x + c_2y^{-3x}$.

**Problem 2** Find the homogeneous 2nd-order ODE whose general solution is $y=c_1e^{2x} + c_2e^{-3x}$.

**Solution** Since The roots of the characteristic equation are 2 and -3, the characteristic equation is $(r-2)(r+3) = r^2+r-6$, and so the ODE is $y''+y'-6y=0$.

**Problem 3** Solve the IVP $y''+8y'-9y=0, y(1) = 1, y'(1) = 0$.

**Solution** The roots of the characteristic equation is $r^2+8r-9$ are $r = 1, -9$. The general solution is $y=c_1e^x+c_2e^{-9x}$. We also get $y'=c_1e^x - 9c_2e^{-9x}$. Using the initial conditions, we obtain $c_1e + c_2e^{-9} = 1, c_1e-9c_2e^{-9} = 0$. Solve the system of linear equations $c_1 = \frac{9}{10e}, c_2 = \frac{e^9}{10}$. The solution of the IVP is $y = \frac{9}{10e} e^x + \frac{e^9}{10} e^{-9x}$.

**Problem 4** Solve the IVP $y''-y'-2y=0, y(0) = a, y'(0) = 2$ and find $a$ so that the solution approaches 0 as $x$ tends to infinity.

**Solution** The roots of the characteristic equation is $r^2-r-2$ are $r = -1, 2$. The general solution is $y=c_1e^{-x} + c_2e^{2x}$. We also get $y' = -c_1e^{-x} + 2c_2e^{2x}$. Using the initial conditions, we obtain $c_1 + c_2 = a, -c_1 + 2c_2 = 2$. Solve the system of linear equations $c_1 = \frac{2a-2}{3}, c_2 = \frac{a+2}{3}$. The solution approaches 0 as $x$ tends to infinity only if $c_2 = 0$. Therefore $a=-2$.

**Problem 5** Solve the IVP $y'' + 5y' + 6y = 0, y(0) = 2, y'(0) = b$, where $b > 0$ and determine the maximum point $x_m$ of the solution.

**Solution** The roots of the characteristic equation is $r^2 + 5r + 6$ are $r = -2, -3$. The general solution is $y = c_1e^{-2x} + c_2e^{-3x}$. We also get $y' = -2c_1e^{-2x} -3c_2e^{-3x}$. Using the initial conditions, we obtain $c_1 + c_2 = 2, -2c_1 - 3c_2 = b$. Solve the system of linear equations $c_1 = b+6, c_2 = -b-4$. The maximum point $x_m$ is given by $y'(x)=0$, that is $-2c_1e^{-2x} -3c_2e^{-3x} = 0$. Solve the last equation and get $x_m = \ln \frac{-3c_2}{2c_1} = \ln\frac{3(b+4)}{2(b+6)}$. We need to check, via the second derivative test, that $y''(x_m) < 0$. Notice that $y''(x_m) + 5y'(x_m) + 6y(x_m) = 0$ and $y'(x_m) = 0$. We have $y''(x_m) = -6y(x_m)$. It suffices to show that $y(x_m) > 0$. Compute $y(x_m) = c_1e^{-2x_m} + c_2e^{-3x_m} = e^{-3x_m}(c_1e^{x_m} + c_2) = e^{-3x_m}(c_1\frac{-3c_2}{2c_1}+c_2) = e^{-3x_m}\frac{-c_2}{2}$. As $c_2 = -b-4 < 0$, $y(x_m) > 0$.

**Problem 6** Find the general solution of $y''' - 6y'' + 11y' - 6y = 0$.

**Solution** Let&#8217;s guess the solution $y = e^{rx}$ for some constant $r$. Then $(r^3 - 6r^2 + 11r - 6)e^{rx} = 0$ and so $r^3 - 6r^2 + 11r - 6 = 0$ gives $r = 1, 2, 3$. These 3 roots correspond to the solutions $y = e^x, e^{2x}, e^{3x}$. The general solution is thus $y = c_1e^x + c_2e^{2x} + c_3e^{3x}$.
