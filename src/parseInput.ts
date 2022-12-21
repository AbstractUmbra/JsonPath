import { JSONPath } from "jsonpath-plus";

export function parseInput(pathInput: string, jsonBody: object): any {
    let result = JSONPath({ path: pathInput, json: jsonBody });

    return result;
}
