var simple = (function(module){

	module.dosomething = function(resultObject){
		resultObject.prepend("Time by DC is " + Date() + "<br/>");	
	};

	return module;

}(simple||{}));