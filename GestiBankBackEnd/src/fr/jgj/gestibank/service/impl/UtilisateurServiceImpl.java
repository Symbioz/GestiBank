package fr.jgj.gestibank.service.impl;

import java.util.List;

import fr.jgj.gestibank.dao.impl.UtilisateurDAOImpl;
import fr.jgj.gestibank.model.Utilisateur;
import fr.jgj.gestibank.service.IUtilisateurService;

public class UtilisateurServiceImpl implements IUtilisateurService {
	
	UtilisateurDAOImpl utilisateurDAOImpl = new UtilisateurDAOImpl(); 

	@Override
	public List<Utilisateur> getAllUtilisateurs() {
		List<Utilisateur> utilisateurList = utilisateurDAOImpl.getAllUtilisateurs();
		return utilisateurList;
	}

	@Override
	public Utilisateur getUtilisateurById(String id) {
		Utilisateur utilisateur = utilisateurDAOImpl.getUtilisateurById(id);
		return utilisateur;
	}

	@Override
	public Utilisateur creerUtilisateur(Utilisateur utilisateur) {
		Utilisateur userResponse = utilisateurDAOImpl.creerUtilisateur(utilisateur);
		return userResponse;
	}

	@Override
	public Utilisateur modifierUtilisateur(Utilisateur utilisateur) {
		Utilisateur userResponse = utilisateurDAOImpl.modifierUtilisateur(utilisateur);
		return userResponse;
	}

	@Override
	public Utilisateur supprimerUtilisateur(String id) {
		Utilisateur userResponse = utilisateurDAOImpl.supprimerUtilisateur(id);
		return userResponse;
	}

}
