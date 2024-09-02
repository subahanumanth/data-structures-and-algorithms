class TrieStructure {
    links = {};
    flag = false;
}

class Trie {
    root;
    constructor() {
        this.root = new TrieStructure();
    }
    
    insert(word) {
        let node = this.root;
        // console.log(node.links)
        let newNode;
        for (let i = 0; i < word.length; i++) {
            if (!node.links[word[i]]) {
                newNode = new TrieStructure();
                node.links[word[i]] = newNode;
                node = newNode;
            } else {
                node = node.links[word[i]];
            }
        }
        node.flag = true;
    }
    
    search(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            if (!node.links[word[i]]) {
                return false
            } else {
                node = node.links[word[i]];
            }
        }
        
        return node.flag;
    }
    
    startsWith(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            if (!node.links[word[i]]) {
                return false;
            } else {
                node = node.links[word[i]];
            }
        }
        
        return true;
    }
}

const trie = new Trie();
trie.insert('abc');
trie.insert('were');
console.log(trie.search('abc'))
console.log(trie.startsWith('wea'))