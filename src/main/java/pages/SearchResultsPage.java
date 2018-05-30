package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.testng.Assert;

import utils.Driver;

public class SearchResultsPage extends Driver {

	@FindBy(xpath="//div[@class='search2SubmitBtnContainer']//input")
	private WebElement searchAllBtn;

	@FindBy(xpath="//input[@value='Search']")
	private WebElement globalSearchBtn;

	@FindBy(xpath="//div[@class='searchResultsBottomButtons']//a[@title='Search All']")
	private WebElement searchAll;


	/**
	 * Pas de correspondance, elle n'est affichée que s'il n'y a pas de correspondance sur la page de résultats de recherche
	 */
	@FindBy(xpath="//div[@id='searchResultsWarningMessageBox']")
	private WebElement noMatchDiv;


	/**
	 * 
	 * clickSearchAllBt
	 * Méthode permettant de cliquer sur le bouton search all dans la page de résultat de recherche
	 * 
	 * après avoir patienté 5secondes
	 */
	public void clickSearchAllBtn() {
		waitMs(5000);
		JavascriptExecutor jse = (JavascriptExecutor)driver;
		jse.executeScript("arguments[0].scrollIntoView()", searchAllBtn);
		searchAllBtn.click();
	}


	/**
	 * clickGlobalSearchBtn
	 * Méthode permettant de cliquer sur un bouton search
	 * après avoir patienté 5secondes
	 */
	public void clickGlobalSearchBtn() {
		waitMs(5000);
		globalSearchBtn.click();
	}


	/**
	 * assertMatch()
	 * Cette méthode affirme qu'il y a une correspondance pour la recherche (LOGIN_AS)
	 */
	public void assertMatch(String userName) {
		Assert.assertNotNull(noMatchDiv);

		if(driver.findElements(By.xpath("//div[@class='displayName']//a[text()='" + userName + "']")).size() == 0) {
			System.out.println("Couldn't find user with username \"" + userName + "\"");
		}
	}


	/**
	 * clickOnUser
	 * @param userName
	 * Cette méthode permet de cliquer sur le user (LOGIN_AS)
	 */
	public void clickOnUser(String userName) {
		WebElement user = driver.findElement(By.xpath("//div[@class='displayName']//a[text()='" + userName + "']"));
		((JavascriptExecutor)driver).executeScript("arguments[0].checked = true;", user);
		JavascriptExecutor jse = (JavascriptExecutor)driver;
		jse.executeScript("arguments[0].scrollIntoView()", user);
		user.click();
	}
}
