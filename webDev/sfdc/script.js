function func1(){	
  var input = document.getElementById('state');	
  var inputValue = input.value;	
  var y = document.getElementById('info');	
  var name1 = document.getElementById('name1');	
  var name2 = document.getElementById('name2');	
  var phone1 = document.getElementById('phone1');	
  var phone2 = document.getElementById('phone2');	
  y.innerHTML = inputValue;	

  if (inputValue=="Alabama"){ 	
    name1.innerHTML = "Shelby, Richard C.";	
    phone1.innerHTML = "(202) 224-5744";	
    phone1.href = "tel:2022245744";	
    name2.innerHTML = "Tuberville, Tommy";	
    phone2.innerHTML = "(202) 224-4124";	
    phone2.href = "2022244124";	
    document.getElementById("img1").src = "assets/senators/ALR.jpg";	
    document.getElementById("img2").src = "assets/senators/ALT.jpg";
  
  } if (inputValue=="Alaska"){ 	
    name1.innerHTML = "Murkowski, Lisa";	
    phone1.innerHTML = "(202) 224-6665";	
    phone1.href = "tel:2022246665";	
    name2.innerHTML = "Sullivan, Dan";	
    phone2.innerHTML = "(202) 224-3004";	
    phone2.href = "tel:2022243004";	
    document.getElementById("img1").src = "assets/senators/AKL.jpg";	
    document.getElementById("img2").src = "assets/senators/AKD.jpg";

  } if (inputValue=="Arizona"){ 	
    name1.innerHTML = "Kelly, Mark";	
    phone1.innerHTML = "(202) 224-2235";	
    phone1.href = "tel:2022242235";	
    name2.innerHTML = "Sinema, Kyrsten";	
    phone2.innerHTML = "(202) 224-4521";	
    phone2.href = "tel:2022244521";	
    document.getElementById("img1").src = "assets/senators/AZM.jpg";	
    document.getElementById("img2").src = "assets/senators/AZK.jpg";
  
  } if (inputValue=="Arkansas"){	
    name1.innerHTML = "Boozman, John";	
    phone1.innerHTML = "(202) 224-4843";	
    phone1.href = "tel:2022244843";	
    name2.innerHTML = "Cotton, Tom";	
    phone2.innerHTML = "(202) 224-2353";	
    phone2.href = "tel:2022242353";	
    document.getElementById("img1").src = "assets/senators/AKJ.jpg";	
    document.getElementById("img2").src = "assets/senators/AKT.jpg";	

  } if (inputValue=="California"){	
    name1.innerHTML = "Feinstein, Dianne";	
    phone1.innerHTML = "(202) 224-3841";	
    phone1.href = "tel:2022243841";	
    name2.innerHTML = "Padilla, Alex";	
    phone2.innerHTML = "(202) 224-3553";	
    phone2.href = "tel:2022243553";	
    document.getElementById("img1").src = "assets/senators/CAD.jpg";	
    document.getElementById("img2").src = "assets/senators/CAA.jpg";

  } if (inputValue=="Colorado"){ 	
    name1.innerHTML = "Bennet, Michael F.";	
    phone1.innerHTML = "(202) 224-5852";	
    phone1.href = "tel:2022245852";	
    name2.innerHTML = "Hickenlooper, John W.";	
    phone2.innerHTML = "(202) 224-5941";	
    phone2.href = "tel:2022245941";	
    document.getElementById("img1").src = "assets/senators/COM.jpg";	
    document.getElementById("img2").src = "assets/senators/COJ.jpg";	

  } if (inputValue=="Connecticut"){ 	
    name1.innerHTML = "Blumenthal, Richard";	
    phone1.innerHTML = "(202) 224-2823";	
    phone1.href = "tel:2022242823";	
    name2.innerHTML = "Murphy, Christopher";	
    phone2.innerHTML = "(202) 224-4041";	
    phone2.href = "tel:2022244041";	
    document.getElementById("img1").src = "assets/senators/CNR.jpg";	
    document.getElementById("img2").src = "assets/senators/CNC.jpg";	

  } if (inputValue=="Delaware"){ 	
    name1.innerHTML = "Carper, Thomas R.";	
    phone1.innerHTML = "(202) 224-2441";	
    phone1.href = "tel:2022242441";	
    name2.innerHTML = "Coons, Christopher A.";	
    phone2.innerHTML = "(202) 224-5042";	
    phone2.href = "tel:2022245042";	
    document.getElementById("img1").src = "assets/senators/DET.jpg";	
    document.getElementById("img2").src = "assets/senators/DEC.jpg";
  
  } if (inputValue=="Florida"){	
    name1.innerHTML = "Rubio, Marco";	
    phone1.innerHTML = "(202) 224-3041";	
    phone1.href = "tel:2022243041";	
    name2.innerHTML = "Scott, Rick";	
    phone2.innerHTML = "(202) 224-5274";	
    phone2.href = "tel:2022245274";	
    document.getElementById("img1").src = "assets/senators/FLM.jpg";	
    document.getElementById("img2").src = "assets/senators/FLR.jpg";

  } if (inputValue=="Georgia"){	
    name1.innerHTML = "Ossoff, Jon";	
    phone1.innerHTML = "(202) 224-3521";	
    phone1.href = "tel:2022243521";	
    name2.innerHTML = "Warnock, Raphael G.";	
    phone2.innerHTML = "(202) 224-3643"; 	
    phone2.href = "tel:2022243643";	
    document.getElementById("img1").src = "assets/senators/GAJ.jpg";	
    document.getElementById("img2").src = "assets/senators/GAR.jpg";
    	
  } if (inputValue=="Hawaii"){ 	
    name1.innerHTML = "Hirono, Mazie K.";	
    phone1.innerHTML = "(202) 224-6361";	
    phone1.href = "tel:2022246361";	
    name2.innerHTML = "Schatz, Brian";	
    phone2.innerHTML = "(202) 224-3934";	
    phone2.href = "tel:2022243934";	
    document.getElementById("img1").src = "assets/senators/HIM.jpg";	
    document.getElementById("img2").src = "assets/senators/HIB.jpg";	

  } if (inputValue=="Idaho"){ 	
    name1.innerHTML = "Crapo, Mike";	
    phone1.innerHTML = "(202) 224-6142";	
    phone1.href = "tel:2022246142";	
    name2.innerHTML = "Risch, James E.";	
    phone2.innerHTML = "(202) 224-2752";	
    phone2.href = "tel:2022242752";	
    document.getElementById("img1").src = "assets/senators/IDM.jpg";	
    document.getElementById("img2").src = "assets/senators/IDJ.jpg";	

  } if (inputValue=="Illinois"){ 	
    name1.innerHTML = "Duckworth, Tammy";	
    phone1.innerHTML = "(202) 224-2854";	
    phone1.href = "tel:2022242854";	
    name2.innerHTML = "Durbin, Richard J.";	
    phone2.innerHTML = "(202) 224-2152";	
    phone2.href = "tel:2022242152";	
    document.getElementById("img1").src = "assets/senators/ILT.jpg";	
    document.getElementById("img2").src = "assets/senators/ILR.jpg";

  } if (inputValue=="Indiana"){ 	
    name1.innerHTML = "Braun, Mike";	
    phone1.innerHTML = "(202) 224-4814";	
    phone1.href = "tel:2022244814";	
    name2.innerHTML = "Young, Todd";	
    phone2.innerHTML = "(202) 224-5623";	
    phone2.href = "tel:2022245623";	
    document.getElementById("img1").src = "assets/senators/INM.jpg";	
    document.getElementById("img2").src = "assets/senators/INT.jpg";

  } if (inputValue=="Iowa"){ 	
    name1.innerHTML = "Ernst, Joni";	
    phone1.innerHTML = "(202) 224-3254";	
    phone1.href = "tel:2022243254";	
    name2.innerHTML = "Grassley, Chuck";	
    phone2.innerHTML = "(202) 224-3744";	
    phone2.href = "tel:2022243744";	
    document.getElementById("img1").src = "assets/senators/IAJ.jpg";	
    document.getElementById("img2").src = "assets/senators/IAC.jpg";	

  } if (inputValue=="Kansas"){ 	
    name1.innerHTML = "Marshall, Roger";	
    phone1.innerHTML = "(202) 224-4774";	
    phone1.href = "tel:2022244774";	
    name2.innerHTML = "Moran, Jerry";	
    phone2.innerHTML = "(202) 224-6521";	
    phone2.href = "tel:2022246521";	
    document.getElementById("img1").src = "assets/senators/KSR.jpg";	
    document.getElementById("img2").src = "assets/senators/KSJ.jpg";

  } if (inputValue=="Kentucky"){ 	
    name1.innerHTML = "McConnell, Mitch";	
    phone1.innerHTML = "(202) 224-2541";	
    phone1.href = "tel:2022242541";	
    name2.innerHTML = "Paul, Rand";	
    phone2.innerHTML = "(202) 224-4343";	
    phone2.href = "tel:2022244343";	
    document.getElementById("img1").src = "assets/senators/KTM.jpg";	
    document.getElementById("img2").src = "assets/senators/KTR.jpg";

  } if (inputValue=="Louisiana"){ 	
    name1.innerHTML = "Cassidy, Bill";	
    phone1.innerHTML = "(202) 224-5824";	
    phone1.href = "tel:2022245824";	
    name2.innerHTML = "Kennedy, John";	
    phone2.innerHTML = "(202) 224-4623";	
    phone2.href = "tel:2022244623";	
    document.getElementById("img1").src = "assets/senators/LAB.jpg";	
    document.getElementById("img2").src = "assets/senators/LAJ.jpg";

  } if (inputValue=="Maine"){ 	
    name1.innerHTML = "Collins, Susan M.";	
    phone1.innerHTML = "(202) 224-2523";	
    phone1.href = "tel:2022242523";	
    name2.innerHTML = "King, Angus S., Jr.";	
    phone2.innerHTML = "(202) 224-5344";	
    phone2.href = "2022245344";	
    document.getElementById("img1").src = "assets/senators/MES.jpg";	
    document.getElementById("img2").src = "assets/senators/MEA.jpg";	

  } if (inputValue=="Maryland"){	
    name1.innerHTML = "Cardin, Benjamin L.";	
    phone1.innerHTML = "(202) 224-4524";	
    phone1.href = "tel:2022244524";	
    name2.innerHTML = "Van Hollen, Chris";	
    phone2.innerHTML = "(202) 224-4654";	
    phone2.href = "tel:2022244654";	
    document.getElementById("img1").src = "assets/senators/.jpg";	
    document.getElementById("img2").src = "assets/senators/.jpg"; 
  
  } if (inputValue=="Massachusetts"){	
    name1.innerHTML = "Markey, Edward J.";	
    phone1.innerHTML = "(202) 224-2742";	
    phone1.href = "tel:2022242742";	
    name2.innerHTML = "Warren, Elizabeth";	
    phone2.innerHTML = "(202) 224-4543";	
    phone2.href = "tel:2022244543";	
    document.getElementById("img1").src = "assets/senators/.jpg";	
    document.getElementById("img2").src = "assets/senators/.jpg";
  
  } if (inputValue=="Michigan"){ 	
    name1.innerHTML = "Peters, Gary C.";	
    phone1.innerHTML = "(202) 224-6221";	
    phone1.href = "tel:2022246221";	
    name2.innerHTML = "Stabenow, Debbie";	
    phone2.innerHTML = "(202) 224-4822";	
    phone2.href = "tel:2022244822";	
    document.getElementById("img1").src = "assets/senators/MIG.jpg";	
    document.getElementById("img2").src = "assets/senators/MID.jpg";
  
  } if (inputValue=="Minnesota"){ 	
    name1.innerHTML = "Klobuchar, Amy";	
    phone1.innerHTML = "(202) 224-3244";	
    phone1.href = "tel:2022243244";	
    name2.innerHTML = "Smith, Tina";	
    phone2.innerHTML = "(202) 224-5641";	
    phone2.href = "tel:2022245641";	
    document.getElementById("img1").src = "assets/senators/MNA.jpg";	
    document.getElementById("img2").src = "assets/senators/MNT.jpg";
  
  } if (inputValue=="Mississippi"){ 	
    name1.innerHTML = "Hyde-Smith, Cindy";	
    phone1.innerHTML = "(202) 224-5054";	
    phone1.href = "tel:2022245054";	
    name2.innerHTML = "Wicker, Roger F.";	
    phone2.innerHTML = "(202) 224-6253";	
    phone2.href = "tel:2022246253";	
    document.getElementById("img1").src = "assets/senators/MSC.jpg";	
    document.getElementById("img2").src = "assets/senators/MSR.jpg";
  
  } if (inputValue=="Missouri"){ 	
    name1.innerHTML = "Blunt, Roy";	
    phone1.innerHTML = "(202) 224-5721";	
    phone1.href = "tel:2022245721";	
    name2.innerHTML = "Hawley, Josh";	
    phone2.innerHTML = "(202) 224-6154";	
    phone2.href = "tel:2022246154";	
    document.getElementById("img1").src = "assets/senators/MOR.jpg";	
    document.getElementById("img2").src = "assets/senators/MOJ.jpg";

  } if (inputValue=="Montana"){ 	
    name1.innerHTML = "Daines, Steve";	
    phone1.innerHTML = "(202) 224-2651";	
    phone1.href = "tel:2022242651";	
    name2.innerHTML = "Tester, Jon";	
    phone2.innerHTML = "(202) 224-2644";	
    phone2.href = "tel:2022242644";	
    document.getElementById("img1").src = "assets/senators/MTS.jpg";	
    document.getElementById("img2").src = "assets/senators/MTJ.jpg";

  } if (inputValue=="Nebraska"){	
    name1.innerHTML = "Fischer, Deb";	
    phone1.innerHTML = "(202) 224-6551";	
    phone1.href = "tel:2022246551";	
    name2.innerHTML = "Sasse, Ben";	
    phone2.innerHTML = "(202) 224-4224";	
    phone2.href = "tel:2022244224";	
    document.getElementById("img1").src = "assets/senators/NED.jpg";	
    document.getElementById("img2").src = "assets/senators/NEB.jpg"; 
  
  } if (inputValue=="Nevada"){ 	
    name1.innerHTML = "Cortez Masto, Catherine";	
    phone1.innerHTML = "(202) 224-3542";	
    phone1.href = "tel:2022243542";	
    name2.innerHTML = "Rosen, Jacky";	
    phone2.innerHTML = "(202) 224-6244";	
    phone2.href = "tel:2022246244";	
    document.getElementById("img1").src = "assets/senators/NVC.jpg";	
    document.getElementById("img2").src = "assets/senators/NVJ.jpg";

  } if (inputValue=="New Hampshire"){ 	
    name1.innerHTML = "Hassan, Margaret Wood";	
    phone1.innerHTML = "(202) 224-3324";	
    phone1.href = "tel:2022243324";	
    name2.innerHTML = "Shaheen, Jeanne";	
    phone2.innerHTML = "(202) 224-2841";	
    phone2.href = "tel:2022242841";	
    document.getElementById("img1").src = "assets/senators/NHM.jpg";	
    document.getElementById("img2").src = "assets/senators/NHJ.jpg";

  } if (inputValue=="New Jersey"){ 	
    name1.innerHTML = "Booker, Cory A.";	
    phone1.innerHTML = "(202) 224-3224";	
    phone1.href = "tel:2022243224";	
    name2.innerHTML = "Menendez, Robert";	
    phone2.innerHTML = "(202) 224-4744";	
    phone2.href = "tel:2022244744";	
    document.getElementById("img1").src = "assets/senators/NJC.jpg";	
    document.getElementById("img2").src = "assets/senators/NJR.jpg";
  
  } if (inputValue=="New Mexico"){ 	
    name1.innerHTML = "Heinrich, Martin";	
    phone1.innerHTML = "(202) 224-5521";	
    phone1.href = "tel:2022245521";	
    name2.innerHTML = "Luján, Ben Ray";	
    phone2.innerHTML = "(202) 224-6621";	
    phone2.href = "tel:2022246621";	
    document.getElementById("img1").src = "assets/senators/NMM.jpg";	
    document.getElementById("img2").src = "assets/senators/NMB.jpg";

  } if (inputValue=="New York"){ 	
    name1.innerHTML = "Gillibrand, Kirsten E.";	
    phone1.innerHTML = "(202) 224-4451";	
    phone1.href = "tel:2022244451";	
    name2.innerHTML = "Schumer, Charles E.";	
    phone2.innerHTML = "(202) 224-6542";	
    phone2.href = "tel:2022246542";	
    document.getElementById("img1").src = "assets/senators/NYK.jpg";	
    document.getElementById("img2").src = "assets/senators/NYC.jpg";

  } if (inputValue=="North Carolina"){ 	
    name1.innerHTML = "Burr, Richard";	
    phone1.innerHTML = "(202) 224-3154";	
    phone1.href = "tel:2022243154";	
    name2.innerHTML = "Tillis, Thom";	
    phone2.innerHTML = "(202) 224-6342";	
    phone2.href = "tel:2022246342";	
    document.getElementById("img1").src = "assets/senators/NCR.jpg";	
    document.getElementById("img2").src = "assets/senators/NCT.jpg";

  } if (inputValue=="North Dakota"){ 	
    name1.innerHTML = "Cramer, Kevin";	
    phone1.innerHTML = "(202) 224-2043";	
    phone1.href = "tel:2022242043";	
    name2.innerHTML = "Hoeven, John";	
    phone2.innerHTML = "(202) 224-2551";	
    phone2.href = "tel:2022242551";	
    document.getElementById("img1").src = "assets/senators/NDK.jpg";	
    document.getElementById("img2").src = "assets/senators/NDJ.jpg";	
  
  } if (inputValue=="Ohio"){ 	
    name1.innerHTML = "Brown, Sherrod";	
    phone1.innerHTML = "(202) 224-2315";	
    phone1.href = "tel:2022242315";	
    name2.innerHTML = "Portman, Rob";	
    phone2.innerHTML = "(202) 224-3353";	
    phone2.href = "tel:2022243353";	
    document.getElementById("img1").src = "assets/senators/OHS.jpg";	
    document.getElementById("img2").src = "assets/senators/OHR.jpg";	

  } if (inputValue=="Oklahoma"){ 	
    name1.innerHTML = "Inhofe, James M.";	
    phone1.innerHTML = "(202) 224-4721";	
    phone1.href = "tel:2022244721";	
    name2.innerHTML = "Lankford, James";	
    phone2.innerHTML = "(202) 224-5754";	
    phone2.href = "tel:2022245754";	
    document.getElementById("img1").src = "assets/senators/OKJ.jpg";	
    document.getElementById("img2").src = "assets/senators/OKJL.jpg";	

  } if (inputValue=="Oregon"){ 	
    name1.innerHTML = "Merkley, Jeff";	
    phone1.innerHTML = "(202) 224-3753";	
    phone1.href = "tel:2022243753";	
    name2.innerHTML = "Wyden, Ron";	
    phone2.innerHTML = "(202) 224-5244";	
    phone2.href = "tel:2022245244";	
    document.getElementById("img1").src = "assets/senators/ORJ.jpg";	
    document.getElementById("img2").src = "assets/senators/ORR.jpg";	

  } if (inputValue=="Pennsylvania"){ 	
    name1.innerHTML = "Casey, Robert P., Jr.";	
    phone1.innerHTML = "(202) 224-6324";	
    phone1.href = "tel:2022246324";	
    name2.innerHTML = "Toomey, Patrick J.";	
    phone2.innerHTML = "(202) 224-4254";	
    phone2.href = "tel:2022244254";	
    document.getElementById("img1").src = "assets/senators/PAR.jpg";	
    document.getElementById("img2").src = "assets/senators/PAP.jpg";	
  
  } if (inputValue=="Rhode Island"){ 	
    name1.innerHTML = "Reed, Jack";	
    phone1.innerHTML = "(202) 224-4642";	
    phone1.href = "tel:2022244642";	
    name2.innerHTML = "Whitehouse, Sheldon";	
    phone2.innerHTML = "(202) 224-2921";	
    phone2.href = "tel:2022242921";	
    document.getElementById("img1").src = "assets/senators/RIJ.jpg";	
    document.getElementById("img2").src = "assets/senators/RIS.jpg";	

  } if (inputValue=="South Carolina"){ 	
    name1.innerHTML = "Graham, Lindsey";	
    phone1.innerHTML = "(202) 224-5972";	
    phone1.href = "tel:2022245972";	
    name2.innerHTML = "Scott, Tim";	
    phone2.innerHTML = "(202) 224-6121";	
    phone2.href = "tel:2022246121";	
    document.getElementById("img1").src = "assets/senators/SCL.jpg";	
    document.getElementById("img2").src = "assets/senators/SCT.jpg";	

  } if (inputValue=="South Dakota"){ 	
    name1.innerHTML = "Rounds, Mike";	
    phone1.innerHTML = "(202) 224-5842";	
    phone1.href = "tel:2022245842";	
    name2.innerHTML = "Thune, John";	
    phone2.innerHTML = "(202) 224-2321";	
    phone2.href = "tel:2022242321";	
    document.getElementById("img1").src = "assets/senators/SDM.jpg";	
    document.getElementById("img2").src = "assets/senators/SDJ.jpg";	

  } if (inputValue=="Tennessee"){ 	
    name1.innerHTML = "Blackburn, Marsha";	
    phone1.innerHTML = "(202) 224-3344";	
    phone1.href = "tel:2022243344";	
    name2.innerHTML = "Hagerty, Bill";	
    phone2.innerHTML = "(202) 224-4944";	
    phone2.href = "tel:2022244944";	
    document.getElementById("img1").src = "assets/senators/TNM.jpg";	
    document.getElementById("img2").src = "assets/senators/TNB.jpg";	

  } if (inputValue=="Texas"){ 	
    name1.innerHTML = "Cornyn, John";	
    phone1.innerHTML = "(202) 224-2934";	
    phone1.href = "tel:2022242934";	
    name2.innerHTML = "Cruz, Ted";	
    phone2.innerHTML = "(202) 224-5922";	
    phone2.href = "tel:2022245922";	
    document.getElementById("img1").src = "assets/senators/TXJ.jpg";	
    document.getElementById("img2").src = "assets/senators/TXT.jpg";

  } if (inputValue=="Utah"){ 	
    name1.innerHTML = "Lee, Mike";	
    phone1.innerHTML = "(202) 224-5444";	
    phone1.href = "tel:2022245444";	
    name2.innerHTML = "Romney, Mitt";	
    phone2.innerHTML = "(202) 224-5251";	
    phone2.href = "tel:2022245251";	
    document.getElementById("img1").src = "assets/senators/UTM.jpg";	
    document.getElementById("img2").src = "assets/senators/UTMR.jpg";	
  
  } if (inputValue=="Vermont"){ 	
    name1.innerHTML = "Leahy, Patrick J.";	
    phone1.innerHTML = "(202) 224-4242";	
    phone1.href = "tel:2022244242";	
    name2.innerHTML = "Sanders, Bernard";	
    phone2.innerHTML = "(202) 224-5141";	
    phone2.href = "tel:2022245141";	
    document.getElementById("img1").src = "assets/senators/VTP.jpg";	
    document.getElementById("img2").src = "assets/senators/VTB.jpg";	

  } if (inputValue=="Virginia"){ 	
    name1.innerHTML = "Kaine, Tim";	
    phone1.innerHTML = "(202) 224-4024";	
    phone1.href = "tel:2022244024";	
    name2.innerHTML = "Warner, Mark R.";	
    phone2.innerHTML = "(202) 224-2023";	
    phone2.href = "tel:2022242023";	
    document.getElementById("img1").src = "assets/senators/VAT.jpg";	
    document.getElementById("img2").src = "assets/senators/VAM.jpg";

  } if (inputValue=="Washington"){ 	
    name1.innerHTML = "Cantwell, Maria";	
    phone1.innerHTML = "(202) 224-3441";	
    phone1.href = "tel:2022243441";	
    name2.innerHTML = "Murray, Patty";	
    phone2.innerHTML = "(202) 224-2621";	
    phone2.href = "tel:2022242621";	
    document.getElementById("img1").src = "assets/senators/WAM.jpg";	
    document.getElementById("img2").src = "assets/senators/WAP.jpg";	

  } if (inputValue=="West Virginia"){ 	
    name1.innerHTML = "Capito, Shelley Moore";	
    phone1.innerHTML = "(202) 224-6472";	
    phone1.href = "tel:2022246472";	
    name2.innerHTML = "Manchin, Joe, III";	
    phone2.innerHTML = "(202) 224-3954";	
    phone2.href = "tel:2022243954";	
    document.getElementById("img1").src = "assets/senators/WVS.jpg";	
    document.getElementById("img2").src = "assets/senators/WVJ.jpg";	

  } if (inputValue=="Wisconsin"){ 	
    name1.innerHTML = "Baldwin, Tammy";	
    phone1.innerHTML = "(202) 224-5653";	
    phone1.href = "tel:2022245653";	
    name2.innerHTML = "Johnson, Ron";	
    phone2.innerHTML = "(202) 224-5323";	
    phone2.href = "tel:2022245323";	
    document.getElementById("img1").src = "assets/senators/WIT.jpg";	
    document.getElementById("img2").src = "assets/senators/WIR.jpg";	

  }	
  if (inputValue=="Wyoming"){ 	
    name1.innerHTML = "Barrasso, John";	
    phone1.innerHTML = "(202) 224-6441";	
    phone1.href = "tel:2022246441";	
    name2.innerHTML = "Lummis, Cynthia M.";	
    phone2.innerHTML = "(202) 224-3424";	
    phone2.href = "tel:2022243424";	
    document.getElementById("img1").src = "assets/senators/WYJ.jpg";	
    document.getElementById("img2").src = "assets/senators/WYC.jpg";	

  }	
  	
}

function emails() {
  var input = document.getElementById('state');	
  var state = input.value;	
  var input = document.getElementById('email');
  email = input.value;
  var input = document.getElementById('subject');
  subject = input.value;
  var input = document.getElementById('sentence');
  greeting = input.value;
  topic = state;
  name = "Dear Representative,";
  hey = "My name is ";
  hey2 = "and I'm a constituent emailing from "
  info = "I'm extremely concerned about the rising cost of college education and increasing amount of student debt accumulated by graduates. These loans are a financial strain especially to those who are currently struggling to make ends meet during this economic crisis. I'm emailing to urge president Biden to support for the cancellation of all student debt. I don't want to see these young people used as a bargaining chip, so I expect President Biden to change his position on the proposed 10k in debt cancellation and demand more. Our society requires a college education for any kind of job mobility, and I think graduates deserve to live their lives free of the fear that they won't be able to pay thousands of dollars worth of debt. Please pass along my concerns to the President Biden. I'd appreciate if your office could follow up with me with any news related to this issue. I can be reached at this email. Thanks so much for taking my call.";
  window.location.href = "mailto: ocr@ed.gov." + "?subject=" + topic + " || " + email + " " + subject + "&body=" + name + "%0D%0A" + "%0D%0A" + greeting + "%0D%0A" + "%0D%0A"+ hey + email + hey2 + subject + info + "%0D%0A" + "%0D%0A" + "Best," + "%0D%0A" + "%0D%0A" + email + " " + subject;
}

function copy() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
  window.open("https://www.whitehouse.gov/contact/");
}