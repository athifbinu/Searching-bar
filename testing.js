const mylist=document.getElementById('Mylist');

const listChildren=mylist.children;

const banansItem=listChildren[2];
const banansCopy=banansItem.cloneNode(true);

mylist.appendChild(banansCopy);