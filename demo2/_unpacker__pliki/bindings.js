
var ANON = /^function[^{]*\{\s*|\s*\}$/g;

new base2.JSB.RuleList({
	"#form": {
		"@!MSIE": {
			ondocumentready: function() {
				this.removeClass("disabled");
				this.ready();
			}
		},
		
		ready: function() {
			message.write("ready");
			input.focus();
		}
	},
	"#input,#output": {
		disabled: false,
		spellcheck: false // for mozilla
	},
	"#unpack-script": {
		disabled: false,
		
		onclick: function() {
			try {
				output.value = "";
				if (input.value) {
					eval("var value=String" + input.value.slice(4));
					var head = base2.DOM.Document.querySelector(document, "head");
					var script = document.createElement("script");
					script.textContent = "var unpacked=function(){" + value + "}";
					head.appendChild(script);
					head.removeChild(script);
					output.value = String(unpacked).replace(ANON, "");
					form.ready();
				}
			} catch (error) {
				message.error("error unpacking script", error);
			}
		}
	},
	"#message": {
		error: function(text, error) {
			this.write(text + ": " + error.message, "error");
		},
		
		write: function(text, className) {
			this.innerHTML = text;
			this.className = className || "";
		} 
	}
});
