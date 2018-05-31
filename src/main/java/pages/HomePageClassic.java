package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

public class HomePageClassic extends HomePage {

	/**
	 *  Search input
	 */
	@FindBy(xpath = "//div[@class='searchBoxClearContainer']//input")
	private WebElement searchInput;

	@FindBy(id = "phSearchButton")
	private WebElement searchButton;

	@FindBy(xpath="//a[@title='Developer Console (New Window)']")
	public WebElement devConsoleBtn;

	/** 
	 * Tabs
	 */
	@FindBy(linkText = "Console")
	private WebElement consoleTab;

	@FindBy(linkText = "Contacts")
	private WebElement contactTab;

	@FindBy(linkText = "Accounts")
	private WebElement accountTab;

	@FindBy(linkText = "Leads")
	private WebElement leadTab;

	@FindBy(linkText = "Cases")
	private WebElement caseTab;

	@FindBy(linkText = "Opportunities")
	private WebElement opportunityTab;

	@FindBy(className = "allTabsArrow")
	private WebElement allTabsBtn;

	/** User Menu, for config or logout **/
	@FindBy(id = "userNavButton")
	public WebElement userNavBtn;

	@FindBy(xpath = "//div[@id='userNavMenu']//a[@title='Logout']")
	private WebElement logoutLink;
	
	@FindBy(linkText = "Switch to Lightning Experience")
	private WebElement SwitchLightning;

	/**
	 * SideBar
	 */
	@FindBy(xpath="//span[@id='pinIndicator']")
	private WebElement openSideBar;
	
	// Page Title bloc
	@FindBy(className = "bPageTitle")
    private WebElement titleBloc;
	
	

	/**
	 * assertConsoleMenu
	 * M�thode permettant v�rifier la pr�sence de l'�l�ment consoleTab
	 */
	public void assertConsoleMenu() {
		Assert.assertNotNull(consoleTab);
	}

	/**
	 * assertContactTab
	 * M�thode permettant v�rifier la pr�sence de l'�l�ment contactTab
	 */
	public void assertContactTab() {
		Assert.assertNotNull(contactTab);
	}

	
	/**
	 * assertAccountTab
	 * M�thode permettant v�rifier la pr�sence de l'�l�ment accountTab
	 */
	public void assertAccountTab() {
		Assert.assertNotNull(accountTab);
	}

	
	/**
	 * assertLeadTab
	 * M�thode permettant v�rifier la pr�sence de l'�l�ment leadTab
	 */
	public void assertLeadTab() {
		Assert.assertNotNull(leadTab);
	}

	
	/**
	 * assertCaseTab
	 * M�thode permettant v�rifier la pr�sence de l'�l�ment caseTab
	 */
	public void assertCaseTab() {
		Assert.assertNotNull(caseTab);
	}

	
	/**
	 * assertOpportunityTab
	 * M�thode permettant v�rifier la pr�sence de l'�l�ment opportunityTab
	 */
	public void assertOpportunityTab() {
		Assert.assertNotNull(opportunityTab);
	}

	
	/**
	 * assertLogoutMenu
	 * M�thode permettant v�rifier la pr�sence des �l�ments userNavBtn et logoutLink
	 */
	public void assertLogoutMenu() {
		Assert.assertNotNull(userNavBtn);
		Assert.assertNotNull(logoutLink);
	}


	/**
	 * accessConsoleTab
	 * M�thode permettant de cliquer sur consoleTab
	 */
	public void accessConsoleTab() {
		consoleTab.click();
	}

	
	/**
	 * accessAccountTab
	 * M�thode permettant de cliquer sur accountTab
	 */
	public void accessAccountTab() {
		accountTab.click();
	}

	
	/**
	 * accessContactTab
	 * M�thode permettant de cliquer sur contactTab
	 */
	public void accessContactTab() {
		contactTab.click();
	}

	
	/**
	 * accessLeadTab
	 * M�thode permettant de cliquer sur leadTab
	 */
	public void accessLeadTab() {
		leadTab.click();
	}

	
	/**
	 * accessCaseTab
	 * M�thode permettant de cliquer sur caseTab
	 */
	public void accessCaseTab() {
		caseTab.click();
	}

	
	/**
	 * accessOpportunityTab
	 * M�thode permettant de cliquer sur le bouton opportunityTab
	 */
	public void accessOpportunityTab() {
		opportunityTab.click();
	}

	
	/**
	 * clickLogout
	 * M�thode permettant de cliquer sur d�connexion
	 */
	public void clickLogout() {
		userNavBtn.click();
		logoutLink.click();
	}


	/**
	 * 
	 * M�thode permettant d'attendre l'affichage de l'�l�ment consoleTab
	 */
	public void waitConsoleMenu(WebDriver driver) {
		new WebDriverWait(driver, getTimeout()).until(ExpectedConditions.elementToBeClickable(consoleTab));
	}

	
	/**
	 * waitAccountMenu
	 * M�thode permettant d'attendre l'affichage de l'�l�ment accountTab
	 */
	public void waitAccountMenu(WebDriver driver) {
		new WebDriverWait(driver, getTimeout()).until(ExpectedConditions.elementToBeClickable(accountTab));
	}

	
	/**
	 * waitContactMenu
	 * M�thode permettant d'attendre l'affichage de l'�l�ment contactTab
	 */
	public void waitContactMenu(WebDriver driver) {
		new WebDriverWait(driver, getTimeout()).until(ExpectedConditions.elementToBeClickable(contactTab));
	}

	
	/**
	 * waitLeadMenu
	 * M�thode permettant d'attendre l'affichage de l'�l�ment leadTab
	 */
	public void waitLeadMenu(WebDriver driver) {
		new WebDriverWait(driver, getTimeout()).until(ExpectedConditions.elementToBeClickable(leadTab));
	}

	
	/**
	 * waitCaseMenu
	 * M�thode permettant d'attendre l'affichage de l'�l�ment caseTab
	 */
	public void waitCaseMenu(WebDriver driver) {
		new WebDriverWait(driver, getTimeout()).until(ExpectedConditions.elementToBeClickable(caseTab));
	}

	
	/**
	 * waitOpportunityMenu
	 * M�thode permettant d'attendre l'affichage de l'�l�ment opportunityTab
	 */
	public void waitOpportunityMenu(WebDriver driver) {
		new WebDriverWait(driver, getTimeout()).until(ExpectedConditions.elementToBeClickable(opportunityTab));
	}

	
	/**
	 * waitLogoutMenu
	 * M�thode permettant d'attendre l'affichage de l'�l�ment userNavBtn
	 */
	public void waitLogoutMenu(WebDriver driver) {
		new WebDriverWait(driver, getTimeout()).until(ExpectedConditions.elementToBeClickable(userNavBtn));
	}

	
	
	/**
	 * setSearch
	 * M�thode permettant d'ins�rer des donn�es dans le champ search
	 * @param search
	 */
	public void setSearch(String search) {
		searchInput.sendKeys(search);
	}

	
	/**
	 * clickSearch
	 * M�thode permettant de cliquer sur le bouton search
	 */
	public void clickSearch() {
		searchButton.click();
	}

	
	/**
	 * accessDeveloperConsole
	 * M�thode permettant de cliquer sur le bouton userNavBtn puis sur devConsoleBtn
	 */
	public String accessDeveloperConsole(String baseWindow) {
		userNavBtn.click();
		devConsoleBtn.click();
		return driver.getWindowHandle();
	}

	
	/**
	 * getIdPopUp
	 * M�thode qui permet d'acc�der � la page de la devconsole une fois celle-ci ouverte
	 * Requiert que la m�thode accessDeveloperConsole ait �t� appel� au pr�alable
	 * @return
	 */
	 public String getIdPopUp() {
		String devConsoleWindow = driver.getWindowHandle();
		String idPopup = driver.getWindowHandles().stream().filter(s -> !s.equals(devConsoleWindow)).findFirst().get();
		driver.switchTo().window(idPopup);
		return idPopup;
	 } 
	 
	 /**
	  * Method getTitleType()
	  * Cette methode r�cup�re le titre de la page afin de l'utiliser dans des v�rifications
	  * @return: retourne le titre de la page
	  */
	 public String getTitleType() {
        new WebDriverWait(driver, getTimeout()).until(d -> titleBloc.findElement(By.className("pageType")).isDisplayed());
        return titleBloc.findElement(By.className("pageType")).getText();
    }
} 