const { build, foldr } = require('../../core');

module.exports = n => build((_c, _n) => ((_c2, _n2) => ((_c3, _n3) => {
  const from_ = (_a3, _b3) => (_c4, _n4) => _a3 > _b3 ? _n4 : _c4(_a3, from_(_a3 + 1, _b3)(_c4, _n4));

  return from_(1, n)(_c3, _n3);
})((_a2, _b2) => _c2((m => m * m)(_a2), _b2), _n2))((_a, _b) => _c((m => m + '')(_a), _b), _n));