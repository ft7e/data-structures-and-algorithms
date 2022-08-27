const HashTable = require("./hashTable");

function TreeInterSection(tree1, tree2) {
  const hashTable = new HashTable();
  if (tree1.root === null || tree2.root === null) {
    return "Empty";
  }
  let result = [];
  for (let i = 0; i < tree2.length; i++) {
    hashTable.set(tree1[i], tree1[i]);
  }
  for (let i = 0; i < tree1.length; i++) {
    if (hashTable.contains(tree2[i]) === true) {
      result.push(tree2[i]);
    }
  }
  return result;
}

module.exports = TreeInterSection;
