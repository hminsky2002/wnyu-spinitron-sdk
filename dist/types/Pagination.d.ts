import { Link } from './Link';
export interface Pagination {
    totalCount: number;
    pageCount: number;
    currentPage: number;
    perPage: number;
}
export interface BaseIndexResponse {
    _links: {
        self: Link;
    };
    _meta: Pagination;
}
