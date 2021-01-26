import gql from 'graphql-tag';
// Schema 2
// for run on client play ground main ne $id : ID! de tha bu now ye he rahe ga meain string 
export const LanchMissionInfo = gql`
  query LanchMissionInfo($id: String!) {
    launch(id: $id) {
     
      mission_name
      launch_year
      launch_success
      details
      launch_site {
        site_name
      }
      rocket {
        rocket_name
        rocket_type
      }
      links {
        flickr_images
      }
    }
  }
`;