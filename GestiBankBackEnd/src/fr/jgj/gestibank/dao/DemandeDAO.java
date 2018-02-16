package fr.jgj.gestibank.dao;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import fr.jgj.gestibank.model.Demande;

public class DemandeDAO {

	//static HashMap<String, Demande> demandesMap = new HashMap<String, Demande>();
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
    	
    		
	public DemandeDAO() {
//		Demande demande1 = new Demande(1, "wajih", "Paris 75000", "wajih@gk.com");
//		Demande demande2 = new Demande(2, "aline", "Rueil 92500", "aline@gk.com");
//		demandesMap.put("1", demande1);
//		demandesMap.put("2", demande2);
	}
	
	public List<Demande> getAllDemandes() {
		List<Demande> demandeList = new ArrayList<Demande>(demandesMap.values());
		return demandeList;
	}
	
	public Demande getDemandeById(String id) {
		Demande demande = demandesMap.get(id);
		return demande;
	}
	
	public Demande createDemande(Demande demande) {
		demandesMap.put(demande.getIdClient() + "",  demande);
		return demandesMap.get(demande.getIdClient());
	}
	
	public Demande updateDemande(Demande demande) {
		if (demandesMap.get(demande.getIdClient()) != null) {
			demandesMap.get(demande.getIdClient()).setIdDemande(demande.getIdDemande());
			demandesMap.get(demande.getIdClient()).setStatus(demande.getStatus());
			demandesMap.get(demande.getIdClient()).setDateDemande(demande.getDateDemande());
		} else {
			demandesMap.put(demande.getIdClient() + "", demande);
		}
		return demandesMap.get(demande.getIdClient());
	}
	
	public Demande deleteDemande(String id) {
		Demande demandeResponse = demandesMap.remove(id);
		return demandeResponse;
	}
	
	public void deleteAllDemandes() {
		demandesMap.clear();
	}
	
}
