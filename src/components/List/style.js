import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginBottom: "30px",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  loading: {
    height: "600px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    padding: "25px",
  },
  marginBottom: {
    marginBottom: "30px",
  },
  list: {
    height: "75vh",
    paddingTop:"50px",
    // overflow: "auto",
    width:"90%",
    marginLeft:"30px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 3fr))",
    gap:"200px",
    alignItems:"end",
  },
}));
