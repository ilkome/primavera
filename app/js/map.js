/* global document, window, $, google */
function init() {
  // styles
  const styles = [
    {
      featureType: 'all',
      elementType: 'labels.text.fill',
      stylers: [
        {
          saturation: 36
        },
        {
          color: '#000000'
        },
        {
          lightness: 40
        }
      ]
    },
    {
      featureType: 'all',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          visibility: 'on'
        },
        {
          color: '#000000'
        },
        {
          lightness: 16
        }
      ]
    },
    {
      featureType: 'all',
      elementType: 'labels.icon',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    },
    {
      featureType: 'administrative',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#000000'
        },
        {
          lightness: 20
        }
      ]
    },
    {
      featureType: 'administrative',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#000000'
        },
        {
          lightness: 17
        },
        {
          weight: 1.2
        }
      ]
    },
    {
      featureType: 'landscape',
      elementType: 'geometry',
      stylers: [
        {
          color: '#000000'
        },
        {
          lightness: 20
        }
      ]
    },
    {
      featureType: 'poi',
      elementType: 'geometry',
      stylers: [
        {
          color: '#000000'
        },
        {
          lightness: 21
        }
      ]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#000000'
        },
        {
          lightness: 17
        }
      ]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#000000'
        },
        {
          lightness: 29
        },
        {
          weight: 0.2
        }
      ]
    },
    {
      featureType: 'road.arterial',
      elementType: 'geometry',
      stylers: [
        {
          color: '#000000'
        },
        {
          lightness: 18
        }
      ]
    },
    {
      featureType: 'road.local',
      elementType: 'geometry',
      stylers: [
        {
          color: '#000000'
        },
        {
          lightness: 16
        }
      ]
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [
        {
          color: '#000000'
        },
        {
          lightness: 19
        }
      ]
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        {
          color: '#f66041'
        },
        {
          lightness: 17
        }
      ]
    }
  ]

  const position = { lat: 55.754130, lng: 37.642903 }
  const icon = 'img/map-marker.png'

  // Options
  const mapOptions = {
    zoom: 13,
    center: position,
    panControl: false,
    zoomControl: true,
    scaleControl: false,
    scrollwheel: false,
    disableDefaultUI: true,
    mapTypeControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: false,
    styles
  }

  const mapElement = document.querySelector('.js-map')

    // Create the Google Map using our element and options defined above
  const map = new google.maps.Map(mapElement, mapOptions)


  const marker = new google.maps.Marker({
    map,
    icon: { url: icon },
    draggable: false,
    position,
    visible: true
  })

  const boxText = document.createElement('div')
  boxText.className = 'js-map-marker'

  boxText.innerHTML = 'Москва, Подкопаевский пер., 7с2'
  const myOptions = {
    alignBottom: false,
    content: boxText,
    disableAutoPan: false,
    maxWidth: 0,
    pixelOffset: new google.maps.Size(5, -30),
    zIndex: null,
    boxStyle: {
      opacity: 1,
      width: 'auto'
    },
    closeBoxMargin: '',
    closeBoxURL: '',
    infoBoxClearance: new google.maps.Size(1, 1),
    isHidden: false,
    pane: 'floatPane',
    enableEventPropagation: false
  }

  // extra library
  const ib = new InfoBox(myOptions)
  ib.open(map, marker)

  google.maps.event.addListener(marker, 'click', function Click() {
    ib.open(map, this)
    const center = new google.maps.LatLng(position)
    // using global variable:
    map.panTo(center)
  })
}

google.maps.event.addDomListener(window, 'load', init)
