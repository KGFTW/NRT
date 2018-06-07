package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.testng.Assert;

import utils.FactoryDriver;

public class HomePageLightning {

	@FindBy(xpath = "//div[3]/div/div[1]/div[1]/div/button/span")
	private WebElement launcher;

	@FindBy(xpath = "//div[@class='DESKTOP uiContainerManager']")
	private WebElement block;

	@FindBy(xpath = "//button/div/span[1]/span/img")
	private WebElement menu;

	@FindBy(linkText = "Accounts")
	private WebElement accountTab;

	private WebElement logout;

	public void switchToClassic() {

		menu.click();
		FactoryDriver.getInstance().waitMs(1000);
		WebElement switchClassic = FactoryDriver.getInstance().driver.findElement(By.className("switch-to-aloha"));
		switchClassic.click();

	}

	public void assertLogoutMenu() {
		menu.click();
		FactoryDriver.getInstance().waitMs(1000);
		logout = FactoryDriver.getInstance().driver.findElement(By.className("logout"));
		Assert.assertNotNull(logout);
	}

	public void clickLogout() {
		logout.click();
	}

	public void clicNewButton() {
		WebElement newButton = FactoryDriver.getInstance().driver.findElement(By.linkText("New"));
		newButton.click();
		FactoryDriver.getInstance().waitMs(5000);
	}

	public void accessLauncher() {

		try {
			accountTab = FactoryDriver.getInstance().driver.findElement(By.linkText("Accounts"));
		} catch (Exception e) {
			launcher.click();
			FactoryDriver.getInstance().waitMs(3000);
			WebElement sales = block
					.findElement(By.xpath("//li[@id='02u1r0000015jIjAAI']//a[@class='tile inner-card']"));
			sales.click();

			FactoryDriver.getInstance().waitMs(3000);
		}

	}

	/**
	 * accessAccountTab M�thode permettant de cliquer sur accountTab
	 */
	public void accessAccountTab() {

		accountTab.click();
		FactoryDriver.getInstance().waitMs(3000);
	}

	/**
	 * assertAccountTab M�thode permettant v�rifier la pr�sence de l'�l�ment
	 * accountTab
	 */
	public void assertAccountTab() {

		accountTab = FactoryDriver.getInstance().driver.findElement(By.linkText("Accounts"));
		Assert.assertNotNull(accountTab);
	}

}
