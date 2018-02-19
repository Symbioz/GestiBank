package fr.jgj.gestibank.service;

import java.util.List;

import fr.jgj.gestibank.model.Utilisateur;

public interface IUtilisateurService {
	
	public List<Utilisateur> getAllUtilisateurs();
	
	public Utilisateur getUtilisateurById(String id);
	
	public Utilisateur creerUtilisateur(Utilisateur utilisateur);
	
	public Utilisateur modifierUtilisateur(Utilisateur utilisateur);
	
	public Utilisateur supprimerUtilisateur(String id);

}
