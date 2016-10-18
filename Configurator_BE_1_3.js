  <![CDATA[
;(function($, undefined) {
// Configurator script v0.6
	var nextElement = function (currentQuestion)
	{
		setCurrentQuestion(currentQuestion);
		
		switch (sessionStorage.chain){
			case "No_Wifi.Independent_Boiler.Q7A.Q7B": { solution("NO", null); break; };
			case "No_Wifi.Control_Boiler.Central_Heating.Suitable_Fuel.OnOff.Q7A.Q7B": {solution("NO", null); break; };
			case "No_Wifi.Control_Boiler.Central_Heating.Suitable_Fuel.OpenTherm": { solution("NO", null); break; };
			case "No_Wifi.Control_Boiler.Central_Heating.Electrical_Fuel": { solution("NO", null); break; };
			case "No_Wifi.Control_Boiler.City_Heating.With_Thermostat.Q7A.Q7B": { solution("NO", null); break; };
			case "No_Wifi.Control_Boiler.City_Heating.Without_Thermostat": { solution("NO", null); break; };
			case "Wifi.Centrally.Central_Heating.Suitable_Fuel.OpenTherm": { solution("BOX", null); solution("HRM", null); break; };
			case "Wifi.Centrally.Central_Heating.Suitable_Fuel.OnOff": { solution("BOX", null); solution("NET", null); solution("HRO", null); break; };
//			case "Wifi.Centrally.Central_Heating.Suitable_Fuel.OnOff": { solution("S500", null); solution("HRO", null); break; };
			case "Wifi.Centrally.Central_Heating.Electrical_Fuel": { solution("NO", null); break; };
			//case "Wifi.Centrally.City_Heating.With_Thermostat": { solution("HRO", null); solution("NET", null); break; };
			case "Wifi.Centrally.City_Heating.With_Thermostat": { solution("S500"); solution("HRO", null); solution("NET", null); break; };
			case "Wifi.Centrally.City_Heating.Without_Thermostat": { solution("NO", null); break; };
			case "Wifi.Centrally.Control_Boiler.City_Heating.Without_Thermostat": { solution("NO", null); break; };
			case "Wifi.Decentrally.Radiators.Valves_NotSuitable": { solution("SWAP", null); break; };
			case "Wifi.Decentrally.Radiators.Valves_Suitable.Q7A.Q7B": { solution("NO", null); break; };
			//case "Wifi.Decentrally.Radiators.Valves_Suitable.Q7A.Q7B": { solution("NO", null); break; };
			//case "Wifi.Decentrally.Radiators.Valves_Suitable.Central_Heating.Suitable_Fuel.OnOff.Q7A.Q7B": { solution("NO", null); break; };
			case "Wifi.Decentrally.Radiators.Valves_Suitable.Central_Heating.Suitable_Fuel.OnOff.Q7A.Q7B": { solution("HEO", "HP"); break; };
			case "Wifi.Decentrally.Radiators.Valves_Suitable.Central_Heating.Suitable_Fuel.OpenTherm.Q7A.Q7B": { solution("HEM", "HP"); break; };
			case "Wifi.Decentrally.Radiators.Valves_Suitable.Central_Heating.Electrical_Fuel": { solution("NO", null); break; };
			case "Wifi.Decentrally.Radiators.Valves_Suitable.City_Heating.Without_Thermostat": { solution("NO", null); break; };
			ca//se "Wifi.Decentrally.Radiators.Valves_Suitable.City_Heating.With_Thermostat.Q7A.Q7B": { solution("NO", null); break; };
			case "Wifi.Decentrally.Radiators.Valves_Suitable.City_Heating.With_Thermostat.Q7A.Q7B": { solution("HEO", "HP"); break; };
			case "Wifi.Decentrally.Underfloor_Heating": { solution("SWAP", null); break; };
			case "No_Wifi": { solution("NO", null); break; };
			//case "No_Wifi": { question("Q5A"); break; };
			//case "No_Wifi.Independent_Boiler": { question("Q7"); break; };
			//case "No_Wifi.Control_Boiler": { question("Q5A"); break; };
			case "No_Wifi.Control_Boiler.Central_Heating": { question("Q5C"); break; };
			case "No_Wifi.Control_Boiler.Central_Heating.Suitable_Fuel": { question("Q5D"); break; };
			case "No_Wifi.Control_Boiler.Central_Heating.Suitable_Fuel.OnOff": { question("Q7"); break; };
			case "No_Wifi.Control_Boiler.City_Heating": { question("Q5B"); break; };
			case "No_Wifi.Control_Boiler.City_Heating.With_Thermostat": { question("Q7"); break; };
			case "Wifi": { question("Q2"); break; };
			case "Wifi.Centrally": { question("Q5A"); break; };
			case "Wifi.Centrally.Central_Heating": { question("Q5C"); break; };
			case "Wifi.Centrally.Central_Heating.Suitable_Fuel": { question("Q5D"); break; };
			case "Wifi.Centrally.City_Heating": { question("Q5B"); break; };
			case "Wifi.Decentrally": { question("Q3A"); break; };
			case "Wifi.Decentrally.Radiators": { question("Q3B"); break; };
			case "Wifi.Decentrally.Radiators.Valves_Suitable": { question("Q5A"); break; };
			//case "Wifi.Decentrally.Radiators.Valves_Suitable": { question("Q4"); break; };
//			case "Wifi.Decentrally.Radiators.Valves_Suitable": { question("Q7"); break; };
			case "Wifi.Decentrally.Radiators.Valves_Suitable": { question("Q5A"); break; };
			case "Wifi.Decentrally.Radiators.Valves_Suitable.Central_Heating": { question("Q5C"); break; };
			case "Wifi.Decentrally.Radiators.Valves_Suitable.Central_Heating.Suitable_Fuel": { question("Q5D"); break; };
			case "Wifi.Decentrally.Radiators.Valves_Suitable.Central_Heating.Suitable_Fuel.OnOff": { question("Q7"); break; };
			case "Wifi.Decentrally.Radiators.Valves_Suitable.Central_Heating.Suitable_Fuel.OnOff.Distant_Control": { question("Q7"); break; };
			case "Wifi.Decentrally.Radiators.Valves_Suitable.Central_Heating.Suitable_Fuel.OnOff.Local_Control": { question("Q7"); break; };
			case "Wifi.Decentrally.Radiators.Valves_Suitable.Central_Heating.Suitable_Fuel.OpenTherm": { question("Q7"); break; };
			case "Wifi.Decentrally.Radiators.Valves_Suitable.City_Heating": { question("Q5B"); break; };
			case "Wifi.Decentrally.Radiators.Valves_Suitable.City_Heating.With_Thermostat": { question("Q7"); break; };
			//case "Wifi.Decentrally.Radiators.Valves_Suitable.City_Heating.With_Thermostat.Distant_Control": { question("Q7"); break; };
			//case "Wifi.Decentrally.Radiators.Valves_Suitable.City_Heating.With_Thermostat.Local_Control": { question("Q7"); break; };

			//default: { location.reload(); break;};
			
			case "": {location.reload(); break;}
			
			default: {
				
				// treat cases when older question is clicked
				
				// pick up last bit
				sessionStorage.ErrorLog += 1;
				if(sessionStorage.ErrorLog>10){
					tempTextChain = sessionStorage.chain;
					sessionStorage.chain = sessionStorage.chain + ".___BUG___";
					postToGoogle();
					sessionStorage.chain = tempTextChain;
					location.reload(); 
					break;
				};
				tempElement = updateChainAfterChange();
				nextElement(tempElement);
								
			break;}
		};
	},
	
	updateChainAfterChange = function() {
		var lastChainElement = sessionStorage.chain.slice(sessionStorage.chain.lastIndexOf('.') + 1);
		//alert(sessionStorage.chain);
				// find counterpart for same question
				switch(lastChainElement){
					case "Wifi": {return modifyChainAfterChange("No_Wifi", "Q1", lastChainElement); return "Q1_Wifi";};
					case "No_Wifi": {return modifyChainAfterChange("Wifi", "Q1", lastChainElement); return "Q1_No_Wifi";};
					case "Centrally": {return modifyChainAfterChange("Decentrally", "Q2", lastChainElement); return "Q2_Decentrally";};
					case "Decentrally": {return modifyChainAfterChange("Centrally", "Q2", lastChainElement); return "Q2_Centrally";};
					case "Radiators": {return modifyChainAfterChange("Underfloor_Heating", "Q3A", lastChainElement); return "Q3A_Underfloor_Heating";};
					case "Underfloor_Heating": {return modifyChainAfterChange("Radiators", "Q3A", lastChainElement); return "Q3A_Radiators";};
					case "Valves_Suitable": {return modifyChainAfterChange("Valves_NotSuitable", "Q3B", lastChainElement); return "Q3B_Valves_NotSuitable";};
					case "Valves_NotSuitable": {return modifyChainAfterChange("Valves_Suitable", "Q3B", lastChainElement); return "Q3B_Valves_Suitable";};
					case "Control_Boiler": {return modifyChainAfterChange("Independent_Boiler", "Q4", lastChainElement); return "Q4_Independent_Boiler";};
					case "Independent_Boiler": {return modifyChainAfterChange("Control_Boiler", "Q4", lastChainElement); return "Q4_Control_Boiler";};
					case "Central_Heating": {return modifyChainAfterChange("City_Heating", "Q5A", lastChainElement); return "Q5A_City_Heating";};
					case "City_Heating": {return modifyChainAfterChange("Central_Heating", "Q5A", lastChainElement); return "Q5A_Central_Heating";};
					case "With_Thermostat": {return modifyChainAfterChange("Without_Thermostat", "Q5B", lastChainElement); return "Q5B_Without_Thermostat";};
					case "Without_Thermostat": {return modifyChainAfterChange("With_Thermostat", "Q5B", lastChainElement); return "Q5B_With_Thermostat";};
					case "Suitable_Fuel": {return modifyChainAfterChange("Electrical_Fuel", "Q5C", lastChainElement); return "Q5C_Electrical_Fuel";};	
					case "Electrical_Fuel": {return modifyChainAfterChange("Suitable_Fuel", "Q5C", lastChainElement); return "Q5C_Suitable_Fuel";};		
					case "OnOff": {return modifyChainAfterChange("OpenTherm", "Q5D", lastChainElement); return "Q5D_OpenTherm";};
					case "OpenTherm": {return modifyChainAfterChange("OnOff", "Q5D", lastChainElement); return "Q5D_OnOff";};
					case "Distant_Control": {return modifyChainAfterChange("Local_Control", "Q6", lastChainElement); return "Q6_Local_Control";};
					case "Local_Control": {return modifyChainAfterChange("Distant_Control", "Q6", lastChainElement); return "Q6_Distant_Control";};
					
					case "Q7B": {return modifyChainAfterChange("Q7A", "Q7", "Q7A.Q7B"); return "Q7_Next";};
				};
	};
	
	modifyChainAfterChange = function(answer1, answer2, answer3) {
		var indexPreviousAnswer = sessionStorage.chain.search(answer1);
		sessionStorage.chain = sessionStorage.chain.slice(0, indexPreviousAnswer);
		sessionStorage.chain = sessionStorage.chain + answer3;
		setCurrentQuestion(answer2);	
	};
	
	cutSessionStorageChain = function () {
		var ssLastDot = sessionStorage.chain.lastIndexOf('.'),
			ssLength = sessionStorage.chain.length;
		sessionStorage.chain = sessionStorage.chain.slice(0, ssLength - (ssLength - ssLastDot));
	},
	
	setCurrentQuestion = function (currentQuestion) {
		var currentQuestionElement = $('#' + currentQuestion),
			questionContainer = currentQuestionElement.closest("section").attr('id');
			$('#' + questionContainer).nextAll()
				.removeClass('is-chosen')
				.fadeOut();
			$("#SB2, #SA2, #NO, #HRM, #HRO, #NET, #S500, #SWAP, #SB1, #SA1, #HEO, #HEM, #HTRV, #STRV, #STH, #4P, #SiT600, #HEV").hide();
	},
	
	solution = function (ref) {
		sessionStorage.ErrorLog = 0;
		$("#SolutionBlock").fadeIn("slow")
		$('html, body').animate({
			scrollTop: $("#SolutionBlock").offset().top
		}, 1000);
		$("#" + ref).fadeIn("slow")
		if(sessionStorage.Q7A>1){$("#" + "STH").fadeIn("slow"); $("#" + "STH_Q").text(sessionStorage.Q7A - 1);};
		if(sessionStorage.Q7B-sessionStorage.Q7A>0){$("#" + "STRV").fadeIn("slow"); $("#" + "STRV_Q").text(sessionStorage.Q7B-sessionStorage.Q7A);};
		if(sessionStorage.Q7B>0 && (ref=="HEM" || ref=="HEO")){
			if((sessionStorage.Q7B % 4)>0){
				$("#" + "HTRV").fadeIn("slow"); 
				$("#" + "HTRV_Q").text((sessionStorage.Q7B % 4));
			};
			if(((sessionStorage.Q7B)-(sessionStorage.Q7B%4))/4){
				$("#" + "4P").fadeIn("slow"); 
				$("#" + "4P_Q").text(((sessionStorage.Q7B)-(sessionStorage.Q7B%4))/4);
			};
		};

		if (arguments.length >1) {
			switch (arguments[1]) {
				case "SP": {
					$("#" + "SiT600").fadeIn("slow");
					$("#AddToCart_iT600").data('type', ref); 
					break;
				};
				case "HP": {
					$("#" + "HEV").fadeIn("slow");
					$("#AddToCart_HEV").data('type', ref); 
					break;
				};
				default: {break;}
				}
			}

		if (sessionStorage.debug=="on"){$("#" + "DebugBlock").fadeIn("slow"); $("#" + "DebugBlock").text(sessionStorage.chain);}
		if (sessionStorage.posted!="true"){
		postToGoogle();
		sessionStorage.posted="true";}
		
	},

	question = function (ref) {
		sessionStorage.ErrorLog = 0;
		$("#" + ref).fadeIn("slow");
		
		var elOffset = $("#" + ref).offset().top;
		var elHeight = $("#" + ref).height();
		var windowHeight = $(window).height();
		var offset;

		if (elHeight < windowHeight) {
			offset = elOffset - ((windowHeight / 2) - (elHeight / 2));
		}
		else {
			offset = elOffset;
		}
		
		
		$('html, body').animate({
			scrollTop: offset
		}, 1000);
	},
	
	hideElement = function (ref) {
		$("#" + ref).fadeOut("slow");
	},

	updateTextInput = function (val, ref) {
      document.getElementById(ref).value=val; 
    },
	
	goToProductPage = function (ref) {
					
		val = returnProductLink(ref);
		// $("#" + "DebugBlock").fadeIn("slow"); $("#" + "DebugBlock").text(ref + document.getElementById("add_qty_id").value);
		window.open (val,'_blank',"fullscreen=yes",false)

		return val;
		//for debug only
		
	},
	
	returnProductCode = function (ref) {
		switch(ref){
			case "SB2": { val = 252; break;};
			case "SA2": { val = 266; break;};
			case "HRM": { val = 121; break;};
			case "HRO": { val = 159; break;};
			case "NET": { val = 75; break;};
			case "S500": { val = 304; break;}; //87
			case "SB1": { val = 147; break;};
			case "SA1": { val = 260; break;};
			case "HEO": { val = 156; break;};
			case "HEM": { val = 155; break;};
			case "HTRV": { val = 153; break;};
			case "STRV": { val = 53; break;};
			case "STH": { val = 60; break;};
			case "4P": { val = 205; break;};
			default: { val = 76; break;};
		};
		return val;
	},
	
	returnProductLink = function (ref) {
		switch(ref){
			
			case "HRM": { val = "/shop/product/61"; break;};
			case "HRO": { val = "/shop/product/62"; break;};
			case "NET": { val = "/shop/product/91"; break;};
			case "S500": { val = "/shop/product/5"; break;}; //87
			case "HEO": { val = "/shop/product/10"; break;};
			case "HEM": { val = "/shop/product/10"; break;};
			case "HTRV": { val = "/shop/product/64"; break;};
			case "4P": { val = "/shop/product/63"; break;};
			case "BOX": {val = "/shop/product/15"; break;};
			default: { val = "/shop/category/verwarming-2"; break;};
		};
		return val;
	},
	
	postToGoogle = function () {
		var answer = sessionStorage.chain
		if(sessionStorage.Q7A){answer = answer + "." + sessionStorage.Q7A;}
		if(sessionStorage.Q7B){answer = answer + "." + sessionStorage.Q7B;}
		$.ajax({
			cache: false,
			crossDomain: true,
			url: "https://docs.google.com/forms/d/1c7UhOS86Odc2IS8nCfY_sRm5bN05cM-ZXaJ7RepT3nQ/formResponse",
			type: "POST",
			dataType: "xml",
			data: {"entry.995959891": answer }
		});
    }
	
	$( function() {	
			
		$('.question .actions').each( function () {
			var $buttons = $('a:not(.btn-default)', this);
			$buttons.click( function () {
				$buttons.removeClass('is-chosen');
				$(this).addClass('is-chosen');
			});
		});
		
		$('.range-field').each( function () {
			var $slider = $('.rangeSlider', this),
				$indicator = $('.value', this).text(0),
				$target = $slider.data('target');
			
			$slider.on('change mousemove', function () {
				$indicator.text( $(this).val() );
				$('#' + $target).val( $(this).val() );
			});
		});
		/*
		$('.product-card').each( function () {
			$('.btn', this).click( function() {
				//goToProductPage( $(this).data('type'));
				$(this).href = returnProductLink($(this).data('type'));
				return false;
			});
		});*/ //Not working, switching to having the explicit url in the html tag
		
		sessionStorage.debug = "off"
		sessionStorage.posted="false";
	
		document.getElementById("Q2_video").onclick = function() {question("video_CvsD");};
		document.getElementById("Q5D_video").onclick = function() {question("video_OOvsOT");};
		
		document.getElementById("Q1_Wifi").onclick = function() {sessionStorage.chain = "Wifi"; nextElement("Q1_Wifi");};
		document.getElementById("Q1_No_Wifi").onclick = function() {sessionStorage.chain = "No_Wifi"; nextElement("Q1_No_Wifi");};
		document.getElementById("Q2_Centrally").onclick = function() {sessionStorage.chain = sessionStorage.chain + ".Centrally"; hideElement("video_CvsD"); nextElement("Q2_Centrally");};
		document.getElementById("Q2_Decentrally").onclick = function() {sessionStorage.chain = sessionStorage.chain + ".Decentrally"; hideElement("video_CvsD"); nextElement("Q2_Decentrally");};
		document.getElementById("Q3A_Radiators").onclick = function() {sessionStorage.chain = sessionStorage.chain + ".Radiators"; nextElement("Q3A_Radiators");};
		document.getElementById("Q3A_Underfloor_Heating").onclick = function() {sessionStorage.chain = sessionStorage.chain + ".Underfloor_Heating"; nextElement("Q3A_Underfloor_Heating");};
		document.getElementById("Q3B_Valves_Suitable").onclick = function() {sessionStorage.chain = sessionStorage.chain + ".Valves_Suitable"; nextElement("Q3B_Valves_Suitable");};
		document.getElementById("Q3B_Valves_NotSuitable").onclick = function() {sessionStorage.chain = sessionStorage.chain + ".Valves_NotSuitable"; nextElement("Q3B_Valves_NotSuitable");};
		document.getElementById("Q4_Control_Boiler").onclick = function() {sessionStorage.chain = sessionStorage.chain + ".Control_Boiler"; nextElement("Q4_Control_Boiler");};
		document.getElementById("Q4_Independent_Boiler").onclick = function() {sessionStorage.chain = sessionStorage.chain + ".Independent_Boiler"; nextElement("Q4_Independent_Boiler");};
		document.getElementById("Q5A_Central_Heating").onclick = function() {sessionStorage.chain = sessionStorage.chain + ".Central_Heating"; nextElement("Q5A_Central_Heating");};
		document.getElementById("Q5A_City_Heating").onclick = function() {sessionStorage.chain = sessionStorage.chain + ".City_Heating"; nextElement("Q5A_City_Heating");};
		document.getElementById("Q5B_With_Thermostat").onclick = function() {sessionStorage.chain = sessionStorage.chain + ".With_Thermostat"; nextElement("Q5B_With_Thermostat");};
		document.getElementById("Q5B_Without_Thermostat").onclick = function() {sessionStorage.chain = sessionStorage.chain + ".Without_Thermostat"; nextElement("Q5B_Without_Thermostat");};
		document.getElementById("Q5C_Suitable_Fuel").onclick = function() {sessionStorage.chain = sessionStorage.chain + ".Suitable_Fuel"; nextElement("Q5C_Suitable_Fuel");};
		document.getElementById("Q5C_Electrical_Fuel").onclick = function() {sessionStorage.chain = sessionStorage.chain + ".Electrical_Fuel"; nextElement("Q5C_Electrical_Fuel");};
		document.getElementById("Q5D_OnOff").onclick = function() {sessionStorage.chain = sessionStorage.chain + ".OnOff"; hideElement("video_OOvsOT"); nextElement("Q5D_OnOff");};
		document.getElementById("Q5D_OpenTherm").onclick = function() {sessionStorage.chain = sessionStorage.chain + ".OpenTherm"; hideElement("video_OOvsOT"); nextElement("Q5D_OpenTherm");};
		document.getElementById("Q6_Distant_Control").onclick = function() {sessionStorage.chain = sessionStorage.chain + ".Distant_Control"; nextElement("Q6_Distant_Control");};
		document.getElementById("Q6_Local_Control").onclick = function() {sessionStorage.chain = sessionStorage.chain + ".Local_Control"; nextElement("Q6_Local_Control");};
		document.getElementById("Q7_Next").onclick = function() {sessionStorage.chain = sessionStorage.chain + ".Q7A.Q7B"; sessionStorage.Q7A = document.getElementById("Q7_Number_Rooms").value; sessionStorage.Q7B = document.getElementById("Q7_Number_Radiators").value; nextElement("Q7_Next");};
	
		document.getElementById("Reset").onclick = function() {sessionStorage.chain = ""; nextElement("");};
	});
})(jQuery);

	  ]]>