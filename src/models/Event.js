import {Model} from 'backbone';

/**
 * Model for every event in the collection
 *
 * @constructor
 */
const Event = Model.extend({
    amountOfVotes: 0
});

export default Event;