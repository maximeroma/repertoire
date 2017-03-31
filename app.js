$(document).ready(function(){

	
	var annuary = [];
	var count = 0;

	var functionSubmit = function(){
		$("#buttonSubmit").click(function(){
			var contact = { "nom" : $("#idNom").val(),
							"prenom" : $("#idPrenom").val(),
							"age" : $("#idAge").val()
			};

			$("#idNom").val('');
			$("#idPrenom").val('');
			$("#idAge").val('');

			annuary.push(contact);
			//console.log(annuary);
			
			contact = { "nom" : "",
						"prenom" : "",
						"age" : ""
			};
			
			//console.log(contact);
			
			$("tbody").children().remove();
			for( var i = 0; i < annuary.length; i++ ){


				$("#myTable").append("<tr></tr>");
				$("tr").last().append("<th scope='row'>" + (i) + "</th>").append("<td>" + annuary[i]["prenom"] + "</td>").append("<td>" + annuary[i]["nom"] + "</td>").append("<td>" + annuary[i]["age"] + "</td>").append("<button class='btn btn-secondary deleteButton'>X</button>");
				
			};
		});
	}; 
	
	functionSubmit();
	
	var deleteTableRow = function(){
		$("#myTable").delegate(".deleteButton", 'click', function(){
			$(this).parent().remove();
		});
	}; 

	deleteTableRow();

});