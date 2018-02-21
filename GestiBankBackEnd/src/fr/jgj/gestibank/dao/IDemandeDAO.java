package fr.jgj.gestibank.dao;

import java.util.List;

import fr.jgj.gestibank.model.Demande;
import fr.jgj.gestibank.model.DemandeChequier;
import fr.jgj.gestibank.model.Inscription;

public interface IDemandeDAO {
	
	
	public Demande getDemandeById(String id);
	
	public List<DemandeChequier> getDemandeChequierByClient(String idClient);
	
	public DemandeChequier creerDemandeChequier(DemandeChequier demandeChequier);
	
	public Demande modifierDemande(Demande demande);
	
	public List<Inscription> getAllInscriptions() ;
	
	
	//SURSPECIFICATION
	
	public List<Demande> getAllDemandes();
	
	public Demande supprimerDemande(String id);
	
	//public void deleteAllDemandeClients();
}
