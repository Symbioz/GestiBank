package fr.jgj.gestibank.model;

import java.util.Date;


public class Demande {
	
	//@Id
	private long idDemande;
	private long idClient;
	private Date dateDemande;
	private boolean status;
    
	//Constructeur
	
	public Demande() {
		super();
	}
	
	public Demande(long idDemande, Long idClient, Date dateDemande, boolean status) {
		super();
		this.idDemande = idDemande;
		this.idClient = idClient;
		this.dateDemande = dateDemande;
		this.status = status;
	}
	
	// Getter/Setter
	public long getIdClient() {
		return idClient;
	}
	public void setIdClient(long idClient) {
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