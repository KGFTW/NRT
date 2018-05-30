package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import utils.Driver;

public class HomePage extends Driver {

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
	 * Méthode permettant vérifier la présence de l'élément consoleTab
	 */
	public void assertConsoleMenu() {
		Assert.assertNotNull(consoleTab);
	}

	/**
	 * assertContactTab
	 * Méthode permettant vérifier la présence de l'élément contactTab
	 */
	public void assertContactTab() {
		Assert.assertNotNull(contactTab);
	}

	
	/**
	 * assertAccountTab
	 * Méthode permettant vérifier la présence de l'élément accountTab
	 */
	public void assertAccountTab() {
		Assert.assertNotNull(accountTab);
	}

	
	/**
	 * assertLeadTab
	 * Méthode permettant vérifier la présence de l'élément leadTab
	 */
	public void assertLeadTab() {
		Assert.assertNotNull(leadTab);
	}

	
	/**
	 * assertCaseTab
	 * Méthode permettant vérifier la présence de l'élément caseTab
	 */
	public void assertCaseTab() {
		Assert.assertNotNull(caseTab);
	}

	
	/**
	 * assertOpportunityTab
	 * Méthode permettant vérifier la présence de l'élément opportunityTab
	 */
	public void assertOpportunityTab() {
		Assert.assertNotNull(opportunityTab);
	}

	
	/**
	 * assertLogoutMenu
	 * Méthode permettant vérifier la présence des éléments userNavBtn et logoutLink
	 */
	public void assertLogoutMenu() {
		Assert.assertNotNull(userNavBtn);
		Assert.assertNotNull(logoutLink);
	}


	/**
	 * accessConsoleTab
	 * Méthode permettant de cliquer sur consoleTab
	 */
	public void accessConsoleTab() {
		consoleTab.click();
	}

	
	/**
	 * accessAccountTab
	 * Méthode permettant de cliquer sur accountTab
	 */
	public void accessAccountTab() {
		accountTab.click();
	}

	
	/**
	 * accessContactTab
	 * Méthode permettant de cliquer sur contactTab
	 */
	public void accessContactTab() {
		contactTab.click();
	}

	
	/**
	 * accessLeadTab
	 * Méthode permettant de cliquer sur leadTab
	 */
	public void accessLeadTab() {
		leadTab.click();
	}

	
	/**
	 * accessCaseTab
	 * Méthode permettant de cliquer sur caseTab
	 */
	public void accessCaseTab() {
		caseTab.click();
	}

	
	/**
	 * accessOpportunityTab
	 * Méthode permettant de cliquer sur le bouton opportunityTab
	 */
	public void accessOpportunityTab() {
		opportunityTab.click();
	}

	
	/**
	 * clickLogout
	 * Méthode permettant de cliquer sur déconnexion
	 */
	public void clickLogout() {
		userNavBtn.click();
		logoutLink.click();
	}


	/**
	 * 
	 * Méthode permettant d'attendre l'affichage de l'élément consoleTab
	 */
	public void waitConsoleMenu(WebDriver driver) {
		new WebDriverWait(driver, getTimeout()).until(ExpectedConditions.elementToBeClickable(consoleTab));
	}

	
	/**
	 * waitAccountMenu
	 * Méthode permettant d'attendre l'affichage de l'élément accountTab
	 */
	public void waitAccountMenu(WebDriver driver) {
		new WebDriverWait(driver, getTimeout()).until(ExpectedConditions.elementToBeClickable(accountTab));
	}

	
	/**
	 * waitContactMenu
	 * Méthode permettant d'attendre l'affichage de l'élément contactTab
	 */
	public void waitContactMenu(WebDriver driver) {
		new WebDriverWait(driver, getTimeout()).until(ExpectedConditions.elementToBeClickable(contactTab));
	}

	
	/**
	 * waitLeadMenu
	 * Méthode permettant d'attendre l'affichage de l'élément leadTab
	 */
	public void waitLeadMenu(WebDriver driver) {
		new WebDriverWait(driver, getTimeout()).until(ExpectedConditions.elementToBeClickable(leadTab));
	}

	
	/**
	 * waitCaseMenu
	 * Méthode permettant d'attendre l'affichage de l'élément caseTab
	 */
	public void waitCaseMenu(WebDriver driver) {
		new WebDriverWait(driver, getTimeout()).until(ExpectedConditions.elementToBeClickable(caseTab));
	}

	
	/**
	 * waitOpportunityMenu
	 * Méthode permettant d'attendre l'affichage de l'élément opportunityTab
	 */
	public void waitOpportunityMenu(WebDriver driver) {
		new WebDriverWait(driver, getTimeout()).until(ExpectedConditions.elementToBeClickable(opportunityTab));
	}

	
	/**
	 * waitLogoutMenu
	 * Méthode permettant d'attendre l'affichage de l'élément userNavBtn
	 */
	public void waitLogoutMenu(WebDriver driver) {
		new WebDriverWait(driver, getTimeout()).until(ExpectedConditions.elementToBeClickable(userNavBtn));
	}

	
	
	/**
	 * setSearch
	 * Méthode permettant d'insérer des données dans le champ search
	 * @param search
	 */
	public void setSearch(String search) {
		searchInput.sendKeys(search);
	}

	
	/**
	 * clickSearch
	 * Méthode permettant de cliquer sur le bouton search
	 */
	public void clickSearch() {
		searchButton.click();
	}

	
	/**
	 * accessDeveloperConsole
	 * Méthode permettant de cliquer sur le bouton userNavBtn puis sur devConsoleBtn
	 */
	public String accessDeveloperConsole(String baseWindow) {
		userNavBtn.click();
		devConsoleBtn.click();
		return driver.getWindowHandle();
	}

	
	/**
	 * getIdPopUp
	 * Méthode qui permet d'accéder à la page de la devconsole une fois celle-ci ouverte
	 * Requiert que la méthode accessDeveloperConsole ait été appelé au préalable
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
	  * Cette methode récupère le titre de la page afin de l'utiliser dans des vérifications
	  * @return: retourne le titre de la page
	  */
	 public String getTitleType() {
        new WebDriverWait(driver, getTimeout()).until(d -> titleBloc.findElement(By.className("pageType")).isDisplayed());
        return titleBloc.findElement(By.className("pageType")).getText();
    }
} 