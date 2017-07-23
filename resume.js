/*var f1 = ('<div class="form-group">'+
                    '<label for="inputPosition3">Position</label>'+
                    '<div>'+
                      '<input type="text" title="Enter highest Qualification Details" class="form-control" id="inputPosition3" placeholder="Highest Educational Degree" name="pos" required>'+
                    '</div>'+
                    '</div>'+

                    '<div class="form-group">'+
                    '<label for="inputSkill3">Skill</label>'+
                    '<div>'+
                      '<input type="text" title="Enter your feild of specialisation" class="form-control" id="inputSkill3" placeholder="Enter your stream of specialisation" name="skspec" required>'+
                    '</div>'+
                    '</div>'+

                    '<div class="form-group">'+
                    '<label for="inputCompany3">Company</label>'+
                    '<div>'+
                      '<input type="text" title="Enter Year of completion" class="form-control" id="inputCompany3" placeholder="Enter year of completion" name="com" required>'+
                    '</div>'+
                    '</div>'+
                    "<hr style='min-width:85%; background-color:#a1a1a1 !important; height:1px;'/>");

var f2 = ('<div class="form-group">'+
                    '<label for="inputProjName3">Name of Project</label>'+
                    '<div>'+
                      '<input type="text" title="Enter name of the project" class="form-control" id="inputProjName3" placeholder="Enter project name" name="project" required>'+
                    '</div>'+
                    '</div>'+

                    '<div class="form-group">'+
                    '<label for="inputInvSkills3">Skills Involved</label>'+
                    '<div>'+
                      '<input type="text" title="Skills required in that project" class="form-control" id="inputInvSkills3" placeholder="skills used in that project" name="skinv" required>'+
                    '</div>'+
                    '</div>'+
                    "<hr style='min-width:85%; background-color:#a1a1a1 !important; height:1px;'/>");*/
var f3 = ('<div class="form-group">'+
                    '<label for="inputAllSkill3">Skill you possess</label>'+
                    '<div>'+
                      '<input type="text" title="Enter name of the project" class="form-control" id="inputAllSkill3" placeholder="Enter project name" name="skill" required>'+
                    '</div>'+
                    '</div>'+

                    '<div class="form-group">'+
                    '<label for="inputProficiency3">Skill level</label>'+
                    '<div>'+
                      
                      '<select class="form-control" id="inputProficiency3" name="level">'+
                        '<option>Beginner</option>'+
                        '<option>Intermediate</option>'+
                        '<option>Advanced</option>'+
                        '<option>Expert</option>'+
                      '</select>'+
                    '</div>'+
                    '</div>'+
                    "<hr style='min-width:85%; background-color:#a1a1a1 !important; height:1px;'/>");


$(document).ready(function(){

  window.onbeforeunload = function() {
    return true;
};
// Remove navigation prompt
//window.onbeforeunload = null;

	$("#template1,#template2,#tempSection,#download").hide();


    $("#more").click(function(){

			var len = $('#form3').serializeArray().length;
			if(len<12){
            var div = len/3;

            var f1 = ('<div class="form-group">'+
                    '<label for="inputPosition3">Position</label>'+
                    '<div>'+
                      '<input type="text" title="Enter highest Qualification Details" class="form-control" id="inputPosition3" placeholder="Highest Educational Degree" name="pos'+div+'" required>'+
                    '</div>'+
                    '</div>'+

                    '<div class="form-group">'+
                    '<label for="inputSkill3">Skill</label>'+
                    '<div>'+
                      '<input type="text" title="Enter your feild of specialisation" class="form-control" id="inputSkill3" placeholder="Enter your stream of specialisation" name="skspec'+div+'" required>'+
                    '</div>'+
                    '</div>'+

                    '<div class="form-group">'+
                    '<label for="inputCompany3">Company</label>'+
                    '<div>'+
                      '<input type="text" title="Enter Year of completion" class="form-control" id="inputCompany3" placeholder="Enter year of completion" name="com'+div+'" required>'+
                    '</div>'+
                    '</div>'+
                    "<hr style='min-width:85%; background-color:#a1a1a1 !important; height:1px;'/>");

			$("#w"+div).html(f1);
			} else{ alert("Reached max limit of 4 job roles. Define only those job roles that are more significant and showcases your skills the best.")}
		
	});
	$("#less").click(function(){

			var len = $('#form3').serializeArray().length;
			
            var div = len/3;
            if(div>1)
			{$("#w"+(div-1)).empty();
			} else {
				alert("Enter at least 1 job role.If none, write fresher instead.")
			}
		
	});

	$("#more1").click(function(){

			var len = $('#form4').serializeArray().length;
			if(len<8){
            var div = len/2;

            var f2 = ('<div class="form-group">'+
                    '<label for="inputProjName3">Name of Project</label>'+
                    '<div>'+
                      '<input type="text" title="Enter name of the project" class="form-control" id="inputProjName3" placeholder="Enter project name" name="project'+div+'" required>'+
                    '</div>'+
                    '</div>'+

                    '<div class="form-group">'+
                    '<label for="inputInvSkills3">Skills Involved</label>'+
                    '<div>'+
                      '<input type="text" title="Skills required in that project" class="form-control" id="inputInvSkills3" placeholder="skills used in that project" name="skinv'+div+'" required>'+
                    '</div>'+
                    '</div>'+
                    "<hr style='min-width:85%; background-color:#a1a1a1 !important; height:1px;'/>");

			$("#p"+div).html(f2);
			} else{ alert("Reached max limit of 4 project works. Define only those projects that are more significant and showcases your skills the best.")}
		
	});
	$("#less1").click(function(){

			var len = $('#form4').serializeArray().length;
			
            var div = len/2;
            if(div>1)
			{$("#p"+(div-1)).empty();
			} else {
				alert("Enter at least 1 Project you have worked on to make your CV worth something.")
			}
		
	});

	$("#more2").click(function(){

			var len = $('#form5').serializeArray().length;
			if(len<8){
            var div = len/2;

            var f3 = ('<div class="form-group">'+
                    '<label for="inputAllSkill3">Skill you possess</label>'+
                    '<div>'+
                      '<input type="text" title="Enter name of the project" class="form-control" id="inputAllSkill3" placeholder="Enter project name" name="skill'+div+'" required>'+
                    '</div>'+
                    '</div>'+

                    '<div class="form-group">'+
                    '<label for="inputProficiency3">Skill level</label>'+
                    '<div>'+
                      
                      '<select class="form-control" id="inputProficiency3" name="level'+div+'">'+
                        '<option>Beginner</option>'+
                        '<option>Intermediate</option>'+
                        '<option>Advanced</option>'+
                        '<option>Expert</option>'+
                      '</select>'+
                    '</div>'+
                    '</div>'+
                    "<hr style='min-width:85%; background-color:#a1a1a1 !important; height:1px;'/>");

			$("#s"+div).html(f3);
			} else{ alert("Reached max limit of 4 skill scores. Define only those projects that are more significant.")}
		
	});
	$("#less2").click(function(){

			var len = $('#form5').serializeArray().length;
			
            var div = len/2;
            if(div>1)
			{$("#s"+(div-1)).empty();
			} else {
				alert("Enter at least 1 Skill Score. Minimum 3 recommended.")
			}
		
	});


	$('form').validate();
	new_obj = {};

    $('#save-button').click(function () {
        if ($("#form1").valid()&&($('.tab-pane.active').attr('id')=="about")) {

            $('.nav-tabs > .active').next('li').find('a').trigger('click');
        
        } else if($("#form2").valid()&&($('.tab-pane.active').attr('id')=="education")){
			
			$('.nav-tabs > .active').next('li').find('a').trigger('click');	
		
		} else if($("#form3").valid()&&($('.tab-pane.active').attr('id')=="exp")){
			
			$('.nav-tabs > .active').next('li').find('a').trigger('click');	
		
		} else if($("#form4").valid()&&($('.tab-pane.active').attr('id')=="projects")){
			
			$('.nav-tabs > .active').next('li').find('a').trigger('click');	
		
		} else if($("#form5").valid()&&($('.tab-pane.active').attr('id')=="skills")){
			
			

			$.each($('form').serializeArray(), function(i, obj) { new_obj[obj.name] = obj.value })

			//console.log(new_obj);
			var c = 0;
			jQuery.each( new_obj, function( key, val ) {
				if(val===""){
					c=c+1;
				}

		    });
			if(c==0){
				$("#intro,#template1,#template2").hide();
				$("#myModal .close").click();
				$("#tempSection").fadeIn(1000);
			} else {
				alert("Please fill up all the fields. Some Fields are empty on the previous tabs.");
			}
		}

    });

    $("#openTemp1").click(function(){
    	console.log(new_obj)
    	if(new_obj.name!==undefined){
    	$("#template2").html(insert2(new_obj));
    	$("#tempSection").hide();
    	$("#template2,#download").fadeIn(1500);

    } else{
    	$("#tempSection").hide();
    	$("#template2").fadeIn(1500);
    }
    });
    $("#openTemp2").click(function(){
    	console.log(new_obj)
    	if(new_obj.name!==undefined){
    	$("#template1").html(insert(new_obj));
    	$("#tempSection").hide();
    	$("#template1,#download").fadeIn(1500);

    } else{
    	$("#tempSection").hide();
    	$("#template1").fadeIn(1500);
    }
    });

    $("#download").click(function(){
    	
    	window.print();
    });

    $("#templa").click(function(){
    	$("#template1,#template2,#intro,#download").hide();
    	$("#tempSection").fadeIn(1000);

    });

    $("#start").click(function(){
    	$("#myModal").modal('show');
    });

    $("#dash").click(function(){
    	$("#template1,#template2,#tempSection,#download").hide();
    	$("#intro").fadeIn(1000);

    });




var insert2 = function(new_obj){
	if(new_obj.pos1===undefined){
		var position1 = "";

	}else{
		var position1 = ('<li><p>'+new_obj.pos1+' at '+new_obj.com1+'</p></li>');
	}
	if(new_obj.pos2===undefined){
		var position2 = "";

	}else{
		var position2 = ('<li><p>'+new_obj.pos2+' at '+new_obj.com2+'</p></li>');
	}
	if(new_obj.pos3===undefined){
		var position3 = "";

	}else{
		var position3 = ('<li><p>'+new_obj.pos3+' at '+new_obj.com3+'</p></li>');
	}
	if(new_obj.project1===undefined){
		var project1 = "";

	}else{
		var project1 = ('<li><p>'+new_obj.project1+'</p>'+
  						'<p>Skills: '+new_obj.skinv1+'</p></li>');
	}
	if(new_obj.project2===undefined){
		var project2 = "";

	}else{
		var project2 = (
						'<li><p>'+new_obj.project2+'</p>'+
  						'<p>Skills: '+new_obj.skinv2+'</p></li>'
						);
	}
	if(new_obj.project3===undefined){
		var project3 = "";

	}else{
		var project3 = ('<li><p>'+new_obj.project3+'</p>'+
  						'<p>Skills: '+new_obj.skinv3+'</p></li>');
	}
	if(new_obj.skill1===undefined){
		var skill1 = "";

	}else{
		var skill1 = ('<li><p>'+new_obj.skill1+'</p>'+
             		  '<p>'+new_obj.level1+'</p></li>');
	}
	if(new_obj.skill2===undefined){
		var skill2 = "";

	}else{
		var skill2 = ('<li><p>'+new_obj.skill2+'</p>'+
                     '<p>'+new_obj.level2+'</p></li>');
	}
	if(new_obj.skill3===undefined){
		var skill3 = "";

	}else{
		var skill3 = ('<li><p>'+new_obj.skill1+'</p>'+
  					  '<p>'+new_obj.level1+'</p></li>');
	}

	var html = ('<div>'+
  '<h2><b>'+new_obj.name+'</b></h2>'+
    '<h4>'+new_obj.bday+'</h4>'+
    '<h4>'+new_obj.email+'&nbsp;&nbsp;&nbsp;Phone : '+new_obj.mobile+'</h4>'+
    "<hr style='min-width:85%; background-color:#a1a1a1 !important; height:1px;'/>"+
'</div>'+
'<div>'+
  '<h2>Education</h2>'+
  '<p>'+new_obj.degree+' in '+new_obj.field+',<br >'+
  'Graduated on '+new_obj.cmpl+'</p>'+
  '<p>'+
  new_obj.board+
  '</p>'+
  '<p>'+new_obj.rank+'</p>'+
  "<hr style='min-width:85%; background-color:#a1a1a1 !important; height:1px;'/>"+
'</div>'+
'<div>'+
  '<h2 style="text-align: center;">Work experience</h2>'+
  '<br>'+
  '<div class="col-sm-6 col-lg-6 col-xs-6" style="text-align: left;min-height: 80px;">'+
  '<ul>'+
  '<li><p>'+new_obj.pos+' at '+new_obj.com+'</p></li>'+
  position1+
  '</ul>'+
  '</div>'+
  '<div class="col-sm-6 col-lg-6 col-xs-6" style="text-align: left;">'+
  '<ul>'+
  position2+
  position3+
  '</ul>'+
  '</div>'+
  "<hr style='min-width:85%; background-color:#a1a1a1 !important; height:1px;'/>"+
'</div>'+
'<div>'+
  '<h2>Related Projects</h2>'+
  '<br><div style="text-align: left;">'+
  '<div class="col-sm-6 col-lg-6 col-xs-6" style="min-height: 120px;">'+
  '<ul>'+
  '<li><p>'+new_obj.project+'</p>'+
  '<p>Skills: '+new_obj.skinv+'</p></li>'+
  '</ul>'+
  '<ul>'+
  project1+
  '</ul></div>'+
  '<div class="col-sm-6 col-lg-6 col-xs-6">'+
  '<ul>'+
  project2+
  '</ul>'+
  '<ul>'+
  project3+
  '</ul></div>'+
  '</div>'+
  "<hr style='min-width:85%; background-color:#a1a1a1 !important; height:1px;'/>"+
  '<h2>Skills</h2>'+
  '<br>'+
  '<div style="text-align: left;">'+
  '<div class="col-sm-6 col-lg-6 col-xs-6">'+
  '<ul>'+
  '<li><p>'+new_obj.skill+'</p>'+
  '<p>'+new_obj.level+'</p></li>'+
  '</ul>'+
  '<ul>'+
  skill1+
  '</ul></div>'+
  '<div class="col-sm-6 col-lg-6 col-xs-6">'+
  '<ul>'+
  skill2+
  '</ul>'+
  '<ul>'+
  skill3+
  '</ul></div>'+
  '</div>'+
  '</div>');

	return html;
}



    var insert = function(new_obj){

    	if(new_obj.pos1===undefined){
		var position1 = "";

	}else{
		var position1 = ('<li><p>'+new_obj.pos1+' at '+new_obj.com1+'</p></li>');
	}
	if(new_obj.pos2===undefined){
		var position2 = "";

	}else{
		var position2 = ('<li><p>'+new_obj.pos2+' at '+new_obj.com2+'</p></li>');
	}
	if(new_obj.pos3===undefined){
		var position3 = "";

	}else{
		var position3 = ('<li><p>'+new_obj.pos3+' at '+new_obj.com3+'</p></li>');
	}
	if(new_obj.project1===undefined){
		var project1 = "";

	}else{
		var project1 = ('<li><p>'+new_obj.project1+'</p>'+
  						'<p>Skills: '+new_obj.skinv1+'</p></li>');
	}
	if(new_obj.project2===undefined){
		var project2 = "";

	}else{
		var project2 = (
						'<li><p>'+new_obj.project2+'</p>'+
  						'<p>Skills: '+new_obj.skinv2+'</p></li>'
						);
	}
	if(new_obj.project3===undefined){
		var project3 = "";

	}else{
		var project3 = ('<li><p>'+new_obj.project3+'</p>'+
  						'<p>Skills: '+new_obj.skinv3+'</p></li>');
	}
	if(new_obj.skill1===undefined){
		var skill1 = "";

	}else{
		var skill1 = ('<li><p>'+new_obj.skill1+'</p>'+
             		  '<p>'+new_obj.level1+'</p></li>');
	}
	if(new_obj.skill2===undefined){
		var skill2 = "";

	}else{
		var skill2 = ('<li><p>'+new_obj.skill2+'</p>'+
                     '<p>'+new_obj.level2+'</p></li>');
	}
	if(new_obj.skill3===undefined){
		var skill3 = "";

	}else{
		var skill3 = ('<li><p>'+new_obj.skill1+'</p>'+
  					  '<p>'+new_obj.level1+'</p></li>');
	}

    	var html = ('<!DOCTYPE html><html><head><meta http-equiv="content-type" content="text/html; charset=utf-8" />'+
'<title>RESUME |'+ new_obj.name +'</title>'+ 
'</head><body>'+
'<!-- BEGIN DIV FOR OVERALL BOX -->'+
'<div id="resume"><!-- THIS DIV CENTERS OUR HEADING -->'+
'<div id="topinfo">'+

'<h1>'+new_obj.name+'</h1>'+
'<p>'+new_obj.email+'</p><p>'+
new_obj.bday+'</p><br ><!-- END CENTERING DIV --></div>'+


'<h2>Education</h2>'+
'<p>'+new_obj.degree +'in'+ new_obj.field+
'<br >'+
'Graduated on '+ new_obj.cmpl +'</p>'+
'<p>'+
new_obj.board+
'</p>'+
'<p>'+new_obj.rank+'</p>'+

'<h2>Work experience</h2>'+
'<br><div style="min-height:80px"><ul class="col-xs-6">'+
'<li><p>'+new_obj.pos+' at '+new_obj.com+'</p></li>'+
position1+
'</ul>'+
'<ul class="col-xs-6">'+
position2+
position3+
'</ul></div>'+
'<br >'+
'<h2>Related Projects</h2>'+
'<br>'+
'<div style="min-height:120px"><ul class="col-xs-6">'+
'<li><p>'+new_obj.project+'</p>'+
'<p>Skills: '+new_obj.skinv+'</p></li>'+
project1+
'</ul>'+
'<ul class="col-xs-6">'+
project2+
project3+
'</ul></div>'+
'<h2>Skills</h2>'+
'<br>'+
'<ul class="col-xs-6">'+
'<li><p>'+new_obj.skill+'</p>'+
'<p>Proficiency: '+new_obj.level+'</p></li>'+
skill1+
'</ul>'+
'<ul class="col-xs-6">'+
skill2+
skill3+
'</ul>');
    	return html;
    };
	


	/*$("#save-button").click(function(){
		
		if($('.tab-pane.active').attr('id')=="about"){
			
			$('.nav-tabs > .active').next('li').find('a').trigger('click');	
			$("#form").validate();
		
		} else if($('.tab-pane.active').attr('id')=="education"){
			$('.nav-tabs > .active').next('li').find('a').trigger('click');	
		
		} else if($('.tab-pane.active').attr('id')=="exp"){
			$('.nav-tabs > .active').next('li').find('a').trigger('click');	
		
		} else if($('.tab-pane.active').attr('id')=="projects"){
			$('.nav-tabs > .active').next('li').find('a').trigger('click');	
		
		} else if($('.tab-pane.active').attr('id')=="skills"){


			var details = JSON.stringify($('form').serializeArray());
			console.log(details);

			new_obj = {}

			$.each($('form').serializeArray(), function(i, obj) { new_obj[obj.name] = obj.value })

			console.log(new_obj);
		
		}

		
	})*/
})