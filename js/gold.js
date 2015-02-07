//--------------------------------------
// GOLD - KARAT
//--------------------------------------
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


//--------------------------------------
// GOLD - UNIT
//--------------------------------------
function gold_unit() {

    if( document.gold_calc.unit.value == 'g'   ){  document.gold_calc.unit.value = 'oz'; return true; }
    if( document.gold_calc.unit.value == 'oz'   ){ document.gold_calc.unit.value = 'dwt'; return true; }
    if( document.gold_calc.unit.value == 'dwt'  ){ document.gold_calc.unit.value = 'g';  return true; }
}
//--------------------------------------
// CALC GOLD TOTAL
//--------------------------------------
function get_gold_tot(){

    if( isNaN(document.gold_calc.wgt.value) ){ document.gold_calc.wgt.value = 0; }

    var gold = 0;
    var perc = 1;
    var wgt = document.gold_calc.wgt.value;

    if( document.gold_calc.karat.value == '8K'   ){ perc = .333; }
    if( document.gold_calc.karat.value == '10K'  ){ perc = .417; }
    if( document.gold_calc.karat.value == '12K'  ){ perc = .500; }
    if( document.gold_calc.karat.value == '14K'  ){ perc = .585; }
    if( document.gold_calc.karat.value == '18K'  ){ perc = .750; }
    if( document.gold_calc.karat.value == '22K'  ){ perc = .916; }
    if( document.gold_calc.karat.value == '24K'  ){ perc = .999; }

    //----------------------------------------
    // CONVERT UNITS
    //----------------------------------------
    //if( document.gold_calc.unit.value == 'oz' ){  wgt = wgt * 28.3495231; }
    if( document.gold_calc.unit.value == 'oz' ){  wgt = wgt * 31.1; }
    //if( document.gold_calc.unit.value == 'dwt' ){ wgt = wgt / 1.555; }
    if( document.gold_calc.unit.value == 'dwt' ){ wgt = wgt * 1.555; }
            
    //----------------------------------------
    // CALC TOTAL
    //----------------------------------------
    gold = ( ( 1241.00 / 31.1 ) * perc ) * wgt;

    //----------------------------------------
    // IF TOT > 1000, USE DIFFERENT CLASS
    //----------------------------------------
            if( gold > 1000 ){  document.gold_calc.gold_tot.setAttribute("class", "input4a"); }
            if( gold > 10000 ){ document.gold_calc.gold_tot.setAttribute("class", "input4b"); }

    gold = gold.toFixed(2);
    gold = addCommas(gold);

    document.gold_calc.gold_tot.value = "$" + gold;

    //----------------------------------------
    // DISPLAY OFFER
    //----------------------------------------
    document.getElementById('today').style.display='none';
    document.getElementById('special_bonus').style.display='block';

    return true;
}