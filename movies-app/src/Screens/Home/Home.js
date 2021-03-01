import React, { Component } from "react";
import Header from "../../Common/Header/Header";
import AppBar from "@material-ui/core/AppBar";
import "./Home.css";
import MoviesData from "../../Data/Movies";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

class Home extends Component {
  render() {
    //console.log(MoviesData);
    return (
      <div>
        <Header></Header>
        <AppBar position="relative" color="secondary" className="appbar">
          Upcoming Movies
        </AppBar>
        <GridList cols={MoviesData.length}>
          {MoviesData.map((mov) => (
            <GridListTile key={mov.id}>
              <img
                src={mov.poster_url}
                alt={mov.title}
                className="movie-poster"
              />
              <GridListTileBar title={mov.title} />
            </GridListTile>
          ))}
        </GridList>
        <div>
          <div className="column">
            <GridList cols={2} className="relased">
              {MoviesData.filter((mov) => mov.released == true).map((mov) => (
                <GridListTile key={mov.id}>
                  <img
                    src={mov.poster_url}
                    alt={mov.title}
                    className="movie-poster"
                  />
                  <GridListTileBar
                    title={mov.title}
                    subtitle={
                      <span>
                        Release Date:{" "}
                        {new Date(mov.release_date).toDateString()}
                      </span>
                    }
                  />
                </GridListTile>
              ))}
            </GridList>
          </div>
          <div className="column"></div>
        </div>
      </div>
    );
  }
}

export default Home;
