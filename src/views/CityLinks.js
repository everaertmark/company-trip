import {View} from 'backbone';
import EventRouter from '../routers/EventRouter';

/**
 * CityLinks view handelt alle kliks af van de city links.
 */

const CityLinks = View.extend({
	router: null,
	events:{
		'click a': 'clickHandler'
	},
	clickHandler: function (e){
		e.preventDefault();
		let target = e.target;
		let url = target.dataset['val'];
		this.router.navigate(url, {trigger: true, replace: true});
	},
	initialize: function (){
		this.router = new EventRouter();
	}
});

export default CityLinks;