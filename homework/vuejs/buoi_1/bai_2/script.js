var list = new Vue({
    el: '#list',
    data: {
        items: [
            {
                name: 'Book',
                price: 5000,
                chose: false
            },
            {
                name: 'Ruler',
                price: 2000,
                chose: false
            },
            {
                name: 'Pen',
                price: 3000,
                chose: false
            },
            {
                name: 'Pencil',
                price: 2000,
                chose: false
            },
            {
                name: 'Eraser',
                price: 1000,
                chose: false
            }
        ],
        choseList: []
    },
    methods: {
        addToChoseList: function(item) {
            item.chose = true;
            this.choseList.push(item);
        },
        removeFromChoseList: function(item) {
            this.choseList.pop(item);
            item.chose = false;
        }
    },
    computed: {
        total: function() {
            let sum = 0;
            for (let i = 0; i < this.choseList.length; i++) {
                sum += this.choseList[i].price;
            }
            return sum;
            // return this.choseList.reduce((x, y) => {
            //     x.price + y.price;
            // })
        }
    }
})