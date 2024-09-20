let listaNombresGastos = [];
let listaValoresGastos = []; 

function clickBoton(){
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
    console.log(nombreGasto);
    console.log(valorGasto);

    listaNombresGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);
    console.log(listaNombresGastos);
    console.log(listaValoresGastos);
    //alert('click usuario');
    actualizarListaGasto();
}
function actualizarListaGasto(){
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos')
    let htmlLista = '';
    let totalGasto = 0;
    listaNombresGastos.forEach((elemento,posiscion)=> {
        const valorGasto = listaValoresGastos[posiscion]
        htmlLista += `<li> ${elemento} - USD ${valorGasto}
        <button onclick="Eliminar(${posiscion});">Eliminar Gasto</button>
        </li>`;
        totalGasto += Number(valorGasto); 
        console.log(totalGasto)
    });
    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGasto;
    Limpiar();
    //console.log(totalGasto);
}

function Limpiar(){
    document.getElementById('nombreGasto').value ='';
    document.getElementById('valorGasto').value ='';
}
function Eliminar(posicion){
    listaNombresGastos.splice(posicion,1);
    listaValoresGastos.splice(posicion,1);
    actualizarListaGasto();

}