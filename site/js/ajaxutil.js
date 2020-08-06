(function(global){
var ajaxutils={};
function getRequestObject()
{

if(window.XMLHttpRequest){

	return(new XMLHttpRequest());
}
else{
	window.alert("Ajax not supported");return null;

}

}

ajaxutils.sendGetRequest=function(requestUrl,responseHandler,isJsonResponse){
	var request=getRequestObject();
	console.log("requestUrl:"+responseHandler);
	request.onreadystatechange=function(){
		handleResponse(request,responseHandler,isJsonResponse);

	};
	request.open("GET",requestUrl,true);
	request.send(null);

};

function handleResponse(request,responseHandler,isJsonResponse){
	if((request.readyState==4)&&(request.status==200)){
		{
			if(isJsonResponse==undefined)
				{isJsonResponse=true;}
			if(isJsonResponse){

				responseHandler(JSON.parse(request.responseText));
			}
			else
			{

				responseHandler(request.responseText);
			}
		}

	}

}
global.$ajaxutils=ajaxutils;
})(window);