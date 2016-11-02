export default {
  "id": 10010,
  "userInterfaceAction": {
    "userInterface": {
      "id": 10003,
      "key": "Equipment",
      "description": "equipment.userinterface.description"
    },
    "key": "new"
  },
  "sections": [
    {
      "id": 10030,
      "pageLayout": {
        "id": 10010
      },
      "key": "pls_new_equipment",
      "description": " ",
      "layoutColumns": 1,
      "layoutOrder": 1,
      "sectionRelatedLists": [],
      "sectionFields": [],
      "sectionButtons": [
        {
          "pageLayoutSection": {
            "id": 10030
          },
          "label": "equipment.button.save",
          "onClick": "onSave",
          "buttonOrder": 1,
          "name": "btn_save"
        },
        {
          "pageLayoutSection": {
            "id": 10030
          },
          "label": "equipment.button.cancel",
          "onClick": "onCancel",
          "buttonOrder": 2,
          "name": "btn_cancel"
        }
      ]
    },
    {
      "id": 10031,
      "pageLayout": {
        "id": 10010
      },
      "key": "pls_new_general_info_equipment",
      "description": "equipment.infoGeneral",
      "layoutColumns": 2,
      "layoutOrder": 2,
      "sectionRelatedLists": [],
      "sectionFields": [
        {
          "pageLayoutSection": {
            "id": 10031
          },
          "sectionOrder": 1,
          "formEvents": [],
          "field": {
            "id": 10032,
            "name": "key",
            "label": "equipment.key",
            "entity": {
              "id": 10011
            },
            "description": "key",
            "type": "TEXT",
            "readOnly": true,
            "mandatory": true,
            "maxSize": 45,
            "lookupEntity": {}
          },
          "sectionColumn": 1
        },
        {
          "pageLayoutSection": {
            "id": 10031
          },
          "sectionOrder": 1,
          "formEvents": [],
          "field": {
            "id": 10034,
            "name": "equipmentType",
            "label": "equipment.equipmentType",
            "entity": {
              "id": 10011
            },
            "description": "equipmentType",
            "type": "LOOKUP",
            "readOnly": false,
            "mandatory": true,
            "lookupEntityColumn": "key",
            "lookupEntity": {
              "id": 10002,
              "key": "EquipmentType"
            }
          },
          "sectionColumn": 2
        },
        {
          "pageLayoutSection": {
            "id": 10031
          },
          "sectionOrder": 2,
          "formEvents": [],
          "field": {
            "id": 10033,
            "name": "organization",
            "label": "equipment.organization",
            "entity": {
              "id": 10011
            },
            "description": "organization",
            "type": "LOOKUP",
            "readOnly": true,
            "mandatory": true,
            "lookupEntityColumn": "description",
            "lookupEntity": {
              "id": 10000,
              "key": "Organization"
            }
          },
          "sectionColumn": 1
        },
        {
          "pageLayoutSection": {
            "id": 10031
          },
          "sectionOrder": 3,
          "formEvents": [],
          "field": {
            "id": 10035,
            "name": "description",
            "label": "equipment.description",
            "entity": {
              "id": 10011
            },
            "description": "description",
            "type": "TEXT",
            "readOnly": false,
            "mandatory": false,
            "maxSize": 255,
            "lookupEntity": {}
          },
          "sectionColumn": 1
        },
        {
          "pageLayoutSection": {
            "id": 10031
          },
          "sectionOrder": 4,
          "formEvents": [],
          "field": {
            "id": 10036,
            "name": "enabled",
            "label": "equipment.enabled",
            "entity": {
              "id": 10011
            },
            "description": "enabled",
            "type": "CHECKBOX",
            "readOnly": false,
            "mandatory": false,
            "defaultValue": "true",
            "lookupEntity": {}
          },
          "sectionColumn": 1
        }
      ],
      "sectionButtons": []
    },
    {
      "id": 10032,
      "pageLayout": {
        "id": 10010
      },
      "key": "pls_new_gps_provider_equipment",
      "description": "equipment.infoGpsProvider",
      "layoutColumns": 1,
      "layoutOrder": 3,
      "sectionRelatedLists": [],
      "sectionFields": [
        {
          "pageLayoutSection": {
            "id": 10032
          },
          "sectionOrder": 1,
          "formEvents": [],
          "field": {
            "id": 10038,
            "name": "gpsProvider",
            "label": "equipment.gpsProvider",
            "entity": {
              "id": 10011
            },
            "description": "gpsProviderId",
            "type": "LOOKUP",
            "readOnly": false,
            "mandatory": false,
            "lookupEntityColumn": "description",
            "lookupEntity": {
              "id": 10006,
              "key": "GPSProvider"
            }
          },
          "sectionColumn": 1
        },
        {
          "pageLayoutSection": {
            "id": 10032
          },
          "sectionOrder": 2,
          "formEvents": [],
          "field": {
            "id": 10037,
            "name": "gpsUnitId",
            "label": "equipment.gpsUnitId",
            "entity": {
              "id": 10011
            },
            "description": "gpsUnitId",
            "type": "TEXT",
            "readOnly": false,
            "mandatory": false,
            "maxSize": 255,
            "lookupEntity": {}
          },
          "sectionColumn": 1
        },
        {
          "pageLayoutSection": {
            "id": 10032
          },
          "sectionOrder": 3,
          "formEvents": [],
          "field": {
            "id": 11113,
            "name": "gpsProviderTelematicProfile",
            "label": "equipment.gpsProviderTelematicProfile",
            "entity": {
              "id": 10011
            },
            "description": "Field to gps provider telematic profile",
            "type": "LOOKUP",
            "readOnly": false,
            "mandatory": false,
            "lookupEntityColumn": "description",
            "lookupEntity": {
              "id": 10057,
              "key": "GPSProviderTelematicProfile"
            }
          },
          "sectionColumn": 1
        }
      ],
      "sectionButtons": []
    },
    {
      "id": 10380,
      "pageLayout": {
        "id": 10010
      },
      "key": "pls_new_tag_info_equipment",
      "description": "equipment.tagInformation",
      "layoutColumns": 1,
      "layoutOrder": 4,
      "sectionRelatedLists": [],
      "sectionFields": [
        {
          "pageLayoutSection": {
            "id": 10380
          },
          "sectionOrder": 1,
          "formEvents": [],
          "field": {
            "id": 10835,
            "name": "tags",
            "label": "equipment.tag",
            "entity": {
              "id": 10011
            },
            "description": "tag",
            "type": "TAG",
            "meta": "{\n                    \"hasMany\": {\n                        \"criteriaChainAttribute\": \"tags.id\"\n                    }\n                }",
            "readOnly": false,
            "mandatory": false,
            "lookupEntityColumn": "description",
            "lookupEntity": {}
          },
          "sectionColumn": 1
        }
      ],
      "sectionButtons": []
    }
  ]
};
