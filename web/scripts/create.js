function addItemPage(event) {
  event.preventDefault();
  const itemsPage = document.querySelector('.items-page');
  const itemsPageLength = document.querySelectorAll('.item').length;
  const divItem = document.createElement('div');
  divItem.className = 'item';

  const labelSelect = document.createElement('label');
  labelSelect.htmlFor = `item-${itemsPageLength + 1}`;
  divItem.appendChild(labelSelect);

  const selectTypeItem = document.createElement('select');
  selectTypeItem.name = `item-${itemsPageLength + 1}`;
  selectTypeItem.id = `item-${itemsPageLength + 1}`;

  const arrayTypes = ['audio', 'image', 'page', 'text', 'video'];
  for (let index = 0; index < arrayTypes.length; index += 1) {
    const optionType = document.createElement('option');
    optionType.value = arrayTypes[index];
    optionType.innerText = arrayTypes[index];
    selectTypeItem.appendChild(optionType);
  }
  divItem.appendChild(selectTypeItem);

  const labelURL = document.createElement('label');
  labelURL.htmlFor = `item-URL-${itemsPageLength + 1}`;
  divItem.appendChild(labelURL);

  //input URL


  itemsPage.appendChild(divItem)
};

window.onload = () => {
  const addItem = document.querySelector('#add-item')
  addItem.addEventListener('click', addItemPage)
}