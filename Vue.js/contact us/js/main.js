var app = new Vue({
    el:"#app",
    data:{
        products:[
            {id:1, title:"Appple 1", short_text:'red apple', image:'img/1.jpg', desc:"Full desc"},
            {id:2, title:"Appple 2", short_text:'yellow apple', image:'img/2.jpg', desc:"Full desc"},
            {id:3, title:"Appple 3", short_text:'red and yellow apple', image:'img/3.jpg', desc:"Full desc"},
            {id:4, title:"Appple 4", short_text:'orange apple', image:'img/4.jpg', desc:"Full desc"},
            {id:5, title:"Appple 5", short_text:'small red apple', image:'img/5.jpg', desc:"Full desc"}
        ],
        cart:[],
        contactFields:{
            name:null,
            companyName:null,
            position:null,
            city:null,
            country:null,
            email:null,
            role:null,
            other:null,
            comment:null,
        },
        order:[],
        formShow: 0,
    },
    methods:{
        getCart: function () {
            let localArray = null;
            localArray = String(window.localStorage.getItem('cart')).split(',');
            for(let i=0; i<localArray.length; i++){
                for(let j=0; j<this.products.length; j++){
                    if(localArray[i] == this.products[j].id){
                        this.cart.push(this.products[j]);
                        console.log(this.cart);
                    }
                }
            }

        },

        removeFromCart: function (id) {
            let indexDelItem = 0;
            let localArray = window.localStorage.getItem('cart').split(",");
            
            for (let i in localArray) {
                if(id == localArray){
                    indexDelItem = i;
                }
            }

            localArray.splice(indexDelItem,1);
            window.localStorage.setItem('cart', localArray);

            for (let i in this.cart) {
                if(id == this.cart[i].id){
                    indexDelItem = i;
                }
            }

            this.cart.splice(indexDelItem,1);

        },

        makeOrder: function () {
            this.formShow = 1;
            window.localStorage.setItem('cart', "");
            console.log(this.contactFields);

        }

    },
    mounted(){
      this.getCart();
    },

  });