import _ from 'underscore';
import {Events} from 'backbone';

import EventsCollection from './collections/Events'
import EventsCategoryCollection from './collections/CategoryEvents'
import EventsData from './views/EventsData';
import OverviewData from './views/OverviewData';

import EmployeesCollection from './collections/Employees'
import EmployeeView from './views/EmployeeView'

import CityLinks from './views/CityLinks';
import EmployeeTable from './views/EmployeeTable';
import SettingsData from './views/SettingsData';

/**
 * @return {null}: Initialiseert alle models en views.
 */
(function ()
{
    let setGlobalVariables = function ()
    {
        window.App = {};
        App.events = _.clone(Events);
    };

    /**
     * Run after dom is ready
     */
    let init = function ()
    {
        setGlobalVariables();
        new CityLinks({el:"#city-links"});
        new SettingsData({el: "#content-area"});
        new EmployeeTable({el: '#employee-container'});

        //All collection instances
        let eventsCollection = new EventsCollection();
        new EventsData({el: "#content-area", collection: eventsCollection});
        new OverviewData({el: "#content-area", collection: eventsCollection});

        // let employeesCollection = new EmployeesCollection();
        // new EmployeeView({el: "#employee-container", collection: employeesCollection});

        Backbone.history.start({pushState: true, root: '/company-trip'}); //Change to your root URL
    };

    window.addEventListener('load', init);
})();