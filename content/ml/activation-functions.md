# Activation functions

$$
\gdef\erf{\operatorname{erf}}
\gdef\vb#1{\mathbf{#1}}
$$

## Sigmoid

Standard logistic function:
$$
\sigma(x) = \frac{e^x}{e^x+1}
$$

## ReLU

- ReLU: $f(x) = \max(0, x)$
- Leaky ReLU: $f(x) = \max(\alpha x, x)$

## Softmax

The softmax function normalizes a vector into a vector that has all elements sum up to 1.
$$
\sigma(\vb{x})_i = \frac{\exp(x_i)}{\sum_{j=1}^k \exp(x_j)}
$$

## GELU

$$
\gdef\gelu{\operatorname{\footnotesize{GELU}}}
\gdef\lPhi{\raisebox{-.2ex}{$\Phi$}}
$$

Short for *Gaussian Error Linear Unit*.
$$
\gelu(x) = x \, \lPhi(x) = x \cdot \frac{1}{2} \left[ 1 + \erf \frac{x}{\sqrt{2}} \right]
$$

> We choose this distribution since neuron inputs tend to follow a normal distribution, especially
with Batch normalization.
