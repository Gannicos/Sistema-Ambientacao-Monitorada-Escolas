import "./right-bar.css";
import { useState } from "react";

export default function RightBar() {
  const [search, search2] = useState(false);
  const [searchInput, searchInput2] = useState(false);
  const [secondFloorSearch, secondFloorSearch2] = useState(false);
  const [backpack, backpack2] = useState(false);
  const [information, setInformation] = useState(false);
  const [basketball, basketball2] = useState(false);
  const [grafic, grafic2] = useState(false);
  const [microphone, microphone2] = useState(false);
  const [floorUp, floorUp2] = useState(false);
  const [secondFloor, secondFloor2] = useState(false);
  const [floorDown, floorDown2] = useState(false);
  const [firstFloor, firstFloor2] = useState(false);
  const [classrooms, classrooms2] = useState(false);

  // Search

  const search3 = () => {
    search2(!search);
    backpack2(false);
    setInformation(false);
    classrooms2(false);
    grafic2(false);
    basketball2(false);
    microphone2(false);
    floorUp2(false);
    secondFloor2(false);
    floorDown2(false);
    firstFloor2(false);
    if (searchInput == false) {
      searchInput2(true);
    } else {
      searchInput2(false);
    }
    if (secondFloorSearch == false) {
      secondFloorSearch2(true);
    } else {
      secondFloorSearch2(false);
    }
  };

  // Backpack

  const backpack3 = () => {
    backpack2(!backpack);
    search2(false);
    searchInput2(false);
    secondFloorSearch2(false);
    grafic2(false);
    basketball2(false);
    microphone2(false);
    floorUp2(false);
    secondFloor2(false);
    floorDown2(false);
    firstFloor2(false);
    if (information == false) {
      setInformation(true);
    } else {
      setInformation(false);
    }
    if (classrooms == false) {
      classrooms2(true);
    } else {
      classrooms2(false);
    }
  };

  // Grafic

  const grafic3 = () => {
    grafic2(!grafic);
    search2(false);
    searchInput2(false);
    secondFloorSearch2(false);
    backpack2(false);
    setInformation(false);
    classrooms2(false);
    basketball2(false);
    microphone2(false);
    floorUp2(false);
    secondFloor2(false);
    floorDown2(false);
    firstFloor2(false);
  };

  // Basketball

  const basketball3 = () => {
    basketball2(!basketball);
    search2(false);
    searchInput2(false);
    secondFloorSearch2(false);
    backpack2(false);
    setInformation(false);
    classrooms2(false);
    grafic2(false);
    microphone2(false);
    floorUp2(false);
    secondFloor2(false);
    floorDown2(false);
    firstFloor2(false);
  };

  // Microphone

  const microphone3 = () => {
    microphone2(!microphone);
    search2(false);
    searchInput2(false);
    secondFloorSearch2(false);
    backpack2(false);
    setInformation(false);
    classrooms2(false);
    grafic2(false);
    basketball2(false);
    floorUp2(false);
    secondFloor2(false);
    floorDown2(false);
    firstFloor2(false);
  };

  // floorUp

  const floorUp3 = () => {
    floorUp2(!floorUp);
    search2(false);
    searchInput2(false);
    secondFloorSearch2(false);
    backpack2(false);
    setInformation(false);
    classrooms2(false);
    grafic2(false);
    basketball2(false);
    microphone2(false);
    firstFloor2(false);
    floorDown2(false);
    firstFloor2(false);
    if (floorUp == false) {
      secondFloor2(true);
    } else {
      secondFloor2(false);
    }
    if (secondFloor == false) {
      secondFloor2(true);
    } else {
      secondFloor2(false);
    }
  };

  // FloorDown

  const floorDown3 = () => {
    floorDown2(!floorDown);
    search2(false);
    searchInput2(false);
    secondFloorSearch2(false);
    backpack2(false);
    setInformation(false);
    classrooms2(false);
    grafic2(false);
    basketball2(false);
    microphone2(false);
    secondFloor2(false);
    floorUp2(false);
    firstFloor2(false);
    if (floorDown == false) {
      firstFloor2(true);
    } else {
      firstFloor2(false);
    }
    if (firstFloor == false) {
      firstFloor2(true);
    } else {
      firstFloor2(false);
    }
  };

  return (
    <>
      <div
        className={`search ${search ? "clicked" : ""}`}
        onClick={search3}
      ></div>
      {searchInput && (
        <input className="informations" style={searchInputStyle()}></input>
      )}
      {secondFloorSearch && (
        <div className="informations" style={secondFloorSearchStyle()}></div>
      )}

      <div
        className={`backpack ${backpack ? "clicked" : ""}`}
        onClick={backpack3}
      ></div>
      {information && (
        <div className="informations" style={informationStyle()}>
          <h1 className="titulo"> Salas de Aula </h1>
          <div className="sala1">
            <h1 className="numeroSala1">
              01 <span className="situacaoSala"> Ocupada </span>
              <span className="informacaoSala1"> até 12:20 </span>
            </h1>
          </div>
          <div className="sala2">
            <h1 className="numeroSala2">
              02 <span className="situacaoSala"> Reservada </span>
              <span className="informacaoSala2"> até 12:20 </span>
            </h1>
          </div>
          <div className="sala3">
            <h1 className="numeroSala3">
              03 <span className="situacaoSala"> Livre </span>
              <span className="informacaoSala3"> até 12:20 </span>
            </h1>
          </div>
          <div className="sala4">
            <h1 className="numeroSala4">
              04 <span className="situacaoSala"> Livre </span>
              <span className="informacaoSala4"> até 12:20 </span>
            </h1>
          </div>
          <div className="sala5">
            <h1 className="numeroSala5">
              05 <span className="situacaoSala"> Ocupada </span>
              <span className="informacaoSala1"> até 12:20 </span>
            </h1>
          </div>
          <div className="sala6">
            <h1 className="numeroSala6">
              06 <span className="situacaoSala"> Ocupada </span>
              <span className="informacaoSala1"> até 12:20 </span>
            </h1>
          </div>
        </div>
      )}
      {classrooms && (
        <div
          className="informations"
          style={secondFloorClassroomsStyle()}
        ></div>
      )}

      <div
        className={`grafic ${grafic ? "clicked" : ""}`}
        onClick={grafic3}
      ></div>

      <div
        className={`basketball ${basketball ? "clicked" : ""}`}
        onClick={basketball3}
      ></div>

      <div
        className={`microphone ${microphone ? "clicked" : ""}`}
        onClick={microphone3}
      ></div>

      <div
        className={`floorUp ${floorUp ? "clicked" : ""}`}
        onClick={floorUp3}
      ></div>
      {secondFloor && (
        <div className="informations" style={secondFloorStyle()}></div>
      )}

      <div
        className={`floorDown ${floorDown ? "clicked" : ""}`}
        onClick={floorDown3}
      ></div>
      {firstFloor && (
        <div className="informations" style={firstFloorStyle()}></div>
      )}
    </>
  );
}
function informationStyle() {
  return {
    top: `180px`,
    left: `1090px`,
    width: `600px`,
    height: `730px`,
    borderRadius: `50px`,
    backgroundColor: `#191919`,
  };
}
function searchInputStyle() {
  return {
    top: `90px`,
    left: `200px`,
    width: `1573px`,
    height: `103px`,
    marginLeft: `0px`,
    marginTop: `-82px`,
    borderWidth: `0px`,
    borderTopLeftRadius: `100px`,
    borderBottomLeftRadius: `100px`,
    backgroundColor: `#191919`,
    textAlign: `center`,
    color: `white`,
    fontWeight: `bold`,
    fontSize: `50px`,
  };
}
function secondFloorStyle() {
  return {
    backgroundImage: `url("andar2.png")`,
    backgroundColor: `#AAAAA5`,
    height: `950px`,
    width: `1800px`,
    marginTop: `-40px`,
    marginLeft: `-175px`,
    backgroundSize: `1500px`,
    backgroundRepeat: `no-repeat`,
    zIndex: `-1`,
    position: `absolute`,
  };
}
function firstFloorStyle() {
  return {
    backgroundImage: `url("andar1.png")`,
    backgroundColor: `#AAAAA5`,
    height: `950px`,
    width: `1800px`,
    marginTop: `-40px`,
    marginLeft: `-175px`,
    backgroundSize: `1400px`,
    backgroundRepeat: `no-repeat`,
    zIndex: `-1`,
    position: `absolute`,
  };
}
function secondFloorClassroomsStyle() {
  return {
    backgroundImage: `url("salasAndar2.png")`,
    backgroundColor: `#AAAAA5`,
    height: `950px`,
    width: `1800px`,
    marginTop: `-40px`,
    marginLeft: `-175px`,
    backgroundSize: `1500px`,
    backgroundRepeat: `no-repeat`,
    zIndex: `-1`,
  };
}
function secondFloorSearchStyle() {
  return {
    backgroundImage: `url("andar2Fosco.png")`,
    backgroundColor: `#AFB0AA`,
    height: `950px`,
    width: `1800px`,
    marginTop: `-40px`,
    marginLeft: `-175px`,
    backgroundSize: `1500px`,
    backgroundRepeat: `no-repeat`,
    zIndex: `-1`,
  };
}
