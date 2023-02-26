import { Box, Grid, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Base from "./Base/Base";
import Dashboard from "./Component/Dashboard";
import CustomizedTables from "./Component/usersdata";
 





function App() {


  const [userData, setUser] = useState([]);
// mounting 
useEffect(()=>{
   const getStudents = async () => {
    try {
      const response = await fetch("https://63fb51942027a45d8d643fbc.mockapi.io/libgen/libgen", {
        method:"GET"
      }); 
      const data = await response.json();
      console.log(data);
      setUser(data)
    } catch (error) {
      console.log("Error Occured")
    }
   }; 

   getStudents();
   // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])







  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
  return (
    <div className="App">
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, marginLeft: 6, justifyContent: "start", marginTop:'-30px' }}
      >
        <DrawerHeader />
        {/* Above codes are base for all components */}
<Switch>

<Route exact path='/'>
<Dashboard

userData = {userData}
setUser={setUser}

/>

</Route>

<Route path = '/onboard'>
  <CustomizedTables />
</Route>

</Switch>

        {/* =================================== */}
      </Box>
    </div>
  );
}

export default App;
