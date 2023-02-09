var APP_DATA = {
  "scenes": [
    {
      "id": "0-entry",
      "name": "Entry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.014450311276355876,
          "pitch": 0.11377685634057677,
          "rotation": 0,
          "target": "1-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-reception",
      "name": "Reception",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5845945185045238,
          "pitch": 0.1814854198482312,
          "rotation": 0,
          "target": "2-waiting-lounge"
        },
        {
          "yaw": 1.043820743622737,
          "pitch": 0.1693003610546313,
          "rotation": 0,
          "target": "3-kids-area"
        },
        {
          "yaw": 0.73283114147738,
          "pitch": 0.24360716102319913,
          "rotation": 0,
          "target": "4-waiting-area1"
        },
        {
          "yaw": 2.624793298477127,
          "pitch": 0.16282862254761454,
          "rotation": 0,
          "target": "0-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-waiting-lounge",
      "name": "Waiting Lounge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7804673560206918,
          "pitch": 0.3496551762769631,
          "rotation": 0,
          "target": "3-kids-area"
        },
        {
          "yaw": -2.384003157325761,
          "pitch": 0.2680573874034291,
          "rotation": 0,
          "target": "4-waiting-area1"
        },
        {
          "yaw": -3.1388365138285774,
          "pitch": 0.22352876827873303,
          "rotation": 0,
          "target": "1-reception"
        },
        {
          "yaw": 2.7848212570830118,
          "pitch": 0.06851783198605332,
          "rotation": 0,
          "target": "0-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-kids-area",
      "name": "Kids Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.749698317082421,
          "pitch": 0.27767352069921003,
          "rotation": 0,
          "target": "2-waiting-lounge"
        },
        {
          "yaw": -2.2263268869218518,
          "pitch": 0.2005686417908361,
          "rotation": 0,
          "target": "1-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-waiting-area1",
      "name": "Waiting Area1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.490874459647893,
          "pitch": 0.20105642676868207,
          "rotation": 0,
          "target": "1-reception"
        },
        {
          "yaw": -0.04511704178382914,
          "pitch": 0.09088934735882859,
          "rotation": 0,
          "target": "5-waiting-area2"
        },
        {
          "yaw": -0.2249685565304702,
          "pitch": 0.041589327692848954,
          "rotation": 0,
          "target": "12-cardiology-room"
        },
        {
          "yaw": 0.0959139238557114,
          "pitch": 0.03629773237832623,
          "rotation": 0,
          "target": "11-radiology-room"
        },
        {
          "yaw": 1.8843401070971506,
          "pitch": 0.10498163963392138,
          "rotation": 0,
          "target": "6-corridor"
        },
        {
          "yaw": -2.844658939716995,
          "pitch": 0.16972995147167147,
          "rotation": 0,
          "target": "14-staff-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-waiting-area2",
      "name": "Waiting Area2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.06514080197841565,
          "pitch": 0.0873185941427419,
          "rotation": 0,
          "target": "4-waiting-area1"
        },
        {
          "yaw": -0.08080274024026401,
          "pitch": 0.06157922578869979,
          "rotation": 0,
          "target": "6-corridor"
        },
        {
          "yaw": 0.2137528603674692,
          "pitch": 0.0538045711064683,
          "rotation": 0,
          "target": "14-staff-kitchen"
        },
        {
          "yaw": 1.7370756850600415,
          "pitch": 0.07523423340954061,
          "rotation": 0,
          "target": "13-recovery-room"
        },
        {
          "yaw": 2.1037918696658586,
          "pitch": 0.18171362488280884,
          "rotation": 0,
          "target": "12-cardiology-room"
        },
        {
          "yaw": -2.389921439351429,
          "pitch": 0.21648329177623538,
          "rotation": 0,
          "target": "11-radiology-room"
        },
        {
          "yaw": -1.6443761234670173,
          "pitch": 0.04190197528344619,
          "rotation": 0,
          "target": "10-mri-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-corridor",
      "name": "Corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9112335447857767,
          "pitch": 0.2812323850256071,
          "rotation": 0,
          "target": "8-sperm-collection"
        },
        {
          "yaw": 0.34855113766507273,
          "pitch": 0.12621323734724754,
          "rotation": 0,
          "target": "7-blood-collection"
        },
        {
          "yaw": 0.02292681295747201,
          "pitch": 0.04018228129213419,
          "rotation": 0,
          "target": "9-kids-collection"
        },
        {
          "yaw": -1.720523565337178,
          "pitch": 0.046819097091843176,
          "rotation": 0,
          "target": "5-waiting-area2"
        },
        {
          "yaw": -2.312953848824117,
          "pitch": 0.2993334007202808,
          "rotation": 0,
          "target": "4-waiting-area1"
        },
        {
          "yaw": -1.8432230111463888,
          "pitch": 0.02552235821015003,
          "rotation": 0,
          "target": "12-cardiology-room"
        },
        {
          "yaw": -1.602337748644569,
          "pitch": 0.028485359543246602,
          "rotation": 0,
          "target": "11-radiology-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-blood-collection",
      "name": "Blood Collection",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.138524666487811,
          "pitch": 0.31514141325921585,
          "rotation": 0,
          "target": "6-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-sperm-collection",
      "name": "Sperm Collection",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8801181561054996,
          "pitch": 0.3339459663124291,
          "rotation": 0,
          "target": "6-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-kids-collection",
      "name": "Kids Collection",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.6192613404406213,
          "pitch": 0.25143047157611953,
          "rotation": 0,
          "target": "6-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-mri-room",
      "name": "MRI Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.0829441200711862,
          "pitch": 0.1696189589454562,
          "rotation": 0,
          "target": "5-waiting-area2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-radiology-room",
      "name": "Radiology Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.661716873310896,
          "pitch": 0.092653717948604,
          "rotation": 0,
          "target": "5-waiting-area2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-cardiology-room",
      "name": "Cardiology Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8204674130301868,
          "pitch": 0.09800084140088394,
          "rotation": 0,
          "target": "5-waiting-area2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-recovery-room",
      "name": "Recovery Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.969324152185088,
          "pitch": 0.15409079169896778,
          "rotation": 0,
          "target": "5-waiting-area2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-staff-kitchen",
      "name": "Staff Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1020733837243668,
          "pitch": 0.1444139443300294,
          "rotation": 0,
          "target": "15-staff-room"
        },
        {
          "yaw": -2.6717327568291385,
          "pitch": 0.13685866582675388,
          "rotation": 0,
          "target": "16-staff-relax-room"
        },
        {
          "yaw": -2.86921613811524,
          "pitch": 0.12465978772592834,
          "rotation": 0,
          "target": "4-waiting-area1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-staff-room",
      "name": "Staff Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6586276070916028,
          "pitch": 0.12788843427174612,
          "rotation": 0,
          "target": "14-staff-kitchen"
        },
        {
          "yaw": -1.9239065080768256,
          "pitch": 0.07815751658344183,
          "rotation": 0,
          "target": "16-staff-relax-room"
        },
        {
          "yaw": -2.0235387881945393,
          "pitch": 0.0749161471720825,
          "rotation": 0,
          "target": "4-waiting-area1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-staff-relax-room",
      "name": "Staff Relax Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.7855885608855964,
          "pitch": 0.05524152980291319,
          "rotation": 0,
          "target": "4-waiting-area1"
        },
        {
          "yaw": -3.0477937490196574,
          "pitch": 0.06779608695775075,
          "rotation": 0,
          "target": "14-staff-kitchen"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
