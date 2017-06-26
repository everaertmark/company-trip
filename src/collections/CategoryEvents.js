import {Collection} from 'backbone';
import Event from '../models/Event';

/**
 * Collection of events by category
 *
 * @constructor
 */
const CategoryEvents = Collection.extend({
    initialize: function() {
        this.url = 'http://api.eventful.com/json/events/search?...&category='+localStorage['eventCategory']+'&app_key=LBw3VkJ82NjHKwGL';
    },
    model: Event,
    url: 'http://api.eventful.com/json/events/search?...&category='+localStorage['eventCategory']+'&app_key=LBw3VkJ82NjHKwGL',
    parse: function (data) {
        return data.events.event;
    }
});

export default CategoryEvents;