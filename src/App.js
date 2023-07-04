import  React,{useEffect, useState} from "react";
import { Grid } from "@material-ui/core";
import { getPlacesData } from "./api/index";
import List from "./components/List/List";

import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import {cities} from "./output";
import './App.css'
const App = () => {
  const [places,setPlaces]=useState([]);

  // const [coordinates,setCoordinates]= useState({});
  const[items,setItems]=useState([]);
  // const [bounds,setBounds]=useState(null);
  const [childCliked, setChildCliked] = useState(null);
  const [coordts, setCoordts] = useState({
    lat: 27.1752554,
    lng: 78.0098161,
  });
  const [isLoading,setIsLoading]=useState(false);
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");
  const [filteredPlaces ,setFilteredPlaces]=useState([]);
  const [filteredList, setFilteredList] = new useState(items);
  
  


  useEffect(()=>
  {
    const filteredPlaces = places.filter((place) => place.rating > rating);
    setFilteredPlaces(filteredPlaces);
    // eslint-disable-next-line
  },[rating]);

  useEffect(() => {
    setIsLoading(true);
    
    getPlacesData(type,coordts).then((data) => {
      console.log();
      setPlaces(data);
      setFilteredPlaces([]);
      setIsLoading(false);
    });
  }, [type,coordts]);


  useEffect(() => {
    const fetchData = async () => {
      
      try {
        
        setItems(cities);
        
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    
  }, [items]);

  const filterBySearch = (event) => {
    // Access input value
    const query = event.target.value;

    // Create copy of item list
    var updatedList = [...items];
    // Include all elements which includes the search query
    console.log(updatedList);
    updatedList = updatedList.filter((item) => {
      return (
            item.name.toString().toLowerCase().indexOf(query.toString().toLowerCase()) !== -1
      );
    });
    // Trigger render with updated values
    setFilteredList(updatedList);
    if (query === "") {
      setItems(items);
    }
    setItems(filteredList);
    console.log(items);
     if (filteredList.length > 0) {
      console.log(filteredList);
       setCoordts({
         lat: filteredList[0].lat,
         lng: filteredList[0].long,
       });
       console.log(coordts);


     }    
  };
  return (
    <>
      <>
        <AppBar position="static" style={{ marginBottom: "15px" }}>
          <Toolbar>
            <Typography variant="h5" style={{ flexGrow: 1 }}>
              Lets Go Advisor
            </Typography>
            <Box style={{ display: "flex", gap: "30px" }}>
              <Typography variant="h6">Explore new places</Typography>
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    background: "#f1f1f1",
                    borderRadius: "10px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginLeft: "10px",
                    }}
                  >
                    <SearchIcon style={{ color: "#888" }} />
                  </div>
                  <InputBase
                    className="searchInput"
                    placeholder="Search"
                    onChange={filterBySearch}
                    style={{ flex: 1, padding: "5px" }}
                  />
                </div>
              </div>
            </Box>
          </Toolbar>
        </AppBar>
      </>
        
      <div style={{width:"100%",height:"115vh"}} className="landing">
      </div>
      <Grid style={{ justifyContent: "start" }} className="grid-image">
        <List 
          style={{ width: "100%" }}
          places={filteredPlaces.length ? filteredPlaces : places}
          childCliked={childCliked}
          setChildCliked={setChildCliked}
          isLoading={isLoading}
          type={type}
          setType={setType}
          rating={rating}
          setRating={setRating}
        />
      </Grid>
    </>
  );
};

export default App;

