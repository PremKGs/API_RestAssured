package com.restassured.testrunner;

import java.io.File;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin = { "com.cucumber.listener.ExtentCucumberFormatter:src/test/java/com/restassured/report/html/extent.html", "pretty",
				"html:src/test/java/com/restassured/report/html",
				"junit:src/test/java/com/restassured/report/cucumber.xml",
				"json:src/test/java/com/restassured/report/cucumber.json",
				}, strict = true,
		glue ="com.restassured.definition",
		features="src\\test\\java\\com\\restassured\\feature\\",
		tags="@API"
		
		)
public class TestRunner {
	
	@AfterClass
	public static void afterClass() {

		Reporter.loadXMLConfig(new File("extent-config.xml"));
	}

}
