// example from http://homepages.inf.ed.ac.uk/wadler/papers/deforest/deforest.ps
const { build, foldr } = require('../../core');

module.exports = n => sum(map(m => m * m, upto(n)));