package com.wha.springmvc.dao;

import java.util.List;

import com.wha.springmvc.model.Demande;
import com.wha.springmvc.model.DemandeChequier;
import com.wha.springmvc.model.Inscription;



public interface IDemandeDAO {
	
	
	public Demande getDemandeById(long id);
	
	public List<Demande> getDemandeByClient(long idClient);
	
	public List<Inscription> getAllInscriptions();
	
	public void creerDemande(Demande demande);
	
	public void creerDemandeChequier(DemandeChequier demande);
	
	public Demande modifierDemande(Demande demande);

	List<Demande> getAllDemandeByAgent(String matricule);

	List<Demande> getAllDemandes();

	List<DemandeChequier> getDemandeChequierByClient(Long idClient);
	
	
	//SURSPECIFICATION
	
	//public List<Demande> getAllDemandes();
	
	//public Demande supprimerDemande(String id);

}
