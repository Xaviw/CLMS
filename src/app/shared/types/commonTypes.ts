import { AbstractControl } from '@angular/forms';

interface Res {
    code: number;
    msg: string;
    data: any;
}

interface formControls {
    [propName: string]: AbstractControl;
}

export { Res, formControls };
