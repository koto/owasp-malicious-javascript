<html>
<head>
<title>Function.toString switch</title>
</head>
<body>
<h1>obfuscated Function.toString() switch</h1>
<h2>@author krzysztof at kotowicz dot net</h2>
<iframe width="100%" height="300px" src="whitespace.js?<?php echo time();?>"></iframe>
<script>
var evil = function() { 
  var msg = 'i am sooooo evil...';
};
alert('before: ' + evil.toString());
</script>
<script src="whitespace.js?<?php echo time();?>" type="text/javascript"></script>
<script>
alert('after: ' + evil.toString());
</script>
</body>
</html>
