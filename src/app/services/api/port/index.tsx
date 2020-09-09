import { apiClient } from '../vinovaEngineAPI';

//Layers Fuel
export function getProducts(token: string) {
  return new apiClient(token).get('Port/GetProducts');
}

export function getFuelQualityProducts(token: string) {
  return new apiClient(token).get('Port/GetFuelQualityProducts');
}

export function getAvailFuelGroups(token: string) {
  return new apiClient(token).get('Mdm/AvailFuelGroups');
}

export function getFuelQualityIndex(token: string) {
  return new apiClient(token).get('FuelQuality/Index');
}
