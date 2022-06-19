const { zipped, LinkedList } = require("./linkedlist-zip");

describe("Linked list initalization", () => {
  let link = new LinkedList();
  beforeEach(() => {
    link = new LinkedList();
  });
  test("init linked list", () => {
    expect(link.head.value).toBe(null);
    expect(link.head.next).toBe(null);
  });

  test("insert value to linked list", () => {
    link.insert(4);
    link.insert(5);
    expect(link.head.value).toBe(4);
    expect(link.head.next.value).toBe(5);
    expect(link.head.next.next).toBe(null);
  });
});

describe("zipped testing", () => {
  const link1 = new LinkedList();
  const link2 = new LinkedList();
  test("testing two same size linked list", () => {
    const arr1 = new Array(10).fill(1).map((v, i) => i * 2);
    const arr2 = new Array(10).fill(1).map((v, i) => i);
    arr1.forEach((v) => {
      link1.insert(v);
    });
    arr2.forEach((v) => {
      link2.insert(v);
    });

    let newLink = zipped(link1, link2);
    let root = newLink.head;

    for (let i = 0; i < arr1.length; i += 1) {
      expect(root.value).toBe(arr1[i]);
      root = root.next;
      for (let j = i; j === i; j += 1) {
        expect(root.value).toBe(arr2[j]);
        root = root.next;
      }
    }
  });
});
