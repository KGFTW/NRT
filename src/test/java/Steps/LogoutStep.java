package steps;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import pages.HomePageClassic;
import pages.HomePageLightning;
import utils.FactoryDriver;

public class LogoutStep {

	HomePageClassic homePageClassic;
	HomePageLightning homePageLight;
	
	
	@Given("^je recupere les elements de la page$")
	public void checkHomePage() {
		if (FactoryDriver.getInstance().onSalesClassic)
			homePageClassic = PageFactory.initElements(FactoryDriver.getInstance().driver, HomePageClassic.class);
		else
			homePageLight = PageFactory.initElements(FactoryDriver.getInstance().driver, HomePageLightning.class);
	}

	@Then("^je verifie les options du menu$")
	public void checkOptions() {

		if (FactoryDriver.getInstance().onSalesClassic)
			homePageClassic.assertLogoutMenu();
		else
			homePageLight.assertLogoutMenu();

	}

	@Then("^je me deconnecte$")
	public void logout() {

		if (FactoryDriver.getInstance().onSalesClassic)
			homePageClassic.clickLogout();
		else
			homePageLight.clickLogout();

		FactoryDriver.getInstance().afterTest();

	}
}
