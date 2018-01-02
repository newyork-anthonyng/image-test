report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_My_Local_Test_0_document_0_phone.png",
        "test": "../bitmaps_test/20180102-145651/backstop_default_My_Local_Test_0_document_0_phone.png",
        "selector": "document",
        "fileName": "backstop_default_My_Local_Test_0_document_0_phone.png",
        "label": "My Local Test",
        "misMatchThreshold": 0.1,
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.02",
          "analysisTime": 21
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_My_Local_Test_1_header_0_phone.png",
        "test": "../bitmaps_test/20180102-145651/backstop_default_My_Local_Test_1_header_0_phone.png",
        "selector": "header",
        "fileName": "backstop_default_My_Local_Test_1_header_0_phone.png",
        "label": "My Local Test",
        "misMatchThreshold": 0.1,
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.19",
          "analysisTime": 8
        },
        "diffImage": "../bitmaps_test/20180102-145651/failed_diff_backstop_default_My_Local_Test_1_header_0_phone.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_My_Local_Test_0_document_1_tablet.png",
        "test": "../bitmaps_test/20180102-145651/backstop_default_My_Local_Test_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "backstop_default_My_Local_Test_0_document_1_tablet.png",
        "label": "My Local Test",
        "misMatchThreshold": 0.1,
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.27",
          "analysisTime": 51
        },
        "diffImage": "../bitmaps_test/20180102-145651/failed_diff_backstop_default_My_Local_Test_0_document_1_tablet.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_My_Local_Test_1_header_1_tablet.png",
        "test": "../bitmaps_test/20180102-145651/backstop_default_My_Local_Test_1_header_1_tablet.png",
        "selector": "header",
        "fileName": "backstop_default_My_Local_Test_1_header_1_tablet.png",
        "label": "My Local Test",
        "misMatchThreshold": 0.1,
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "3.19",
          "analysisTime": 15
        },
        "diffImage": "../bitmaps_test/20180102-145651/failed_diff_backstop_default_My_Local_Test_1_header_1_tablet.png"
      },
      "status": "fail"
    }
  ]
});