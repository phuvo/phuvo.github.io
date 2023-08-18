# Partial derivatives

$$
\gdef\vb#1{\mathbf{#1}}
\gdef\pdv#1#2{\frac{\partial #1}{\partial #2}}
\gdef\nhq{\hspace{-.7em}}
$$

## Gradient vectors

The *gradient* of a scalar function $f: \R^n \to \R$ is a vector
$$
\vb{y} = \nabla f(\vb{x}) = \nabla f(x_1, x_2, \dots, x_n) \equiv \!
\large{\begin{bmatrix}
\\[-2.0ex]
\pdv{f}{x_1} \\[1.5ex]
\pdv{f}{x_2} \\[0.5ex]
\vdots       \\[0.5ex]
\pdv{f}{x_n} \\[1.0ex]
\end{bmatrix}}
$$
where the gradient operator $\nabla$ takes the partial derivative of $f$
along each of its dimensions.

The *Jacobian* of a vector function $\mathbf{f}: \R^n \to \R^m$ is a matrix
of size $m \times n$
$$
\mathbf{J} = \nabla \mathbf{f}(\vb{x}) =

\begin{bmatrix}
\\[-2.0ex]
\nabla^\top\!f_1 \\[-.5ex]
\vdots           \\[1.0ex]
\nabla^\top\!f_m \\[0.5ex]
\end{bmatrix}

\equiv

\large{\begin{bmatrix}
\\[-2.0ex]
\pdv{f_1}{x_1} & \nhq \cdots & \nhq \pdv{f_1}{x_n} \\[0.5ex]
\vdots         & \nhq \ddots & \nhq \vdots         \\[0.5ex]
\pdv{f_m}{x_1} & \nhq \cdots & \nhq \pdv{f_m}{x_n} \\[1.0ex]
\end{bmatrix}}
$$
where $\nabla^\top\!f_i$ is the transpose (row vector) of the gradient of the $i$ component.

## Directional derivatives

The *directional derivative* of $f(\vb{x})$ in the direction of $\vb{u}$ is given by
$$
D_\vb{u}f(\vb{x}) \equiv \vb{u} \cdot \nabla f(\vb{x}) = |\nabla f(\vb{x})| \cos\theta
$$
where $\vb{u}$ is a unit vector in a particular direction, and $\theta$ is the angle
between $\vb{u}$ and $\nabla f(\vb{x})$.

> The directional derivative is maximized when $\cos\theta$ is maximized, and this happens
at $\theta = 0$. Therefore, the direction of the maximum change in a function at any point
is the gradient at that point.
