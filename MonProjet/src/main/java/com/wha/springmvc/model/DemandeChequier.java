package com.wha.springmvc.model;

import java.util.Date;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

import org.hibernate.validator.constraints.NotEmpty;

@Entity
@DiscriminatorValue("CHEQUIER")
public class DemandeChequier extends Demande {
	private String iban;
	
	public DemandeChequier(long idClient, Date dateDemande, boolean status, String iban) {
		super(idClient,  dateDemande,  status);
		this.iban = iban;
	}
	public DemandeChequier() {
		super();
	}

	public String getIban() {
		return iban;
	}
	public void setIban(String iban) {
		this.iban = iban;
	}
	
	
}
