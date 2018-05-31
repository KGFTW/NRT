package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features= "src/test/resources/features",
		glue="steps",
		plugin = {"pretty", "html:target/Reports/Cucumber.json"})

public class RunnerTest extends AbstractTestNGCucumberTests {

}
