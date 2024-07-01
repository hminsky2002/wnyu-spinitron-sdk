import { Link } from './Link';
export interface Playlist {
    id: number;
    persona_id: number;
    show_id: number;
    start: string;
    end: string;
    duration: number;
    timezone: string;
    category: string;
    title: string;
    description: string;
    since: number;
    url: string;
    hide_dj: boolean;
    image: string;
    automation: boolean;
    episode_name: string;
    episode_description: string;
    _links: {
        self: Link;
        persona: Link;
        show: Link;
        spins: Link;
    };
}
