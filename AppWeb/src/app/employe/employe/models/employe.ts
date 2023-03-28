import { Siteemploye } from "./siteemploye";

export interface Employe {
  id : number,
  matricule: String,
  nom: String,
  prenom: String,
  email: String,
  siteEmploye : Siteemploye
}
