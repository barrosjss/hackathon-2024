import { Recycler } from "@components";
import { Vendedor } from "@components";

var user = "Recliclador"

const userCondition = () => {
    if (user === "Venderdor") {
        return <Recycler />;
    } else {
        return <Vendedor />;
    }
};

export default userCondition;