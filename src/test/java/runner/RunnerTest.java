package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features = "src/test/resources/features", glue = "steps", plugin = {
		"html:target/Reports/cucumber-html-report", "json:target/cucumber.json", "pretty:target/cucumber-pretty.txt" })
public class RunnerTest extends AbstractTestNGCucumberTests {
		
	

}