function setup (){

    loadJSON('all');
    console.log('running');

    var button = select('#submitBook');


        button.mousePressed(submitBook);


}

    function submitBook(){
        //# = ID in html

       var firstName = select('#firstName').value();
       var lastName = select('#lastName').value();
       var from = select('#from').value();
       var to = select('#to').value();
       var departureDate = select('#DepartureDate').value();
       //var retourDate = select('#RetourDate').value();
       var travelClass = select ('#Class').value();

       console.log(firstName, lastName, from, to, departureDate, travelClass);

       loadJSON('/json.html/' + firstName + '/' + lastName + '/' + from + '/' + to + '/' + departureDate + '/' + travelClass,  finished);
       function finished(data) {
           console.log(data);

       }
}






