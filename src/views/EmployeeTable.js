import {View} from 'backbone';
import Employee from '../models/Employee';
import Employees from '../collections/Employees';
import EmployeesView from '../views/EmployeesView';
import EventRouter from '../routers/EventRouter';
import $ from 'jquery';

/**
 * EmployeeTable view handelt alle kliks af van de employee-table.
 */

const EmployeeTable = View.extend({
    router: null,
    employees: new Employees(),
    events:{
        'click .add-employee': 'clickHandler'
    },
    clickHandler: function (e){
        e.preventDefault();

        //local variables
        let name = $('.name-input'),
            age = $('.age-input'),
            profession = $('.profession-input');

        //create new employee model
        let employee = new Employee({
            name: name.val(),
            age: age.val(),
            profession: profession.val()
        });

        //empty variables for future use
        name.val('');
        age.val('');
        profession.val('');

        //add employee to employees collection
        this.employees.add(employee);

        //create new employeesView
        new EmployeesView({
            employeeCollection: this.employees
        });
    },
    initialize: function (){
        this.router = new EventRouter();
        this.employees = new Employees();
    }
});

export default EmployeeTable;