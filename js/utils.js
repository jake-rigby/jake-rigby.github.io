function utils(){

	this.days = new Array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday');
	this.months = new Array('January','February','March','April','May','June','July','August','September','October','November','December');
}

utils.prototype.formatDisplayDate = function(utcms){
	var d = new Date(utcms);
	return d.getHours()+':'+d.getMinutes()+' '+this.days[d.getDay()]+' '+this.months[d.getMonth()]+' '+d.getFullYear();
}

if (typeof define === "function" && define.amd) {
		define(function(){ return utils;} );
}
