export class ClaseHeroe {
  private _id: number;
  private _name: string;
  private _salary: number;

  constructor(_id: number, _name: string, _salary: number) {
    this._id = _id;
    this._name = _name;
    this._salary = _salary;
  }
  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get salary() {
    return this._salary;
  }
  get salaryTax() {
    return this._salary * 1.18;
  }
}
