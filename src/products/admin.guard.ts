import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Request } from "express";
import { Observable } from "rxjs";

@Injectable()

export class CheckAdmin implements CanActivate{
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const req: Request  = context.switchToHttp().getRequest()
    if(!['admin'].includes(req.headers.role as string))
      throw new UnauthorizedException()
    return true
  }
}