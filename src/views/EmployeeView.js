import {View} from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Employee from '../models/Employee';

/**
 * View data of a single employee
 */

const EmployeeView = View.extend({
    model: new Employee(),
    el: $('.employees-list'),
    tagName: 'tr',
    initialize: function() {
        console.log('komt hier');
        this.template = _.template($('.employees-list-template').html());
        this.render();
    },
    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});

export default EmployeeView;
