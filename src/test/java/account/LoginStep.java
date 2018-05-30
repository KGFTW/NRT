package account;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.LoginPage;
import utils.Driver;

public class LoginStep {

	private LoginPage loginPage;

	@Before
	public static void beforeTestClass() {
		if (Driver.driver == null)
			Driver.driver = Driver.instanciateDriver();
	}

	@Given("je suis sur la page de connection Salesforce")
	public void InitLoginPage() {

		loginPage = PageFactory.initElements(Driver.driver, LoginPage.class);

	}

	@When("^je remplis le login et le password$")
	public void putNameAndPassword() {

		loginPage.login(System.getProperty("username"), System.getProperty("password"));

	}

	@Then("^jarrive sur la page d'accueil de Salesforce$")
	public void checkHomepage() {
		loginPage.waitLogin(Driver.driver);
		loginPage.assertLogin(Driver.driver);
	}
	
	@After
	public static void testFailure(Scenario result) {	
		
		Driver.testFailure(result);		
	}

}
