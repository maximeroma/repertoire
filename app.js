$(document).ready(function(){

	
	var functionContact = function(){		
		
		$("#idContact").on('change', function(){
			var saveContact = $(this).val();	
			console.log(saveContact);	
		});
	};

	functionContact();
	

	var functionPrenom = function(){

		$("#idPrenom").on('change', function(){
			var savePrenom = $(this).val();	
			console.log(savePrenom);	
		});
	};

	functionPrenom();

	var functionNom = function(){

		$("#idNom").on('change', function(){
			var saveNom = $(this).val();	
			console.log(saveNom);	
		});
	};

	functionNom();

	var functionAge = function(){

		$("#idAge").on('change', function(){
			var saveAge = $(this).val();	
			console.log(saveAge);	
		});
	};
	functionAge();

});