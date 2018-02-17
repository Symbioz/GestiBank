package fr.jgj.gestibank.service;

import java.util.List;

import fr.jgj.gestibank.model.Demande;

public interface IDemandeService {
	
	public Demande getDemandeById(String id);
	
	public List<Demande> getDemandeByClient(String idClient);
	
	public Demande creerDemande(Demande demande);
	
	public Demande modifierDemande(Demande demande);
	
	
	
	//SURSPECIFICATION (pour les tests SOAPUI)
	
	public List<Demande> getAllDemandes();

	public Demande supprimerDemande(String id);
	
	//public void deleteAllDemandes();
}
