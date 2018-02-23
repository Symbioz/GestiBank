

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

CREATE TABLE IF NOT EXISTS `utilisateur` (
  `TYPE_ENTITE` varchar(31) NOT NULL,
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `adresse` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `identifiant` varchar(255) DEFAULT NULL,
  `mdp` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `numTel` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `dateDebutContrat` datetime DEFAULT NULL,
  `matricule` varchar(255) DEFAULT NULL,
  `comptes` tinyblob,
  `documents` tinyblob,
  `matriculeAgent` varchar(255) DEFAULT NULL,
  `nbEnfants` int(11) DEFAULT NULL,
  `notifications` tinyblob,
  `situation` varchar(255) DEFAULT NULL,
  `id_agent` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_eegjo9myrt73p4687bs70hgfr` (`matricule`),
  KEY `FK_2tn6u0xqwgeylit1srmx7nvun` (`id_agent`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=220 ;

--
-- Contenu de la table `utilisateur`
--

INSERT INTO `utilisateur` (`TYPE_ENTITE`, `id`, `adresse`, `email`, `identifiant`, `mdp`, `nom`, `numTel`, `prenom`, `dateDebutContrat`, `matricule`, `comptes`, `documents`, `matriculeAgent`, `nbEnfants`, `notifications`, `situation`, `id_agent`) VALUES
('AGENT', 1, '180 rue de l''abrevoir Lille', 'nicolas.David@gestibank.fr', 'A001Agent', '1234', 'David', '0616859985', 'Nicolas', '2018-01-01 01:00:00', 'A001', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('AGENT', 2, 'avenue de Lille Roubaix', 'petit.laure@gesibank.fr', 'A002Agent', '1234', 'Dion', '0659683559', 'Laurie', '2018-02-01 01:00:00', 'A002', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('CLIENT', 216, '120 rue des hirondelle Ronchin', 'jessica.homer@free.fr', 'JesHomGestibank', '1237', 'Homère', '064682933', 'jessica', NULL, NULL, NULL, NULL, NULL, 1, NULL, 'marié', 1),
('CLIENT', 217, '10 rue des chênes HEM', 'jeremie.climb@free.fr', 'JermclimbGestibank', '1', 'climb', '0645958256', 'jeremie', NULL, NULL, NULL, NULL, NULL, 1, NULL, 'marié', 1),
('CLIENT', 218, '3 rue champagne Douai', 'marc.vandame@free.fr', 'MarcVandameGestibank', '1', 'Vandame', '0645958256', 'Marc', NULL, NULL, NULL, NULL, NULL, 1, NULL, 'marié', 2),
('AGENT', 219, 'vincentjenni@gmail.com', 'paul.Petit@gestibank', 'A003Agent', '0616489866', 'Petit', '06165896652', 'Paul', '2018-03-01 01:00:00', 'A003', NULL, NULL, NULL, NULL, NULL, NULL, NULL);

--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD CONSTRAINT `FK_2tn6u0xqwgeylit1srmx7nvun` FOREIGN KEY (`id_agent`) REFERENCES `utilisateur` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
