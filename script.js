Promise.all([
    fetch('https://api.bridgedataoutput.com/api/v2/OData/test/Property?access_token=1490ef3886fe2bcf590530f5efcfd7db'),
    fetch('https://api.bridgedataoutput.com/api/v2/OData/test/Property?access_token=1490ef3886fe2bcf590530f5efcfd7db&$select=Media')
  ]).then(function (responses) {
    return Promise.all(responses.map(function (response) {
      return response.json();
    }));
  }).then(function (data) {
    let results = "";
    console.log(data);

    for (let i=0; i < data[0].value.length; i++) {
      results += "<div class=\"results\"> <p> <strong> Price: " + data[0].value[i].ListPrice + "$ </strong><br>";
      results += "Location: " + data[0].value[i].City  + ", " + data[0].value[i].StateOrProvince + " &emsp;  ";
      results += "DaysOnMarket: " + data[0].value[i].DaysOnMarket + "<br>" 
      results += "Bathrooms: " + data[0].value[i].BathroomsTotalDecimal  + "&emsp; Bedrooms: " + data[0].value[i].BedroomsTotal;
      results += "&emsp; Square Feet: " + data[0].value[i].LotSizeSquareFeet + " </p>"
      results += '<img class=\"houseImage\" src=\"' + data[1].value[i].Media[1].MediaURL + '\" style=\"width: 800px;\"/> </div> <br><br>'
    }
    document.getElementById("results").innerHTML = results;

  }).catch(function (error) {
    console.log(error);
  });
  