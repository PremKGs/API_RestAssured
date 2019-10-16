@API
Feature: This feature is to check API HTTP Requests

Scenario: Check if user is able to submit GET API request using query param
When User send a GET request to "/api/users?page=2"
Then User verify GET response status should be 200
And User verify the JSON response "page" equals "2"
And User verify the JSON response "per_page" equals "6"
And User verify the JSON response "total" equals "12"
And User verify the JSON response "total_pages" equals "2"
And User verify the JSON response "data[0].first_name" equals "Michael"
And User verify the JSON response "data[1].first_name" equals "Lindsay"
And User verify the JSON response "data[2].first_name" equals "Tobias"
And User verify the JSON response "data[2].id" equals "9"
And User verify the JSON response "data[2].last_name" equals "Funke"
And User verify the JSON response "data[2].email" equals "tobias.funke@reqres.in"

Scenario: Check if user is able to submit GET API request
When User send a GET request to "/api/users/2"
Then User verify GET response status should be 200
And User verify the JSON response "data.id" equals "2"
And User verify the JSON response "data.email" equals "janet.weaver@reqres.in"
And User verify the JSON response "data.first_name" equals "Janet"
And User verify the JSON response "data.last_name" equals "Weaver"


Scenario: Check if user is able to submit POST API request
When User use a "userpost" file to send a POST request to "/api/users/"
Then User verify POST response status should be 201
And User verify the JSON response "createdAt" should be not null
And User verify the JSON response "name" equals "morpheus"

Scenario: Check if user is able to submit PUT API request
When User use a "userput" file to send a PUT request to "/api/users/2"
Then User verify PUT response status should be 200
And User verify the JSON response "updatedAt" should be not null
And User verify the JSON response "job" equals "zion resident"

Scenario: Check if user is able to submit DELETE API request
When User send a DELETE request to "/api/users/2"
Then User verify DELETE response status should be 204