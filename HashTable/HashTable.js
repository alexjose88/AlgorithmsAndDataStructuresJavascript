class HashTable {
    constructor(size = 10) {
        this.keyMap = new Array(size);
    }

    _has(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }

        return total;
    }

    set(key, value) {
        let hash = this._has(key);
        if (!this.keyMap[hash]) {
            this.keyMap[hash] = [];
        }

        for (let i = 0; i < this.keyMap[hash].length; i++) {
            if (this.keyMap[hash][i][0] === key) {
                this.keyMap[hash][i] = [key, value];
                return this.keyMap;
            }
        }

        this.keyMap[hash].push([key, value]);

        return this.keyMap;
    }

    get(key) {
        let hash = this._has(key);
        if (!this.keyMap[hash]) {
            return undefined;
        }

        let subCollection = this.keyMap[hash];

        for (let i = 0; i < subCollection.length; i++) {
            if (subCollection[i][0] === key) {
                return this.keyMap[hash][i][1];
            }
        }

        return undefined;
    }

    keys() {
        let returnKeys = [];

        for (let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if(!returnKeys.includes(this.keyMap[i][j][0])) {
                        returnKeys.push(this.keyMap[i][j][0]);
                    }
                }
            }

        }

        return returnKeys;

    }

    values() {
        let returnValues = [];

        for (let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if(!returnValues.includes(this.keyMap[i][j][1])) {
                        returnValues.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }

        return returnValues;
    }
}

let hashMap = new HashTable()
console.log(hashMap.set("darkblue", "dummy darkblue value"));
console.log(hashMap.set("salmon", "dummy salmon value"));
console.log(hashMap.set("salmon", "dummy salmon value2"));
console.log(hashMap.set("darkblue", "dummy darkblue value2"));
console.log(hashMap.set("other key", "dummy darkblue value2"));

console.log(hashMap.get("salmon"));
console.log(hashMap.get("darkblue"));
console.log(hashMap.get("non existing"));

console.log(hashMap.keys());
console.log(hashMap.values());