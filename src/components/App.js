import React from "react";
import Wheel from "./Wheel";
import Screen from "./Screen";
class App extends React.Component {

    //---- initializing the state
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
