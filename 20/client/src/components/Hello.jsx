import { useQuery } from '@apollo/client';

import { HELLO } from '../graphql/queries';

function Hello() {
  const { loading, error, data } = useQuery(HELLO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <p>{data.hello}</p>;
}

export default Hello;
