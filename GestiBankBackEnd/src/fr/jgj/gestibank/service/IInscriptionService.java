package fr.jgj.gestibank.service;

import java.util.Date;
import java.util.List;

import fr.jgj.gestibank.model.Inscription;

public interface IInscriptionService {
	
	public List<Inscription> getAllInscriptions() ;
	
	public List<Inscription> getAllInscriptions(String status, Date dateAffectation) ;
		
}

