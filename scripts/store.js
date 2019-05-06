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
  
  return {
    items: items,
    hideCheckedItems: hideCheckedItems,
    searchTerm: searchTerm,

  };
}());


console.log(store);


