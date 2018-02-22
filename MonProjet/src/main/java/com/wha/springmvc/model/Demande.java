package com.wha.springmvc.model;

import java.util.Date;

<<<<<<< HEAD
=======
import javax.persistence.DiscriminatorColumn;
import javax.persistence.DiscriminatorValue;
>>>>>>> Guillaume
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
<<<<<<< HEAD
=======
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
>>>>>>> Guillaume
import javax.persistence.Table;

import org.hibernate.validator.constraints.NotEmpty;


@Entity
<<<<<<< HEAD
@Table(name="DEMANDE")
=======
@Inheritance(strategy=InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name="TYPE_DEMANDE")
@DiscriminatorValue("DEMANDE")
>>>>>>> Guillaume
public class Demande {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long idDemande;
<<<<<<< HEAD
	@NotEmpty
	private long idClient;
	@NotEmpty
	private Date dateDemande;
	@NotEmpty
=======
	private long idClient;
	private Date dateDemande;
>>>>>>> Guillaume
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