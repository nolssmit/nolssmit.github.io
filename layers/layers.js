ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([30.154505, -25.831212, 31.301672, -24.586628]);
var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_site_images_view_1 = new ol.format.GeoJSON();
var features_site_images_view_1 = format_site_images_view_1.readFeatures(json_site_images_view_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_site_images_view_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_site_images_view_1.addFeatures(features_site_images_view_1);
var lyr_site_images_view_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_site_images_view_1, 
                style: style_site_images_view_1,
                popuplayertitle: 'site_images_view',
                interactive: true,
                title: '<img src="styles/legend/site_images_view_1.png" /> site_images_view'
            });
var group_Geoheritage = new ol.layer.Group({
                                layers: [lyr_site_images_view_1,],
                                fold: 'open',
                                title: 'Geoheritage'});

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_site_images_view_1.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,group_Geoheritage];
lyr_site_images_view_1.set('fieldAliases', {'id': 'id', 'photo_url': 'Photo/Video:', 'name': 'Image name:', 'description': 'Description:', 'site_id': 'site_id', 'sitename': 'Associated site:', });
lyr_site_images_view_1.set('fieldImages', {'id': 'Hidden', 'photo_url': 'ExternalResource', 'name': 'TextEdit', 'description': 'TextEdit', 'site_id': 'Hidden', 'sitename': 'TextEdit', });
lyr_site_images_view_1.set('fieldLabels', {'photo_url': 'inline label - always visible', 'name': 'inline label - always visible', 'description': 'inline label - always visible', 'sitename': 'inline label - always visible', });
lyr_site_images_view_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});