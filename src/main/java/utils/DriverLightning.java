package utils;

import java.util.List;
import java.util.stream.Collectors;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;

public class DriverLightning extends Driver {

	/**
	 * isRecordPageButtonVisible Methodes pour verifier que les boutons sont bien
	 * visibles Boutons specifiques aux "pages de record" dans Salesforce
	 */
	public boolean isRecordPageButtonVisible(String location, String button) {
		String xpath = Selectors.RECORD_BUTTON + button + Selectors.EQ_END;
		try {
			WebElement element = driver.findElement(By.xpath(xpath));
		} catch (Exception e) {
			System.err.println("Button " + button + " not found.");
			return false;
		}
		return true;
	}

	/**
	 * clickButton Methode permettant de cliquer sur un bouton
	 * 
	 * @param btnName
	 */
	public void clickButton(String btnName) {
		String xpath = Selectors.RECORD_BUTTON + btnName + Selectors.EQ_END;
		try {
			WebElement element = driver.findElement(By.xpath(xpath));
			element.click();
			waitMs(4000);
		} catch (Exception e) {
			System.err.println("Button " + btnName + " not found.");
		}
	}

	/**
	 * Methode pour changer dedue d'onglet, en mode lightning après la création d'un
	 * compte
	 * 
	 * @param viewName
	 */
	public void clickAccessView(String viewName) {
		String xpath = Selectors.SPAN_EQ_START + viewName + Selectors.SPAN_EQ_END;
		WebElement element = driver.findElement(By.xpath(xpath));
		element.click();
		waitMs(2000);

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
	public boolean isLabelPresent(String label, String sectionName, String eltType) {
		// Declaration de la variable "element" qu'on initie e "null"
		WebElement labelElement = null;
		// On declare le webElement "preXpath" du label e verifier
		String preXpath = "";
		try {
			// Si la "sectionName" est different de null
			if (sectionName != "") {
				// Creation de "preXpath" contenant les path + le nom de la section afin
				// d'indiquer sa position
				preXpath += Selectors.SPAN_EQ_START + sectionName + Selectors.SPAN_EQ_END;
			}
			switch (eltType) {
			case LABELEDIT:
				// Si on cherche e verifier un "LABELEDIT ", creation du chemin grece aux
				// constantes LBL_CTN_START et LBL_CTN_END + valeur du label
				WebElement block = driver.findElement(By.xpath(preXpath));
				labelElement = block.findElement(By.xpath(Selectors.SPAN_EQ_START + label + Selectors.SPAN_EQ_END));
				break;
			case LABELVIEW:
				labelElement = driver.findElement(By.xpath(Selectors.SPAN_CTN_START + label + Selectors.SPAN_CTN_END));
				break;
			case RELATEDLIST:
				labelElement = driver
						.findElement(By.xpath(Selectors.RELATED_LIGHT_START + label + Selectors.RELATED_LIGHT_END));
				break;
			}
		} catch (Exception e) {
			// Si le label n'est pas present on affiche le message d'erreur
			System.err.println("Label " + label + " not found.");
			return false;
		}
		// On retourne le booleen, pour effectuer un assert en fonction
		return true;
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
	public boolean isElementEditable(String eltName, String sectionName, String eltType) {

		// Declaration de la variable "element" qu'on initie e "null"
		WebElement element = null;
		// On declare le webElement "preXpath" contenant la valeur du debut du chemin
		// d'acces xpath du champ e remplir
		String preXpath = "";
		try {
			if (sectionName != "") {
				preXpath += Selectors.SPAN_EQ_START + sectionName + Selectors.SPAN_EQ_END;
			}
			// On determine le webelement "block" grece e son xpath
			WebElement block = driver.findElement(By.xpath(preXpath));
			switch (eltType) {
			case INPUT:
				// Si c'est un type "INPUT", creation du chemin e l'aide du preXpath + valeur
				// (path) de la constante INPUT_TEXT
				element = block.findElement(
						By.xpath(Selectors.SPAN_EQ_START + eltName + Selectors.SPAN_EQ_END + Selectors.NEXT_INPUT));
				break;
			case SELECT:
				element = block.findElement(By.xpath(Selectors.SPAN_EQ_START + eltName + Selectors.SPAN_EQ_END
						+ Selectors.NEXT_DIV_ANC_SPAN + "//a"));
				break;
			case SEARCHFIELD:
				element = block.findElement(By.xpath(Selectors.SEARCH_PATH));
				break;
			case DATE:
				element = block.findElement(By.xpath(
						Selectors.SPAN_EQ_START + eltName + Selectors.SPAN_EQ_END + Selectors.NEXT_INPUT_ANC_LABEL));
				break;
			case TEXTAREA:
				element = block.findElement(
						By.xpath(Selectors.SPAN_EQ_START + eltName + Selectors.SPAN_EQ_END + Selectors.NEXT_TEXT_AREA));
				break;
			case CHECKBOX:
				element = block.findElement(By.xpath(preXpath + Selectors.CHECKBOX));
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
	public void setValue(String eltName, String sectionName, String eltType, String... values) {
		// On determine le webelement "block" grece e son xpath
		WebElement block = driver.findElement(By.xpath(Selectors.SPAN_EQ_START + sectionName + Selectors.SPAN_EQ_END));
		// Declaration de la variable "element" qu'on initie e "null"
		WebElement element = null;
		// On declare le webElement "preXpath" contenant la valeur du debut du chemin
		// d'acces xpath du champ e remplir
		String preXpath = Selectors.SPAN_EQ_START + eltName + Selectors.SPAN_EQ_END;
		try {
			// On liste les types de champs ainsi que leurs chemins (path)
			switch (eltType) {
			case INPUT:
				// Si c'est un type "INPUT", creation du chemin e l'aide du preXpath + du nom du
				// block + valeur (path) de la constante INPUT_TEXT
				element = block.findElement(By.xpath(preXpath + Selectors.NEXT_INPUT));
				// On vide le champ si il y a une valeur de renseigne
				element.clear();
				// On rempli le champ avec la valeur
				element.sendKeys(values[0]);
				break;
			case SELECT:
				// Si c'est un type "INPUT", creation du chemin e l'aide du preXpath + du nom du
				// block + valeur (path) de la constante SELECT (Pick List)
				element = block.findElement(By.xpath(preXpath + Selectors.NEXT_DIV_ANC_SPAN + "//a"));
				// On selectionne la valeur determine
				selectElementInSelect(element, values[0]);
				break;
			case SEARCHFIELD:
				element = block.findElement(By.xpath(Selectors.SEARCH_PATH));
				element.clear();
				element.sendKeys(values[0]);
				waitMs(2000);
				break;
			// spécifique à lightning et au parent account d'un account permet de choisir le
			// premier
			// parent account de la liste
			case SELECT_SEARCHFIELD:
				element = block.findElement(By.xpath(Selectors.SEARCH_PATH));
				element.clear();
				element.sendKeys(values[0]);
				waitMs(2000);
				WebElement parentAccount = driver.findElement(By.xpath(Selectors.PARENT_ACCOUNT_SELECT));
				parentAccount.click();
				break;
			case TEXTAREA:
				element = block.findElement(By.xpath(preXpath + Selectors.NEXT_TEXT_AREA));
				element.clear();
				element.sendKeys(values[0]);
				break;
			case DATE:
				element = block.findElement(By.xpath(
						Selectors.SPAN_EQ_START + eltName + Selectors.SPAN_EQ_END + Selectors.NEXT_INPUT_ANC_LABEL));
				element.sendKeys(values[0]);
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
	public void selectElementInSelect(WebElement elementSelect, String stringToSelect) {
		// On clique sur la picklist
		elementSelect.click();
		// On recupere la liste d'options html (<option>) correspondant e notre valeur
		// "stringToSelect" dans le WebElement "elementSelect" on attend qu'elle soit
		// chargée pour selectionner notre option
		WebElement listeOptions = wait.until(ExpectedConditions.presenceOfElementLocated(By.className("positioned")));
		List<WebElement> options = listeOptions.findElements(By.className("uiMenuItem")).stream()
				.filter(option -> option.getText().equals(stringToSelect)).collect(Collectors.toList());
		// waitMs(1000);
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
	public void selectElementInMultipleSelect(WebElement elementSelect, String stringToSelect) {
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
	public String getValueView(String label) {
		// On definit des webElements correspondant au block principal et e l'element e
		// trouver, initialise par defaut e null
		String preXpath = Selectors.SPAN_CTN_START + label + Selectors.SPAN_CTN_END;
		WebElement element = null;
		String fieldValue;
		try {
			// On cherche notre web element e partir du block, dans lequel on recherche un
			// element en particulier, ici un champs en fonction de:
			// - Son label => variable "label"
			element = driver.findElement(By.xpath(preXpath + Selectors.NEXT_DIV + "//span"));
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
	 * @param btnName
	 * 
	 */
	@Override
	public boolean isButtonVisible(String btnName) {

		String xpath = Selectors.RECORD_BUTTON + btnName + Selectors.EQ_END;
		try {
			WebElement element = driver.findElement(By.xpath(xpath));
		} catch (Exception e) {
			System.err.println("Button " + btnName + " not found.");
			return false;
		}
		return true;
	}

}