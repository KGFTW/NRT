package steps;

import static org.assertj.core.api.Assertions.assertThat;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.HomePage;
import utils.Driver;

public class AccountStep {

	private HomePage homePage;
	private static final String ACCOUNT_NAME = "Non Regression - " + Driver.getTimeStamp();

	@Given("^je suis sur la page d'acceuil$")
	public void initHomepage() {
		homePage = PageFactory.initElements(Driver.driver, HomePage.class);
	}

	@When("^je verifie que l'onglet Account est present$")
	public void verifAccountButton() {

		homePage.assertAccountTab();
	}

	@Then("^je clique sur l'onglet Account$")
	public void clicNewAccountBtn() {

		homePage.accessAccountTab();
		Driver.clickButton("new");
	}

	@Then("^je verifie la presence du label (.*) de la section (.*) et son type (.*)$")
	public void checkNewAccountVisibleFields(String labelName, String sectionName, String elementType) {
		if (sectionName.equals("")) {
			assertThat(Driver.isLabelPresent(labelName, "", elementType)).isTrue();
		} else
			assertThat(Driver.isLabelPresent(labelName, sectionName, elementType)).isTrue();
	}

	@Then("^je verifie que le champ qui suit le label (.*) de la section (.*) et de type (.*)$")
	public void checkNewAccountEditableFields(String labelName, String sectionName, String elementType) {

		assertThat(Driver.isElementEditable(labelName, sectionName, elementType)).isTrue();
	}

	@Then("^je verifie la presence du bouton (.*) situe en (.*)$")
	public void checkEditPageButtons(String buttonName, String position) {

		assertThat(Driver.isRecordPageButtonVisible(position, buttonName)).isTrue();
	}

	@Then("^je remplis le champ (.*) de la section (.*) de type (.*) requis (.*) avec la valeur (.*)$")
	public void fillNewAccountFields(String elementName, String sectionName, String elementType, String required,
			String values) {

		boolean requis = Boolean.parseBoolean(required);
		if (values.equals(""))
			Driver.setValue(elementName, sectionName, elementType, requis, ACCOUNT_NAME);
		else
			Driver.setValue(elementName, sectionName, elementType, requis, values);
	}

	@When("^je clique sur le bouton \"Save\"$")
	public void clickSaveButton() {

		assertThat(Driver.isButtonVisible("save")).isTrue();
		Driver.clickButton("save");
	}

	@Given("^je reviens sur la HomePage il faut preciser le bon Parent Account$")
	public void saveMultipleAccounts() {

		homePage = PageFactory.initElements(Driver.driver, HomePage.class);
	}

	@Then("^je verifie que dans le champ (.*) contient la valeur (.*)$")
	public void validateNewAccount(String elementName, String value) {

		assertThat(Driver.getValueView(elementName).contains(value)).isTrue();
	}

	

	

}
