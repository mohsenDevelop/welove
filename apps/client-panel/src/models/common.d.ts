export namespace commonTypes {
    export interface Filters {
        page: number;
        limit: number;
        search?: string;
        order?: string;
        sort?: string;
        status?: string;
    }
}