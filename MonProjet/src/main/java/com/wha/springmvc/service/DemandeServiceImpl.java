package com.wha.springmvc.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wha.springmvc.dao.IDemandeDAO;
import com.wha.springmvc.model.Demande;
import com.wha.springmvc.model.DemandeChequier;
import com.wha.springmvc.model.Inscription;



@Service("demandeService")
@Transactional
public class DemandeServiceImpl implements IDemandeService {

@Autowired
	IDemandeDAO demandeDAOImpl;

	
	
	//R�cup�ration d'une demande via son identifiant unique
	@Override
	public Demande getDemandeById(Long id) {
		Demande demande = demandeDAOImpl.getDemandeById(id);
		return demande;
	}
	
	//R�cup�ration des demandes li�es � un client en particulier
	@Override
	public List<DemandeChequier> getDemandeChequierByClient(Long idClient) {
		List<DemandeChequier> demandes = demandeDAOImpl.getDemandeChequierByClient(idClient);
		return demandes;
	}

	//Cr�ation d'une demande
	@Override
	public void creerDemandeChequier(DemandeChequier demande) {
		this.demandeDAOImpl.creerDemandeChequier(demande);
	}

	//Modification d'une demande 
	@Override
	public Demande modifierDemande(Demande demande) {
		return demandeDAOImpl.modifierDemande(demande);
	}

	@Override
	public List<Demande> getDemandeByClient(Long idClient) {
		List<Demande> demande = demandeDAOImpl.getDemandeByClient(idClient);
		return demande;
	}

	@Override
    public List<Inscription> getAllInscriptions(){
   	List<Inscription> inscriptionList = demandeDAOImpl.getAllInscriptions();
    	return inscriptionList;
    }

	

	@Override
	public List<Demande> getAllDemandesByAgent(String matricule) {
		List<Demande> demande = demandeDAOImpl.getAllDemandeByAgent(matricule);
		return demande;
	}

	@Override
	public List<Demande> getAllDemandes() {
		List<Demande> demande = demandeDAOImpl.getAllDemandes();
		return demande;
	}
	
	
	//SURSPECIFICATION (pour les tests SOAPUI)
	
	//R�cup�ration de toutes les demandes
//	@Override
//	public List<Demande> getAllDemandes() {
//		List<Demande> demandes = demandeDAOImpl.getAllDemandes();
//		return demandes;
//	}

	//	@Override
//	public Demande supprimerDemande(Long id) {
//		Demande demande = this.demandeDAOImpl.getDemandeById(id);
//		this.demandeDAOImpl.supprimerDemande(demande);
//		return demande;
//	}

	
}

