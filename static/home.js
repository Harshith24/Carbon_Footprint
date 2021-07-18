const form = document.getElementById("form-inp");

let footprint = 0;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.electricity.value !== null && form.electricity.value >= 0 ? footprint+=form.electricity.value * 105 : form += 0;
    form.gas.value !== null && form.gas.value >= 0 ? footprint+=form.gas.value * 105 : form += 0;
    form.oil.value !== null && form.oil.value >= 0 ? footprint+=form.oil.value * 113 : form += 0;
    form.mile.value !== null && form.mile.value >= 0 ? footprint+=form.mile.value * 0.79 : form += 0;
    form.flights_four_or_less.value !== null && form.flights_four_or_less.value >= 0 ? footprint+=form.flights_four_or_less.value * 1100 : form += 0;
    form.flights_four_more.value !== null && form.flights_four_more.value >= 0 ? footprint+=form.flights_four_more.value * 4400 : form += 0;
        
    let news = document.getElementsByName("newspaper");
    for(i=0; i<news.length; i++){
        if(news[i].checked){
            news[i].value === "Yes" ? footprint += 0 : footprint += 184;
            break;
        }
    }

    let alum = document.getElementsByName("aluminum");
    for(i=0; i<alum.length; i++){
        if(alum[i].checked){
            alum[i].value === "Yes" ? footprint += 0 : footprint += 166;
            break;
        }
    }
    
    const final_value = document.getElementById("final-value");
    final_value.innerText = Math.round(footprint) + " pounds per year";

})