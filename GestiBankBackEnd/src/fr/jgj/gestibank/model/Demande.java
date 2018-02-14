package fr.jgj.gestibank.model;

import java.util.Date;


public class Demande {
	
	//@Id
	private Long identifiant;
	private Client client;
	private Date date;
	private boolean status;
    
	//Consstructeur
	public Demande(Long identifiant, Client client, Date date, boolean status) {
		super();
		this.identifiant = identifiant;
		this.client = client;
		this.date = date;
		this.status = status;
	}
	
	// Getter/Setter
	
	
	public Long getIdentifiant() {
		return identifiant;
	}
	public void setIdentifiant(Long identifiant) {
		this.identifiant = identifiant;
	}
	public Client getClient() {
		return client;
	}
	public void setClient(Client client) {
		this.client = client;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public boolean isStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	
	
	
	
	
}