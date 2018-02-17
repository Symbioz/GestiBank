package fr.jgj.gestibank.dao;

import java.util.List;

import fr.jgj.gestibank.model.Utilisateur;

public interface IUtilisateurDAO {
	
	public List<Utilisateur> getAllUtilisateurs();
	
	public Utilisateur getUtilisateurById(String id);
	
	public Utilisateur creerUtilisateur(Utilisateur utilisateur);
	
	public Utilisateur modifierUtilisateur(Utilisateur utilisateur);
	
	public Utilisateur supprimerUtilisateur(String id);
	
}
