package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import utils.Driver;

public class UserChatterPage extends Driver {

	/**
	 * Pointeurs de la page
	 */
	
	/**
	 * Bouton de menu d�roulant qui permet d'acc�der aux user details
	 */
	@FindBy(xpath="//a[@title='User Action Menu']")
	private WebElement userMenuBtn;
	
	/**
	 * Bouton d'acc�s aux d�tails du compte utilisateur (Page UserAdminPage)
	 */
	@FindBy(xpath="//span[text()='User Detail']")
	private WebElement userDetailBtn;
	
	/**
	 * Methode clickDetailsUser
	 * Cette methode permet d'acc�der � la page d'administration d'un compte
	 * � partir de la page Chatter
	 */
	public void clickDetailsUser() {
		// V�rifier si le bouton du menu utilisateur est pr�sent
		if(driver.findElements(By.xpath("//a[@title='User Action Menu']")).size() == 1) {
			JavascriptExecutor jse = (JavascriptExecutor)driver;
			jse.executeScript("arguments[0].scrollIntoView()", userMenuBtn);
			userMenuBtn.click();
			waitMs(5000);
			userDetailBtn.click();
		}
	}
}
