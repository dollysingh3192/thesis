module.exports = n => map(m => m+'', map(m => m*m, drop(4, from(1, n))))