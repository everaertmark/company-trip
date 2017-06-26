import {Collection} from 'backbone';
import Event from '../models/Event';

/**
 * Collection of events
 *
 * @constructor
 */
const Events = Collection.extend({
    model: Event,
    url: 'events.json'
});

export default Events;