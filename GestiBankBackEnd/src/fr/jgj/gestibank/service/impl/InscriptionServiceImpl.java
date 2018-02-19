package fr.jgj.gestibank.service.impl;

import java.util.List;


import fr.jgj.gestibank.model.Inscription;
import fr.jgj.gestibank.dao.impl.InscriptionDAOImpl;
import fr.jgj.gestibank.service.IInscriptionService;

public class InscriptionServiceImpl implements IInscriptionService {
	
	InscriptionDAOImpl inscriptionDaoImpl = new InscriptionDAOImpl();
	
    public List<Inscription> getAllInscriptions(){
    	List<Inscription> inscriptionList = inscriptionDaoImpl.getAllInscriptions();
    	return inscriptionList;
    }


}




