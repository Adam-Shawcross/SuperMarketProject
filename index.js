
function getAllProducts() {
    var json;
    var xhr = new XMLHttpRequest();
    var url = "http://34.89.0.54:9000/products";
    xhr.open("GET", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            json = JSON.parse(xhr.responseText);
            console.log(xhr.responseText)
            console.log(json);
            
    
        for(let i=0;i<json.length;i++){
            let temp = json[i];
            newTableEntries(productTable,temp["id"],temp["cost"],temp["stock"], temp["category"], temp["description"],temp["productName"]);
        }
    }
    }

    xhr.send();
    return false;
}

const productTable = document.getElementById("product-table");



async function newTableEntries(table){
   row = document.createElement("tr");
   for( let i =1; i <arguments.length;i++){
       box = document.createElement("td");
       box.innerHTML = arguments[i];
       row.appendChild(box);
   }
   table.appendChild(row);
}

function submitHandler(form){

    let fields = {};
    for (element of form.elements)
    {
        fields[element.id] = element.value; 
    }

    const url = "http://34.89.0.54:9000/products"
    const req = new XMLHttpRequest();

    req.open("POST", url);
    req.onload = () => {

        if(req.status >= 200 && req.status < 300){
            console.log("success!!")
        }
        else{
            console.log("failure!!")
            console.log(req.status);
        }

        
    }
    req.setRequestHeader("Content-Type", "application/json");

    req.send(JSON.stringify(fields));
    
    return false;

}

function deleteProduct(){

    var id = document.getElementById("id").value
    var xhr = new XMLHttpRequest();
    var url = "http://34.89.0.54:9000/products/";
    xhr.open("DELETE", url+id, true);
    //xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = () => {

    
    }
    xhr.send(null);
    return false;
}