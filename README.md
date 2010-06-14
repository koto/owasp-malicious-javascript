Author: Krzysztof Kotowicz <kkotowicz at gmail dot com>  
License: MIT  

In this repository there are various materials for OWASP presentation on malicious JS

The slides are here:
<http://www.slideshare.net/kkotowicz/malicious-javascript/>

The files present attacks on [jsunpack](http://jsunpack.jeek.org/) and [Dean Edwards Unpacker](http://dean.edwards.name/unpacker)

jsunpack attacks
==========
Sandbox detection
---------
- copy files from the main directory to your document root
- Modify js.js with your webserver path
- add some sandbox detection tests (real_browser = ...) from the presentation to js.js
- Use
    jsunpack-n -a -u &lt;URL for index.php&gt;
  to trigger the attack and see that it avoids detection

Dr Jekyll attack
---------------
- check jekyll1.html and jekyll2.html files
  The trick here is that jsunpack executes all &lt;script&gt; tags instead of only JavaScript
  and we can avoid detection by running some code only while in jsunpack sandbox.

HTML hack
--------
- edit js.js file and add "//<>" at the beginning - this will skip parsing the file by jsunpack 
  completely. The thing is - jsunpack parses all scripts as html first and this triggers some weird error
  in the parser, modifying the resulting JavaScript.
 
Dean Edward's Unpacker
=======
Function.toString attack
-------
- whitespace.php is a demo file that shows how modyfing Function.toString() works in real code
- copy of unpacker website is in unpacker.html file
- whitespace.js is an obfuscated Function.toString() replacer
- whitespace.packed.js is the same, but packed
- evil.packed.js is the script we want to hide from unpacker by attaching whitespace.packed.js near the end of the file
- paste combined.js contents (without the first line) into unpacker to see the attack in action.
