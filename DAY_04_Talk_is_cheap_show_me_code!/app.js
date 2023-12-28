import React from "react";
import ReactDOM from "react-dom/client";

// conflict driven ui

 /**
  * -----APP LAYOUT-------
  * HEADER
  * - Logo
  * - Nav Items
  * BODY
  * - Search Bar
  * - Resturant Container (contains lot of Resturant Cards)
  *   - Resturant Card
  *         -Img
  *         - Name of Resturant
  *         - Star Rating
  *         - cuisine
  *         - delivery time
  * FOOTER
  * - Copyright
  * - Name, Address of company
  * - Links
  */

const Header = () => (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" alt="" />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
);

//Data will be in the form of list of objects -> SWIGGY API
const resList = [
                  {
                    "info": {
                      "id": "341240",
                      "name": "La Pino'z Pizza",
                      "cloudinaryImageId": "tx4nkcrymnxl4skumwm9",
                      "locality": "Central Kolkata",
                      "areaName": "Park Street Area",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Pizzas",
                        "Pastas",
                        "Italian",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.1,
                      "parentId": "4961",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 21,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "21 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-12-28 04:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹699",
                        "discountTag": "FLAT DEAL"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      "context": "seo-data-191a8893-9c56-4be7-8bc5-07a29061e47b"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-central-park-street-area-kolkata-341240",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "info": {
                      "id": "407661",
                      "name": "Burger King",
                      "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
                      "locality": "New Market",
                      "areaName": "Esplanade",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Burgers",
                        "American"
                      ],
                      "avgRating": 4.2,
                      "parentId": "166",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 24,
                        "lastMileTravel": 2.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "24 mins",
                        "lastMileTravelString": "2.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-12-28 06:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹120"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      "context": "seo-data-191a8893-9c56-4be7-8bc5-07a29061e47b"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/burger-king-new-market-esplanade-kolkata-407661",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "info": {
                      "id": "3078",
                      "name": "Balwant Singh's Eating House",
                      "cloudinaryImageId": "oshzewpdqvmphedhkxgt",
                      "locality": "Bhawanipur",
                      "areaName": "Bhawanipur",
                      "costForTwo": "₹600 for two",
                      "cuisines": [
                        "North Indian"
                      ],
                      "avgRating": 4.3,
                      "veg": true,
                      "parentId": "6143",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 26,
                        "lastMileTravel": 5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "26 mins",
                        "lastMileTravelString": "5.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-12-28 04:59:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "20% OFF",
                        "subHeader": "UPTO ₹50"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      "context": "seo-data-191a8893-9c56-4be7-8bc5-07a29061e47b"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/balwant-singhs-eating-house-bhawanipur-kolkata-3078",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "info": {
                      "id": "13571",
                      "name": "Haji Saheb Park Circus",
                      "cloudinaryImageId": "bedbbaa7543c3d70d7a01b02046ee86e",
                      "locality": "Ballygunge",
                      "areaName": "Ballygunge",
                      "costForTwo": "₹800 for two",
                      "cuisines": [
                        "Mughlai",
                        "North Indian",
                        "Chinese"
                      ],
                      "avgRating": 4.3,
                      "parentId": "18627",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 21,
                        "lastMileTravel": 4.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "21 mins",
                        "lastMileTravelString": "4.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-12-28 06:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹100 OFF",
                        "subHeader": "ABOVE ₹499",
                        "discountTag": "FLAT DEAL"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      "context": "seo-data-191a8893-9c56-4be7-8bc5-07a29061e47b"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/haji-saheb-park-circus-ballygunge-kolkata-13571",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "info": {
                      "id": "192815",
                      "name": "A1 Ajooba Biryani center",
                      "cloudinaryImageId": "sg319veq0rjbsytlqdib",
                      "locality": "Jadavpur",
                      "areaName": "Regent Park",
                      "costForTwo": "₹150 for two",
                      "cuisines": [
                        "Biryani"
                      ],
                      "avgRating": 3.6,
                      "parentId": "25013",
                      "avgRatingString": "3.6",
                      "totalRatingsString": "5K+",
                      "sla": {
                        "deliveryTime": 34,
                        "lastMileTravel": 11,
                        "serviceability": "SERVICEABLE",
                        "slaString": "34 mins",
                        "lastMileTravelString": "11.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-01-03 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "20% OFF",
                        "subHeader": "UPTO ₹100"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      "context": "seo-data-191a8893-9c56-4be7-8bc5-07a29061e47b"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/a1-ajooba-biryani-center-jadavpur-regent-park-kolkata-192815",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "info": {
                      "id": "135333",
                      "name": "Bangaliyna",
                      "cloudinaryImageId": "olemrblkkyg4slrsufvy",
                      "areaName": "Kestopur",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "North Indian",
                        "Chinese",
                        "Biryani",
                        "Bengali"
                      ],
                      "avgRating": 3.7,
                      "parentId": "41275",
                      "avgRatingString": "3.7",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 35,
                        "lastMileTravel": 9.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35 mins",
                        "lastMileTravelString": "9.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-12-28 03:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "30% OFF",
                        "subHeader": "UPTO ₹150",
                        "discountTag": "SAVE BIG"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      "context": "seo-data-191a8893-9c56-4be7-8bc5-07a29061e47b"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/bangaliyna-kestopur-kolkata-135333",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "info": {
                      "id": "86834",
                      "name": "Wok Up",
                      "cloudinaryImageId": "qnznhxxamalwoks2vujb",
                      "locality": "Silver Line Eye Hospital",
                      "areaName": "Jodhpur Park",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Chinese",
                        "Thai",
                        "Seafood",
                        "Asian"
                      ],
                      "avgRating": 4.3,
                      "parentId": "226364",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 35,
                        "lastMileTravel": 9.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35 mins",
                        "lastMileTravelString": "9.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-12-28 04:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "20% OFF",
                        "subHeader": "UPTO ₹100"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      "context": "seo-data-191a8893-9c56-4be7-8bc5-07a29061e47b"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/wok-up-silver-line-eye-hospital-jodhpur-park-kolkata-86834",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "info": {
                      "id": "25142",
                      "name": "Hotel Pan Asia Continental",
                      "cloudinaryImageId": "zk2buppzl3dlvgrkxggn",
                      "locality": "Sarat Bose Road",
                      "areaName": "Paddapukur",
                      "costForTwo": "₹800 for two",
                      "cuisines": [
                        "Continental",
                        "Italian",
                        "Pastas",
                        "Salads",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.5,
                      "parentId": "453924",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 27,
                        "lastMileTravel": 4.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "27 mins",
                        "lastMileTravelString": "4.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-12-28 06:55:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹999",
                        "discountTag": "FLAT DEAL"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      "context": "seo-data-191a8893-9c56-4be7-8bc5-07a29061e47b"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/hotel-pan-asia-continental-sarat-bose-road-paddapukur-kolkata-25142",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "info": {
                      "id": "156690",
                      "name": "Rayyan Biryani",
                      "cloudinaryImageId": "dlkugxln3bpvr3jouumx",
                      "locality": "Esplanade",
                      "areaName": "Taltala",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Biryani",
                        "Mughlai"
                      ],
                      "avgRating": 3.5,
                      "parentId": "18596",
                      "avgRatingString": "3.5",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 14,
                        "lastMileTravel": 2.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "14 mins",
                        "lastMileTravelString": "2.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-12-28 05:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹95"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      "context": "seo-data-191a8893-9c56-4be7-8bc5-07a29061e47b"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/rayyan-biryani-esplanade-taltala-kolkata-156690",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  }];


const ResturantCard = ({ resData }) => {

    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime } = resData?.info; //optional chaining
     
    return (
        <div className="res-card">
        <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="" />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} Stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{resData.info.sla.deliveryTime} minutes</h4>
        </div>
    )
};

//Props => dynamically passes data to a functional component, passing a argument to a function
//Passing props to a component
//When we need to dynamically pass a data to a component -> We'll use props

const Body = () => (
    <div className="body">
        <div className="search">
            SEARCH
        </div>
        <div className="res-container">
            {/* <ResturantCard resData={resList[0]}/>
            <ResturantCard resData={resList[1]}/>
            <ResturantCard resData={resList[2]}/>
            <ResturantCard resData={resList[3]}/>
            <ResturantCard resData={resList[4]} />
            <ResturantCard resData={resList[5]} />
            <ResturantCard resData={resList[6]} />
            <ResturantCard resData={resList[7]} />
            <ResturantCard resData={resList[8]}/> */}

            {
                resList.map(resturant => <ResturantCard key={resturant.info.id} resData={resturant} />)
            }
        </div>
    </div>
);

const AppLayout = () => (
    <div className="app">
        {Header()}
        {Body()}
    </div>
);


const root = ReactDOM.createRoot(document.getElementById("root")); 

root.render(<AppLayout/>);


