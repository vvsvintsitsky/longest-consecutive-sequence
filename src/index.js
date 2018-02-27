module.exports = function longestConsecutiveLength(array) {
  var insertNode = function(node, value) {
    if(value <= node.v) {
      if(node.l == null) {
        node.l = {p : node, l : null, r : null, v : value};
      } else {
        insertNode(node.l, value);
      }
    } else if(value > node.v) {
      if(node.r == null) {
        node.r = {p : node, l : null, r : null, v : value};
      } else {
        insertNode(node.r, value);
      }
    }
  }

  var tree = {p : null, l : null, r : null, v : null};
  array = [100,4,200,1,3,2];
  tree.v = array[0];
  var prevValue;
  var consecutiveLength = 0;
  var info = {prev: null, consLength : 0};
  for(var i = 1; i < array.length; i++) {
    insertNode(tree, array[i]);
  }
}
