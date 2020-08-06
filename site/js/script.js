
console.log("afdfz");
function submit(event){

	console.log("hello");
	var name=document.getElementById("name").value;
	message="<h1>"+name+"</h1>";
	document.getElementById("message").innerHTML=message;
	if(name==='sagar')
	{

		var title=document.querySelector("#title").innerHTML;
		title+=message;
		document.querySelector("#title").innerHTML=title;
	}
	
}


document.addEventListener("DOMContentLoaded",function(event){

document.querySelector("button")
.addEventListener("click",$gloajax.GetData());
	/*function(){
	$ajaxutils.sendGetRequest("name1.json",
		function(res){
			console.log("request"+res);
			var name=res.name;
			document.querySelector("#message")
			.innerHTML=name;

		});

});*/

function onClick(event){
	this.textContent="U poked me!!"

}
	
});


