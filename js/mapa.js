function cargarMapa(longitud, latitud) {

    coordenadas = {
        lng: longitud,
        lat: latitud
    }

    generarMapa(coordenadas);
}

function generarMapa(coordenadas) {
    let mapa = new google.maps.Map(document.getElementById('mapa'), 
    {
        zoom: 12,
        center: new google.maps.LatLng(coordenadas.lat, coordenadas.lng)
    });

    let marcador = new google.maps.Marker({
        map: mapa,
        draggable: false,
        position: new google.maps.LatLng(coordenadas.lat, coordenadas.lng)
    });

    marcador.addListener('dragend', function(event) {
        document.getElementById('latitud').value = this.getPosition().lat();
        document.getElementById('longitud').value = this.getPosition().lng();
    });
}

function cargarMapa2(longitud, latitud) {

    coordenadas = {
        lng: longitud,
        lat: latitud
    }

    generarMapa2(coordenadas);
}

function generarMapa2(coordenadas) {
    let mapa = new google.maps.Map(document.getElementById('mapa2'), 
    {
        zoom: 12,
        center: new google.maps.LatLng(coordenadas.lat, coordenadas.lng)
    });

    let marcador = new google.maps.Marker({
        map: mapa,
        draggable: false,
        position: new google.maps.LatLng(coordenadas.lat, coordenadas.lng)
    });

    marcador.addListener('dragend', function(event) {
        document.getElementById('latitud').value = this.getPosition().lat();
        document.getElementById('longitud').value = this.getPosition().lng();
    });
}