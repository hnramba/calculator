$(document).ready(function() {
    $("#calculate_btn").on("click", function() {
        var FirstNumber = parseFloat($("#FirstNumber").val());
        var SecondNumber = parseFloat($("#SecondNumber").val());
        var result;
        var operation = $("#operation").val();


        switch(operation) {
            case "+": result = FirstNumber + SecondNumber; break;
            case "-": result = FirstNumber - SecondNumber; break;
            case "*": result = FirstNumber * SecondNumber; break;
            case "/": result = FirstNumber / SecondNumber; break;
        }
        $("#displaycalculation").html(FirstNumber + " " + operation + " " + SecondNumber);
        $("#result").html(result);
    });
});