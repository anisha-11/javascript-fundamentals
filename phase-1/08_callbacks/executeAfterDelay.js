const executeAfterDelay = (delay, callbackFunction) => {
  setTimeout(callbackFunction, delay * 1000);
}

executeAfterDelay(5, printHello);