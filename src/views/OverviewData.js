import {View} from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import EventCollection from '../collections/Events';

const OverviewData = View.extend({
    templateEvents: '',
    templateError: '',

    initialize: function(){
        App.events.on('loadAllTrips', this.loadEvents, this);
        this.templateEvents = _.template($("#template-events").html());
        this.templateError = _.template($('#template-error').html());
    },
    loadEvents: function()
    {
        this.collection.fetch({
            success: (collection) => this.loadEventsSuccessHandler(collection),
            error: (collection, response) => this.loadEventsErrorHandler(collection, response),
            data: {
            }
        });
    },
    /**
     * Success Handler will add HTML of events to this $el
     *
     * @param collection
     */
    loadEventsSuccessHandler: function (collection)
    {
        let newCollection = new EventCollection();

        for(let i = 0; i < collection.length; i++) {
            let cityName = collection.models[i].get('city_name').toString().toLowerCase();

            if(cityName === 'amsterdam' || cityName === 'rotterdam' || cityName === 'brussels' || cityName === 'antwerp') {
                newCollection.add(collection.models[i]);
            }
        }

        console.log(newCollection);

        this.$el.html(this.templateEvents({events: newCollection.models}));
    },
    /**
     * On error, show error message in this $el
     *
     * @param collection
     * @param response
     */
    loadEventsErrorHandler: function (collection, response)
    {
        this.$el.html(this.templateError({message: response.responseJSON.error}));
    }
});

export default OverviewData;
