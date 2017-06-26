import {View} from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import EmployeeView from '../views/EmployeeView';
import Employees from '../collections/Employees';

/**
 * View data of all employees
 */

const EmployeesView = View.extend({
    templateEmployees: '',
    employeeCollection: '',
    model: new Employees(),
    $el: $('.employees-list'),

    initialize: function(options = {}) {
        this.templateEmployees = _.template($('.employees-list-template').html());
        this.employeeCollection = options.employeeCollection;

        this.loadEmployeesSuccessHandler(this.employeeCollection.models);
    },
    /**
     * @param employees
     */
    loadEmployeesSuccessHandler: function(employees)
    {
        console.log(employees);

        for(let i = 0; i < employees.length; i++) {
            new EmployeeView(employees[i]);
        }

        this.$el.html(this.templateEmployees({employees: employees}));
    },
    /**
     * @param collection
     * @param response
     */
    loadEmployeesErrorHandler: function(collection, response)
    {
        this.$el.html(this.templateError({message: response.responseJSON.error}));
    }
});

export default EmployeesView;
