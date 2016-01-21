export interface Column{
    headerName: string;
    field: string;
    width: number;
    type: string;
    filter: string;
    filterFields:Array<string>
}
