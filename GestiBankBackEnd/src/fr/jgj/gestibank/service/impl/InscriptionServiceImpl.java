package fr.jgj.gestibank.service.impl;

import java.util.Date;
import java.util.List;

import fr.jgj.gestibank.model.Agent;
import fr.jgj.gestibank.model.Inscription;
import fr.jgj.gestibank.dao.impl.AgentDAOImpl;
import fr.jgj.gestibank.dao.impl.InscriptionDAOImpl;
import fr.jgj.gestibank.service.IInscriptionService;




public class InscriptionServiceImpl implements IInscriptionService {
	
	InscriptionDAOImpl inscriptionDaoImpl = new InscriptionDAOImpl();
	
    public List<Inscription> getAllInscriptions(){
    	List<Agent> agentList = inscriptionDaoImpl.getAllInscriptions();
    	return inscriptionList;
    }
	
	public List<Inscription> getAllInscriptions(String status, Date dateAffectation) {
		// A implementer
	}

}




