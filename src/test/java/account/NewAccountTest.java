package account;

import static org.assertj.core.api.Assertions.assertThat;
import org.openqa.selenium.support.PageFactory;
import org.testng.annotations.Test;
import pages.HomePage;
import pages.LoginPage;
import utils.Driver;
import utils.StandardButton;

public class NewAccountTest extends Driver {

	/**
	 * Déclaration des constantes
	 */

	public static final String SECTION_1_EDIT_PAGE = "Account Information";
	public static final String SECTION_2_EDIT_PAGE = "Address Information";
	public static final String SECTION_3_EDIT_PAGE = "Additional Information";
	public static final String SECTION_4_EDIT_PAGE = "Description Information"; 

	private static final String ACCOUNT_NAME = "Non Regression - " + Driver.getTimeStamp();
	private static final String PARENT_ACCOUNT_PART_NAME = "Accenture";
	private static final String PARENT_ACCOUNT_COMPLETE_NAME = "Accenture Nantes";
	private static final String ACCOUNT_NUMBER = "212121";
	private static final String TYPE = "Prospect";
	private static final String INDUSTRY = "Telecommunications";

	/*Pour des données monétaires, il faut un espace pour les milliers, 
	 * et une devise pour tester la valeur depuis la page View 
	 * A noter dans la doc => important !
	 */
	private static final String ANNUAL_REVENUE = "50 000";
	private static final String ANNUAL_REVENUE_CURRENCY = " €";

	private static final String RATING = "Warm";
	private static final String PHONE = "0202020202";
	private static final String FAX = "0202020202";
	private static final String WEBSITE = "https://www.accenture.com";
	private static final String OWNERSHIP = "Private";

	private static final String BILLING_STREET = "500, route de Vannes";
	private static final String BILLING_ZIP_POSTAL_CODE = "44000";
	private static final String BILLING_CITY = "Nantes";
	private static final String BILLING_STATE_PROVINCE = "Loire Atlantique";
	private static final String BILLING_COUNTRY = "France";

	// Création d'une liste regroupant les champs pour Billing Address
	private static final String[] BILLING_ADDRESS = new String[]{
			BILLING_STREET,
			BILLING_ZIP_POSTAL_CODE,
			BILLING_CITY,
			BILLING_STATE_PROVINCE,
			BILLING_COUNTRY
	};

	private static final String SHIPPING_STREET = "500, route de Vannes";
	private static final String SHIPPING_ZIP_POSTAL_CODE = "44000";
	private static final String SHIPPING_CITY = "Nantes";
	private static final String SHIPPING_STATE_PROVINCE = "Loire Atlantique";
	private static final String SHIPPING_COUNTRY = "France";

	// Création d'une liste regroupant les champs pour Shipping Address
	private static final String [] SHIPPING_ADDRESS = new String[]{
			SHIPPING_STREET,
			SHIPPING_ZIP_POSTAL_CODE,
			SHIPPING_CITY,
			SHIPPING_STATE_PROVINCE,
			SHIPPING_COUNTRY
	};		

	private static final String CUSTOMER_PRIORITY = "High";
	private static final String NUMBER_OF_LOCATIONS = "123";
	private static final String ACTIVE = "Yes";
	private static final String SLA = "Silver";		
	private static final String UPSELL_OPPORTUNITY = "Yes";
	private static final String DESCRIPTION = "OK";


	/**
	 * Login with user credentials from Driver
	 * (data provider method => userCredentials())
	 * @param usernameParam: username to login with
	 * @param passwordParam: pwd associated to the user
	 */
	@Test(dataProvider="getUserCredentials", priority=10)
	public void login(String username, String password){
		System.out.println("--------------------------------------------------------------------------------------------------------------------------------");
		System.out.println("Lancement du NRT");
		System.out.println("10 - Identification");
		// Appel de la page LoginPage
		LoginPage loginPage = PageFactory.initElements(driver, LoginPage.class);
		// Appel de la méthode login de LoginPage -> username + password + clic Login
		loginPage.login(username, password);
		// Attendre l'affichage du login -> LoginPage.java 
		loginPage.waitLogin(driver);
		// Vérification de la présence du Login
		loginPage.assertLogin(driver);
	}


	/**
	 *LOGIN_AS
	 * 
	 *
	@Test(priority=19)
	public void loginAs() {
		loginAs(loginAsUserName);
		System.out.println("20.1 - Login as : " + loginAsUserName);
	}
	 */


	@Test(priority=20)
	public void accessAccountTab() {
		HomePage homePage = PageFactory.initElements(driver, HomePage.class);
		System.out.println("21 - Accès à la Tab \"Accounts\"");
		homePage.assertAccountTab();
		homePage.accessAccountTab();
	
	}

	
//	@Test(priority=30)
//	public void clicNewAccountBtn() {
//		assertThat(isRecordPageButtonVisible("", StandardButton.NEW)).isTrue();
//		clickButton("new");
//		System.out.println("--------------------------------------------------------------------------------------------------------------------------------");
//		System.out.println("30 - Clic sur le bouton \"New\" d'Account");
//	}	

	
	@Test(priority=40)
	public void checkNewAccountVisibleFields() {
		System.out.println("--------------------------------------------------------------------------------------------------------------------------------");
		System.out.println("40 - Vérification de la présence des champs d'Account (Affichage d'edition)");

		System.out.println("Section 1 : Account Information");
		assertThat(isLabelPresent("Account Name", SECTION_1_EDIT_PAGE, LABELEDIT)).isTrue();
		assertThat(isLabelPresent("Parent Account", SECTION_1_EDIT_PAGE, LABELEDIT)).isTrue();
		assertThat(isLabelPresent("Account Number", SECTION_1_EDIT_PAGE, LABELEDIT)).isTrue();
		assertThat(isLabelPresent("Account Site", SECTION_1_EDIT_PAGE, LABELEDIT)).isTrue();
		assertThat(isLabelPresent("Type", SECTION_1_EDIT_PAGE, LABELEDIT)).isTrue();
		assertThat(isLabelPresent("Industry", SECTION_1_EDIT_PAGE, LABELEDIT)).isTrue();
		assertThat(isLabelPresent("Annual Revenue", SECTION_1_EDIT_PAGE, LABELEDIT)).isTrue();
		assertThat(isLabelPresent("Rating", SECTION_1_EDIT_PAGE, LABELEDIT)).isTrue();
		assertThat(isLabelPresent("Phone", SECTION_1_EDIT_PAGE, LABELEDIT)).isTrue();
		assertThat(isLabelPresent("Fax", SECTION_1_EDIT_PAGE, LABELEDIT)).isTrue();
		assertThat(isLabelPresent("Website", SECTION_1_EDIT_PAGE, LABELEDIT)).isTrue();
		assertThat(isLabelPresent("Ticker Symbol", SECTION_1_EDIT_PAGE, LABELEDIT)).isTrue();
		assertThat(isLabelPresent("Ownership", SECTION_1_EDIT_PAGE, LABELEDIT)).isTrue();
		assertThat(isLabelPresent("Employees", SECTION_1_EDIT_PAGE, LABELEDIT)).isTrue();
		assertThat(isLabelPresent("SIC Code", SECTION_1_EDIT_PAGE, LABELEDIT)).isTrue();

		System.out.println("Section 2 : Address Information");
		assertThat(isLabelPresent("Billing Street", SECTION_2_EDIT_PAGE, LABELEDIT)).isTrue();
		assertThat(isLabelPresent("Billing Zip/Postal Code", SECTION_2_EDIT_PAGE, LABELEDIT)).isTrue();
		assertThat(isLabelPresent("Billing City", SECTION_2_EDIT_PAGE, LABELEDIT)).isTrue();
		assertThat(isLabelPresent("Billing State/Province", SECTION_2_EDIT_PAGE, LABELEDIT)).isTrue();
		assertThat(isLabelPresent("Billing Country", SECTION_2_EDIT_PAGE, LABELEDIT)).isTrue();
		assertThat(isLabelPresent("Shipping Street", SECTION_2_EDIT_PAGE, LABELEDIT)).isTrue();
		assertThat(isLabelPresent("Shipping Zip/Postal Code", SECTION_2_EDIT_PAGE, LABELEDIT)).isTrue();
		assertThat(isLabelPresent("Shipping City", SECTION_2_EDIT_PAGE, LABELEDIT)).isTrue();
		assertThat(isLabelPresent("Shipping State/Province", SECTION_2_EDIT_PAGE, LABELEDIT)).isTrue();
		assertThat(isLabelPresent("Shipping Country", SECTION_2_EDIT_PAGE, LABELEDIT)).isTrue();

		System.out.println("Section 3 : Additional Information");
		assertThat(isLabelPresent("Customer Priority", SECTION_3_EDIT_PAGE, LABELEDIT)).isTrue();
		assertThat(isLabelPresent("SLA Expiration Date", SECTION_3_EDIT_PAGE, LABELEDIT)).isTrue();
		assertThat(isLabelPresent("Number of Locations", SECTION_3_EDIT_PAGE, LABELEDIT)).isTrue();
		assertThat(isLabelPresent("Active", SECTION_3_EDIT_PAGE, LABELEDIT)).isTrue();
		assertThat(isLabelPresent("SLA", SECTION_3_EDIT_PAGE, LABELEDIT)).isTrue();
		assertThat(isLabelPresent("SLA Serial Number", SECTION_3_EDIT_PAGE, LABELEDIT)).isTrue();
		assertThat(isLabelPresent("Upsell Opportunity", SECTION_3_EDIT_PAGE, LABELEDIT)).isTrue();

		System.out.println("Section 4 : Description Information");
		assertThat(isLabelPresent("Description", SECTION_4_EDIT_PAGE, LABELEDIT)).isTrue();
	}


//	@Test(priority=50)
//	public void checkNewAccountEditableFields() {
//		System.out.println("--------------------------------------------------------------------------------------------------------------------------------");
//		System.out.println("50 - Vérification de la possibilité d'édition des champs d'Account (Affichage d'edition)");
//
//		System.out.println("Section 1 : Account Information");
//		assertThat(isElementEditable("Account Name", SECTION_1_EDIT_PAGE, INPUT, true)).isTrue();
//		assertThat(isElementEditable("Parent Account", SECTION_1_EDIT_PAGE, INPUT, false)).isTrue(); 
//		assertThat(isElementEditable("Account Number", SECTION_1_EDIT_PAGE, INPUT, false)).isTrue();
//		assertThat(isElementEditable("Account Site", SECTION_1_EDIT_PAGE, INPUT, false)).isTrue();
//		assertThat(isElementEditable("Type", SECTION_1_EDIT_PAGE, SELECT, false)).isTrue();
//		assertThat(isElementEditable("Industry", SECTION_1_EDIT_PAGE, SELECT, false)).isTrue();
//		assertThat(isElementEditable("Annual Revenue", SECTION_1_EDIT_PAGE, INPUT, false)).isTrue();
//		assertThat(isElementEditable("Rating", SECTION_1_EDIT_PAGE, SELECT, false)).isTrue();
//		assertThat(isElementEditable("Phone", SECTION_1_EDIT_PAGE, INPUT, false)).isTrue();
//		assertThat(isElementEditable("Fax", SECTION_1_EDIT_PAGE, INPUT, false)).isTrue();
//		assertThat(isElementEditable("Website", SECTION_1_EDIT_PAGE, INPUT, false)).isTrue();
//		assertThat(isElementEditable("Ticker Symbol", SECTION_1_EDIT_PAGE, INPUT, false)).isTrue();
//		assertThat(isElementEditable("Ownership", SECTION_1_EDIT_PAGE, SELECT, false)).isTrue();
//		assertThat(isElementEditable("Employees", SECTION_1_EDIT_PAGE, INPUT, false)).isTrue();
//		assertThat(isElementEditable("SIC Code", SECTION_1_EDIT_PAGE, INPUT, false)).isTrue();
//
//		System.out.println("Section 2 : Address Information");
//		assertThat(isElementEditable("Billing Street", SECTION_2_EDIT_PAGE, TEXTAREA, false)).isTrue();
//		assertThat(isElementEditable("Billing Zip/Postal Code", SECTION_2_EDIT_PAGE, INPUT, false)).isTrue();
//		assertThat(isElementEditable("Billing City", SECTION_2_EDIT_PAGE, INPUT, false)).isTrue();
//		assertThat(isElementEditable("Billing State/Province", SECTION_2_EDIT_PAGE, INPUT, false)).isTrue();
//		assertThat(isElementEditable("Billing Country", SECTION_2_EDIT_PAGE, INPUT, false)).isTrue();
//		assertThat(isElementEditable("Shipping Street", SECTION_2_EDIT_PAGE, TEXTAREA, false)).isTrue();
//		assertThat(isElementEditable("Shipping Zip/Postal Code", SECTION_2_EDIT_PAGE, INPUT, false)).isTrue();
//		assertThat(isElementEditable("Shipping City", SECTION_2_EDIT_PAGE, INPUT, false)).isTrue();
//		assertThat(isElementEditable("Shipping State/Province", SECTION_2_EDIT_PAGE, INPUT, false)).isTrue();
//		assertThat(isElementEditable("Shipping Country", SECTION_2_EDIT_PAGE, INPUT, false)).isTrue();
//
//		System.out.println("Section 3 : Additional Information");
//		assertThat(isElementEditable("Customer Priority", SECTION_3_EDIT_PAGE, SELECT, false)).isTrue();
//		assertThat(isElementEditable("SLA Expiration Date", SECTION_3_EDIT_PAGE, INPUT, false)).isTrue();
//		assertThat(isElementEditable("Number of Locations", SECTION_3_EDIT_PAGE, INPUT, false)).isTrue();
//		assertThat(isElementEditable("Active", SECTION_3_EDIT_PAGE, SELECT, false)).isTrue();
//		assertThat(isElementEditable("SLA", SECTION_3_EDIT_PAGE, SELECT, false)).isTrue();
//		assertThat(isElementEditable("SLA Serial Number", SECTION_3_EDIT_PAGE, INPUT, false)).isTrue();
//		assertThat(isElementEditable("Upsell Opportunity", SECTION_3_EDIT_PAGE, SELECT, false)).isTrue();
//
//		System.out.println("Section 4 : Description Information");
//		assertThat(isElementEditable("Description", SECTION_4_EDIT_PAGE, TEXTAREA, false)).isTrue();	
//	}


//	@Test(priority=60)
//	public void checkEditPageButtons() {
//		System.out.println("--------------------------------------------------------------------------------------------------------------------------------");
//		System.out.println("60 - Vérification de la présence des boutons \"Save\" / \"Save & New\" / \"Cancel\" en haut et bas de page (Affichage d'edition)");
//		
//		// Vérifie les boutons en haut de la page 
//		assertThat(isRecordPageButtonVisible(TOP, StandardButton.SAVE)).isTrue();
//		assertThat(isRecordPageButtonVisible(TOP, StandardButton.SAVENEW)).isTrue();
//		assertThat(isRecordPageButtonVisible(TOP, StandardButton.CANCEL)).isTrue();	
//
//		// Vérifie les boutons en bas de la page 
//		assertThat(isRecordPageButtonVisible(BOTTOM, StandardButton.SAVE)).isTrue();
//		assertThat(isRecordPageButtonVisible(BOTTOM, StandardButton.SAVENEW)).isTrue();
//		assertThat(isRecordPageButtonVisible(BOTTOM, StandardButton.CANCEL)).isTrue();
//	}


//	@Test(priority=70)
//	public void fillNewAccountFields() {
//		System.out.println("--------------------------------------------------------------------------------------------------------------------------------");
//		System.out.println("70 - Remplissage des champs de l'Account");
//
//		System.out.println("Section 1 : Account Information");
//		
//		setValue("Account Name", SECTION_1_EDIT_PAGE, Tag.INPUT, true, ACCOUNT_NAME);
//		// On définit la valeur du parent account avec une "partie" du nom de celui que l'on souhaite réellement utiliser
//		// afin de provoquer l'étape intermédiaire de re-sélection du parent account (lookup) via une picklist
//		setValue("Parent Account", SECTION_1_EDIT_PAGE, Tag.INPUT, false, PARENT_ACCOUNT_PART_NAME);
//		setValue("Account Number", SECTION_1_EDIT_PAGE, Tag.INPUT, false, ACCOUNT_NUMBER);		
//
//		// Permet de vérifier la présence de tt les valeur définis dans la piclist
//		setValue("Type", SECTION_1_EDIT_PAGE, Tag.SELECT, false, "Other");
//		setValue("Type", SECTION_1_EDIT_PAGE, Tag.SELECT, false, "Prospect");
//		setValue("Type", SECTION_1_EDIT_PAGE, Tag.SELECT, false, "Customer - Direct");
//		setValue("Type", SECTION_1_EDIT_PAGE, Tag.SELECT, false, "Customer - Channel");
//		setValue("Type", SECTION_1_EDIT_PAGE, Tag.SELECT, false, "Channel Partner / Reseller");
//		setValue("Type", SECTION_1_EDIT_PAGE, Tag.SELECT, false, "Installation Partner");
//		setValue("Type", SECTION_1_EDIT_PAGE, Tag.SELECT, false, "Technology Partner");
//		// Insertion de la valeur finale
//		setValue("Type", SECTION_1_EDIT_PAGE, Tag.SELECT, false, TYPE);
//		
//		// Permet de vérifier la présence de tt les valeur définis dans la piclist
//		setValue("Industry", SECTION_1_EDIT_PAGE, Tag.SELECT, false, "Agriculture");
//		setValue("Industry", SECTION_1_EDIT_PAGE, Tag.SELECT, false, "Consulting");
//		setValue("Industry", SECTION_1_EDIT_PAGE, Tag.SELECT, false, "Energy");
//		setValue("Industry", SECTION_1_EDIT_PAGE, Tag.SELECT, false, "Finance");
//		setValue("Industry", SECTION_1_EDIT_PAGE, Tag.SELECT, false, "Media");
//		// Insertion de la valeur finale
//		setValue("Industry", SECTION_1_EDIT_PAGE, Tag.SELECT, false, INDUSTRY);
//
//		setValue("Annual Revenue", SECTION_1_EDIT_PAGE, Tag.INPUT, false, ANNUAL_REVENUE);	
//		
//		// Permet de vérifier la présence de tt les valeur définis dans la piclist
//		setValue("Rating", SECTION_1_EDIT_PAGE, Tag.SELECT, false, "Hot");
//		setValue("Rating", SECTION_1_EDIT_PAGE, Tag.SELECT, false, "Warm");
//		setValue("Rating", SECTION_1_EDIT_PAGE, Tag.SELECT, false, "Cold");
//		// Insertion de la valeur finale
//		setValue("Rating", SECTION_1_EDIT_PAGE, Tag.SELECT, false, RATING);
//
//		setValue("Phone", SECTION_1_EDIT_PAGE, Tag.INPUT, false, PHONE);		
//		setValue("Fax", SECTION_1_EDIT_PAGE, Tag.INPUT, false, FAX);			
//		setValue("Website", SECTION_1_EDIT_PAGE, Tag.INPUT, false, WEBSITE);
//
//		// Permet de vérifier la présence de tt les valeur définis dans la piclist
//		setValue("Ownership", SECTION_1_EDIT_PAGE, Tag.SELECT, false, "Public");
//		setValue("Ownership", SECTION_1_EDIT_PAGE, Tag.SELECT, false, "Private");
//		setValue("Ownership", SECTION_1_EDIT_PAGE, Tag.SELECT, false, "Subsidiary");
//		// Insertion de la valeur finale
//		setValue("Ownership", SECTION_1_EDIT_PAGE, Tag.SELECT, false, OWNERSHIP);
//
//
//		System.out.println("Section 2 : Address Information");	
//
//		setValue("Billing Street", SECTION_2_EDIT_PAGE, Tag.TEXTAREA, false, BILLING_STREET);		
//		setValue("Billing Zip/Postal Code", SECTION_2_EDIT_PAGE, Tag.INPUT, false, BILLING_ZIP_POSTAL_CODE);
//		setValue("Billing City", SECTION_2_EDIT_PAGE, Tag.INPUT, false, BILLING_CITY);
//		setValue("Billing State/Province", SECTION_2_EDIT_PAGE, Tag.INPUT, false, BILLING_STATE_PROVINCE);
//		setValue("Billing Country", SECTION_2_EDIT_PAGE, Tag.INPUT, false, BILLING_COUNTRY);
//		setValue("Shipping Street", SECTION_2_EDIT_PAGE, Tag.TEXTAREA, false, SHIPPING_STREET);		
//		setValue("Shipping Zip/Postal Code", SECTION_2_EDIT_PAGE, Tag.INPUT, false, SHIPPING_ZIP_POSTAL_CODE);
//		setValue("Shipping City", SECTION_2_EDIT_PAGE, Tag.INPUT, false, SHIPPING_CITY);
//		setValue("Shipping State/Province", SECTION_2_EDIT_PAGE, Tag.INPUT, false, SHIPPING_STATE_PROVINCE);
//		setValue("Shipping Country", SECTION_2_EDIT_PAGE, Tag.INPUT, false, SHIPPING_COUNTRY);
//
//
//		System.out.println("Section 3 : Additional Information	");	
//
//		// Permet de vérifier la présence de tt les valeur définis dans la piclist
//		setValue("Customer Priority", SECTION_3_EDIT_PAGE, Tag.SELECT, false, "High");
//		setValue("Customer Priority", SECTION_3_EDIT_PAGE, Tag.SELECT, false, "Low");
//		setValue("Customer Priority", SECTION_3_EDIT_PAGE, Tag.SELECT, false, "Medium");
//		// Insertion de la valeur finale
//		setValue("Customer Priority", SECTION_3_EDIT_PAGE, Tag.SELECT, false, CUSTOMER_PRIORITY);
//
//		setValue("Number of Locations", SECTION_3_EDIT_PAGE, Tag.INPUT, false, NUMBER_OF_LOCATIONS);
//
//		// Permet de vérifier la présence de tt les valeur définis dans la piclist
//		setValue("Active", SECTION_3_EDIT_PAGE, Tag.SELECT, false, "Yes");
//		setValue("Active", SECTION_3_EDIT_PAGE, Tag.SELECT, false, "No");
//		// Insertion de la valeur finale
//		setValue("Active", SECTION_3_EDIT_PAGE, Tag.SELECT, false, ACTIVE);
//
//		// Permet de vérifier la présence de tt les valeur définis dans la piclist
//		setValue("SLA", SECTION_3_EDIT_PAGE, Tag.SELECT, false, "Gold");
//		setValue("SLA", SECTION_3_EDIT_PAGE, Tag.SELECT, false, "Silver");
//		setValue("SLA", SECTION_3_EDIT_PAGE, Tag.SELECT, false, "Platinum");
//		setValue("SLA", SECTION_3_EDIT_PAGE, Tag.SELECT, false, "Bronze");
//		// Insertion de la valeur finale
//		setValue("SLA", SECTION_3_EDIT_PAGE, Tag.SELECT, false, SLA);
//
//		setValue("Upsell Opportunity", SECTION_3_EDIT_PAGE, Tag.SELECT, false, "Maybe");
//		setValue("Upsell Opportunity", SECTION_3_EDIT_PAGE, Tag.SELECT, false, "No");
//		setValue("Upsell Opportunity", SECTION_3_EDIT_PAGE, Tag.SELECT, false, "Yes");
//		setValue("Upsell Opportunity", SECTION_3_EDIT_PAGE, Tag.SELECT, false, UPSELL_OPPORTUNITY);
//
//		System.out.println("Section 4 : Description Information");	
//
//		setValue("Description", SECTION_4_EDIT_PAGE, Tag.TEXTAREA, false, DESCRIPTION);
//	}

	
	@Test(priority=80)
	public void clickSaveButton() {
		System.out.println("--------------------------------------------------------------------------------------------------------------------------------");
		System.out.println("80 - Clic sur le bouton \"Save\"");
		assertThat(isButtonVisible("save")).isTrue();
		clickButton("save");
	}
	 
//	
//	@Test(priority=85)
//    public void saveMultipleAccounts() {
//    	HomePage page = PageFactory.initElements(driver, HomePage.class);
//    	// Si l'on est toujours en mode edit, il faut sélectionner une valeur de lookup qui match afin de save à nouveau
//    	if(page.getTitleType().contains("Edit")) {
//    		System.out.println("--------------------------------------------------------------------------------------------------------------------------------");
//    		System.out.println("85 - Plusieurs Parent Accounts trouvés pour \"" + PARENT_ACCOUNT_PART_NAME + "\".");
//    		System.out.println("     Sélection du compte \"" + PARENT_ACCOUNT_COMPLETE_NAME + "\".");
//    		setValue("Parent Account", SECTION_1_EDIT_PAGE, Tag.SELECT, false, PARENT_ACCOUNT_COMPLETE_NAME);
//    		clickButton("save");
//    	}
//    } 
//		 
	
	@Test(priority=90)
	public void checkAccountViewPageLabels() {

		System.out.println("--------------------------------------------------------------------------------------------------------------------------------");
		System.out.println("90 - Vérification de la présence des champs dans la page d'Account (Affichage du record)");

		//ATTENTION : Pas de section définie dans l'affichage de vue d'un account, 2ème paramètre vide
		assertThat(isLabelPresent("Account Owner", "", LABELVIEW)).isTrue();
		assertThat(isLabelPresent("Account Name", "", LABELVIEW)).isTrue();
		assertThat(isLabelPresent("Parent Account", "", LABELVIEW)).isTrue();
		assertThat(isLabelPresent("Account Number", "", LABELVIEW)).isTrue();
		assertThat(isLabelPresent("Account Site", "", LABELVIEW)).isTrue();
		assertThat(isLabelPresent("Type", "", LABELVIEW)).isTrue();
		assertThat(isLabelPresent("Industry", "", LABELVIEW)).isTrue();
		assertThat(isLabelPresent("Annual Revenue", "", LABELVIEW)).isTrue();
		assertThat(isLabelPresent("Billing Address", "", LABELVIEW)).isTrue();
		assertThat(isLabelPresent("Customer Priority", "", LABELVIEW)).isTrue();
		assertThat(isLabelPresent("SLA Expiration Date", "", LABELVIEW)).isTrue();
		assertThat(isLabelPresent("Number of Locations", "", LABELVIEW)).isTrue();
		assertThat(isLabelPresent("Active", "", LABELVIEW)).isTrue();
		assertThat(isLabelPresent("Created By", "", LABELVIEW)).isTrue();
		assertThat(isLabelPresent("Description", "", LABELVIEW)).isTrue();
		assertThat(isLabelPresent("Custom Links", "", LABELVIEW)).isTrue();
		assertThat(isLabelPresent("Rating", "", LABELVIEW)).isTrue();
		assertThat(isLabelPresent("Phone", "", LABELVIEW)).isTrue();
		assertThat(isLabelPresent("Fax", "", LABELVIEW)).isTrue();
		assertThat(isLabelPresent("Website", "", LABELVIEW)).isTrue();
		assertThat(isLabelPresent("Ticker Symbol", "", LABELVIEW)).isTrue();
		assertThat(isLabelPresent("Ownership", "", LABELVIEW)).isTrue();
		assertThat(isLabelPresent("Employees", "", LABELVIEW)).isTrue();
		assertThat(isLabelPresent("SIC Code", "", LABELVIEW)).isTrue();
		assertThat(isLabelPresent("Shipping Address", "", LABELVIEW)).isTrue();
		assertThat(isLabelPresent("SLA", "", LABELVIEW)).isTrue();
		assertThat(isLabelPresent("SLA Serial Number", "", LABELVIEW)).isTrue();
		assertThat(isLabelPresent("Upsell Opportunity", "", LABELVIEW)).isTrue();
		assertThat(isLabelPresent("Last Modified By", "", LABELVIEW)).isTrue();
	}


	@Test(priority=100)
	public void validateNewAccount() {

		System.out.println("--------------------------------------------------------------------------------------------------------------------------------");
		System.out.println("100 - Vérification des valeurs renseignées dans les champs  de la page d'Account (Affichage du record)");

		assertThat(getValueView("Account Name")).contains(ACCOUNT_NAME); 
		assertThat(getValueView("Parent Account")).contains(PARENT_ACCOUNT_COMPLETE_NAME);
		assertThat(getValueView("Account Number")).contains(ACCOUNT_NUMBER);
		assertThat(getValueView("Type")).contains(TYPE);
		assertThat(getValueView("Industry")).contains(INDUSTRY);////////////////////////////////////////////////////
		assertThat(getValueView("Annual Revenue")).contains(ANNUAL_REVENUE + ANNUAL_REVENUE_CURRENCY);
		assertThat(getValueView("Billing Address")).contains(BILLING_ADDRESS);
		assertThat(getValueView("Customer Priority")).contains(CUSTOMER_PRIORITY);
		assertThat(getValueView("Number of Locations")).contains(NUMBER_OF_LOCATIONS);
		assertThat(getValueView("Active")).contains(ACTIVE);
		assertThat(getValueView("Description")).contains(DESCRIPTION);
		assertThat(getValueView("Rating")).contains(RATING);
		assertThat(getValueView("Phone")).contains(PHONE);
		assertThat(getValueView("Fax")).contains(FAX);
		assertThat(getValueView("Website")).contains(WEBSITE);
		assertThat(getValueView("Ownership")).contains(OWNERSHIP);
		assertThat(getValueView("Shipping Address")).contains(SHIPPING_ADDRESS);
		assertThat(getValueView("SLA")).contains(SLA);
		assertThat(getValueView("Upsell Opportunity")).contains(UPSELL_OPPORTUNITY);
	}


//	@Test(priority=110)
//	public void checkViewPageButtons() {
//		System.out.println("--------------------------------------------------------------------------------------------------------------------------------");
//		System.out.println("110 - Vérificiation de la présence des boutons \"Edit\" et \"Delete\" en haut et bas de page (Affichage du record)");
//		
//		// Vérifie les boutons en haut de la page 
//		assertThat(isRecordPageButtonVisible(TOP, StandardButton.EDIT)).isTrue();
//		assertThat(isRecordPageButtonVisible(TOP, StandardButton.DELETE)).isTrue();
//
//		// Vérifie les boutons en bas de la page 
//		assertThat(isRecordPageButtonVisible(BOTTOM, StandardButton.EDIT)).isTrue();
//		assertThat(isRecordPageButtonVisible(BOTTOM, StandardButton.DELETE)).isTrue();
//	}


	@Test(priority=120)
	public void checkRelatedLists() {
		System.out.println("--------------------------------------------------------------------------------------------------------------------------------");
		System.out.println("120 - Vérification de la présence des Related Lists");

		//ATTENTION : Pas de section définie dans l'affichage de vue d'un account, 2ème paramtètre vide
		assertThat(isLabelPresent("Contacts", "", RELATEDLIST)).isTrue();
		assertThat(isLabelPresent("Opportunities", "", RELATEDLIST)).isTrue();
		assertThat(isLabelPresent("Cases", "", RELATEDLIST)).isTrue();
		assertThat(isLabelPresent("Open Activities", "", RELATEDLIST)).isTrue();
		assertThat(isLabelPresent("Activity History", "", RELATEDLIST)).isTrue();
		assertThat(isLabelPresent("Notes & Attachments", "", RELATEDLIST)).isTrue();
		assertThat(isLabelPresent("Partners", "", RELATEDLIST)).isTrue();
	}


	/**
	 * Logout as
	 * Méthode lougout as permettant de se déloguer automatiquement
	 * 
	@Test(priority=129)
	public void logoutAs() {	}
	 */

	
	@Test(priority=130)
	public void logoutAndClose() {
		System.out.println("--------------------------------------------------------------------------------------------------------------------------------");
		System.out.println("130 - Logout");
		// Appel de la page HomePage
		HomePage homePage = PageFactory.initElements(driver, HomePage.class);
		// Vérification de la présence du btn LogoutMenu sur HomePage
		homePage.assertLogoutMenu();
		// clic déconnexion
		homePage.clickLogout();  
		System.out.println("--------------------------------------------------------------------------------------------------------------------------------");
	}
}