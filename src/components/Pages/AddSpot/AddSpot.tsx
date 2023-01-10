import ProtectedRoute from "../../../routers/ProtectedRoute/ProtectedRoute";
import { AddSpotMapContainer } from "./AddSpot.styles";
import AddSpotMap from "./AddSpotMap/AddSpotMap";

const AddSpot = () => {
  return (
    <AddSpotMapContainer>
      <ProtectedRoute>
        <AddSpotMap />
      </ProtectedRoute>
    </AddSpotMapContainer>
  );
};

export default AddSpot;
