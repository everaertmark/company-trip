import {Model} from 'backbone';

/**
 * Model for every employee in the collection
 */
const Employee = Model.extend({
    url: null,
    defaults: {
        name: '',
        age: '',
        profession: ''
    },
    initialize: function(){
        this.voted = false;
    }
});

export default Employee;