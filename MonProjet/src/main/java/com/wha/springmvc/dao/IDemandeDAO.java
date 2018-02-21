package com.wha.springmvc.dao;

import java.util.List;

import com.wha.springmvc.model.Demande;



public interface IDemandeDAO {
	
	
	public Demande getDemandeById(long id);
	
	public List<Demande> getDemandeByClient(long idClient);
	
	public void creerDemande(Demande demande);
	
	public void modifierDemande(Demande demande);
	
	
	//SURSPECIFICATION
	
	//public List<Demande> getAllDemandes();
	
	//public Demande supprimerDemande(String id);

}
