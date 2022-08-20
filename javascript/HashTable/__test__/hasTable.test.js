const HashTable = require("../hashTable");

const myHashTable = new HashTable(10);

describe("Hash Table Test", () => {
  it("Setting a key/value", () => {
    myHashTable.set("Test", "test");
    expect(myHashTable.get("Test")).toEqual([{ Test: "test" }]);
  });
  it("Retrieving based on a key", () => {
    myHashTable.set("kha", "to");
    expect(myHashTable.get("kha")).toEqual([{ kha: "to" }]);
  });
  it("Successfully returns null", () => {
    expect(myHashTable.get("Redwood")).toEqual(null);
  });

  it("Successfully retrieve a value from a bucket", () => {
    myHashTable.set("ion", "vi");
    myHashTable.set("ol", "ion");
    expect(myHashTable.get("ion")).toEqual([{ ion: "vi" }, { ol: "ion" }]);
  });
  it("Successfully hash a key", () => {
    myHashTable.set("Test", "test");
    expect(myHashTable.hash("Test")).toBeLessThan(10);
  });
});
