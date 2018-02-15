package fr.jgj.gestibank.service;

import java.util.List;

import fr.jgj.gestibank.dao.DemandeDAO;
import fr.jgj.gestibank.model.Demande;

public class DemandeService {

	// sera modifié avec l'utilisation de Spring
	DemandeDAO DemandeDao = new DemandeDAO();

	// l'utilisation de Spring ne modifier aucune méthode ci-dessous
	public List<Demande> getAllDemandes() {
		List<Demande> DemandeList = DemandeDao.getAllDemandes();
		return DemandeList;
	}

	public Demande getDemandeById(String id) {
		Demande Demande = DemandeDao.getDemandeById(id);
		return Demande;
	}

	public Demande createDemande(Demande Demande) {
		Demande DemandeResponse = DemandeDao.createDemande(Demande);
		return DemandeResponse;
	}

	public Demande updateDemande(Demande Demande) {
		Demande DemandeResponse = DemandeDao.updateDemande(Demande);
		return DemandeResponse;
	}

	public Demande deleteDemande(String id) {
		Demande DemandeResponse = DemandeDao.deleteDemande(id);
		return DemandeResponse;
	}

	public void deleteAllDemandes() {
		DemandeDao.deleteAllDemandes();
	}

}
