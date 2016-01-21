/**
 * @param {string} key: field name to sort for
 * @param {string} direction: [asc, desc]
 * @param {number} page: number of page selected to show
 * @param {number} records: number of records per page to show
 */
export class Filters {
  public key:string;
  public direction:string;
  public page:number;
  public records:number;
  public fields:any;
}
