// New Relic Scripted Browser - Generic login
// Please set the test credentials or ideally use New Relic Synthetics Secure Credentials
//
// You can use secure credentials with synthetic monitoring to store critical information, such as passwords, API keys, usernames, etc. This prevents scripted monitor users from viewing, updating, or deleting these values unless they have explicit permissions in New Relic. The credentials are securely stored using AES-GCM 256-bit encryption at rest with keys managed by Amazon AWS Key Management Service (KMS)  .
//
// You can set secure credentials in New Relic One or with the API.
//
// Reference
// https://docs.newrelic.com/docs/synthetics/synthetic-monitoring/using-monitors/store-secure-credentials-scripted-browsers-api-tests
//
// Last edited by Breno Gomes on 2020-10-06



  const assert = require("assert");
  const urlRequest = require("urllib").request;
  // Theshold for duration of entire script - fails test if script lasts longer than X (in ms)
  // Script-wide timeout for all wait and waitAndFind functions (in ms)
  var DefaultTimeout = 30000;
  // Change to any User Agent you want to use.
  // Leave as "default" or empty to use the Synthetics default.
  var UserAgent = "default";
  const By = $driver.By;
  const browser = $browser.manage();
  var vars = new Map();
  const logger = function({timeout:e=18e4,stepLogging:t=!1,insightsKey:n=""}){const r=Date.now();var s=0,o="",i=0,a=0;function l({step:e=0,msg:t="",duration:r=0,eventType:s="SyntheticsCustom",custom:o={}}){if(void 0===n||""==n)return;var i={method:"POST",headers:{"X-Insert-Key":n,"Content-Type":"application/json"},data:{eventType:s,step:e,message:t,duration:r,JOB_ID:$env.JOB_ID,MONITOR_ID:$env.MONITOR_ID,ACCOUNT_ID:$env.ACCOUNT_ID,LOCATION:$env.LOCATION,PROXY_HOST:$env.PROXY_HOST,PROXY_PORT:$env.PROXY_PORT},dataType:"text"};const a=`https://insights-collector.newrelic.com/v1/accounts/${$env.ACCOUNT_ID}/events`;i.data=Object.assign({},i.data,o),urlRequest(a,i)}function c(e,t,n=""){e>a&&0!=a&&_({testCase:n});let i=`Step ${e}: ${t} STARTED at ${s=Date.now()-r}ms. testCase=${n}`;console.log(i),o=t,a=e}function _({testCase:i=""}){var c=Date.now()-r,_=c-s;if(console.log(`Step ${a}: ${o} FINISHED. It took ${_}ms to complete. testCase=${i}`),t&&n.length>0?l({step:a,msg:o,duration:_,custom:{testCase:i}}):t&&$util.insights.set(`Step ${a}: ${o}`,_),e>0&&c>e)throw new Error("Script timed out. "+c+"ms is longer than script timeout threshold of "+e+"ms.")}return{logStep:function(e){c(i++,e)},log:c,getStep:function(){return i},end:_,endTestCase:function(e=""){var i=Date.now()-r-s;console.log(`Step ${a}: ${o} FINISHED. It took ${i}ms to complete.`),t&&n.length>0?l({step:a,msg:o,duration:i,custom:{testCase:e}}):t&&$util.insights.set(`Step ${a}: ${o}`,i),$util.insights.set("testCase",e),$util.insights.set("testCaseStatus","Pass"),t&&n.length>0&&l({eventType:"SyntheticsTests",custom:{testCase:e,testCaseStatus:"Pass"}})},error:function(e,r=""){console.log(`Error in Step ${a}: ${o}`),$util.insights.set("errorStep",""+a),$util.insights.set("errorMsg",e.message),$util.insights.set("errorLineNumber",e.lineNumber),$util.insights.set("testCase",r),$util.insights.set("testCaseStatus","fail"),t&&n.length>0&&l({eventType:"SyntheticsTests",custom:{testCase:r,testCaseStatus:"Fail"}})},postInsights:l}}({})
  $browser.getCapabilities().then(function () { })
  // Test Case: NR1 Login test
  .then(function (){
  	return Promise.resolve(true)

    .then( function(){return logger.log(1,"Open URL https://login.newrelic.com/login","NR1 Login test"),$browser.get("https://login.newrelic.com/login").then(e=>e)})
    .then( function(){return logger.log(2,"Set Window Size Width=1417 Height=926","NR1 Login test"),$browser.manage().window().setSize(1417,926).then(e=>e)})
    .then( function(){return logger.log(3,"Click By.id(\"login_email\")","NR1 Login test"),$browser.waitForAndFindElement(By.id("login_email"),DefaultTimeout).then(e=>(e.click(),Promise.resolve(!0)))})
    .then( function(){return logger.log(4,"Type \"NEW_RELIC_USERNAME\" using locator By.id(\"login_email\")","NR1 Login test"),$browser.waitForAndFindElement(By.id("login_email"),DefaultTimeout).then(e=>(e.sendKeys($secure.NEW_RELIC_USERNAME),Promise.resolve(!0)))})
    .then( function(){return logger.log(5,"Type \"NEW_RELIC_PASSWORD\" using locator By.id(\"login_password\")","NR1 Login test"),$browser.waitForAndFindElement(By.id("login_password"),DefaultTimeout).then(e=>(e.sendKeys($secure.NEW_RELIC_PASSWORD),Promise.resolve(!0)))})
    .then( function(){return logger.log(6,"Click By.id(\"login_submit\")","NR1 Login test"),$browser.waitForAndFindElement(By.id("login_submit"),DefaultTimeout).then(e=>(e.click(),Promise.resolve(!0)))})
    .then( function(){return logger.log(7,"Click By.css(\".AACQAC-wnd-Button--normal > .AACQAC-wnd-Button-content\")","NR1 Login test"),$browser.waitForAndFindElement(By.css(".AACQAC-wnd-Button--normal > .AACQAC-wnd-Button-content"),DefaultTimeout).then(e=>(e.click(),Promise.resolve(!0)))})
    // reusable RUN() scripts not supported
    .then( function(){return logger.log(8,"Click By.linkText(\"Get started\")","NR1 Login test"),$browser.waitForAndFindElement(By.linkText("Get started"),DefaultTimeout).then(e=>(e.click(),Promise.resolve(!0)))})
    .then( function(){return logger.log(9,"Click By.css(\".DashboardModalContent-cancel\")","NR1 Login test"),$browser.waitForAndFindElement(By.css(".DashboardModalContent-cancel"),DefaultTimeout).then(e=>(e.click(),Promise.resolve(!0)))})
    .then( function(){return logger.log(10,"Mouse move","NR1 Login test"),$browser.waitForAndFindElement(By.css("#dropdown-0 .AACQAC-wnd-DropdownTrigger-button-title"),DefaultTimeout).then(e=>Promise.resolve($browser.actions().mouseMove(e).perform()))})
    .then( function(){return logger.log(11,"Click By.css(\"#dropdown-0 .AACQAC-wnd-DropdownTrigger-button-title\")","NR1 Login test"),$browser.waitForAndFindElement(By.css("#dropdown-0 .AACQAC-wnd-DropdownTrigger-button-title"),DefaultTimeout).then(e=>(e.click(),Promise.resolve(!0)))})
    .then( function(){return logger.log(12,"Mouse out By.tagName(\"body\")","NR1 Login test"),$browser.waitForAndFindElement(By.tagName("body"),DefaultTimeout).then(e=>Promise.resolve($browser.actions().mouseMove(e,0,0).perform()))})
    .then( function(){return logger.log(13,"Click By.css(\".AACQAC-wnd-UserMenu-logout > .AACQAC-wnd-PopoverListItem-content\")","NR1 Login test"),$browser.waitForAndFindElement(By.css(".AACQAC-wnd-UserMenu-logout > .AACQAC-wnd-PopoverListItem-content"),DefaultTimeout).then(e=>(e.click(),Promise.resolve(!0)))})
  	.then(function() {
  		logger.endTestCase("NR1 Login test");
  	}, function(err) {
  		logger.error (err, "NR1 Login test");
  		throw(err);
  	});

  })
