export module rowTypes {
    export type RowId = number;

    export interface RowElement {
        firstName: string;
        lastName: string;
        age?: number;
    }
}
