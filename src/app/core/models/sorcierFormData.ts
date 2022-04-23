import { Sorcier } from './sorcier';

export interface SorcierFormData {
  isUpdateMode: boolean;
  sorcierToUpdate?: Sorcier;
  idToCreate?: number;
}
