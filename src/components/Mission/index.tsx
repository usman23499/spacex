// srach in graphql MissionInfo

import {useMissionInfoQuery} from "./../../generated/graphql"
import DisplayList from "./DisplayList"
import Process from "./Process"
function MissionContainer(){

    

    const { data, loading, error } = useMissionInfoQuery();
    // console.log(data)
    var forlocal:any=data
   
    if(!loading && !error){
      localStorage.setItem("Massionlist",JSON.stringify(forlocal));
    
    }


    if(loading){
    return(
        <Process/>
    )
    }

    if (error || !data) {
      // CALL DATA FORM LOCAL STROAGE:
      let calldata:any=localStorage.getItem('Massionlist');
        calldata=JSON.parse(calldata);
        // save data in local stroage
        return  <DisplayList data={calldata} />;
      }
    // Ye lazmie hai uper wala
 
    return(
       
        <DisplayList data={data} />
    )
  }



export default MissionContainer;