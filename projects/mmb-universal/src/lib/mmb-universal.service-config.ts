/**
 * Service configuration to be used when importing universal
 */
export class IsErrorLoggingEnabled {
    minor: boolean = false;
    major: boolean = true;
    critical: boolean = true;
}

export class MmbUniversalServiceConfig {
    sentryio: string;
    prefix?: string = '[MmbUniversal]';
    sentryLogging?: IsErrorLoggingEnabled = new IsErrorLoggingEnabled();
    apiLogging?: IsErrorLoggingEnabled = new IsErrorLoggingEnabled();
}