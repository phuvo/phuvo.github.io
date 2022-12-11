# Differential calculus

## Derivatives

The *derivative* of a function $f$ is another function $f'$ defined by
$$
f'(x) = \lim\limits_{h \to 0}\frac{f(x+h) - f(x)}{h}
$$

With $f(x) = (x-2)^2$, here is [the plot of $f(x)$ and $f'(x)$](https://www.wolframalpha.com/input?i=plot+%28x-2%29%5E2%2C+derivative+from+-1+to+6).

## Fundamental theorem of calculus

If a function $f$ is continous on the interval $[a,b]$ and $F(x)$ is any antiderivative
of $f(x)$, then
$$
\int_a^{\,b} \!\! f(x) \, dx = F(b) - F(a)
$$

## Taylor series

The *Taylor series* of $f(x)$ at a point $x = a$ is given by
$$
\begin{align*}
f(a) &= f(a) + \frac{f'(a)}{1!}(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \cdots \\
     &= \sum_{n=0}^\infty \frac{f^{(n)}(a)}{n!}(x-a)^n
\end{align*}
$$
where $f^{(n)}(a)$ denotes the *n*th derivative of $f$ evaluated at the point $a$.

## Automatic differentiation

A *dual number* $y$ is given by the expression
<!--rehype:class=math-simple-->
$$
y = a + b\epsilon
$$
where $\epsilon$ is a symbol taken to satisfy $\epsilon^2 = 0$ with $\epsilon \neq 0$.

Using Taylor series,
$$
f(a + b\epsilon) = f(a) + bf'(a)\epsilon
$$
