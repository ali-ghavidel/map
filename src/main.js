import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './style.css';

const map = new maplibregl.Map({
  container: 'map',
  style: '/style.json',
  center: [59.611196, 36.283337],
  zoom: 15.43,
  minZoom: 6
});