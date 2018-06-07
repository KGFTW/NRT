package utils;

import java.util.List;
import java.util.stream.Collectors;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.WebElement;

public class DriverClassic extends Driver {

	/**
	 * isRecordPageButtonVisible Methodes pour verifier que les boutons sont bien
	 * visibles Boutons specifiques aux "pages de record" dans Salesforce
	 */
	public boolean isRecordPageButtonVisible(String location, String button) {
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
	public boolean isButtonVisible(String btnName) {
		boolean btnPresent = true;

		try {
			WebElement element = driver.findElement(By.name(btnName.toLowerCase()));
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
	public void clickButton(String btnName) {
		try {
			WebElement element = driver.findElement(By.name(btnName.toLowerCase()));
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
	public boolean isLabelPresent(String label, String sectionName, String eltType) {
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
	public boolean isElementEditable(String eltName, String sectionName, String eltType) {

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
			case SEARCHFIELD:
				element = block.findElement(By.xpath(preXpath + Selectors.INPUT_TEXT));
				break;
			case DATE:
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
	public void setValue(String eltName, String sectionName, String eltType, boolean required, String... values) {
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
			case SEARCHFIELD:
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
			case SELECT_SEARCHFIELD:
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
	public void selectElementInSelect(WebElement elementSelect, String stringToSelect) {
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

	@Override
	public void clickAccessView(String viewName) {
		// Methode spécifique à lightning

	}

}