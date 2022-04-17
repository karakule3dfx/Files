var girdi = false;
// Başlangıç
chrome.runtime.onMessage.addListener(
  function(request, sender) {
	if(request.page_updated === true && request.tbUrl != null)
	{
		if(girdi == false)
		{  	
			girdi= true;
			let timerId = setInterval(() => testim(), 5000);
			function testim()
			 {
				const targetNode = getElementByXpath('//h1[text()="Oops, something went wrong"]');
				if(targetNode != null){
					clearInterval(timerId); clearTimeout(myTimeout); girdi= false; 
					
					setTimeout(() => {window.history.back();}, 2000);
				}
			 }
			const myTimeout = setTimeout(() => { clearInterval(timerId); girdi= false;}, 120000);
		}
	}
  }
);
// Başlangıç 
function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}
//
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  


