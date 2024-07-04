import { Link } from './Link';
export interface Persona {
    id: number;
    name: string;
    bio: string;
    since: number;
    email: string;
    website: string;
    image?: string;
    _links?: {
        self: Link;
        shows: Link[];
    };
}
