package utils;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.sql.Timestamp;
import java.util.List;
import java.util.Properties;
import java.util.stream.Collectors;

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

import cucumber.api.Scenario;

public class Driver {

	/**
	 * Declaration des constantes
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
	 * Declaration des variables
	 */

	public static Properties configProperties;
	private static String browser = System.getProperty("browser");
	public static Boolean loginAsExpected = false;
	public static String loginAsUserName = "";
	public static WebDriver driver;

	static {
		// On charge les properties de config (paths des web drivers)
		loadConfigProperties();		
	}

	/**
	 * beforeTestClass Methode qui s'execute avant chaque classe de Test afin: -
	 * D'instancier le driver en fonction du "browser" (parametre Maven), initialise
	 * par default en chrome portable app headless (sans UI) - Passer la variable
	 * loginAsExpected e false afin de valider que l'on n'est pas connecte par
	 * defaut avec un autre utilisateur
	 */
	public static void beforeTestClass() {
		driver = instanciateDriver();
		loginAsExpected = false;
	}

	/**
	 * getPhantomJsPath Cette methode renvoi le chemin (Path) du PhantomJs driver
	 * defini dans config.properties Phantom -> navigateur sans interface graphique
	 */
	public static String getPhantomJsPath() {
		return configProperties.getProperty("phantomjs_path");
	}

	/**
	 * getFirefoxPath Cette methode renvoi le chemin (Path) de FireFox driver defini
	 * dans config.properties
	 */
	public static String getFirefoxPath() {
		return configProperties.getProperty("gecko_path");
	}

	/**
	 * getChromePath Cette methode renvoi le chemin (Path) du Chrome driver defini
	 * dans config.properties
	 */
	public static String getChromePath() {
		return configProperties.getProperty("chrome_path");
	}

	/**
	 * getTimeout Cette methode renvoi la valeur du timeout configure dans
	 * configProperties
	 */
	public static Integer getTimeout() {
		return Integer.valueOf(configProperties.getProperty("timeout"));
	}

	/**
	 * instanciateDriver Methode qui Charge le driver en fonction du navigateur
	 * determine dans Eclipse (run -> run configurations -> VM Arguments) Puis
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
	 * loadConfigProperties Cette methode permet de recuperer le fichier
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
	 * isRecordPageButtonVisible Methodes pour verifier que les boutons sont bien
	 * visibles Boutons specifiques aux "pages de record" dans Salesforce
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
	 * isButtonVisible Methode utilise pour verifier que les boutons sont bien
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
	 * clickButton Methode permettant de cliquer sur un bouton
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
	 * isLabelPresent Methode utilise pour verifier que les champs sont bien
	 * visibles
	 * 
	 * @param eltName
	 *            -> Nom du Label (Nom du champ e remplir)
	 * @param sectionName
	 *            -> Nom de la section, ex : section_1_EditPage
	 * @param eltType
	 *            -> type d'element, LABELEDIT / LABELVIEW / LINK/ etc (Definis
	 *            dessous)
	 * @return
	 */
	public static boolean isLabelPresent(String label, String sectionName, String eltType) {
		// Declaration de la variable "element" qu'on initie e "null"
		WebElement labelElement = null;
		// On declare le webElement "preXpath" contenant la valeur du debut du chemin
		// d'acces xpath du label e verifier
		String preXpath = Selectors.MAIN_BODY;
		// Declaration de la variable boolean "labelPresent" initialise e "true"
		boolean labelPresent = true;
		try {
			// Si la "sectionName" est different de null
			if (sectionName != "") {
				// Creation de "preXpath" contenant les path + le nom de la section afin
				// d'indiquer sa position
				preXpath += Selectors.H_3_EQ_START + sectionName + Selectors.H_3_EQ_END + Selectors.NEXT_DIV;
			}
			WebElement block = driver.findElement(By.xpath(preXpath));
			switch (eltType) {
			case LABELEDIT:
				// Si on cherche e verifier un "LABELEDIT ", creation du chemin grece aux
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
			// Si le label n'est pas present on affiche le message d'erreur
			System.err.println("Label " + label + " not found.");
			labelPresent = false;
		}
		// On retourne le booleen, pour effectuer un assert en fonction
		return labelPresent;
	}

	/**
	 * isElementEditable Methode utilise verifier si les champs sont bien editables
	 * 
	 * @param eltName
	 *            -> Nom du Label (Nom du champ e remplir)
	 * @param sectionName
	 *            -> Nom de la section, ex : section_1_EditPage
	 * @param eltType
	 *            -> type d'element, INPUT / SELECT / TEXTAREA / etc (Definis
	 *            dessous)
	 * @param required
	 *            -> champ obligatoire (true ou false)
	 * @return
	 */
	public static boolean isElementEditable(String eltName, String sectionName, String eltType) {

		// Declaration de la variable "element" qu'on initie e "null"
		WebElement element = null;
		// On declare le webElement "preXpath" contenant la valeur du debut du chemin
		// d'acces xpath du champ e remplir
		String preXpath = Selectors.MAIN_BODY;
		boolean labelPresent = true;
		try {
			if (sectionName != "") {
				preXpath += Selectors.H_3_EQ_START + sectionName + Selectors.H_3_EQ_END + Selectors.NEXT_DIV;
			}
			// On determine le webelement "block" grece e son xpath
			WebElement block = driver.findElement(By.xpath(preXpath));

			preXpath = Selectors.LBL_CTN_START + eltName + Selectors.LBL_CTN_END + Selectors.NEXT_TD;

			switch (eltType) {
			case INPUT:
				// Si c'est un type "INPUT", creation du chemin e l'aide du preXpath + valeur
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
	 * Methode utilise pour remplir les champs
	 * 
	 * @param eltName
	 *            -> Nom du Label (Nom du champ e remplir)
	 * @param sectionName
	 *            -> Nom de la section, ex : section_1_EditPage
	 * @param eltType
	 *            -> type d'element, INPUT / SELECT / TEXTAREA / etc (Definis
	 *            dessous)
	 * @param required
	 *            -> champ obligatoire (true ou false)
	 * @param values
	 *            -> Valeur e renseigner dans le champs
	 */
	public static void setValue(String eltName, String sectionName, String eltType, boolean required,
			String... values) {
		// On determine le webelement "block" grece e son xpath
		WebElement block = driver.findElement(By.xpath(Selectors.MAIN_BODY + Selectors.H_3_EQ_START + sectionName
				+ Selectors.H_3_EQ_END + Selectors.NEXT_DIV));
		// Declaration de la variable "element" qu'on initie e "null"
		WebElement element = null;
		// On declare le webElement "preXpath" contenant la valeur du debut du chemin
		// d'acces xpath du champ e remplir
		String preXpath = Selectors.LBL_CTN_START + eltName + Selectors.LBL_CTN_END + Selectors.NEXT_TD;
		if (required) {
			// Si le champ e remplir est obligatoire un ajoute e preXpath le script contenu
			// dans la constante REQUIRED
			preXpath += Selectors.REQUIRED;
		}
		try {
			// On liste les types de champs ainsi que leurs chemins (path)
			switch (eltType) {
			case INPUT:
				// Si c'est un type "INPUT", creation du chemin e l'aide du preXpath + du nom du
				// block + valeur (path) de la constante INPUT_TEXT
				element = block.findElement(By.xpath(preXpath + Selectors.INPUT_TEXT));
				// On vide le champ si il y a une valeur de renseigne
				element.clear();
				// On rempli le champ avec la valeur
				element.sendKeys(values[0]);
				break;
			case SELECT:
				// Si c'est un type "INPUT", creation du chemin e l'aide du preXpath + du nom du
				// block + valeur (path) de la constante SELECT (Pick List)
				element = block.findElement(By.xpath(preXpath + Selectors.SELECT));
				// On selectionne la valeur determine
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
			// Si l'insertion de donnes est en echec, on renvoi le message d'erreur
			System.err.println(eltType + " " + eltName + " couldn't be set with value(s) " + values);
		}
	}

	/**
	 * Methode selectElementInSelect Cette methode permet de selectionner un element
	 * dans une picklist simple
	 * 
	 * @param elementSelect:
	 *            WebElement de la picklist sur laquelle selectionner une valeur
	 * @param stringToSelect:
	 *            valeur de la picklist e selectionner
	 */
	public static void selectElementInSelect(WebElement elementSelect, String stringToSelect) {
		// On clique sur la picklist
		elementSelect.click();
		// On recupere la liste d'options html (<option>) correspondant e notre valeur
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
		// Si tout va bien, on clique sur la valeur selectione
		options.get(0).click();
	}

	/**
	 * Methode selectElementInMultipleSelect Cette methode permet de selectionner un
	 * element dans une multipicklist
	 * 
	 * @param elementSelect:
	 *            WebElement de la multipicklist sur laquelle selectionner une
	 *            valeur
	 * @param stringToSelect:
	 *            valeur de la multipicklist e selectionner
	 */
	public static void selectElementInMultipleSelect(WebElement elementSelect, String stringToSelect) {
		// On recupere la liste d'options html (<option>) correspondant e notre valeur
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
		// Si tout va bien, on clique sur la valeur selectione
		options.get(0).click();
	}

	/**
	 * Methode utilise pour verifier si les champs sont bien remplis
	 * 
	 * @param label
	 *            -> Nom du Label (Nom du champ e remplir)
	 * @param values
	 *            -> Valeur renseigne dans le champs
	 * @return: retourne la valeur du champ trouve
	 */
	public static String getValueView(String label) {
		// On definit des webElements correspondant au block principal et e l'element e
		// trouver, initialise par defaut e null
		WebElement block = driver.findElement(By.xpath(Selectors.MAIN_BODY));
		WebElement element = null;
		String fieldValue;
		try {
			// On cherche notre web element e partir du block, dans lequel on recherche un
			// element en particulier, ici un champs en fonction de:
			// - Son label => variable "label"
			element = block.findElement(
					By.xpath(Selectors.TD_CTN_START + label + Selectors.TD_CTN_END + Selectors.FOLLOWING_FIELD));
			// Si l'element est retourne, on peut recuperer la valeur de son champs, sans
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
	 * waitMs Methode permettant de gerer le timing Dans une methode, waitMs(2000);
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
	 * getTimeStamp Methode utilise de recuperer la date/heure
	 * 
	 * @return: renvoie l'horodatage actuel en tant que string
	 */
	public static String getTimeStamp() {
		Timestamp timestamp = new Timestamp(System.currentTimeMillis());
		return String.valueOf(timestamp);
	}

	/**
	 * afterTest Cette methode perment de clore et de quitter le driver afin de
	 * quitter completement la page teste apres l'execution de tous les tests de la
	 * classe
	 */	
	public static void afterTest() {
		driver.close();
		driver.quit();
	}
	
	/**
	 * testFailure Methode qui se lancera apres chaque methode (test)
	 * 
	 * @param result
	 */
	public static void testFailure(Scenario result) {
		// Compare si le test echoue alors seulement il entrera en condition if
		if (result.isFailed()) {
			String testName = result.getName();
			// Affichage de la methode contenant l'erreur
			System.err.println("!!!!!!!!!!!!!!!!!! Error on method : " + testName + " !!!!!!!!!!!!!!!!!!");
			takeScreenshot(testName);
		}
	}

	/**
	 * takeScreenshot Cette methode fait un screenshot qui contiendra le nom de la
	 * methode de test en cours + effectuera des captures d'ecran
	 * 
	 * @param filename
	 */
	public static void takeScreenshot(String filename) {
		// Affichage de la methode contenant l'erreur qui a ete screenshote
		System.err.println("!!!!!!!!!!!!!!!!!! Taking Screenshot " + filename + " !!!!!!!!!!!!!!!!!!");
		// Creation de la variable now contenant les info Timestamp
		Timestamp now = new Timestamp(System.currentTimeMillis());
		// Reformatage de la date + nom de la methode
		filename = now.toString().replace(':', '-').replace(' ', '_') + "-" + filename;
		// Localisation du folder contenant les screenshot
		File outputFolder = new File("resources\\output\\");
		// S'assure que le repertoire est present
		outputFolder.mkdirs();
		try {
			// Construction de l'adresse complete avec l'ajout de l'extension png
			FileOutputStream out = new FileOutputStream("resources\\output\\scr-" + filename + ".png");
			out.write(((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES));
			out.close();
		} catch (WebDriverException | IOException e) {
			e.printStackTrace();
		}
	}


}