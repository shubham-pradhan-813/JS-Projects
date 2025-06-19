const form = document.querySelector('form')
// this usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height == '' || height<0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`
    }else if(weight == '' || weight<0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`
    }else{
        const bmi = (weight / ((height*height)/1000)).toFixed(2)
        //show the results
        results.innerHTML = `<span>${bmi}</span>`;
        
    }
    // if(results < 18.5){
    //     console.log(`${bmi} Under Weight`);
    // }else if(results>25){
    //     console.log("Overweight");
    // }else{
    //     console.log("Normal");
    // }
})