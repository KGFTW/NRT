package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import utils.Driver;

public class UserAdminPage extends Driver {

	/**
	 * Pointeurs de la page
	 */
	
	@FindBy(xpath="(//input[@name='login'])[1]")
	private WebElement loginBtn;
	

	/**
	 * Methode clickLoginAs
	 * Cette methode clique sur le bouton "Login" 
	 * depuis une page d'administration d'un compte utilisateur
	 */
	public void clickLoginAs() {
		loginBtn.click();
	}
	
}
