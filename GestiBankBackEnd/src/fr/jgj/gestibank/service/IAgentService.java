package fr.jgj.gestibank.service;

import java.util.List;

import fr.jgj.gestibank.model.Agent;

public interface IAgentService {
	
	public List<Agent> getAllAgents() ;
	
	public Agent creerAgent(Agent agent) ;
	
	public Agent modifierAgent(Agent agent);
	
	public Agent supprimerAgent(Long id) ;
	
	public Agent getAgentById(Long id);
	
	
}

