#Author: sylvain.tropee@accenture.com

@tag
Feature: Test Non regression account

Test NRT with cucumber
	
	@Login
  Scenario: Test login
    Given je suis sur la page de connection Salesforce   
    When je remplis le login et le password
    Then jarrive sur la page d'accueil de Salesforce  	
	
	@CheckHomePage
	Scenario: Clic sur Account
		Given je suis sur la page d'acceuil
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
 		|Parent Account							|Account Information		|Input 			|
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
 	 	|SLA Expiration Date				|Additional Information	|Input 			|
 	 	|Number of Locations				|Additional Information	|Input 			|
 	 	|Active											|Additional Information	|select 		|
 	 	|SLA												|Additional Information	|select 		|
 	 	|SLA Serial Number					|Additional Information	|Input 			|
 	 	|Upsell Opportunity					|Additional Information	|select 		|
 	 	|Description								|Description Information|textArea		|
 	 	
 	 	
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
 				
 				
 		Scenario Outline: Remplissage des champs de l'Account
 			Then je remplis le champ <elementName> de la section <sectionName> de type <elementType> requis <required> avec la valeur <values>
 				
 			Examples:
 			|elementName									|sectionName										|elementType		|required	|values												|
 			|Account Name									|Account Information						|Input					|true			|															|
 			|Parent Account								|Account Information						|Input					|false		|Accenture										|
 			|Account Number								|Account Information						|Input					|false		|2121212121										|
 			|Type													|Account Information						|select					|false		|Other												|
 			|Type													|Account Information						|select					|false		|Prospect											|
 			|Type													|Account Information						|select					|false		|Customer - Direct						|
 			|Type													|Account Information						|select					|false		|Customer - Channel						|
 			|Type													|Account Information						|select					|false		|Channel Partner / Reseller		|
 			|Type													|Account Information						|select					|false		|Installation Partner					|
 			|Type													|Account Information						|select					|false		|Technology Partner						|
 			|Type													|Account Information						|select					|false		|Prospect											|
 			|Industry											|Account Information						|select					|false		|Agriculture									|
 			|Industry											|Account Information						|select					|false		|Consulting										|
 			|Industry											|Account Information						|select					|false		|Energy												|
 			|Industry											|Account Information						|select					|false		|Finance											|
 			|Industry											|Account Information						|select					|false		|Media												|
 			|Industry											|Account Information						|select					|false		|Telecommunications						|
 			|Annual Revenue								|Account Information						|Input					|false		|50 000												|
 			|Rating												|Account Information						|select					|false		|Hot													|
 			|Rating												|Account Information						|select					|false		|Warm													|
 			|Rating												|Account Information						|select					|false		|Cold													|
 			|Rating												|Account Information						|select					|false		|Warm													|
 			|Phone												|Account Information						|Input					|false		|0202020202										|
 			|Fax													|Account Information						|Input					|false		|0202020202										|
 			|Website											|Account Information						|Input					|false		|https://www.accenture.com		|
 			|Ownership										|Account Information						|select					|false		|Public												|
 			|Ownership										|Account Information						|select					|false		|Private											|
 			|Ownership										|Account Information						|select					|false		|Subsidiary										|
 			|Ownership										|Account Information						|select					|false		|Private											|
 			|Billing Street								|Address Information						|textArea				|false		|500, route de Vannes					|
 			|Billing Zip/Postal Code			|Address Information						|Input					|false		|44000												|
 			|Billing City									|Address Information						|Input					|false		|Nantes												|
 			|Billing State/Province				|Address Information						|Input					|false		|Loire Atlantique							|
 			|Billing Country							|Address Information						|Input					|false		|France												|
 			|Shipping Street							|Address Information						|textArea				|false		|500, route de Vannes					|
 			|Shipping Zip/Postal Code			|Address Information						|Input					|false		|44000												|
 			|Shipping City								|Address Information						|Input					|false		|Nantes												|
 			|Shipping State/Province			|Address Information						|Input					|false		|Loire Atlantique							|
 			|Shipping Country							|Address Information						|Input					|false		|France												|
 			|Customer Priority						|Additional Information					|select					|false		|High													|
 			|Customer Priority						|Additional Information					|select					|false		|Low													|
 			|Customer Priority						|Additional Information					|select					|false		|Medium												|
 			|Customer Priority						|Additional Information					|select					|false		|High													|
 			|Number of Locations					|Additional Information					|Input					|false		|123													|
 			|Active												|Additional Information					|select					|false		|Yes													|
 			|Active												|Additional Information					|select					|false		|No														|
 			|Active												|Additional Information					|select					|false		|Yes													|
 			|SLA													|Additional Information					|select					|false		|Gold													|
 			|SLA													|Additional Information					|select					|false		|Silver												|
 			|SLA													|Additional Information					|select					|false		|Platinum											|
 			|SLA													|Additional Information					|select					|false		|Bronze												|
 			|SLA													|Additional Information					|select					|false		|Silver												|
 			|Upsell Opportunity						|Additional Information					|select					|false		|Maybe												|
 			|Upsell Opportunity						|Additional Information					|select					|false		|No														|
 			|Upsell Opportunity						|Additional Information					|select					|false		|Yes													| 			
 			|Description									|Description Information				|textArea				|false		|OK														|
 			
 		@CheckHomePage	
 		Scenario Outline: Enregistrer l'Account
 			When je clique sur le bouton "Save"
 			Given je reviens sur la HomePage il faut preciser le bon Parent Account 
 			Then je remplis le champ <elementName> de la section <sectionName> de type <elementType> requis <required> avec la valeur <values>
 			When je clique sur le bouton "Save"
 			
 			Examples:
 			|elementName									|sectionName										|elementType		|required	|values												|
 			|Parent Account								|Account Information						|select					|false		|Accenture Nantes							|
 			
 			
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
 				|Fax									|0202020202											|
 				|Website							|https://www.accenture.com			|
 				|Ownership						|Private												|
 				|Shipping Address			|500, route de Vannes 					|
 				|Shipping Address			|44000 Nantes										|
 				|Shipping Address			|Loire Atlantique France				| 
 				|SLA									|Silver													|
 				|Upsell Opportunity		|Yes														|
 				
 	
 		Scenario Outline: Verificiation de la presence des boutons "Edit" et "Delete" en haut et bas de page (Affichage du record)
 			Then je verifie la presence du bouton <buttonName> situe en <position>
 	 		
 	 			Examples:
 				|buttonName					|position	|
 				|edit								|top			|
 				|delete							|top			| 			
 				|edit								|bottom		|
 				|delete							|bottom		|
 				
 				
 			Scenario Outline: Verification de la presence des Related Lists	
 				Then je verifie la presence du label <labelName> de la section <sectionName> et son type <elementType>
 			
 			Examples:
 		|labelName									|sectionName			|elementType		|
 		|Contacts										|									|Related List		|
 		|Opportunities							|									|Related List		|
 		|Cases											|									|Related List		|
 		|Open Activities						|									|Related List		|
 		|Activity History						|									|Related List		|
 		|Notes & Attachments				|									|Related List		|
 		|Partners										|									|Related List		|
 	
 		@Logout
 		Scenario: Logout
 			Given je recupere les elements de la page
 			Then je verifie les options du menu
 			Then je me deconnecte
 	

 		