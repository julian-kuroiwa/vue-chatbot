var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver_fx = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

var driver_chr = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

searchTest(driver_fx);
searchTest(driver_chr);

function searchTest(driver) {
  driver.get('http://localhost:8080/');
  driver.findElement(By.name('userAnswer')).sendKeys('Testing');

  driver.sleep(1000).then(function() {
    driver.findElement(By.className('-send')).sendKeys(webdriver.Key.TAB);
  });

  driver.findElement(By.className('-send')).click();

  driver.sleep(2000).then(function() {
    driver.getTitle().then(function(title) {
      if(title === 'chatbot-vue') {
        console.log('Test passed');
      } else {
        console.log('Test failed');
      }
      driver.quit();
    });
  });
}
