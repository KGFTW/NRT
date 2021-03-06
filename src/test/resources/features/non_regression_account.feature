#Author: sylvain.tropee@accenture.com

@tag
Feature: Test Non regression account

Test NRT with cucumber
	
	 @Login
  Scenario: Test login
    Given je suis sur la page de connection Salesforce
    When je remplis le login et le password
    Then jarrive sur la page d'accueil de Salesforce  
  	Then je change de vue si necessaire 
	
	
	Scenario: Clic sur Account
		Given je suis sur la page d'accueil
		Then je vais sur la page principal de Salesforce
		When je verifie que l'onglet Account est present
		Then je clique sur l'onglet Account
		
 
  Scenario Outline: Verification de la presence des champs
  	Then je verifie la presence du label <labelName> de la section <sectionName> et son type <elementType>    	 		
		
  	Examples:
 		|labelName									|sectionName						|elementType|
 		|Account Name								|Account Information		|Label Edit |
 		|Parent Account							|Account Information		|Label Edit |
 		|Account Number							|Account Information		|Label Edit |
 		|Account Site								|Account Information		|Label Edit |
 		|Type												|Account Information		|Label Edit |
 		|Industry										|Account Information		|Label Edit |
 		|Annual Revenue							|Account Information		|Label Edit |
 		|Rating											|Account Information		|Label Edit |
 		|Phone 											|Account Information		|Label Edit |
 		|Fax												|Account Information		|Label Edit |
 		|Website										|Account Information		|Label Edit |
 		|Ticker Symbol							|Account Information		|Label Edit |
 		|Ownership									|Account Information		|Label Edit |
 		|Employees									|Account Information		|Label Edit |
 		|SIC Code										|Account Information		|Label Edit |
 		|Billing Street							|Address Information		|Label Edit |
 		|Billing Zip/Postal Code		|Address Information		|Label Edit |
 		|Billing City								|Address Information		|Label Edit |
 		|Billing State/Province			|Address Information		|Label Edit |
 		|Billing Country						|Address Information		|Label Edit |
 		|Shipping Street						|Address Information		|Label Edit |
 		|Shipping Zip/Postal Code		|Address Information		|Label Edit |
 		|Shipping City							|Address Information		|Label Edit |
 		|Shipping State/Province		|Address Information		|Label Edit |
 		|Shipping Country						|Address Information		|Label Edit |
 		|Customer Priority					|Additional Information	|Label Edit |
 	 	|SLA Expiration Date				|Additional Information	|Label Edit |
 	 	|Number of Locations				|Additional Information	|Label Edit |
 	 	|Active											|Additional Information	|Label Edit |
 	 	|SLA												|Additional Information	|Label Edit |
 	 	|SLA Serial Number					|Additional Information	|Label Edit |
 	 	|Upsell Opportunity					|Additional Information	|Label Edit |
 	 	|Description								|Description Information|Label Edit |
 	 	
 	
 	Scenario Outline: Verification de la possibilite d'edition des champs d'Account (Affichage d'edition)
 		Then je verifie que le champ qui suit le label <labelName> de la section <sectionName> et de type <elementType>
 		
 		Examples:
 		|labelName									|sectionName						|elementType|
 		|Account Name								|Account Information		|Input			|
 		|Parent Account							|Account Information		|searchField|
 		|Account Number							|Account Information		|Input 			|
 		|Account Site								|Account Information		|Input 			|
 		|Type												|Account Information		|select			|
 		|Industry										|Account Information		|select 		|
 		|Annual Revenue							|Account Information		|Input 			|
 		|Rating											|Account Information		|select			|
 		|Phone 											|Account Information		|Input			|
 		|Fax												|Account Information		|Input 			|
 		|Website										|Account Information		|Input 			|
 		|Ticker Symbol							|Account Information		|Input 			|
 		|Ownership									|Account Information		|select 		|
 		|Employees									|Account Information		|Input 			|
 		|SIC Code										|Account Information		|Input 			|
 		|Billing Street							|Address Information		|textArea 	|
 		|Billing Zip/Postal Code		|Address Information		|Input 			|
 		|Billing City								|Address Information		|Input 			|
 		|Billing State/Province			|Address Information		|Input			|
 		|Billing Country						|Address Information		|Input			|
 		|Shipping Street						|Address Information		|textArea		|
 		|Shipping Zip/Postal Code		|Address Information		|Input 			|
 		|Shipping City							|Address Information		|Input 			|
 		|Shipping State/Province		|Address Information		|Input 			|
 		|Shipping Country						|Address Information		|Input 			|
 		|Customer Priority					|Additional Information	|select 		|
 	 	|SLA Expiration Date				|Additional Information	|Date 			|
 	 	|Number of Locations				|Additional Information	|Input 			|
 	 	|Active											|Additional Information	|select 		|
 	 	|SLA												|Additional Information	|select 		|
 	 	|SLA Serial Number					|Additional Information	|Input 			|
 	 	|Upsell Opportunity					|Additional Information	|select 		|
 	 	|Description								|Description Information|textArea		|
 	 	
 	 	@Classic
 	 	Scenario Outline: Verification de la presence des boutons "Save" / "Save & New" / "Cancel" en haut et bas de page (Affichage d'edition)
 	 		Then je verifie la presence du bouton <buttonName> situe en <position>
 	 		
 	 			Examples:
 				|buttonName					|position	|
 				|save								|top			|
 				|save_new						|top			|
 				|cancel							|top			|
 				|save								|bottom		|
 				|save_new						|bottom		|
 				|cancel							|bottom		|
 				
 		@Lightning		
 		Scenario Outline: Verification de la presence des boutons "Save" / "Save & New" / "Cancel" en bas de page (Affichage d'edition)
   	 Then verification de  la presence du bouton <buttonName>

    Examples: 
      | buttonName |
      | Save       |
      | Save & New |
      | Cancel     |		
 				
 		Scenario Outline: Remplissage des champs de l'Account
 			Then je remplis le champ <elementName> de la section <sectionName> de type <elementType> avec la valeur <values>
 				
 			Examples:
 			|elementName									|sectionName										|elementType				|values												|
 			|Account Name									|Account Information						|Input							|															| 		
 			|Account Number								|Account Information						|Input							|2121212121										|
 			|Type													|Account Information						|select							|Other												|
 			|Type													|Account Information						|select							|Prospect											|
 			|Type													|Account Information						|select							|Customer - Direct						|
 			|Type													|Account Information						|select							|Customer - Channel						|
 			|Type													|Account Information						|select							|Channel Partner / Reseller		|
 			|Type													|Account Information						|select							|Installation Partner					|
 			|Type													|Account Information						|select							|Technology Partner						|
 			|Type													|Account Information						|select							|Prospect											|
 			|Industry											|Account Information						|select							|Agriculture									|
 			|Industry											|Account Information						|select							|Consulting										|
 			|Industry											|Account Information						|select							|Energy												|
 			|Industry											|Account Information						|select							|Finance											|
 			|Industry											|Account Information						|select							|Media												|
 			|Industry											|Account Information						|select							|Telecommunications						|
 			|Annual Revenue								|Account Information						|Input							|50 000												|
 			|Rating												|Account Information						|select							|Hot													|
 			|Rating												|Account Information						|select							|Warm													|
 			|Rating												|Account Information						|select							|Cold													|
 			|Rating												|Account Information						|select							|Warm													|
 			|Phone												|Account Information						|Input							|0202020202										|
 			|Fax													|Account Information						|Input							|0404040404										|
 			|Website											|Account Information						|Input							|https://www.accenture.com		|
 			|Ownership										|Account Information						|select							|Public												|
 			|Ownership										|Account Information						|select							|Private											|
 			|Ownership										|Account Information						|select							|Subsidiary										|
 			|Ownership										|Account Information						|select							|Private											|
 			|Billing Street								|Address Information						|textArea						|500, route de Vannes					|
 			|Billing Zip/Postal Code			|Address Information						|Input							|44000												|
 			|Billing City									|Address Information						|Input							|Nantes												|
 			|Billing State/Province				|Address Information						|Input							|Loire Atlantique							|
 			|Billing Country							|Address Information						|Input							|France												|
 			|Shipping Street							|Address Information						|textArea						|500, route de Vannes					|
 			|Shipping Zip/Postal Code			|Address Information						|Input							|44000												|
 			|Shipping City								|Address Information						|Input							|Nantes												|
 			|Shipping State/Province			|Address Information						|Input							|Loire Atlantique							|
 			|Shipping Country							|Address Information						|Input							|France												|
 			|Customer Priority						|Additional Information					|select							|High													|
 			|Customer Priority						|Additional Information					|select							|Low													|
 			|Customer Priority						|Additional Information					|select							|Medium												|
 			|Customer Priority						|Additional Information					|select							|High													|
 			|Number of Locations					|Additional Information					|Input							|123													|
 			|Active												|Additional Information					|select							|Yes													|
 			|Active												|Additional Information					|select							|No														|
 			|Active												|Additional Information					|select							|Yes													|
 			|SLA													|Additional Information					|select							|Gold													|
 			|SLA													|Additional Information					|select							|Silver												|
 			|SLA													|Additional Information					|select							|Platinum											|
 			|SLA													|Additional Information					|select							|Bronze												|
 			|SLA													|Additional Information					|select							|Silver												|
 			|SLA Expiration Date					|Additional Information					|Date								|06/06/2066										|
 			|Upsell Opportunity						|Additional Information					|select							|Maybe												|
 			|Upsell Opportunity						|Additional Information					|select							|No														|
 			|Upsell Opportunity						|Additional Information					|select							|Yes													| 			
 			|Description									|Description Information				|textArea						|OK														|
			|Parent Account								|Account Information						|searchField				|Accenture										|
							
 			
 		
 		Scenario Outline: Enregistrer l'Account
 			When je clique sur le bouton "Save" 		
 			Then je remplis le champ <elementName> de la section <sectionName> de type <elementType> avec la valeur <values>
 			When je clique sur le bouton "Save"
 			
 			Examples:
 			|elementName									|sectionName										|elementType										|values												|
 			|Parent Account								|Account Information						|select_searchField							|Accenture Nantes							|
 		
 		
 		Scenario Outline: Verification de la presence des Related Lists	
 		Then je verifie la presence du label <labelName> de la section <sectionName> et son type <elementType>
 			
 		Examples:
 		|labelName									|sectionName			|elementType		|
 		|Contacts										|									|Related List		|
 		|Opportunities							|									|Related List		|
 		|Cases											|									|Related List		| 	
 		|Notes & Attachments				|									|Related List		| 	
 			
 		@Lightning
 		 Scenario Outline: Cliquer sur les onglets
    	Then je clique sur la vue <onglet> Light

		    Examples: 
		      | onglet   |
		      | News		 |
		      | Related  |     
		      | Details  |	
		 			
 			
 		Scenario Outline: Verification de la presence des champs dans la page d'Account (Affichage du record)
 			Then je verifie la presence du label <labelName> de la section <sectionName> et son type <elementType>
 			
 			Examples:
 		|labelName									|sectionName			|elementType|
 		|Account Owner							|									|Label View	|
 		|Account Name								|									|Label View |
 		|Parent Account							|									|Label View |
 		|Account Number							|									|Label View |
 		|Account Site								|									|Label View |
 		|Type												|									|Label View |
 		|Industry										|									|Label View |
 		|Annual Revenue							|									|Label View |
 		|Rating											|									|Label View |
 		|Phone 											|									|Label View	|
 		|Fax												|									|Label View	|
 		|Website										|									|Label View |
 		|Ticker Symbol							|									|Label View |
 		|Ownership									|									|Label View |
 		|Employees									|									|Label View |
 		|SIC Code										|									|Label View |
 		|Billing Address						|									|Label View | 		
 		|Shipping Address						|									|Label View | 		
 		|Customer Priority					|									|Label View |
 	 	|SLA Expiration Date				|									|Label View |
 	 	|Number of Locations				|									|Label View |
 	 	|Active											|									|Label View |
 	 	|SLA												|									|Label View |
 	 	|SLA Serial Number					|									|Label View |
 	 	|Upsell Opportunity					|									|Label View |
 	 	|Description								|									|Label View |
 		
 		
 		Scenario Outline: Verification des valeurs renseignees dans les champs  de la page d'Account (Affichage du record)
 			Then je verifie que dans le champ <labelName> contient la valeur <value>
 		
 			Examples:
 				|labelName						|value													|
 				|Account Name					|Non Regression -								|
 				|Parent Account				|Accenture Nantes								|
 				|Account Number				|2121212121											|
 				|Type									|Prospect												|
 				|Industry							|Telecommunications							|
 				|Annual Revenue				|50 000 €												|
 				|Billing Address			|500, route de Vannes 					|
 				|Billing Address			|44000 Nantes 									|
 				|Billing Address			|Loire Atlantique France 				| 				
 				|Customer Priority		|High														|
 				|Number of Locations	|123														|
 				|Active								|Yes														|
 				|Description					|OK															|
 				|Rating								|Warm														|
 				|Phone								|0202020202											|
 				|Fax									|0404040404											|
 				|Website							|https://www.accenture.com			|
 				|Ownership						|Private												|
 				|Shipping Address			|500, route de Vannes 					|
 				|Shipping Address			|44000 Nantes										|
 				|Shipping Address			|Loire Atlantique France				| 
 				|SLA									|Silver													|
 				|Upsell Opportunity		|Yes														|
 				
 		@Classic
 		Scenario Outline: Verificiation de la presence des boutons "Edit" et "Delete" en haut et bas de page (Affichage du record)
 			Then je verifie la presence du bouton <buttonName> situe en <position>
 	 		
 	 			Examples:
 				|buttonName					|position	|
 				|edit								|top			|
 				|delete							|top			| 			
 				|edit								|bottom		|
 				|delete							|bottom		|
 			

 		@Logout
 		Scenario: Logout
 			Given je recupere les elements de la page
 			Then je verifie les options du menu
 			Then je me deconnecte
 	

 		