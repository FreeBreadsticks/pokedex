import React from 'react';


const About = () => {

    return (
      <div className="jumbotron jumbotron-fluid container">
        <h1 className="display-3">About</h1>
        <hr className="my-4" />
          <p className="lead">This Pokedex was built with a React-Redux front end client and a Rails API backend. It was styled using React Bootstrap and custom CSS. I decided to build this because I love Pokemon and I thought this would be a fun project to build! Eventually, I would like to add more functionality as well as a minigame.
            <br />
          This was built using the skills and knowledge learned from my time at the Flatiron School. You can find my project on <a href="https://github.com/FreeBreadsticks/pokedex">Github</a>. You can learn more about the Flatiron School <a href="https://flatironschool.com/">here</a>.
          </p>
          <div className="container">
            <div className="row">
              <div className="span4"></div>
              <div className="span4"><img src="http://vignette2.wikia.nocookie.net/pokemon/images/e/e1/025Pikachu_OS_anime_4.png/revision/latest?cb=20150101100259" alt="" className="center-block"/></div>
              <div className="span4"></div>
            </div>
          </div>

      </div>
    );

}


export default About;
