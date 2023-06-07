import { Geo } from "./geo.model";

interface IAddress {

    street?: string;
    suite?: string;
    city?: string;
    zipcode?: string;
    geo?: Geo;
}

export class Address implements IAddress{
    street?: string;
    suite?: string;
    city?: string;
    zipcode?: string;
    geo?: Geo;
}