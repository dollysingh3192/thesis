// example from http://homepages.inf.ed.ac.uk/wadler/papers/deforest/deforest.ps

module.exports = function (n) {
  let upto_n = [];
  for (let i = 0; i < n; i++) upto_n.push(i + 1);

  upto_n.map(_ => (n => {
    val: n;
  })((n => n * n)(_))); // [a] -> [b]   ( a -> b )
};