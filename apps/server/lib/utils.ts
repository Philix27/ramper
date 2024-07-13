export function appLogger(message: string, ...rest: string[]) {
  console.log(message, ...rest);
}

appLogger.err = (message: string, ...rest: string[]) => {
  console.log(message, ...rest);
};

export const debug = (message: string, ...rest: string[]) => {
  console.log(message, "I dont", ...rest);
};
