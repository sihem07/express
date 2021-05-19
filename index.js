const express = require('express');
const app = express();

const port = process.env.PORT || 5000;
app.use(logger)
function logger(req, res, next) {
      var weekDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
                   /* GATTING THE HOUR OF THE DAY */
      var hours = new Date().getHours();
         /* GETTING THE DAY  */
            const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
            const options = { weekday: 'long' };
            var day = event.toLocaleDateString('en-US', options)
            console.log(hours)


                  if (weekDay.includes(day)) {
                        if (hours < 17 && 9 < hours) {
                  
                        next();
                  } else {
                  res.send("the hour is not in the working hours (9h to 17h)");
                        }
                        
                  } else {
                        res.send("the day is not a working day");
                  }
                  
            
      

            
      
      }
            


app.set('view engine', 'pug');

app.get('/', (req, res, next) => {
      res.render(
            'Home',
            {title:'Home'}
      )
});



app.get('/views/contact.pug', (req, res, next) => {
      res.render(
            'contact',
            {title:'contactUs'}
      )
});


app.get('/views/service.pug', (req, res, next) => {
      res.render(
            'service',
            {title:'contactUs'}
      )
});



app.listen(port, (err) => {
      err ? console.log(err) : console.log(`app running on http://localhost:${port}`)
});


