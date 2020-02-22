 $(document).ready(function(){
	$("#submit").click(function(){
	
	//Recuperiamo tutte le variabili
		var valid = '';
		var isr = ' is required.</p>';
		var name = $("#name").val();
		var mail = $("#mail").val();
		var subject = $("#subject").val();
		var question = $("#question").val();
	//Eseguiamo una serie di controlli
		if (name.length<1) {
			valid += '<p>Valid name'+isr;
		}
		if (!mail.match(/^([a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,4}$)/i)) {
			valid += '<p>Valid E-mail address'+isr;
		}
		if (subject.length<1) {
			valid += '<p>Valid subject entry'+isr;
		}
		if (question.length<1) {
			valid += '<p>Valid request entry'+isr;
		}
		
	//Se i controlli non vengono superati, appare il messaggio di errore.
		if (valid!='') {
			$("#risposta").fadeIn("slow");
			$("#risposta").html("<p><b>ERROR:</b></p>"+valid);
			$("#risposta").css("background-color","#ff0000");
			$("#risposta").css("position","relative");
			$("#risposta").css("padding","10px");
			$("#risposta").css("margin-top","55px");
			$("#risposta").css("width","100%");
			$("#risposta").css("text-align","center");
			$("#risposta").css("clear","both");
			$("#risposta").css("z-index","10");
		}
		//Se i controlli vengono superati, compare un messaggio di invio in corso
		else {
			var datastr ='&name=' + name + '&mail=' + mail + '&subject=' + subject;
			$("#risposta").css("background-color","#F2BA00");
			$("#risposta").css("position","relative");
			$("#risposta").css("padding","10px");
			$("#risposta").css("margin-top","55px");
			$("#risposta").css("width","100%");
			$("#risposta").css("text-align","center");
			$("#risposta").css("clear","both");
			$("#risposta").css("z-index","10");
			$("#risposta").html("<p>Sending your message, please wait...</p>");
			$("#risposta").fadeIn("slow");
			setTimeout("send('"+datastr+"')",2000);
		}
		return false;
	});
});
//Creazione della funzione di invio. Si baserà sul nostro file php "mail.php".
function send(datastr){
	$.ajax({	
		type: "POST",
		url: "../mail.php",
		data: datastr,
		cache: false,
		success: function(html){
		$("#risposta").fadeIn("slow");
		$("#risposta").html(html);
		$("#risposta").css("background-color","#62AD00");
			$("#risposta").css("position","relative");
			$("#risposta").css("padding","10px");
			$("#risposta").css("margin-top","55px");
			$("#risposta").css("width","100%");
			$("#risposta").css("text-align","center");
			$("#risposta").css("clear","both");
			$("#risposta").css("z-index","10");
		setTimeout('$("#risposta").fadeOut("slow")',2000);
	}
	});
}
