//--------------------------------------
        // SILVER - PURITY
        //--------------------------------------
                function silver_purity( direction ){

                        if( direction == 'up' ){
                                if( document.silver_calc.purity.value == '.800' ){  document.silver_calc.purity.value = '.830'; return true; }
                                if( document.silver_calc.purity.value == '.830' ){  document.silver_calc.purity.value = '.925'; return true; }
                                if( document.silver_calc.purity.value == '.925' ){  document.silver_calc.purity.value = 'SS'; return true; }
                                if( document.silver_calc.purity.value == 'SS'   ){  document.silver_calc.purity.value = 'Sterling'; return true; }
                                if( document.silver_calc.purity.value == 'Sterling' ){  document.silver_calc.purity.value = '.999'; return true; }
                        }
                        if( direction == 'dn' ){
                                if( document.silver_calc.purity.value == '.999'  ){     document.silver_calc.purity.value = 'Sterling'; return true; }
                                if( document.silver_calc.purity.value == 'Sterling' ){  document.silver_calc.purity.value = 'SS'; return true; }
                                if( document.silver_calc.purity.value == 'SS'  ){   document.silver_calc.purity.value = '.925'; return true; }
                                if( document.silver_calc.purity.value == '.925'  ){     document.silver_calc.purity.value = '.830'; return true; }
                                if( document.silver_calc.purity.value == '.830'  ){     document.silver_calc.purity.value = '.800'; return true; }
                        }
                        return true;
                }
        //--------------------------------------
                // SILVER - UNIT
                //--------------------------------------
                function silver_unit( ){
                            
            if( document.silver_calc.unit.value == 'g'   ){  document.silver_calc.unit.value = 'oz'; return true; }
                    if( document.silver_calc.unit.value == 'oz'   ){ document.silver_calc.unit.value = 'dwt'; return true; }
                    if( document.silver_calc.unit.value == 'dwt'  ){ document.silver_calc.unit.value = 'g';  return true; }
            
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
                        silver = ( ( 17.2200 / 31.1 ) * perc ) * wgt;

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