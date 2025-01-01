function dollar() {
    kurs = 110.50;
    rubles = document.getElementById("input").value;
    total_cost = rubles / kurs;
    console.log(total_cost);
    document.getElementById("total").innerText = `${rubles} ₽ = ${total_cost} $`;
}
