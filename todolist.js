const form = document.querySelector('#textForm');
const input = document.querySelector('input');
const main = document.querySelector('.main');
const ul = document.querySelector('#myUL');

/*
1. create li
*/ 
function createLi() {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = input.value;
    const label = document.createElement('label');
    label.textContent = '';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const editBtn = document.createElement('button');
    editBtn.textContent = 'edit';
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'remove';

    li.appendChild(span);
    li.appendChild(label);
    label.appendChild(checkbox);
    li.appendChild(editBtn);
    li.appendChild(removeBtn);

    return li;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const li = createLi();

 
  if(input.value === '') {
    alert('Enter the name please!!!');
  } 
  else {
    ul.appendChild(li);
    input.value = "";
  }
}); 

/*
2. Add responded class
*/ 
ul.addEventListener('change', (event) => {
  const checkbox = event.target;
  const checked = checkbox.checked;
  const li = checkbox.parentNode.parentNode;
  if(checked) {
    li.className = 'responded';
  } else {
    li.className = '';
  }
});

/*
3. Button actions
*/ 
ul.addEventListener('click', (event) => {
  if(event.target.tagName === 'BUTTON') {
    const button = event.target;
    const li = button.parentNode;
    const ul = li.parentNode;
    if(button.textContent === 'remove') {
      ul.removeChild(li);
    } else if(button.textContent === 'edit') {
      const span = li.firstElementChild;
      const input = document.createElement('input');
      input.type = 'text';
      input.value = span.textContent;
      li.insertBefore(input, span);
      li.removeChild(span);
      button.textContent = 'save';
    } else if(button.textContent === 'save') {
      const input = li.firstElementChild;
      const span = document.createElement('span');
      span.textContent = input.value;
      li.insertBefore(span, input);
      li.removeChild(input);
      button.textContent = 'edit';
    }
  }
});

/*
4. create and append elements
*/ 


document.querySelector('.checkList').onchange = (event) => {

  
  const value1 = document.getElementById("selc");
  //const selList = document.form.selc.value;
  //console.log(value1.options);
  //[wLconsole.log(value1.selectedIndex);
  const value = value1.options[value1.selectedIndex].value;
  
  const lis = ul.children;

  if(value == 'Checked') {
    for(let i=0; i< lis.length; i++) {
      var li = lis[i];

      
      if(li.className === 'responded'){
        li.style.display = '';
      }
      else{
        li.style.display = 'none';
      }

      
    }
  }

  else if(value == 'Unchecked') {
    for(let j= 0; j< lis.length; j++){
      var li = lis[j];

      if(li.className === 'responded'){
        li.style.display = 'none';
      }
      else{
        li.style.display = '';
      }
    }
  }

  else if(value == 'All'){
    for(let k=0; k< lis.length; k++){
      var li = lis[k];
      li.style.display = '';
    }
  }
}


