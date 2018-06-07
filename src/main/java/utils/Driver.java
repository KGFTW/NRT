package utils;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.sql.Timestamp;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

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

public abstract class Driver {

	/**
	 * Declaration des constantes
	 */
	public  final String LABELEDIT = "Label Edit";
	public  final String LABELVIEW = "Label View";
	public  final String LINK = "Link";
	public  final String RELATEDLIST = "Related List";
	public  final String OPTION = "Option";
	public  final String TEXTAREA = "textArea";
	public  final String INPUT = "Input";
	public  final String SELECT = "select";
	public  final String MULTISELECT = "multiselect";
	public  final String CHECKBOX = "checkbox";
	public  final String CHECKBOXSPECIAL = "checkboxspecial";
	public  final String SEARCHFIELD = "searchField";
	public 	final String SELECT_SEARCHFIELD = "select_searchField";
	public  final String DATE = "Date";

	public  final String LOGINURL = System.getProperty("url");

	public  final String TOP = "top";
	public  final String BOTTOM = "bottom";

	/**
	 * Declaration des variables
	 */
	public  boolean onSalesClassic = false;
	public  Properties configProperties;
	private  String browser = System.getProperty("browser");
	public  Boolean loginAsExpected = false;
	public  String loginAsUserName = "";
	public  WebDriver driver;

	 {
		// On charge les properties de config (paths des web drivers)
		loadConfigProperties();
		if (System.getProperty("view").equals("classic")) {
			onSalesClassic = true;
		}
	}

	/**
	 * beforeTestClass Methode qui s'execute avant chaque classe de Test afin: -
	 * D'instancier le driver en fonction du "browser" (parametre Maven), initialise
	 * par default en chrome portable app headless (sans UI) - Passer la variable
	 * loginAsExpected e false afin de valider que l'on n'est pas connecte par
	 * defaut avec un autre utilisateur
	 */
	public  void beforeTestClass() {
		driver = instanciateDriver();
		loginAsExpected = false;
	}

	/**
	 * getPhantomJsPath Cette methode renvoi le chemin (Path) du PhantomJs driver
	 * defini dans config.properties Phantom -> navigateur sans interface graphique
	 */
	public  String getPhantomJsPath() {
		return configProperties.getProperty("phantomjs_path");
	}

	/**
	 * getFirefoxPath Cette methode renvoi le chemin (Path) de FireFox driver defini
	 * dans config.properties
	 */
	public  String getFirefoxPath() {
		return configProperties.getProperty("gecko_path");
	}

	/**
	 * getChromePath Cette methode renvoi le chemin (Path) du Chrome driver defini
	 * dans config.properties
	 */
	public  String getChromePath() {
		return configProperties.getProperty("chrome_path");
	}

	/**
	 * getTimeout Cette methode renvoi la valeur du timeout configure dans
	 * configProperties
	 */
	public  Integer getTimeout() {
		return Integer.valueOf(configProperties.getProperty("timeout"));
	}

	/**
	 * instanciateDriver Methode qui Charge le driver en fonction du navigateur
	 * determine dans Eclipse (run -> run configurations -> VM Arguments) Puis
	 * retourne l'URL
	 * 
	 * @return
	 */
	public  WebDriver instanciateDriver() {
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
			options.addArguments("--window-size=1920,1080");
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
	public  void loadConfigProperties() {
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

	public  void waitPageLoaded() {
		// On attend l'affichage de la page, au maximum le temps paramétré dans
		// config.properties -> 30secondes
		driver.manage().timeouts().pageLoadTimeout(getTimeout(), TimeUnit.SECONDS);
	}

	/**
	 * waitMs Methode permettant de gerer le timing Dans une methode, waitMs(2000);
	 * permettra de faire une pose de 2 secondes
	 */
	public  void waitMs(Integer ms) {
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
	public  String getTimeStamp() {
		Timestamp timestamp = new Timestamp(System.currentTimeMillis());
		return String.valueOf(timestamp);
	}

	/**
	 * afterTest Cette methode perment de clore et de quitter le driver afin de
	 * quitter completement la page teste apres l'execution de tous les tests de la
	 * classe
	 */
	public  void afterTest() {
		driver.close();
		driver.quit();
	}

	/**
	 * testFailure Methode qui se lancera apres chaque methode (test)
	 * 
	 * @param result
	 */
	public  void testFailure(Scenario result) {
		// Compare si le test echoue alors seulement il entrera en condition if
		if (result.isFailed()) {
			String testName = result.getName();
			// Affichage de la methode contenant l'erreur
			System.err.println("!!!!!!!!!!!!!!!!!! Error on method : " + testName + " !!!!!!!!!!!!!!!!!!");
			// takeScreenshot(testName);
		}
	}

	/**
	 * takeScreenshot Cette methode fait un screenshot qui contiendra le nom de la
	 * methode de test en cours + effectuera des captures d'ecran
	 * 
	 * @param filename
	 */
	public  void takeScreenshot(String filename) {
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
	
	
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////
					//Methodes abstraites à outrepasser dans les classes filles
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	
	public abstract boolean isRecordPageButtonVisible(String location, String button);
	
	public abstract boolean isButtonVisible(String btnName);
	
	public abstract void clickButton(String btnName);
	
	public abstract boolean isLabelPresent(String label, String sectionName, String eltType);
	
	public abstract boolean isElementEditable(String eltName, String sectionName, String eltType);
	
	public abstract void setValue(String eltName, String sectionName, String eltType, boolean required,
			String... values);
	
	public abstract void selectElementInSelect(WebElement elementSelect, String stringToSelect);
	
	public abstract  void selectElementInMultipleSelect(WebElement elementSelect, String stringToSelect);
	
	public abstract  String getValueView(String label);
	
	public abstract void clickAccessView(String viewName);
	
	
	

}