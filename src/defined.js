import {ascending} from "d3-array";

export function defined(x) {
  return x != null && !Number.isNaN(x);
}

export function ascendingDefined(a, b) {
  return defined(a) - defined(b) || ascending(a, b);
}
