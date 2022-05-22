import { ObjectId } from 'mongodb';

export default interface Serie {
    name: string;
    description: string;
    season:number;
    gender: string;
    id?: ObjectId;
}
