import React from "react";
import Wheel from "./Wheel";
import Screen from "./Screen";
import ZingTouch from "zingtouch";
class App extends React.Component {

    //-------------------------------------------------initialization the state--------------------------------------------------------------------
    
    
    
    constructor() {
      super();
  
      this.state = {
        menu: false,
        song: false,
        games: false,
        setting: false,
        developer: false,
        submenu: false,
        allsong: false,
        album: false,
        artist: false,
      };
    }

    //---------------------------------------------------------function behind the wheel----------------------------------------------
    
    
    
    
    handleRotate = (props) => {
      const target = document.getElementById("outer-circle");
      const zt = new ZingTouch.Region(target);
      let angle = 0;
      zt.bind(target, "rotate", (e) => {
        angle = angle + e.detail.distanceFromLast;
  
        if (!this.state.menu && !this.state.submenu) {
          return;
        }
  
        //------------------------------------------------------- when song select-------------------------------------------------------------
        if (
          ((angle <= 30 && angle >= 0) || (angle <= 0 && angle > -30)) &&
          this.state.menu &&
          !this.state.submenu
        ) {
          console.log("song selected");
  
          let song = document.getElementById("song");
          let developer = document.getElementById("developer");
          let games = document.getElementById("games");
          let setting = document.getElementById("setting");
  
          //----------------------------------------selected song-------------------------------------------------------------------------------
          song.classList = "select";
          games.classList = "unselect";
          setting.classList = "unselect";
          developer.classList = "unselect";
  
          //----------------------------------------------------change state-------------------------------------------------------------------
          this.setState({
            song: true,
            games: false,
            setting: false,
            developer: false,
            submenu: false,
          });
        }
  
        //----------------------------------------------------------selected Game---------------------------------------------------------------
        if (
          ((angle <= 60 && angle >= 30) || (angle <= -30 && angle > -60)) &&
          this.state.menu &&
          !this.state.submenu
        ) {
          console.log("games selected");
          let song = document.getElementById("song");
          let developer = document.getElementById("developer");
          let games = document.getElementById("games");
          let setting = document.getElementById("setting");
  
          //----------------------------------------------------------change design of Game---------------------------------------------------------------
          song.classList = "unselect";
          games.classList = "select";
          setting.classList = "unselect";
          developer.classList = "unselect";
  
          this.setState({
            song: false,
            games: true,
            setting: false,
            developer: false,
            submenu: false,
          });
        }
  
        //--------------------------------------------------------------selected setting---------------------------------------------------------------
        if (
          ((angle <= 90 && angle >= 60) || (angle <= -60 && angle > -90)) &&
          this.state.menu &&
          !this.state.submenu
        ) {
          console.log("setting selected");
          let song = document.getElementById("song");
          let developer = document.getElementById("developer");
          let games = document.getElementById("games");
          let setting = document.getElementById("setting");
  
          //----------------------------------------------------------chaing the desing of the setting---------------------------------------------------------------
          song.classList = "unselect";
          games.classList = "unselect";
          setting.classList = "select";
          developer.classList = "unselect";
  
          this.setState({
            song: false,
            games: false,
            setting: true,
            developer: false,
            submenu: false,
          });
        }
  
        //----------------------------------------------------------selected devloper---------------------------------------------------------------
        if (
          ((angle <= 120 && angle >= 90) || (angle <= -90 && angle > -120)) &&
          this.state.menu &&
          !this.state.submenu
        ) {
          console.log("developer selected");
          let song = document.getElementById("song");
          let developer = document.getElementById("developer");
          let games = document.getElementById("games");
          let setting = document.getElementById("setting");
  
          //----------------------------------------------------------changing the design of the devlpoer---------------------------------------------------------------
          song.classList = "unselect";
          games.classList = "unselect";
          setting.classList = "unselect";
          developer.classList = "select";
  
          this.setState({
            song: false,
            games: false,
            setting: false,
            developer: true,
            submenu: false,
          });
        }
  
        //---------------------------------------------------------------handle the submenu rotation---------------------------------------------------------------
        if (this.state.submenu) {
          if ((angle <= 30 && angle >= 0) || (angle <= 0 && angle > -30)) {

            let allsong = document.getElementById("allsong");
            let album = document.getElementById("album");
            let artist = document.getElementById("artist");
  
            //----------------------------------------------------------helight the allsongs---------------------------------------------------------------
            allsong.classList = "select";
            album.classList = "unselect";
            artist.classList = "unselect";
  
            this.setState({
              allsong: true,
              album: false,
              artist: false,
            });
          }
          //--------------------------------------------------------------selected album---------------------------------------------------------------
          if ((angle <= 60 && angle >= 30) || (angle <= -30 && angle > -60)) {
            console.log("album selected");
    
            let allsong = document.getElementById("allsong");
            let album = document.getElementById("album");
            let artist = document.getElementById("artist");
  
            //--------------------------------------------------------------Helight the album---------------------------------------------------------------
            allsong.classList = "unselect";
            album.classList = "select";
            artist.classList = "unselect";
  
            this.setState({
              allsong: false,
              album: true,
              artist: false,
            });
          }
  
          //----------------------------------------------------------selected artist---------------------------------------------------------------
          if ((angle <= 90 && angle >= 60) || (angle <= -60 && angle > -90)) {
            console.log("artist selected");
            //---- selecting the all list element
            let allsong = document.getElementById("allsong");
            let album = document.getElementById("album");
            let artist = document.getElementById("artist");
  
            //----------------------------------------------------------Helight the artist---------------------------------------------------------------
            allsong.classList = "unselect";
            album.classList = "unselect";
            artist.classList = "select";
  

            this.setState({
              allsong: false,
              album: false,
              artist: true,
            });
          }
        }
      });
    };

      //-----------------------------------------------------handle click on menu button--------------------------------------------------------- 
  handleMenuClick = (props) => {
    const { menu } = this.state;
    this.setState({
      menu: !menu,
      submenu: false,
    });
    let display = document.getElementById("screen-container");
    display.style.backgroundImage =
      "url('https://www.planetware.com/wpimages/2020/01/india-in-pictures-beautiful-places-to-photograph-the-ganges-river-varanasi.jpg')";
  };

    //-----------------------------------------------------handle click on menu button---------------------------------------------------------
    handlechangestate = () => {
      const { menu } = this.state;
      this.setState({
        menu: !menu,
      });
    };


    
  //-----------------------------------------------------handle click on handleSubMenuState---------------------------------------------------------
  handleSubMenuState = () => {
    this.setState({
      submenu: false,
    });
  };



    //-----------------------------------------------------handleSubMenuState---------------------------------------------------------------------
    handleInnerCirlceClick = (props) => {

      props.stopPropagation(onclick);
  
      const {
        menu,
        song,
        games,
        setting,
        developer,
        submenu,
        allsong,
        album,
        artist,
      } = this.state;
      console.log(this.state);
      let display = document.getElementById("screen-container");
  
      //------------------------------------------------------menu page ui----------------------------------------------------------------------
      if (menu) {
        if (song) {
          display.style.backgroundImage =
            "url('https://variety.com/wp-content/uploads/2022/07/Music-Streaming-Wars.jpg')";
          this.handlechangestate();
          this.setState({
            submenu: !submenu,
          });
        } else if (games) {
          display.style.backgroundImage =
            "url('https://img.freepik.com/free-psd/vr-video-game-composition_1419-2358.jpg?w=2000')";
          this.handlechangestate();
        } else if (setting) {
          display.style.backgroundImage =
            "url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Settings_%28iOS%29.png/800px-Settings_%28iOS%29.png')";
          this.handlechangestate();
        } else if (developer) {
          display.style.backgroundImage =
            "url('https://media.bitdegree.org/storage/media/images/2018/08/what-is-a-web-developer.jpg')";
  
          this.handlechangestate();
        }
      }
  
      //---------------------------------------------------------UI of the sub menu----------------------------------------------------------
      if (submenu) {
        if (allsong) {
          display.style.backgroundImage =
            "url('https://i.pinimg.com/originals/3b/47/68/3b47686a6dbf0983f77ac10928b85d41.jpg')";
          this.handleSubMenuState();
        }
        if (album) {
          display.style.backgroundImage =
            "url('https://m.media-amazon.com/images/I/51FqMZosF9L._UXNaN_FMjpg_QL85_.jpg')";
          this.handleSubMenuState();
        }
        if (artist) {
          display.style.backgroundImage =
            "url('https://college.berklee.edu/sites/default/files/styles/scale_to_480px_width/public/d7/bcm/BIE.jpg?fv=gZ4WFSu8&itok=E_qaGDUh')";
          this.handleSubMenuState();
        }
      }
    };
  


  render() {
    const { menu, submenu } = this.state;
    return (
      <div className="App">
        <Screen menu={menu} submenu={submenu} />
        <Wheel
          onMenuClick={this.handleMenuClick}
          onhandleRotate={this.handleRotate}
          handleInnerCirlceClick={this.handleInnerCirlceClick}
        />
      </div>
    );
  }
}

export default App;
