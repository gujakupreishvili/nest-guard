import { BadRequestException, CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Request } from "express";
import { Observable } from "rxjs";

@Injectable()
export class  CheckUser  implements CanActivate{
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const req: Request | any = context.switchToHttp().getRequest()
    const userId = req.headers["user-id"] as string
    if(Number(userId)>3) throw new  BadRequestException()
    req.userId=userId

    return true
  }
}