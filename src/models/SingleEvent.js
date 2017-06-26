import {Model} from 'backbone';

/**
 * Model for every single event in the collection
 *
 * @constructor
 */
const SingleEvent = Model.extend({
    initialize: function() {
        this.url = 'http://api.eventful.com/rest/events/get?...&'+localStorage['id']+'&app_key=LBw3VkJ82NjHKwGL'
    },
    url: 'http://api.eventful.com/rest/events/get?...&'+localStorage['id']+'&app_key=LBw3VkJ82NjHKwGL',
    amountOfVotes: 0
});

export default SingleEvent;