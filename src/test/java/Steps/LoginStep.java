package steps;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.HomePageClassic;
import pages.HomePageLightning;
import pages.LoginPage;
import utils.FactoryDriver;

public class LoginStep {

	private LoginPage loginPage;
	private HomePageClassic homePageClassic;
	private HomePageLightning homePageLightning;

	@Before("@Login")
	public static void beforeLoginScenario() {

		FactoryDriver.getInstance().beforeTestClass();
	}

	@Given("je suis sur la page de connection Salesforce")
	public void InitLoginPage() {

		loginPage = PageFactory.initElements(FactoryDriver.getInstance().driver, LoginPage.class);

	}

	@When("^je remplis le login et le password$")
	public void putNameAndPassword() {

		loginPage.login(System.getProperty("username"), System.getProperty("password"));

	}

	@Then("^jarrive sur la page d'accueil de Salesforce$")
	public void checkHomepage() {
		loginPage.waitLogin(FactoryDriver.getInstance().driver);
		homePageClassic = PageFactory.initElements(FactoryDriver.getInstance().driver, HomePageClassic.class);
	}

	@Then("^je change de vue si necessaire$")
	public void switchView() {

		if (homePageClassic.checkPage() && !FactoryDriver.getInstance().onSalesClassic) {
			homePageClassic.switchToLightning();
			FactoryDriver.getInstance().waitMs(3000);

		} else if (!homePageClassic.checkPage()) {

			homePageLightning = PageFactory.initElements(FactoryDriver.getInstance().driver, HomePageLightning.class);
			FactoryDriver.getInstance().waitMs(3000);

			if (FactoryDriver.getInstance().onSalesClassic) {
				homePageLightning.switchToClassic();
				FactoryDriver.getInstance().waitMs(3000);
			}
		}

		loginPage.assertLogin(FactoryDriver.getInstance().driver);
	}

	@After
	public static void testFailure(Scenario result) {

		FactoryDriver.getInstance().testFailure(result);
	}
}
