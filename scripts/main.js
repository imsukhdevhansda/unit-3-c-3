
// let UserDataArr = JSON.parse(localStorage.getItem('user')) || [];

let UserData = () =>{
    event.preventDefault();
    console.log('funn')

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let address = document.getElementById('address').value;
    let amount = document.getElementById('amount').value;
    
    let obj = {
        name,
        email,
        address,
        amount,

    }
    localStorage.setItem('user', JSON.stringify(obj));

    document.getElementById('name').value = null;
    document.getElementById('email').value = null;
    document.getElementById('address').value = null;
    document.getElementById('amount').value = null;

}