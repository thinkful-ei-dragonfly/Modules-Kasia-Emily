'use strict';

console.log("hello");



/* global cuid */

const store = (function () {
  
  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ]

  let hideCheckedItems =  false; //disable-line no-unused-vars
  let searchTerm =  '';
  let findById = function(id){
    items.find(item => item.id === id);
  }
  
  
  let addItem = function(name) {
    try {
      Item.validateName(itemName);
      items.push(Item.create(itemName))
    }
    catch(e) {
      console.log('can not add item', e.message)
    }
  }
  
  
  let findAndToggleChecked = function(id){
   let foundItem = this.findById(id);
     foundItem.checked = !foundItem.checked
   }
  
   let findAndUpdateName = function(id, newName){
      try{
        Item.validateName(itemName);
        let item = this.findById(id);
        item.name = newName;
      }
      catch(e) {
        console.log('can not update name', e.message);
      }
    }
  
    let findAndDelete = function(id) {
      let index = this.item.findIndex(item => item.id === id);
      this.items.splice(index, 1);
    }
  
  return {
    items: items,
    hideCheckedItems: hideCheckedItems,
    searchTerm: searchTerm,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,

  };
}());


console.log(store);



    