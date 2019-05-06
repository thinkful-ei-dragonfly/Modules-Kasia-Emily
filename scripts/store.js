/* global cuid, Item */

'use strict';

console.log("hello");





const store = (function () {

  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ]

  let hideCheckedItems = false; //disable-line no-unused-vars
  let searchTerm = '';
  const findById = function (id) {
    return items.find(item => item.id === id);

  }


  let addItem = function (name) {
    try {
      Item.validateName(name);
      items.push(Item.create(name));
     
    }
    catch (e) {
      console.log('can not add item', e.message);
    }
  };


  let findAndToggleChecked = function (id) {
    let foundItem = this.findById(id);
    console.log(foundItem);
    foundItem.checked = !foundItem.checked;
  };

  let findAndUpdateName = function (id, newName) {
    try {
      Item.validateName(newName);
      let item = this.findById(id);
      item.name = newName;
    }
    catch (e) {
      console.log('can not update name', e.message);
    }
  };

  let findAndDelete = function (id) {
    let index = this.items.findIndex(item => item.id === id);
    this.items.splice(index, 1);
  };

  let toggleCheckedFilter = function() {
    this.hideCheckedItems = !this.hideCheckedItems;

  };

  let setSearchTerm = function(val) {
    this.searchTerm = (val);

  };




  return {
    items: items,
    hideCheckedItems: hideCheckedItems,
    searchTerm: searchTerm,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter,
    setSearchTerm,

  };
}());


console.log(store);



