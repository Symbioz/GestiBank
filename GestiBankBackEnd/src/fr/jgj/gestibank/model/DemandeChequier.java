package fr.jgj.gestibank.model;

import java.util.Date;

public class DemandeChequier extends Demande {
	private String matricAgent;
	private String iban;
	
	public DemandeChequier(Long idDemande, Long idClient, Date dateDemande, boolean status,String matricAgent, String iban) {
		super( idDemande,  idClient,  dateDemande,  status);
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
