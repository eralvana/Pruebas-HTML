var fecha = new Date();
				var año = fecha.getYear();
				if (año < 1000) año += 1900;
				var diadelasemana = fecha.getDay();
				var dia = new Array(7);
				dia[0]="domingo";
				dia[1]="lunes";
				dia[2]="martes";
				dia[3]="miércoles";
				dia[4]="jueves";
				dia[5]="viernes";
				dia[6]="sabado";
				var mes = fecha.getMonth();
				var nombredelmes = new Array(12);
				nombredelmes[0]="enero";
				nombredelmes[1]="febrero";
				nombredelmes[2]="marzo";
				nombredelmes[3]="abril";
				nombredelmes[4]="mayo";
				nombredelmes[5]="junio";
				nombredelmes[6]="julio";
				nombredelmes[7]="agosto";
				nombredelmes[8]="septiembre";
				nombredelmes[9]="octubre";
				nombredelmes[10]="noviembre";
				nombredelmes[11]="diciembre";
				var diadelmes = fecha.getDate();
				if (diadelmes < 10) diadelmes = "0"+diadelmes;
				var minutos = fecha.getMinutes();
				if (minutos <= 9) minutos = "0"+minutos
				var segundos = fecha.getSeconds();
				if (segundos <= 9) segundos = "0"+ segundos
function reloj(){
	momentoActual = new Date()
	H = momentoActual.getHours()
	if (H <= 9) H = "0" + H
   	M = momentoActual.getMinutes()
   	if (M <= 9) M = "0" + M
   	S = momentoActual.getSeconds()
   	if (S <= 9) S = "0" + S
	horaImprimible = H + ":" + M + ":" + S
	var rel = document.getElementById("reloj")
	rel.innerHTML = horaImprimible
	setTimeout("reloj()",1000) 
}