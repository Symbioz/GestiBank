package fr.jgj.gestibank.dao;
import java.util.Date;
import java.util.List;

import fr.jgj.gestibank.model.Inscription;

public interface IInscriptionDAO {
    
    public List<Inscription> getAllInscriptions() ;
	
	public List<Inscription> getAllInscriptions(String status, Date dateAffectation) ;
}




