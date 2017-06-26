import {Collection} from 'backbone';
import Employee from '../models/Employee';

/**
 * Collection of Employees
 *
 * @constructor
 */
const Employees = Collection.extend({
    model: Employee
});

export default Employees;