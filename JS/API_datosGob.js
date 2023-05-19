const lista = document.querySelector('#prov')

//consumo de API
const url = 'https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre'
fetch(url)
.then(res => res.json())
.then(data => {
    data.provincias.forEach(usuario => {
       console.log(usuario.nombre)
 
        //datalist
        const dl = document.createElement('option')
        dl.setAttribute('value',`${usuario.nombre}`)
        lista.appendChild(dl)

    });
})
.catch(err => console.log(err))

