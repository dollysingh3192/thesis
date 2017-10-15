# Rewrite rules

- [x] "map/map"    -> forall f g xs. xs.map(f).map(g) = xs.map(_ => g(f(_)))

- [ ] "map/reduce" -> forall f g a xs. xs.map(f).reduce(g, a) = ...

# Benchmark tests

```
Starting benchmark test for simple_map_map.js
simple_map_map.js before x 94,021 ops/sec ±0.92% (92 runs sampled)
simple_map_map.js after x 106,378 ops/sec ±1.33% (87 runs sampled)
Fastest is simple_map_map.js after

Starting benchmark test for simple_map_map_map.js
simple_map_map_map.js before x 71,129 ops/sec ±0.61% (93 runs sampled)
simple_map_map_map.js after x 34,526 ops/sec ±1.16% (89 runs sampled)
Fastest is simple_map_map_map.js before

Starting benchmark test for wadler_map_reduce.js
wadler_map_reduce.js before x 95,615 ops/sec ±0.89% (91 runs sampled)
wadler_map_reduce.js after x 95,385 ops/sec ±0.84% (92 runs sampled)
Fastest is wadler_map_reduce.js before,wadler_map_reduce.js after
```

# How to detect if a function is pure (or _referentially transparent_)[1]

1. It only reads parameters and locals;*
2. It only writes locals;
3. On non-locals, it calls only pure functions; (doesn't this definition forget impure local function declarations)
4. All functions it calls implicitly are pure, e.g., `toString`; 
5. It only writes properties of locals if they do not alias non-locals;**

\* -> I think we can allow non-locals that are defined as constants

** -> Aliasing is not possible to determine in JS in the general case because you can look up properties dynamically (`object['property']`). Provided that isn't done in the function, and we have the entire source of the program, we can handle this. I guess what we need to do, is follow the property that we're trying to write to, and see where it's defined, and figure out if writing to this property affects memory OUTSIDE the function scope.

We also need to store information on the purity of some functions (for instance, know that `console.log` is impure). Also, if we determine that a function is pure, can we just do a cache lookup instead of recursively checing for this (refer to point 3 in the list above).

# Potential issues

* In a non-lazy language, it is possible to convert a function that doens't terminate into one that does using Wadler's deforestation algorithm [2]



# References
[1] [https://softwareengineering.stackexchange.com/questions/176761/compute-if-a-function-is-pure](https://softwareengineering.stackexchange.com/questions/176761/compute-if-a-function-is-pure)]

[2] [http://homepages.inf.ed.ac.uk/wadler/papers/deforest/deforest.ps](http://homepages.inf.ed.ac.uk/wadler/papers/deforest/deforest.ps)