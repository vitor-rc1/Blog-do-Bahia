function addItemPage(event) {
  event.preventDefault();
  const itemsPage = document.querySelector('.items-page');
  const itemsPageLength = document.querySelectorAll('.item').length;
  // div item
  const divItem = document.createElement('div');
  divItem.className = 'item';
  // item select type
  const labelSelect = document.createElement('label');
  labelSelect.innerText = 'Tipo'
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

  // URL
  const labelURL = document.createElement('label');
  labelURL.htmlFor = `item-URL-${itemsPageLength + 1}`;
  labelURL.innerText = 'URL';
  divItem.appendChild(labelURL);

  const inputURL = document.createElement('input');
  inputURL.name = `item-URL-${itemsPageLength + 1}`;
  inputURL.id = `item-URL-${itemsPageLength + 1}`;
  inputURL.type = 'text';
  divItem.appendChild(inputURL);

  // Width
  const labelWidth = document.createElement('label');
  labelWidth.htmlFor = `item-width-${itemsPageLength + 1}`;
  labelWidth.innerText = 'Largura';
  divItem.appendChild(labelWidth);

  const inputWidth = document.createElement('input');
  inputWidth.name = `item-width-${itemsPageLength + 1}`;
  inputWidth.id = `item-width-${itemsPageLength + 1}`;
  inputWidth.type = 'text';
  inputWidth.className = 'display';
  divItem.appendChild(inputWidth);

  // Height
  const labelHeight = document.createElement('label');
  labelHeight.htmlFor = `item-height-${itemsPageLength + 1}`;
  labelHeight.innerText = 'Altura';
  divItem.appendChild(labelHeight);

  const inputHeight = document.createElement('input');
  inputHeight.name = `item-height-${itemsPageLength + 1}`;
  inputHeight.id = `item-height-${itemsPageLength + 1}`;
  inputHeight.type = 'text';
  inputHeight.className = 'display';
  divItem.appendChild(inputHeight);

  itemsPage.appendChild(divItem)
};

window.onload = () => {
  const addItem = document.querySelector('#add-item')
  addItem.addEventListener('click', addItemPage)
}