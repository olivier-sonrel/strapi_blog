import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";


const Map = ({ status }) => {
    if(status === null){
        return (
            <div>
                <p>
                    no map data
                </p>
            </div>
        )
    }

    return (
        <MapContainer center={[status.lat, status.lng]} zoom={13} scrollWheelZoom={false} style={{height: 400, width: "100%"}}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[status.lat, status.lng]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map