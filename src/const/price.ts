export const price = {
  consultations: [
    {
      label: 'offline',
      value: 50,
    },

    {
      label: 'online',
      value: 30,
    },
  ],
  gynecological: {
    base: [
      {
        label: 'cytology',
        value: 25,
      },
      {
        label: 'HPV',
        value: 100,
      },
      {
        label: 'ultrasound',
        value: 25,
      },
      {
        label: 'vaccinationHIV',
        value: 210,
      },
      {
        label: 'biopsy',
        value: 120,
      },
    ],
    vaginalInfections: [
      {
        label: 'vaginalInfections.basic',
        value: 30,
      },
      {
        label: 'vaginalInfections.STDs4',
        value: 100,
      },
      {
        label: 'vaginalInfections.STDs7',
        value: 130,
      },
    ],
    packages: [
      {
        label: 'packages.basic.heading',
        value: 100,
        content: [
          'packages.basic.consultation',
          'packages.basic.cytology',
          'packages.basic.ultrasound',
          'packages.basic.results',
        ],
      },
      {
        label: 'packages.full.heading',
        value: 190,
        content: [
          'packages.full.consultation',
          'packages.full.cytology',
          'packages.full.ultrasound',
          'packages.full.results',
        ],
      },
      {
        label: 'packages.vaccinationHIV.heading',
        value: 630,
        content: [
          'packages.vaccinationHIV.vaccine',
          'packages.vaccinationHIV.deliverVaccine',
        ],
        info: [
          'packages.vaccinationHIV.info1',
          'packages.vaccinationHIV.info2',
        ],
      },
    ],
  },
  contraception: {
    HID: {
      base: [
        {
          label: 'installNonHID.heading',
          value: 100,
          info: ['installNonHID.info1'],
        },
        {
          label: 'removeHID',
          value: 30,
        },
      ],
      install: [
        {
          label: 'installHID.mirena',
          value: 190,
        },
        {
          label: 'installHID.kyleena',
          value: 210,
        },
      ],
      replace: [
        {
          label: 'replaceHID.novaplus',
          value: 130,
        },
        {
          label: 'replaceHID.mirena',
          value: 220,
        },
        {
          label: 'replaceHID.kyleena',
          value: 240,
        },
      ],
    },
    implant: {
      install: [
        {
          label: 'installImplant.heading',
          value: 170,
          info: ['installImplant.info1'],
        },
      ],
      remove: [
        {
          label: 'removeImplant',
          value: 30,
        },
      ],
      replace: [
        {
          label: 'replaceImplant.heading',
          value: 200,
          info: ['replaceImplant.info1', 'replaceImplant.info2'],
        },
      ],
    },
    injectionDepoProgevera: [
      {
        label: 'injectionDepoProgevera.heading',
        value: 15,
        info: ['injectionDepoProgevera.info1'],
      },
    ],
  },
  obstetrics: {
    base: [
      {
        label: 'earlyUltrasound.heading',
        value: 80,
        info: ['earlyUltrasound.info1', 'earlyUltrasound.info2'],
      },
      {
        label: 'secondUltrasound.heading',
        value: 100,
        info: [
          'secondUltrasound.info1',
          'secondUltrasound.info2',
          'secondUltrasound.info3',
        ],
      },
      {
        label: 'thirdUltrasound.heading',
        value: 120,
        info: [
          'thirdUltrasound.info1',
          'thirdUltrasound.info2',
          'thirdUltrasound.info3',
          'thirdUltrasound.info4',
        ],
      },
    ],
    packages: [
      {
        label: 'packages.basic.heading',
        value: 250,
        content: [
          'packages.basic.ultrasound1',
          'packages.basic.ultrasound2',
          'packages.basic.ultrasound3',
        ],
        info: ['packages.basic.info'],
      },
      {
        label: 'packages.full.heading',
        value: 450,
        content: ['packages.full.ultrasound1'],
        info: ['packages.full.info'],
      },
    ],
  },
};
