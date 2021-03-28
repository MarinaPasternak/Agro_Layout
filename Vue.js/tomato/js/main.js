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
        product:[],
        btnVisible: 0,

    },

  });