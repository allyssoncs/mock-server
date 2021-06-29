import { AddressModel } from "./AddressModel";

export interface InsuredModel {
  id: number;
  externalId: number;
  federalId: string;
  addressId: number;
  name: string;
  addresses: AddressModel[];
  insuredType: number;
  insuredTypeDescription: string;
  hasFederalId: boolean;
}