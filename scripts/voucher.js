

let BuyVouchesArr = JSON.parse(localStorage.getItem('purchase')) || [];

let obj = JSON.parse(localStorage.getItem('user'));
let amt = document.getElementById('wallet_balance').innerText = obj.amount;


let VouchersData = async () =>{

 try{
     let res = await fetch(`https://masai-vouchers-api.herokuapp.com/api/vouchers`)
     let data = await res.json()
     console.log(data[0].vouchers)
     appendData(data[0].vouchers)
 }
 catch(err){
     console.log('err ',err)
 }
}
VouchersData()

let container = document.getElementById('voucher_list');


 function appendData(data){

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

        let buy = document.createElement('button');
        buy.innerText = 'BUY'
        buy.setAttribute('class', 'buy_voucher')
        buy.addEventListener('click',()=>{
            BuyVouchers(elem)
        })

        box.append(img,n,pri, buy)
        container.append(box)

    } ) 
 }

let  BuyVouchers =(elem) =>{

    BuyVouchesArr.push(elem);

    localStorage.setItem('purchase', JSON.stringify( BuyVouchesArr))


}