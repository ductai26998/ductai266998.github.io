var items = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];

display();
document.getElementById("submit").addEventListener("click", add);

document.getElementById("item-name").value = localStorage.getItem("name");
document.getElementById("category").value = localStorage.getItem("category");

var id = localStorage.getItem("id") ? localStorage.getItem("id") : 0;

// add edit and delete event
function addEditAndDeleteEvent(items) {
    for (let i = 0; i < items.length; i++) {
        document.getElementById(`edit-btn-${items[i].id}`).addEventListener("click", () => {
            editItem(items[i].id);
        });
        document.getElementById(`delete-btn-${items[i].id}`).addEventListener("click", () => {
            deleteItem(i);
        });

    }
}

function display() {
    if (items.length) {
        items = JSON.parse(localStorage.getItem("items"));
    }
    let text = `<tr>
                    <th width="30px">#</th>
                    <th width="150px">Name</th>
                    <th width="150px">University</th>
                    <th width="260px">Image</th>
                    <th width="150px">Action</th>
                </tr>`;
    
    if (items.length > 0) {
        for (let i = 0; i < items.length; i++) {
            text += `<tr>
                        <td class="id" width='30px'>${items[i].id}</td>
                        <td width='150px'>
                            <input class="item-name item-name-${items[i].id}" type="text" value="${items[i].name}" disabled="true" >
                            <p class="error" id="error-name-${items[i].id}">Name is invalid!</p>
                        </td>
                        <td width='150px'>
                            <select class="item-category-${items[i].id}" name="category" id="category" disabled="true" >
                                <option value=${items[i].category}>${items[i].category}</option>items[i]
                                <option value="Bach Khoa">Bach Khoa</option>
                                <option value="Kinh Te">Kinh Te</option>
                                <option value="Su Pham">Su Pham</option>
                            </select>
                            <p class="error" id="error-category-${items[i].id}">University is invalid!</p>
                        </td>
                        <td width='260px'>
                            <input class="item-image-${items[i].id}" type="file" name="" id="image-${items[i].id}" onchange="loadFile('image-show-${items[i].id}',event)" hidden="true">
                            <img id="image-show-${items[i].id}" width='100px' height='50px' src="${items[i].image}">
                            <p class="error" id="error-image-${items[i].id}">File is invalid!</p>
                        </td> 
                        <td width='150px'>
                            <button class="edit" id="edit-btn-${items[i].id}">Edit</button> 
                            <button class="save" id="save-btn-${items[i].id}">Save</button>   
                            <button class="delete" id="delete-btn-${items[i].id}">Delete</button>  
                            <button class="cancel" id="cancel-btn-${items[i].id}">Cancel</button>   
                        </td>
                    </tr>`;
            
        }
    }
    document.getElementById("data").innerHTML = text;

    // add edit and delete event
    addEditAndDeleteEvent(items);
}

function add() {
    var name = document.getElementById("item-name").value.trim();
    var category = document.getElementById("category").value;
    var file = document.getElementById("image");

    let error = validate(name, category, file, "", true);
    if (!error) {
        imageURL = file.files[0] ? URL.createObjectURL(file.files[0]) : "";
        id++; 
    
        var item = {
            id: id,
            name: name,
            category: category,
            image: imageURL
        };
    
        items.push(item);
    
        window.localStorage.setItem("id", id);
        window.localStorage.setItem("name", name);
        window.localStorage.setItem("category", category);
        window.localStorage.setItem("image", imageURL);
        window.localStorage.setItem("items", JSON.stringify(items));
    
        display();
    
    }

    
}

function editItem(id) {
    let itemName = document.querySelector(`table .item-name-${id}`);
    let itemCategory = document.querySelector(`table .item-category-${id}`);
    let itemImage = document.querySelector(`table .item-image-${id}`);
    let saveButton = document.getElementById(`save-btn-${id}`);
    let cancelButton = document.getElementById(`cancel-btn-${id}`);

    document.getElementById(`edit-btn-${id}`).style.display = 'none';
    document.getElementById(`delete-btn-${id}`).style.display = 'none';
    saveButton.style.display = "inline-block";
    cancelButton.style.display = "inline-block";

    itemName.style = ` border: solid 1px #000; background-color: rgba(255, 255, 255, 0.597); color: #000;`;
    itemName.disabled = false;
    itemCategory.style = `border: solid 1px #000;`;
    itemCategory.disabled = false;
    itemImage.hidden = false;

    saveButton.addEventListener("click", () => {
        let files = itemImage.files;
        let error = validate(itemName.value, itemCategory.value, itemImage, `-${id}`, false);
        if (!error) {
            let newImageURL = files[0] ? URL.createObjectURL(files[0]) : "";
            items.map((item) => {
                item.name = item.id == id ? itemName.value : item.name;
                item.category = item.id == id ? itemCategory.value : item.category;
                item.image = item.id == id && newImageURL ? newImageURL : item.image;
                return item; 
            })
            window.localStorage.setItem("items", JSON.stringify(items));
            display();
        }
    });

    cancelButton.addEventListener("click", () => {
        display();
    });
    

}

function deleteItem(position) {
    items.splice(position, 1);
    window.localStorage.setItem("items", JSON.stringify(items));
    display();
}

function loadFile(position, event) {
    document.getElementById(position).src = URL.createObjectURL(event.target.files[0]);
}

function validate(name, category, file, position, isAddFunc) {
    let error = false;
    let template = /(.png|.jpeg)$/;
    if (!name || name.length > 10 || /^[0-9]/.test(name)) {
        document.getElementById(`error-name${position}`).style.display = "block";
        error = true;
    }

    if (!category) {
        document.getElementById(`error-category${position}`).style.display = "block";
        error = true;
    }

    if (!isAddFunc) {
        if (!file.value) {
            document.getElementById(`error-image${position}`).style.display = "none";
        } else if (!(template.test(file.value)) || file.files[0].size > 2048000) {
            document.getElementById(`error-image${position}`).style.display = "block";
            error = true;
        }
    } else if (!file.value || !(template.test(file.value)) || file.files[0].size > 2048000) {
        document.getElementById(`error-image${position}`).style.display = "block";
        error = true;
    }

    if (!error) {
        document.getElementById(`error-name${position}`).style.display = "none";
        document.getElementById(`error-category${position}`).style.display = "none";
        document.getElementById(`error-image${position}`).style.display = "none";
    }
    return error;
}