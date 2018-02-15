package fr.jgj.gestibank.service;

import java.util.List;

import fr.jgj.gestibank.dao.UtilisateurDAO;
import fr.jgj.gestibank.model.Utilisateur;

public class UtilisateurService {
	
	//sera modifié avec l'utilisation de Spring
	UtilisateurDAO utilisateurDao = new UtilisateurDAO();
	
	//l'utilisation de Spring ne modifier aucune méthode ci-dessous
	public List<Utilisateur> getAllUtilisateurs() {
		List<Utilisateur> utilisateurList = utilisateurDao.getAllUtilisateurs();
		return utilisateurList;
	}
	
	public Utilisateur getUtilisateurForId(String id) {
		Utilisateur utilisateur = utilisateurDao.getUtilisateurForId(id);
		return utilisateur;
	}
	
	public Utilisateur createUtilisateur(Utilisateur utilisateur) {
		Utilisateur utilisateurResponse = utilisateurDao.createUtilisateur(utilisateur);
		return utilisateurResponse;
	}
	
	public Utilisateur updateUtilisateur(Utilisateur utilisateur) {
		Utilisateur utilisateurResponse = utilisateurDao.updateUtilisateur(utilisateur);
		return utilisateurResponse;
	}
	
	public Utilisateur deleteUtilisateur(String id) {
		Utilisateur utilisateurResponse = utilisateurDao.deleteUtilisateur(id);
		return utilisateurResponse;
	}
	
	public void deleteAllUtilisateurs() {
		utilisateurDao.deleteAllUtilisateurs();
	}
}
