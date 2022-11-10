// TO MAKE THE MAP APPEAR YOU MUST
    // ADD YOUR ACCESS TOKEN FROM
    // https://account.mapbox.com
    mapboxgl.accessToken = 'pk.eyJ1IjoiYXJpYW5rb29jaGFrIiwiYSI6ImNsYWF3ZGEzbTA2eW0zd29hN29oMm4weHoifQ.1xlRXY65ysvordd7qCYPHw';
    mapboxgl.setRTLTextPlugin(
        'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js',
        null,
        true // Lazy load the plugin
    );
    const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [51.3547, 35.7219], // starting position [lng, lat]
    zoom: 10.5, // starting zoom
});
map.on('style.load', () => {
    map.setFog({}); // Set the default atmosphere style
});


const seyedKhandanPopUp = new mapboxgl.Popup({ offset: 25 }).setText(
    'مجتمع فنی شعبه ی سیدخندان'
);
const saadatAbadPopUp = new mapboxgl.Popup({ offset: 25 }).setText(
    'مجتمع فنی شعبه ی سعادت آباد'
);

const ekbatanPopUp = new mapboxgl.Popup({ offset: 25 }).setText(
    'مجتمع فنی شعبه ی اکباتان'
);
const golestanPopUp = new mapboxgl.Popup({ offset: 25 }).setText(
    'مجتمع فنی شعبه ی گلستان'
);
const gheytariyePopUp = new mapboxgl.Popup({ offset: 25 }).setText(
    'مجتمع فنی شعبه ی قیطریه'
);
const gandiPopUp = new mapboxgl.Popup({ offset: 25 }).setText(
    'مجتمع فنی شعبه ی ونک'
);



const seyedKhandan = new mapboxgl.Marker({color : "black"})
    .setLngLat([51.443781852722175, 35.742841911047115])
    .addTo(map)
    .setPopup(seyedKhandanPopUp);


const saadatAbad = new mapboxgl.Marker({ color: "black" })
    .setLngLat([51.37531578540803, 35.78871128220154])
    .addTo(map)
    .setPopup(saadatAbadPopUp);


const ekbatan = new mapboxgl.Marker({ color: "black" })
    .setLngLat([51.30403339862824, 35.70625979659451])
    .addTo(map)
    .setPopup(ekbatanPopUp);

const golestan = new mapboxgl.Marker({ color: "black" })
    .setLngLat([51.23367369174957, 35.756063952192065])
    .addTo(map)
    .setPopup(golestanPopUp);


const gheytariye = new mapboxgl.Marker({ color: "black" })
    .setLngLat([51.4488149, 35.7806978])
    .addTo(map)
    .setPopup(gheytariyePopUp);


const gandi = new mapboxgl.Marker({ color: "black" })
    .setLngLat([51.41093552112579, 35.754984328856175])
    .addTo(map)
    .setPopup(gandiPopUp);