const {Builder, By, Key, until} = require("selenium-webdriver");
const { Given, When, Then } = require('cucumber');

const driver = new Builder().forBrowser("chrome").build();

Given('I visit instagram', async function() {
	await driver.get("https://www.instagram.com");	
});

When('I see log in form', async function() {
	const condition = until.elementLocated(By.name('username'));
	await driver.wait(condition,7000);
});

Then('I log in with {string} username and {string} password', async function(user, pass){
	const username = await driver.findElement(By.name("username"));
	username.sendKeys(user);
	const password = await driver.findElement(By.name("password"));
	password.sendKeys(pass, Key.ENTER);
});
