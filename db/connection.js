const mongoose = require("mongoose");

if (process.env.NODE_ENV == "production") {
  mongoose.connect(process.env.DB_URL);
} else {
  mongoose.connect("mongodb://localhost/lessonplans", {
    useNewUrlParser: true
  });
}

// if (process.env.NODE_ENV == "production") {
//   mongoose.connect(process.env.DB_URL, { useNewUrlParser: true }, function(
//     err
//   ) {
//     // if (err) {
//     //   return console.log(err);
//     // }
//   });
// } else {
//   mongoose.connect(
//     "mongodb://localhost/lessonplans",
//     { useNewUrlParser: true },
//     function(err) {
//       if (err) {
//         return console.log(err);
//       }
//     }
//   );
// }

mongoose.Promise = Promise;

module.exports = mongoose;
