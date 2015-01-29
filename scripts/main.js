$(document).ready(function()
{
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//Verification for the feedback page. Each verification script is labelled by the button id at the start. All verification right now is limited to making sure that each field is not blank.
	$("#submitButton").click(function()
	{
		if($("#email").val() == "" || $("#fullName").val() == "" || $("#feedback").value == "" )
		{
			alert("Please make sure all fields are filled out.");
		}
		else
		{
			alert("Thanks for the feedback!");
			$("#email").val("");
			$("#fullName").val("");
			$("#feedback").val("");
		}
	})
//Verification for the registration page.
	$("#registrationSubmitButton").click(function()
	{
		if($("#email").val() == "" || $("#firstName").val() == "" || $("#lastName").value == "" || $("#password").value == "" || $("#userName").value == "" )
		{
			alert("Please make sure all fields are filled out.");
		}
		else
		{
			alert("A verification email has been sent. Please check your inbox.");
			$("#email").val("");
			$("#firstName").val("");
			$("#lastName").val("");
			$("#password").val("");
			$("#userName").val("");
		}
	})	
		
		
		
		
		
		
		
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
		
      $("input").keyup(function() //on keypress:
		{  
			if ( $(this).val()=="x" || $(this).val()=="o" || $(this).val()=="X" || $(this).val()=="O" ) //Locks in choice if input is X/x/O/o
			{     
				$(this).css({"color":"red"});  //changes color of element to show that it is locked     
	
				$(this).attr("readonly","readonly");  //prevents user from changing locked inputs
	
				$("#button").html("");         
	 
			
			}       
     
  
            
			else if ( $(this).val()!="x" || $(this).val()!="o" || $(this).val()!="X" ||$(this).val()!="O" ) //Alerts user if input is not X/x/O/o
			{      
 
            
				$("#button").html("Please enter only an X or O");//shows alert to player      
 
           
			}       
 
            
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
			if ( ($(".box1").val() == "x" && $(".box2").val() == "x" && $(".box3").val() == "x") ||$(".box1").val() == "X" && $(".box2").val() == "X" && $(".box3").val() == "X")   
			{  //First X win condition, top row x
		 
				$("#button").text("Player X wins!");    

				$(".box1").css({"background":"pink"}); //Highlights winning boxes    

				$(".box2").css({"background":"pink"}); //Highlights winning boxes     

				$(".box3").css({"background":"pink"}); //Highlights winning boxes

				$("input").attr("readonly","readonly"); //Locks results      

			}	
			if ( ($(".box1").val() == "o" && $(".box2").val() == "o" && $(".box3").val() == "o") ||$(".box1").val() == "O" && $(".box2").val() == "O" && $(".box3").val() == "O")   
			{  //First O win condition, top row O
		 
				$("#button").text("Player O wins!");    

				$(".box1").css({"background":"pink"}); //Highlights winning boxes    

				$(".box2").css({"background":"pink"}); //Highlights winning boxes     

				$(".box3").css({"background":"pink"}); //Highlights winning boxes

				$("input").attr("readonly","readonly"); //Locks results      

			}	
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

			if ( ($(".box4").val() == "x" && $(".box5").val() == "x" && $(".box6").val() == "x") ||$(".box4").val() == "X" && $(".box5").val() == "X" && $(".box6").val() == "X")   
			{  //Second X win condition, second row x
		 
				$("#button").text("Player X wins!");    

				$(".box4").css({"background":"pink"}); //Highlights winning boxes    

				$(".box5").css({"background":"pink"}); //Highlights winning boxes     

				$(".box6").css({"background":"pink"}); //Highlights winning boxes

				$("input").attr("readonly","readonly"); //Locks results      

			}
			if ( ($(".box4").val() == "o" && $(".box5").val() == "o" && $(".box6").val() == "o") ||$(".box4").val() == "O" && $(".box5").val() == "O" && $(".box6").val() == "O")   
			{  //Second O win condition, middle row O
		 
				$("#button").text("Player O wins!");    

				$(".box4").css({"background":"pink"}); //Highlights winning boxes    

				$(".box5").css({"background":"pink"}); //Highlights winning boxes     

				$(".box6").css({"background":"pink"}); //Highlights winning boxes

				$("input").attr("readonly","readonly"); //Locks results      

			}	
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
			if ( ($(".box7").val() == "x" && $(".box8").val() == "x" && $(".box9").val() == "x") ||$(".box7").val() == "X" && $(".box8").val() == "X" && $(".box9").val() == "X")   
			{  //Third X win condition, bottom row x
		 
				$("#button").text("Player X wins!");    

				$(".box7").css({"background":"pink"}); //Highlights winning boxes    

				$(".box8").css({"background":"pink"}); //Highlights winning boxes     

				$(".box9").css({"background":"pink"}); //Highlights winning boxes

				$("input").attr("readonly","readonly"); //Locks results      

			}
			if ( ($(".box7").val() == "o" && $(".box8").val() == "o" && $(".box9").val() == "o") ||$(".box7").val() == "O" && $(".box8").val() == "O" && $(".box9").val() == "O")   
			{  //Third O win condition, bottom row O
		 
				$("#button").text("Player O wins!");    

				$(".box7").css({"background":"pink"}); //Highlights winning boxes    

				$(".box8").css({"background":"pink"}); //Highlights winning boxes     

				$(".box9").css({"background":"pink"}); //Highlights winning boxes

				$("input").attr("readonly","readonly"); //Locks results      

			}	
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
			if ( ($(".box1").val() == "x" && $(".box4").val() == "x" && $(".box7").val() == "x") ||$(".box1").val() == "X" && $(".box4").val() == "X" && $(".box7").val() == "X")   
			{  //Fourth X win condition, first column x
		
				$("#button").text("Player X wins!");    

				$(".box1").css({"background":"pink"}); //Highlights winning boxes    

				$(".box4").css({"background":"pink"}); //Highlights winning boxes     

				$(".box7").css({"background":"pink"}); //Highlights winning boxes

				$("input").attr("readonly","readonly"); //Locks results      

			}
			if ( ($(".box1").val() == "o" && $(".box4").val() == "o" && $(".box7").val() == "o") ||$(".box1").val() == "O" && $(".box4").val() == "O" && $(".box7").val() == "O")   
			{  //Fourth O win condition, first column O
		 
				$("#button").text("Player O wins!");    

				$(".box1").css({"background":"pink"}); //Highlights winning boxes    

				$(".box4").css({"background":"pink"}); //Highlights winning boxes     

				$(".box7").css({"background":"pink"}); //Highlights winning boxes

				$("input").attr("readonly","readonly"); //Locks results      

			}	
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
			if ( ($(".box2").val() == "x" && $(".box5").val() == "x" && $(".box8").val() == "x") ||$(".box2").val() == "X" && $(".box5").val() == "X" && $(".box8").val() == "X")   
			{  //Fifth X win condition, second column x
		 
				$("#button").text("Player X wins!");    

				$(".box2").css({"background":"pink"}); //Highlights winning boxes    

				$(".box5").css({"background":"pink"}); //Highlights winning boxes     

				$(".box8").css({"background":"pink"}); //Highlights winning boxes

				$("input").attr("readonly","readonly"); //Locks results      

			}
			if ( ($(".box2").val() == "o" && $(".box5").val() == "o" && $(".box8").val() == "o") ||$(".box2").val() == "O" && $(".box5").val() == "O" && $(".box8").val() == "O")   
			{  //Fifth O win condition, middle row O
		 
				$("#button").text("Player O wins!");    

				$(".box2").css({"background":"pink"}); //Highlights winning boxes    

				$(".box5").css({"background":"pink"}); //Highlights winning boxes     

				$(".box8").css({"background":"pink"}); //Highlights winning boxes

				$("input").attr("readonly","readonly"); //Locks results      

			}	
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------			
			if ( ($(".box3").val() == "x" && $(".box6").val() == "x" && $(".box9").val() == "x") ||$(".box3").val() == "X" && $(".box6").val() == "X" && $(".box9").val() == "X")   
			{  //Sixth X win condition, third column x
		 
				$("#button").text("Player X wins!");    

				$(".box3").css({"background":"pink"}); //Highlights winning boxes    

				$(".box6").css({"background":"pink"}); //Highlights winning boxes     

				$(".box9").css({"background":"pink"}); //Highlights winning boxes

				$("input").attr("readonly","readonly"); //Locks results      

			}
			
			if ( ($(".box3").val() == "o" && $(".box6").val() == "o" && $(".box9").val() == "o") ||$(".box3").val() == "O" && $(".box6").val() == "O" && $(".box9").val() == "O")   
			{  //Sixth O win condition, last row O
		 
				$("#button").text("Player O wins!");    

				$(".box3").css({"background":"pink"}); //Highlights winning boxes    

				$(".box6").css({"background":"pink"}); //Highlights winning boxes     

				$(".box9").css({"background":"pink"}); //Highlights winning boxes

				$("input").attr("readonly","readonly"); //Locks results      

			}	
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------			
			if ( ($(".box1").val() == "x" && $(".box5").val() == "x" && $(".box9").val() == "x") ||$(".box1").val() == "X" && $(".box5").val() == "X" && $(".box9").val() == "X")   
			{  //Seventh X win condition, diagonal right
		 
				$("#button").text("Player X wins!");    

				$(".box1").css({"background":"pink"}); //Highlights winning boxes    

				$(".box5").css({"background":"pink"}); //Highlights winning boxes     

				$(".box9").css({"background":"pink"}); //Highlights winning boxes

				$("input").attr("readonly","readonly"); //Locks results      

			}
			if ( ($(".box1").val() == "o" && $(".box5").val() == "o" && $(".box9").val() == "o") ||$(".box1").val() == "O" && $(".box5").val() == "O" && $(".box9").val() == "O")   
			{  //Seventh O win condition, Diagonal right
		 
				$("#button").text("Player O wins!");    

				$(".box1").css({"background":"pink"}); //Highlights winning boxes    

				$(".box5").css({"background":"pink"}); //Highlights winning boxes     

				$(".box9").css({"background":"pink"}); //Highlights winning boxes

				$("input").attr("readonly","readonly"); //Locks results      

			}	
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
			if ( ($(".box3").val() == "x" && $(".box5").val() == "x" && $(".box7").val() == "x") ||$(".box3").val() == "X" && $(".box5").val() == "X" && $(".box7").val() == "X")   
			{  //Eighth win condition, diagonal left
		 
				$("#button").text("Player X wins!");    

				$(".box3").css({"background":"pink"}); //Highlights winning boxes    

				$(".box5").css({"background":"pink"}); //Highlights winning boxes     

				$(".box7").css({"background":"pink"}); //Highlights winning boxes

				$("input").attr("readonly","readonly"); //Locks results      

			}
			if ( ($(".box3").val() == "o" && $(".box5").val() == "o" && $(".box7").val() == "o") ||$(".box3").val() == "O" && $(".box5").val() == "O" && $(".box7").val() == "O")   
			{  //Eighth O win condition, Diagonal right
		 
				$("#button").text("Player O wins!");    

				$(".box3").css({"background":"pink"}); //Highlights winning boxes    

				$(".box5").css({"background":"pink"}); //Highlights winning boxes     

				$(".box7").css({"background":"pink"}); //Highlights winning boxes

				$("input").attr("readonly","readonly"); //Locks results      

			}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



            
                 
		});
		$("#reset").click(function() 
		{     
  
		window.location.assign("tictactoe.html");  //refreshes the page
  
		});  


});


