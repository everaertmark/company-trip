import {Router} from 'backbone';
/**
 * EventRouter die het navigeren van de evenementen afhandelt
 */
const EventRouter = Router.extend({
	routes:{
		':title': 'titleAction'
	},
    /**
     * @param title
     */
	titleAction: function (title){
		switch(title)
		{
            case "overview":
                App.events.trigger('loadAllTrips', {
                    data: title
                });
                break;
            case "amsterdam":
                App.events.trigger('loadTrips', {
                    data: title
                });
                break;
            case "rotterdam":
                App.events.trigger('loadTrips', {
                    data: title
                });
                break;
            case "brussels":
                App.events.trigger('loadTrips', {
                    data: title
                });
                break;
            case "antwerp":
                App.events.trigger('loadTrips', {
                    data: title
                });
                break;
			case "settings":
				App.events.trigger("renderSettings", {
					data: title
				});
				break;
		}
	}
});

export default EventRouter;