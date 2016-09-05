
function koala() {
  console.log("koalas are cute!");
}

function sloth() {
  console.log("sloths are cute!");
} 

function cap(x) {
  if (x.length==0) { return x; }
  return x.slice(0,1).toUpperCase() + x.slice(1)
}

function sq(x) {
  return x*x;
}

function sq_array(x) {
  for (var i=0; i<x.length; i++) {
    x[i] = x[i]*x[i];
  }
  return x;
}


exports.koala = koala;
exports.sloth = sloth;
exports.cap = cap;
exports.sq = sq;
exports.sq_array = sq_array;
