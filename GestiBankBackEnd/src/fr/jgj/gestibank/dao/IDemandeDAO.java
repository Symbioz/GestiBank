package fr.jgj.gestibank.dao;

import java.util.List;

import fr.jgj.gestibank.model.Demande;

public interface IDemandeDAO {
	
	
	public Demande getDemandeById(String id);
	
	public List<Demande> getDemandeByClient(String idClient);
	
	public Demande creerDemande(Demande demande);
	
	public Demande modifierDemande(Demande demande);
	
	
	//SURSPECIFICATION
	
	public List<Demande> getAllDemandes();
	
	public Demande supprimerDemande(String id);
	
	//public void deleteAllDemandes();
}
