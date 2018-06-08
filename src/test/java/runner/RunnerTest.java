package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features = "src/test/resources/features", glue = "steps", plugin = {
		"html:target/Reports/cucumber-html-report", "json:target/cucumber.json", "pretty:target/cucumber-pretty.txt" })
public class RunnerTest extends AbstractTestNGCucumberTests {
		
	// point d'entrée de notre programme de test.
	// le test se lance comme s'il allait effectuer uns suite de tests TestNG
	//mais va plutôt aller regarder dans le dossier "features" et lire tous les fichiers .feature qui sont contenus dedans
	
	// features : correspond au dossier source où sont stockés nos fichier .feature
	
	// glue : correspond au dossier source où sont stockés les différentes méthodes appelées par les scénarios
	
	// plugin : permet de récupérer des rapports de test détaillés
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}