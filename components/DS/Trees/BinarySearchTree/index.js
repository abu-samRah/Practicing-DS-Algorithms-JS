class Node{
    constructor(data){
        this.data = data
        this.left= null
        this.right = null
    }
}

class BST{
    constructor(){
        this.root = null
    }

    insert(data){
        const newNode = new Node(data)

        if(!this.root) 
            this.root = newNode
        else 
            this.insertNode(this.root,newNode)
    }

    insertNode(node,newNode){
        if(newNode.data < node.data){
            if(!node.left)
                node.left = newNode
            else
            this.insertNode(node.left,newNode)
        }else{
            if(!node.right)
                node.right = newNode
            else
            this.insertNode(node.right,newNode)
        }
    }

    remove(data){
        this.root = this.removeNode(this.root, data);
    }

    removeNode(node,data){
        if(!node) 
            return null
        
        if(data<node.value){
            node.left= this.removeNode(node.left,data)
            return node
        }

        if(data>node.value){
            node.right = this.removeNode(node.right,data)
            return data
        }

        else{
            if(!node.left && !node.right)
                return null

            if(!node.left){
                node = node.right
                return node
            }
            if(!node.right){
                node = node.left
                return node
            }
            else{
                const minNode = this.findMinNode(node.right)
                node.data = minNode.data
                
                node.right = this.removeNode(node.right,minNode.data)
                return node
            }
        }
           
    }
    
    findMinNode(node){
        if(!node.left){
            return node
        }
        return this.findMinNode(node.left)
    }
}