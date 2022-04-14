import { quiz1, quiz2, quiz3 } from "asset";
// import {uuid} from "uuid";
import { v4 as uuid } from 'uuid';

export const categories = [
    {
    
_id : uuid(),
name: "science",
image: quiz1,
},
    {
    
_id : uuid(),
name: "tech",
image: quiz2,
},
    {
    
_id : uuid(),
name: "html",
image: quiz3,
},
]