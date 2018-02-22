package com.wha.springmvc.service;

import java.util.List;








import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.wha.springmvc.dao.IClientDAO;
import com.wha.springmvc.model.Client;

@Service("clientService")
@Transactional
public class ClientServiceImpl implements IClientService{
     
	@Autowired
	private IClientDAO clientDao;
	
	public List<Client> getAllClients() {
		List<Client> clientList = clientDao.getAllClients();
		return clientList;
	}
	
    public Client getClientById(long id) {
		
		return clientDao.getClientById((int)id);
	}
    
    public List<Client> getClientByMatriculeAgent(String matriculeAgent){
    	   return clientDao.getClientByMatriculeAgent( matriculeAgent);
    };
	
    public void modifierClient(Client client) {	
    	Client entity = clientDao.getClientById((long)client.getId());
        if(entity!=null){
        	// On ne modifie que le matricule de l'agent
        	//entity.setMatriculeAgent(client.getMatriculeAgent());
        	
        }
        clientDao.creerClient(entity);
	}

}