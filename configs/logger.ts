import chalk from "chalk";

interface LoggerProps {
  endpoint: string;
}

interface LoggerMessageProps {
  message: string;
}

export class Logger {
  private endpoint: string;
  constructor({ endpoint }: LoggerProps) {
    this.endpoint = endpoint;
  }

  info({ message }: LoggerMessageProps): void {
    console.log(chalk.bgBlue.underline("[INFO]: ", message));
  }

  debug({ message }: LoggerMessageProps): void {}

  error({ message }: LoggerMessageProps): void {}
}
