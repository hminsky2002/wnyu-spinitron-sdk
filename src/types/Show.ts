import { Link } from './Link';
import { Persona } from './Persona';

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
  personas?: Persona[]
  _links: {
    self: Link;
    personas: Link[];
    playlists: Link;
  };
}
