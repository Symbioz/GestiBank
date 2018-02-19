package fr.jgj.gestibank.model;

public class DemandeMdp extends Demande {
	String mdp;

	public DemandeMdp(String mdp) {
		super();
		this.mdp = mdp;
	}

	public DemandeMdp() {
		super();
	}

	public String getMdp() {
		return mdp;
	}

	public void setMdp(String mdp) {
		this.mdp = mdp;
	}
	
	
}