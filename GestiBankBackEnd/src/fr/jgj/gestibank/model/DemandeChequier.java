package fr.jgj.gestibank.model;

public class DemandeChequier extends Demande {
	String iban;

	public DemandeChequier() {
		super();
	}

	public DemandeChequier(String iban) {
		super();
		this.iban = iban;
	}

	public String getIban() {
		return iban;
	}

	public void setIban(String iban) {
		this.iban = iban;
	}

}
