package com.wha.springmvc.model;

import java.util.Date;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

import org.hibernate.validator.constraints.NotEmpty;

@Entity
@DiscriminatorValue("CHEQUIER")
public class DemandeChequier extends Demande {
	private String matricAgent;
	private String iban;
	
	public DemandeChequier(long idClient, Date dateDemande, boolean status,String matricAgent, String iban) {
		super(idClient,  dateDemande,  status);
		this.matricAgent = matricAgent;
		this.iban = iban;
	}
	public DemandeChequier() {
		super();
	}
	public String getMatricAgent() {
		return matricAgent;
	}
	public void setMatricAgent(String matricAgent) {
		this.matricAgent = matricAgent;
	}
	public String getIban() {
		return iban;
	}
	public void setIban(String iban) {
		this.iban = iban;
	}
	
	
}
