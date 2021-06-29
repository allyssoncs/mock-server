import { InsuredModel, ModalityModel, PolicyholderModel, SubsidiaryModel } from "../models";

export const policyholder: PolicyholderModel[] = [
  {
    "id": 1,
    "name": "[sample] Policyholder 01",
    "federalId": "15678199000189"
  },
  {
    "id": 2,
    "name": "[sample] Policyholder 02",
    "federalId": "30305574000139"
  },
  {
    "id": 3,
    "name": "[sample] Policyholder 03",
    "federalId": "39856934000165"
  },
  {
    "id": 4,
    "name": "[sample] Policyholder 04",
    "federalId": "29193348000124"
  },
  {
    "id": 5,
    "name": "[sample] Policyholder 05",
    "federalId": "85037976000191"
  },
  {
    "id": 6,
    "name": "[sample] Policyholder 06",
    "federalId": "59027316000110"
  }
];

export const subsidiary: SubsidiaryModel[] = [
  {
    "id": 1,
    "headquartersId": 1,
    "name": "[sample] Policyholder 01 - subsidiary 01",
    "federalId": "58441989000159"
  },
  {
    "id": 2,
    "headquartersId": 1,
    "name": "[sample] Policyholder 01 - subsidiary 02",
    "federalId": "58563382000141"
  },
  {
    "id": 3,
    "headquartersId": 2,
    "name": "[sample] Policyholder 02 - subsidiary 01",
    "federalId": "12333386000132"
  },
  {
    "id": 4,
    "headquartersId": 3,
    "name": "[sample] Policyholder 03 - subsidiary 01",
    "federalId": "33194754000189"
  },
  {
    "id": 5,
    "headquartersId": 4,
    "name": "[sample] Policyholder 04 - subsidiary 01",
    "federalId": "83068679000188"
  },
];

export const policyholderModality = [
  {
    "federalId": "15678199000189",
    "modalityId": 1
  },
  {
    "federalId": "15678199000189",
    "modalityId": 2
  },
  {
    "federalId": "15678199000189",
    "modalityId": 3
  },
  {
    "federalId": "15678199000189",
    "modalityId": 4
  },
  {
    "federalId": "15678199000189",
    "modalityId": 5
  },
  {
    "federalId": "15678199000189",
    "modalityId": 6
  },
  {
    "federalId": "15678199000189",
    "modalityId": 7
  },
  {
    "federalId": "30305574000139",
    "modalityId": 1
  },
  {
    "federalId": "39856934000165",
    "modalityId": 2
  },
  {
    "federalId": "29193348000124",
    "modalityId": 3
  },
  {
    "federalId": "85037976000191",
    "modalityId": 4
  },
  {
    "federalId": "59027316000110",
    "modalityId": 5
  },
  {
    "federalId": "39856934000165",
    "modalityId": 6
  },
  {
    "federalId": "59027316000110",
    "modalityId": 7
  }
];

export const modality: ModalityModel[] = [
  {
    "id": 1,
    "description": "Executante Construtor",
    "externalId": 97
  },
  {
    "id": 2,
    "description": "Executante Construtor - Término de Obras",
    "externalId": 80
  },
  {
    "id": 3,
    "description": "Antecipação de Recebíveis Contratuais",
    "externalId": 85
  },
  {
    "id": 4,
    "description": "Aduaneiro Trânsito",
    "externalId": 103
  },
  {
    "id": 5,
    "description": "Registro ANELL",
    "externalId": 82
  },
  {
    "id": 6,
    "description": "Parcelamento Administrativo Fiscal",
    "externalId": 79
  },
  {
    "id": 7,
    "description": "Retenção de Pagamento",
    "externalId": 74
  }
]

export const generateQuote = {
  "finalPrize": 12994.31,
  "commissionValue": 2130.43,
  "commissionFee": 21,
  "feeStandard": 1.55,
  "maxRate": 11.99,
  "quoteFileRequestURL": "https://www.google.com.br/",
  "installments": [
    {
      "number": 1,
      "dueDate": new Date(),
      "mainValue": 190.0,
      "iof": 0,
      "policyCost": 19.9,
      "installmentValue": 190.0,
      "fractionationValue": 0
    }
  ]
};

export const insured: InsuredModel[] = [
  {
    "id": 1,
    "externalId": 1,
    "federalId": "66182172000131",
    "addressId": 1,
    "name": "[sample] Insured 01",
    "addresses": [
      {
        "addressExternalId": 1,
        "addressId": 1,
        "externalId": 1,
        "city": "[sample] Insured 01 - City 01",
        "state": "[sample] Insured 01 - State 01",
        "street": "[sample] Insured 01 - Street 01 - 9999",
      },
      {
        "addressExternalId": 2,
        "addressId": 2,
        "externalId": 2,
        "city": "[sample] Insured 01 - City 02",
        "state": "[sample] Insured 01 - State 02",
        "street": "[sample] Insured 01 - Street 02 - 9999",
      }
    ],
    "insuredType": 1,
    "insuredTypeDescription": "Privado",
    "hasFederalId": true
  },
  {
    "id": 2,
    "externalId": 2,
    "federalId": "02581053000179",
    "addressId": 2,
    "name": "[sample] Insured 02",
    "addresses": [
      {
        "addressExternalId": 1,
        "addressId": 1,
        "externalId": 1,
        "city": "[sample] Insured 02 - City 01",
        "state": "[sample] Insured 02 - State 01",
        "street": "[sample] Insured 02 - Street 01 - 9999",
      },
      {
        "addressExternalId": 2,
        "addressId": 2,
        "externalId": 2,
        "city": "[sample] Insured 02 - City 02",
        "state": "[sample] Insured 02 - State 02",
        "street": "[sample] Insured 02 - Street 02 - 9999",
      }
    ],
    "insuredType": 1,
    "insuredTypeDescription": "Privado",
    "hasFederalId": true
  },
  {
    "id": 3,
    "externalId": 3,
    "federalId": "72078834000120",
    "addressId": 3,
    "name": "[sample] Insured 03",
    "addresses": [
      {
        "addressExternalId": 1,
        "addressId": 1,
        "externalId": 1,
        "city": "[sample] Insured 03 - City 01",
        "state": "[sample] Insured 03 - State 01",
        "street": "[sample] Insured 03 - Street 01 - 9999",
      }
    ],
    "insuredType": 1,
    "insuredTypeDescription": "Privado",
    "hasFederalId": true
  },
  {
    "id": 4,
    "externalId": 4,
    "federalId": "71859325000172",
    "addressId": 4,
    "name": "[sample] Insured 04",
    "addresses": [
      {
        "addressExternalId": 1,
        "addressId": 1,
        "externalId": 1,
        "city": "[sample] Insured 04 - City 01",
        "state": "[sample] Insured 04 - State 01",
        "street": "[sample] Insured 04 - Street 01 - 9999",
      }
    ],
    "insuredType": 1,
    "insuredTypeDescription": "Privado",
    "hasFederalId": true
  },
  {
    "id": 5,
    "externalId": 5,
    "federalId": "39531931000151",
    "addressId": 5,
    "name": "[sample] Insured 05",
    "addresses": [
      {
        "addressExternalId": 1,
        "addressId": 1,
        "externalId": 1,
        "city": "[sample] Insured 05 - City 01",
        "state": "[sample] Insured 05 - State 01",
        "street": "[sample] Insured 05 - Street 01 - 9999",
      }
    ],
    "insuredType": 2,
    "insuredTypeDescription": "Público",
    "hasFederalId": true
  },
]