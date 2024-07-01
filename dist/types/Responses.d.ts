import { BaseIndexResponse } from './Pagination';
import { Persona } from './Persona';
import { Show } from './Show';
import { Playlist } from './Playlist';
import { Spin } from './Spin';
export interface PersonasResponse extends BaseIndexResponse {
    items: Persona[];
}
export interface ShowsResponse extends BaseIndexResponse {
    items: Show[];
}
export interface PlaylistsResponse extends BaseIndexResponse {
    items: Playlist[];
}
export interface SpinsResponse extends BaseIndexResponse {
    items: Spin[];
}
