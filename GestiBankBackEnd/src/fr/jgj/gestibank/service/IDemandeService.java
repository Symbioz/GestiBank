package fr.jgj.gestibank.service;

import java.util.List;

import fr.jgj.gestibank.model.Demande;
import fr.jgj.gestibank.model.DemandeChequier;
import fr.jgj.gestibank.model.Inscription;

public interface IDemandeService {
	
	public Demande getDemandeById(String id);
	
	public List<DemandeChequier> getDemandeByClient(String idClient);
	
	public DemandeChequier creerDemandeChequier(DemandeChequier demande);
	
	public Demande modifierDemande(Demande demande);
	
	public List<Inscription> getAllInscriptions() ;
	
	//SURSPECIFICATION (pour les tests SOAPUI)
	
	public List<Demande> getAllDemandes();

	public Demande supprimerDemande(String id);
	
	//public void deleteAllDemandes();
}
