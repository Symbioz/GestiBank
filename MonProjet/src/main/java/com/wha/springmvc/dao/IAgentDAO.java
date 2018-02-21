package com.wha.springmvc.dao;

import java.util.List;


//import fr.jgj.gestibank.model.Agent;
import com.wha.springmvc.model.Agent;


public interface IAgentDAO {
	
	public List<Agent> getAllAgents() ;
	
	public void creerAgent(Agent agent) ;
	
	public Agent modifierAgent (Agent agent) ;
	
	public void supprimerAgent(long id) ;
	
	public Agent getAgentById(long id);

}



