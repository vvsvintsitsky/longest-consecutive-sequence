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
  //array = [100,4,200,1,3,2];
  tree.v = array[0];
  var prevValue;
  var consecutiveLength = 0;
  var info = {prev: null, currentConsLength : 0, maxConsLength : 0};
  for(var i = 1; i < array.length; i++) {
    insertNode(tree, array[i]);
  }

  var countConsecutiveLength = function(node, info) {
    if(node.l != null) {
      countConsecutiveLength(node.l, info);
    }
    
    if((node.v - 1) !== info.prev) {
      if(info.currentConsLength > info.maxConsLength) {
        info.maxConsLength = info.currentConsLength;
      }
      info.currentConsLength = 1;
    } else {
      info.currentConsLength++;
    }
    info.prev = node.v;
    
    if(node.r != null) {
      countConsecutiveLength(node.r, info);
    }
  }

  countConsecutiveLength(tree, info);
  console.log(info.maxConsLength);

  /*var sortedArray = [];
  var fillArrayFromTree = function(node, arrayToFill) {
    if(node.l != null) {
      fillArrayFromTree(node.l, arrayToFill);
    }
    arrayToFill.push(node.v);
    
    if(node.r != null) {
      fillArrayFromTree(node.r, arrayToFill);
    }
  }

  fillArrayFromTree(tree, sortedArray);

  info.prev = sortedArray[0];
  for(var i = 1; i < sortedArray.length; i++) {
    if((sortedArray[i] - 1) !== info.prev) {
      console.log(info.prev + " !=> " + sortedArray[i]);
      if(info.currentConsLength > info.maxConsLength) {
        info.maxConsLength = info.currentConsLength;
      }
      info.currentConsLength = 0;
    } else {
      info.currentConsLength++;
    }
    info.prev = sortedArray[i];
  }

  console.log(info.maxConsLength);*/
}
