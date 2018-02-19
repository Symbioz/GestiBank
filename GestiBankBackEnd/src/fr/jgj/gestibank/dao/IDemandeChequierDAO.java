package fr.jgj.gestibank.dao;

public interface IDemandeChequierDAO extends IDemandeDAO {
	public void demanderChequier(String iban);
}
