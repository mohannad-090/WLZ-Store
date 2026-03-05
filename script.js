var ul2 = document.querySelector('.ul2')
var carttap = document.querySelector('.carttap')
var list = document.querySelector('.list')
var listcards = document.querySelector('.listcards')
var quantity = document.querySelectorAll('.quantity')
var body = document.querySelector('body')
var total = document.querySelector('.total')
function showul2() {
    ul2.style.display = 'flex'
}
function hideul2() {
    ul2.style.display = 'none'
}
function close1() {
    carttap.style.display = 'none'
}
function opencart() {
    carttap.style.display = 'grid'
}
var products = [
    {
    name: 'JACK & JONES',
    lin: '#',
    name2: "mens JORYORK OLLIE KNIT CREW NECK Sweater",
    image: '31WGFX3u0eL_AC_.jpg',
    last: 1500 ,
    price: 1300
    },
    {
    name: 'American Eagle',
    lin: '#',
    name2: "Men Slim Fit Flex Oxford Button-Up Shirt",
    image: '316HM0eqAEL_AC_.jpg',
    last: 2000 ,
    price: 1500
    },
    {
    name: 'Admvng Mens Shirts',
    lin: '#',
    name2: "Button Down Shirts Regular Fit Long Sleeve Casual Plaid Flannel Shirt",
    image: 'Admvng-Mens-Shirts-Button-Down-Shirts-Regular-Fit-Long-Sleeve-Casual-Plaid-Flannel-Shirt-M-3XL_609b1430-f4a1-461c-aa0d-1beac624f2c3e6a64f09ab4c208bc01d56f8e353e0ea-447.jpeg',
    last: 1500 ,
    price: 700
    },
    {
    name: 'Admvng Mens Dress Shirts',
    lin: '#',
    name2: "Casual Solid Button Long Sleeve Turn-down Collar Blouse Shirt",
    image: 'Admvng-Mens-Dress-Shirts-Casual-Solid-Button-Long-Sleeve-Turn-down-Collar-Blouse-Shirt-Sizes-S-4XL_8eb3972d-30d6-491c-aee6-d29c8bfef362311822ffc32be25d63fd44440f638f1d.jpeg',
    last: 1500 ,
    price: 1200
    },
    {
    name: 'JACK & JONES',
    lin: '#',
    name2: "mens JJELOGO SWEAT HOOD 2 COL 25/26 NOOS Hooded Sweatshirt",
    image: '41kLvdZPKEL_AC_.jpg',
    last: 1700 ,
    price: 1500
    },
    {
    name: 'Jack & Jones',
    lin: '#',
    name2: "Men's Plus Size Sprint Puffer Collar Quilted",
    image: '71OqBh6YOpL_AC_UL165_SR165,165_.jpg',
    last: 3000 ,
    price: 2500
    },
    {
    name: 'Pullover Hoodie Sweatshirt',
    lin: '#',
    name2: "Men’s Heavyweight Casual Pullover Hoodie Sweatshirt with Front Pocket",
    image: 'Men-s-Heavyweight-Casual-Pullover-Hoodie-Sweatshirt-with-Front-Pocket-Black-S_04719802-ac68-4692-97a8-51d9e2a86ac4.a94be62177c6c7fe31e07357fa1b2eb5.webp',
    last: 1500 ,
    price: 1100
    },
    {
    name: 'Sweatshirt Hoody Jacket',
    lin: '#',
    name2: "Ramiter Mens Long Sleeve Hoodies Pullover Hooded Jumper Top White",
    image: 'Ramiter-Mens-Long-Sleeve-Hoodies-Sweatshirt-Hoody-Jacket-Pullover-Hooded-Jumper-Top-White-3XL_8f10eea8-78e3-4ed2-94ec-2e6d5d790acc.e2849fd1b6d00caf768f96409b76e7e3.webp',
    last: 2500 ,
    price: 2000
    },
];
var listcardss = [];
function com(){
    products.forEach((value,key)=>{
        var newdiv = document.createElement('div');
        newdiv.classList.add('item')
        newdiv.innerHTML = `
        <img src="images/${value.image}"/>
        <div class="title"><h4>${value.name}</h4></div>
        <div><a href="${value.lin}" class="prg">${value.name2}</a></div>
        <div class="price"><span class="last1">${value.last.toLocaleString()} </span> ${value.price.toLocaleString()}EGP</div>
        <button class="btn2" onclick="addtocard(${key})">Add to Cart</button>
        `
        list.appendChild(newdiv);
    })
}
com()
function addtocard(key){
    if(listcardss[key]==null){
        listcardss[key]=products[key];
        listcardss[key].quantity=1;
    }
    reloadcard()
}
function reloadcard(){
    listcards.innerHTML='';
    var count=0;
    var totalp=0;
    listcardss.forEach((value,key)=>{
        totalp=totalp+(value.quantity*products[key].price);
        count=count+value.quantity;
        if(value!=null){
            var newdiv2=document.createElement('li')
            newdiv2.innerHTML=`
        <div><img src="images/${value.image}"/></div>
        <div>${value.name}</div>
        <div>${value.price.toLocaleString()}</div>
        <div>
        <button onclick="change(${key},${value.quantity-1})">-</button>
        <div class="count">${value.quantity}</div>
        <button onclick="change(${key},${value.quantity+1})">+</button>
        </div>
        `;
        listcards.appendChild(newdiv2);
        }
    })
    total.innerText=totalp.toLocaleString();
    quantity.forEach(el => {
    el.innerText = count;
});
}
function change(key,quantity){
    if(quantity==0){
        delete listcardss[key]
    }else{
        listcardss[key].quantity=quantity;
    }
    reloadcard();
}