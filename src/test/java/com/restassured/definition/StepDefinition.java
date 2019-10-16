package com.restassured.definition;

import java.io.File;
import java.io.FileInputStream;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;

import org.apache.commons.lang3.text.translate.AggregateTranslator;
import org.junit.Assert;

import com.jayway.jsonpath.JsonPath;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;

public class StepDefinition {

	public static String URI = "https://reqres.in";
	public Response response;

	@When("^User send a GET request to \"([^\"]*)\"$")
	public void user_send_a_GET_request_to(String arg1) throws Throwable {
		response = RestAssured.given().when().contentType(ContentType.JSON).get(URI + arg1);
	}

	@Then("^User verify GET response status should be 200$")
	public void user_verify_GET_response_status_should_be() throws Throwable {
		int statusCode = response.getStatusCode();
		Assert.assertEquals(200, statusCode);

	}
	
	@Then("^User verify PUT response status should be 200$")
	public void user_verify_PUT_response_status_should_be() throws Throwable {
		int statusCode = response.getStatusCode();
		Assert.assertEquals(200, statusCode);

	}
	
	@Then("^User verify POST response status should be 201$")
	public void user_verify_POST_response_status_should_be() throws Throwable {
		int statusCode = response.getStatusCode();
		Assert.assertEquals(201, statusCode);

	}
	
	@Then("^User verify DELETE response status should be 204$")
	public void user_verify_DELETE_response_status_should_be() throws Throwable {
		int statusCode = response.getStatusCode();
		Assert.assertEquals(204, statusCode);

	}

	@Then("^User verify the JSON response \"([^\"]*)\" equals \"([^\"]*)\"$")
	public void user_verify_the_JSON_response_equals(String arg1, String arg2) throws Throwable {
		io.restassured.path.json.JsonPath jsonPath = response.jsonPath();
		String getData1 = jsonPath.get(arg1).toString();
		Assert.assertEquals(arg2, getData1);
	}

	@Then("^User verify the JSON response \"([^\"]*)\" should be not null$")
	public void user_verify_the_JSON_response_should_be_not_null(String arg1) throws Throwable {
		String data = response.jsonPath().get(arg1);
		Assert.assertNotNull(data);
	}


	@When("^User use a \"([^\"]*)\" file to send a POST request to \"([^\"]*)\"$")
	public void user_use_a_file_to_send_a_POST_request_to(String arg1, String arg2) throws Throwable {
		String body = new String(Files.readAllBytes(Paths
				.get(System.getProperty("user.dir") + "\\src\\test\\java\\com\\restassured\\json\\" + arg1 + ".json")));
		response = RestAssured.given().body(body).when().contentType(ContentType.JSON).post(URI + arg2);
//		/System.out.println(response.getBody().asString());
	}

	@When("^User use a \"([^\"]*)\" file to send a PUT request to \"([^\"]*)\"$")
	public void user_use_a_file_to_send_a_PUT_request_to(String arg1, String arg2) throws Throwable {
		String body = new String(Files.readAllBytes(Paths
				.get(System.getProperty("user.dir") + "\\src\\test\\java\\com\\restassured\\json\\" + arg1 + ".json")));
		response = RestAssured.given().body(body).when().contentType(ContentType.JSON).put(URI + arg2);
	//	System.out.println(response.getBody().asString());

	}

	@When("^User send a DELETE request to \"([^\"]*)\"$")
	public void user_send_a_delete_request(String arg1) throws Throwable {
		response = RestAssured.given().when().contentType(ContentType.JSON).delete(URI + arg1);
	}

}
