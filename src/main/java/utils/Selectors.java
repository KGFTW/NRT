package utils;

public class Selectors {
	/** Global Xpath Selectors **/
	
	
	// Ctn and Eq ending tags
	public static final String CTN_END = "')]";
	public static final String EQ_END = "']";
	
	//select an item in parentAccount search (lightning)
	public static final String PARENT_ACCOUNT_SELECT = "//mark[2]";
	
	// List view list table selector
	public static final String LIST_VIEW_TABLE = "//div[@id='main-panel']//div[@class='listBody']//table[@class='x-grid3-row-table']";
	public static final String RECORD_BUTTON ="//div[@class='modal-footer slds-modal__footer']//span[text()='";
	
	// Main div of a page layout
	public static final String MAIN_BODY = "//div[@id='ep']//div[@class='pbBody']";
	public static final String VFP_MAIN_BODY = "//div[@class='apexp']//div[@class='pbBody']";
	
	// Main page layout title div
	public static final String PAGE_TITLE = "//div[@class='bPageTitle']";
	// Main page layout title page type (contains details about the type of record (object)), can be used to check if a view page is displayed
	public static final String PAGE_TYPE = "//h1[@class='pageType']";
	// Main page layout title description (contains details about the record)
	public static final String PAGE_DESC = "//h2[@class='pageDescription']";
	
	// Next div, used to find a section content in page layouts
	public static final String NEXT_DIV = "/ancestor::div[1]/following-sibling::div[1]";
	public static final String NEXT_DIV_ANC_SPAN = "/ancestor::span[1]/following-sibling::div[1]";
	public static final String NEXT_INPUT_ANC_LABEL = "/ancestor::label[1]/following-sibling::div[1]//input[@type='text']";
	
	// Related list of a page layout
	public static final String RELATED_LIST = "//div[contains(@class, 'bRelatedList')]//div[@class='pbHeader']";
	public static final String RELATED_LIST_FIRST_BTN = "/ancestor::td[1]/following-sibling::td//input";
	public static final String RELATED_LIST_BTN_START = "/ancestor::td[1]/following-sibling::td//input[@name='";
	public static final String RELATED_LIST_BTN_START_VALUE = "/ancestor::td[1]/following-sibling::td//input[@value='";
	public static final String RELATED_LIST_LINE = "/ancestor::div[1]/following-sibling::div[@class='pbBody']//tr[contains(@class, 'dataRow')]";
	
	// h3 title of a related list (equals)
	public static final String H_3_EQ_START  = "//h3[text()='";
	public static final String H_3_EQ_END = EQ_END;
	
	//related list lightning
	public static final String RELATED_LIGHT_START = "//article//header//span[text()='";
	public static final String RELATED_LIGHT_END =  EQ_END;
	
	// span title of a section (equals)
	public static final String SPAN_EQ_START = "//div[not(contains(@style,'display:none'))]//span[text()='";
	public static final String SPAN_EQ_END = EQ_END;
	
	//span contains
	public static final String SPAN_CTN_START = "//div[not(contains(@style,'display:none'))]//span[contains(text(), '";
	public static final String SPAN_CTN_END = CTN_END;
	
	// h3 title of a related list (contains)
	public static final String H_3_CTN_START = "//h3[contains(text(), '";
	public static final String H_3_CTN_END = CTN_END;

	// Value of a label (equals) 
	public static final String LBL_EQ_START = "//label[text()='";
	public static final String LBL_EQ_END = EQ_END;
	
	// Value of a label (contains)
	public static final String LBL_CTN_START = "//label[contains(text(), '";
	public static final String LBL_CTN_END = CTN_END;
	
	// Value of a td (contains)
	public static final String TD_CTN_START = "//td[contains(text(), '";
	public static final String TD_CTN_END = CTN_END;

	// Value of a link (contains)
	public static final String LINK_CTN_START = "//a[contains(text(), '";
	public static final String LINK_CTN_END = CTN_END;
	
	// Value of an element (type might not matter) (equals)
	public static final String EL_EQ_START = "//*[text()='";
	public static final String EL_EQ_END = EQ_END;
	
	// Value of an element (type might not matter) (contains)
	public static final String EL_CTN_START = "//*[contains(text(), '";
	public static final String EL_CTN_END = CTN_END;
	
	// Next td used to find the next td 
	public static final String NEXT_TEXT_AREA = "/ancestor::label[1]/following-sibling::textarea";
	public static final String NEXT_SEARCH_INPUT ="/ancestor::label[1]//input";
	public static final String NEXT_INPUT = "/ancestor::label[1]/following-sibling::input[1]";
	public static final String NEXT_TD = "/ancestor::td[1]/following-sibling::td[1]";
	public static final String VFP_NEXT_TD = "/ancestor::th[1]/following-sibling::td[1]";
	// Following td used to find the direct following td
	public static final String FOLLOWING_TD = "/following-sibling::td";
	
	// Required div used to find a required field
	public static final String REQUIRED = "//div[@class='requiredInput']";
	public static final String LOOKUP = "//span[@class='lookupInput']";
	
	// Page Edit fields definition
	public static final String INPUT_TEXT = "//input[@type='text']";
	public static final String INPUT_DATE = "//span[@class='dateInput dateOnlyInput']/input[@type='text']";
	public static final String CHECKBOX = "//input[@type='checkbox']";
	public static final String TEXTAREA = "//textarea";
	public static final String SELECT = "//select";
	public static final String OPTN_CTN_START = "//option[contains(text(), '";
	public static final String LINK = "//href[contains(text(), '";
	public static final String OPTN_CTN_END = CTN_END;
	
	// Page View fields definiton
	public static final String LOOKUP_LINK = "//a";
	
	//for searchfield Lightning
	public static final String SEARCH_PATH = "//div[@class='autocompleteWrapper slds-grow']//input";
	
	// Following field used to find the direct following field value in View page layouts
	public static final String FOLLOWING_FIELD = FOLLOWING_TD + "//div";	
		
	/** MultiSelect selectors **/
	// MultiSelect global element
	public static final String MULTISELECT = "//table[@class='multiSelectPicklistTable']";
	// First option of the multiselect (can be used to add)
	public static final String FIRST_OPTION = "//select[1]//option[1]";
	// Add button used to add a select option
	public static final String ADD_BTN = "//a[1]";	
	// Target element to put value in (to verify value)
	public static final String TARGET = "//td[3]//select";
	
	
	//Constantes pour les paramètres passés varaibles globales dans le NRT
	public static final String CLASSIC = "classic";
	public static final String LIGHTNING = "lightning";
	
	public static final String BROWSER = "browser";
	public static final String URL = "url";
	public static final String USERNAME = "username";
	public static final String PASSWORD = "password";
	public static final String VIEW = "view";
	
	
}
