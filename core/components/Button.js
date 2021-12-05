import withStyles from 'react-jss'

const styles = {
    container:{
      padding:"7px 10px",
      background:"#ddd",
      border:"none",
      borderRadius:"5px",
      "&.ripple":{
        backgroundPosition: "center",
        transition: "background 0.8s",
        "&:hover":{
          background: "#ddd radial-gradient(circle, transparent 1%, #ddd 1%) center/15000%"
        },
        "&:active": {
          backgroundColor: "#eee",
          backgroundSize: "100%",
          transition: "background 0s"
        }
      }
    }
  }
  
  const Button = (props) => {
    const {classes} = props

    const handleClick = (e) => {
        if (props.onClick) {
            props.onClick(e)
        }
    }
    return <button className={classes?classes.container+" ripple":""} onClick={handleClick}>{props.children}</button>
  }
  
export default withStyles(styles)(Button)