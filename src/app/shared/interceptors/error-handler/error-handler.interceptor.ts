import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { catchError, throwError } from "rxjs";
import { LoggerService } from "../../services/logger/logger.service";

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptor implements HttpInterceptor {
  // Declare logger service
  private loggerService: LoggerService = inject(LoggerService);
  private logger = this.loggerService.getLogger();
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        // Handle and log the error here
        this.logger.error('HTTP Error:', error);
        // Optionally rethrow the error to propagate it
        return throwError(error);
      })
    );
  }
}