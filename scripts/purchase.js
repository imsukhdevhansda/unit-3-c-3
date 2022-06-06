

let BuyVouchesArr = JSON.parse(localStorage.getItem('purchase'));

let obj = JSON.parse(localStorage.getItem('user'));
let a =obj.amount
let amt = document.getElementById('wallet_balance');
amt.innerText = a;




let container = document.getElementById('purchased_vouchers');
appendData( BuyVouchesArr)

 function appendData(data){

    console.log(data)
    data.forEach( (elem) =>{
        // console.log(elem.name)
        // console.log(elem.image)
        // console.log(elem.price)

        let box = document.createElement('div');
        box.setAttribute('class','voucher')

        let n = document.createElement('h2');
        n.innerText = elem.name;

        let img = document.createElement('img');
        img.setAttribute('class','VImg')
        img.src = elem.image;

        let pri = document.createElement('h2');
        pri.innerText = elem.price;

        

        box.append(img,n,pri)
        container.append(box)

    } ) 
 }

