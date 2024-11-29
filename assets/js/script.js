//Criando cliente na PAGAR.ME

const apiKey = window.btoa("APIKEY");

function createCustomer() {

    const data = {
        name: document.getElementById("name").value,
        document: document.getElementById("document").value,
        document_type: document.getElementById("document_type").value,
        type: document.getElementById("type").value,
        birthdate: "10/02/1993"      
    }

    const options = {
        method: 'POST',
        headers: {
          'Access-Control-Allow-Origin': '*',
          accept: 'application/json',
          'content-type': 'application/json',
          authorization: 'Basic ' + apiKey
        },
        body: JSON.stringify(data)
      };
    
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