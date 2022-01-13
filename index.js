import LinkedList from './components/DS/LinkedLists/index.js' 

const linkedList = new LinkedList(1)
linkedList.insert(2)
linkedList.insert(3)
linkedList.insertAtBeginning(0)
linkedList.insertAfter(1,12)
linkedList.remove(0)
linkedList.pop()

linkedList.print()