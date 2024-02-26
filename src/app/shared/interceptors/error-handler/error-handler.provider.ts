import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { LoggerService } from "../../services/logger/logger.service";
import { ErrorInterceptor } from "./error-handler.interceptor";

export const errorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
    deps: [LoggerService]
}