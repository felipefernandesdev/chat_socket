import { serverHttp } from "./http";
import "./websocket";
const port = process.env.PORT;
serverHttp.listen(port, () => console.log(`listening on PORT ${port}`));
