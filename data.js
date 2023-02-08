var APP_DATA = {
  "scenes": [
    {
      "id": "0-unilabs_pv360_entry",
      "name": "UNILABS_PV360_ENTRY",
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
        "yaw": 0.016456636800006308,
        "pitch": 0,
        "fov": 1.0989799328023968
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "1-unilabs_pv360_reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-unilabs_pv360_reception",
      "name": "UNILABS_PV360_Reception",
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
          "yaw": 2.859451109129454,
          "pitch": 0.12011329647965319,
          "rotation": 0,
          "target": "0-unilabs_pv360_entry"
        },
        {
          "yaw": 1.5772217208925507,
          "pitch": 0.18254141420991488,
          "rotation": 0,
          "target": "2-unilabs_pv360_waiting_lounge"
        },
        {
          "yaw": 1.05123223244928,
          "pitch": 0.17686618234475837,
          "rotation": 0,
          "target": "3-unilabs_pv360_kids_area"
        },
        {
          "yaw": 0.7725507462667025,
          "pitch": 0.24470379091708594,
          "rotation": 0,
          "target": "4-unilabs_pv360_wainting_area1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-unilabs_pv360_waiting_lounge",
      "name": "UNILABS_PV360_Waiting_Lounge",
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
          "yaw": -1.7830676441324087,
          "pitch": 0.3348881505729917,
          "rotation": 0,
          "target": "3-unilabs_pv360_kids_area"
        },
        {
          "yaw": -2.377994276597766,
          "pitch": 0.2778631868692276,
          "rotation": 0,
          "target": "4-unilabs_pv360_wainting_area1"
        },
        {
          "yaw": -3.1218019601105365,
          "pitch": 0.2053644048806742,
          "rotation": 0,
          "target": "1-unilabs_pv360_reception"
        },
        {
          "yaw": 2.791350918094672,
          "pitch": 0.07058108470170943,
          "rotation": 0,
          "target": "0-unilabs_pv360_entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-unilabs_pv360_kids_area",
      "name": "UNILABS_PV360_Kids_area",
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
          "yaw": -2.7428360042937854,
          "pitch": 0.30031287984858324,
          "rotation": 0,
          "target": "2-unilabs_pv360_waiting_lounge"
        },
        {
          "yaw": -2.228852509597534,
          "pitch": 0.16645388300672082,
          "rotation": 0,
          "target": "1-unilabs_pv360_reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-unilabs_pv360_wainting_area1",
      "name": "UNILABS_PV360_Wainting_Area1",
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
          "yaw": -0.021366212769081017,
          "pitch": 0.09528903426962287,
          "rotation": 0,
          "target": "5-unilabs_pv360_waiting_area2"
        },
        {
          "yaw": -0.210479581089686,
          "pitch": 0.042868834443694936,
          "rotation": 0,
          "target": "13-unilabs_pv360_cardiology_room"
        },
        {
          "yaw": 0.11315869831507719,
          "pitch": 0.049131415706950676,
          "rotation": 0,
          "target": "12-unilabs_pv360_radiology_room"
        },
        {
          "yaw": 1.8960898941955815,
          "pitch": 0.1682261041610289,
          "rotation": 0,
          "target": "6-unilabs_pv360_corridor"
        },
        {
          "yaw": -2.9040663429807605,
          "pitch": 0.281443901445277,
          "rotation": 0,
          "target": "11-unilabs_pv360_staff_relax_room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-unilabs_pv360_waiting_area2",
      "name": "UNILABS_PV360_Waiting_area2",
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
          "yaw": 0.08861932219501156,
          "pitch": 0.0904962024845517,
          "rotation": 0,
          "target": "4-unilabs_pv360_wainting_area1"
        },
        {
          "yaw": 0.21589999779934388,
          "pitch": 0.0296535137639804,
          "rotation": 0,
          "target": "15-unilabs_pv360_staff_kitchen"
        },
        {
          "yaw": -0.08638703115466484,
          "pitch": 0.04255390154461125,
          "rotation": 0,
          "target": "6-unilabs_pv360_corridor"
        },
        {
          "yaw": -1.617258798941977,
          "pitch": 0.0527335883286959,
          "rotation": 0,
          "target": "10-unilabs_pv360_mri_room"
        },
        {
          "yaw": -2.3374946622231327,
          "pitch": 0.24895279238588763,
          "rotation": 0,
          "target": "12-unilabs_pv360_radiology_room"
        },
        {
          "yaw": 2.09645205658856,
          "pitch": 0.16011770944578174,
          "rotation": 0,
          "target": "13-unilabs_pv360_cardiology_room"
        },
        {
          "yaw": 1.7392211066516712,
          "pitch": 0.05118430538561647,
          "rotation": 0,
          "target": "14-unilabs_pv360_recovery_room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-unilabs_pv360_corridor",
      "name": "UNILABS_PV360_Corridor",
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
          "yaw": 0.012371164095499765,
          "pitch": 0.04832113381401726,
          "rotation": 0,
          "target": "9-unilabs_pv360_kids_collection"
        },
        {
          "yaw": 0.3091746307526506,
          "pitch": 0.14468987480486462,
          "rotation": 0,
          "target": "7-unilabs_pv360_blood_collection"
        },
        {
          "yaw": 0.8772700316865389,
          "pitch": 0.32239850563094663,
          "rotation": 0,
          "target": "8-unilabs_pv360_sperm_collection"
        },
        {
          "yaw": -1.7173962947897827,
          "pitch": 0.06145669749677651,
          "rotation": 0,
          "target": "5-unilabs_pv360_waiting_area2"
        },
        {
          "yaw": -2.268855428352092,
          "pitch": 0.39217285743465524,
          "rotation": 0,
          "target": "4-unilabs_pv360_wainting_area1"
        },
        {
          "yaw": -1.8619085668081166,
          "pitch": 0.03719622628512553,
          "rotation": 0,
          "target": "13-unilabs_pv360_cardiology_room"
        },
        {
          "yaw": -1.6131125845825594,
          "pitch": 0.041694964293915504,
          "rotation": 0,
          "target": "12-unilabs_pv360_radiology_room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-unilabs_pv360_blood_collection",
      "name": "UNILABS_PV360_Blood_Collection",
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
          "yaw": -3.1023888562181217,
          "pitch": 0.3257863480203689,
          "rotation": 0,
          "target": "6-unilabs_pv360_corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-unilabs_pv360_sperm_collection",
      "name": "UNILABS_PV360_Sperm_Collection",
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
          "yaw": -2.956779343153613,
          "pitch": 0.3319709415786427,
          "rotation": 0,
          "target": "6-unilabs_pv360_corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-unilabs_pv360_kids_collection",
      "name": "UNILABS_PV360_Kids_Collection",
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
          "yaw": 2.605242299902341,
          "pitch": 0.27169177676306333,
          "rotation": 0,
          "target": "6-unilabs_pv360_corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-unilabs_pv360_mri_room",
      "name": "UNILABS_PV360_MRI_room",
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
          "yaw": -2.1318653348293886,
          "pitch": 0.1815131381175128,
          "rotation": 0,
          "target": "5-unilabs_pv360_waiting_area2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-unilabs_pv360_staff_relax_room",
      "name": "UNILABS_PV360_Staff_Relax_Room",
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
          "yaw": -2.7655856658733295,
          "pitch": 0.06587937274809441,
          "rotation": 0,
          "target": "4-unilabs_pv360_wainting_area1"
        },
        {
          "yaw": -3.0306477846365034,
          "pitch": 0.10605977020892432,
          "rotation": 0,
          "target": "15-unilabs_pv360_staff_kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-unilabs_pv360_radiology_room",
      "name": "UNILABS_PV360_Radiology_room",
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
          "yaw": -2.6765218044337473,
          "pitch": 0.10415376066391602,
          "rotation": 0,
          "target": "5-unilabs_pv360_waiting_area2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-unilabs_pv360_cardiology_room",
      "name": "UNILABS_PV360_Cardiology_room",
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
          "yaw": -2.849000089357064,
          "pitch": 0.11262400189469801,
          "rotation": 0,
          "target": "5-unilabs_pv360_waiting_area2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-unilabs_pv360_recovery_room",
      "name": "UNILABS_PV360_Recovery_Room",
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
          "yaw": 1.9264951259891987,
          "pitch": 0.16398088939774347,
          "rotation": 0,
          "target": "5-unilabs_pv360_waiting_area2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-unilabs_pv360_staff_kitchen",
      "name": "UNILABS_PV360_Staff_Kitchen",
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
          "yaw": 1.0637945438991352,
          "pitch": 0.19252478614701296,
          "rotation": 0,
          "target": "16-unilabs_pv360_staff_room"
        },
        {
          "yaw": -2.667877042199443,
          "pitch": 0.16502963156504435,
          "rotation": 0,
          "target": "11-unilabs_pv360_staff_relax_room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-unilabs_pv360_staff_room",
      "name": "UNILABS_PV360_Staff_Room",
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
          "yaw": -1.615682269517574,
          "pitch": 0.20482167700014742,
          "rotation": 0,
          "target": "15-unilabs_pv360_staff_kitchen"
        },
        {
          "yaw": -1.9357732708439208,
          "pitch": 0.05077748357246392,
          "rotation": 0,
          "target": "11-unilabs_pv360_staff_relax_room"
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
