const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world")
})

var SpotifyWebApi = require('spotify-web-api-node');

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: '75cbbf8c1ff14b9abe3cbfe6924fb5f0',
  clientSecret: 'da55e142b302460cab9b737153b93eb4',
});

app.get("/players", (req, res) => {
  // Get Elvis' albums
  spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE').then(
    function (data) {
      console.log('Artist albums', data.body);
    },
    function (err) {
      console.error(err);
    }
  );  
})

app.listen(PORT, () => console.log(`this shit is listening on ${PORT}`))
// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))
