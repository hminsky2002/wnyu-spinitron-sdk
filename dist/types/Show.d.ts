import { Link } from './Link';
export interface Show {
    id: number;
    start: string;
    end: string;
    duration: number;
    timezone: string;
    one_off: boolean;
    category: string;
    title: string;
    description: string;
    since: number;
    url: string;
    hide_dj: boolean;
    image: string;
    _links: {
        self: Link;
        personas: Link[];
        playlists: Link;
    };
}
