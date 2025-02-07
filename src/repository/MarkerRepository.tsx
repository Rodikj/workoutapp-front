import axios from "../axios/axios";
import {List} from "@mui/icons-material";

const token = localStorage.getItem("authToken");

interface Marker {
    name: string;
    type: string;
    latitude: bigint;
    longitude: bigint;
    link: string;
}

const MarkerRepository = {
    fetchMarkers: async (): Promise<List<Marker>> => {
        const response = await axios.get<List<Marker>>(`/marker/fetchAll`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    },
};

export default MarkerRepository;
