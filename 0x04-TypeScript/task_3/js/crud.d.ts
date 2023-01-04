import { rowTypes } from "./interface";

export function insertRow(row: rowTypes.RowElement): rowTypes.RowId;
export function deleteRow(rowId: rowTypes.RowId): void;
export function updateRow(rowId: rowTypes.RowId, row: rowTypes.RowElement): rowTypes.RowId;
