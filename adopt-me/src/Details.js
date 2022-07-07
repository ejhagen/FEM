import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  return <h1>Oh wow you did it! {id}</h1>;
};

export default Details;
