class HashTable {
    constructor(capacity){
        this.buckets = Array.from({length: capacity}, () => []);
        this.capacity = capacity || 16;
        this.size = 0;
    }

    hash(key) {
      let hashCode = 0;
         
      const primeNumber = 31;
      for (let i = 0; i < key.length; i++) {
        hashCode = primeNumber * hashCode + key.charCodeAt(i);
      }
   
      return hashCode % this.capacity;
    }          

    set(key, value) {
      // Step 1: Get the index where this key should go
      const index = this.hash(key)
      
      // Step 2: Get the bucket at that index
      const bucket = this.buckets[index]
      
      // Step 3: Loop through the bucket to check if the key already exists
      for (const pair of bucket) {
              
        // Step 4: If the key exists, update its value and return

        if (pair[0] === key){
          pair[1] = value;
          return;
        }
      }
      // Step 5: If the key doesn’t exist, add it to the bucket
      bucket.push([key, value])

      console.log(this.buckets[index])
      // Step 6: Update the size if needed
      this.size++;
  }
  }   

const myHashTable = new HashTable (10);
myHashTable.set("something", "great")
/* console.log(myHashTable.hash("avacado"))
console.log(myHashTable.hash("kiwi"))
console.log(myHashTable.hash("bannana"))
console.log(myHashTable.hash("apple")) */