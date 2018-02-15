package fr.jgj.gestibank.dao;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import fr.jgj.gestibank.model.Utilisateur;

public class UtilisateurDAO {
	
	//static HashMap<String, Utilisateur> utilisateursMap = new HashMap<String, Utilisateur>();
	static HashMap<String, Utilisateur> utilisateursMap = createMap();

    static HashMap<String, Utilisateur> createMap()
    {
    	HashMap<String,Utilisateur> utilisateursMap = new HashMap<String,Utilisateur>();
    	Utilisateur utilisateur1 = new Utilisateur(1, "moi","encore moi ", "0000",  "moa@gk.com", "blabla 59000", "symbioz", null);
		Utilisateur utilisateur2 = new Utilisateur(2, "lui","encore lui ", "0000",  "lui@gk.com", "blabla 59000", "LLLLUI", null);
		utilisateursMap.put("1", utilisateur1);
		utilisateursMap.put("2", utilisateur2);
        return utilisateursMap;
    }
    	
    		
	public UtilisateurDAO() {
//		Utilisateur utilisateur1 = new Utilisateur(1, "wajih", "Paris 75000", "wajih@gk.com");
//		Utilisateur utilisateur2 = new Utilisateur(2, "aline", "Rueil 92500", "aline@gk.com");
//		utilisateursMap.put("1", utilisateur1);
//		utilisateursMap.put("2", utilisateur2);
	}
	
	public List<Utilisateur> getAllUtilisateurs() {
		List<Utilisateur> utilisateurList = new ArrayList<Utilisateur>(utilisateursMap.values());
		return utilisateurList;
	}
	
	public Utilisateur getUtilisateurForId(String id) {
		Utilisateur utilisateur = utilisateursMap.get(id);
		return utilisateur;
	}
	
	public Utilisateur createUtilisateur(Utilisateur utilisateur) {
		utilisateursMap.put(utilisateur.getId() + "",  utilisateur);
		return utilisateursMap.get(utilisateur.getId());
	}
	
	public Utilisateur updateUtilisateur(Utilisateur utilisateur) {
		if (utilisateursMap.get(utilisateur.getId()) != null) {
			utilisateursMap.get(utilisateur.getId()).setIdentifiant(utilisateur.getIdentifiant());
			utilisateursMap.get(utilisateur.getId()).setAdresse(utilisateur.getAdresse());
			utilisateursMap.get(utilisateur.getId()).setEmail(utilisateur.getEmail());
		} else {
			utilisateursMap.put(utilisateur.getId() + "", utilisateur);
		}
		return utilisateursMap.get(utilisateur.getId());
	}
	
	public Utilisateur deleteUtilisateur(String id) {
		Utilisateur utilisateurResponse = utilisateursMap.remove(id);
		return utilisateurResponse;
	}
	
	public void deleteAllUtilisateurs() {
		utilisateursMap.clear();
	}
	
}
