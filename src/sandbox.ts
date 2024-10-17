// string
let string: string;

// number
let number: number;

// boolean
let boolean: boolean;

// arrays
let arrays: string[] = [];

// objects
let objectsOne: object;
let objectsTwo: { name: string; age: number; beltColor: string };

//union
let unionArr: (string | number | boolean)[] = [];
let union: string | number;

// any
let any: any;
let anyArr: any[] = [];
let anyObj: { name: any; age: any; beltColor: any };

// function
let func: Function;
func = (e: Event) => {
  return e;
};

// type
type StringOrNumber = string | number;
type ObjType = { name: string; uid: StringOrNumber };

// signatures
let voidFunc: (a: string, b: string) => void;
let voidFuncTwo: (obj: { name: string; age: number }) => void;
let numberFunc: (a: number, b: number, c: string) => number;
let StringFunc: (a: number, b: string, c: string) => string;

// DOM
const q = document.querySelector("a")!;
const f = document.querySelector(".new-item-form") as HTMLFormElement;
