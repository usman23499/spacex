import {MissionInfoQuery} from "./../../generated/graphql"
import ResponsiveDrawer from "./Maindisplay"

// DUE to Type script Set data Type nand use function query name

interface Probs{
    data:MissionInfoQuery
}


const DisplayList:React.FC<Probs>=({data})=>{
    // console.log(data)
    
    const actualdata: any=data.launches;
    console.log(data.launches);
    return(
        <div>
           
                {/* {
                    actualdata.map((value: any,index : any)=>{
                        return(
                            <div key={index}>
                            {value.mission_name}
                        </div>  
                        )
                    })   
                }         */}
                <ResponsiveDrawer  actualdata={actualdata}/> 
            
        </div>
    )
  }
  export default DisplayList;

  