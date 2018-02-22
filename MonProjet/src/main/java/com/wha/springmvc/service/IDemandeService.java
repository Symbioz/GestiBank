package com.wha.springmvc.service;


import java.util.List;

import com.wha.springmvc.model.Demande;
import com.wha.springmvc.model.DemandeChequier;
import com.wha.springmvc.model.Inscription;


public interface IDemandeService {
	
	public Demande getDemandeById(Long id);
	
	public List<Demande> getDemandeByClient(Long idClient);
	
	public List<DemandeChequier> getDemandeChequierByClient(Long idClient);
	
	public List<Demande> getAllDemandesByAgent( String matricule);
	
	public void creerDemandeChequier(DemandeChequier demande);
	
	public Demande modifierDemande(Demande demande);
	
	public List<Inscription> getAllInscriptions() ;

	public List<Demande> getAllDemandes();
	
	//SURSPECIFICATION (pour les tests SOAPUI)
	
	//public List<Demande> getAllDemandes();

	//public Demande supprimerDemande(Long id);
	
	//public void deleteAllDemandes();
}
