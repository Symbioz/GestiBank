package fr.jgj.gestibank.service.impl;

import java.util.List;

import fr.jgj.gestibank.dao.impl.DemandeDAOImpl;
import fr.jgj.gestibank.model.Demande;
import fr.jgj.gestibank.model.DemandeChequier;
import fr.jgj.gestibank.model.Inscription;
import fr.jgj.gestibank.service.IDemandeService;

public class DemandeServiceImpl implements IDemandeService {

	//� modifier pour utiliser spring
	DemandeDAOImpl demandeDAOImpl = new DemandeDAOImpl();

	
	
	//R�cup�ration d'une demande via son identifiant unique
	@Override
	public Demande getDemandeById(String id) {
		Demande demande = demandeDAOImpl.getDemandeById(id);
		return demande;
	}
	
	//R�cup�ration des demandes li�es � un client en particulier
	@Override
	public List<DemandeChequier> getDemandeByClient(String idClient) {
		List<DemandeChequier> demandes = demandeDAOImpl.getDemandeChequierByClient(idClient);
		return demandes;
	}

	//Cr�ation d'une demande
	@Override
	public DemandeChequier creerDemandeChequier(DemandeChequier demande) {
		DemandeChequier demande1 = this.demandeDAOImpl.creerDemandeChequier(demande);
		return demande1;
	}

	//Modification d'une demande 
	@Override
	public Demande modifierDemande(Demande demande) {
		return demandeDAOImpl.modifierDemande(demande);
	}



	
    public List<Inscription> getAllInscriptions(){
    	List<Inscription> inscriptionList = demandeDAOImpl.getAllInscriptions();
    	return inscriptionList;
    }
	
	
	//SURSPECIFICATION (pour les tests SOAPUI)
	
	//R�cup�ration de toutes les demandes
	@Override
	public List<Demande> getAllDemandes() {
		List<Demande> demandes = demandeDAOImpl.getAllDemandes();
		return demandes;
	}

	//	@Override
	public Demande supprimerDemande(String id) {
		return demandeDAOImpl.supprimerDemande(id);
	}

}
