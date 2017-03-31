$(document).ready(function(){
	
	var jqObj;
	var annuary = [];

	$("#myTable").delegate('thead', 'click', function(){
		$("tbody").children().remove();
		for( var i = 0; i < annuary.length; i++ ){
			$("#myTable").append("<tr></tr>");			
			jqObj = $("tr").last().append("<td>" + i + "</td>")
									.append("<td>" + annuary[i]["prenom"] + "</td>")
									.append("<td>" + annuary[i]["nom"] + "</td>")
									.append("<td>" + annuary[i]["age"] + "</td>")
									.append("<button class='btn btn-secondary deleteButton'>X</button>");
			jqObj.data('ID', i);
			console.log(jqObj.data('ID', i));
		};
		$("#myTable").tablesorter({theme : 'bootstrap_3'}).trigger("update");
    }); 
	
	

	

	var functionSubmit = function(){
		$("#buttonSubmit").click(function(){
			var contact = { "nom" : 	$("#idNom").val(),
							"prenom" : 	$("#idPrenom").val(),
							"age" : 	$("#idAge").val()
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
				var jqObj = $("tr").last().append("<th scope='row'>" + i + "</th>")
											.append("<td>" + annuary[i]["prenom"] + "</td>")
											.append("<td>" + annuary[i]["nom"] + "</td>")
											.append("<td>" + annuary[i]["age"] + "</td>")
											.append("<button class='btn btn-secondary deleteButton'>X</button>");
				jqObj.data('ID', i);
				//console.log(jqObj.data())
			};
		});
	}; 
	
	functionSubmit();
	
	var deleteTableRow = function(){
		$("#myTable").delegate(".deleteButton", 'click', function(){
			//console.log($(this).parent().data('ID'));
			annuary.splice('ID',1);
			//console.log(annuary);
			$(this).parent().remove();
			$("tbody").children().remove();
			for( var i = 0; i < annuary.length; i++ ){
				$("#myTable").append("<tr></tr>");
				var jqObj = $("tr").last().append("<th scope='row'>" + i + "</th>")
											.append("<td>" + annuary[i]["prenom"] + "</td>")
											.append("<td>" + annuary[i]["nom"] + "</td>")
											.append("<td>" + annuary[i]["age"] + "</td>")
											.append("<button class='btn btn-secondary deleteButton'>X</button>");
				jqObj.data('ID', i);
				//console.log(jqObj.data())
			};
			
		});
	}; 

	deleteTableRow();

});