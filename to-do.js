let i=0;
let placeHolder= "";
const txt = "Game Night with friends at 9pm.";
const speed=120;

function type(){
        placeHolder += txt.charAt(i);
    document.getElementById("input-area").setAttribute("placeholder",placeHolder);
    i++;
    setTimeout(type,speed);
}
// clearInterval(interval);
type();
var add = document.getElementById("submit");
var input= document.getElementById("input-area");
var toDo = document.getElementById("todo-list");
add.addEventListener("click",addItem);
input.addEventListener('keypress',function(e){
    if(e.key=="Enter"){
        addItem();
    }
});
function addItem(e){
    const itemValue= input.value;
    input.value="";
    const item= document.createElement('div');
    item.classList.add('item');
    // item.setAttribute('id','todo-list');
    // const item = document.createElement('div');
    // item.classList.add('item');
    const item_content = document.createElement('div');
    item_content.classList.add('content');
    item.appendChild(item_content);
    
    const input_item= document.createElement('input');
    input_item.classList.add('text','card-body');
    input_item.setAttribute('id','input-List');
    input_item.type = 'text';
    input_item.value = itemValue;
    input_item.setAttribute('readonly', 'readonly');
    input_item.addEventListener('dblclick', function(){
        input_item.style.textDecoration = "line-through 0.2rem black";
    });
    input_item.addEventListener('click', function(){
        input_item.style.textDecoration= "none";
        });
        item_content.appendChild(input_item);
    const edit_item =document.createElement('button');
    edit_item.classList.add('edit','list-only');
    edit_item.type='button';
    edit_item.innerHTML='<i class="fa-regular fa-pen-to-square"></i>';

    const delete_item =document.createElement('button');
    delete_item.classList.add('delete','list-only');
    delete_item.type='button';
    delete_item.innerHTML='<i class="fa-sharp fa-solid fa-trash"></i>';

    item_content.appendChild(delete_item);
    item_content.appendChild(edit_item);
    // item.appendChild(input_item);
    // item.appendChild(delete_item);
    // item.appendChild(edit_item);


    toDo.appendChild(item);
    
    edit_item.addEventListener('click', (e) => {
        if (edit_item.innerHTML == '<i class="fa-regular fa-pen-to-square"></i>'){
            edit_item.innerHTML = '<i class="fa-regular fa-floppy-disk"></i>';
            input_item.removeAttribute('readonly');
            input_item.focus();
        }
        else{
            edit_item.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';
            input_item.setAttribute('readonly','readonly');
        }
    });

    delete_item.addEventListener('click', (e)=> {

        toDo.removeChild(item);
            
    });
}