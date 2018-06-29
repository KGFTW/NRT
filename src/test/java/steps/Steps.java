package steps;

import static org.assertj.core.api.Assertions.assertThat;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.HomePageClassic;
import pages.HomePageLightning;
import utils.FactoryDriver;

public class Steps {

	private HomePageClassic homePageClassic;
	private HomePageLightning homePageLight;
	private static final String ACCOUNT_NAME = "Non Regression - " + FactoryDriver.getInstance().getTimeStamp();

	@Given("^je suis sur la page d'accueil$")
	public void initHomepage() {
		if (FactoryDriver.getInstance().onSalesClassic)
			homePageClassic = PageFactory.initElements(FactoryDriver.getInstance().driver, HomePageClassic.class);
		else
			homePageLight = PageFactory.initElements(FactoryDriver.getInstance().driver, HomePageLightning.class);
	}

	@Then("^je vais sur la page principal de Salesforce$")
	public void accesHome() {
		if (!FactoryDriver.getInstance().onSalesClassic)
			homePageLight.accessLauncher();
	}

	@When("^je verifie que l'onglet Account est present$")
	public void verifAccountButton() { 
		if (FactoryDriver.getInstance().onSalesClassic)
			homePageClassic.assertAccountTab();
		else
			homePageLight.assertAccountTab();
	}

	@Then("^je clique sur l'onglet Account$")
	public void clicNewAccountBtn() {

		if (FactoryDriver.getInstance().onSalesClassic) {
			homePageClassic.accessAccountTab();
			FactoryDriver.getInstance().clickButton("new");
		} else {
			homePageLight.accessAccountTab();			
			homePageLight.clicNewButton();
		}
	}

	@Then("^je verifie la presence du label (.*) de la section (.*) et son type (.*)$")
	public void checkNewAccountVisibleFields(String labelName, String sectionName, String elementType) {	

		if (sectionName.equals("")) {
			assertThat(FactoryDriver.getInstance().isLabelPresent(labelName, "", elementType)).isTrue();
		} else
			assertThat(FactoryDriver.getInstance().isLabelPresent(labelName, sectionName, elementType)).isTrue();	
	}

	@Then("^je verifie que le champ qui suit le label (.*) de la section (.*) et de type (.*)$")
	public void checkNewAccountEditableFields(String labelName, String sectionName, String elementType) {
		
		assertThat(FactoryDriver.getInstance().isElementEditable(labelName, sectionName, elementType)).isTrue();	
	}

	@Then("^je verifie la presence du bouton (.*) situe en (.*)$")
	public void checkEditPageButtons(String buttonName, String position) {
		if (FactoryDriver.getInstance().onSalesClassic)
			assertThat(FactoryDriver.getInstance().isRecordPageButtonVisible(position, buttonName)).isTrue();
	}

	@Then("^verification de  la presence du bouton (.*)$")
	public void checkEditPageButtons(String buttonName) {
		if (!FactoryDriver.getInstance().onSalesClassic)
			assertThat(FactoryDriver.getInstance().isRecordPageButtonVisible(buttonName, buttonName)).isTrue();
	}

	@Then("^je remplis le champ (.*) de la section (.*) de type (.*) avec la valeur (.*)$")
	public void fillNewAccountFields(String elementName, String sectionName, String elementType, String values) {
		
		if (values.equals(""))
			FactoryDriver.getInstance().setValue(elementName, sectionName, elementType, ACCOUNT_NAME);
		else
			FactoryDriver.getInstance().setValue(elementName, sectionName, elementType, values);
	}

	@When("^je clique sur le bouton \"Save\"$")
	public void clickSaveButton() {

		assertThat(FactoryDriver.getInstance().isButtonVisible("Save")).isTrue();
		FactoryDriver.getInstance().clickButton("Save");
	}

	@Then("^je clique sur la vue (.*) Light$")
	public void accessView(String nameView) {
		if (!FactoryDriver.getInstance().onSalesClassic)
			FactoryDriver.getInstance().clickAccessView(nameView);
	}

	@Then("^je verifie que dans le champ (.*) contient la valeur (.*)$")
	public void validateNewAccount(String elementName, String value) {

		assertThat(FactoryDriver.getInstance().getValueView(elementName).contains(value)).isTrue();
	}

}
