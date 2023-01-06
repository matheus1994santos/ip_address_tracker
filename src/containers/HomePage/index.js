import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../../components/Header";
import LocationInfo from "../../components/LocationInfo";
import Map from "../../components/Map";
import Search from "../../components/Search";
import TrackerOverView from "../../components/TrackerOverView";
import TopNav from "../../components/TopNav";
import LocationsHistory from "../../components/LocationsHistory";

import { addLocationHistory } from "./slice";
import { selectLocationsHistory } from "./selectors";

import { Container } from "./styles";

const Page = () => {
  const [value, setValue] = React.useState("");
  const [prevValue, setPrevValue] = React.useState("");
  const [locationInfo, setLocationInfo] = React.useState({});
  const [resquesting, setResquesting] = React.useState(false);
  const locationTracker = locationInfo.location || {};
  const locationsHistory = useSelector(selectLocationsHistory);
  const dispatch = useDispatch();

  function onValue({ target }) {
    setValue(target.value);
  }

  React.useEffect(() => {
    if (resquesting) {
      fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_tJ7KPlm2u9yCqC6eCwGlhqBZ2ImX9&ipAddress=${value}`
      )
        .then((json) => json.json())
        .then((dados) => {
          setLocationInfo(dados);
          setResquesting(false);
          setPrevValue(value);
          dispatch(addLocationHistory({ location: dados }));
        });
    }
  }, [resquesting, value]);

  function handleRequesting() {
    if (value === prevValue) return;
    setResquesting(true);
  }

  return (
    <Container>
      <TopNav />
      <LocationsHistory locations={locationsHistory} />
      <TrackerOverView>
        <Header title={"IP Address Tracker"} />
        <Search
          stateValue={value}
          onValue={onValue}
          onSearch={handleRequesting}
        />
        <LocationInfo info={locationInfo} />
      </TrackerOverView>
      <Map
        center={{
          lat: locationTracker.lat || -14.823763,
          lng: locationTracker.lng || -39.289304,
        }}
      />
    </Container>
  );
};

export default Page;
