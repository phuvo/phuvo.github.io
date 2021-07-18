# A Philosophy of Software Design

Written by John Ousterhout.

## Chapter 14: Choosing names

> The greater the distance between a name’s declaration and its uses, the longer the name should be.

```c
for (i = 0; i < numLines; i++) {
  ...
}
```

> If the loop gets so long that you can’t see it all at once, or if the meaning of the iteration variable is harder to figure out from the code, then a more descriptive name is in order.
