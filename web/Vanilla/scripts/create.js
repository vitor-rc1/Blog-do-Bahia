function selectTypeItemPage(event) {
  console.log(event)
  if (event.target.className === 'dirt') return undefined
  const itemsPageLength = document.querySelectorAll('.item').length;
  const parentItem = event.target.parentElement;
  event.target.className = 'dirt';
  // URL
  if (event.target.value === 'text') {
    const labelTextarea = document.createElement('label');
    labelTextarea.htmlFor = `item-textarea-${itemsPageLength + 1}`;
    labelTextarea.innerText = 'Textarea';
    parentItem.appendChild(labelTextarea);

    const inputTextarea = document.createElement('textarea');
    inputTextarea.name = `item-Textarea-${itemsPageLength + 1}`;
    inputTextarea.id = `item-Textarea-${itemsPageLength + 1}`;
    parentItem.appendChild(inputTextarea);
  }
  else {
    const labelURL = document.createElement('label');
    labelURL.htmlFor = `item-URL-${itemsPageLength + 1}`;
    labelURL.innerText = 'URL';
    parentItem.appendChild(labelURL);

    const inputURL = document.createElement('input');
    inputURL.name = `item-URL-${itemsPageLength + 1}`;
    inputURL.id = `item-URL-${itemsPageLength + 1}`;
    inputURL.type = 'text';
    parentItem.appendChild(inputURL);
  }


  // Width
  const labelWidth = document.createElement('label');
  labelWidth.htmlFor = `item-width-${itemsPageLength + 1}`;
  labelWidth.innerText = 'Largura';
  parentItem.appendChild(labelWidth);

  const inputWidth = document.createElement('input');
  inputWidth.name = `item-width-${itemsPageLength + 1}`;
  inputWidth.id = `item-width-${itemsPageLength + 1}`;
  inputWidth.type = 'text';
  inputWidth.className = 'display';
  parentItem.appendChild(inputWidth);

  // Height
  const labelHeight = document.createElement('label');
  labelHeight.htmlFor = `item-height-${itemsPageLength + 1}`;
  labelHeight.innerText = 'Altura';
  parentItem.appendChild(labelHeight);

  const inputHeight = document.createElement('input');
  inputHeight.name = `item-height-${itemsPageLength + 1}`;
  inputHeight.id = `item-height-${itemsPageLength + 1}`;
  inputHeight.type = 'text';
  inputHeight.className = 'display';
  parentItem.appendChild(inputHeight);

  // Remove button
  const removeButton = document.createElement('button')
  removeButton.innerText = 'remover';
  removeButton.className = 'remove-button';
  removeButton.addEventListener('click', (event) => {
    const parent = event.target.parentElement;
    parent.remove();
  })
  parentItem.appendChild(removeButton)
}

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
  selectTypeItem.addEventListener('change', selectTypeItemPage)

  const optionTypeDefault = document.createElement('option');
  optionTypeDefault.innerText = 'selecione';
  optionTypeDefault.selected = 'true';
  optionTypeDefault.disabled = 'true';
  optionTypeDefault.hidden = 'true';
  selectTypeItem.appendChild(optionTypeDefault);

  const arrayTypes = ['audio', 'image', 'page', 'text', 'video'];
  for (let index = 0; index < arrayTypes.length; index += 1) {
    const optionType = document.createElement('option');
    optionType.value = arrayTypes[index];
    optionType.innerText = arrayTypes[index];
    selectTypeItem.appendChild(optionType);
  }
  divItem.appendChild(selectTypeItem);

  itemsPage.appendChild(divItem)
};

function post(event) {
  event.preventDefault();
  console.log(event.submitter.id);

  const cardTextValue = document.querySelector('#card-text').value;
  const cardImgValue = document.querySelector('#card-img').value
  const postTitleValue = document.querySelector('#post-title').value

  if (event.submitter.id === 'preview') {
    const preview = document.querySelector('#preview-post')
    preview.innerHTML = ''

    const card = document.createElement('div');
    card.className = 'post';

    const cardTitle = document.createElement('h3');
    cardTitle.innerText = postTitleValue;
    cardTitle.className = 'postTitle'

    const cardText = document.createElement('p');
    cardText.innerHTML = cardTextValue;
    cardText.className = 'card-text';

    const cardImg = document.createElement('img')
    cardImg.alt = postTitleValue;
    cardImg.src = cardImgValue;
    cardImg.className = 'card-img'

    postTitleValue ? card.appendChild(cardTitle) : undefined;
    cardTextValue ? card.appendChild(cardText) : undefined;
    cardImgValue ? card.appendChild(cardImg) : undefined;

    preview.appendChild(card)


  }
}

window.onload = () => {
  const addItem = document.querySelector('#add-item');
  addItem.addEventListener('click', addItemPage);

  const form = document.querySelector('form');
  form.addEventListener('submit', post);
}