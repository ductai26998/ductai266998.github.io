var list = new Vue({
    el: '#nav-list',
    data: {
        items: [
            {
                name: 'HOME', 
                actived: false
            },
            {
                name: 'PROJECTS', 
                actived: false
            },
            {
                name: 'SERVICES', 
                actived: false
            },
            {
                name: 'CONTACT', 
                actived: false
            }
        ]
    },
    methods: {
        active: function(item) {
            this.items.map((element) => element.actived = false);
            item.actived = true;
            itemChose.chose = item.name;

        }
    }
})

var itemChose = new Vue({
    el: '#chose',
    data: {
        chose: ""
    }
})


