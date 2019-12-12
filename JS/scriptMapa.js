

var map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([20.46, 44.79]),
    zoom: 13
  })
});


var layer2 = new ol.layer.Vector({
  source: new ol.source.Vector({
      features: [
          new ol.Feature({
              geometry: new ol.geom.Point(ol.proj.fromLonLat([20.49, 44.78]))
          })
      ]
  })
});
var layer1 = new ol.layer.Vector({
  source: new ol.source.Vector({
      features: [
          new ol.Feature({
              geometry: new ol.geom.Point(ol.proj.fromLonLat([20.47, 44.75]))
              
          })
      ]
  })
});
var layer3 = new ol.layer.Vector({
  source: new ol.source.Vector({
      features: [
          new ol.Feature({
              geometry: new ol.geom.Point(ol.proj.fromLonLat([20.41, 44.76]))
          })
      ]
  })
});
map.addLayer(layer1);
var container = document.getElementById('popup');
 var content = document.getElementById('popup-content');
 var closer = document.getElementById('popup-closer');
 map.addLayer(layer2);
 var container = document.getElementById('popup');
  var content = document.getElementById('popup-content');
  var closer = document.getElementById('popup-closer');
  map.addLayer(layer3);
 var container = document.getElementById('popup');
  var content = document.getElementById('popup-content');
  var closer = document.getElementById('popup-closer');
 var overlay1 = new ol.Overlay({
     element: container,
     autoPan: true,
     autoPanAnimation: {
         duration: 250
     }
 });
 /*----------var overlay2 = new ol.Overlay({
  element: container,
  autoPan: true,
  autoPanAnimation: {
      duration: 250
  }
});
var overlay3 = new ol.Overlay({
  element: container,
  autoPan: true,
  autoPanAnimation: {
      duration: 250
  }
})-------------------------;/*/
 map.addOverlay(overlay1);
 

 closer.onclick = function() {
     overlay1.setPosition(undefined);
     closer.blur();
     return false;
 };

 map.on('singleclick', function (event) {
  if (map.hasFeatureAtPixel(event.pixel) === true) {
      var coordinate = event.coordinate;

      content.innerHTML = '<b>Hello world!</b><br />I am a popup.';
      overlay1.setPosition(coordinate);
  } else {
      overlay1.setPosition(undefined);
      closer.blur();
  }
});

