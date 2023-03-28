import { BonCommande } from "./bon-commande";
import { Fournisseur } from "./fournisseur";

export interface BonLivraison {
  id : number,
  numero_livraison : number,
  fournisseur : Fournisseur,
  bonCommande :  BonCommande,
  createdAt : Date,
  updatedAt : Date
}
