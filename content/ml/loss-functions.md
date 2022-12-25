# Loss functions

## Regularization

Regularization avoids overfitting by adding a penalty to the model's loss function

$$
\underbrace{\tilde{L}(\theta;x,y)}_\text{total loss}
=
\underbrace{L(\theta;x,y)}_\text{data loss}
\, + \!
\underbrace{\lambda \Omega(\theta)}_\text{regularization loss}
$$

where $\lambda$ is the *regularization rate*, and $\Omega(\theta)$ measures the model complexity.

See [L<sub>1</sub> vs. L<sub>2</sub> regularization](https://developers.google.com/machine-learning/crash-course/regularization-for-sparsity/l1-regularization#l1-vs.-l2-regularization.)
