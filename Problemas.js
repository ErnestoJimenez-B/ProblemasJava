function ValidarNumero(e){
    var Keyboard = (Document.all)?e.keyCode:e.which;
    if(Keyboard == 8) return true;
    var Pattern = /[0-9\d .]/;
    var Trial = String.fromCharCode(Keyboard);
    return Pattern.test(Trial)
}
/* 1*/
function Interest(){
    var valor = Document.formulario.cantidad.value;
    var meses = Document.formulario.meses.value;
    var resultado = parseInt(valor);
    var resultadoMeses = parseInt(meses);
    var interes = resultado*0.02*resultadoMeses;
    var total = resultado + interes;
    Document.formulario.sueldoti.value="$"+total;
}
function Delete(){
    Document.formulario.cantidad.value="";
    Document.formulario.sueldoti.value="";
    Document.formulario.meses.value="";    
}
/*2*/
function (){
    var base = parseInt(Document.problema2.sueldo_base.value);
    var comision = base*10;
    var resultado = base + (comision * 3);
    Document.problema2.resultado2.value = "$" + resultado;
}
function Delete2(){
    Document.problema2.sueldo_base.value = "";
    Document.problema2.resultado2.value = "$";
}
/*3*/
function Discount(){
    var precio = parseInt(Document.problema3.precio.value);
    var descuento = precio * .15;
    var resultado =  precio - descuento;
    Document.problema3.resultado3.value = "$" + resultado;
}
function Delete3(){
    Document.problema3.resultado3.value = "$";
    Document.problema3.precio.value = "";
}
/*4*/
function Grades(){
    var cal1 = parseInt(Document.problema4.cal1.value);
    var cal2 = parseInt(Document.problema4.cal2.value);
    var cal3 = parseInt(Document.problema4.cal3.value);
    var examen = parseInt(Document.problema4.examen.value);
    var trabajo = parseInt(Document.problema4.trabajo.value);    
   var sumaCalif = cal1 + cal2 + cal3;
    var porcentajeCalif = sumaCalif * 55 / 30;
    var porcentajeExamen = examen * 30 / 10;
    var porcentajeTrabajo = trabajo * 15 / 10;
    var promedio = porcentajeCalif + porcentajeExamen + porcentajeTrabajo;
    if (cal1 > 10 || cal2 > 10 || cal3 > 10 || examen > 10 || trabajo > 10){
        alert("La calificación máxima es 10.");        
        return borrar4();
    }
    document.problema4.resultado4.value = "%" + promedio;
}
function Delete4(){
    Document.problema4.cal1.value = "";
    Document.problema4.cal2.value = "";
    Document.problema4.cal3.value = "";
    Document.problema4.examen.value = "";
    Document.problema4.trabajo.value = "";
    Document.problema4.resultado4.value = "%";
}
/*5*/
function Gender(){
    var hombres = parseInt(Document.problema5.hombres.value);
    var mujeres = parseInt(Document.problema5.mujeres.value);
    var suma = mujeres + hombres;
    var porcentajeHombres = hombres * 100 / suma;
    var porcentajeMujeres = mujeres * 100 / suma;
    Document.problema5.resultadoMujeres.value = "Mujeres: %" + parseInt(porcentajeMujeres);
    Document.problema5.resultadoHombres.value = "Hombres: %" + parseInt(porcentajeHombres);
}
function Delete5(){
    Document.problema5.hombres.value = "";
    Document.problema5.mujeres.value = "";
    Document.problema5.resultadoHombres.value = "";
    Document.problema5.resultadoMujeres.value = "";
}
/*6*/
function Date(){
    var fecha = new Date();
    var dia = fecha.getDate;
    var mes = fecha.getMonth;
    var año = fecha.getFullYear;
}
function ValidateDate(e){   
    var teclado = (Document.all)?e.keyCode:e.which;
    if(teclado == 8) return true;
    var patron = /\d+-\d{2}-\d{4}/g;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}
/*7*/
function Numbers7(){
    var num1 = parseInt(Document.problema7.numero1.value);
    var num2 = parseInt(Document.problema7.numero2.value);
    if (num1 == num2){
       var resultado = num1 * num2;
       Document.problema7.resultado7.value = "Multiplicacion: " + resultado; 
    }   else{
        if (num1 > num2){
            var resultado = num1 - num2;
            Document.problema7.resultado7.value = "Resta: " + resultado; 
        }   else{
            var resultado = num1 + num2;
            Document.problema7.resultado7.value = "Suma: " + resultado; 
        }
    }
}
/*8*/
function Numbers8(){
    var num1 = parseInt(document.problema8.numero1.value);
    var num2 = parseInt(document.problema8.numero2.value);
    var num3 = parseInt(document.problema8.numero3.value);

    if (num1 > num2 && num1 > num3){
        var resultado = num1;
        Document.problema8.resultado.value = " 1: " + resultado;
    }   else{
        if (num2 > num1 && num2 > num3){
            var resultado = num2;
            Document.problema8.resultado.value = " 2: " + resultado;
        }   else{
            var resultado = num3;
            Document.problema8.resultado.value = " 3: " + resultado;
        }
    }
}
/*9*/
function Function9(){
    var horas = parseInt(Document.problema9.horas.value);
    if (horas == 0){
        alert("Ingrese una hora válida.")
        Document.problema9.horas.value = "";
    }   else{
        if (horas < 40){
            var dinero = horas * 300;
            Document.problema9.resultado9.value = "$" + dinero;
        }   else{
            if (horas > 40 && horas <= 48){
                var horasExtra = horas - 40;
                var dinero = (horasExtra * 600) + 12000;
                Document.problema9.resultado9.value = "$" + dinero;
            }   else{
                if (horas > 48){
                    var horasExtra = horas - 48;
                    dinero = 16800 + (horasExtra * 900);
                    Document.problema9.resultado9.value = "$" + dinero;
                }
            }
        }
    }
}
