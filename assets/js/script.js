//Criando cliente na PAGAR.ME
const apiKey = window.btoa("");

function createCustomer() {

    const data = {
        name: document.getElementById("name").value,
        document: document.getElementById("document").value,
        document_type: document.getElementById("document_type").value,
        type: document.getElementById("type").value        
    }

    const options = {
        method: "POST",
        headers: {
            accept: "application/json",
            'content-type': "application/json",
            'Access-Control-Allow-Origin': '*',
            authorization: 'Basic c2tfdGVzdF8yYjUxZGY4M2U5ZjA0ZDExODlmNDg0ZDU1OTRhZDFmMTpza190ZXN0XzJiNTFkZjgzZTlmMDRkMTE4OWY0ODRkNTU5NGFkMWYx'
        }, 
        body: JSON.stringify(data)
    }
    
    fetch("https://api.pagar.me/core/v5/customers", options)
        .then((res) => {
            return res.json
        })
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        });
}

document.querySelector("#button").addEventListener("click", (e) => {
    e.preventDefault();
    createCustomer();
});