import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

function ContactMap() {
  return (
    <MapContainer
      center={[23.70731, 90.415482]}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: "80vh" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='<a href="https://www.facebook.com/profile.php?id=61554869056271">Mehedi Hassan Miraj</a>'
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default ContactMap;
