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

        if(req.status > 200 && req.status < 300){
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