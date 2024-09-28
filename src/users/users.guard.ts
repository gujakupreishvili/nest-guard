import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Request } from "express";
import { Observable } from "rxjs";

@Injectable()
export class Userdate implements CanActivate{
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const req: Request | any = context.switchToHttp().getRequest()
    const lastDate=10
    const userDate = req.body.date || 0
    if(userDate<lastDate){
      req.guardPassed =false
    }else{
      req.guardPassed = true
    }
    return true
  }
}