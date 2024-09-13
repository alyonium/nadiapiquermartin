type ConsultationType = {
  label: string;
  value: number;
};

type GynecologicalBaseType = {
  label: string;
  value: number;
};

type GynecologicalVaginalInfectionsType = {
  label: string;
  value: number;
};

type GynecologicalPackagesType = {
  label: string;
  value: number;
  content: string[];
  info?: string[];
};

type HIDBaseType = {
  label: string;
  value: number;
  info?: string[];
};

type HIDInstallType = {
  label: string;
  value: number;
};

type HIDReplaceType = {
  label: string;
  value: number;
};

type ImplantInstallType = {
  label: string;
  value: number;
  info?: string[];
};

type ImplantRemoveType = {
  label: string;
  value: number;
};

type ImplantReplaceType = {
  label: string;
  value: number;
  info?: string[];
};

type InjectionDepoProgeveraType = {
  label: string;
  value: number;
  info?: string[];
};

type ObstetricsBaseType = {
  label: string;
  value: number;
  info?: string[];
};

type ObstetricsPackagesType = {
  label: string;
  value: number;
  content: string[];
  info?: string[];
};

export type PriceType = {
  id: number;
  attributes: {
    prices: {
      consultations: ConsultationType[];
      gynecological: {
        base: GynecologicalBaseType[];
        vaginalInfections: GynecologicalVaginalInfectionsType[];
        packages: GynecologicalPackagesType[];
      };
      contraception: {
        HID: {
          base: HIDBaseType[];
          install: HIDInstallType[];
          replace: HIDReplaceType[];
        };
        implant: {
          install: ImplantInstallType[];
          remove: ImplantRemoveType[];
          replace: ImplantReplaceType[];
        };
        injectionDepoProgevera: InjectionDepoProgeveraType[];
      };
      obstetrics: {
        base: ObstetricsBaseType[];
        packages: ObstetricsPackagesType[];
      };
    };
  };
};
