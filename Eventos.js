
function Evento ({ valor })
{
   function meuEvento(){
    //document.getElementById("root").append('oi');
    alert("oi");
   }


  return(
    <div>
       <p>Clique para disparar um evento</p>
       <button onClick={meuEvento}> Ativar!</button>
    </div>

  )
}


export default Evento