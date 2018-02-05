package model;

public class Adresse {
	
	private String voie;
	private int codePostal;
	private String ville;
	
	public Adresse(String voie, int codePostal, String ville) {
		super();
		this.voie = voie;
		this.codePostal = codePostal;
		this.ville = ville;
	}

	public String getVoie() {
		return voie;
	}

	public void setVoie(String voie) {
		this.voie = voie;
	}

	public int getCodePostal() {
		return codePostal;
	}

	public void setCodePostal(int codePostal) {
		this.codePostal = codePostal;
	}

	public String getVille() {
		return ville;
	}

	public void setVille(String ville) {
		this.ville = ville;
	}
}


   





	