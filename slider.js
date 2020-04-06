var number = Math.floor(Math.random()*5)+1;
			
			var timer1 = 0;
			var timer2 = 0;
			
			function setpicture(picturenr)
			{
				clearTimeout(timer1);
				clearTimeout(timer2);
				number = picturenr - 1;
				
				hide();
				setTimeout("changepicture()", 500);
				
			}
			
			function hide()
			{
				$("#slider").fadeOut(500);
			}
		
			function changepicture()
			{
				number++; if (number>5) number=1;
				
				var file = "<img src=\"pictures/picture" + number + ".png\" />";
				
				document.getElementById("slider").innerHTML = file;
				$("#slider").fadeIn(500);
				
				timer1 = setTimeout("changepicture()", 5000);
				timer2 = setTimeout("hide()", 4500);
			
			}