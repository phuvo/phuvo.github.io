# Attention mechanism

$$
\gdef\mr#1{\mathrm{#1}}
$$

## Notations

Symbol                          | Meaning
------------------------------- | -------------------
$\mr{X} \in \R^{L \times m}$    | Input sequence
$\mr{W}_q \in \R^{m \times k}$  | Query weight matrix
$\mr{W}_k \in \R^{m \times k}$  | Key weight matrix
$\mr{W}_v \in \R^{m \times v}$  | Value weight matrix
$\mr{Q} = \mr{X} \mr{W}_q^\top$ | Query matrix

## Self-attention

Scaled dot-product attention

$$
\operatorname{attn}(\mr{Q},\mr{K},\mr{V}) =
\operatorname{sm}\left(\frac{\mr{Q}\mr{K}^\top}{\sqrt{k}}\right)\mr{V}
$$

## References

- [Illustrated: self-attention](https://towardsdatascience.com/illustrated-self-attention-2d627e33b20a)
