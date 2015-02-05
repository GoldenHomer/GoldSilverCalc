// Choosing gold karat
function gold_karat( direction ){
    if( direction == 'up' ){
		if( document.gold_calc.karat.value == '8K'   ){ document.gold_calc.karat.value = '10K'; return true; }
		if( document.gold_calc.karat.value == '10K'  ){ document.gold_calc.karat.value = '12K'; return true; }
		if( document.gold_calc.karat.value == '12K'  ){ document.gold_calc.karat.value = '14K'; return true; }
		if( document.gold_calc.karat.value == '14K'  ){ document.gold_calc.karat.value = '18K'; return true; }
		if( document.gold_calc.karat.value == '18K'  ){ document.gold_calc.karat.value = '22K'; return true; }
		if( document.gold_calc.karat.value == '22K'  ){ document.gold_calc.karat.value = '24K'; return true; }
	}

	if( direction == 'dn' ){
        if( document.gold_calc.karat.value == '10K'  ){ document.gold_calc.karat.value = '8K'; return true; }
        if( document.gold_calc.karat.value == '12K'  ){ document.gold_calc.karat.value = '10K'; return true; }
        if( document.gold_calc.karat.value == '14K'  ){ document.gold_calc.karat.value = '12K'; return true; }
        if( document.gold_calc.karat.value == '18K'  ){ document.gold_calc.karat.value = '14K'; return true; }
        if( document.gold_calc.karat.value == '22K'  ){ document.gold_calc.karat.value = '18K'; return true; }
	    if( document.gold_calc.karat.value == '24K'  ){ document.gold_calc.karat.value = '22K'; return true; }
	}

	return true;
}

// Choosing gold unit
function gold_unit(  ){
    if( document.gold_calc.unit.value == 'g'   ){  document.gold_calc.unit.value = 'oz'; return true; }
    if( document.gold_calc.unit.value == 'oz'   ){ document.gold_calc.unit.value = 'dwt'; return true; }
    if( document.gold_calc.unit.value == 'dwt'  ){ document.gold_calc.unit.value = 'g';  return true; }
}

// Calculate gold total
function get_gold_tot(){
    if( isNaN(document.gold_calc.wgt.value) ){ document.gold_calc.wgt.value = 0; }

    var gold = 0,
        perc = 1,
	    wgt = document.gold_calc.wgt.value;

    if( document.gold_calc.karat.value == '8K'   ){ perc = .333; }
    if( document.gold_calc.karat.value == '10K'  ){ perc = .417; }
    if( document.gold_calc.karat.value == '12K'  ){ perc = .500; }
    if( document.gold_calc.karat.value == '14K'  ){ perc = .585; }
    if( document.gold_calc.karat.value == '18K'  ){ perc = .750; }
    if( document.gold_calc.karat.value == '22K'  ){ perc = .916; }
    if( document.gold_calc.karat.value == '24K'  ){ perc = .999; }



    // CONVERT UNITS

	//if( document.gold_calc.unit.value == 'oz' ){  wgt = wgt * 28.3495231; }
	if( document.gold_calc.unit.value == 'oz' ){  wgt = wgt * 31.1; }
	//if( document.gold_calc.unit.value == 'dwt' ){ wgt = wgt / 1.555; }
	if( document.gold_calc.unit.value == 'dwt' ){ wgt = wgt * 1.555; }
	
    // CALC TOTAL
	gold = ((1264.25/31.1) * perc) * wgt;

	// IF TOT > 1000, USE DIFFERENT CLASS
    if( gold > 1000 ){  document.gold_calc.gold_tot.setAttribute("class", "input4a"); }
    if( gold > 10000 ){ document.gold_calc.gold_tot.setAttribute("class", "input4b"); }

	gold = gold.toFixed(2);
	gold = addCommas(gold);

	document.gold_calc.gold_tot.value = "$" + gold;

    // DISPLAY OFFER
    document.getElementById('today').style.display='none';
    document.getElementById('special_bonus').style.display='block';

    return true;
};



// SILVER - PURITY
function silver_purity(direction){

    if( direction == 'up'){
            if( document.silver_calc.purity.value == '.800' ){ 	document.silver_calc.purity.value = '.830'; return true; }
            if( document.silver_calc.purity.value == '.830' ){ 	document.silver_calc.purity.value = '.925'; return true; }
            if( document.silver_calc.purity.value == '.925' ){ 	document.silver_calc.purity.value = 'SS'; return true; }
            if( document.silver_calc.purity.value == 'SS'   ){ 	document.silver_calc.purity.value = 'Sterling'; return true; }
            if( document.silver_calc.purity.value == 'Sterling' ){ 	document.silver_calc.purity.value = '.999'; return true; }
    }
    if( direction == 'dn'){
            if( document.silver_calc.purity.value == '.999'  ){ 	document.silver_calc.purity.value = 'Sterling'; return true; }
            if( document.silver_calc.purity.value == 'Sterling' ){  document.silver_calc.purity.value = 'SS'; return true; }
            if( document.silver_calc.purity.value == 'SS'  ){ 	document.silver_calc.purity.value = '.925'; return true; }
            if( document.silver_calc.purity.value == '.925'  ){ 	document.silver_calc.purity.value = '.830'; return true; }
            if( document.silver_calc.purity.value == '.830'  ){ 	document.silver_calc.purity.value = '.800'; return true; }
    }
    return true;
}

// SILVER - UNIT
function silver_unit(){
                
    if(document.silver_calc.unit.value == 'g'){document.silver_calc.unit.value = 'oz'; return true;}
    if(document.silver_calc.unit.value == 'oz'){document.silver_calc.unit.value = 'dwt'; return true;}
    if(document.silver_calc.unit.value == 'dwt'){document.silver_calc.unit.value = 'g';  return true;}

    return true;
}	
    //--------------------------------------
    // CALC SILVER TOTAL
    //--------------------------------------
    function get_silver_tot(){

if( isNaN(document.silver_calc.wgt.value) ){ document.silver_calc.wgt.value = 0; }
            
var silver = 0;
            var perc = document.silver_calc.purity.value;
var wgt = document.silver_calc.wgt.value;

if( perc == 'Sterling' || perc == 'SS' ){ perc = .925; }

            //----------------------------------------
            // CONVERT UNITS
            //----------------------------------------
            //if( document.silver_calc.unit.value == 'oz' ){  wgt = wgt * 28.3495231; }
            if( document.silver_calc.unit.value == 'oz' ){  wgt = wgt * 31.1; }
//if( document.silver_calc.unit.value == 'dwt' ){ wgt = wgt / 1.555; }
if( document.silver_calc.unit.value == 'dwt' ){ wgt = wgt * 1.555; }

            //----------------------------------------
            // CALC TOTAL
            //----------------------------------------
            silver = ( ( 17.5900 / 31.1 ) * perc ) * wgt;

            //----------------------------------------
            // IF TOT > 1000, USE DIFFERENT CLASS
            //----------------------------------------
            if( silver > 1000 ){  document.silver_calc.silver_tot.setAttribute("class", "input4a"); }
            if( silver > 10000 ){ document.silver_calc.silver_tot.setAttribute("class", "input4b"); }

           	silver = silver.toFixed(2);
            silver = addCommas(silver);

            document.silver_calc.silver_tot.value = "$" + silver;

    return true;
}