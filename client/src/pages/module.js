import { gql, useQuery } from "@apollo/client";
import { Layout, ModuleDetail, QueryResult } from "../components";

const GET_MODULE_WITH_PARENT_TRACK = gql`
  query GetModuleWithParentTrack($trackId: ID!, $moduleId: ID!) {
    track(id: $trackId) {
      title
      modules {
        id
        title
        length
      }
    }
    module(id: $moduleId) {
      title
      videoUrl
      content
    }
  }
`;

const Module = ({ trackId, moduleId }) => {
  const { loading, error, data } = useQuery(GET_MODULE_WITH_PARENT_TRACK, {
    variables: { trackId, moduleId },
  });
  return (
    <Layout>
      <QueryResult loading={loading} error={error} data={data}>
        <ModuleDetail track={data?.track} module={data?.module} />
      </QueryResult>
    </Layout>
  );
};

export default Module;
