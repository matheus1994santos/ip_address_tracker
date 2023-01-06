import React from "react";
import { useSelector } from "react-redux";

import TopNav from "../../components/TopNav";
import {
  selectLocationsHistory,
  selectReducedLocationsHistory,
} from "../HomePage/selectors";

import LocationsHistory from "../../components/LocationsHistory";

function UserPage(props) {
  const localHistory = useSelector(selectReducedLocationsHistory);
  return (
    <div>
      <TopNav />
      <h1>Olá mundo</h1>
      <LocationsHistory locations={localHistory} />
    </div>
  );
}

UserPage.propTypes = {};

export default UserPage;
