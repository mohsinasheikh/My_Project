var quantity= 1;
function productAddToTable(el) {
    
    // var table = document.getElementById("myTable");
    // console.log(el.form.querySelectorAll('input'))
    // el.form.querySelectorAll('input').forEach(function(el) {
    // var cell = el.value;
    
    // });
    
    var name = el.form.querySelectorAll('input')[0].value;
    var price = el.form.querySelectorAll('input')[2].value;
    var quantity = el.form.querySelectorAll('input')[1].value;
    var index ='number' + $("#productTable tbody").length;
    //console.log(name,price)
    // Append product to the table
    $("#productTable tbody").append(
        "<tr>" +
        "<td>" + name + "</td>" +
        "<td>" + '$'+ price + "</td>" +
        "<td>" + "IN Stock" + "</td>" +
        "<td >" + "<button onclick='deductQuantity(this);'>-</button>"+"<button class='btn1' onclick='addquantity(this);'>+</button>"+"</td>"+
        "<td >" + quantity + "</td>" +
        "<td>" + '$'+price * quantity + "</td>" +
        "<td>" +
        "<button type='button' onclick='productDelete(this);' class='delete_row'>"
        +'x'+
        "</button>" +
        "</td>" +
        "</tr>");


        el.form.querySelectorAll('input').forEach(function(el) {
        el.value='';
        submitbutton.disabled=true;
        
    });
}
function productDelete(ctl) {
    $(ctl).parents("tr").remove();
}

function deductQuantity(num) {
   _row = $(num).parents("tr");
   var cols = _row.children("td");
   var input = $(cols[4]).text()
   var value = input;
   value = isNaN(value) ? 1 : value;
   value < 2 ? value = 2 : '';
   value--;
   $(cols[4]).text(value)

   var pri = $(cols[1]).text().replace('$','')
   var price =value * pri;
   $(cols[5]).text('$' + price)

   if(value == 0){
    $(num).parents("tr").remove();
   }
    
}
function addquantity(num) {
    _row = $(num).parents("tr");
    var cols = _row.children("td");
    var input = $(cols[4]).text()
    var value = input;
    value++;
    $(cols[4]).text(value)
    var pri = $(cols[1]).text().replace('$','')
    var price =value * pri
    $(cols[5]).text('$' + price)
    
}