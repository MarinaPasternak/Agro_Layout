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
        product:null,
        btnVisible: 0,

    },
    methods:{
        getProduct: function () {
            if(window.location.hash) {
                let id = window.location.hash.replace('#', '');
                for(let i in this.products) {
                    if(id==this.products[i].id){
                        this.product=this.products[i];
                        this.btnVisible = 1;
                        console.log(this.product);
                    }
                }
               
            }
        },
        addToCart: function(id) {
            let cart = "";
            if(window.localStorage.getItem('cart')) {
                cart = window.localStorage.getItem('cart').split(',');
                this.btnVisible = 0;
            }
            else{
                window.localStorage.setItem('cart', "");
            }
            
            if(cart.indexOf(String(id))==-1) {
                cart.push(id);
                window.localStorage.setItem('cart', cart.join());
                this.btnVisible = 1;
            }
        },
        checkInCart: function(){
            let itemPresent = window.localStorage.getItem('cart').split(',').indexOf(String(this.product.id));
            if(this.product && this.product.id && itemPresent!=-1){
                this.btnVisible = 1;
            }
            else{
                this.btnVisible = 0;
            }
        },
    },
    beforeMount(){
      this.getProduct();
      this.checkInCart();
    },

  });

