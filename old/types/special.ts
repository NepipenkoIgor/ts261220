let anyType: any = {};
anyType.a = 1;
anyType['n'] = 2;
anyType = 1;
anyType();

let unkType: unknown = {};
unkType.a = 1;
unkType['n'] = 2;
unkType = 1;
unkType();

let vd: void = undefined;
vd = 1;

function a(): void {

}
