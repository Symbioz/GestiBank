package fr.jgj.gestibank.dao.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import fr.jgj.gestibank.dao.IDemandeDAO;
import fr.jgj.gestibank.model.Demande;

public class DemandeDAOImpl implements IDemandeDAO {
	
	//Création d'un bouchon liste de demandes
	static HashMap<String, Demande> demandesMap = createMap();

    static HashMap<String, Demande> createMap()
    {
    	HashMap<String,Demande> demandesMap = new HashMap<String,Demande>();
    	Demande demande1 = new Demande(1L,1L,new Date(),true);
    	Demande demande2 = new Demande(2L,2L, new Date(),false);
		demandesMap.put("1", demande1);
		demandesMap.put("2", demande2);
        return demandesMap;
    }
	
    //Méthodes permettant de manipuler des demandes
	@Override
	public Demande getDemandeById(String id) {
		Demande demande = demandesMap.get(id);
		return demande;
	}

	@Override
	public List<Demande> getDemandeByClient(String idClient) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Demande creerDemande(Demande demande) {
		demandesMap.put(demande.getIdClient() + "",  demande);
		return demandesMap.get(demande.getIdClient());
	}

	@Override
	public Demande modifierDemande(Demande demande) {
		if (demandesMap.get(demande.getIdClient()) != null) {
			demandesMap.get(demande.getIdClient()).setIdDemande(demande.getIdDemande());
			demandesMap.get(demande.getIdClient()).setStatus(demande.getStatus());
			demandesMap.get(demande.getIdClient()).setDateDemande(demande.getDateDemande());
		} else {
			demandesMap.put(demande.getIdClient() + "", demande);
		}
		return demandesMap.get(demande.getIdClient());
	}
	
	
	
	
	
	//SURSPECIFICATION (pour les tests SOAPUI)
	
	@Override
	public List<Demande> getAllDemandes() {
		List<Demande> demandeList = new ArrayList<Demande>(demandesMap.values());
		return demandeList;
	}
	
	@Override
	public Demande supprimerDemande(String id) {
		Demande demandeResponse = demandesMap.remove(id);
		return demandeResponse;
	}
}
