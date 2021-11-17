function server(){
    document.getElementById("button").disabled = true;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4&&this.status==200){
            // document.getElementById("demo").innerHTML = this.responseText;
                var response = JSON.parse(this.responseText);
                var Jproduct = response.product;
                buildTable(Jproduct);
                function buildTable(data){
                    var table = document.getElementById('myTable');
                    for(var i=0; i< data.length; i++)
                    {
                        var row =   `<tr>
                                            <td>${data[i].Serialno}</td>
                                            <td>${data[i].Name}</td>
                                            <td>${data[i].Quantity}</td>
                                            <td>${data[i].Unit}</td>
                                            <td>${data[i].Department}</td>
                                            <td>${data[i].notes}</td>
                                    </tr>`
                                    table.innerHTML += row;
                    }
                }
               
                







                for (var i=0;i<Jproduct.length;i++)
                {
                    output += "<li>"+ Jproduct[i].Name + "</li>";
                   
                }
                document.getElementById("demo").innerHTML = output;
               

        }
    }
    // xhttp.open("GET","ajax.txt",true);
    xhttp.open("GET","product.json",true);
    xhttp.send();
}