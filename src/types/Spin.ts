import { Link } from './Link';

export interface Spin {
  id: number;
  playlist_id: number;
  start: string;
  end: string;
  duration: number;
  timezone: string;
  image: string;
  classical: boolean;
  artist: string;
  artist_custom: string;
  composer: string;
  release: string;
  release_custom: string;
  va: boolean;
  label: string;
  label_custom: string;
  released: number;
  medium: string;
  genre: string;
  song: string;
  note: string;
  request: boolean;
  local: boolean;
  new: boolean;
  work: string;
  conductor: string;
  performers: string;
  ensemble: string;
  catalog_number: string;
  isrc: string;
  upc: string;
  iswc: string;
  _links: {
    self: Link;
    playlist: Link;
  };
}
