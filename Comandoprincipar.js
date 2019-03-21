var i = 0;
var p = 1;
var arreglo = [0] ;
function Guardar(){
  var ima = document.getElementById('Imagen');
  var usur = document.getElementById('Usuario');
  var des = document.getElementById('Descripcion');
  var tiempo = Date();
  var text = "<b>Usuario:"+usur.value+"</b><br><b>Descripcion: "+des.value+"</b><br><b id='tiempo'>Fecha:"+tiempo+"</b><img src='"+ima.value+"' ><br><button type='button' name='Comentario' id='"+i+"' onclick='Comentario("+i+")'>Comentar</button> <div id='comentarios"+i+"'><br><h1>Comentario</h1><br><input type='text' id='comen"+i+"' > <button type='button' name='Comentario' onclick='Guardarcomen("+i+")'>Publicar</button><br></div><br><hr id='marco'><div id='Publicaciones"+p+"'></div>";
if(p<2){
  document.getElementById('Publicaciones').innerHTML = text;
}else {
    document.getElementById('Publicaciones'+(p-1)).innerHTML = text;
  }
  document.getElementById('comentarios'+i).style.display = "none";
arreglo.push(0);

  i++;
p++;
document.getElementById('Descripcion').value ="";
document.getElementById('Imagen').value ="";
document.getElementById('Usuario').value ="";

  console.log(Date());
}
function Comentario(param1){
  if (document.getElementById('comentarios'+param1).style.display=="none") {
document.getElementById('comentarios'+param1).style.display = "inline";
}else{
  document.getElementById('comentarios'+param1).style.display = "none";
}
}
function Guardarcomen(param1){
  var comen = document.getElementById("comen"+param1);
  var newes = document.createElement("p");
  var text = document.createTextNode(comen.value+"    Fecha:"+Date());
  newes.appendChild(text);
  document.getElementById('comentarios'+param1).appendChild(newes);
  document.getElementById("comen"+param1).value ="";
  arreglo[param1]++;
document.getElementById(param1).innerHTML = "Comentarios ("+arreglo[param1]+")";
}
