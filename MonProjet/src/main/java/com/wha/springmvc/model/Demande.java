package com.wha.springmvc.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.validator.constraints.NotEmpty;


@Entity
@Table(name="DEMANDE")
public class Demande {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long idDemande;
	@NotEmpty
	private long idClient;
	@NotEmpty
	private Date dateDemande;
	@NotEmpty
	private boolean status;
    
	//Constructeur
	
	public Demande() {
		
	}
	
	public Demande(long idClient, Date dateDemande, boolean status) {
		super();
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