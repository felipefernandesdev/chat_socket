import { serverHttp } from "./http";
import "./websocket";

serverHttp.listen(3000, () => console.log("listening on PORT 3000"));
