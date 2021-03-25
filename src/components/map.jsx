import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import '../assets/css/style.css'

export const Map = (props) => (
  <MapContainer
    style={{ width: 300, height: 300, marginTop: 80 }}
    center={[47.994983, 37.805518]}
    zoom={16}
    scrollWheelZoom={false}
  >
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    />
    <Marker position={[47.994983, 37.805518]}>
      <Popup>Офис</Popup>
    </Marker>
  </MapContainer>
)
