package com.wha.springmvc.service;

import java.util.List;

import com.wha.springmvc.model.Agent;
import com.wha.springmvc.model.Client;


public interface IAgentService {
	
	public List<Agent> getAllAgents() ;
	
	public void creerAgent(Agent agent) ;
	
	public void modifierAgent(Agent agent);
	
	public void supprimerAgent(long id) ;
	
	public Agent getAgentById(long id);
	
	public Agent getAgentByMatricule(String matricule);
	
	//public void AffecterAgent(Client client, Agent agent);
	
	
	
	
}

