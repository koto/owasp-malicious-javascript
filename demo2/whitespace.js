// obfuscated Function.toString() switch
// @author Krzysztof Kotowicz  <krzysztof at kotowicz dot net>
(function(ok) {
var a="gunbicrutb",b='Sboct',c="X42uD3nFMc3Ft%*iOLoKHBn7H"
,ts=(a+b).split(/[ubc]/).reverse().join('')
,a="F"+c.split(/[^a-z]/).join(''),s=" "[-!-[]],
cl=b.match(/o(.?)/)[s],f=![]+[],cl=cl+f[+!+[]]+f[(+!+[])+(+!+[])],
cl=cl+cl[(cl[-!-[]])-s]+f[(f[-!-[]])-s]+f[(f[-!-[]])-s],g="typeof";
arguments[cl].constructor["proto"+g.slice(0,4)][ts] = ok;
})(
// here the function to be switched instead of Function.toString() 
// FUNCTION start
function () {
return "function a() { /*all your base are belong to us*/; }";
}
// FUNCTION end
);
