$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("NRT_Account.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: sylvain.tropee@accenture.com"
    }
  ],
  "line": 4,
  "name": "Test Non regression account",
  "description": "\r\nTest NRT with cucumber",
  "id": "test-non-regression-account",
  "keyword": "Feature",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.before({
  "duration": 5802762535,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Test login",
  "description": "",
  "id": "test-non-regression-account;test-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "je suis sur la page de connection Salesforce",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "je remplis le login et le password",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "jarrive sur la page d\u0027accueil de Salesforce",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "je change de vue si necessaire",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.InitLoginPage()"
});
formatter.result({
  "duration": 142020369,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.putNameAndPassword()"
});
formatter.result({
  "duration": 741561910,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.checkHomepage()"
});
formatter.result({
  "duration": 8525783,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.switchView()"
});
formatter.result({
  "duration": 10587588831,
  "status": "passed"
});
formatter.after({
  "duration": 63434,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Clic sur Account",
  "description": "",
  "id": "test-non-regression-account;clic-sur-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@CheckHomePageClassic"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "je suis sur la page d\u0027accueil",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "je vais sur la page principal de Salesforce",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "je verifie que l\u0027onglet Account est present",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "je clique sur l\u0027onglet Account",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountStep.initHomepage()"
});
formatter.result({
  "duration": 376071,
  "status": "passed"
});
formatter.match({
  "location": "AccountStep.accesHome()"
});
formatter.result({
  "duration": 11277627899,
  "status": "passed"
});
formatter.match({
  "location": "AccountStep.verifAccountButton()"
});
formatter.result({
  "duration": 44427336,
  "status": "passed"
});
formatter.match({
  "location": "AccountStep.clicNewAccountBtn()"
});
formatter.result({
  "duration": 8274400335,
  "status": "passed"
});
formatter.after({
  "duration": 65322,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 23,
  "name": "Verification de la presence des champs",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "je verifie la presence du label \u003clabelName\u003e de la section \u003csectionName\u003e et son type \u003celementType\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs;",
  "rows": [
    {
      "cells": [
        "labelName",
        "sectionName",
        "elementType"
      ],
      "line": 27,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs;;1"
    },
    {
      "cells": [
        "Account Name",
        "Account Information",
        "Label Edit"
      ],
      "line": 28,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs;;2"
    },
    {
      "cells": [
        "Parent Account",
        "Account Information",
        "Label Edit"
      ],
      "line": 29,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs;;3"
    },
    {
      "cells": [
        "Account Number",
        "Account Information",
        "Label Edit"
      ],
      "line": 30,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs;;4"
    },
    {
      "cells": [
        "Account Site",
        "Account Information",
        "Label Edit"
      ],
      "line": 31,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs;;5"
    },
    {
      "cells": [
        "Type",
        "Account Information",
        "Label Edit"
      ],
      "line": 32,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs;;6"
    },
    {
      "cells": [
        "Industry",
        "Account Information",
        "Label Edit"
      ],
      "line": 33,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs;;7"
    },
    {
      "cells": [
        "Annual Revenue",
        "Account Information",
        "Label Edit"
      ],
      "line": 34,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs;;8"
    },
    {
      "cells": [
        "Rating",
        "Account Information",
        "Label Edit"
      ],
      "line": 35,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs;;9"
    },
    {
      "cells": [
        "Phone",
        "Account Information",
        "Label Edit"
      ],
      "line": 36,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs;;10"
    },
    {
      "cells": [
        "Fax",
        "Account Information",
        "Label Edit"
      ],
      "line": 37,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs;;11"
    },
    {
      "cells": [
        "Website",
        "Account Information",
        "Label Edit"
      ],
      "line": 38,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs;;12"
    },
    {
      "cells": [
        "Ticker Symbol",
        "Account Information",
        "Label Edit"
      ],
      "line": 39,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs;;13"
    },
    {
      "cells": [
        "Ownership",
        "Account Information",
        "Label Edit"
      ],
      "line": 40,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs;;14"
    },
    {
      "cells": [
        "Employees",
        "Account Information",
        "Label Edit"
      ],
      "line": 41,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs;;15"
    },
    {
      "cells": [
        "SIC Code",
        "Account Information",
        "Label Edit"
      ],
      "line": 42,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs;;16"
    },
    {
      "cells": [
        "Billing Street",
        "Address Information",
        "Label Edit"
      ],
      "line": 43,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs;;17"
    },
    {
      "cells": [
        "Billing Zip/Postal Code",
        "Address Information",
        "Label Edit"
      ],
      "line": 44,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs;;18"
    },
    {
      "cells": [
        "Billing City",
        "Address Information",
        "Label Edit"
      ],
      "line": 45,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs;;19"
    },
    {
      "cells": [
        "Billing State/Province",
        "Address Information",
        "Label Edit"
      ],
      "line": 46,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs;;20"
    },
    {
      "cells": [
        "Billing Country",
        "Address Information",
        "Label Edit"
      ],
      "line": 47,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs;;21"
    },
    {
      "cells": [
        "Shipping Street",
        "Address Information",
        "Label Edit"
      ],
      "line": 48,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs;;22"
    },
    {
      "cells": [
        "Shipping Zip/Postal Code",
        "Address Information",
        "Label Edit"
      ],
      "line": 49,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs;;23"
    },
    {
      "cells": [
        "Shipping City",
        "Address Information",
        "Label Edit"
      ],
      "line": 50,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs;;24"
    },
    {
      "cells": [
        "Shipping State/Province",
        "Address Information",
        "Label Edit"
      ],
      "line": 51,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs;;25"
    },
    {
      "cells": [
        "Shipping Country",
        "Address Information",
        "Label Edit"
      ],
      "line": 52,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs;;26"
    },
    {
      "cells": [
        "Customer Priority",
        "Additional Information",
        "Label Edit"
      ],
      "line": 53,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs;;27"
    },
    {
      "cells": [
        "SLA Expiration Date",
        "Additional Information",
        "Label Edit"
      ],
      "line": 54,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs;;28"
    },
    {
      "cells": [
        "Number of Locations",
        "Additional Information",
        "Label Edit"
      ],
      "line": 55,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs;;29"
    },
    {
      "cells": [
        "Active",
        "Additional Information",
        "Label Edit"
      ],
      "line": 56,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs;;30"
    },
    {
      "cells": [
        "SLA",
        "Additional Information",
        "Label Edit"
      ],
      "line": 57,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs;;31"
    },
    {
      "cells": [
        "SLA Serial Number",
        "Additional Information",
        "Label Edit"
      ],
      "line": 58,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs;;32"
    },
    {
      "cells": [
        "Upsell Opportunity",
        "Additional Information",
        "Label Edit"
      ],
      "line": 59,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs;;33"
    },
    {
      "cells": [
        "Description",
        "Description Information",
        "Label Edit"
      ],
      "line": 60,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs;;34"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 28,
  "name": "Verification de la presence des champs",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "je verifie la presence du label Account Name de la section Account Information et son type Label Edit",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Account Name",
      "offset": 32
    },
    {
      "val": "Account Information",
      "offset": 59
    },
    {
      "val": "Label Edit",
      "offset": 91
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 118489509,
  "status": "passed"
});
formatter.after({
  "duration": 41156,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Verification de la presence des champs",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "je verifie la presence du label Parent Account de la section Account Information et son type Label Edit",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Parent Account",
      "offset": 32
    },
    {
      "val": "Account Information",
      "offset": 61
    },
    {
      "val": "Label Edit",
      "offset": 93
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 37810603,
  "status": "passed"
});
formatter.after({
  "duration": 23787,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Verification de la presence des champs",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "je verifie la presence du label Account Number de la section Account Information et son type Label Edit",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Account Number",
      "offset": 32
    },
    {
      "val": "Account Information",
      "offset": 61
    },
    {
      "val": "Label Edit",
      "offset": 93
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 38844043,
  "status": "passed"
});
formatter.after({
  "duration": 38513,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Verification de la presence des champs",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "je verifie la presence du label Account Site de la section Account Information et son type Label Edit",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Account Site",
      "offset": 32
    },
    {
      "val": "Account Information",
      "offset": 59
    },
    {
      "val": "Label Edit",
      "offset": 91
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 49320788,
  "status": "passed"
});
formatter.after({
  "duration": 23788,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Verification de la presence des champs",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "je verifie la presence du label Type de la section Account Information et son type Label Edit",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Type",
      "offset": 32
    },
    {
      "val": "Account Information",
      "offset": 51
    },
    {
      "val": "Label Edit",
      "offset": 83
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 37683358,
  "status": "passed"
});
formatter.after({
  "duration": 25298,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Verification de la presence des champs",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "je verifie la presence du label Industry de la section Account Information et son type Label Edit",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Industry",
      "offset": 32
    },
    {
      "val": "Account Information",
      "offset": 55
    },
    {
      "val": "Label Edit",
      "offset": 87
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 38380750,
  "status": "passed"
});
formatter.after({
  "duration": 27186,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Verification de la presence des champs",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "je verifie la presence du label Annual Revenue de la section Account Information et son type Label Edit",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Annual Revenue",
      "offset": 32
    },
    {
      "val": "Account Information",
      "offset": 61
    },
    {
      "val": "Label Edit",
      "offset": 93
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 37466249,
  "status": "passed"
});
formatter.after({
  "duration": 23410,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Verification de la presence des champs",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "je verifie la presence du label Rating de la section Account Information et son type Label Edit",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Rating",
      "offset": 32
    },
    {
      "val": "Account Information",
      "offset": 53
    },
    {
      "val": "Label Edit",
      "offset": 85
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 53366948,
  "status": "passed"
});
formatter.after({
  "duration": 23033,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Verification de la presence des champs",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs;;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "je verifie la presence du label Phone de la section Account Information et son type Label Edit",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Phone",
      "offset": 32
    },
    {
      "val": "Account Information",
      "offset": 52
    },
    {
      "val": "Label Edit",
      "offset": 84
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 35674627,
  "status": "passed"
});
formatter.after({
  "duration": 57015,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Verification de la presence des champs",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs;;11",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "je verifie la presence du label Fax de la section Account Information et son type Label Edit",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Fax",
      "offset": 32
    },
    {
      "val": "Account Information",
      "offset": 50
    },
    {
      "val": "Label Edit",
      "offset": 82
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 36348986,
  "status": "passed"
});
formatter.after({
  "duration": 43044,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Verification de la presence des champs",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs;;12",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "je verifie la presence du label Website de la section Account Information et son type Label Edit",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Website",
      "offset": 32
    },
    {
      "val": "Account Information",
      "offset": 54
    },
    {
      "val": "Label Edit",
      "offset": 86
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 36091476,
  "status": "passed"
});
formatter.after({
  "duration": 24542,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Verification de la presence des champs",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs;;13",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "je verifie la presence du label Ticker Symbol de la section Account Information et son type Label Edit",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Ticker Symbol",
      "offset": 32
    },
    {
      "val": "Account Information",
      "offset": 60
    },
    {
      "val": "Label Edit",
      "offset": 92
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 92887994,
  "status": "passed"
});
formatter.after({
  "duration": 27941,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Verification de la presence des champs",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs;;14",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "je verifie la presence du label Ownership de la section Account Information et son type Label Edit",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Ownership",
      "offset": 32
    },
    {
      "val": "Account Information",
      "offset": 56
    },
    {
      "val": "Label Edit",
      "offset": 88
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 38757955,
  "status": "passed"
});
formatter.after({
  "duration": 25298,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Verification de la presence des champs",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs;;15",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "je verifie la presence du label Employees de la section Account Information et son type Label Edit",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Employees",
      "offset": 32
    },
    {
      "val": "Account Information",
      "offset": 56
    },
    {
      "val": "Label Edit",
      "offset": 88
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 39543323,
  "status": "passed"
});
formatter.after({
  "duration": 384000,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Verification de la presence des champs",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs;;16",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "je verifie la presence du label SIC Code de la section Account Information et son type Label Edit",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "SIC Code",
      "offset": 32
    },
    {
      "val": "Account Information",
      "offset": 55
    },
    {
      "val": "Label Edit",
      "offset": 87
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 37865729,
  "status": "passed"
});
formatter.after({
  "duration": 40024,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Verification de la presence des champs",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs;;17",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "je verifie la presence du label Billing Street de la section Address Information et son type Label Edit",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Billing Street",
      "offset": 32
    },
    {
      "val": "Address Information",
      "offset": 61
    },
    {
      "val": "Label Edit",
      "offset": 93
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 47002062,
  "status": "passed"
});
formatter.after({
  "duration": 17747,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Verification de la presence des champs",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs;;18",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "je verifie la presence du label Billing Zip/Postal Code de la section Address Information et son type Label Edit",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Billing Zip/Postal Code",
      "offset": 32
    },
    {
      "val": "Address Information",
      "offset": 70
    },
    {
      "val": "Label Edit",
      "offset": 102
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 36659735,
  "status": "passed"
});
formatter.after({
  "duration": 17746,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Verification de la presence des champs",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs;;19",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "je verifie la presence du label Billing City de la section Address Information et son type Label Edit",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Billing City",
      "offset": 32
    },
    {
      "val": "Address Information",
      "offset": 59
    },
    {
      "val": "Label Edit",
      "offset": 91
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 38434744,
  "status": "passed"
});
formatter.after({
  "duration": 18501,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Verification de la presence des champs",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs;;20",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "je verifie la presence du label Billing State/Province de la section Address Information et son type Label Edit",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Billing State/Province",
      "offset": 32
    },
    {
      "val": "Address Information",
      "offset": 69
    },
    {
      "val": "Label Edit",
      "offset": 101
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 38660160,
  "status": "passed"
});
formatter.after({
  "duration": 18879,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Verification de la presence des champs",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs;;21",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "je verifie la presence du label Billing Country de la section Address Information et son type Label Edit",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Billing Country",
      "offset": 32
    },
    {
      "val": "Address Information",
      "offset": 62
    },
    {
      "val": "Label Edit",
      "offset": 94
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 74630055,
  "status": "passed"
});
formatter.after({
  "duration": 27941,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Verification de la presence des champs",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs;;22",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "je verifie la presence du label Shipping Street de la section Address Information et son type Label Edit",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Shipping Street",
      "offset": 32
    },
    {
      "val": "Address Information",
      "offset": 62
    },
    {
      "val": "Label Edit",
      "offset": 94
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 36472078,
  "status": "passed"
});
formatter.after({
  "duration": 17369,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Verification de la presence des champs",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs;;23",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "je verifie la presence du label Shipping Zip/Postal Code de la section Address Information et son type Label Edit",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Shipping Zip/Postal Code",
      "offset": 32
    },
    {
      "val": "Address Information",
      "offset": 71
    },
    {
      "val": "Label Edit",
      "offset": 103
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 38349412,
  "status": "passed"
});
formatter.after({
  "duration": 16236,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Verification de la presence des champs",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs;;24",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "je verifie la presence du label Shipping City de la section Address Information et son type Label Edit",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Shipping City",
      "offset": 32
    },
    {
      "val": "Address Information",
      "offset": 60
    },
    {
      "val": "Label Edit",
      "offset": 92
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 43267029,
  "status": "passed"
});
formatter.after({
  "duration": 18879,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "Verification de la presence des champs",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs;;25",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "je verifie la presence du label Shipping State/Province de la section Address Information et son type Label Edit",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Shipping State/Province",
      "offset": 32
    },
    {
      "val": "Address Information",
      "offset": 70
    },
    {
      "val": "Label Edit",
      "offset": 102
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 36589506,
  "status": "passed"
});
formatter.after({
  "duration": 16613,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "Verification de la presence des champs",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs;;26",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "je verifie la presence du label Shipping Country de la section Address Information et son type Label Edit",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Shipping Country",
      "offset": 32
    },
    {
      "val": "Address Information",
      "offset": 63
    },
    {
      "val": "Label Edit",
      "offset": 95
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 35061435,
  "status": "passed"
});
formatter.after({
  "duration": 17746,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Verification de la presence des champs",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs;;27",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "je verifie la presence du label Customer Priority de la section Additional Information et son type Label Edit",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Customer Priority",
      "offset": 32
    },
    {
      "val": "Additional Information",
      "offset": 64
    },
    {
      "val": "Label Edit",
      "offset": 99
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 42906817,
  "status": "passed"
});
formatter.after({
  "duration": 22277,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "Verification de la presence des champs",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs;;28",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "je verifie la presence du label SLA Expiration Date de la section Additional Information et son type Label Edit",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "SLA Expiration Date",
      "offset": 32
    },
    {
      "val": "Additional Information",
      "offset": 66
    },
    {
      "val": "Label Edit",
      "offset": 101
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 44311796,
  "status": "passed"
});
formatter.after({
  "duration": 18879,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "Verification de la presence des champs",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs;;29",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "je verifie la presence du label Number of Locations de la section Additional Information et son type Label Edit",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Number of Locations",
      "offset": 32
    },
    {
      "val": "Additional Information",
      "offset": 66
    },
    {
      "val": "Label Edit",
      "offset": 101
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 37503630,
  "status": "passed"
});
formatter.after({
  "duration": 19256,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "Verification de la presence des champs",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs;;30",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "je verifie la presence du label Active de la section Additional Information et son type Label Edit",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Active",
      "offset": 32
    },
    {
      "val": "Additional Information",
      "offset": 53
    },
    {
      "val": "Label Edit",
      "offset": 88
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 36202485,
  "status": "passed"
});
formatter.after({
  "duration": 17369,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "Verification de la presence des champs",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs;;31",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "je verifie la presence du label SLA de la section Additional Information et son type Label Edit",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "SLA",
      "offset": 32
    },
    {
      "val": "Additional Information",
      "offset": 50
    },
    {
      "val": "Label Edit",
      "offset": 85
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 35984243,
  "status": "passed"
});
formatter.after({
  "duration": 16613,
  "status": "passed"
});
formatter.scenario({
  "line": 58,
  "name": "Verification de la presence des champs",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs;;32",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "je verifie la presence du label SLA Serial Number de la section Additional Information et son type Label Edit",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "SLA Serial Number",
      "offset": 32
    },
    {
      "val": "Additional Information",
      "offset": 64
    },
    {
      "val": "Label Edit",
      "offset": 99
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 45841755,
  "status": "passed"
});
formatter.after({
  "duration": 16992,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "Verification de la presence des champs",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs;;33",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "je verifie la presence du label Upsell Opportunity de la section Additional Information et son type Label Edit",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Upsell Opportunity",
      "offset": 32
    },
    {
      "val": "Additional Information",
      "offset": 65
    },
    {
      "val": "Label Edit",
      "offset": 100
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 33525434,
  "status": "passed"
});
formatter.after({
  "duration": 16236,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "Verification de la presence des champs",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs;;34",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "je verifie la presence du label Description de la section Description Information et son type Label Edit",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Description",
      "offset": 32
    },
    {
      "val": "Description Information",
      "offset": 58
    },
    {
      "val": "Label Edit",
      "offset": 94
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 41010226,
  "status": "passed"
});
formatter.after({
  "duration": 16614,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 63,
  "name": "Verification de la possibilite d\u0027edition des champs d\u0027Account (Affichage d\u0027edition)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition)",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 64,
  "name": "je verifie que le champ qui suit le label \u003clabelName\u003e de la section \u003csectionName\u003e et de type \u003celementType\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 66,
  "name": "",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);",
  "rows": [
    {
      "cells": [
        "labelName",
        "sectionName",
        "elementType"
      ],
      "line": 67,
      "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;1"
    },
    {
      "cells": [
        "Account Name",
        "Account Information",
        "Input"
      ],
      "line": 68,
      "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;2"
    },
    {
      "cells": [
        "Parent Account",
        "Account Information",
        "searchField"
      ],
      "line": 69,
      "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;3"
    },
    {
      "cells": [
        "Account Number",
        "Account Information",
        "Input"
      ],
      "line": 70,
      "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;4"
    },
    {
      "cells": [
        "Account Site",
        "Account Information",
        "Input"
      ],
      "line": 71,
      "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;5"
    },
    {
      "cells": [
        "Type",
        "Account Information",
        "select"
      ],
      "line": 72,
      "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;6"
    },
    {
      "cells": [
        "Industry",
        "Account Information",
        "select"
      ],
      "line": 73,
      "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;7"
    },
    {
      "cells": [
        "Annual Revenue",
        "Account Information",
        "Input"
      ],
      "line": 74,
      "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;8"
    },
    {
      "cells": [
        "Rating",
        "Account Information",
        "select"
      ],
      "line": 75,
      "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;9"
    },
    {
      "cells": [
        "Phone",
        "Account Information",
        "Input"
      ],
      "line": 76,
      "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;10"
    },
    {
      "cells": [
        "Fax",
        "Account Information",
        "Input"
      ],
      "line": 77,
      "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;11"
    },
    {
      "cells": [
        "Website",
        "Account Information",
        "Input"
      ],
      "line": 78,
      "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;12"
    },
    {
      "cells": [
        "Ticker Symbol",
        "Account Information",
        "Input"
      ],
      "line": 79,
      "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;13"
    },
    {
      "cells": [
        "Ownership",
        "Account Information",
        "select"
      ],
      "line": 80,
      "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;14"
    },
    {
      "cells": [
        "Employees",
        "Account Information",
        "Input"
      ],
      "line": 81,
      "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;15"
    },
    {
      "cells": [
        "SIC Code",
        "Account Information",
        "Input"
      ],
      "line": 82,
      "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;16"
    },
    {
      "cells": [
        "Billing Street",
        "Address Information",
        "textArea"
      ],
      "line": 83,
      "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;17"
    },
    {
      "cells": [
        "Billing Zip/Postal Code",
        "Address Information",
        "Input"
      ],
      "line": 84,
      "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;18"
    },
    {
      "cells": [
        "Billing City",
        "Address Information",
        "Input"
      ],
      "line": 85,
      "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;19"
    },
    {
      "cells": [
        "Billing State/Province",
        "Address Information",
        "Input"
      ],
      "line": 86,
      "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;20"
    },
    {
      "cells": [
        "Billing Country",
        "Address Information",
        "Input"
      ],
      "line": 87,
      "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;21"
    },
    {
      "cells": [
        "Shipping Street",
        "Address Information",
        "textArea"
      ],
      "line": 88,
      "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;22"
    },
    {
      "cells": [
        "Shipping Zip/Postal Code",
        "Address Information",
        "Input"
      ],
      "line": 89,
      "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;23"
    },
    {
      "cells": [
        "Shipping City",
        "Address Information",
        "Input"
      ],
      "line": 90,
      "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;24"
    },
    {
      "cells": [
        "Shipping State/Province",
        "Address Information",
        "Input"
      ],
      "line": 91,
      "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;25"
    },
    {
      "cells": [
        "Shipping Country",
        "Address Information",
        "Input"
      ],
      "line": 92,
      "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;26"
    },
    {
      "cells": [
        "Customer Priority",
        "Additional Information",
        "select"
      ],
      "line": 93,
      "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;27"
    },
    {
      "cells": [
        "SLA Expiration Date",
        "Additional Information",
        "Date"
      ],
      "line": 94,
      "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;28"
    },
    {
      "cells": [
        "Number of Locations",
        "Additional Information",
        "Input"
      ],
      "line": 95,
      "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;29"
    },
    {
      "cells": [
        "Active",
        "Additional Information",
        "select"
      ],
      "line": 96,
      "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;30"
    },
    {
      "cells": [
        "SLA",
        "Additional Information",
        "select"
      ],
      "line": 97,
      "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;31"
    },
    {
      "cells": [
        "SLA Serial Number",
        "Additional Information",
        "Input"
      ],
      "line": 98,
      "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;32"
    },
    {
      "cells": [
        "Upsell Opportunity",
        "Additional Information",
        "select"
      ],
      "line": 99,
      "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;33"
    },
    {
      "cells": [
        "Description",
        "Description Information",
        "textArea"
      ],
      "line": 100,
      "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;34"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 68,
  "name": "Verification de la possibilite d\u0027edition des champs d\u0027Account (Affichage d\u0027edition)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "je verifie que le champ qui suit le label Account Name de la section Account Information et de type Input",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Account Name",
      "offset": 42
    },
    {
      "val": "Account Information",
      "offset": 69
    },
    {
      "val": "Input",
      "offset": 100
    }
  ],
  "location": "AccountStep.checkNewAccountEditableFields(String,String,String)"
});
formatter.result({
  "duration": 52188139,
  "status": "passed"
});
formatter.after({
  "duration": 15481,
  "status": "passed"
});
formatter.scenario({
  "line": 69,
  "name": "Verification de la possibilite d\u0027edition des champs d\u0027Account (Affichage d\u0027edition)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "je verifie que le champ qui suit le label Parent Account de la section Account Information et de type searchField",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Parent Account",
      "offset": 42
    },
    {
      "val": "Account Information",
      "offset": 71
    },
    {
      "val": "searchField",
      "offset": 102
    }
  ],
  "location": "AccountStep.checkNewAccountEditableFields(String,String,String)"
});
formatter.result({
  "duration": 46355265,
  "status": "passed"
});
formatter.after({
  "duration": 15859,
  "status": "passed"
});
formatter.scenario({
  "line": 70,
  "name": "Verification de la possibilite d\u0027edition des champs d\u0027Account (Affichage d\u0027edition)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "je verifie que le champ qui suit le label Account Number de la section Account Information et de type Input",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Account Number",
      "offset": 42
    },
    {
      "val": "Account Information",
      "offset": 71
    },
    {
      "val": "Input",
      "offset": 102
    }
  ],
  "location": "AccountStep.checkNewAccountEditableFields(String,String,String)"
});
formatter.result({
  "duration": 50741626,
  "status": "passed"
});
formatter.after({
  "duration": 15480,
  "status": "passed"
});
formatter.scenario({
  "line": 71,
  "name": "Verification de la possibilite d\u0027edition des champs d\u0027Account (Affichage d\u0027edition)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "je verifie que le champ qui suit le label Account Site de la section Account Information et de type Input",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Account Site",
      "offset": 42
    },
    {
      "val": "Account Information",
      "offset": 69
    },
    {
      "val": "Input",
      "offset": 100
    }
  ],
  "location": "AccountStep.checkNewAccountEditableFields(String,String,String)"
});
formatter.result({
  "duration": 54266347,
  "status": "passed"
});
formatter.after({
  "duration": 15480,
  "status": "passed"
});
formatter.scenario({
  "line": 72,
  "name": "Verification de la possibilite d\u0027edition des champs d\u0027Account (Affichage d\u0027edition)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "je verifie que le champ qui suit le label Type de la section Account Information et de type select",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Type",
      "offset": 42
    },
    {
      "val": "Account Information",
      "offset": 61
    },
    {
      "val": "select",
      "offset": 92
    }
  ],
  "location": "AccountStep.checkNewAccountEditableFields(String,String,String)"
});
formatter.result({
  "duration": 47035666,
  "status": "passed"
});
formatter.after({
  "duration": 15859,
  "status": "passed"
});
formatter.scenario({
  "line": 73,
  "name": "Verification de la possibilite d\u0027edition des champs d\u0027Account (Affichage d\u0027edition)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "je verifie que le champ qui suit le label Industry de la section Account Information et de type select",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Industry",
      "offset": 42
    },
    {
      "val": "Account Information",
      "offset": 65
    },
    {
      "val": "select",
      "offset": 96
    }
  ],
  "location": "AccountStep.checkNewAccountEditableFields(String,String,String)"
});
formatter.result({
  "duration": 51954795,
  "status": "passed"
});
formatter.after({
  "duration": 16236,
  "status": "passed"
});
formatter.scenario({
  "line": 74,
  "name": "Verification de la possibilite d\u0027edition des champs d\u0027Account (Affichage d\u0027edition)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "je verifie que le champ qui suit le label Annual Revenue de la section Account Information et de type Input",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Annual Revenue",
      "offset": 42
    },
    {
      "val": "Account Information",
      "offset": 71
    },
    {
      "val": "Input",
      "offset": 102
    }
  ],
  "location": "AccountStep.checkNewAccountEditableFields(String,String,String)"
});
formatter.result({
  "duration": 49823349,
  "status": "passed"
});
formatter.after({
  "duration": 14726,
  "status": "passed"
});
formatter.scenario({
  "line": 75,
  "name": "Verification de la possibilite d\u0027edition des champs d\u0027Account (Affichage d\u0027edition)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "je verifie que le champ qui suit le label Rating de la section Account Information et de type select",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Rating",
      "offset": 42
    },
    {
      "val": "Account Information",
      "offset": 63
    },
    {
      "val": "select",
      "offset": 94
    }
  ],
  "location": "AccountStep.checkNewAccountEditableFields(String,String,String)"
});
formatter.result({
  "duration": 49784080,
  "status": "passed"
});
formatter.after({
  "duration": 15858,
  "status": "passed"
});
formatter.scenario({
  "line": 76,
  "name": "Verification de la possibilite d\u0027edition des champs d\u0027Account (Affichage d\u0027edition)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "je verifie que le champ qui suit le label Phone de la section Account Information et de type Input",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Phone",
      "offset": 42
    },
    {
      "val": "Account Information",
      "offset": 62
    },
    {
      "val": "Input",
      "offset": 93
    }
  ],
  "location": "AccountStep.checkNewAccountEditableFields(String,String,String)"
});
formatter.result({
  "duration": 51656505,
  "status": "passed"
});
formatter.after({
  "duration": 16991,
  "status": "passed"
});
formatter.scenario({
  "line": 77,
  "name": "Verification de la possibilite d\u0027edition des champs d\u0027Account (Affichage d\u0027edition)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;11",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "je verifie que le champ qui suit le label Fax de la section Account Information et de type Input",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Fax",
      "offset": 42
    },
    {
      "val": "Account Information",
      "offset": 60
    },
    {
      "val": "Input",
      "offset": 91
    }
  ],
  "location": "AccountStep.checkNewAccountEditableFields(String,String,String)"
});
formatter.result({
  "duration": 56354371,
  "status": "passed"
});
formatter.after({
  "duration": 22277,
  "status": "passed"
});
formatter.scenario({
  "line": 78,
  "name": "Verification de la possibilite d\u0027edition des champs d\u0027Account (Affichage d\u0027edition)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;12",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "je verifie que le champ qui suit le label Website de la section Account Information et de type Input",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Website",
      "offset": 42
    },
    {
      "val": "Account Information",
      "offset": 64
    },
    {
      "val": "Input",
      "offset": 95
    }
  ],
  "location": "AccountStep.checkNewAccountEditableFields(String,String,String)"
});
formatter.result({
  "duration": 61980330,
  "status": "passed"
});
formatter.after({
  "duration": 18502,
  "status": "passed"
});
formatter.scenario({
  "line": 79,
  "name": "Verification de la possibilite d\u0027edition des champs d\u0027Account (Affichage d\u0027edition)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;13",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "je verifie que le champ qui suit le label Ticker Symbol de la section Account Information et de type Input",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Ticker Symbol",
      "offset": 42
    },
    {
      "val": "Account Information",
      "offset": 70
    },
    {
      "val": "Input",
      "offset": 101
    }
  ],
  "location": "AccountStep.checkNewAccountEditableFields(String,String,String)"
});
formatter.result({
  "duration": 50083880,
  "status": "passed"
});
formatter.after({
  "duration": 20012,
  "status": "passed"
});
formatter.scenario({
  "line": 80,
  "name": "Verification de la possibilite d\u0027edition des champs d\u0027Account (Affichage d\u0027edition)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;14",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "je verifie que le champ qui suit le label Ownership de la section Account Information et de type select",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Ownership",
      "offset": 42
    },
    {
      "val": "Account Information",
      "offset": 66
    },
    {
      "val": "select",
      "offset": 97
    }
  ],
  "location": "AccountStep.checkNewAccountEditableFields(String,String,String)"
});
formatter.result({
  "duration": 50032529,
  "status": "passed"
});
formatter.after({
  "duration": 24166,
  "status": "passed"
});
formatter.scenario({
  "line": 81,
  "name": "Verification de la possibilite d\u0027edition des champs d\u0027Account (Affichage d\u0027edition)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;15",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "je verifie que le champ qui suit le label Employees de la section Account Information et de type Input",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Employees",
      "offset": 42
    },
    {
      "val": "Account Information",
      "offset": 66
    },
    {
      "val": "Input",
      "offset": 97
    }
  ],
  "location": "AccountStep.checkNewAccountEditableFields(String,String,String)"
});
formatter.result({
  "duration": 49401968,
  "status": "passed"
});
formatter.after({
  "duration": 16992,
  "status": "passed"
});
formatter.scenario({
  "line": 82,
  "name": "Verification de la possibilite d\u0027edition des champs d\u0027Account (Affichage d\u0027edition)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;16",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "je verifie que le champ qui suit le label SIC Code de la section Account Information et de type Input",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "SIC Code",
      "offset": 42
    },
    {
      "val": "Account Information",
      "offset": 65
    },
    {
      "val": "Input",
      "offset": 96
    }
  ],
  "location": "AccountStep.checkNewAccountEditableFields(String,String,String)"
});
formatter.result({
  "duration": 54500447,
  "status": "passed"
});
formatter.after({
  "duration": 20767,
  "status": "passed"
});
formatter.scenario({
  "line": 83,
  "name": "Verification de la possibilite d\u0027edition des champs d\u0027Account (Affichage d\u0027edition)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;17",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "je verifie que le champ qui suit le label Billing Street de la section Address Information et de type textArea",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Billing Street",
      "offset": 42
    },
    {
      "val": "Address Information",
      "offset": 71
    },
    {
      "val": "textArea",
      "offset": 102
    }
  ],
  "location": "AccountStep.checkNewAccountEditableFields(String,String,String)"
});
formatter.result({
  "duration": 50880198,
  "status": "passed"
});
formatter.after({
  "duration": 16614,
  "status": "passed"
});
formatter.scenario({
  "line": 84,
  "name": "Verification de la possibilite d\u0027edition des champs d\u0027Account (Affichage d\u0027edition)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;18",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "je verifie que le champ qui suit le label Billing Zip/Postal Code de la section Address Information et de type Input",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Billing Zip/Postal Code",
      "offset": 42
    },
    {
      "val": "Address Information",
      "offset": 80
    },
    {
      "val": "Input",
      "offset": 111
    }
  ],
  "location": "AccountStep.checkNewAccountEditableFields(String,String,String)"
});
formatter.result({
  "duration": 49781060,
  "status": "passed"
});
formatter.after({
  "duration": 26431,
  "status": "passed"
});
formatter.scenario({
  "line": 85,
  "name": "Verification de la possibilite d\u0027edition des champs d\u0027Account (Affichage d\u0027edition)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;19",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "je verifie que le champ qui suit le label Billing City de la section Address Information et de type Input",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Billing City",
      "offset": 42
    },
    {
      "val": "Address Information",
      "offset": 69
    },
    {
      "val": "Input",
      "offset": 100
    }
  ],
  "location": "AccountStep.checkNewAccountEditableFields(String,String,String)"
});
formatter.result({
  "duration": 56020967,
  "status": "passed"
});
formatter.after({
  "duration": 21145,
  "status": "passed"
});
formatter.scenario({
  "line": 86,
  "name": "Verification de la possibilite d\u0027edition des champs d\u0027Account (Affichage d\u0027edition)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;20",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "je verifie que le champ qui suit le label Billing State/Province de la section Address Information et de type Input",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Billing State/Province",
      "offset": 42
    },
    {
      "val": "Address Information",
      "offset": 79
    },
    {
      "val": "Input",
      "offset": 110
    }
  ],
  "location": "AccountStep.checkNewAccountEditableFields(String,String,String)"
});
formatter.result({
  "duration": 58572660,
  "status": "passed"
});
formatter.after({
  "duration": 24165,
  "status": "passed"
});
formatter.scenario({
  "line": 87,
  "name": "Verification de la possibilite d\u0027edition des champs d\u0027Account (Affichage d\u0027edition)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;21",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "je verifie que le champ qui suit le label Billing Country de la section Address Information et de type Input",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Billing Country",
      "offset": 42
    },
    {
      "val": "Address Information",
      "offset": 72
    },
    {
      "val": "Input",
      "offset": 103
    }
  ],
  "location": "AccountStep.checkNewAccountEditableFields(String,String,String)"
});
formatter.result({
  "duration": 52662381,
  "status": "passed"
});
formatter.after({
  "duration": 17747,
  "status": "passed"
});
formatter.scenario({
  "line": 88,
  "name": "Verification de la possibilite d\u0027edition des champs d\u0027Account (Affichage d\u0027edition)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;22",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "je verifie que le champ qui suit le label Shipping Street de la section Address Information et de type textArea",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Shipping Street",
      "offset": 42
    },
    {
      "val": "Address Information",
      "offset": 72
    },
    {
      "val": "textArea",
      "offset": 103
    }
  ],
  "location": "AccountStep.checkNewAccountEditableFields(String,String,String)"
});
formatter.result({
  "duration": 55178205,
  "status": "passed"
});
formatter.after({
  "duration": 18124,
  "status": "passed"
});
formatter.scenario({
  "line": 89,
  "name": "Verification de la possibilite d\u0027edition des champs d\u0027Account (Affichage d\u0027edition)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;23",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "je verifie que le champ qui suit le label Shipping Zip/Postal Code de la section Address Information et de type Input",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Shipping Zip/Postal Code",
      "offset": 42
    },
    {
      "val": "Address Information",
      "offset": 81
    },
    {
      "val": "Input",
      "offset": 112
    }
  ],
  "location": "AccountStep.checkNewAccountEditableFields(String,String,String)"
});
formatter.result({
  "duration": 55292235,
  "status": "passed"
});
formatter.after({
  "duration": 19634,
  "status": "passed"
});
formatter.scenario({
  "line": 90,
  "name": "Verification de la possibilite d\u0027edition des champs d\u0027Account (Affichage d\u0027edition)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;24",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "je verifie que le champ qui suit le label Shipping City de la section Address Information et de type Input",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Shipping City",
      "offset": 42
    },
    {
      "val": "Address Information",
      "offset": 70
    },
    {
      "val": "Input",
      "offset": 101
    }
  ],
  "location": "AccountStep.checkNewAccountEditableFields(String,String,String)"
});
formatter.result({
  "duration": 56650394,
  "status": "passed"
});
formatter.after({
  "duration": 22655,
  "status": "passed"
});
formatter.scenario({
  "line": 91,
  "name": "Verification de la possibilite d\u0027edition des champs d\u0027Account (Affichage d\u0027edition)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;25",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "je verifie que le champ qui suit le label Shipping State/Province de la section Address Information et de type Input",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Shipping State/Province",
      "offset": 42
    },
    {
      "val": "Address Information",
      "offset": 80
    },
    {
      "val": "Input",
      "offset": 111
    }
  ],
  "location": "AccountStep.checkNewAccountEditableFields(String,String,String)"
});
formatter.result({
  "duration": 59344435,
  "status": "passed"
});
formatter.after({
  "duration": 19257,
  "status": "passed"
});
formatter.scenario({
  "line": 92,
  "name": "Verification de la possibilite d\u0027edition des champs d\u0027Account (Affichage d\u0027edition)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;26",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "je verifie que le champ qui suit le label Shipping Country de la section Address Information et de type Input",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Shipping Country",
      "offset": 42
    },
    {
      "val": "Address Information",
      "offset": 73
    },
    {
      "val": "Input",
      "offset": 104
    }
  ],
  "location": "AccountStep.checkNewAccountEditableFields(String,String,String)"
});
formatter.result({
  "duration": 93536301,
  "status": "passed"
});
formatter.after({
  "duration": 18124,
  "status": "passed"
});
formatter.scenario({
  "line": 93,
  "name": "Verification de la possibilite d\u0027edition des champs d\u0027Account (Affichage d\u0027edition)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;27",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "je verifie que le champ qui suit le label Customer Priority de la section Additional Information et de type select",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Customer Priority",
      "offset": 42
    },
    {
      "val": "Additional Information",
      "offset": 74
    },
    {
      "val": "select",
      "offset": 108
    }
  ],
  "location": "AccountStep.checkNewAccountEditableFields(String,String,String)"
});
formatter.result({
  "duration": 92494177,
  "status": "passed"
});
formatter.after({
  "duration": 16991,
  "status": "passed"
});
formatter.scenario({
  "line": 94,
  "name": "Verification de la possibilite d\u0027edition des champs d\u0027Account (Affichage d\u0027edition)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;28",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "je verifie que le champ qui suit le label SLA Expiration Date de la section Additional Information et de type Date",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "SLA Expiration Date",
      "offset": 42
    },
    {
      "val": "Additional Information",
      "offset": 76
    },
    {
      "val": "Date",
      "offset": 110
    }
  ],
  "location": "AccountStep.checkNewAccountEditableFields(String,String,String)"
});
formatter.result({
  "duration": 55027172,
  "status": "passed"
});
formatter.after({
  "duration": 19257,
  "status": "passed"
});
formatter.scenario({
  "line": 95,
  "name": "Verification de la possibilite d\u0027edition des champs d\u0027Account (Affichage d\u0027edition)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;29",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "je verifie que le champ qui suit le label Number of Locations de la section Additional Information et de type Input",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Number of Locations",
      "offset": 42
    },
    {
      "val": "Additional Information",
      "offset": 76
    },
    {
      "val": "Input",
      "offset": 110
    }
  ],
  "location": "AccountStep.checkNewAccountEditableFields(String,String,String)"
});
formatter.result({
  "duration": 86467226,
  "status": "passed"
});
formatter.after({
  "duration": 22654,
  "status": "passed"
});
formatter.scenario({
  "line": 96,
  "name": "Verification de la possibilite d\u0027edition des champs d\u0027Account (Affichage d\u0027edition)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;30",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "je verifie que le champ qui suit le label Active de la section Additional Information et de type select",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Active",
      "offset": 42
    },
    {
      "val": "Additional Information",
      "offset": 63
    },
    {
      "val": "select",
      "offset": 97
    }
  ],
  "location": "AccountStep.checkNewAccountEditableFields(String,String,String)"
});
formatter.result({
  "duration": 66619671,
  "status": "passed"
});
formatter.after({
  "duration": 20389,
  "status": "passed"
});
formatter.scenario({
  "line": 97,
  "name": "Verification de la possibilite d\u0027edition des champs d\u0027Account (Affichage d\u0027edition)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;31",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "je verifie que le champ qui suit le label SLA de la section Additional Information et de type select",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "SLA",
      "offset": 42
    },
    {
      "val": "Additional Information",
      "offset": 60
    },
    {
      "val": "select",
      "offset": 94
    }
  ],
  "location": "AccountStep.checkNewAccountEditableFields(String,String,String)"
});
formatter.result({
  "duration": 52393922,
  "status": "passed"
});
formatter.after({
  "duration": 16613,
  "status": "passed"
});
formatter.scenario({
  "line": 98,
  "name": "Verification de la possibilite d\u0027edition des champs d\u0027Account (Affichage d\u0027edition)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;32",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "je verifie que le champ qui suit le label SLA Serial Number de la section Additional Information et de type Input",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "SLA Serial Number",
      "offset": 42
    },
    {
      "val": "Additional Information",
      "offset": 74
    },
    {
      "val": "Input",
      "offset": 108
    }
  ],
  "location": "AccountStep.checkNewAccountEditableFields(String,String,String)"
});
formatter.result({
  "duration": 54798736,
  "status": "passed"
});
formatter.after({
  "duration": 16991,
  "status": "passed"
});
formatter.scenario({
  "line": 99,
  "name": "Verification de la possibilite d\u0027edition des champs d\u0027Account (Affichage d\u0027edition)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;33",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "je verifie que le champ qui suit le label Upsell Opportunity de la section Additional Information et de type select",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Upsell Opportunity",
      "offset": 42
    },
    {
      "val": "Additional Information",
      "offset": 75
    },
    {
      "val": "select",
      "offset": 109
    }
  ],
  "location": "AccountStep.checkNewAccountEditableFields(String,String,String)"
});
formatter.result({
  "duration": 51470735,
  "status": "passed"
});
formatter.after({
  "duration": 20389,
  "status": "passed"
});
formatter.scenario({
  "line": 100,
  "name": "Verification de la possibilite d\u0027edition des champs d\u0027Account (Affichage d\u0027edition)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-possibilite-d\u0027edition-des-champs-d\u0027account-(affichage-d\u0027edition);;34",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "je verifie que le champ qui suit le label Description de la section Description Information et de type textArea",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Description",
      "offset": 42
    },
    {
      "val": "Description Information",
      "offset": 68
    },
    {
      "val": "textArea",
      "offset": 103
    }
  ],
  "location": "AccountStep.checkNewAccountEditableFields(String,String,String)"
});
formatter.result({
  "duration": 51482818,
  "status": "passed"
});
formatter.after({
  "duration": 47198,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 103,
  "name": "Verification de la presence des boutons \"Save\" / \"Save \u0026 New\" / \"Cancel\" en haut et bas de page (Affichage d\u0027edition)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-boutons-\"save\"-/-\"save-\u0026-new\"-/-\"cancel\"-en-haut-et-bas-de-page-(affichage-d\u0027edition)",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 104,
  "name": "je verifie la presence du bouton \u003cbuttonName\u003e situe en \u003cposition\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 106,
  "name": "",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-boutons-\"save\"-/-\"save-\u0026-new\"-/-\"cancel\"-en-haut-et-bas-de-page-(affichage-d\u0027edition);",
  "rows": [
    {
      "cells": [
        "buttonName",
        "position"
      ],
      "line": 107,
      "id": "test-non-regression-account;verification-de-la-presence-des-boutons-\"save\"-/-\"save-\u0026-new\"-/-\"cancel\"-en-haut-et-bas-de-page-(affichage-d\u0027edition);;1"
    },
    {
      "cells": [
        "save",
        "top"
      ],
      "line": 108,
      "id": "test-non-regression-account;verification-de-la-presence-des-boutons-\"save\"-/-\"save-\u0026-new\"-/-\"cancel\"-en-haut-et-bas-de-page-(affichage-d\u0027edition);;2"
    },
    {
      "cells": [
        "save_new",
        "top"
      ],
      "line": 109,
      "id": "test-non-regression-account;verification-de-la-presence-des-boutons-\"save\"-/-\"save-\u0026-new\"-/-\"cancel\"-en-haut-et-bas-de-page-(affichage-d\u0027edition);;3"
    },
    {
      "cells": [
        "cancel",
        "top"
      ],
      "line": 110,
      "id": "test-non-regression-account;verification-de-la-presence-des-boutons-\"save\"-/-\"save-\u0026-new\"-/-\"cancel\"-en-haut-et-bas-de-page-(affichage-d\u0027edition);;4"
    },
    {
      "cells": [
        "save",
        "bottom"
      ],
      "line": 111,
      "id": "test-non-regression-account;verification-de-la-presence-des-boutons-\"save\"-/-\"save-\u0026-new\"-/-\"cancel\"-en-haut-et-bas-de-page-(affichage-d\u0027edition);;5"
    },
    {
      "cells": [
        "save_new",
        "bottom"
      ],
      "line": 112,
      "id": "test-non-regression-account;verification-de-la-presence-des-boutons-\"save\"-/-\"save-\u0026-new\"-/-\"cancel\"-en-haut-et-bas-de-page-(affichage-d\u0027edition);;6"
    },
    {
      "cells": [
        "cancel",
        "bottom"
      ],
      "line": 113,
      "id": "test-non-regression-account;verification-de-la-presence-des-boutons-\"save\"-/-\"save-\u0026-new\"-/-\"cancel\"-en-haut-et-bas-de-page-(affichage-d\u0027edition);;7"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 108,
  "name": "Verification de la presence des boutons \"Save\" / \"Save \u0026 New\" / \"Cancel\" en haut et bas de page (Affichage d\u0027edition)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-boutons-\"save\"-/-\"save-\u0026-new\"-/-\"cancel\"-en-haut-et-bas-de-page-(affichage-d\u0027edition);;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 104,
  "name": "je verifie la presence du bouton save situe en top",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 33
    },
    {
      "val": "top",
      "offset": 47
    }
  ],
  "location": "AccountStep.checkEditPageButtons(String,String)"
});
formatter.result({
  "duration": 81935,
  "status": "passed"
});
formatter.after({
  "duration": 17369,
  "status": "passed"
});
formatter.scenario({
  "line": 109,
  "name": "Verification de la presence des boutons \"Save\" / \"Save \u0026 New\" / \"Cancel\" en haut et bas de page (Affichage d\u0027edition)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-boutons-\"save\"-/-\"save-\u0026-new\"-/-\"cancel\"-en-haut-et-bas-de-page-(affichage-d\u0027edition);;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 104,
  "name": "je verifie la presence du bouton save_new situe en top",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "save_new",
      "offset": 33
    },
    {
      "val": "top",
      "offset": 51
    }
  ],
  "location": "AccountStep.checkEditPageButtons(String,String)"
});
formatter.result({
  "duration": 61545,
  "status": "passed"
});
formatter.after({
  "duration": 15481,
  "status": "passed"
});
formatter.scenario({
  "line": 110,
  "name": "Verification de la presence des boutons \"Save\" / \"Save \u0026 New\" / \"Cancel\" en haut et bas de page (Affichage d\u0027edition)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-boutons-\"save\"-/-\"save-\u0026-new\"-/-\"cancel\"-en-haut-et-bas-de-page-(affichage-d\u0027edition);;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 104,
  "name": "je verifie la presence du bouton cancel situe en top",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "cancel",
      "offset": 33
    },
    {
      "val": "top",
      "offset": 49
    }
  ],
  "location": "AccountStep.checkEditPageButtons(String,String)"
});
formatter.result({
  "duration": 55127,
  "status": "passed"
});
formatter.after({
  "duration": 11327,
  "status": "passed"
});
formatter.scenario({
  "line": 111,
  "name": "Verification de la presence des boutons \"Save\" / \"Save \u0026 New\" / \"Cancel\" en haut et bas de page (Affichage d\u0027edition)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-boutons-\"save\"-/-\"save-\u0026-new\"-/-\"cancel\"-en-haut-et-bas-de-page-(affichage-d\u0027edition);;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 104,
  "name": "je verifie la presence du bouton save situe en bottom",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 33
    },
    {
      "val": "bottom",
      "offset": 47
    }
  ],
  "location": "AccountStep.checkEditPageButtons(String,String)"
});
formatter.result({
  "duration": 100059,
  "status": "passed"
});
formatter.after({
  "duration": 15481,
  "status": "passed"
});
formatter.scenario({
  "line": 112,
  "name": "Verification de la presence des boutons \"Save\" / \"Save \u0026 New\" / \"Cancel\" en haut et bas de page (Affichage d\u0027edition)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-boutons-\"save\"-/-\"save-\u0026-new\"-/-\"cancel\"-en-haut-et-bas-de-page-(affichage-d\u0027edition);;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 104,
  "name": "je verifie la presence du bouton save_new situe en bottom",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "save_new",
      "offset": 33
    },
    {
      "val": "bottom",
      "offset": 51
    }
  ],
  "location": "AccountStep.checkEditPageButtons(String,String)"
});
formatter.result({
  "duration": 55882,
  "status": "passed"
});
formatter.after({
  "duration": 14726,
  "status": "passed"
});
formatter.scenario({
  "line": 113,
  "name": "Verification de la presence des boutons \"Save\" / \"Save \u0026 New\" / \"Cancel\" en haut et bas de page (Affichage d\u0027edition)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-boutons-\"save\"-/-\"save-\u0026-new\"-/-\"cancel\"-en-haut-et-bas-de-page-(affichage-d\u0027edition);;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 104,
  "name": "je verifie la presence du bouton cancel situe en bottom",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "cancel",
      "offset": 33
    },
    {
      "val": "bottom",
      "offset": 49
    }
  ],
  "location": "AccountStep.checkEditPageButtons(String,String)"
});
formatter.result({
  "duration": 49085,
  "status": "passed"
});
formatter.after({
  "duration": 9439,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 115,
  "name": "Verification de la presence des boutons \"Save\" / \"Save \u0026 New\" / \"Cancel\" en bas de page (Affichage d\u0027edition)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-boutons-\"save\"-/-\"save-\u0026-new\"-/-\"cancel\"-en-bas-de-page-(affichage-d\u0027edition)",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 116,
  "name": "verification de  la presence du bouton \u003cbuttonName\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 118,
  "name": "",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-boutons-\"save\"-/-\"save-\u0026-new\"-/-\"cancel\"-en-bas-de-page-(affichage-d\u0027edition);",
  "rows": [
    {
      "cells": [
        "buttonName"
      ],
      "line": 119,
      "id": "test-non-regression-account;verification-de-la-presence-des-boutons-\"save\"-/-\"save-\u0026-new\"-/-\"cancel\"-en-bas-de-page-(affichage-d\u0027edition);;1"
    },
    {
      "cells": [
        "Save"
      ],
      "line": 120,
      "id": "test-non-regression-account;verification-de-la-presence-des-boutons-\"save\"-/-\"save-\u0026-new\"-/-\"cancel\"-en-bas-de-page-(affichage-d\u0027edition);;2"
    },
    {
      "cells": [
        "Save \u0026 New"
      ],
      "line": 121,
      "id": "test-non-regression-account;verification-de-la-presence-des-boutons-\"save\"-/-\"save-\u0026-new\"-/-\"cancel\"-en-bas-de-page-(affichage-d\u0027edition);;3"
    },
    {
      "cells": [
        "Cancel"
      ],
      "line": 122,
      "id": "test-non-regression-account;verification-de-la-presence-des-boutons-\"save\"-/-\"save-\u0026-new\"-/-\"cancel\"-en-bas-de-page-(affichage-d\u0027edition);;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 120,
  "name": "Verification de la presence des boutons \"Save\" / \"Save \u0026 New\" / \"Cancel\" en bas de page (Affichage d\u0027edition)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-boutons-\"save\"-/-\"save-\u0026-new\"-/-\"cancel\"-en-bas-de-page-(affichage-d\u0027edition);;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 116,
  "name": "verification de  la presence du bouton Save",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Save",
      "offset": 39
    }
  ],
  "location": "AccountStep.checkEditPageButtons(String)"
});
formatter.result({
  "duration": 17166351,
  "status": "passed"
});
formatter.after({
  "duration": 21900,
  "status": "passed"
});
formatter.scenario({
  "line": 121,
  "name": "Verification de la presence des boutons \"Save\" / \"Save \u0026 New\" / \"Cancel\" en bas de page (Affichage d\u0027edition)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-boutons-\"save\"-/-\"save-\u0026-new\"-/-\"cancel\"-en-bas-de-page-(affichage-d\u0027edition);;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 116,
  "name": "verification de  la presence du bouton Save \u0026 New",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Save \u0026 New",
      "offset": 39
    }
  ],
  "location": "AccountStep.checkEditPageButtons(String)"
});
formatter.result({
  "duration": 15604298,
  "status": "passed"
});
formatter.after({
  "duration": 18124,
  "status": "passed"
});
formatter.scenario({
  "line": 122,
  "name": "Verification de la presence des boutons \"Save\" / \"Save \u0026 New\" / \"Cancel\" en bas de page (Affichage d\u0027edition)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-boutons-\"save\"-/-\"save-\u0026-new\"-/-\"cancel\"-en-bas-de-page-(affichage-d\u0027edition);;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 116,
  "name": "verification de  la presence du bouton Cancel",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Cancel",
      "offset": 39
    }
  ],
  "location": "AccountStep.checkEditPageButtons(String)"
});
formatter.result({
  "duration": 16852204,
  "status": "passed"
});
formatter.after({
  "duration": 17369,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 124,
  "name": "Remplissage des champs de l\u0027Account",
  "description": "",
  "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 125,
  "name": "je remplis le champ \u003celementName\u003e de la section \u003csectionName\u003e de type \u003celementType\u003e requis \u003crequired\u003e avec la valeur \u003cvalues\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 127,
  "name": "",
  "description": "",
  "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;",
  "rows": [
    {
      "cells": [
        "elementName",
        "sectionName",
        "elementType",
        "required",
        "values"
      ],
      "line": 128,
      "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;1"
    },
    {
      "cells": [
        "Account Name",
        "Account Information",
        "Input",
        "true",
        ""
      ],
      "line": 129,
      "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;2"
    },
    {
      "cells": [
        "Account Number",
        "Account Information",
        "Input",
        "false",
        "2121212121"
      ],
      "line": 130,
      "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;3"
    },
    {
      "cells": [
        "Type",
        "Account Information",
        "select",
        "false",
        "Other"
      ],
      "line": 131,
      "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;4"
    },
    {
      "cells": [
        "Type",
        "Account Information",
        "select",
        "false",
        "Prospect"
      ],
      "line": 132,
      "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;5"
    },
    {
      "cells": [
        "Type",
        "Account Information",
        "select",
        "false",
        "Customer - Direct"
      ],
      "line": 133,
      "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;6"
    },
    {
      "cells": [
        "Type",
        "Account Information",
        "select",
        "false",
        "Customer - Channel"
      ],
      "line": 134,
      "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;7"
    },
    {
      "cells": [
        "Type",
        "Account Information",
        "select",
        "false",
        "Channel Partner / Reseller"
      ],
      "line": 135,
      "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;8"
    },
    {
      "cells": [
        "Type",
        "Account Information",
        "select",
        "false",
        "Installation Partner"
      ],
      "line": 136,
      "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;9"
    },
    {
      "cells": [
        "Type",
        "Account Information",
        "select",
        "false",
        "Technology Partner"
      ],
      "line": 137,
      "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;10"
    },
    {
      "cells": [
        "Type",
        "Account Information",
        "select",
        "false",
        "Prospect"
      ],
      "line": 138,
      "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;11"
    },
    {
      "cells": [
        "Industry",
        "Account Information",
        "select",
        "false",
        "Agriculture"
      ],
      "line": 139,
      "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;12"
    },
    {
      "cells": [
        "Industry",
        "Account Information",
        "select",
        "false",
        "Consulting"
      ],
      "line": 140,
      "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;13"
    },
    {
      "cells": [
        "Industry",
        "Account Information",
        "select",
        "false",
        "Energy"
      ],
      "line": 141,
      "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;14"
    },
    {
      "cells": [
        "Industry",
        "Account Information",
        "select",
        "false",
        "Finance"
      ],
      "line": 142,
      "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;15"
    },
    {
      "cells": [
        "Industry",
        "Account Information",
        "select",
        "false",
        "Media"
      ],
      "line": 143,
      "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;16"
    },
    {
      "cells": [
        "Industry",
        "Account Information",
        "select",
        "false",
        "Telecommunications"
      ],
      "line": 144,
      "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;17"
    },
    {
      "cells": [
        "Annual Revenue",
        "Account Information",
        "Input",
        "false",
        "50 000"
      ],
      "line": 145,
      "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;18"
    },
    {
      "cells": [
        "Rating",
        "Account Information",
        "select",
        "false",
        "Hot"
      ],
      "line": 146,
      "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;19"
    },
    {
      "cells": [
        "Rating",
        "Account Information",
        "select",
        "false",
        "Warm"
      ],
      "line": 147,
      "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;20"
    },
    {
      "cells": [
        "Rating",
        "Account Information",
        "select",
        "false",
        "Cold"
      ],
      "line": 148,
      "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;21"
    },
    {
      "cells": [
        "Rating",
        "Account Information",
        "select",
        "false",
        "Warm"
      ],
      "line": 149,
      "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;22"
    },
    {
      "cells": [
        "Phone",
        "Account Information",
        "Input",
        "false",
        "0202020202"
      ],
      "line": 150,
      "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;23"
    },
    {
      "cells": [
        "Fax",
        "Account Information",
        "Input",
        "false",
        "0404040404"
      ],
      "line": 151,
      "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;24"
    },
    {
      "cells": [
        "Website",
        "Account Information",
        "Input",
        "false",
        "https://www.accenture.com"
      ],
      "line": 152,
      "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;25"
    },
    {
      "cells": [
        "Ownership",
        "Account Information",
        "select",
        "false",
        "Public"
      ],
      "line": 153,
      "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;26"
    },
    {
      "cells": [
        "Ownership",
        "Account Information",
        "select",
        "false",
        "Private"
      ],
      "line": 154,
      "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;27"
    },
    {
      "cells": [
        "Ownership",
        "Account Information",
        "select",
        "false",
        "Subsidiary"
      ],
      "line": 155,
      "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;28"
    },
    {
      "cells": [
        "Ownership",
        "Account Information",
        "select",
        "false",
        "Private"
      ],
      "line": 156,
      "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;29"
    },
    {
      "cells": [
        "Billing Street",
        "Address Information",
        "textArea",
        "false",
        "500, route de Vannes"
      ],
      "line": 157,
      "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;30"
    },
    {
      "cells": [
        "Billing Zip/Postal Code",
        "Address Information",
        "Input",
        "false",
        "44000"
      ],
      "line": 158,
      "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;31"
    },
    {
      "cells": [
        "Billing City",
        "Address Information",
        "Input",
        "false",
        "Nantes"
      ],
      "line": 159,
      "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;32"
    },
    {
      "cells": [
        "Billing State/Province",
        "Address Information",
        "Input",
        "false",
        "Loire Atlantique"
      ],
      "line": 160,
      "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;33"
    },
    {
      "cells": [
        "Billing Country",
        "Address Information",
        "Input",
        "false",
        "France"
      ],
      "line": 161,
      "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;34"
    },
    {
      "cells": [
        "Shipping Street",
        "Address Information",
        "textArea",
        "false",
        "500, route de Vannes"
      ],
      "line": 162,
      "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;35"
    },
    {
      "cells": [
        "Shipping Zip/Postal Code",
        "Address Information",
        "Input",
        "false",
        "44000"
      ],
      "line": 163,
      "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;36"
    },
    {
      "cells": [
        "Shipping City",
        "Address Information",
        "Input",
        "false",
        "Nantes"
      ],
      "line": 164,
      "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;37"
    },
    {
      "cells": [
        "Shipping State/Province",
        "Address Information",
        "Input",
        "false",
        "Loire Atlantique"
      ],
      "line": 165,
      "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;38"
    },
    {
      "cells": [
        "Shipping Country",
        "Address Information",
        "Input",
        "false",
        "France"
      ],
      "line": 166,
      "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;39"
    },
    {
      "cells": [
        "Customer Priority",
        "Additional Information",
        "select",
        "false",
        "High"
      ],
      "line": 167,
      "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;40"
    },
    {
      "cells": [
        "Customer Priority",
        "Additional Information",
        "select",
        "false",
        "Low"
      ],
      "line": 168,
      "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;41"
    },
    {
      "cells": [
        "Customer Priority",
        "Additional Information",
        "select",
        "false",
        "Medium"
      ],
      "line": 169,
      "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;42"
    },
    {
      "cells": [
        "Customer Priority",
        "Additional Information",
        "select",
        "false",
        "High"
      ],
      "line": 170,
      "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;43"
    },
    {
      "cells": [
        "Number of Locations",
        "Additional Information",
        "Input",
        "false",
        "123"
      ],
      "line": 171,
      "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;44"
    },
    {
      "cells": [
        "Active",
        "Additional Information",
        "select",
        "false",
        "Yes"
      ],
      "line": 172,
      "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;45"
    },
    {
      "cells": [
        "Active",
        "Additional Information",
        "select",
        "false",
        "No"
      ],
      "line": 173,
      "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;46"
    },
    {
      "cells": [
        "Active",
        "Additional Information",
        "select",
        "false",
        "Yes"
      ],
      "line": 174,
      "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;47"
    },
    {
      "cells": [
        "SLA",
        "Additional Information",
        "select",
        "false",
        "Gold"
      ],
      "line": 175,
      "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;48"
    },
    {
      "cells": [
        "SLA",
        "Additional Information",
        "select",
        "false",
        "Silver"
      ],
      "line": 176,
      "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;49"
    },
    {
      "cells": [
        "SLA",
        "Additional Information",
        "select",
        "false",
        "Platinum"
      ],
      "line": 177,
      "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;50"
    },
    {
      "cells": [
        "SLA",
        "Additional Information",
        "select",
        "false",
        "Bronze"
      ],
      "line": 178,
      "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;51"
    },
    {
      "cells": [
        "SLA",
        "Additional Information",
        "select",
        "false",
        "Silver"
      ],
      "line": 179,
      "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;52"
    },
    {
      "cells": [
        "Upsell Opportunity",
        "Additional Information",
        "select",
        "false",
        "Maybe"
      ],
      "line": 180,
      "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;53"
    },
    {
      "cells": [
        "Upsell Opportunity",
        "Additional Information",
        "select",
        "false",
        "No"
      ],
      "line": 181,
      "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;54"
    },
    {
      "cells": [
        "Upsell Opportunity",
        "Additional Information",
        "select",
        "false",
        "Yes"
      ],
      "line": 182,
      "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;55"
    },
    {
      "cells": [
        "Description",
        "Description Information",
        "textArea",
        "false",
        "OK"
      ],
      "line": 183,
      "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;56"
    },
    {
      "cells": [
        "Parent Account",
        "Account Information",
        "searchField",
        "false",
        "Accenture"
      ],
      "line": 184,
      "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;57"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 129,
  "name": "Remplissage des champs de l\u0027Account",
  "description": "",
  "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "je remplis le champ Account Name de la section Account Information de type Input requis true avec la valeur ",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Account Name",
      "offset": 20
    },
    {
      "val": "Account Information",
      "offset": 47
    },
    {
      "val": "Input",
      "offset": 75
    },
    {
      "val": "true",
      "offset": 88
    },
    {
      "val": "",
      "offset": 108
    }
  ],
  "location": "AccountStep.fillNewAccountFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 405365504,
  "status": "passed"
});
formatter.after({
  "duration": 15858,
  "status": "passed"
});
formatter.scenario({
  "line": 130,
  "name": "Remplissage des champs de l\u0027Account",
  "description": "",
  "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "je remplis le champ Account Number de la section Account Information de type Input requis false avec la valeur 2121212121",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Account Number",
      "offset": 20
    },
    {
      "val": "Account Information",
      "offset": 49
    },
    {
      "val": "Input",
      "offset": 77
    },
    {
      "val": "false",
      "offset": 90
    },
    {
      "val": "2121212121",
      "offset": 111
    }
  ],
  "location": "AccountStep.fillNewAccountFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 154747876,
  "status": "passed"
});
formatter.after({
  "duration": 18124,
  "status": "passed"
});
formatter.scenario({
  "line": 131,
  "name": "Remplissage des champs de l\u0027Account",
  "description": "",
  "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "je remplis le champ Type de la section Account Information de type select requis false avec la valeur Other",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Type",
      "offset": 20
    },
    {
      "val": "Account Information",
      "offset": 39
    },
    {
      "val": "select",
      "offset": 67
    },
    {
      "val": "false",
      "offset": 81
    },
    {
      "val": "Other",
      "offset": 102
    }
  ],
  "location": "AccountStep.fillNewAccountFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 588676265,
  "status": "passed"
});
formatter.after({
  "duration": 56259,
  "status": "passed"
});
formatter.scenario({
  "line": 132,
  "name": "Remplissage des champs de l\u0027Account",
  "description": "",
  "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "je remplis le champ Type de la section Account Information de type select requis false avec la valeur Prospect",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Type",
      "offset": 20
    },
    {
      "val": "Account Information",
      "offset": 39
    },
    {
      "val": "select",
      "offset": 67
    },
    {
      "val": "false",
      "offset": 81
    },
    {
      "val": "Prospect",
      "offset": 102
    }
  ],
  "location": "AccountStep.fillNewAccountFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 533727251,
  "status": "passed"
});
formatter.after({
  "duration": 15858,
  "status": "passed"
});
formatter.scenario({
  "line": 133,
  "name": "Remplissage des champs de l\u0027Account",
  "description": "",
  "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "je remplis le champ Type de la section Account Information de type select requis false avec la valeur Customer - Direct",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Type",
      "offset": 20
    },
    {
      "val": "Account Information",
      "offset": 39
    },
    {
      "val": "select",
      "offset": 67
    },
    {
      "val": "false",
      "offset": 81
    },
    {
      "val": "Customer - Direct",
      "offset": 102
    }
  ],
  "location": "AccountStep.fillNewAccountFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 549691007,
  "status": "passed"
});
formatter.after({
  "duration": 17369,
  "status": "passed"
});
formatter.scenario({
  "line": 134,
  "name": "Remplissage des champs de l\u0027Account",
  "description": "",
  "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "je remplis le champ Type de la section Account Information de type select requis false avec la valeur Customer - Channel",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Type",
      "offset": 20
    },
    {
      "val": "Account Information",
      "offset": 39
    },
    {
      "val": "select",
      "offset": 67
    },
    {
      "val": "false",
      "offset": 81
    },
    {
      "val": "Customer - Channel",
      "offset": 102
    }
  ],
  "location": "AccountStep.fillNewAccountFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 513465490,
  "status": "passed"
});
formatter.after({
  "duration": 15858,
  "status": "passed"
});
formatter.scenario({
  "line": 135,
  "name": "Remplissage des champs de l\u0027Account",
  "description": "",
  "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "je remplis le champ Type de la section Account Information de type select requis false avec la valeur Channel Partner / Reseller",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Type",
      "offset": 20
    },
    {
      "val": "Account Information",
      "offset": 39
    },
    {
      "val": "select",
      "offset": 67
    },
    {
      "val": "false",
      "offset": 81
    },
    {
      "val": "Channel Partner / Reseller",
      "offset": 102
    }
  ],
  "location": "AccountStep.fillNewAccountFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 506263128,
  "status": "passed"
});
formatter.after({
  "duration": 32094,
  "status": "passed"
});
formatter.scenario({
  "line": 136,
  "name": "Remplissage des champs de l\u0027Account",
  "description": "",
  "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "je remplis le champ Type de la section Account Information de type select requis false avec la valeur Installation Partner",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Type",
      "offset": 20
    },
    {
      "val": "Account Information",
      "offset": 39
    },
    {
      "val": "select",
      "offset": 67
    },
    {
      "val": "false",
      "offset": 81
    },
    {
      "val": "Installation Partner",
      "offset": 102
    }
  ],
  "location": "AccountStep.fillNewAccountFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 520053904,
  "status": "passed"
});
formatter.after({
  "duration": 35870,
  "status": "passed"
});
formatter.scenario({
  "line": 137,
  "name": "Remplissage des champs de l\u0027Account",
  "description": "",
  "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "je remplis le champ Type de la section Account Information de type select requis false avec la valeur Technology Partner",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Type",
      "offset": 20
    },
    {
      "val": "Account Information",
      "offset": 39
    },
    {
      "val": "select",
      "offset": 67
    },
    {
      "val": "false",
      "offset": 81
    },
    {
      "val": "Technology Partner",
      "offset": 102
    }
  ],
  "location": "AccountStep.fillNewAccountFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 519573242,
  "status": "passed"
});
formatter.after({
  "duration": 18879,
  "status": "passed"
});
formatter.scenario({
  "line": 138,
  "name": "Remplissage des champs de l\u0027Account",
  "description": "",
  "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;11",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "je remplis le champ Type de la section Account Information de type select requis false avec la valeur Prospect",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Type",
      "offset": 20
    },
    {
      "val": "Account Information",
      "offset": 39
    },
    {
      "val": "select",
      "offset": 67
    },
    {
      "val": "false",
      "offset": 81
    },
    {
      "val": "Prospect",
      "offset": 102
    }
  ],
  "location": "AccountStep.fillNewAccountFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 495917404,
  "status": "passed"
});
formatter.after({
  "duration": 29451,
  "status": "passed"
});
formatter.scenario({
  "line": 139,
  "name": "Remplissage des champs de l\u0027Account",
  "description": "",
  "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;12",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "je remplis le champ Industry de la section Account Information de type select requis false avec la valeur Agriculture",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Industry",
      "offset": 20
    },
    {
      "val": "Account Information",
      "offset": 43
    },
    {
      "val": "select",
      "offset": 71
    },
    {
      "val": "false",
      "offset": 85
    },
    {
      "val": "Agriculture",
      "offset": 106
    }
  ],
  "location": "AccountStep.fillNewAccountFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 1083702576,
  "status": "passed"
});
formatter.after({
  "duration": 18502,
  "status": "passed"
});
formatter.scenario({
  "line": 140,
  "name": "Remplissage des champs de l\u0027Account",
  "description": "",
  "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;13",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "je remplis le champ Industry de la section Account Information de type select requis false avec la valeur Consulting",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Industry",
      "offset": 20
    },
    {
      "val": "Account Information",
      "offset": 43
    },
    {
      "val": "select",
      "offset": 71
    },
    {
      "val": "false",
      "offset": 85
    },
    {
      "val": "Consulting",
      "offset": 106
    }
  ],
  "location": "AccountStep.fillNewAccountFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 805083149,
  "status": "passed"
});
formatter.after({
  "duration": 18879,
  "status": "passed"
});
formatter.scenario({
  "line": 141,
  "name": "Remplissage des champs de l\u0027Account",
  "description": "",
  "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;14",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "je remplis le champ Industry de la section Account Information de type select requis false avec la valeur Energy",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Industry",
      "offset": 20
    },
    {
      "val": "Account Information",
      "offset": 43
    },
    {
      "val": "select",
      "offset": 71
    },
    {
      "val": "false",
      "offset": 85
    },
    {
      "val": "Energy",
      "offset": 106
    }
  ],
  "location": "AccountStep.fillNewAccountFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 747691185,
  "status": "passed"
});
formatter.after({
  "duration": 20012,
  "status": "passed"
});
formatter.scenario({
  "line": 142,
  "name": "Remplissage des champs de l\u0027Account",
  "description": "",
  "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;15",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "je remplis le champ Industry de la section Account Information de type select requis false avec la valeur Finance",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Industry",
      "offset": 20
    },
    {
      "val": "Account Information",
      "offset": 43
    },
    {
      "val": "select",
      "offset": 71
    },
    {
      "val": "false",
      "offset": 85
    },
    {
      "val": "Finance",
      "offset": 106
    }
  ],
  "location": "AccountStep.fillNewAccountFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 772414447,
  "status": "passed"
});
formatter.after({
  "duration": 33983,
  "status": "passed"
});
formatter.scenario({
  "line": 143,
  "name": "Remplissage des champs de l\u0027Account",
  "description": "",
  "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;16",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "je remplis le champ Industry de la section Account Information de type select requis false avec la valeur Media",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Industry",
      "offset": 20
    },
    {
      "val": "Account Information",
      "offset": 43
    },
    {
      "val": "select",
      "offset": 71
    },
    {
      "val": "false",
      "offset": 85
    },
    {
      "val": "Media",
      "offset": 106
    }
  ],
  "location": "AccountStep.fillNewAccountFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 758020674,
  "status": "passed"
});
formatter.after({
  "duration": 30584,
  "status": "passed"
});
formatter.scenario({
  "line": 144,
  "name": "Remplissage des champs de l\u0027Account",
  "description": "",
  "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;17",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "je remplis le champ Industry de la section Account Information de type select requis false avec la valeur Telecommunications",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Industry",
      "offset": 20
    },
    {
      "val": "Account Information",
      "offset": 43
    },
    {
      "val": "select",
      "offset": 71
    },
    {
      "val": "false",
      "offset": 85
    },
    {
      "val": "Telecommunications",
      "offset": 106
    }
  ],
  "location": "AccountStep.fillNewAccountFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 763302280,
  "status": "passed"
});
formatter.after({
  "duration": 18879,
  "status": "passed"
});
formatter.scenario({
  "line": 145,
  "name": "Remplissage des champs de l\u0027Account",
  "description": "",
  "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;18",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "je remplis le champ Annual Revenue de la section Account Information de type Input requis false avec la valeur 50 000",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Annual Revenue",
      "offset": 20
    },
    {
      "val": "Account Information",
      "offset": 49
    },
    {
      "val": "Input",
      "offset": 77
    },
    {
      "val": "false",
      "offset": 90
    },
    {
      "val": "50 000",
      "offset": 111
    }
  ],
  "location": "AccountStep.fillNewAccountFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 153680454,
  "status": "passed"
});
formatter.after({
  "duration": 18123,
  "status": "passed"
});
formatter.scenario({
  "line": 146,
  "name": "Remplissage des champs de l\u0027Account",
  "description": "",
  "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;19",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "je remplis le champ Rating de la section Account Information de type select requis false avec la valeur Hot",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Rating",
      "offset": 20
    },
    {
      "val": "Account Information",
      "offset": 41
    },
    {
      "val": "select",
      "offset": 69
    },
    {
      "val": "false",
      "offset": 83
    },
    {
      "val": "Hot",
      "offset": 104
    }
  ],
  "location": "AccountStep.fillNewAccountFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 551985945,
  "status": "passed"
});
formatter.after({
  "duration": 27941,
  "status": "passed"
});
formatter.scenario({
  "line": 147,
  "name": "Remplissage des champs de l\u0027Account",
  "description": "",
  "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;20",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "je remplis le champ Rating de la section Account Information de type select requis false avec la valeur Warm",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Rating",
      "offset": 20
    },
    {
      "val": "Account Information",
      "offset": 41
    },
    {
      "val": "select",
      "offset": 69
    },
    {
      "val": "false",
      "offset": 83
    },
    {
      "val": "Warm",
      "offset": 104
    }
  ],
  "location": "AccountStep.fillNewAccountFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 487518110,
  "status": "passed"
});
formatter.after({
  "duration": 19257,
  "status": "passed"
});
formatter.scenario({
  "line": 148,
  "name": "Remplissage des champs de l\u0027Account",
  "description": "",
  "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;21",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "je remplis le champ Rating de la section Account Information de type select requis false avec la valeur Cold",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Rating",
      "offset": 20
    },
    {
      "val": "Account Information",
      "offset": 41
    },
    {
      "val": "select",
      "offset": 69
    },
    {
      "val": "false",
      "offset": 83
    },
    {
      "val": "Cold",
      "offset": 104
    }
  ],
  "location": "AccountStep.fillNewAccountFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 457256865,
  "status": "passed"
});
formatter.after({
  "duration": 20389,
  "status": "passed"
});
formatter.scenario({
  "line": 149,
  "name": "Remplissage des champs de l\u0027Account",
  "description": "",
  "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;22",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "je remplis le champ Rating de la section Account Information de type select requis false avec la valeur Warm",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Rating",
      "offset": 20
    },
    {
      "val": "Account Information",
      "offset": 41
    },
    {
      "val": "select",
      "offset": 69
    },
    {
      "val": "false",
      "offset": 83
    },
    {
      "val": "Warm",
      "offset": 104
    }
  ],
  "location": "AccountStep.fillNewAccountFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 466207805,
  "status": "passed"
});
formatter.after({
  "duration": 25676,
  "status": "passed"
});
formatter.scenario({
  "line": 150,
  "name": "Remplissage des champs de l\u0027Account",
  "description": "",
  "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;23",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "je remplis le champ Phone de la section Account Information de type Input requis false avec la valeur 0202020202",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Phone",
      "offset": 20
    },
    {
      "val": "Account Information",
      "offset": 40
    },
    {
      "val": "Input",
      "offset": 68
    },
    {
      "val": "false",
      "offset": 81
    },
    {
      "val": "0202020202",
      "offset": 102
    }
  ],
  "location": "AccountStep.fillNewAccountFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 205834234,
  "status": "passed"
});
formatter.after({
  "duration": 18124,
  "status": "passed"
});
formatter.scenario({
  "line": 151,
  "name": "Remplissage des champs de l\u0027Account",
  "description": "",
  "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;24",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "je remplis le champ Fax de la section Account Information de type Input requis false avec la valeur 0404040404",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Fax",
      "offset": 20
    },
    {
      "val": "Account Information",
      "offset": 38
    },
    {
      "val": "Input",
      "offset": 66
    },
    {
      "val": "false",
      "offset": 79
    },
    {
      "val": "0404040404",
      "offset": 100
    }
  ],
  "location": "AccountStep.fillNewAccountFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 237740600,
  "status": "passed"
});
formatter.after({
  "duration": 17369,
  "status": "passed"
});
formatter.scenario({
  "line": 152,
  "name": "Remplissage des champs de l\u0027Account",
  "description": "",
  "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;25",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "je remplis le champ Website de la section Account Information de type Input requis false avec la valeur https://www.accenture.com",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Website",
      "offset": 20
    },
    {
      "val": "Account Information",
      "offset": 42
    },
    {
      "val": "Input",
      "offset": 70
    },
    {
      "val": "false",
      "offset": 83
    },
    {
      "val": "https://www.accenture.com",
      "offset": 104
    }
  ],
  "location": "AccountStep.fillNewAccountFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 233311572,
  "status": "passed"
});
formatter.after({
  "duration": 18124,
  "status": "passed"
});
formatter.scenario({
  "line": 153,
  "name": "Remplissage des champs de l\u0027Account",
  "description": "",
  "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;26",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "je remplis le champ Ownership de la section Account Information de type select requis false avec la valeur Public",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Ownership",
      "offset": 20
    },
    {
      "val": "Account Information",
      "offset": 44
    },
    {
      "val": "select",
      "offset": 72
    },
    {
      "val": "false",
      "offset": 86
    },
    {
      "val": "Public",
      "offset": 107
    }
  ],
  "location": "AccountStep.fillNewAccountFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 485536941,
  "status": "passed"
});
formatter.after({
  "duration": 18501,
  "status": "passed"
});
formatter.scenario({
  "line": 154,
  "name": "Remplissage des champs de l\u0027Account",
  "description": "",
  "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;27",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "je remplis le champ Ownership de la section Account Information de type select requis false avec la valeur Private",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Ownership",
      "offset": 20
    },
    {
      "val": "Account Information",
      "offset": 44
    },
    {
      "val": "select",
      "offset": 72
    },
    {
      "val": "false",
      "offset": 86
    },
    {
      "val": "Private",
      "offset": 107
    }
  ],
  "location": "AccountStep.fillNewAccountFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 481487383,
  "status": "passed"
});
formatter.after({
  "duration": 16991,
  "status": "passed"
});
formatter.scenario({
  "line": 155,
  "name": "Remplissage des champs de l\u0027Account",
  "description": "",
  "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;28",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "je remplis le champ Ownership de la section Account Information de type select requis false avec la valeur Subsidiary",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Ownership",
      "offset": 20
    },
    {
      "val": "Account Information",
      "offset": 44
    },
    {
      "val": "select",
      "offset": 72
    },
    {
      "val": "false",
      "offset": 86
    },
    {
      "val": "Subsidiary",
      "offset": 107
    }
  ],
  "location": "AccountStep.fillNewAccountFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 500104024,
  "status": "passed"
});
formatter.after({
  "duration": 18124,
  "status": "passed"
});
formatter.scenario({
  "line": 156,
  "name": "Remplissage des champs de l\u0027Account",
  "description": "",
  "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;29",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "je remplis le champ Ownership de la section Account Information de type select requis false avec la valeur Private",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Ownership",
      "offset": 20
    },
    {
      "val": "Account Information",
      "offset": 44
    },
    {
      "val": "select",
      "offset": 72
    },
    {
      "val": "false",
      "offset": 86
    },
    {
      "val": "Private",
      "offset": 107
    }
  ],
  "location": "AccountStep.fillNewAccountFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 461107061,
  "status": "passed"
});
formatter.after({
  "duration": 19634,
  "status": "passed"
});
formatter.scenario({
  "line": 157,
  "name": "Remplissage des champs de l\u0027Account",
  "description": "",
  "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;30",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "je remplis le champ Billing Street de la section Address Information de type textArea requis false avec la valeur 500, route de Vannes",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Billing Street",
      "offset": 20
    },
    {
      "val": "Address Information",
      "offset": 49
    },
    {
      "val": "textArea",
      "offset": 77
    },
    {
      "val": "false",
      "offset": 93
    },
    {
      "val": "500, route de Vannes",
      "offset": 114
    }
  ],
  "location": "AccountStep.fillNewAccountFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 254579210,
  "status": "passed"
});
formatter.after({
  "duration": 15481,
  "status": "passed"
});
formatter.scenario({
  "line": 158,
  "name": "Remplissage des champs de l\u0027Account",
  "description": "",
  "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;31",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "je remplis le champ Billing Zip/Postal Code de la section Address Information de type Input requis false avec la valeur 44000",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Billing Zip/Postal Code",
      "offset": 20
    },
    {
      "val": "Address Information",
      "offset": 58
    },
    {
      "val": "Input",
      "offset": 86
    },
    {
      "val": "false",
      "offset": 99
    },
    {
      "val": "44000",
      "offset": 120
    }
  ],
  "location": "AccountStep.fillNewAccountFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 201303637,
  "status": "passed"
});
formatter.after({
  "duration": 17368,
  "status": "passed"
});
formatter.scenario({
  "line": 159,
  "name": "Remplissage des champs de l\u0027Account",
  "description": "",
  "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;32",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "je remplis le champ Billing City de la section Address Information de type Input requis false avec la valeur Nantes",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Billing City",
      "offset": 20
    },
    {
      "val": "Address Information",
      "offset": 47
    },
    {
      "val": "Input",
      "offset": 75
    },
    {
      "val": "false",
      "offset": 88
    },
    {
      "val": "Nantes",
      "offset": 109
    }
  ],
  "location": "AccountStep.fillNewAccountFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 160236019,
  "status": "passed"
});
formatter.after({
  "duration": 15481,
  "status": "passed"
});
formatter.scenario({
  "line": 160,
  "name": "Remplissage des champs de l\u0027Account",
  "description": "",
  "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;33",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "je remplis le champ Billing State/Province de la section Address Information de type Input requis false avec la valeur Loire Atlantique",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Billing State/Province",
      "offset": 20
    },
    {
      "val": "Address Information",
      "offset": 57
    },
    {
      "val": "Input",
      "offset": 85
    },
    {
      "val": "false",
      "offset": 98
    },
    {
      "val": "Loire Atlantique",
      "offset": 119
    }
  ],
  "location": "AccountStep.fillNewAccountFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 199752155,
  "status": "passed"
});
formatter.after({
  "duration": 48331,
  "status": "passed"
});
formatter.scenario({
  "line": 161,
  "name": "Remplissage des champs de l\u0027Account",
  "description": "",
  "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;34",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "je remplis le champ Billing Country de la section Address Information de type Input requis false avec la valeur France",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Billing Country",
      "offset": 20
    },
    {
      "val": "Address Information",
      "offset": 50
    },
    {
      "val": "Input",
      "offset": 78
    },
    {
      "val": "false",
      "offset": 91
    },
    {
      "val": "France",
      "offset": 112
    }
  ],
  "location": "AccountStep.fillNewAccountFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 186338206,
  "status": "passed"
});
formatter.after({
  "duration": 29452,
  "status": "passed"
});
formatter.scenario({
  "line": 162,
  "name": "Remplissage des champs de l\u0027Account",
  "description": "",
  "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;35",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "je remplis le champ Shipping Street de la section Address Information de type textArea requis false avec la valeur 500, route de Vannes",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Shipping Street",
      "offset": 20
    },
    {
      "val": "Address Information",
      "offset": 50
    },
    {
      "val": "textArea",
      "offset": 78
    },
    {
      "val": "false",
      "offset": 94
    },
    {
      "val": "500, route de Vannes",
      "offset": 115
    }
  ],
  "location": "AccountStep.fillNewAccountFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 249376142,
  "status": "passed"
});
formatter.after({
  "duration": 27564,
  "status": "passed"
});
formatter.scenario({
  "line": 163,
  "name": "Remplissage des champs de l\u0027Account",
  "description": "",
  "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;36",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "je remplis le champ Shipping Zip/Postal Code de la section Address Information de type Input requis false avec la valeur 44000",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Shipping Zip/Postal Code",
      "offset": 20
    },
    {
      "val": "Address Information",
      "offset": 59
    },
    {
      "val": "Input",
      "offset": 87
    },
    {
      "val": "false",
      "offset": 100
    },
    {
      "val": "44000",
      "offset": 121
    }
  ],
  "location": "AccountStep.fillNewAccountFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 149147592,
  "status": "passed"
});
formatter.after({
  "duration": 19634,
  "status": "passed"
});
formatter.scenario({
  "line": 164,
  "name": "Remplissage des champs de l\u0027Account",
  "description": "",
  "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;37",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "je remplis le champ Shipping City de la section Address Information de type Input requis false avec la valeur Nantes",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Shipping City",
      "offset": 20
    },
    {
      "val": "Address Information",
      "offset": 48
    },
    {
      "val": "Input",
      "offset": 76
    },
    {
      "val": "false",
      "offset": 89
    },
    {
      "val": "Nantes",
      "offset": 110
    }
  ],
  "location": "AccountStep.fillNewAccountFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 149302400,
  "status": "passed"
});
formatter.after({
  "duration": 23787,
  "status": "passed"
});
formatter.scenario({
  "line": 165,
  "name": "Remplissage des champs de l\u0027Account",
  "description": "",
  "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;38",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "je remplis le champ Shipping State/Province de la section Address Information de type Input requis false avec la valeur Loire Atlantique",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Shipping State/Province",
      "offset": 20
    },
    {
      "val": "Address Information",
      "offset": 58
    },
    {
      "val": "Input",
      "offset": 86
    },
    {
      "val": "false",
      "offset": 99
    },
    {
      "val": "Loire Atlantique",
      "offset": 120
    }
  ],
  "location": "AccountStep.fillNewAccountFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 206754398,
  "status": "passed"
});
formatter.after({
  "duration": 28319,
  "status": "passed"
});
formatter.scenario({
  "line": 166,
  "name": "Remplissage des champs de l\u0027Account",
  "description": "",
  "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;39",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "je remplis le champ Shipping Country de la section Address Information de type Input requis false avec la valeur France",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Shipping Country",
      "offset": 20
    },
    {
      "val": "Address Information",
      "offset": 51
    },
    {
      "val": "Input",
      "offset": 79
    },
    {
      "val": "false",
      "offset": 92
    },
    {
      "val": "France",
      "offset": 113
    }
  ],
  "location": "AccountStep.fillNewAccountFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 140797006,
  "status": "passed"
});
formatter.after({
  "duration": 45687,
  "status": "passed"
});
formatter.scenario({
  "line": 167,
  "name": "Remplissage des champs de l\u0027Account",
  "description": "",
  "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;40",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "je remplis le champ Customer Priority de la section Additional Information de type select requis false avec la valeur High",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Customer Priority",
      "offset": 20
    },
    {
      "val": "Additional Information",
      "offset": 52
    },
    {
      "val": "select",
      "offset": 83
    },
    {
      "val": "false",
      "offset": 97
    },
    {
      "val": "High",
      "offset": 118
    }
  ],
  "location": "AccountStep.fillNewAccountFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 473157565,
  "status": "passed"
});
formatter.after({
  "duration": 18879,
  "status": "passed"
});
formatter.scenario({
  "line": 168,
  "name": "Remplissage des champs de l\u0027Account",
  "description": "",
  "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;41",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "je remplis le champ Customer Priority de la section Additional Information de type select requis false avec la valeur Low",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Customer Priority",
      "offset": 20
    },
    {
      "val": "Additional Information",
      "offset": 52
    },
    {
      "val": "select",
      "offset": 83
    },
    {
      "val": "false",
      "offset": 97
    },
    {
      "val": "Low",
      "offset": 118
    }
  ],
  "location": "AccountStep.fillNewAccountFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 464956879,
  "status": "passed"
});
formatter.after({
  "duration": 30584,
  "status": "passed"
});
formatter.scenario({
  "line": 169,
  "name": "Remplissage des champs de l\u0027Account",
  "description": "",
  "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;42",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "je remplis le champ Customer Priority de la section Additional Information de type select requis false avec la valeur Medium",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Customer Priority",
      "offset": 20
    },
    {
      "val": "Additional Information",
      "offset": 52
    },
    {
      "val": "select",
      "offset": 83
    },
    {
      "val": "false",
      "offset": 97
    },
    {
      "val": "Medium",
      "offset": 118
    }
  ],
  "location": "AccountStep.fillNewAccountFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 471054814,
  "status": "passed"
});
formatter.after({
  "duration": 18124,
  "status": "passed"
});
formatter.scenario({
  "line": 170,
  "name": "Remplissage des champs de l\u0027Account",
  "description": "",
  "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;43",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "je remplis le champ Customer Priority de la section Additional Information de type select requis false avec la valeur High",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Customer Priority",
      "offset": 20
    },
    {
      "val": "Additional Information",
      "offset": 52
    },
    {
      "val": "select",
      "offset": 83
    },
    {
      "val": "false",
      "offset": 97
    },
    {
      "val": "High",
      "offset": 118
    }
  ],
  "location": "AccountStep.fillNewAccountFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 448579671,
  "status": "passed"
});
formatter.after({
  "duration": 19256,
  "status": "passed"
});
formatter.scenario({
  "line": 171,
  "name": "Remplissage des champs de l\u0027Account",
  "description": "",
  "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;44",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "je remplis le champ Number of Locations de la section Additional Information de type Input requis false avec la valeur 123",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Number of Locations",
      "offset": 20
    },
    {
      "val": "Additional Information",
      "offset": 54
    },
    {
      "val": "Input",
      "offset": 85
    },
    {
      "val": "false",
      "offset": 98
    },
    {
      "val": "123",
      "offset": 119
    }
  ],
  "location": "AccountStep.fillNewAccountFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 131964249,
  "status": "passed"
});
formatter.after({
  "duration": 31339,
  "status": "passed"
});
formatter.scenario({
  "line": 172,
  "name": "Remplissage des champs de l\u0027Account",
  "description": "",
  "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;45",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "je remplis le champ Active de la section Additional Information de type select requis false avec la valeur Yes",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Active",
      "offset": 20
    },
    {
      "val": "Additional Information",
      "offset": 41
    },
    {
      "val": "select",
      "offset": 72
    },
    {
      "val": "false",
      "offset": 86
    },
    {
      "val": "Yes",
      "offset": 107
    }
  ],
  "location": "AccountStep.fillNewAccountFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 507908249,
  "status": "passed"
});
formatter.after({
  "duration": 43044,
  "status": "passed"
});
formatter.scenario({
  "line": 173,
  "name": "Remplissage des champs de l\u0027Account",
  "description": "",
  "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;46",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "je remplis le champ Active de la section Additional Information de type select requis false avec la valeur No",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Active",
      "offset": 20
    },
    {
      "val": "Additional Information",
      "offset": 41
    },
    {
      "val": "select",
      "offset": 72
    },
    {
      "val": "false",
      "offset": 86
    },
    {
      "val": "No",
      "offset": 107
    }
  ],
  "location": "AccountStep.fillNewAccountFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 612399313,
  "status": "passed"
});
formatter.after({
  "duration": 47575,
  "status": "passed"
});
formatter.scenario({
  "line": 174,
  "name": "Remplissage des champs de l\u0027Account",
  "description": "",
  "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;47",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "je remplis le champ Active de la section Additional Information de type select requis false avec la valeur Yes",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Active",
      "offset": 20
    },
    {
      "val": "Additional Information",
      "offset": 41
    },
    {
      "val": "select",
      "offset": 72
    },
    {
      "val": "false",
      "offset": 86
    },
    {
      "val": "Yes",
      "offset": 107
    }
  ],
  "location": "AccountStep.fillNewAccountFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 555779504,
  "status": "passed"
});
formatter.after({
  "duration": 19257,
  "status": "passed"
});
formatter.scenario({
  "line": 175,
  "name": "Remplissage des champs de l\u0027Account",
  "description": "",
  "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;48",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "je remplis le champ SLA de la section Additional Information de type select requis false avec la valeur Gold",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "SLA",
      "offset": 20
    },
    {
      "val": "Additional Information",
      "offset": 38
    },
    {
      "val": "select",
      "offset": 69
    },
    {
      "val": "false",
      "offset": 83
    },
    {
      "val": "Gold",
      "offset": 104
    }
  ],
  "location": "AccountStep.fillNewAccountFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 640802858,
  "status": "passed"
});
formatter.after({
  "duration": 27941,
  "status": "passed"
});
formatter.scenario({
  "line": 176,
  "name": "Remplissage des champs de l\u0027Account",
  "description": "",
  "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;49",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "je remplis le champ SLA de la section Additional Information de type select requis false avec la valeur Silver",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "SLA",
      "offset": 20
    },
    {
      "val": "Additional Information",
      "offset": 38
    },
    {
      "val": "select",
      "offset": 69
    },
    {
      "val": "false",
      "offset": 83
    },
    {
      "val": "Silver",
      "offset": 104
    }
  ],
  "location": "AccountStep.fillNewAccountFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 529517976,
  "status": "passed"
});
formatter.after({
  "duration": 24543,
  "status": "passed"
});
formatter.scenario({
  "line": 177,
  "name": "Remplissage des champs de l\u0027Account",
  "description": "",
  "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;50",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "je remplis le champ SLA de la section Additional Information de type select requis false avec la valeur Platinum",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "SLA",
      "offset": 20
    },
    {
      "val": "Additional Information",
      "offset": 38
    },
    {
      "val": "select",
      "offset": 69
    },
    {
      "val": "false",
      "offset": 83
    },
    {
      "val": "Platinum",
      "offset": 104
    }
  ],
  "location": "AccountStep.fillNewAccountFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 655070519,
  "status": "passed"
});
formatter.after({
  "duration": 26431,
  "status": "passed"
});
formatter.scenario({
  "line": 178,
  "name": "Remplissage des champs de l\u0027Account",
  "description": "",
  "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;51",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "je remplis le champ SLA de la section Additional Information de type select requis false avec la valeur Bronze",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "SLA",
      "offset": 20
    },
    {
      "val": "Additional Information",
      "offset": 38
    },
    {
      "val": "select",
      "offset": 69
    },
    {
      "val": "false",
      "offset": 83
    },
    {
      "val": "Bronze",
      "offset": 104
    }
  ],
  "location": "AccountStep.fillNewAccountFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 472573824,
  "status": "passed"
});
formatter.after({
  "duration": 38891,
  "status": "passed"
});
formatter.scenario({
  "line": 179,
  "name": "Remplissage des champs de l\u0027Account",
  "description": "",
  "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;52",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "je remplis le champ SLA de la section Additional Information de type select requis false avec la valeur Silver",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "SLA",
      "offset": 20
    },
    {
      "val": "Additional Information",
      "offset": 38
    },
    {
      "val": "select",
      "offset": 69
    },
    {
      "val": "false",
      "offset": 83
    },
    {
      "val": "Silver",
      "offset": 104
    }
  ],
  "location": "AccountStep.fillNewAccountFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 476153294,
  "status": "passed"
});
formatter.after({
  "duration": 38513,
  "status": "passed"
});
formatter.scenario({
  "line": 180,
  "name": "Remplissage des champs de l\u0027Account",
  "description": "",
  "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;53",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "je remplis le champ Upsell Opportunity de la section Additional Information de type select requis false avec la valeur Maybe",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Upsell Opportunity",
      "offset": 20
    },
    {
      "val": "Additional Information",
      "offset": 53
    },
    {
      "val": "select",
      "offset": 84
    },
    {
      "val": "false",
      "offset": 98
    },
    {
      "val": "Maybe",
      "offset": 119
    }
  ],
  "location": "AccountStep.fillNewAccountFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 531471581,
  "status": "passed"
});
formatter.after({
  "duration": 83823,
  "status": "passed"
});
formatter.scenario({
  "line": 181,
  "name": "Remplissage des champs de l\u0027Account",
  "description": "",
  "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;54",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "je remplis le champ Upsell Opportunity de la section Additional Information de type select requis false avec la valeur No",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Upsell Opportunity",
      "offset": 20
    },
    {
      "val": "Additional Information",
      "offset": 53
    },
    {
      "val": "select",
      "offset": 84
    },
    {
      "val": "false",
      "offset": 98
    },
    {
      "val": "No",
      "offset": 119
    }
  ],
  "location": "AccountStep.fillNewAccountFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 529362035,
  "status": "passed"
});
formatter.after({
  "duration": 19257,
  "status": "passed"
});
formatter.scenario({
  "line": 182,
  "name": "Remplissage des champs de l\u0027Account",
  "description": "",
  "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;55",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "je remplis le champ Upsell Opportunity de la section Additional Information de type select requis false avec la valeur Yes",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Upsell Opportunity",
      "offset": 20
    },
    {
      "val": "Additional Information",
      "offset": 53
    },
    {
      "val": "select",
      "offset": 84
    },
    {
      "val": "false",
      "offset": 98
    },
    {
      "val": "Yes",
      "offset": 119
    }
  ],
  "location": "AccountStep.fillNewAccountFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 468705882,
  "status": "passed"
});
formatter.after({
  "duration": 15859,
  "status": "passed"
});
formatter.scenario({
  "line": 183,
  "name": "Remplissage des champs de l\u0027Account",
  "description": "",
  "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;56",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "je remplis le champ Description de la section Description Information de type textArea requis false avec la valeur OK",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Description",
      "offset": 20
    },
    {
      "val": "Description Information",
      "offset": 46
    },
    {
      "val": "textArea",
      "offset": 78
    },
    {
      "val": "false",
      "offset": 94
    },
    {
      "val": "OK",
      "offset": 115
    }
  ],
  "location": "AccountStep.fillNewAccountFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 149416429,
  "status": "passed"
});
formatter.after({
  "duration": 14725,
  "status": "passed"
});
formatter.scenario({
  "line": 184,
  "name": "Remplissage des champs de l\u0027Account",
  "description": "",
  "id": "test-non-regression-account;remplissage-des-champs-de-l\u0027account;;57",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "je remplis le champ Parent Account de la section Account Information de type searchField requis false avec la valeur Accenture",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Parent Account",
      "offset": 20
    },
    {
      "val": "Account Information",
      "offset": 49
    },
    {
      "val": "searchField",
      "offset": 77
    },
    {
      "val": "false",
      "offset": 96
    },
    {
      "val": "Accenture",
      "offset": 117
    }
  ],
  "location": "AccountStep.fillNewAccountFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 2549553567,
  "status": "passed"
});
formatter.after({
  "duration": 29451,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 188,
  "name": "Enregistrer l\u0027Account",
  "description": "",
  "id": "test-non-regression-account;enregistrer-l\u0027account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 187,
      "name": "@CheckHomePage"
    }
  ]
});
formatter.step({
  "line": 189,
  "name": "je clique sur le bouton \"Save\"",
  "keyword": "When "
});
formatter.step({
  "line": 190,
  "name": "je remplis le champ \u003celementName\u003e de la section \u003csectionName\u003e de type \u003celementType\u003e requis \u003crequired\u003e avec la valeur \u003cvalues\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 191,
  "name": "je clique sur le bouton \"Save\"",
  "keyword": "When "
});
formatter.examples({
  "line": 193,
  "name": "",
  "description": "",
  "id": "test-non-regression-account;enregistrer-l\u0027account;",
  "rows": [
    {
      "cells": [
        "elementName",
        "sectionName",
        "elementType",
        "required",
        "values"
      ],
      "line": 194,
      "id": "test-non-regression-account;enregistrer-l\u0027account;;1"
    },
    {
      "cells": [
        "Parent Account",
        "Account Information",
        "select_searchField",
        "false",
        "Accenture Nantes"
      ],
      "line": 195,
      "id": "test-non-regression-account;enregistrer-l\u0027account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 195,
  "name": "Enregistrer l\u0027Account",
  "description": "",
  "id": "test-non-regression-account;enregistrer-l\u0027account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    },
    {
      "line": 187,
      "name": "@CheckHomePage"
    }
  ]
});
formatter.step({
  "line": 189,
  "name": "je clique sur le bouton \"Save\"",
  "keyword": "When "
});
formatter.step({
  "line": 190,
  "name": "je remplis le champ Parent Account de la section Account Information de type select_searchField requis false avec la valeur Accenture Nantes",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 191,
  "name": "je clique sur le bouton \"Save\"",
  "keyword": "When "
});
formatter.match({
  "location": "AccountStep.clickSaveButton()"
});
formatter.result({
  "duration": 4144631342,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Parent Account",
      "offset": 20
    },
    {
      "val": "Account Information",
      "offset": 49
    },
    {
      "val": "select_searchField",
      "offset": 77
    },
    {
      "val": "false",
      "offset": 103
    },
    {
      "val": "Accenture Nantes",
      "offset": 124
    }
  ],
  "location": "AccountStep.fillNewAccountFields(String,String,String,String,String)"
});
formatter.result({
  "duration": 2532909788,
  "status": "passed"
});
formatter.match({
  "location": "AccountStep.clickSaveButton()"
});
formatter.result({
  "duration": 4106388410,
  "status": "passed"
});
formatter.after({
  "duration": 18124,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 198,
  "name": "Verification de la presence des Related Lists",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-related-lists",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 199,
  "name": "je verifie la presence du label \u003clabelName\u003e de la section \u003csectionName\u003e et son type \u003celementType\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 201,
  "name": "",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-related-lists;",
  "rows": [
    {
      "cells": [
        "labelName",
        "sectionName",
        "elementType"
      ],
      "line": 202,
      "id": "test-non-regression-account;verification-de-la-presence-des-related-lists;;1"
    },
    {
      "cells": [
        "Contacts",
        "",
        "Related List"
      ],
      "line": 203,
      "id": "test-non-regression-account;verification-de-la-presence-des-related-lists;;2"
    },
    {
      "cells": [
        "Opportunities",
        "",
        "Related List"
      ],
      "line": 204,
      "id": "test-non-regression-account;verification-de-la-presence-des-related-lists;;3"
    },
    {
      "cells": [
        "Cases",
        "",
        "Related List"
      ],
      "line": 205,
      "id": "test-non-regression-account;verification-de-la-presence-des-related-lists;;4"
    },
    {
      "cells": [
        "Notes \u0026 Attachments",
        "",
        "Related List"
      ],
      "line": 206,
      "id": "test-non-regression-account;verification-de-la-presence-des-related-lists;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 203,
  "name": "Verification de la presence des Related Lists",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-related-lists;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 199,
  "name": "je verifie la presence du label Contacts de la section  et son type Related List",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Contacts",
      "offset": 32
    },
    {
      "val": "",
      "offset": 55
    },
    {
      "val": "Related List",
      "offset": 68
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 19497537,
  "status": "passed"
});
formatter.after({
  "duration": 16613,
  "status": "passed"
});
formatter.scenario({
  "line": 204,
  "name": "Verification de la presence des Related Lists",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-related-lists;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 199,
  "name": "je verifie la presence du label Opportunities de la section  et son type Related List",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Opportunities",
      "offset": 32
    },
    {
      "val": "",
      "offset": 60
    },
    {
      "val": "Related List",
      "offset": 73
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 16772534,
  "status": "passed"
});
formatter.after({
  "duration": 15481,
  "status": "passed"
});
formatter.scenario({
  "line": 205,
  "name": "Verification de la presence des Related Lists",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-related-lists;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 199,
  "name": "je verifie la presence du label Cases de la section  et son type Related List",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Cases",
      "offset": 32
    },
    {
      "val": "",
      "offset": 52
    },
    {
      "val": "Related List",
      "offset": 65
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 16368145,
  "status": "passed"
});
formatter.after({
  "duration": 14348,
  "status": "passed"
});
formatter.scenario({
  "line": 206,
  "name": "Verification de la presence des Related Lists",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-related-lists;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 199,
  "name": "je verifie la presence du label Notes \u0026 Attachments de la section  et son type Related List",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Notes \u0026 Attachments",
      "offset": 32
    },
    {
      "val": "",
      "offset": 66
    },
    {
      "val": "Related List",
      "offset": 79
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 15278067,
  "status": "passed"
});
formatter.after({
  "duration": 13215,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 209,
  "name": "Cliquer sur les onglets",
  "description": "",
  "id": "test-non-regression-account;cliquer-sur-les-onglets",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 208,
      "name": "@Lightning"
    }
  ]
});
formatter.step({
  "line": 210,
  "name": "je clique sur la vue \u003conglet\u003e Light",
  "keyword": "Then "
});
formatter.examples({
  "line": 212,
  "name": "",
  "description": "",
  "id": "test-non-regression-account;cliquer-sur-les-onglets;",
  "rows": [
    {
      "cells": [
        "onglet"
      ],
      "line": 213,
      "id": "test-non-regression-account;cliquer-sur-les-onglets;;1"
    },
    {
      "cells": [
        "News"
      ],
      "line": 214,
      "id": "test-non-regression-account;cliquer-sur-les-onglets;;2"
    },
    {
      "cells": [
        "Related"
      ],
      "line": 215,
      "id": "test-non-regression-account;cliquer-sur-les-onglets;;3"
    },
    {
      "cells": [
        "Details"
      ],
      "line": 216,
      "id": "test-non-regression-account;cliquer-sur-les-onglets;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 214,
  "name": "Cliquer sur les onglets",
  "description": "",
  "id": "test-non-regression-account;cliquer-sur-les-onglets;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 208,
      "name": "@Lightning"
    },
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 210,
  "name": "je clique sur la vue News Light",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "News",
      "offset": 21
    }
  ],
  "location": "AccountStep.accessView(String)"
});
formatter.result({
  "duration": 2124735080,
  "status": "passed"
});
formatter.after({
  "duration": 19635,
  "status": "passed"
});
formatter.scenario({
  "line": 215,
  "name": "Cliquer sur les onglets",
  "description": "",
  "id": "test-non-regression-account;cliquer-sur-les-onglets;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 208,
      "name": "@Lightning"
    },
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 210,
  "name": "je clique sur la vue Related Light",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Related",
      "offset": 21
    }
  ],
  "location": "AccountStep.accessView(String)"
});
formatter.result({
  "duration": 2085485515,
  "status": "passed"
});
formatter.after({
  "duration": 16991,
  "status": "passed"
});
formatter.scenario({
  "line": 216,
  "name": "Cliquer sur les onglets",
  "description": "",
  "id": "test-non-regression-account;cliquer-sur-les-onglets;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 208,
      "name": "@Lightning"
    },
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 210,
  "name": "je clique sur la vue Details Light",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Details",
      "offset": 21
    }
  ],
  "location": "AccountStep.accessView(String)"
});
formatter.result({
  "duration": 2092812855,
  "status": "passed"
});
formatter.after({
  "duration": 45310,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 219,
  "name": "Verification de la presence des champs dans la page d\u0027Account (Affichage du record)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs-dans-la-page-d\u0027account-(affichage-du-record)",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 220,
  "name": "je verifie la presence du label \u003clabelName\u003e de la section \u003csectionName\u003e et son type \u003celementType\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 222,
  "name": "",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs-dans-la-page-d\u0027account-(affichage-du-record);",
  "rows": [
    {
      "cells": [
        "labelName",
        "sectionName",
        "elementType"
      ],
      "line": 223,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs-dans-la-page-d\u0027account-(affichage-du-record);;1"
    },
    {
      "cells": [
        "Account Owner",
        "",
        "Label View"
      ],
      "line": 224,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs-dans-la-page-d\u0027account-(affichage-du-record);;2"
    },
    {
      "cells": [
        "Account Name",
        "",
        "Label View"
      ],
      "line": 225,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs-dans-la-page-d\u0027account-(affichage-du-record);;3"
    },
    {
      "cells": [
        "Parent Account",
        "",
        "Label View"
      ],
      "line": 226,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs-dans-la-page-d\u0027account-(affichage-du-record);;4"
    },
    {
      "cells": [
        "Account Number",
        "",
        "Label View"
      ],
      "line": 227,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs-dans-la-page-d\u0027account-(affichage-du-record);;5"
    },
    {
      "cells": [
        "Account Site",
        "",
        "Label View"
      ],
      "line": 228,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs-dans-la-page-d\u0027account-(affichage-du-record);;6"
    },
    {
      "cells": [
        "Type",
        "",
        "Label View"
      ],
      "line": 229,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs-dans-la-page-d\u0027account-(affichage-du-record);;7"
    },
    {
      "cells": [
        "Industry",
        "",
        "Label View"
      ],
      "line": 230,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs-dans-la-page-d\u0027account-(affichage-du-record);;8"
    },
    {
      "cells": [
        "Annual Revenue",
        "",
        "Label View"
      ],
      "line": 231,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs-dans-la-page-d\u0027account-(affichage-du-record);;9"
    },
    {
      "cells": [
        "Rating",
        "",
        "Label View"
      ],
      "line": 232,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs-dans-la-page-d\u0027account-(affichage-du-record);;10"
    },
    {
      "cells": [
        "Phone",
        "",
        "Label View"
      ],
      "line": 233,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs-dans-la-page-d\u0027account-(affichage-du-record);;11"
    },
    {
      "cells": [
        "Fax",
        "",
        "Label View"
      ],
      "line": 234,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs-dans-la-page-d\u0027account-(affichage-du-record);;12"
    },
    {
      "cells": [
        "Website",
        "",
        "Label View"
      ],
      "line": 235,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs-dans-la-page-d\u0027account-(affichage-du-record);;13"
    },
    {
      "cells": [
        "Ticker Symbol",
        "",
        "Label View"
      ],
      "line": 236,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs-dans-la-page-d\u0027account-(affichage-du-record);;14"
    },
    {
      "cells": [
        "Ownership",
        "",
        "Label View"
      ],
      "line": 237,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs-dans-la-page-d\u0027account-(affichage-du-record);;15"
    },
    {
      "cells": [
        "Employees",
        "",
        "Label View"
      ],
      "line": 238,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs-dans-la-page-d\u0027account-(affichage-du-record);;16"
    },
    {
      "cells": [
        "SIC Code",
        "",
        "Label View"
      ],
      "line": 239,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs-dans-la-page-d\u0027account-(affichage-du-record);;17"
    },
    {
      "cells": [
        "Billing Address",
        "",
        "Label View"
      ],
      "line": 240,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs-dans-la-page-d\u0027account-(affichage-du-record);;18"
    },
    {
      "cells": [
        "Shipping Address",
        "",
        "Label View"
      ],
      "line": 241,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs-dans-la-page-d\u0027account-(affichage-du-record);;19"
    },
    {
      "cells": [
        "Customer Priority",
        "",
        "Label View"
      ],
      "line": 242,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs-dans-la-page-d\u0027account-(affichage-du-record);;20"
    },
    {
      "cells": [
        "SLA Expiration Date",
        "",
        "Label View"
      ],
      "line": 243,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs-dans-la-page-d\u0027account-(affichage-du-record);;21"
    },
    {
      "cells": [
        "Number of Locations",
        "",
        "Label View"
      ],
      "line": 244,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs-dans-la-page-d\u0027account-(affichage-du-record);;22"
    },
    {
      "cells": [
        "Active",
        "",
        "Label View"
      ],
      "line": 245,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs-dans-la-page-d\u0027account-(affichage-du-record);;23"
    },
    {
      "cells": [
        "SLA",
        "",
        "Label View"
      ],
      "line": 246,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs-dans-la-page-d\u0027account-(affichage-du-record);;24"
    },
    {
      "cells": [
        "SLA Serial Number",
        "",
        "Label View"
      ],
      "line": 247,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs-dans-la-page-d\u0027account-(affichage-du-record);;25"
    },
    {
      "cells": [
        "Upsell Opportunity",
        "",
        "Label View"
      ],
      "line": 248,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs-dans-la-page-d\u0027account-(affichage-du-record);;26"
    },
    {
      "cells": [
        "Description",
        "",
        "Label View"
      ],
      "line": 249,
      "id": "test-non-regression-account;verification-de-la-presence-des-champs-dans-la-page-d\u0027account-(affichage-du-record);;27"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 224,
  "name": "Verification de la presence des champs dans la page d\u0027Account (Affichage du record)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs-dans-la-page-d\u0027account-(affichage-du-record);;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 220,
  "name": "je verifie la presence du label Account Owner de la section  et son type Label View",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Account Owner",
      "offset": 32
    },
    {
      "val": "",
      "offset": 60
    },
    {
      "val": "Label View",
      "offset": 73
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 24201822,
  "status": "passed"
});
formatter.after({
  "duration": 13215,
  "status": "passed"
});
formatter.scenario({
  "line": 225,
  "name": "Verification de la presence des champs dans la page d\u0027Account (Affichage du record)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs-dans-la-page-d\u0027account-(affichage-du-record);;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 220,
  "name": "je verifie la presence du label Account Name de la section  et son type Label View",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Account Name",
      "offset": 32
    },
    {
      "val": "",
      "offset": 59
    },
    {
      "val": "Label View",
      "offset": 72
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 25344760,
  "status": "passed"
});
formatter.after({
  "duration": 14348,
  "status": "passed"
});
formatter.scenario({
  "line": 226,
  "name": "Verification de la presence des champs dans la page d\u0027Account (Affichage du record)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs-dans-la-page-d\u0027account-(affichage-du-record);;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 220,
  "name": "je verifie la presence du label Parent Account de la section  et son type Label View",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Parent Account",
      "offset": 32
    },
    {
      "val": "",
      "offset": 61
    },
    {
      "val": "Label View",
      "offset": 74
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 25723473,
  "status": "passed"
});
formatter.after({
  "duration": 16613,
  "status": "passed"
});
formatter.scenario({
  "line": 227,
  "name": "Verification de la presence des champs dans la page d\u0027Account (Affichage du record)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs-dans-la-page-d\u0027account-(affichage-du-record);;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 220,
  "name": "je verifie la presence du label Account Number de la section  et son type Label View",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Account Number",
      "offset": 32
    },
    {
      "val": "",
      "offset": 61
    },
    {
      "val": "Label View",
      "offset": 74
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 23944689,
  "status": "passed"
});
formatter.after({
  "duration": 16614,
  "status": "passed"
});
formatter.scenario({
  "line": 228,
  "name": "Verification de la presence des champs dans la page d\u0027Account (Affichage du record)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs-dans-la-page-d\u0027account-(affichage-du-record);;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 220,
  "name": "je verifie la presence du label Account Site de la section  et son type Label View",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Account Site",
      "offset": 32
    },
    {
      "val": "",
      "offset": 59
    },
    {
      "val": "Label View",
      "offset": 72
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 23571261,
  "status": "passed"
});
formatter.after({
  "duration": 15859,
  "status": "passed"
});
formatter.scenario({
  "line": 229,
  "name": "Verification de la presence des champs dans la page d\u0027Account (Affichage du record)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs-dans-la-page-d\u0027account-(affichage-du-record);;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 220,
  "name": "je verifie la presence du label Type de la section  et son type Label View",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Type",
      "offset": 32
    },
    {
      "val": "",
      "offset": 51
    },
    {
      "val": "Label View",
      "offset": 64
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 26068583,
  "status": "passed"
});
formatter.after({
  "duration": 15103,
  "status": "passed"
});
formatter.scenario({
  "line": 230,
  "name": "Verification de la presence des champs dans la page d\u0027Account (Affichage du record)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs-dans-la-page-d\u0027account-(affichage-du-record);;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 220,
  "name": "je verifie la presence du label Industry de la section  et son type Label View",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Industry",
      "offset": 32
    },
    {
      "val": "",
      "offset": 55
    },
    {
      "val": "Label View",
      "offset": 68
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 22247084,
  "status": "passed"
});
formatter.after({
  "duration": 13593,
  "status": "passed"
});
formatter.scenario({
  "line": 231,
  "name": "Verification de la presence des champs dans la page d\u0027Account (Affichage du record)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs-dans-la-page-d\u0027account-(affichage-du-record);;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 220,
  "name": "je verifie la presence du label Annual Revenue de la section  et son type Label View",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Annual Revenue",
      "offset": 32
    },
    {
      "val": "",
      "offset": 61
    },
    {
      "val": "Label View",
      "offset": 74
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 28207958,
  "status": "passed"
});
formatter.after({
  "duration": 13215,
  "status": "passed"
});
formatter.scenario({
  "line": 232,
  "name": "Verification de la presence des champs dans la page d\u0027Account (Affichage du record)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs-dans-la-page-d\u0027account-(affichage-du-record);;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 220,
  "name": "je verifie la presence du label Rating de la section  et son type Label View",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Rating",
      "offset": 32
    },
    {
      "val": "",
      "offset": 53
    },
    {
      "val": "Label View",
      "offset": 66
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 23251827,
  "status": "passed"
});
formatter.after({
  "duration": 18879,
  "status": "passed"
});
formatter.scenario({
  "line": 233,
  "name": "Verification de la presence des champs dans la page d\u0027Account (Affichage du record)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs-dans-la-page-d\u0027account-(affichage-du-record);;11",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 220,
  "name": "je verifie la presence du label Phone de la section  et son type Label View",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Phone",
      "offset": 32
    },
    {
      "val": "",
      "offset": 52
    },
    {
      "val": "Label View",
      "offset": 65
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 27450152,
  "status": "passed"
});
formatter.after({
  "duration": 18879,
  "status": "passed"
});
formatter.scenario({
  "line": 234,
  "name": "Verification de la presence des champs dans la page d\u0027Account (Affichage du record)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs-dans-la-page-d\u0027account-(affichage-du-record);;12",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 220,
  "name": "je verifie la presence du label Fax de la section  et son type Label View",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Fax",
      "offset": 32
    },
    {
      "val": "",
      "offset": 50
    },
    {
      "val": "Label View",
      "offset": 63
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 26332512,
  "status": "passed"
});
formatter.after({
  "duration": 14348,
  "status": "passed"
});
formatter.scenario({
  "line": 235,
  "name": "Verification de la presence des champs dans la page d\u0027Account (Affichage du record)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs-dans-la-page-d\u0027account-(affichage-du-record);;13",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 220,
  "name": "je verifie la presence du label Website de la section  et son type Label View",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Website",
      "offset": 32
    },
    {
      "val": "",
      "offset": 54
    },
    {
      "val": "Label View",
      "offset": 67
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 22853479,
  "status": "passed"
});
formatter.after({
  "duration": 16613,
  "status": "passed"
});
formatter.scenario({
  "line": 236,
  "name": "Verification de la presence des champs dans la page d\u0027Account (Affichage du record)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs-dans-la-page-d\u0027account-(affichage-du-record);;14",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 220,
  "name": "je verifie la presence du label Ticker Symbol de la section  et son type Label View",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Ticker Symbol",
      "offset": 32
    },
    {
      "val": "",
      "offset": 60
    },
    {
      "val": "Label View",
      "offset": 73
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 23791391,
  "status": "passed"
});
formatter.after({
  "duration": 15103,
  "status": "passed"
});
formatter.scenario({
  "line": 237,
  "name": "Verification de la presence des champs dans la page d\u0027Account (Affichage du record)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs-dans-la-page-d\u0027account-(affichage-du-record);;15",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 220,
  "name": "je verifie la presence du label Ownership de la section  et son type Label View",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Ownership",
      "offset": 32
    },
    {
      "val": "",
      "offset": 56
    },
    {
      "val": "Label View",
      "offset": 69
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 21967296,
  "status": "passed"
});
formatter.after({
  "duration": 16991,
  "status": "passed"
});
formatter.scenario({
  "line": 238,
  "name": "Verification de la presence des champs dans la page d\u0027Account (Affichage du record)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs-dans-la-page-d\u0027account-(affichage-du-record);;16",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 220,
  "name": "je verifie la presence du label Employees de la section  et son type Label View",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Employees",
      "offset": 32
    },
    {
      "val": "",
      "offset": 56
    },
    {
      "val": "Label View",
      "offset": 69
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 37278969,
  "status": "passed"
});
formatter.after({
  "duration": 12838,
  "status": "passed"
});
formatter.scenario({
  "line": 239,
  "name": "Verification de la presence des champs dans la page d\u0027Account (Affichage du record)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs-dans-la-page-d\u0027account-(affichage-du-record);;17",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 220,
  "name": "je verifie la presence du label SIC Code de la section  et son type Label View",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "SIC Code",
      "offset": 32
    },
    {
      "val": "",
      "offset": 55
    },
    {
      "val": "Label View",
      "offset": 68
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 23850293,
  "status": "passed"
});
formatter.after({
  "duration": 13215,
  "status": "passed"
});
formatter.scenario({
  "line": 240,
  "name": "Verification de la presence des champs dans la page d\u0027Account (Affichage du record)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs-dans-la-page-d\u0027account-(affichage-du-record);;18",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 220,
  "name": "je verifie la presence du label Billing Address de la section  et son type Label View",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Billing Address",
      "offset": 32
    },
    {
      "val": "",
      "offset": 62
    },
    {
      "val": "Label View",
      "offset": 75
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 24581669,
  "status": "passed"
});
formatter.after({
  "duration": 14726,
  "status": "passed"
});
formatter.scenario({
  "line": 241,
  "name": "Verification de la presence des champs dans la page d\u0027Account (Affichage du record)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs-dans-la-page-d\u0027account-(affichage-du-record);;19",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 220,
  "name": "je verifie la presence du label Shipping Address de la section  et son type Label View",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Shipping Address",
      "offset": 32
    },
    {
      "val": "",
      "offset": 63
    },
    {
      "val": "Label View",
      "offset": 76
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 21203449,
  "status": "passed"
});
formatter.after({
  "duration": 13970,
  "status": "passed"
});
formatter.scenario({
  "line": 242,
  "name": "Verification de la presence des champs dans la page d\u0027Account (Affichage du record)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs-dans-la-page-d\u0027account-(affichage-du-record);;20",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 220,
  "name": "je verifie la presence du label Customer Priority de la section  et son type Label View",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Customer Priority",
      "offset": 32
    },
    {
      "val": "",
      "offset": 64
    },
    {
      "val": "Label View",
      "offset": 77
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 21612370,
  "status": "passed"
});
formatter.after({
  "duration": 13592,
  "status": "passed"
});
formatter.scenario({
  "line": 243,
  "name": "Verification de la presence des champs dans la page d\u0027Account (Affichage du record)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs-dans-la-page-d\u0027account-(affichage-du-record);;21",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 220,
  "name": "je verifie la presence du label SLA Expiration Date de la section  et son type Label View",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "SLA Expiration Date",
      "offset": 32
    },
    {
      "val": "",
      "offset": 66
    },
    {
      "val": "Label View",
      "offset": 79
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 24912429,
  "status": "passed"
});
formatter.after({
  "duration": 13970,
  "status": "passed"
});
formatter.scenario({
  "line": 244,
  "name": "Verification de la presence des champs dans la page d\u0027Account (Affichage du record)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs-dans-la-page-d\u0027account-(affichage-du-record);;22",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 220,
  "name": "je verifie la presence du label Number of Locations de la section  et son type Label View",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Number of Locations",
      "offset": 32
    },
    {
      "val": "",
      "offset": 66
    },
    {
      "val": "Label View",
      "offset": 79
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 21930293,
  "status": "passed"
});
formatter.after({
  "duration": 18879,
  "status": "passed"
});
formatter.scenario({
  "line": 245,
  "name": "Verification de la presence des champs dans la page d\u0027Account (Affichage du record)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs-dans-la-page-d\u0027account-(affichage-du-record);;23",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 220,
  "name": "je verifie la presence du label Active de la section  et son type Label View",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Active",
      "offset": 32
    },
    {
      "val": "",
      "offset": 53
    },
    {
      "val": "Label View",
      "offset": 66
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 21265750,
  "status": "passed"
});
formatter.after({
  "duration": 33982,
  "status": "passed"
});
formatter.scenario({
  "line": 246,
  "name": "Verification de la presence des champs dans la page d\u0027Account (Affichage du record)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs-dans-la-page-d\u0027account-(affichage-du-record);;24",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 220,
  "name": "je verifie la presence du label SLA de la section  et son type Label View",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "SLA",
      "offset": 32
    },
    {
      "val": "",
      "offset": 50
    },
    {
      "val": "Label View",
      "offset": 63
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 37401305,
  "status": "passed"
});
formatter.after({
  "duration": 18879,
  "status": "passed"
});
formatter.scenario({
  "line": 247,
  "name": "Verification de la presence des champs dans la page d\u0027Account (Affichage du record)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs-dans-la-page-d\u0027account-(affichage-du-record);;25",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 220,
  "name": "je verifie la presence du label SLA Serial Number de la section  et son type Label View",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "SLA Serial Number",
      "offset": 32
    },
    {
      "val": "",
      "offset": 64
    },
    {
      "val": "Label View",
      "offset": 77
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 44442062,
  "status": "passed"
});
formatter.after({
  "duration": 15859,
  "status": "passed"
});
formatter.scenario({
  "line": 248,
  "name": "Verification de la presence des champs dans la page d\u0027Account (Affichage du record)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs-dans-la-page-d\u0027account-(affichage-du-record);;26",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 220,
  "name": "je verifie la presence du label Upsell Opportunity de la section  et son type Label View",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Upsell Opportunity",
      "offset": 32
    },
    {
      "val": "",
      "offset": 65
    },
    {
      "val": "Label View",
      "offset": 78
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 38493270,
  "status": "passed"
});
formatter.after({
  "duration": 17369,
  "status": "passed"
});
formatter.scenario({
  "line": 249,
  "name": "Verification de la presence des champs dans la page d\u0027Account (Affichage du record)",
  "description": "",
  "id": "test-non-regression-account;verification-de-la-presence-des-champs-dans-la-page-d\u0027account-(affichage-du-record);;27",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 220,
  "name": "je verifie la presence du label Description de la section  et son type Label View",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Description",
      "offset": 32
    },
    {
      "val": "",
      "offset": 58
    },
    {
      "val": "Label View",
      "offset": 71
    }
  ],
  "location": "AccountStep.checkNewAccountVisibleFields(String,String,String)"
});
formatter.result({
  "duration": 27944029,
  "status": "passed"
});
formatter.after({
  "duration": 18502,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 252,
  "name": "Verification des valeurs renseignees dans les champs  de la page d\u0027Account (Affichage du record)",
  "description": "",
  "id": "test-non-regression-account;verification-des-valeurs-renseignees-dans-les-champs--de-la-page-d\u0027account-(affichage-du-record)",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 253,
  "name": "je verifie que dans le champ \u003clabelName\u003e contient la valeur \u003cvalue\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 255,
  "name": "",
  "description": "",
  "id": "test-non-regression-account;verification-des-valeurs-renseignees-dans-les-champs--de-la-page-d\u0027account-(affichage-du-record);",
  "rows": [
    {
      "cells": [
        "labelName",
        "value"
      ],
      "line": 256,
      "id": "test-non-regression-account;verification-des-valeurs-renseignees-dans-les-champs--de-la-page-d\u0027account-(affichage-du-record);;1"
    },
    {
      "cells": [
        "Account Name",
        "Non Regression -"
      ],
      "line": 257,
      "id": "test-non-regression-account;verification-des-valeurs-renseignees-dans-les-champs--de-la-page-d\u0027account-(affichage-du-record);;2"
    },
    {
      "cells": [
        "Parent Account",
        "Accenture Nantes"
      ],
      "line": 258,
      "id": "test-non-regression-account;verification-des-valeurs-renseignees-dans-les-champs--de-la-page-d\u0027account-(affichage-du-record);;3"
    },
    {
      "cells": [
        "Account Number",
        "2121212121"
      ],
      "line": 259,
      "id": "test-non-regression-account;verification-des-valeurs-renseignees-dans-les-champs--de-la-page-d\u0027account-(affichage-du-record);;4"
    },
    {
      "cells": [
        "Type",
        "Prospect"
      ],
      "line": 260,
      "id": "test-non-regression-account;verification-des-valeurs-renseignees-dans-les-champs--de-la-page-d\u0027account-(affichage-du-record);;5"
    },
    {
      "cells": [
        "Industry",
        "Telecommunications"
      ],
      "line": 261,
      "id": "test-non-regression-account;verification-des-valeurs-renseignees-dans-les-champs--de-la-page-d\u0027account-(affichage-du-record);;6"
    },
    {
      "cells": [
        "Annual Revenue",
        "50 000 €"
      ],
      "line": 262,
      "id": "test-non-regression-account;verification-des-valeurs-renseignees-dans-les-champs--de-la-page-d\u0027account-(affichage-du-record);;7"
    },
    {
      "cells": [
        "Billing Address",
        "500, route de Vannes"
      ],
      "line": 263,
      "id": "test-non-regression-account;verification-des-valeurs-renseignees-dans-les-champs--de-la-page-d\u0027account-(affichage-du-record);;8"
    },
    {
      "cells": [
        "Billing Address",
        "44000 Nantes"
      ],
      "line": 264,
      "id": "test-non-regression-account;verification-des-valeurs-renseignees-dans-les-champs--de-la-page-d\u0027account-(affichage-du-record);;9"
    },
    {
      "cells": [
        "Billing Address",
        "Loire Atlantique France"
      ],
      "line": 265,
      "id": "test-non-regression-account;verification-des-valeurs-renseignees-dans-les-champs--de-la-page-d\u0027account-(affichage-du-record);;10"
    },
    {
      "cells": [
        "Customer Priority",
        "High"
      ],
      "line": 266,
      "id": "test-non-regression-account;verification-des-valeurs-renseignees-dans-les-champs--de-la-page-d\u0027account-(affichage-du-record);;11"
    },
    {
      "cells": [
        "Number of Locations",
        "123"
      ],
      "line": 267,
      "id": "test-non-regression-account;verification-des-valeurs-renseignees-dans-les-champs--de-la-page-d\u0027account-(affichage-du-record);;12"
    },
    {
      "cells": [
        "Active",
        "Yes"
      ],
      "line": 268,
      "id": "test-non-regression-account;verification-des-valeurs-renseignees-dans-les-champs--de-la-page-d\u0027account-(affichage-du-record);;13"
    },
    {
      "cells": [
        "Description",
        "OK"
      ],
      "line": 269,
      "id": "test-non-regression-account;verification-des-valeurs-renseignees-dans-les-champs--de-la-page-d\u0027account-(affichage-du-record);;14"
    },
    {
      "cells": [
        "Rating",
        "Warm"
      ],
      "line": 270,
      "id": "test-non-regression-account;verification-des-valeurs-renseignees-dans-les-champs--de-la-page-d\u0027account-(affichage-du-record);;15"
    },
    {
      "cells": [
        "Phone",
        "0202020202"
      ],
      "line": 271,
      "id": "test-non-regression-account;verification-des-valeurs-renseignees-dans-les-champs--de-la-page-d\u0027account-(affichage-du-record);;16"
    },
    {
      "cells": [
        "Fax",
        "0404040404"
      ],
      "line": 272,
      "id": "test-non-regression-account;verification-des-valeurs-renseignees-dans-les-champs--de-la-page-d\u0027account-(affichage-du-record);;17"
    },
    {
      "cells": [
        "Website",
        "https://www.accenture.com"
      ],
      "line": 273,
      "id": "test-non-regression-account;verification-des-valeurs-renseignees-dans-les-champs--de-la-page-d\u0027account-(affichage-du-record);;18"
    },
    {
      "cells": [
        "Ownership",
        "Private"
      ],
      "line": 274,
      "id": "test-non-regression-account;verification-des-valeurs-renseignees-dans-les-champs--de-la-page-d\u0027account-(affichage-du-record);;19"
    },
    {
      "cells": [
        "Shipping Address",
        "500, route de Vannes"
      ],
      "line": 275,
      "id": "test-non-regression-account;verification-des-valeurs-renseignees-dans-les-champs--de-la-page-d\u0027account-(affichage-du-record);;20"
    },
    {
      "cells": [
        "Shipping Address",
        "44000 Nantes"
      ],
      "line": 276,
      "id": "test-non-regression-account;verification-des-valeurs-renseignees-dans-les-champs--de-la-page-d\u0027account-(affichage-du-record);;21"
    },
    {
      "cells": [
        "Shipping Address",
        "Loire Atlantique France"
      ],
      "line": 277,
      "id": "test-non-regression-account;verification-des-valeurs-renseignees-dans-les-champs--de-la-page-d\u0027account-(affichage-du-record);;22"
    },
    {
      "cells": [
        "SLA",
        "Silver"
      ],
      "line": 278,
      "id": "test-non-regression-account;verification-des-valeurs-renseignees-dans-les-champs--de-la-page-d\u0027account-(affichage-du-record);;23"
    },
    {
      "cells": [
        "Upsell Opportunity",
        "Yes"
      ],
      "line": 279,
      "id": "test-non-regression-account;verification-des-valeurs-renseignees-dans-les-champs--de-la-page-d\u0027account-(affichage-du-record);;24"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 257,
  "name": "Verification des valeurs renseignees dans les champs  de la page d\u0027Account (Affichage du record)",
  "description": "",
  "id": "test-non-regression-account;verification-des-valeurs-renseignees-dans-les-champs--de-la-page-d\u0027account-(affichage-du-record);;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 253,
  "name": "je verifie que dans le champ Account Name contient la valeur Non Regression -",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Account Name",
      "offset": 29
    },
    {
      "val": "Non Regression -",
      "offset": 61
    }
  ],
  "location": "AccountStep.validateNewAccount(String,String)"
});
formatter.result({
  "duration": 58079162,
  "status": "passed"
});
formatter.after({
  "duration": 21145,
  "status": "passed"
});
formatter.scenario({
  "line": 258,
  "name": "Verification des valeurs renseignees dans les champs  de la page d\u0027Account (Affichage du record)",
  "description": "",
  "id": "test-non-regression-account;verification-des-valeurs-renseignees-dans-les-champs--de-la-page-d\u0027account-(affichage-du-record);;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 253,
  "name": "je verifie que dans le champ Parent Account contient la valeur Accenture Nantes",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Parent Account",
      "offset": 29
    },
    {
      "val": "Accenture Nantes",
      "offset": 63
    }
  ],
  "location": "AccountStep.validateNewAccount(String,String)"
});
formatter.result({
  "duration": 61518926,
  "status": "passed"
});
formatter.after({
  "duration": 20767,
  "status": "passed"
});
formatter.scenario({
  "line": 259,
  "name": "Verification des valeurs renseignees dans les champs  de la page d\u0027Account (Affichage du record)",
  "description": "",
  "id": "test-non-regression-account;verification-des-valeurs-renseignees-dans-les-champs--de-la-page-d\u0027account-(affichage-du-record);;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 253,
  "name": "je verifie que dans le champ Account Number contient la valeur 2121212121",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Account Number",
      "offset": 29
    },
    {
      "val": "2121212121",
      "offset": 63
    }
  ],
  "location": "AccountStep.validateNewAccount(String,String)"
});
formatter.result({
  "duration": 62618820,
  "status": "passed"
});
formatter.after({
  "duration": 14726,
  "status": "passed"
});
formatter.scenario({
  "line": 260,
  "name": "Verification des valeurs renseignees dans les champs  de la page d\u0027Account (Affichage du record)",
  "description": "",
  "id": "test-non-regression-account;verification-des-valeurs-renseignees-dans-les-champs--de-la-page-d\u0027account-(affichage-du-record);;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 253,
  "name": "je verifie que dans le champ Type contient la valeur Prospect",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Type",
      "offset": 29
    },
    {
      "val": "Prospect",
      "offset": 53
    }
  ],
  "location": "AccountStep.validateNewAccount(String,String)"
});
formatter.result({
  "duration": 38188939,
  "status": "passed"
});
formatter.after({
  "duration": 15103,
  "status": "passed"
});
formatter.scenario({
  "line": 261,
  "name": "Verification des valeurs renseignees dans les champs  de la page d\u0027Account (Affichage du record)",
  "description": "",
  "id": "test-non-regression-account;verification-des-valeurs-renseignees-dans-les-champs--de-la-page-d\u0027account-(affichage-du-record);;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 253,
  "name": "je verifie que dans le champ Industry contient la valeur Telecommunications",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Industry",
      "offset": 29
    },
    {
      "val": "Telecommunications",
      "offset": 57
    }
  ],
  "location": "AccountStep.validateNewAccount(String,String)"
});
formatter.result({
  "duration": 38770415,
  "status": "passed"
});
formatter.after({
  "duration": 14348,
  "status": "passed"
});
formatter.scenario({
  "line": 262,
  "name": "Verification des valeurs renseignees dans les champs  de la page d\u0027Account (Affichage du record)",
  "description": "",
  "id": "test-non-regression-account;verification-des-valeurs-renseignees-dans-les-champs--de-la-page-d\u0027account-(affichage-du-record);;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 253,
  "name": "je verifie que dans le champ Annual Revenue contient la valeur 50 000 €",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Annual Revenue",
      "offset": 29
    },
    {
      "val": "50 000 €",
      "offset": 63
    }
  ],
  "location": "AccountStep.validateNewAccount(String,String)"
});
formatter.result({
  "duration": 44002557,
  "status": "passed"
});
formatter.after({
  "duration": 17746,
  "status": "passed"
});
formatter.scenario({
  "line": 263,
  "name": "Verification des valeurs renseignees dans les champs  de la page d\u0027Account (Affichage du record)",
  "description": "",
  "id": "test-non-regression-account;verification-des-valeurs-renseignees-dans-les-champs--de-la-page-d\u0027account-(affichage-du-record);;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 253,
  "name": "je verifie que dans le champ Billing Address contient la valeur 500, route de Vannes",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Billing Address",
      "offset": 29
    },
    {
      "val": "500, route de Vannes",
      "offset": 64
    }
  ],
  "location": "AccountStep.validateNewAccount(String,String)"
});
formatter.result({
  "duration": 44657283,
  "status": "passed"
});
formatter.after({
  "duration": 16992,
  "status": "passed"
});
formatter.scenario({
  "line": 264,
  "name": "Verification des valeurs renseignees dans les champs  de la page d\u0027Account (Affichage du record)",
  "description": "",
  "id": "test-non-regression-account;verification-des-valeurs-renseignees-dans-les-champs--de-la-page-d\u0027account-(affichage-du-record);;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 253,
  "name": "je verifie que dans le champ Billing Address contient la valeur 44000 Nantes",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Billing Address",
      "offset": 29
    },
    {
      "val": "44000 Nantes",
      "offset": 64
    }
  ],
  "location": "AccountStep.validateNewAccount(String,String)"
});
formatter.result({
  "duration": 31150070,
  "status": "passed"
});
formatter.after({
  "duration": 15858,
  "status": "passed"
});
formatter.scenario({
  "line": 265,
  "name": "Verification des valeurs renseignees dans les champs  de la page d\u0027Account (Affichage du record)",
  "description": "",
  "id": "test-non-regression-account;verification-des-valeurs-renseignees-dans-les-champs--de-la-page-d\u0027account-(affichage-du-record);;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 253,
  "name": "je verifie que dans le champ Billing Address contient la valeur Loire Atlantique France",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Billing Address",
      "offset": 29
    },
    {
      "val": "Loire Atlantique France",
      "offset": 64
    }
  ],
  "location": "AccountStep.validateNewAccount(String,String)"
});
formatter.result({
  "duration": 28139238,
  "status": "passed"
});
formatter.after({
  "duration": 21145,
  "status": "passed"
});
formatter.scenario({
  "line": 266,
  "name": "Verification des valeurs renseignees dans les champs  de la page d\u0027Account (Affichage du record)",
  "description": "",
  "id": "test-non-regression-account;verification-des-valeurs-renseignees-dans-les-champs--de-la-page-d\u0027account-(affichage-du-record);;11",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 253,
  "name": "je verifie que dans le champ Customer Priority contient la valeur High",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Customer Priority",
      "offset": 29
    },
    {
      "val": "High",
      "offset": 66
    }
  ],
  "location": "AccountStep.validateNewAccount(String,String)"
});
formatter.result({
  "duration": 38552927,
  "status": "passed"
});
formatter.after({
  "duration": 21144,
  "status": "passed"
});
formatter.scenario({
  "line": 267,
  "name": "Verification des valeurs renseignees dans les champs  de la page d\u0027Account (Affichage du record)",
  "description": "",
  "id": "test-non-regression-account;verification-des-valeurs-renseignees-dans-les-champs--de-la-page-d\u0027account-(affichage-du-record);;12",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 253,
  "name": "je verifie que dans le champ Number of Locations contient la valeur 123",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Number of Locations",
      "offset": 29
    },
    {
      "val": "123",
      "offset": 68
    }
  ],
  "location": "AccountStep.validateNewAccount(String,String)"
});
formatter.result({
  "duration": 41906981,
  "status": "passed"
});
formatter.after({
  "duration": 17746,
  "status": "passed"
});
formatter.scenario({
  "line": 268,
  "name": "Verification des valeurs renseignees dans les champs  de la page d\u0027Account (Affichage du record)",
  "description": "",
  "id": "test-non-regression-account;verification-des-valeurs-renseignees-dans-les-champs--de-la-page-d\u0027account-(affichage-du-record);;13",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 253,
  "name": "je verifie que dans le champ Active contient la valeur Yes",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Active",
      "offset": 29
    },
    {
      "val": "Yes",
      "offset": 55
    }
  ],
  "location": "AccountStep.validateNewAccount(String,String)"
});
formatter.result({
  "duration": 39468940,
  "status": "passed"
});
formatter.after({
  "duration": 14726,
  "status": "passed"
});
formatter.scenario({
  "line": 269,
  "name": "Verification des valeurs renseignees dans les champs  de la page d\u0027Account (Affichage du record)",
  "description": "",
  "id": "test-non-regression-account;verification-des-valeurs-renseignees-dans-les-champs--de-la-page-d\u0027account-(affichage-du-record);;14",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 253,
  "name": "je verifie que dans le champ Description contient la valeur OK",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Description",
      "offset": 29
    },
    {
      "val": "OK",
      "offset": 60
    }
  ],
  "location": "AccountStep.validateNewAccount(String,String)"
});
formatter.result({
  "duration": 40250533,
  "status": "passed"
});
formatter.after({
  "duration": 14348,
  "status": "passed"
});
formatter.scenario({
  "line": 270,
  "name": "Verification des valeurs renseignees dans les champs  de la page d\u0027Account (Affichage du record)",
  "description": "",
  "id": "test-non-regression-account;verification-des-valeurs-renseignees-dans-les-champs--de-la-page-d\u0027account-(affichage-du-record);;15",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 253,
  "name": "je verifie que dans le champ Rating contient la valeur Warm",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Rating",
      "offset": 29
    },
    {
      "val": "Warm",
      "offset": 55
    }
  ],
  "location": "AccountStep.validateNewAccount(String,String)"
});
formatter.result({
  "duration": 43970840,
  "status": "passed"
});
formatter.after({
  "duration": 18880,
  "status": "passed"
});
formatter.scenario({
  "line": 271,
  "name": "Verification des valeurs renseignees dans les champs  de la page d\u0027Account (Affichage du record)",
  "description": "",
  "id": "test-non-regression-account;verification-des-valeurs-renseignees-dans-les-champs--de-la-page-d\u0027account-(affichage-du-record);;16",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 253,
  "name": "je verifie que dans le champ Phone contient la valeur 0202020202",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Phone",
      "offset": 29
    },
    {
      "val": "0202020202",
      "offset": 54
    }
  ],
  "location": "AccountStep.validateNewAccount(String,String)"
});
formatter.result({
  "duration": 38159866,
  "status": "passed"
});
formatter.after({
  "duration": 15481,
  "status": "passed"
});
formatter.scenario({
  "line": 272,
  "name": "Verification des valeurs renseignees dans les champs  de la page d\u0027Account (Affichage du record)",
  "description": "",
  "id": "test-non-regression-account;verification-des-valeurs-renseignees-dans-les-champs--de-la-page-d\u0027account-(affichage-du-record);;17",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 253,
  "name": "je verifie que dans le champ Fax contient la valeur 0404040404",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Fax",
      "offset": 29
    },
    {
      "val": "0404040404",
      "offset": 52
    }
  ],
  "location": "AccountStep.validateNewAccount(String,String)"
});
formatter.result({
  "duration": 49032694,
  "status": "passed"
});
formatter.after({
  "duration": 15103,
  "status": "passed"
});
formatter.scenario({
  "line": 273,
  "name": "Verification des valeurs renseignees dans les champs  de la page d\u0027Account (Affichage du record)",
  "description": "",
  "id": "test-non-regression-account;verification-des-valeurs-renseignees-dans-les-champs--de-la-page-d\u0027account-(affichage-du-record);;18",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 253,
  "name": "je verifie que dans le champ Website contient la valeur https://www.accenture.com",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Website",
      "offset": 29
    },
    {
      "val": "https://www.accenture.com",
      "offset": 56
    }
  ],
  "location": "AccountStep.validateNewAccount(String,String)"
});
formatter.result({
  "duration": 39953377,
  "status": "passed"
});
formatter.after({
  "duration": 18879,
  "status": "passed"
});
formatter.scenario({
  "line": 274,
  "name": "Verification des valeurs renseignees dans les champs  de la page d\u0027Account (Affichage du record)",
  "description": "",
  "id": "test-non-regression-account;verification-des-valeurs-renseignees-dans-les-champs--de-la-page-d\u0027account-(affichage-du-record);;19",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 253,
  "name": "je verifie que dans le champ Ownership contient la valeur Private",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Ownership",
      "offset": 29
    },
    {
      "val": "Private",
      "offset": 58
    }
  ],
  "location": "AccountStep.validateNewAccount(String,String)"
});
formatter.result({
  "duration": 51336316,
  "status": "passed"
});
formatter.after({
  "duration": 14725,
  "status": "passed"
});
formatter.scenario({
  "line": 275,
  "name": "Verification des valeurs renseignees dans les champs  de la page d\u0027Account (Affichage du record)",
  "description": "",
  "id": "test-non-regression-account;verification-des-valeurs-renseignees-dans-les-champs--de-la-page-d\u0027account-(affichage-du-record);;20",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 253,
  "name": "je verifie que dans le champ Shipping Address contient la valeur 500, route de Vannes",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Shipping Address",
      "offset": 29
    },
    {
      "val": "500, route de Vannes",
      "offset": 65
    }
  ],
  "location": "AccountStep.validateNewAccount(String,String)"
});
formatter.result({
  "duration": 40317365,
  "status": "passed"
});
formatter.after({
  "duration": 13971,
  "status": "passed"
});
formatter.scenario({
  "line": 276,
  "name": "Verification des valeurs renseignees dans les champs  de la page d\u0027Account (Affichage du record)",
  "description": "",
  "id": "test-non-regression-account;verification-des-valeurs-renseignees-dans-les-champs--de-la-page-d\u0027account-(affichage-du-record);;21",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 253,
  "name": "je verifie que dans le champ Shipping Address contient la valeur 44000 Nantes",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Shipping Address",
      "offset": 29
    },
    {
      "val": "44000 Nantes",
      "offset": 65
    }
  ],
  "location": "AccountStep.validateNewAccount(String,String)"
});
formatter.result({
  "duration": 32728360,
  "status": "passed"
});
formatter.after({
  "duration": 15481,
  "status": "passed"
});
formatter.scenario({
  "line": 277,
  "name": "Verification des valeurs renseignees dans les champs  de la page d\u0027Account (Affichage du record)",
  "description": "",
  "id": "test-non-regression-account;verification-des-valeurs-renseignees-dans-les-champs--de-la-page-d\u0027account-(affichage-du-record);;22",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 253,
  "name": "je verifie que dans le champ Shipping Address contient la valeur Loire Atlantique France",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Shipping Address",
      "offset": 29
    },
    {
      "val": "Loire Atlantique France",
      "offset": 65
    }
  ],
  "location": "AccountStep.validateNewAccount(String,String)"
});
formatter.result({
  "duration": 29363734,
  "status": "passed"
});
formatter.after({
  "duration": 31339,
  "status": "passed"
});
formatter.scenario({
  "line": 278,
  "name": "Verification des valeurs renseignees dans les champs  de la page d\u0027Account (Affichage du record)",
  "description": "",
  "id": "test-non-regression-account;verification-des-valeurs-renseignees-dans-les-champs--de-la-page-d\u0027account-(affichage-du-record);;23",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 253,
  "name": "je verifie que dans le champ SLA contient la valeur Silver",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "SLA",
      "offset": 29
    },
    {
      "val": "Silver",
      "offset": 52
    }
  ],
  "location": "AccountStep.validateNewAccount(String,String)"
});
formatter.result({
  "duration": 47515950,
  "status": "passed"
});
formatter.after({
  "duration": 13971,
  "status": "passed"
});
formatter.scenario({
  "line": 279,
  "name": "Verification des valeurs renseignees dans les champs  de la page d\u0027Account (Affichage du record)",
  "description": "",
  "id": "test-non-regression-account;verification-des-valeurs-renseignees-dans-les-champs--de-la-page-d\u0027account-(affichage-du-record);;24",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 253,
  "name": "je verifie que dans le champ Upsell Opportunity contient la valeur Yes",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Upsell Opportunity",
      "offset": 29
    },
    {
      "val": "Yes",
      "offset": 67
    }
  ],
  "location": "AccountStep.validateNewAccount(String,String)"
});
formatter.result({
  "duration": 39601470,
  "status": "passed"
});
formatter.after({
  "duration": 15858,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 282,
  "name": "Verificiation de la presence des boutons \"Edit\" et \"Delete\" en haut et bas de page (Affichage du record)",
  "description": "",
  "id": "test-non-regression-account;verificiation-de-la-presence-des-boutons-\"edit\"-et-\"delete\"-en-haut-et-bas-de-page-(affichage-du-record)",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 283,
  "name": "je verifie la presence du bouton \u003cbuttonName\u003e situe en \u003cposition\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 285,
  "name": "",
  "description": "",
  "id": "test-non-regression-account;verificiation-de-la-presence-des-boutons-\"edit\"-et-\"delete\"-en-haut-et-bas-de-page-(affichage-du-record);",
  "rows": [
    {
      "cells": [
        "buttonName",
        "position"
      ],
      "line": 286,
      "id": "test-non-regression-account;verificiation-de-la-presence-des-boutons-\"edit\"-et-\"delete\"-en-haut-et-bas-de-page-(affichage-du-record);;1"
    },
    {
      "cells": [
        "edit",
        "top"
      ],
      "line": 287,
      "id": "test-non-regression-account;verificiation-de-la-presence-des-boutons-\"edit\"-et-\"delete\"-en-haut-et-bas-de-page-(affichage-du-record);;2"
    },
    {
      "cells": [
        "delete",
        "top"
      ],
      "line": 288,
      "id": "test-non-regression-account;verificiation-de-la-presence-des-boutons-\"edit\"-et-\"delete\"-en-haut-et-bas-de-page-(affichage-du-record);;3"
    },
    {
      "cells": [
        "edit",
        "bottom"
      ],
      "line": 289,
      "id": "test-non-regression-account;verificiation-de-la-presence-des-boutons-\"edit\"-et-\"delete\"-en-haut-et-bas-de-page-(affichage-du-record);;4"
    },
    {
      "cells": [
        "delete",
        "bottom"
      ],
      "line": 290,
      "id": "test-non-regression-account;verificiation-de-la-presence-des-boutons-\"edit\"-et-\"delete\"-en-haut-et-bas-de-page-(affichage-du-record);;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 287,
  "name": "Verificiation de la presence des boutons \"Edit\" et \"Delete\" en haut et bas de page (Affichage du record)",
  "description": "",
  "id": "test-non-regression-account;verificiation-de-la-presence-des-boutons-\"edit\"-et-\"delete\"-en-haut-et-bas-de-page-(affichage-du-record);;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 283,
  "name": "je verifie la presence du bouton edit situe en top",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edit",
      "offset": 33
    },
    {
      "val": "top",
      "offset": 47
    }
  ],
  "location": "AccountStep.checkEditPageButtons(String,String)"
});
formatter.result({
  "duration": 44932,
  "status": "passed"
});
formatter.after({
  "duration": 8307,
  "status": "passed"
});
formatter.scenario({
  "line": 288,
  "name": "Verificiation de la presence des boutons \"Edit\" et \"Delete\" en haut et bas de page (Affichage du record)",
  "description": "",
  "id": "test-non-regression-account;verificiation-de-la-presence-des-boutons-\"edit\"-et-\"delete\"-en-haut-et-bas-de-page-(affichage-du-record);;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 283,
  "name": "je verifie la presence du bouton delete situe en top",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "delete",
      "offset": 33
    },
    {
      "val": "top",
      "offset": 49
    }
  ],
  "location": "AccountStep.checkEditPageButtons(String,String)"
});
formatter.result({
  "duration": 27941,
  "status": "passed"
});
formatter.after({
  "duration": 7174,
  "status": "passed"
});
formatter.scenario({
  "line": 289,
  "name": "Verificiation de la presence des boutons \"Edit\" et \"Delete\" en haut et bas de page (Affichage du record)",
  "description": "",
  "id": "test-non-regression-account;verificiation-de-la-presence-des-boutons-\"edit\"-et-\"delete\"-en-haut-et-bas-de-page-(affichage-du-record);;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 283,
  "name": "je verifie la presence du bouton edit situe en bottom",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edit",
      "offset": 33
    },
    {
      "val": "bottom",
      "offset": 47
    }
  ],
  "location": "AccountStep.checkEditPageButtons(String,String)"
});
formatter.result({
  "duration": 35871,
  "status": "passed"
});
formatter.after({
  "duration": 6796,
  "status": "passed"
});
formatter.scenario({
  "line": 290,
  "name": "Verificiation de la presence des boutons \"Edit\" et \"Delete\" en haut et bas de page (Affichage du record)",
  "description": "",
  "id": "test-non-regression-account;verificiation-de-la-presence-des-boutons-\"edit\"-et-\"delete\"-en-haut-et-bas-de-page-(affichage-du-record);;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 283,
  "name": "je verifie la presence du bouton delete situe en bottom",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "delete",
      "offset": 33
    },
    {
      "val": "bottom",
      "offset": 49
    }
  ],
  "location": "AccountStep.checkEditPageButtons(String,String)"
});
formatter.result({
  "duration": 37381,
  "status": "passed"
});
formatter.after({
  "duration": 6796,
  "status": "passed"
});
formatter.scenario({
  "line": 294,
  "name": "Logout",
  "description": "",
  "id": "test-non-regression-account;logout",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 293,
      "name": "@Logout"
    }
  ]
});
formatter.step({
  "line": 295,
  "name": "je recupere les elements de la page",
  "keyword": "Given "
});
formatter.step({
  "line": 296,
  "name": "je verifie les options du menu",
  "keyword": "Then "
});
formatter.step({
  "line": 297,
  "name": "je me deconnecte",
  "keyword": "Then "
});
formatter.match({
  "location": "LogoutStep.checkHomePage()"
});
formatter.result({
  "duration": 340578,
  "status": "passed"
});
formatter.match({
  "location": "LogoutStep.checkOptions()"
});
formatter.result({
  "duration": 1126271835,
  "status": "passed"
});
formatter.match({
  "location": "LogoutStep.logout()"
});
formatter.result({
  "duration": 3135652840,
  "status": "passed"
});
formatter.after({
  "duration": 34738,
  "status": "passed"
});
});