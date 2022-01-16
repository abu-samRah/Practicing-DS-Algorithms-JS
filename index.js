import LinkedList from './components/DS/LinkedLists/index.js' 

const linkedList = new LinkedList(1)

linkedList.insert(5)

linkedList.insertAtBeginning(0)
linkedList.insertAfter(1,12)
linkedList.remove(0)
linkedList.pop()


linkedList.insert(80)
linkedList.insert(90)

linkedList.insert(45)
linkedList.insert(34)

linkedList.insert(23)
linkedList.insert(68)
linkedList.sort()
linkedList.print()