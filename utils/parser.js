import _ from "lodash";

export function parseNumbers(input) {
       return _.map(input, Number);
}

export function isValidOperation(operation) {
       return ["add", "subtract", "multiply", "divide"].includes(operation);

}