class Parent {}
class maleChild extends Parent {
  son() {
    console.log("hi i am m");
  }
}
class femaleChild extends Parent {
  daughter() {
    console.log("hi i am f");
  }
}

function interactWithAnimal(parent: Parent) {
    console.log('parent', Parent)
  if (parent instanceof maleChild) {
    parent.son(); 
  } else if (parent instanceof femaleChild) {
    parent.daughter(); 
  }
}

const sons = new maleChild();
interactWithAnimal(sons); 