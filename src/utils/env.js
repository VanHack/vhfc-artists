const environment = ((process.env: any): { [string]: string });

export default function env(key: string): string {
  const envVar = environment[`REACT_APP_${key}`];

  if (!envVar)
    throw new TypeError(`${key} is not defined as an environment variable.`);

  return envVar;
}
