export class Response {
  public async createResponse(msg: string, data: any) {
    return {
      status: 201,
      message: `${msg} created successfull`,
      items: data,
    };
  }

  public async getResponse(msg: string, data: any, meta: any) {
    return {
      status: 200,
      message: `${msg} Fetch Successfully`,
      items: data,
      meta: meta,
    };
  }
}

export class CustomError {
  message!: string;
  status!: number;
  additionalInfo!: any;

  constructor(message: string, status: number = 500, additionalInfo: any = {}) {
    this.message = message;
    this.status = status;
    this.additionalInfo = additionalInfo;
  }
}