package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import utils.Driver;

public class LoginPage extends Driver {
	// The element is now looked up using the name attribute,
	// and we never look it up once it has been used the first time
	@FindBy(id="username")
	// d�claration de la variable username
	private WebElement usernameInput;

	@FindBy(id="password")
	// d�claration de la variable password
	private WebElement passwordInput;

	@FindBy(id="Login")
	// d�claration de la variable loginBtn
	private WebElement loginBtn;

	String enterpriseEditionPageTitle = "Home Page ~ Salesforce - Developer Edition";
	String loginPageTitle = "Login | Salesforce";


	/**
	 * assertLogin
	 * M�thode permettant de v�rifier si l'�l�ment est visible
	 */
	public void assertLogin(WebDriver driver) {
		Assert.assertEquals(enterpriseEditionPageTitle, driver.getTitle());
	}


	/**
	 * assertLoggedOut
	 * M�thode permettant de v�rifier si l'�l�ment est visible
	 */	
	public void assertLoggedOut(WebDriver driver) {
		Assert.assertTrue(driver.getTitle().equals(loginPageTitle));
	}


	/**
	 * login
	 * cr�ation de la m�thode login contenant 2 param�tres (usernameParam et passwordParam)
	 */
	public void login(String usernameParam, String passwordParam) {
		usernameInput.sendKeys(usernameParam);
		passwordInput.sendKeys(passwordParam);
		loginBtn.click();
	}


	/**
	 * waitLogin
	 * M�thode permettant d'attendre que l'autentification se fasse
	 */
	public void waitLogin(WebDriver driver) {
		new WebDriverWait(driver, getTimeout()).until(ExpectedConditions.titleIs((enterpriseEditionPageTitle)));
	}


	/**
	 * waitLoggedOut
	 * M�thode permettant d'attendre que la d�connexion se fasse
	 */
	public void waitLoggedOut(WebDriver driver) {
		new WebDriverWait(driver, getTimeout()).until(ExpectedConditions.titleIs((loginPageTitle)));
	}
} 