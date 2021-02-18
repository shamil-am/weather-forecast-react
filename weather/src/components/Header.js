import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Time from "./Time";
//
function Header() {
  return (
    <div className="row py-2" style={{ background: "#546de5" }}>
      <div className="col-xs-12 col-md-4">
        <Logo />
      </div>
      <div className="col-xs-12 col-md-6 py-3">
        <SearchBar />
      </div>
      <div className="d-none d-md-block col-md-2">
        <Time />
      </div>
    </div>
  );
}

export default Header;
