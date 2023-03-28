import { BonLivraison } from "./bon-livraison";
import { TypeMateriel } from "./type-materiel";
import { StatutMateriel } from './statut-materiel';

export interface Materiel {
  id:number,
  code:String,
  libelle:String,
  marque:String,
  modele:String,
  montant:number,
  num_serie:String,
  duree_utilisation:number,
  debut_garantie:Date,
  fin_garantie:Date,
  date_utilisation: Date,
  localmac_address:String,
  date_enregistrement:Date,
  bonLivraison: BonLivraison,
  typeMateriel: TypeMateriel,
  statut_materiel: StatutMateriel

}
