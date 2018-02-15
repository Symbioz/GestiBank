package fr.jgj.gestibank.model;

import java.util.Date;


public class Demande {
	
	//@Id
	private Long identifiant;
	private Long idClient;
	private Date date;
	private boolean status;
    
	//Consstructeur
	
	public Demande() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Demande(Long identifiant, Long idClient, Date date, boolean status) {
		super();
		this.identifiant = identifiant;
		this.idClient = idClient;
		this.date = date;
		this.status = status;
	}
	
	// Getter/Setter
	
	
	

	public Long getIdClient() {
		return idClient;
	}

	public void setIdClient(Long idClient) {
		this.idClient = idClient;
	}

	public Long getIdentifiant() {
		return identifiant;
	}
	public void setIdentifiant(Long identifiant) {
		this.identifiant = identifiant;
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