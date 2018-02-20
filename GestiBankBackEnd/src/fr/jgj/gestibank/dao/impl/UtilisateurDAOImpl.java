package fr.jgj.gestibank.dao.impl;

import java.io.File;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import fr.jgj.gestibank.dao.IUtilisateurDAO;
import fr.jgj.gestibank.model.Utilisateur;
import fr.jgj.gestibank.model.Agent;
import fr.jgj.gestibank.model.Client;
import fr.jgj.gestibank.model.Compte;
import fr.jgj.gestibank.model.Notification;

public class UtilisateurDAOImpl implements IUtilisateurDAO {

	static HashMap<String, Utilisateur> utilisateursMap = createMap();

    static HashMap<String, Utilisateur> createMap()
    {
    	HashMap<String,Utilisateur> utilisateursMap = new HashMap<String,Utilisateur>();
    	Utilisateur utilisateur1 = new Utilisateur(1, "moi","encore moi ", "0000",  "moa@gk.com", "blabla 59000", "symbioz", null);
		Utilisateur utilisateur2 = new Utilisateur(2, "lui","encore lui ", "0000",  "lui@gk.com", "blabla 59000", "LLLLUI", null);
		Client client1 = new Client(3, "Raes", "Jordan", "0000", "jordan.raes@email", "59250 Halluin", "jraes", "0600000000", 
									0, "Ca ne nous regarde pas", new ArrayList<Compte>(), new ArrayList<File>(), new ArrayList<Notification>(), "A001");

		Agent agent2 = new Agent( 2,"Vinc", "jess","login2", "111", "jes@fre.fr", "rue de lille 59200 ","0564595515", 573, new Date());
		utilisateursMap.put("1", utilisateur1);
		utilisateursMap.put("2", utilisateur2);
		utilisateursMap.put("3", client1);
		utilisateursMap.put("4", agent2);
		
		
        return utilisateursMap;
    }
    
    @Override
	public List<Utilisateur> getAllUtilisateurs() {
		List<Utilisateur> utilisateurList = new ArrayList<Utilisateur>(utilisateursMap.values());
		return utilisateurList;
	}

	@Override
	public Utilisateur getUtilisateurById(String id) {
		Utilisateur utilisateur = utilisateursMap.get(id);
		return utilisateur;
	}

	@Override
	public Utilisateur creerUtilisateur(Utilisateur utilisateur) {
		utilisateursMap.put(utilisateur.getId() + "",  utilisateur);
		return utilisateursMap.get(utilisateur.getId());
	}

	@Override
	public Utilisateur modifierUtilisateur(Utilisateur utilisateur) {
		if (utilisateursMap.get(utilisateur.getId()) != null) {
			utilisateursMap.get(utilisateur.getId()).setIdentifiant(utilisateur.getIdentifiant());
			utilisateursMap.get(utilisateur.getId()).setAdresse(utilisateur.getAdresse());
			utilisateursMap.get(utilisateur.getId()).setEmail(utilisateur.getEmail());
		} else {
			utilisateursMap.put(utilisateur.getId() + "", utilisateur);
		}
		return utilisateursMap.get(utilisateur.getId());
	}

	@Override
	public Utilisateur supprimerUtilisateur(String id) {
		Utilisateur utilisateurResponse = utilisateursMap.remove(id);
		return utilisateurResponse;
	}

}
