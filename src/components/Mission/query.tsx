import gql from 'graphql-tag';
// Schema 1

export const MissionInfo= gql`

query MissionInfo{
    launches {
      mission_name
      mission_id
      launch_success
      launch_year
    }
  }
`;