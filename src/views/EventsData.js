import {View} from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import EventCollection from '../collections/Events';

const EventsData = View.extend({
    templateEvents: '',
    templateError: '',

    initialize: function(){
        App.events.on('loadTrips', this.loadEvents, this);
        this.templateEvents = _.template($("#template-events").html());
        this.templateError = _.template($('#template-error').html());
    },
    loadEvents: function(data)
    {
        this.collection.fetch({
            success: (collection) => this.loadEventsSuccessHandler(collection, data),
            error: (collection, response) => this.loadEventsErrorHandler(collection, response),
            data: {
            }
        });
    },
    /**
     * Success Handler will add HTML of events to this $el
     *
     * @param collection
     * @param data
     */
    loadEventsSuccessHandler: function (collection, data)
    {
        let newCollection = new EventCollection(),
            cityData = data.data.toString();

        for(let i = 0; i < collection.length; i++) {
            let cityName = collection.models[i].get('city_name').toString().toLowerCase();

            if(cityName === cityData) {
                newCollection.add(collection.models[i]);
            }
        }

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

export default EventsData;
