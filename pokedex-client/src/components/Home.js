import React from 'react';


const Home = () => {

    return (
      <div className="jumbotron jumbotron-fluid container">
        <h1 className="display-3">Pokedex</h1>
        <hr className="my-4" />
        <p className="lead">Check out all of the fascinating Pokemon that you can find all over the world. Help us collect them all by adding new Pokemon!</p>
          <div className="container">
            <div className="row">
              <div className="span4"></div>
              <div className="span4"><img src="https://orig00.deviantart.net/6f59/f/2015/245/3/6/pokemon_mundo_megamisterioso_render_by_okami_norino-d986tg7.png" alt="" className="center-block"/></div>
              <div className="span4"></div>
            </div>
          </div>

      </div>
    );

}


export default Home;
