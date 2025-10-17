import { AbstractControl, FormArray, FormGroup, ValidationErrors } from '@angular/forms';

export class FormUtils {
  // Expresiones regulares:
  static namePattern = '^([a-zA-Z]+) ([a-zA-Z]+)$';
  static emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  static notOnlySpacesPattern = '^[a-zA-Z0-9]+$';


  //* Dentro de nuestra función se requerirá que se envie en los argumentos del formulario para poder tener control desde aqui:
  static isValidField(form: FormGroup, fieldName: string): boolean | null {
    return (form.controls[fieldName].errors && form.controls[fieldName].touched);
  }

  static getFieldError(form: FormGroup, fieldName: string): string | null {
    if (!form.controls[fieldName]) return null;
    const errors = form.controls[fieldName].errors ?? {};
    return FormUtils.getTextError(errors);
  }

  static isValidFieldInArray(formArray: FormArray, index: number){
    return (formArray.controls[index].errors && formArray.controls[index].touched);
  }

  static getFieldErrorInArray(formArray: FormArray, index: number){
    if (formArray.controls.length === 0) return null;
    const errors = formArray.controls[index].errors ?? {};
    return FormUtils.getTextError(errors);
  }

  static getTextError(errors: ValidationErrors){
    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido.';

        case 'minlength':
          return `Mínimo de ${errors['minlength'].requiredLength} caracteres`;

        case 'min':
          return `Valor mínimo de ${errors['min'].min}`;

        case 'email':
          return `Debe ingresar un email válido`;

        case 'emailTaken':
          return 'Correo electrónico ya ha sido registrado anteriormente';

        case 'invalidUser':
          return 'Nombre de usuario ya existe, intente con otro';

        case 'pattern':
          switch(errors['pattern'].requiredPattern){
            case FormUtils.emailPattern:
              return 'El valor ingresado no es un email válido.';

            case FormUtils.namePattern:
              return 'Debe de ingresar un nombre y un apellido';

            case FormUtils.notOnlySpacesPattern:
              return 'Campo debe ser solo de letras y números';

            default:
              return 'Error de patron contra expresión regular';
          }

        default:
          return `Error de validación no controlado: ${key}`;
      }
    }
    return null;
  }

  static isFieldOneEqualFieldTwo(field1: string, field2:string): ValidationErrors | null{
    return (FormGroup: AbstractControl) => {
      const field1Value = FormGroup.get(field1)?.value;
      const field2Value = FormGroup.get(field2)?.value;
      return field1Value === field2Value ? null : { passwordsNotEqual:true};
    }
  }

  //* Validación asincrona
  static async checkingServerResponse(control: AbstractControl): Promise<ValidationErrors | null> {
    console.log('Validando con el servidor...');
    const formValue = control.value;
    if (formValue === 'hola@mundo.com') {
      return { emailTaken: true };
    }
    return null
  }


  //* Validación síncrona
  static validateUserName(control: AbstractControl): ValidationErrors | null{
    const UserNameValue = control.value;
    const invalidUserNames = ['gamerPro', 'noobMaster', 'mvpPlayer'];

    for (const user of invalidUserNames) {
      return user === UserNameValue ? { invalidUser: true } : null;
    }
    return null
  }

}

