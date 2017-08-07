import { Dictionary, DictionaryIdentifier } from "./Dictionary";
import { DictionaryExpected } from "./DictionaryExpected";
import { DictionaryPatterns } from "./DictionaryPatterns";
import { DictionarySpecs } from "./DictionarySpecs";

const ulid = require("ulid");

export const createDictionary = () => {
    return new Dictionary({
        id: new DictionaryIdentifier(ulid()),
        expected: new DictionaryExpected(""),
        patterns: new DictionaryPatterns([]),
        specs: new DictionarySpecs([])
    });
};
