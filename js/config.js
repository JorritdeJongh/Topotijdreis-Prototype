var Config = {
    // Register your app with your own APP ID
    // https://developers.arcgis.com/documentation/core-concepts/security-and-authentication/accessing-arcgis-online-services/
    "APP_ID": "iuO2VsBjOckrCOxY",

    "DOMAIN": "edemo6.esri.nl",

    // DO NOT MODIFY
    "USER_NOT_SIGNED_IN": "User is not signed in.",

    /**************************************************************************
     *
     * Browser window title (text that will show up in the browser bookmarks)
     *
     ***************************************************************************/
    "APP_TITLE": "Topotijdreis: Meer dan 200 jaar topografie",

    /**************************************************************************
     *
     * Application header
     *
     * ************************************************************************/
    /* Header/Banner background color (rgb or hex) */
    "HEADER_HEIGHT": "70px",
    /* Header/Banner background color (rgb or hex) */
    "APP_HEADER_BACKGROUND_COLOR": "#007395",
    /* Header text color */
    "APP_HEADER_TEXT_COLOR": "white",
    /* Header text size */
    "APP_HEADER_TEXT_SIZE": "1.6em",
    /* Header text */
    "APP_HEADER_TEXT": "TOPOTIJDREIS",

    /* Header text color */
    "APP_SUBHEADER_TEXT_COLOR": "white",
    /* Header text size */
    "APP_SUBHEADER_TEXT_SIZE": "0.9em",
    /* Subheader text */
    "APP_SUBHEADER_TEXT": "Meer dan 200 jaar topografie",

    /**************************************************************************
     *
     * Step Messages (1, 2, 3)
     *
     **************************************************************************/
    /* Step 1 */
    "STEP_ONE_MESSAGE": "<span style='font-weight: bold'>Zoek</span> een plaats op de kaart of door te typen <br/> in de zoekbalk hieronder. <span style='font-weight: bold'>Klik</span> vervolgens op de <br/> kaart om de beschikbare historische kaarten <br/> van het geselecteerde gebied weer te geven.",
    "STEP_ONE_HALF_CIRCLE_MSG": "1",
    /* Step 2 */
    "STEP_TWO_MESSAGE": "<span style='font-weight: bold'>Klik</span> op één of meerdere historische kaarten in de <br/> tijdlijn onder de kaart om ze weer te geven. <br/><span style='font-weight: bold'>Kies</span> links in de tijdlijn welke schalen u wel of <br/> niet wilt weergeven in de tijdlijn.",
    "STEP_TWO_HALF_CIRCLE_MSG": "2",
    /* Step 3 */
    "STEP_THREE_MESSAGE": "<span style='font-weight: bold'>Vergelijk</span> de kaarten met de transparantie slider.<br /><span style='font-weight: bold'>Herschik</span> de hiërarchie van de kaarten door ze <br/> boven of onder elkaar te slepen.",
    "STEP_THREE_HALF_CIRCLE_MSG": "3",
    /* Half circle */
    "HALF_CIRCLE_BACKGROUND_COLOR": "#0073958a",
    "HALF_CIRCLE_COLOR": "white",
    "HALF_CIRCLE_OPACITY": "1.0",

    /**************************************************************************
     *
     * Basemap initialization properties
     *
     **************************************************************************/
    /* Default Basemap */
    /*
        The item ID used must be from an item in ArcGIS Online that is of the
        type 'Web Map'

        If working with an item whose basemap layer does not have a geographic
        or Web Mercator spatial reference, you will need to make certain the
        createMap method projects the item's extent using a geometry service
        or by passing in an extent using  options.mapOptions.

        If using a geometry service, it will either create a new GeometryService
        using the  options.geometryServiceURL or it will use the GeometryService
        at esriConfig.defaults.geometryService (if it exists).
    */
    "BASEMAP_WEB_MAP_ID": "198ac0a132d745dd81a6b59730222b02",

    /* Use the LAT and LNG if using a basemap with a Web Mercator projection
    Enable the center: [_lat, _lng] and disable the extent parameter within
    the basemap function in main.js
    "BASEMAP_INIT_LAT": 51.8461371,
    "BASEMAP_INIT_LNG": 5.8647669,

    /* Use the following X and Y if using a basemap in RD_New projection.
    Enable the center: centerpoint and the extent parameters
    within the basemap function in main.js. Disable the center:[_lat,_long} paramter]*/
    "BASEMAP_INIT_X": 212423,
    "BASEMAP_INIT_Y": 454492,

    /*Set the base zoom level at which the basemap loads in*/
    "BASEMAP_INIT_ZOOM": 1,
    /**************************************************************************
     *
     * Map click crosshair
     *
     **************************************************************************/
    "CROSSHAIR_SIZE": 40,
    "CROSSHAIR_FILL_COLOR": [0, 115, 149],
    "CROSSHAIR_OPACITY": 2,

    /**************************************************************************
     *
     * Geocoder Dijit
     *
     **************************************************************************/

     /*
     Use the following lines to specify a custom locator service, its name and its placeholder text. */
    "GEOCODER_URL": "https://services.arcgisonline.nl/arcgis/rest/services/Geocoder_BAG_RD/GeocodeServer/",
    "GEOCODER_NAME": "BAG_RD_NEW",
    "GEOCODER_SINGLE_LINE_FIELD_NAME": "SingleLine",
    "GEOCODER_PLACEHOLDER_TEXT": "Zoek een plaats door hier te typen",

    /*
    /**************************************************************************
     *
     * Timeline Container
     *
     **************************************************************************/
    /* container background color */
    "TIMELINE_CONTAINER_BACKGROUND_COLOR": "rgba(204, 255, 255, 0.2)",
    /* legend header */
    "TIMELINE_LEGEND_HEADER": "Beschikbare schaalniveau's",


        "TIMELINE_LEGEND_VALUES": [
            {
                "label": "100,000+",
                "value": 250000,
                "color": "#03045E",
                "className": "five",
                "lodThreshold": 5
            },
            {
                "label": "50,000 - 100,000",
                "value": 100000,
                "color": "#0077B6",
                "className": "four",
                "lodThreshold": 5
            },
            {
                "label": "25,000 - 50,000",
                "value": 50000,
                "color": "#00B4D8",
                "className": "three",
                "lodThreshold": 5
            },
            {
                "label": "10,000 - 25,000",
                "value": 25000,
                "color": "#90E0EF",
                "className": "two",
                "lodThreshold": 5
            },
            {
                "label": "1 - 10,000",
                "value": 10000,
                "color": "#CAF0F8",
                "className": "one",
                "lodThreshold": 9
            }
        ],

    /* Timeline disabled message (Msg displayed when user zooms too far out) */
    "TIMELINE_DISABLED_MESSAGE": "Zoom verder in om de tijdlijn te activeren",
    "TIMELINE_DISABLED_BACKGROUND_COLOR": "#007395",
    "TIMELINE_DISABLED_COLOR": "white",
    "TIMELINE_DISABLED_BACKGROUND_OPACITY": "0.65",
    "TIMELINE_DISABLED_BACKGROUND_FONT_SIZE": "1.7em",

    /**************************************************************************
     *
     * Timeline parameters
     *
     **************************************************************************/
    /*
     * Timeline style 'box' or 'dot'
     * Specifies the style for the timeline events. Choose from "dot" or "box". Note that the content of the events may
     * contain additional html formatting.
    */
    "TIMELINE_STYLE": "box",
    /* timeline height */
    "TIMELINE_HEIGHT": "240",
    /* */
    "TIMELINE_ZOOM_MIN": 150000000000,
    "TIMELINE_ZOOM_MAX": 5000000000000,
    /* If true, events will be clustered together when zooming out. */
    "TIMELINE_CLUSTER": false,
    /* Enable a navigation menu with buttons to move and zoom the timeline. */
    "TIMELINE_SHOW_NAVIGATION": false,
    /* minimum date onLoad */
    "TIMELINE_MIN_DATE": '1800',
    /* maximum date onLoad */
    "TIMELINE_MAX_DATE": '2050',
    /* steps between labels */
    "TIMELINE_STEP": 10,
    /* When true, events are moved animated when resizing or moving them. This is very pleasing for the eye, but does
     * require more computational power. */
    "TIMELINE_ANIMATE": true,

    /**************************************************************************
     *
     * REST endpoints and URL params
     *
     **************************************************************************/
    /* path to thumbnails on Image Service */
    "INFO_THUMBNAIL": "/info/thumbnail",
    /* TODO Change name/description */
    "IMAGE_SERVER_JSON": "?culture=en&f=json&token=",

    /* Image service */
    "IMAGE_SERVER": "https://edemo6.esri.nl/server/rest/services/Topotijdreis/TTR/ImageServer",
    /* outfields */
    "OUTFIELDS": ['*'],
    /* WHERE clause */
    "IMAGE_SERVER_WHERE": "OBJECTID = ",

    /* A where clause for the query. */
    "QUERY_WHERE":"IsDefault = 1",
    /* The geometry to apply to the spatial filter. (<MAP_POINT> or < > */
    "QUERY_GEOMETRY": "MAP_POINT",

    /* USGS (temporary) */
    "DOWNLOAD_PATH": "https://prd-tnm.s3.amazonaws.com/StagedProducts/Maps/HistoricalTopo/GeoTIFF/",

    /* Attribute Fields */
    /* OBJECTID -- DO NOT modify this field --- */
    "ATTRIBUTE_OBJECTID": "OBJECTID",
    /* Name of map displayed */
    "ATTRIBUTE_MAP_NAME": "NameOnMap",
    /* Date field (UTC format) */
    "ATTRIBUTE_DATE": "YearOnMap",
    /* Scale field */
    "ATTRIBUTE_SCALE": "ScaleOnMap",
    /* Tooltip content */
    "TOOLTIP_CONTENT": "",
    /* Download map link */
    "ATTRIBUTE_DOWNLOAD_LINK": "Dlink",
    /* Map citation <String> or <attribute field> */
    "ATTRIBUTE_CITATION": "Citation",
    /* Map Collection */
    "ATTRIBUTE_COLLECTION": "Collection",
    /* Inventory Number */
    "ATTRIBUTE_INV_NUMBER": "InventNr",
    /* Source link field */
    "ATTRIBUTE_BRON": "Bron",
    /* Source name field */
    "ATTRIBUTE_BRON_URL": "BronUrl",

    /**************************************************************************
     *
     **************************************************************************/
    "MSG_UNKNOWN": "Onbekend",
    "MSG_NO_MAPS": "Geen kaarten beschikbaar voor het geselecteerde punt",

    "EXTENT_EXPAND": 0.60,

    "ZOOM_LEVEL_THRESHOLD": 6,
    "THUMBNAIL_VISIBLE_THRESHOLD": 3,
    "THUMBNAIL_VISIBLE_THRESHOLD_MSG": "Zoom verder in om de kaart weer te geven",

    /**************************************************************************
     *
     * Mouseover/Mouseout graphic styles (FILL and BORDER)
     *
     **************************************************************************/
    /* Timeline item mouseover graphics */
    "TIMELINE_ITEM_MOUSEOVER_GR_FILL":[146, 179, 160, 0.10],
    "TIMELINE_ITEM_MOUSEOVER_GR_BORDER":[48, 75, 60, 1.0],
    /* Sidebar item mouseover graphics */
    "SIDEBAR_MAP_MOUSEOVER_GR_FILL":[146, 179, 160, 0.0],
    "SIDEBAR_MAP_MOUSEOVER_GR_BORDER":[48, 75, 60, 1.75],
    /* */
    "IMAGE_BORDER_WIDTH": 1.75,

    /******** Sharing/Social media icons ********/
    "SHARING_RELATED": "",
    // comma separated list of tags
    "SHARING_HASHTAGS": "Esri, Kadaster, Topotijdreis",

    "MAP_CLICK_HANDLER_ON": true
};
