/*
You can use any language.

Your task is to implement a PriorityExpiryCache cache with a max capacity.  Specifically please fill out the data structures on the PriorityExpiryCache object and implement the entry eviction method.

It should support these operations:
  Get: Get the value of the key if the key exists in the cache and is not expired.
  Set: Update or insert the value of the key with a priority value and expiretime.
    Set should never ever allow more items than maxItems to be in the cache.
    When evicting we need to evict the lowest priority item(s) which are least recently used.

Example:
p5 => priority 5
e10 => expires at 10 seconds since epoch

c = NewCache(5)
c.Set("A", value=1)
c.Set("B", value=2)
c.Set("C", value=3)
c.Set("D", value=4)
c.Set("E", value=5)
c.Get("C") // C the most recently used item


// Current time = 0
c.SetMaxItems(5)
c.Keys() = ["A", "B", "C", "D", "E"]
// space for 5 keys, all 5 items are included

time.Sleep(5)

// Current time = 5
c.SetMaxItems(4)
c.Keys() = ["A", "C", "D", "E"]
// "B" is removed because it is expired.  e3 < e5

c.SetMaxItems(3)
c.Keys() = ["A", "C", "E"]
// "D" is removed because it the lowest priority
// D's expire time is irrelevant.

c.SetMaxItems(2)
c.Keys() = ["C", "E"]
// "A" is removed because it is least recently used."
// A's expire time is irrelevant.

c.SetMaxItems(1)
c.Keys() = ["C"]
// "E" is removed because C is more recently used (due to the Get("C") event).

*/


class Cache {

    map = new Map();
  
    head = new linkNode('_head', null);
    tail = new linkNode('_tail', null);
    size = 0;
  
  
    constructor(size) {
        this.size = size;
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
  
    Get(k) {
  
        const thisLinkNode = this.map.get(k);
  
        // 调顺序
        thisLinkNode.prev.next = thisLinkNode.next;
        thisLinkNode.next.prev = thisLinkNode.prev;
  
        const t = this.head.next;
        this.head.next = thisLinkNode;
        thisLinkNode.next = t;
        thisLinkNode.prev = this.head;
        t.prev = thisLinkNode;
  
        this.removeExtra();
        return thisLinkNode.value;
    }
  
    Set(k, v) {
  
        const node = new linkNode(k, v);
        this.map.set(k, node);
  
        // 调顺序
        const t = this.head.next;
        this.head.next = node;
        node.next = t;
        node.prev = this.head;
        t.prev = node;
  
        this.removeExtra();
    }
  
    Keys(){
        return this.map.keys();
    }
  
    SetMaxItems(size) {
        this.size = size;
        this.removeExtra();
    }
  
    removeExtra() {
        const currentSize = this.size;
        while (this.map.size > currentSize) {
            this.removeOne(this.tail.prev.key);
        }
    }
  
    removeOne(k) {
        const thisNode = this.map.get(k);
        this.map.delete(k);
  
        // 更新链表
        thisNode.prev.next = thisNode.next;
        thisNode.next.prev = thisNode.prev;
    }
  }
  
  class linkNode {
    constructor(k, v) {
        this.value = v;
        this.key = k;
    }
    prev = null;
    next = null;
    value = '';
    key = '';
  }
  
  const c = new Cache(4);
  
  c.Set('A',1);
  c.Set('B',2);
  c.Set('C',3);
  c.Set('D',4);
  c.Set('E',5);
  console.log(c.Keys());
  c.SetMaxItems(3);
  console.log(c.Keys());
  console.log(c.Get('C'));
  console.log(c.Keys());
  c.SetMaxItems(2);
  console.log(c.Keys());