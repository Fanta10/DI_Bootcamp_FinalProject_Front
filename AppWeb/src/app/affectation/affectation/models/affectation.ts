import { Employe } from './../../../employe/employe/models/employe';
import { Materiel } from './../../../materiel/materiel/models/materiel';
export interface Affectation {

  id: number,
  debutperiode_utilisation : Date,
  finperiode_utilisation: Date,
  statut_mat : number,
  longitude : number,
  latitude : number,
  duree_restante : number,
  employe : Employe,
  materiel: Materiel
}
