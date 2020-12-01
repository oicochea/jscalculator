$(() => {
  
    let enteredValues =[] 
 
    const input =()=>{
     if(($(event.currentTarget).val())!= '=' ){
     enteredValues.push($(event.currentTarget).val());
     let calculate = enteredValues.join("");
     $('.result').text(calculate);
     }else{
     let calculate = enteredValues.join("")
     $('.result').text(eval(calculate))
     }
 }
 
 const randomcolors=()=>{
     var letters = '0123456789ABCDEF'.split('');
     var color = '#';
     for (var i = 0; i < 6; i++ ) {
         color += letters[Math.floor(Math.random() * 16)];
     }
    $('.button').css('color',color)
 
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    $('.button').css('background-color',color)
 
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
 
    $('.background').css('background-color',color)
   
 }
 
 const clear = () =>{
     enteredValues =[] 
  $('.result').text(enteredValues)
 }
 
 $('#changeColor').on('click', randomcolors)
 $('button').on('click', input ) 
 $('#clear').on('click', clear)
 
      
 //    const valueeq = () =>{
 //     // enteredValues.push($('#eq').val())
 //     let calculate = enteredValues.join("");
 //     console.log(calculate);
 //     $('.result').text(eval(calculate));
 //    } 
 
 
 
 // const value7 = () =>{
 //     enteredValues.push($('#7').val())
 //     let calculate = enteredValues.join("");
 //     $('.result').text(calculate);
 // }
 
 // const value8 = () =>{
 //     enteredValues.push($('#8').val())
 //     let calculate = enteredValues.join("");
 //     $('.result').text(calculate);
 
 // }
 
 // const value9 = () =>{
 //     enteredValues.push($('#9').val())
 //     let calculate = enteredValues.join("");
 //     $('.result').text(calculate);
 // }
 
 // const valuediv = () =>{
 //     enteredValues.push($('#div').val())
 //     let calculate = enteredValues.join("");
 //     $('.result').text(calculate);
 // }
 // const value4 = () =>{
 //     enteredValues.push($('#4').val())
 //     let calculate = enteredValues.join("");
 //     $('.result').text(calculate);
 // }
 // const value5 = () =>{
 //     enteredValues.push($('#5').val())
 //     let calculate = enteredValues.join("");
 //     $('.result').text(calculate);
 // }
 // const value6 = () =>{
 //     enteredValues.push($('#6').val())
 //     let calculate = enteredValues.join("");
 //     $('.result').text(calculate);
 // }
 // const valuetimes = () =>{
 //     enteredValues.push($('#times').val())
 //     let calculate = enteredValues.join("");
 //     $('.result').text(calculate);
 // }
 // const value1 = () =>{
 //     enteredValues.push($('#1').val())
 //     let calculate = enteredValues.join("");
 //     $('.result').text(calculate);
 // }
 // const value2 = () =>{
 //     enteredValues.push($('#2').val())
 //     let calculate = enteredValues.join("");
 //     $('.result').text(calculate);
 // }
 // const value3 = () =>{
 //     enteredValues.push($('#3').val())
 //     let calculate = enteredValues.join("");
 //     $('.result').text(calculate);
 // }
 // const valueminus = () =>{
 //     enteredValues.push($('#minus').val())
 //     let calculate = enteredValues.join("");
 //     $('.result').text(calculate);
 // }
 // const value0 = () =>{
 //     enteredValues.push($('#0').val())
 //     let calculate = enteredValues.join("");
 //     $('.result').text(calculate);
 // }
 // const valueper = () =>{
 //     enteredValues.push($('#period').val())
 //     let calculate = enteredValues.join("");
 //     $('.result').text(calculate);
 
 // }
 
 // const valueadd = () =>{
 
 //   enteredValues.push($('#plus').val())
 //     let calculate = enteredValues.join("");
 //     $('.result').text(calculate);
     
 // }
 
 
 
 
 
 
 
    
 // $('#7').on('click', value7 )
 // $('#8').on('click', value8 )
 // $('#9').on('click', value9 )
 // $('#div').on('click', valuediv )
 // $('#4').on('click', value4 )
 // $('#5').on('click', value5 )
 // $('#6').on('click', value6 )
 // $('#times').on('click', valuetimes )
 // $('#1').on('click', value1 )
 // $('#2').on('click', value2 )
 // $('#3').on('click', value3 )
 // $('#minus').on('click', valueminus )
 // $('#0').on('click', value0 )
 // $('#period').on('click', valueper )
 // $('#plus').on('click', valueadd )
 // $('#equals').on('click', valueeq )
 
 
 
 
 
 
   });