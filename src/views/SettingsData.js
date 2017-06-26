import {View} from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import EventsCollection from '../collections/Events';

const SettingsData = View.extend({
    templateCategoryEvents: '',
	events: { 
		'click #submit': 'saveSettings'
	},
	/**
	 * @return {null} init
	 */
	initialize: function(){
		App.events.on('renderSettings', this.renderSettings, this);
		this.settingsTemplate = _.template($("#settingsForm").html());
		this.templateCategoryEvents = _.template($("#template-query-events").html());
        this.templateError = _.template($('#template-error').html());
	},
    renderSettings: function() {
        let eventQuery;

        //if eventQuery exists
        if(localStorage["eventQuery"]){
            eventQuery = localStorage["eventQuery"];
        }
        let data = {query: eventQuery};

        this.$el.html(this.settingsTemplate(data));
    },
    /**
     * @param e
     */
	saveSettings: function(e) {
        e.preventDefault();

        //clear localStorage for future use
        localStorage.clear();

        //find html element
        let query = $('#query');

        //get the value
        localStorage["eventQuery"] = query.val();

        let eventCollection = new EventsCollection();
        eventCollection.fetch({
            success: (collection) => this.loadEventsSuccessHandler(collection),
            error: (collection, response) => this.loadEventsErrorHandler(collection, response),
            data: {
            }
        });
	},
    /**
     * @param collection
     */
    loadEventsSuccessHandler: function (collection)
    {
        let newCollection = new EventsCollection(),
            searchQuery = localStorage["eventQuery"];

        for(let i = 0; i < collection.length; i++) {
            let eventTitle = collection.models[i].get('title').toString().toLowerCase();

            if(eventTitle.includes(searchQuery)) {
                newCollection.add(collection.models[i]);
            }
        }
        this.$el.html(this.templateCategoryEvents({events: newCollection.models}));
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

export default SettingsData;
