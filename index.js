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
}   

const myHashTable = new HashTable (10);
console.log(myHashTable.hash("avacado"))
console.log(myHashTable.hash("kiwi"))
console.log(myHashTable.hash("bannana"))
console.log(myHashTable.hash("apple"))