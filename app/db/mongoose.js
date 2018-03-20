var mongoose = require('mongoose');
mongoose.connect("mongodb://user:user@ds111319.mlab.com:11319/mydb");

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  var kittySchema = mongoose.Schema({
    name: String,
    monthFromBorth: { type: Number, default: 1, max : 120},
    color: { type: String, lowercase: true }
  });

  kittySchema.methods.speak = function () {
    var greeting = this.name
      ? "Meow, my name is " + this.name
        + " , month from borth is " + this.monthFromBorth
        + " and color is " + this.color
      : "I don't have a name ";
    console.log("greeting");
  }
  
  var Kitten = mongoose.model('Kitten', kittySchema);

  var silence = new Kitten({ name: 'Silence', monthFromBorth: 2, color: "white" });
  silence.speak();

  var fluffy = new Kitten({ name: 'fluffy', color: "black&white" });
  fluffy.speak(); // "Meow name is fluffy"

  fluffy.save(function (err, fluffy) {
    if (err) return console.error(err);
    fluffy.speak()
      silence.save(function (err, silence) {
        if (err) return console.error(err);
        silence.speak()
        Kitten.find(function (err, kittens) {
          if (err) return console.error(err);
          console.log(kittens);
          mongoose.connection.close();
        })
      });
  });
});
