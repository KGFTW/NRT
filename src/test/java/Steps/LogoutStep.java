package steps;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import pages.HomePageClassic;
import utils.Driver;

public class LogoutStep {

	HomePageClassic homePage;

	@Given("^je recupere les elements de la page$")
	public void checkHomePage() {

		homePage = PageFactory.initElements(Driver.driver, HomePageClassic.class);
	}

	@Then("^je verifie les options du menu$")
	public void checkOptions() {

		homePage.assertLogoutMenu();
	}

	@Then("^je me deconnecte$")
	public void logout() {
		
		homePage.clickLogout();
		Driver.afterTest();
		
	}
}
