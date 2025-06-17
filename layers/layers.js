ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([29.815225, -25.831212, 31.640952, -24.586628]);
var wms_layers = [];


        var lyr_GoogleRoadMap_0 = new ol.layer.Tile({
            'title': 'Google Road Map',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatelliteMap_1 = new ol.layer.Tile({
            'title': 'Google Satellite Map',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatelliteHybrid_2 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_3 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_site_4 = new ol.format.GeoJSON();
var features_site_4 = format_site_4.readFeatures(json_site_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_site_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_site_4.addFeatures(features_site_4);
var lyr_site_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_site_4, 
                style: style_site_4,
                popuplayertitle: 'site',
                interactive: true,
                title: '<img src="styles/legend/site_4.png" /> site'
            });
var format_site_images_view_5 = new ol.format.GeoJSON();
var features_site_images_view_5 = format_site_images_view_5.readFeatures(json_site_images_view_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_site_images_view_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_site_images_view_5.addFeatures(features_site_images_view_5);
var lyr_site_images_view_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_site_images_view_5, 
                style: style_site_images_view_5,
                popuplayertitle: 'site_images_view',
                interactive: true,
                title: '<img src="styles/legend/site_images_view_5.png" /> site_images_view'
            });
var group_Geoheritage = new ol.layer.Group({
                                layers: [lyr_site_4,lyr_site_images_view_5,],
                                fold: 'open',
                                title: 'Geoheritage'});

lyr_GoogleRoadMap_0.setVisible(true);lyr_GoogleSatelliteMap_1.setVisible(true);lyr_GoogleSatelliteHybrid_2.setVisible(true);lyr_OpenStreetMap_3.setVisible(true);lyr_site_4.setVisible(true);lyr_site_images_view_5.setVisible(true);
var layersList = [lyr_GoogleRoadMap_0,lyr_GoogleSatelliteMap_1,lyr_GoogleSatelliteHybrid_2,lyr_OpenStreetMap_3,group_Geoheritage];
lyr_site_4.set('fieldAliases', {'id': 'id', 'site_type_id': 'Site type', 'sitename': 'Name', 'description': 'Description', 'create_by': 'create_by', 'create_dat': 'create_dat', 'modify_by': 'modify_by', 'modify_dat': 'modify_dat', });
lyr_site_images_view_5.set('fieldAliases', {'id': 'id', 'photo_url': 'Photo/Video:', 'name': 'Image name:', 'description': 'Description:', 'site_id': 'site_id', 'sitename': 'Associated site:', });
lyr_site_4.set('fieldImages', {'id': 'Hidden', 'site_type_id': 'ValueRelation', 'sitename': 'TextEdit', 'description': 'TextEdit', 'create_by': 'Hidden', 'create_dat': 'Hidden', 'modify_by': 'Hidden', 'modify_dat': 'Hidden', });
lyr_site_images_view_5.set('fieldImages', {'id': 'Hidden', 'photo_url': 'ExternalResource', 'name': 'TextEdit', 'description': 'TextEdit', 'site_id': 'Hidden', 'sitename': 'TextEdit', });
lyr_site_4.set('fieldLabels', {'site_type_id': 'no label', 'sitename': 'no label', 'description': 'no label', });
lyr_site_images_view_5.set('fieldLabels', {'photo_url': 'inline label - always visible', 'name': 'inline label - always visible', 'description': 'inline label - always visible', 'sitename': 'inline label - always visible', });
lyr_site_images_view_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});