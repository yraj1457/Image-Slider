var el = document.querySelector('#nextimg')

el.addEventListener('click', gonext);

function gonext(){
	
	
	var nxt = document.getElementsByTagName('H2');
	
	
	for (i=0; i<nxt.length-1; i++){
		
		if(nxt[i].style.display === "block"){
			
			nxt[i].style.display = "none";
			nxt[i+1].style.display = "block";
			document.querySelector("#previmg").style.display = "block";
			break;
		}
		
		
	}
	
	
	
	
}






var ee = document.querySelector('#previmg')

ee.addEventListener('click', gopre);

function gopre(){
	
	
	var prev = document.querySelector('.o');
	
	if(prev.style.display === "none"){
		prev.style.display = "block";
		document.querySelector('.t').style.display = "none";
		document.querySelector('.tt').style.display = "none";
		
		
	}
	
	
	
}
	
	
	
	
	
	
	
	
	
