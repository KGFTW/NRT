package utils;

public enum StandardButton {

	// liste des types de bouton
    SAVE("save"), SAVENEW("save_new"), EDIT("edit"), CLONE("clone"), SHARING("share"), CONVERT("convert"), CANCEL("cancel"), DELETE("delete"), NEW("new");

    private String name;

    StandardButton(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}
