class HashTable {
    constructor(capacity){
        this.buckets = Array.from({length: capacity}, () => []);
        this.capacity = 16 || capacity;
        this.size = 0;
    }
}   