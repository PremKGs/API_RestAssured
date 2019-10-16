$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("APIMethod.feature");
formatter.feature({
  "line": 2,
  "name": "This feature is to check API HTTP Requests",
  "description": "",
  "id": "this-feature-is-to-check-api-http-requests",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@API"
    }
  ]
});
formatter.before({
  "duration": 179200,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Check if user is able to submit GET API request using query param",
  "description": "",
  "id": "this-feature-is-to-check-api-http-requests;check-if-user-is-able-to-submit-get-api-request-using-query-param",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User send a GET request to \"/api/users?page\u003d2\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User verify GET response status should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User verify the JSON response \"page\" equals \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User verify the JSON response \"per_page\" equals \"6\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User verify the JSON response \"total\" equals \"12\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User verify the JSON response \"total_pages\" equals \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User verify the JSON response \"data[0].first_name\" equals \"Michael\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User verify the JSON response \"data[1].first_name\" equals \"Lindsay\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User verify the JSON response \"data[2].first_name\" equals \"Tobias\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User verify the JSON response \"data[2].id\" equals \"9\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User verify the JSON response \"data[2].last_name\" equals \"Funke\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User verify the JSON response \"data[2].email\" equals \"tobias.funke@reqres.in\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/users?page\u003d2",
      "offset": 28
    }
  ],
  "location": "StepDefinition.user_send_a_GET_request_to(String)"
});
formatter.result({
  "duration": 4715361600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_verify_GET_response_status_should_be()"
});
formatter.result({
  "duration": 2323900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "page",
      "offset": 31
    },
    {
      "val": "2",
      "offset": 45
    }
  ],
  "location": "StepDefinition.user_verify_the_JSON_response_equals(String,String)"
});
formatter.result({
  "duration": 656150800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "per_page",
      "offset": 31
    },
    {
      "val": "6",
      "offset": 49
    }
  ],
  "location": "StepDefinition.user_verify_the_JSON_response_equals(String,String)"
});
formatter.result({
  "duration": 23413000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "total",
      "offset": 31
    },
    {
      "val": "12",
      "offset": 46
    }
  ],
  "location": "StepDefinition.user_verify_the_JSON_response_equals(String,String)"
});
formatter.result({
  "duration": 22106800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "total_pages",
      "offset": 31
    },
    {
      "val": "2",
      "offset": 52
    }
  ],
  "location": "StepDefinition.user_verify_the_JSON_response_equals(String,String)"
});
formatter.result({
  "duration": 24652600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data[0].first_name",
      "offset": 31
    },
    {
      "val": "Michael",
      "offset": 59
    }
  ],
  "location": "StepDefinition.user_verify_the_JSON_response_equals(String,String)"
});
formatter.result({
  "duration": 44757600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data[1].first_name",
      "offset": 31
    },
    {
      "val": "Lindsay",
      "offset": 59
    }
  ],
  "location": "StepDefinition.user_verify_the_JSON_response_equals(String,String)"
});
formatter.result({
  "duration": 20741200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data[2].first_name",
      "offset": 31
    },
    {
      "val": "Tobias",
      "offset": 59
    }
  ],
  "location": "StepDefinition.user_verify_the_JSON_response_equals(String,String)"
});
formatter.result({
  "duration": 56833900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data[2].id",
      "offset": 31
    },
    {
      "val": "9",
      "offset": 51
    }
  ],
  "location": "StepDefinition.user_verify_the_JSON_response_equals(String,String)"
});
formatter.result({
  "duration": 32034700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data[2].last_name",
      "offset": 31
    },
    {
      "val": "Funke",
      "offset": 58
    }
  ],
  "location": "StepDefinition.user_verify_the_JSON_response_equals(String,String)"
});
formatter.result({
  "duration": 21231400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data[2].email",
      "offset": 31
    },
    {
      "val": "tobias.funke@reqres.in",
      "offset": 54
    }
  ],
  "location": "StepDefinition.user_verify_the_JSON_response_equals(String,String)"
});
formatter.result({
  "duration": 21645700,
  "status": "passed"
});
formatter.after({
  "duration": 21900,
  "status": "passed"
});
formatter.before({
  "duration": 34300,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Check if user is able to submit GET API request",
  "description": "",
  "id": "this-feature-is-to-check-api-http-requests;check-if-user-is-able-to-submit-get-api-request",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "User send a GET request to \"/api/users/2\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User verify GET response status should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User verify the JSON response \"data.id\" equals \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User verify the JSON response \"data.email\" equals \"janet.weaver@reqres.in\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User verify the JSON response \"data.first_name\" equals \"Janet\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User verify the JSON response \"data.last_name\" equals \"Weaver\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/users/2",
      "offset": 28
    }
  ],
  "location": "StepDefinition.user_send_a_GET_request_to(String)"
});
formatter.result({
  "duration": 286162700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_verify_GET_response_status_should_be()"
});
formatter.result({
  "duration": 45900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data.id",
      "offset": 31
    },
    {
      "val": "2",
      "offset": 48
    }
  ],
  "location": "StepDefinition.user_verify_the_JSON_response_equals(String,String)"
});
formatter.result({
  "duration": 16611600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data.email",
      "offset": 31
    },
    {
      "val": "janet.weaver@reqres.in",
      "offset": 51
    }
  ],
  "location": "StepDefinition.user_verify_the_JSON_response_equals(String,String)"
});
formatter.result({
  "duration": 19769200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data.first_name",
      "offset": 31
    },
    {
      "val": "Janet",
      "offset": 56
    }
  ],
  "location": "StepDefinition.user_verify_the_JSON_response_equals(String,String)"
});
formatter.result({
  "duration": 16630600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data.last_name",
      "offset": 31
    },
    {
      "val": "Weaver",
      "offset": 55
    }
  ],
  "location": "StepDefinition.user_verify_the_JSON_response_equals(String,String)"
});
formatter.result({
  "duration": 26578100,
  "status": "passed"
});
formatter.after({
  "duration": 19300,
  "status": "passed"
});
formatter.before({
  "duration": 45400,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Check if user is able to submit POST API request",
  "description": "",
  "id": "this-feature-is-to-check-api-http-requests;check-if-user-is-able-to-submit-post-api-request",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "User use a \"userpost\" file to send a POST request to \"/api/users/\"",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "User verify POST response status should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "User verify the JSON response \"createdAt\" should be not null",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User verify the JSON response \"name\" equals \"morpheus\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "userpost",
      "offset": 12
    },
    {
      "val": "/api/users/",
      "offset": 54
    }
  ],
  "location": "StepDefinition.user_use_a_file_to_send_a_POST_request_to(String,String)"
});
formatter.result({
  "duration": 748283600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_verify_POST_response_status_should_be()"
});
formatter.result({
  "duration": 111600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "createdAt",
      "offset": 31
    }
  ],
  "location": "StepDefinition.user_verify_the_JSON_response_should_be_not_null(String)"
});
formatter.result({
  "duration": 23105500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 31
    },
    {
      "val": "morpheus",
      "offset": 45
    }
  ],
  "location": "StepDefinition.user_verify_the_JSON_response_equals(String,String)"
});
formatter.result({
  "duration": 14807500,
  "status": "passed"
});
formatter.after({
  "duration": 16800,
  "status": "passed"
});
formatter.before({
  "duration": 32500,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Check if user is able to submit PUT API request",
  "description": "",
  "id": "this-feature-is-to-check-api-http-requests;check-if-user-is-able-to-submit-put-api-request",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 34,
  "name": "User use a \"userput\" file to send a PUT request to \"/api/users/2\"",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "User verify PUT response status should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "User verify the JSON response \"updatedAt\" should be not null",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User verify the JSON response \"job\" equals \"zion resident\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "userput",
      "offset": 12
    },
    {
      "val": "/api/users/2",
      "offset": 52
    }
  ],
  "location": "StepDefinition.user_use_a_file_to_send_a_PUT_request_to(String,String)"
});
formatter.result({
  "duration": 633140000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_verify_PUT_response_status_should_be()"
});
formatter.result({
  "duration": 109200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "updatedAt",
      "offset": 31
    }
  ],
  "location": "StepDefinition.user_verify_the_JSON_response_should_be_not_null(String)"
});
formatter.result({
  "duration": 24413500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "job",
      "offset": 31
    },
    {
      "val": "zion resident",
      "offset": 44
    }
  ],
  "location": "StepDefinition.user_verify_the_JSON_response_equals(String,String)"
});
formatter.result({
  "duration": 16888200,
  "status": "passed"
});
formatter.after({
  "duration": 18100,
  "status": "passed"
});
formatter.before({
  "duration": 36500,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Check if user is able to submit DELETE API request",
  "description": "",
  "id": "this-feature-is-to-check-api-http-requests;check-if-user-is-able-to-submit-delete-api-request",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 40,
  "name": "User send a DELETE request to \"/api/users/2\"",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "User verify DELETE response status should be 204",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/users/2",
      "offset": 31
    }
  ],
  "location": "StepDefinition.user_send_a_delete_request(String)"
});
formatter.result({
  "duration": 684025900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_verify_DELETE_response_status_should_be()"
});
formatter.result({
  "duration": 54500,
  "status": "passed"
});
formatter.after({
  "duration": 15100,
  "status": "passed"
});
});