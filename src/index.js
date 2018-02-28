module.exports = function longestConsecutiveLength(array) {

  if(array.length == 0) {
    return 0;
  }
  var info = {current: null, currentConsLength : 1, maxConsLength : 1};

  /*while(set.size != 0) {
    while(set.has(currentNumber)) {
      info.currentConsLength++;
      set.delete(currentNumber--);
    }
    currentNumber = info.prev + 1;
    while(set.has(currentNumber)) {
      info.currentConsLength++;
      set.delete(currentNumber++);
    }
    if(info.currentConsLength > info.maxConsLength) {
      info.maxConsLength = info.currentConsLength;
    }
    info.currentConsLength = 1;
    //current = set.
  }*/

  /*var insertNode = function(node, value) {
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
  
  for(var i = 1; i < array.length; i++) {
    insertNode(tree, array[i]);
  }

  var countMaxConsecutiveLength = function(node, info) {
    if(node.l != null) {
      countMaxConsecutiveLength(node.l, info);
    }
    
    if(node.v != info.prev) {
      if((node.v - 1) !== info.prev) {
        if(info.currentConsLength > info.maxConsLength) {
          info.maxConsLength = info.currentConsLength;
        }
        info.currentConsLength = 1;
      } else {
        info.currentConsLength++;
      }
      info.prev = node.v;
    }
        
    if(node.r != null) {
      countMaxConsecutiveLength(node.r, info);
    }
  }

  countMaxConsecutiveLength(tree, info);
  return info.maxConsLength;*/






  //console.log(info.maxConsLength);

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

  var set = new Set(array);
  //for (let item of set.values()) console.log(item);

  var countConsLengthWithSet = function(set, info) {
    for (let item of set.values()) {
      var currentNumber;
      info.current = item;
      currentNumber = info.current - 1;
      set.delete(item)
      while(set.has(currentNumber)) {
        info.currentConsLength++;
        set.delete(currentNumber--);
      }
      currentNumber = info.current + 1;
      while(set.has(currentNumber)) {
        info.currentConsLength++;
        set.delete(currentNumber++);
      }
      if(info.currentConsLength > info.maxConsLength) {
        info.maxConsLength = info.currentConsLength;
      }
      info.currentConsLength = 1;
      break;
    }
  }

  while(set.size != 0) {
    //console.log(set.length);
    countConsLengthWithSet(set, info);
    
  }
  return info.maxConsLength;

  
}
