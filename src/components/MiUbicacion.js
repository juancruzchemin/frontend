import React from 'react';

const MiUbicacion = ( { setCenter, setMarker } ) =>   {
    const findMe = () => {
        if (!navigator.geolocation) {
            alert('El navegador no soporta geolocalizacion');
            return;
        }
         
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const {latitude, longitude} = position.coords;
                if (setCenter) {
                    setCenter(latitude,longitude);
                }
                if (setMarker) {
                    setMarker(longitude, latitude, 'Mi ubicacion', `lat: ${latitude}, lng: ${longitude}`);
                }
            },
            (error) => {
                alert('Error al obtener la ubicacion');
            }
        );
    };
    return(
        <button
        type="button"
        className="btn btn-info"
        onClick={findMe}
        >
            Mi Ubicacion 
        </button>

    );

};

export default MiUbicacion;