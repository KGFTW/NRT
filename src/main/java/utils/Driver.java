package utils;

import static org.assertj.core.api.Assertions.assertThat;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.sql.Timestamp;
import java.util.List;
import java.util.Properties;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;
import cucumber.api.*;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.BeforeClass;

import cucumber.api.Scenario;
import pages.HomePage;

public class Driver {

	/**
	 * D�claration des constantes
	 */
	public static final String LABELEDIT = "Label Edit";
	public static final String LABELVIEW = "Label View";
	public static final String LINK = "Link";
	public static final String RELATEDLIST = "Related List";
	public static final String OPTION = "Option";
	public static final String TEXTAREA = "textArea";
	public static final String INPUT = "Input";
	public static final String SELECT = "select";
	public static final String MULTISELECT = "multiselect";
	public static final String CHECKBOX = "checkbox";
	public static final String CHECKBOXSPECIAL = "checkboxspecial";

	public static final String LOGINURL = System.getProperty("url");

	public static final String TOP = "top";
	public static final String BOTTOM = "bottom";

	/**
	 * D�claration des variables
	 */

	public static Properties configProperties;
	private static String browser = System.getProperty("browser");
	public static Boolean loginAsExpected = false;
	public static String loginAsUserName = "";
	public static WebDriver driver;

	static {
		// On charge les properties de config (paths des web drivers)
		loadConfigProperties();
		// On charge les user properties en fonction du param�tre orgInstance (d�fini
		// dans la commande Maven d'execution du/des tests)
		// loadUserProperties(orgInstance);
	}

	/**
	 * beforeTestClass Methode qui s'execute avant chaque classe de Test afin: -
	 * D'instancier le driver en fonction du "browser" (param�tre Maven), initialis�
	 * par d�fault en chrome portable app headless (sans UI) - Passer la variable
	 * loginAsExpected � false afin de valider que l'on n'est pas connect� par
	 * d�faut avec un autre utilisateur
	 */
	//@BeforeClass
	public static void beforeTestClass() {
		driver = instanciateDriver();
		loginAsExpected = false;
	}

	/**
	 * getPhantomJsPath Cette m�thode renvoi le chemin (Path) du PhantomJs driver
	 * d�fini dans config.properties Phantom -> navigateur sans interface graphique
	 */
	public static String getPhantomJsPath() {
		return configProperties.getProperty("phantomjs_path");
	}

	/**
	 * getFirefoxPath Cette m�thode renvoi le chemin (Path) de FireFox driver d�fini
	 * dans config.properties
	 */
	public static String getFirefoxPath() {
		return configProperties.getProperty("gecko_path");
	}

	/**
	 * getChromePath Cette m�thode renvoi le chemin (Path) du Chrome driver d�fini
	 * dans config.properties
	 */
	public static String getChromePath() {
		return configProperties.getProperty("chrome_path");
	}

	/**
	 * getTimeout Cette m�thode renvoi la valeur du timeout configur� dans
	 * configProperties
	 */
	public static Integer getTimeout() {
		return Integer.valueOf(configProperties.getProperty("timeout"));
	}

	/**
	 * instanciateDriver M�thode qui Charge le driver en fonction du navigateur
	 * d�termin� dans Eclipse (run -> run configurations -> VM Arguments) Puis
	 * retourne l'URL
	 * 
	 * @return
	 */
	public static WebDriver instanciateDriver() {
		WebDriver result;
		if ("firefox".equals(browser)) {
			System.setProperty("webdriver.gecko.driver", getFirefoxPath());
			result = new FirefoxDriver();
			result.manage().window().maximize();
		} else if ("chrome".equals(browser)) {
			System.setProperty("webdriver.chrome.driver", getChromePath());
			DesiredCapabilities capabilities = DesiredCapabilities.chrome();
			ChromeOptions options = new ChromeOptions();
			options.setBinary("resources\\GoogleChromePortable\\GoogleChromePortable.exe");
			capabilities.setCapability(ChromeOptions.CAPABILITY, options);
			result = new ChromeDriver(capabilities);
			result.manage().window().maximize();
		} else {
			System.setProperty("webdriver.chrome.driver", getChromePath());
			DesiredCapabilities capabilities = DesiredCapabilities.chrome();
			ChromeOptions options = new ChromeOptions();
			options.addArguments("--headless");
			options.addArguments("--disable-gpu");
			options.setBinary("resources\\GoogleChromePortable\\GoogleChromePortable.exe");
			capabilities.setCapability(ChromeOptions.CAPABILITY, options);
			result = new ChromeDriver(capabilities);
			result.manage().window().maximize();
		}
		result.get(LOGINURL);
		return result;
	}

	/**
	 * loadConfigProperties Cette methode permet de r�cup�rer le fichier
	 * config.properties contenant la liste des path des web drivers
	 * (chrome/firefox/etc..)
	 */
	public static void loadConfigProperties() {
		configProperties = new Properties();
		InputStream input = null;
		try {
			String filename = "\\properties\\config.properties";
			input = Driver.class.getClassLoader().getResourceAsStream(filename);
			if (input == null) {
				System.out.println("Unable to find " + filename);
			}
			configProperties.load(input);
		} catch (IOException ex) {
			ex.printStackTrace();
		} finally {
			if (input != null) {
				try {
					input.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}
	}

	/**
	 * loadUserProperties Cette methode r�cup�re un fichier de properties
	 * user.orgInstance.properties En fonction du param�tre "orgInstance"
	 * 
	 * @param orgInstance:
	 *            instance de l'org pour laquelle r�cup�rer les properties
	 *            (username/password du system admin)
	 */
	/*
	 * public static void loadUserProperties(String orgInstance) { userProperties =
	 * new Properties(); InputStream input = null; try { String filename =
	 * "\\properties\\userproperties\\user." + orgInstance + ".properties"; input =
	 * Driver.class.getClassLoader().getResourceAsStream(filename); if (input ==
	 * null) { System.out.println("Unable to find : " + filename); }
	 * userProperties.load(input); } catch (IOException ex) { ex.printStackTrace();
	 * } finally { if (input != null) { try { input.close(); } catch (IOException e)
	 * { e.printStackTrace(); } } } }
	 */

	/**
	 * username & password getUserCredentials() Cette methode retourne les
	 * credentials du user "username.system.admin" param�tr� dans le fichier
	 * user.orgInstance.properties en fonction de l'orgInstance param�tr�e dans la
	 * commande Maven d'execution des tests
	 * 
	 * @return: retourne un objet contenant les credentials du system admin, ceux-ci
	 *          sont pass�s en param�tre des tests automatiquement dans une methode
	 *          login via dataProvider="getUserCredentials"
	 */
	//@DataProvider
	public static Object[] getUserCredentials() {
		// Cr�ation de la variable username contenant la valeur username.system.admin
		// r�cup�r�e dans user.dev.properties
		String username = System.getProperty("username"); // userProperties.getProperty("username.system.admin");
		// Cr�ation de la variable password contenant la valeur username.system.admin
		// r�cup�r�e dans user.dev.properties
		String password = System.getProperty("password"); // userProperties.getProperty("password.system.admin");
		// v�rifie que la valeur "username" n'est pas null sinon il renvoi le message
		// d'erreur
		assertThat(username).isNotNull().overridingErrorMessage("Username not set for system admin");
		//// v�rifie que la valeur "password" n'est pas null sinon il renvoi le message
		//// d'erreur
		assertThat(password).isNotNull().overridingErrorMessage("Password not set for system admin");
		// Cr�ation de la liste userCred contenant l'user et le pwd
		Object[] userCred = new Object[] { username, password };
		// On retourne une liste � deux �l�ments contenu dans userCred
		return new Object[][] { userCred };
	}

	/**
	 * isRecordPageButtonVisible M�thodes pour v�rifier que les boutons sont bien
	 * visibles Boutons sp�cifiques aux "pages de record" dans Salesforce
	 */
	public static boolean isRecordPageButtonVisible(String location, String button) {
		boolean btnPresent = true;
		String cssSelector = "";
		if (location != null && !location.isEmpty()) {
			cssSelector = "#" + location + "ButtonRow > ";
		}
		try {
			cssSelector += "input[name=\"" + button + "\"]";
			WebElement element = driver.findElement(By.cssSelector(cssSelector));
		} catch (Exception e) {
			System.err.println("Button " + button + " not found.");			
			btnPresent = false;
		}
		return btnPresent;
	}

	/**
	 * isButtonVisible M�thode utilis�e pour v�rifier que les boutons sont bien
	 * visibles
	 * 
	 * @param btnName
	 * @return
	 */
	public static boolean isButtonVisible(String btnName) {
		boolean btnPresent = true;
		try {
			WebElement element = driver.findElement(By.name(btnName));
		} catch (Exception e) {
			System.err.println("Button " + btnName + " not found.");			
			btnPresent = false;
		}
		return btnPresent;
	}

	/**
	 * clickButton M�thode permettant de cliquer sur un bouton
	 * 
	 * @param btnName
	 */
	public static void clickButton(String btnName) {
		try {
			WebElement element = driver.findElement(By.name(btnName));
			element.click();
			waitMs(4000);
		} catch (Exception e) {
			System.err.println("Button " + btnName + " not found.");			
		}
	}

	/**
	 * liste des types
	 */
	public enum Tag {
		INPUT, SELECT, MULTISELECT, CHECKBOX, CHECKBOXSPECIAL, TEXTAREA, LINK;
	}

	/**
	 * isLabelPresent M�thode utilis�e pour v�rifier que les champs sont bien
	 * visibles
	 * 
	 * @param eltName
	 *            -> Nom du Label (Nom du champ � remplir)
	 * @param sectionName
	 *            -> Nom de la section, ex : section_1_EditPage
	 * @param eltType
	 *            -> type d'�l�ment, LABELEDIT / LABELVIEW / LINK/ etc (D�finis
	 *            dessous)
	 * @return
	 */
	public static boolean isLabelPresent(String label, String sectionName, String eltType) {
		// D�claration de la variable "element" qu'on initie � "null"
		WebElement labelElement = null;
		// On d�clare le webElement "preXpath" contenant la valeur du d�but du chemin
		// d'acc�s xpath du label � v�rifier
		String preXpath = Selectors.MAIN_BODY;
		// D�claration de la variable boolean "labelPresent" initialis�e � "true"
		boolean labelPresent = true;
		try {
			// Si la "sectionName" est diff�rent de null
			if (sectionName != "") {
				// Cr�ation de "preXpath" contenant les path + le nom de la section afin
				// d'indiquer sa position
				preXpath += Selectors.H_3_EQ_START + sectionName + Selectors.H_3_EQ_END + Selectors.NEXT_DIV;
			}
			WebElement block = driver.findElement(By.xpath(preXpath));
			switch (eltType) {
			case LABELEDIT:
				// Si on cherche � v�rifier un "LABELEDIT ", cr�ation du chemin gr�ce aux
				// constantes LBL_CTN_START et LBL_CTN_END + valeur du label
				labelElement = block.findElement(By.xpath(Selectors.LBL_CTN_START + label + Selectors.LBL_CTN_END));
				break;
			case LABELVIEW:
				labelElement = block.findElement(By.xpath(Selectors.TD_CTN_START + label + Selectors.TD_CTN_END));
				break;
			case LINK:
				labelElement = block.findElement(By.xpath(Selectors.LINK_CTN_START + label + Selectors.LINK_CTN_END));
				break;
			case OPTION:
				labelElement = block.findElement(By.xpath(Selectors.OPTN_CTN_START + label + Selectors.OPTN_CTN_END));
				break;
			case RELATEDLIST:
				labelElement = driver.findElement(
						By.xpath(Selectors.RELATED_LIST + Selectors.H_3_CTN_START + label + Selectors.H_3_CTN_END));
				break;
			}
		} catch (Exception e) {
			// Si le label n'est pas pr�sent on affiche le message d'erreur
			System.err.println("Label " + label + " not found.");			
			labelPresent = false;
		}
		// On retourne le booleen, pour effectuer un assert en fonction
		return labelPresent;
	}

	/**
	 * isElementEditable M�thode utilis�e v�rifier si les champs sont bien �ditables
	 * 
	 * @param eltName
	 *            -> Nom du Label (Nom du champ � remplir)
	 * @param sectionName
	 *            -> Nom de la section, ex : section_1_EditPage
	 * @param eltType
	 *            -> type d'�l�ment, INPUT / SELECT / TEXTAREA / etc (D�finis
	 *            dessous)
	 * @param required
	 *            -> champ obligatoire (true ou false)
	 * @return
	 */
	public static boolean isElementEditable(String eltName, String sectionName, String eltType) {

		// D�claration de la variable "element" qu'on initie � "null"
		WebElement element = null;
		// On d�clare le webElement "preXpath" contenant la valeur du d�but du chemin
		// d'acc�s xpath du champ � remplir
		String preXpath = Selectors.MAIN_BODY;
		boolean labelPresent = true;
		try {
			if (sectionName != "") {
				preXpath += Selectors.H_3_EQ_START + sectionName + Selectors.H_3_EQ_END + Selectors.NEXT_DIV;
			}
			// On d�termine le webelement "block" gr�ce � son xpath
			WebElement block = driver.findElement(By.xpath(preXpath));

			preXpath = Selectors.LBL_CTN_START + eltName + Selectors.LBL_CTN_END + Selectors.NEXT_TD;

			switch (eltType) {
			case INPUT:
				// Si c'est un type "INPUT", cr�ation du chemin � l'aide du preXpath + valeur
				// (path) de la constante INPUT_TEXT
				element = block.findElement(By.xpath(preXpath + Selectors.INPUT_TEXT));
				break;
			case SELECT:
				element = block.findElement(By.xpath(preXpath + Selectors.SELECT));
				break;
			case MULTISELECT:
				element = block.findElement(By.xpath(preXpath + Selectors.MULTISELECT));
				break;
			case CHECKBOX:
				element = block.findElement(By.xpath(preXpath + Selectors.CHECKBOX));
				break;
			case CHECKBOXSPECIAL:
				element = block.findElement(By.xpath("//*[text()='Assign using active assignment rule']"));
				break;
			case TEXTAREA:
				element = block.findElement(By.xpath(preXpath + Selectors.TEXTAREA));
				break;
			case LINK:
				element = block.findElement(By.xpath(preXpath + Selectors.LINK + Selectors.CTN_END));
				break;
			}
		} catch (WebDriverException e) {
			System.err.println("Element " + eltName + " not editable.");			
			return false;
		}
		return element.isEnabled();
	}

	/**
	 * M�thode utilis�e pour remplir les champs
	 * 
	 * @param eltName
	 *            -> Nom du Label (Nom du champ � remplir)
	 * @param sectionName
	 *            -> Nom de la section, ex : section_1_EditPage
	 * @param eltType
	 *            -> type d'�l�ment, INPUT / SELECT / TEXTAREA / etc (D�finis
	 *            dessous)
	 * @param required
	 *            -> champ obligatoire (true ou false)
	 * @param values
	 *            -> Valeur � renseigner dans le champs
	 */
	public static void setValue(String eltName, String sectionName, String eltType, boolean required,
			String... values) {
		// On d�termine le webelement "block" gr�ce � son xpath
		WebElement block = driver.findElement(By.xpath(Selectors.MAIN_BODY + Selectors.H_3_EQ_START + sectionName
				+ Selectors.H_3_EQ_END + Selectors.NEXT_DIV));
		// D�claration de la variable "element" qu'on initie � "null"
		WebElement element = null;
		// On d�clare le webElement "preXpath" contenant la valeur du d�but du chemin
		// d'acc�s xpath du champ � remplir
		String preXpath = Selectors.LBL_CTN_START + eltName + Selectors.LBL_CTN_END + Selectors.NEXT_TD;
		if (required) {
			// Si le champ � remplir est obligatoire un ajoute � preXpath le script contenu
			// dans la constante REQUIRED
			preXpath += Selectors.REQUIRED;
		}
		try {
			// On liste les types de champs ainsi que leurs chemins (path)
			switch (eltType) {
			case INPUT:
				// Si c'est un type "INPUT", cr�ation du chemin � l'aide du preXpath + du nom du
				// block + valeur (path) de la constante INPUT_TEXT
				element = block.findElement(By.xpath(preXpath + Selectors.INPUT_TEXT));
				// On vide le champ si il y a une valeur de renseign�e
				element.clear();
				// On rempli le champ avec la valeur
				element.sendKeys(values[0]);
				break;
			case SELECT:
				// Si c'est un type "INPUT", cr�ation du chemin � l'aide du preXpath + du nom du
				// block + valeur (path) de la constante SELECT (Pick List)
				element = block.findElement(By.xpath(preXpath + Selectors.SELECT));
				// On selectionne la valeur d�termin�e
				selectElementInSelect(element, values[0]);
				break;
			case MULTISELECT:
				element = block.findElement(By.xpath(preXpath + Selectors.MULTISELECT));
				WebElement addBtn = block.findElement(By.xpath(preXpath + Selectors.MULTISELECT + Selectors.ADD_BTN));
				for (String value : values) {
					selectElementInMultipleSelect(element, value);
					addBtn.click();
				}
				break;
			case CHECKBOX:
				element = block.findElement(By.xpath(preXpath + Selectors.CHECKBOX));
				Boolean value = Boolean.valueOf(values[0]);
				if (element.isSelected() && !value) {
					element.click();
				}
				if (!element.isSelected() && value) {
					element.click();
				}
				break;
			case TEXTAREA:
				element = block.findElement(By.xpath(preXpath + Selectors.TEXTAREA));
				element.clear();
				element.sendKeys(values[0]);
				break;
			}
		} catch (Exception e) {
			// Si l'insertion de donn�es est en �chec, on renvoi le message d'erreur
			System.err.println(eltType + " " + eltName + " couldn't be set with value(s) " + values);
		}
	}

	/**
	 * Methode selectElementInSelect Cette methode permet de s�lectionner un �l�ment
	 * dans une picklist simple
	 * 
	 * @param elementSelect:
	 *            WebElement de la picklist sur laquelle s�lectionner une valeur
	 * @param stringToSelect:
	 *            valeur de la picklist � s�lectionner
	 */
	public static void selectElementInSelect(WebElement elementSelect, String stringToSelect) {
		// On clique sur la picklist
		elementSelect.click();
		// On r�cup�re la liste d'options html (<option>) correspondant � notre valeur
		// "stringToSelect" dans le WebElement "elementSelect"
		List<WebElement> options = elementSelect.findElements(By.xpath("option")).stream()
				.filter(option -> option.getText().equals(stringToSelect)).collect(Collectors.toList());
		// S'il n'y a aucune option, la valeur n'existe pas, on renvoie une exception
		if (null == options || options.isEmpty()) {
			throw new WebDriverException("Not found: " + stringToSelect);
		}
		// S'il y a plusieurs options, la valeur est potentiellement en double, on
		// renvoie une exception
		if (options.size() > 1) {
			throw new WebDriverException("Too many option: " + stringToSelect);
		}
		// Si tout va bien, on clique sur la valeur s�lection�e
		options.get(0).click();
	}

	/**
	 * Methode selectElementInMultipleSelect Cette methode permet de s�lectionner un
	 * �l�ment dans une multipicklist
	 * 
	 * @param elementSelect:
	 *            WebElement de la multipicklist sur laquelle s�lectionner une
	 *            valeur
	 * @param stringToSelect:
	 *            valeur de la multipicklist � s�lectionner
	 */
	public static void selectElementInMultipleSelect(WebElement elementSelect, String stringToSelect) {
		// On r�cup�re la liste d'options html (<option>) correspondant � notre valeur
		// "stringToSelect" dans le WebElement "elementSelect"
		List<WebElement> options = elementSelect.findElements(By.xpath("//option")).stream()
				.filter(option -> option.getText().equals(stringToSelect)).collect(Collectors.toList());
		// S'il n'y a aucune option, la valeur n'existe pas, on renvoie une exception
		if (null == options || options.isEmpty()) {
			throw new WebDriverException("Not found: " + stringToSelect);
		}
		// S'il y a plusieurs options, la valeur est potentiellement en double, on
		// renvoie une exception
		if (options.size() > 1) {
			throw new WebDriverException("Too many option: " + stringToSelect);
		}
		// Si tout va bien, on clique sur la valeur s�lection�e
		options.get(0).click();
	}

	/**
	 * M�thode utilis�e pour v�rifier si les champs sont bien remplis
	 * 
	 * @param label
	 *            -> Nom du Label (Nom du champ � remplir)
	 * @param values
	 *            -> Valeur renseign�e dans le champs
	 * @return: retourne la valeur du champ trouv�
	 */
	public static String getValueView(String label) {
		// On d�finit des webElements correspondant au block principal et � l'�l�ment �
		// trouver, initialis� par d�faut � null
		WebElement block = driver.findElement(By.xpath(Selectors.MAIN_BODY));
		WebElement element = null;
		String fieldValue;
		try {
			// On cherche notre web element � partir du block, dans lequel on recherche un
			// element en particulier, ici un champs en fonction de:
			// - Son label => variable "label"
			element = block.findElement(
					By.xpath(Selectors.TD_CTN_START + label + Selectors.TD_CTN_END + Selectors.FOLLOWING_FIELD));
			// Si l'�l�ment est retourn�, on peut r�cup�rer la valeur de son champs, sans
			// espaces vides (nbsp/non blank spaces)
			fieldValue = element.getText().replace("&nbsp;", "");
		} catch (Exception e) {
			System.err.println("Field " + label + " not found.");
			fieldValue = null;
		}
		// On retourne le booleen, pour effectuer un assert en fonction
		return fieldValue;
	}

	/**
	 * waitListViewVisible Cette methode permet de v�rifier qu'une liste view est
	 * bien affich�e � l'�cran
	 */
	public void waitListViewVisible() {
		try {
			new WebDriverWait(driver, getTimeout())
					.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//div[@class='listBody']")));
		} catch (WebDriverException e) {
			System.out.println("The list view is not visible");
		}
	}

	/**
	 * waitMs M�thode permettant de g�rer le timing Dans une m�thode, waitMs(2000);
	 * permettra de faire une pose de 2 secondes
	 */
	public static void waitMs(Integer ms) {
		try {
			Thread.sleep(ms);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

	/**
	 * getTimeStamp M�thode utilis� de r�cup�rer la date/heure
	 * 
	 * @return: renvoie l'horodatage actuel en tant que string
	 */
	public static String getTimeStamp() {
		Timestamp timestamp = new Timestamp(System.currentTimeMillis());
		return String.valueOf(timestamp);
	}

	/**
	 * afterTest Cette m�thode perment de clore et de quitter le driver afin de
	 * quitter compl�tement la page test� apr�s l'ex�cution de tous les tests de la
	 * classe
	 */
//	@AfterClass
	public static void afterTest() {
		driver.close();
		driver.quit();
	}

	/**
	 * LOGIN_AS Method loginAs()
	 * 
	 * @param userName:
	 *            Nom d'utilisateur � rechercher dans Salesforce pour se connecter
	 *            en tant que tel
	 * 
	 *            public static void loginAs(String userName) { loginAsExpected =
	 *            true; // Search the user with username passed HomePage menuPage =
	 *            PageFactory.initElements(driver, HomePage.class);
	 *            menuPage.waitConsoleMenu(driver); menuPage.setSearch(userName);
	 *            menuPage.clickSearch();
	 */

	/**
	 * LOGIN_AS searchPage Cliquez sur Rechercher tout, v�rifie que l'utilisateur
	 * existe, clique dessus et se connecte comme lui
	 * 
	 * SearchResultsPage searchPage = PageFactory.initElements(driver,
	 * SearchResultsPage.class); searchPage.clickSearchAll(); waitMs(30000);
	 * searchPage.assertMatch(userName); searchPage.clickOnUser(userName);
	 */

	/**
	 * LOGIN_AS If the chatter page is accessed, click on user details Si la page de
	 * chat est accessible, clique sur les d�tails de l'utilisateur
	 * 
	 * UserChatterPage chatterPage = PageFactory.initElements(driver,
	 * UserChatterPage.class); chatterPage.clickDetailsUser();
	 */

	/**
	 * LOGIN_AS Once the user admin page has been accessed, click on login Une fois
	 * la page d'administration de l'utilisateur est accessible, cliquez sur le
	 * login
	 * 
	 * UserAdminPage userPage = PageFactory.initElements(driver,
	 * UserAdminPage.class); userPage.clickLoginAs(); }
	 */

	/**
	 * LOGIN_AS isLoggedAs M�thode que v�rifie que l'utilisateur connect� est bien
	 * userName
	 * 
	 * @param userName
	 * @return isLoggedAs: renvoie un bool�en qui d�finit que l'utilisateur est
	 *         connect� en tant que
	 */
	public static Boolean isLoggedAs(String userName) {
		Boolean isLoggedAs = true;
		try {
			// Pose de 2 secondes
			waitMs(2000);
			// Recherche l'�l�ment gr�ce � son chemin xpath et son username
			driver.findElement(By.xpath("//div[@id='AppBodyHeader']//div[@class='msgContent']//span[contains(text(), '"
					+ userName + "')]"));
		} catch (Exception e) {
			isLoggedAs = false;
		}
		// Retourne le boolean en fonction
		return isLoggedAs;
	}

	/**
	 * LOGIN_AS logoutAs Cette m�thode d�connecte l'utilisateur de Salesforce
	 * (principalement utilis� pour la d�connexion de l'utilisateur connect�)
	 */
	public static void logoutAs(String userName) {
		// D�connecte seulement si l'utilisateur connect� est userName
		if (isLoggedAs(userName)) {
			System.out.println("Loging out as: " + userName);
			HomePage menuPage = PageFactory.initElements(driver, HomePage.class);
			menuPage.clickLogout();
		}
	}


	public void waitPageLoaded() {
		// On attend l'affichage de la page, au maximum le temps param�tr� dans
		// config.properties -> 30secondes
		driver.manage().timeouts().pageLoadTimeout(getTimeout(), TimeUnit.SECONDS);
	}

	/**
	 * testFailure M�thode qui se lancera apr�s chaque m�thode (test)
	 * 
	 * @param result
	 */
	public static void testFailure(Scenario result) {
		// Compare si le test �choue alors seulement il entrera en condition if
		if (result.isFailed()) {
			String testName = result.getName();
			// Affichage de la m�thode contenant l'erreur
			System.err.println("!!!!!!!!!!!!!!!!!! Error on method : " + testName + " !!!!!!!!!!!!!!!!!!");
			takeScreenshot(testName);
		}
	}

	/**
	 * takeScreenshot Cette m�thode fait un screenshot qui contiendra le nom de la
	 * m�thode de test en cours + effectuera des captures d'�cran
	 * 
	 * @param filename
	 */
	public static void takeScreenshot(String filename) {
		// Affichage de la m�thode contenant l'erreur qui a �t� screenshot�
		System.err.println("!!!!!!!!!!!!!!!!!! Taking Screenshot " + filename + " !!!!!!!!!!!!!!!!!!");
		// Cr�ation de la variable now contenant les info Timestamp
		Timestamp now = new Timestamp(System.currentTimeMillis());
		// Reformatage de la date + nom de la m�thode
		filename = now.toString().replace(':', '-').replace(' ', '_') + "-" + filename;
		// Localisation du folder contenant les screenshot
		File outputFolder = new File("resources\\output\\");
		// S'assure que le r�pertoire est pr�sent
		outputFolder.mkdirs();
		try {
			// Construction de l'adresse compl�te avec l'ajout de l'extension png
			FileOutputStream out = new FileOutputStream("resources\\output\\scr-" + filename + ".png");
			out.write(((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES));
			out.close();
		} catch (WebDriverException | IOException e) {
			e.printStackTrace();
		}
	}

	///////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////
	// -------------------------- STOCK DE METHODES NON UTILISEES
	/////////////////////////////////////////////////////////////////////////////////////////// ----------------------------//
	///////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////

	/**
	 * NON utilis� Methode getTimeLimitExceeded() Cette methode v�rifie si une
	 * erreur de type "Time limit exceeded" est apparue
	 * 
	 * @return
	 * 
	 * 		public static Boolean getTimeLimitExceeded() { boolean
	 *         timeLimitIsPresent = false; try { timeLimitIsPresent =
	 *         driver.findElement(By.xpath("//span[text()='Time limit
	 *         exceeded']")).isEnabled(); } catch(NoSuchElementException e) {
	 *         timeLimitIsPresent = false; } return timeLimitIsPresent; }
	 */

	/**
	 * NON utilis� Method createDate(long monthsToAdd)
	 * 
	 * @param monthsToAdd:
	 *            nb of months to add to today
	 * @return dateStr: returns a string of a date to use
	 * 
	 * 
	 *         public static String createDate(long monthsToAdd) { LocalDate
	 *         localDate = LocalDate.now(); LocalDate oneMonthLater =
	 *         localDate.plusMonths(monthsToAdd); DateTimeFormatter formatter =
	 *         DateTimeFormatter.ofPattern("dd/MM/yyyy"); String dateStr =
	 *         oneMonthLater.format(formatter); return dateStr; }
	 */

}