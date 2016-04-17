function setupJQUI(){
	$( "#tabs" ).tabs();

	$( "#accordion" ).accordion();

	$( "#birthdate" ).datepicker({
	 	changeYear: true,
		yearRange: "1916:2016"
	});

	userNames = ["reysam", "samuel"];
	$( "#username" ).autocomplete({
	    source: userNames
	});

	$( "#dialog" ).dialog({
		autoOpen: false
	});

	$( "#playDialog" ).dialog({
	  		autoOpen: false
	});

	$( "#musicList" ).sortable();
	$( "#musicList" ).disableSelection();
}

$(document).ready(function(){
	$(setupJQUI);

	$("#formRegister").submit(function(event){
		event.preventDefault();
		var userName = $("#username").val();
		userNames.push(userName);
		$("#username").val("");
		$("#password").val("");
		$("#confirm").val("");
		$("#birthdate").val("");
		$( "#dialog" ).dialog( "open" );
	});

	$("#play").click(function(){
		$("#playDialog").dialog("open");
	})
});