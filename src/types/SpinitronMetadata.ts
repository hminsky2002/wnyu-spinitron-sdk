/*
 * Unlike the other types in this repository, which are based off of spinitron's
 * openapi spec, this is a custom type representing the metadata push that we have 
 * set up custom in spinitron (https://forum.spinitron.com/t/metadata-push-guide/144)
*/
export interface SpinitronMetadata {
    song_name?: string;
    playlist_id?: string;
    spin_id?: string;
    artist_name?: string;
    release_title?: string;
    release_year?: string;
    cover_art_url?: string;
    dj?: string;
    show_id?: string;
    playlist_start_time?: string;
    playlist_end_time?: string;
    playlist_tile?: string;
  }
  