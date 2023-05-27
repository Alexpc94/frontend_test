import { Timestamp } from "rxjs";

export interface Comprobante{
    id:number;
    fecha : string;
    id_rem : number;
    id_des : number;
    tc: number;
    bol: number;
    dol:number;
}