export default class Error {
  public readonly message: string;

  public readonly statusCode: number;

  constructor(message: string.status, statusCode: 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}
