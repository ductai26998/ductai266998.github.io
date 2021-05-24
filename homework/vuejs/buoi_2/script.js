var content = new Vue({
    el:'.content',
    data: {
        newItem: "",
        editItem: "",
        doneStyle: {
            textDecoration: 'line-through',
            color: 'grey'
        },
        items: []
    },
    methods: {
        submit: function() {
            let existedItem = this.items.find((item) => item.name == this.newItem);
            
            if (!existedItem) {
                this.items.push({name: this.newItem, done: false, editing: false});

            } else {
                alert("Work existed!!!");
            }
        },
        deleteItem: function(item) {
            let index = this.items.findIndex((element) => element.name == item.name);
            this.items.splice(index, 1);
        },
        edit: function(item) {
            item.editing = true;
        },
        update: function(item) {
            item.name = this.editItem;
            item.editing = false;
        },
        cancel: function(item) {
            item.editing = false;
        }
    }
})