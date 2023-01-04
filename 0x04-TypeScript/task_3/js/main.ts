/// <reference path="crud.d.ts"/>

import { rowTypes } from "./interface";
import * as CRUD from "./crud";

const row: rowTypes.RowElement = {
    firstName: "Guillaume",
    lastName: "Salva"
}

const newRowID: rowTypes.RowId = CRUD.insertRow(row);

const updatedRow: rowTypes.RowElement = {
    firstName: "Guillaume",
    lastName: "Salva",
    age: 23
};

CRUD.updateRow(newRowID, updatedRow);

CRUD.deleteRow(newRowID);
