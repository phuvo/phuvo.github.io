# Linear algebra

$$
\gdef\norm#1{\left\| #1 \right\|}
\gdef\vb#1{\mathbf{#1}}
\gdef\vu#1{\hat{\mathbf{#1}}}
$$

## Vectors

The *magnitude* or *norm* of a vector $\vb{v}$ is its length and is denoted by $\norm{\vb{v}}$.

A *unit vector* points in the same direction as the original vector but has a magnitude of one.
$$
\vu{v} = \frac{\vb{v}}{\norm{\vb{v}}}
$$

## Matrix multiplications

See [Visualizing matrix multiplication as a linear combination](https://eli.thegreenplace.net/2015/visualizing-matrix-multiplication-as-a-linear-combination/).

## Eigendecomposition

For a square matrix $\bf{A}$, the *eigenvalue equation* is
<!--rehype:class=math-simple-->
$$
\bf{A} \vb{v} = \lambda \vb{v}
$$
with $\vb{v}$ being the *eigenvector* (/ˈaɪɡənˌvektəʳ/)
and $\lambda$ being the *eigenvalue*.

## Matrix determinants

> If a matrix contains the vertices of a polygon, then the absolute value of the determinant
measures the volume of that polygon.

See [Determinants and Volumes](https://textbooks.math.gatech.edu/ila/determinants-volumes.html).

$$
\det(\bf{A}) = \det(\bf{A}^\top)
$$
