package fr.jgj.gestibank.model;

import java.util.Date;


public class Demande {
	
	//@Id
	private Long idDemande;
	private Long idClient;
	private Date dateDemande;
	private boolean status;
    
	//Consstructeur
	
	public Demande() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Demande(Long idDemande, Long idClient, Date dateDemande, boolean status) {
		super();
		this.idDemande = idDemande;
		this.idClient = idClient;
		this.dateDemande = dateDemande;
		this.status = status;
	}
	
	// Getter/Setter
	
	
	

	public Long getIdClient() {
		return idClient;
	}

	public void setIdClient(Long idClient) {
		this.idClient = idClient;
	}

	public Long getIdDemande() {
		return idDemande;
	}
	public void setIdDemande(Long idDemande) {
		this.idDemande = idDemande;
	}
	
	public Date getDateDemande() {
		return dateDemande;
	}
	public void setDateDemande(Date date) {
		this.dateDemande = date;
	}
	public boolean getStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}

	
}