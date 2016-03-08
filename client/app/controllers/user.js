export default Ember.Controller.extend({
  actions: {
    geolocation(position) {
""
      var infopos;
      infopos += "Latitude : "+position.coords.latitude +"\n";
      infopos += "Longitude: "+position.coords.longitude+"\n";
      infopos += "Altitude : "+position.coords.altitude +"\n";
      document.getElementById("infoposition").innerHTML = infopos;
    }
  }
});
