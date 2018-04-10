//check off stuff
$("ul").on("click", "li",function(){
	$(this).toggleClass("done");
});

//Delete
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//add
$("input[type='text']").keypress(function(event){
	if(event.which == 13){
		let todoText = $(this).val();
		$("ul").append("<li><span><i class='fa fa-trash'></i> </span>"+todoText+"</li>");
		$(this).val("");
	}
});

//hide add button
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle(150);
});