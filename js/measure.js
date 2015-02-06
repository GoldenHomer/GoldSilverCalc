function yabz(a,b){

var x = new Array(14);
var i;
var y;
x[0]=0.06479891;
x[1]=1; //grams
x[2]=28.349523125;
x[3]=31.1034768; // troy ounce
x[4]=1.55517384;//Pennyweight
x[5]=1000//Kilogram
x[6]=11.6638038//tola
//1 tola, = 12 mashas. 1 masha, = 8 rattis. 1 ratti, = 4 dhans. 
x[7] = x[6]/12; //mashas
x[8] = x[7]/8; //rattis
x[9] = x[8]/4; //dhans

x[10]=37.5//tael
x[11]=3.75//chi
x[12]=.2 //carat
x[13] = 15.244 //baht
x[14] = 1000000 //tonnes
x[15] = 373.2417216  //troy pounds
x[16] =  453.59237  // avoirdupous pounds
if (a != 1)
document.f.g[1].value=document.f.g[a].value*x[a];
for (i = 0; i<17; i++){
if (i !== a) {
    
//alert (i);
//alert (a);
document.f.g[i].value = Math.round ((document.f.g[1].value/x[i])*10000000000)/10000000000;

//if (document.convgold.R1[1].checked )
//  document.convgold.Amount.value = Math.round (document.f.g[1].value*100)/100;
//else if (document.convgold.R1[2].checked )
//   document.convgold.Amount.value = Math.round (document.f.g[3].value*100)/100;
//else if (document.convgold.R1[3].checked )
 //  document.convgold.Amount.value = Math.round (document.f.g[4].value*100)/100;   
}
}
}   