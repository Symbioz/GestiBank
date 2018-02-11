package com.rj.gestibank.dao;

import java.util.List;
import com.rj.gestibank.model.Compte;


public interface ICompteDAO {
	
	public List<Compte> getAllComptes();
	
	public Compte getCompteByIBAN(String IBAN);
	
	public Compte ajoutCompte(Compte compte);
	
	public Compte modifierCompte(Compte compte);
	
	
}
