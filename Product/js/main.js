var quantity= 1;
function productAddToTable(name,price) {
    
    var index ='number' + $("#productTable tbody").length;
    //console.log(name,price)
    // Append product to the table
    $("#productTable tbody").append(
        "<tr>" +
        "<td>" + name + "</td>" +
        "<td>" + price + "</td>" +
        "<td>" + "IN Stock" + "</td>" +
        "<td >" + "<button onclick='deductQuantity(this);'>-</button>"+"<button class='btn1' onclick='addquantity(this);'>+</button>"+"</td>"+
        "<td >" + '1' + "</td>" +
        "<td>" + price + "</td>" +
        "<td>" +
        "<button type='button' onclick='productDelete(this);' class='delete_row'>"
        +'x'+
        "</button>" +
        "</td>" +
        "</tr>");
}
function productDelete(ctl) {
    console.log(ctl)
    $(ctl).parents("tr").remove();
}
function deductQuantity(num) {
   
_row = $(num).parents("tr");
var cols = _row.children("td");
var input = $(cols[4]).text()
var value = input;
  value = isNaN(value) ? 1 : value;
  value < 1 ? value = 1 : '';
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
    // value = isNaN(value) ? 0 : value;
    value++;
    $(cols[4]).text(value)
    var pri = $(cols[1]).text().replace('$','')
var price =value * pri
$(cols[5]).text('$' + price)
    
}