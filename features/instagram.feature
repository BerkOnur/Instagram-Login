Feature: instagram

   Scenario: Finding some cheese
      Given I visit instagram
      When I see log in form
      Then I log in with "USERNAME" username and "PASSWORD" password
