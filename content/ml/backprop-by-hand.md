# Backpropagation by hand

$$
\gdef\vb#1{\mathbf{#1}}
\gdef\pdv#1#2{\frac{\partial #1}{\partial #2}}
\gdef\bmqty#1{\begin{bmatrix} #1 \end{bmatrix}}
$$

![A simple neural network](/public/images/backprop.drawio.svg)

We'll use standard logistic functions in the hidden layer,
$$
\sigma(x) = \frac{e^x}{e^x+1}
$$
and no activation function for the output node.

## Forward pass

$$
h_0 = \sigma(w_0 x_0 + w_2 x_1 + b_0) \\
h_1 = \sigma(w_1 x_0 + w_3 x_1 + b_1)
$$

$$
\bmqty{h_0 \\ h_1} = \sigma\left(
    \bmqty{w_0 & w_2 \\ w_1 & w_3} \bmqty{x_0 \\ x_1} + \bmqty{b_0 \\ b_1}
\right)
$$

## Parameter derivatives

$$
\pdv{L}{w_5} = (a_0 - y)h_1
$$

## Backward pass

TODO
