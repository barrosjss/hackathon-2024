import { Recycler } from "@components";
import { Vendedor } from "@components";

var user = "Vendedor"

const userCondition = () => {
    if (user === "Recliclador") {
        return <Recycler />;
    } else {
        return <Vendedor />;
    }
};

export default userCondition;