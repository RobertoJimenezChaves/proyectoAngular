import { Directive, forwardRef, Attribute, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS, FormControl } from '@angular/forms';

@Directive({
	selector: '[capital-letter-validator]',
	providers: [
	{
		provide: NG_VALIDATORS,
		useExisting: forwardRef(() => CapitalLetterValidator ),
		multi: true
	}
	]
})
export class CapitalLetterValidator implements Validator {
	
	validate(control: AbstractControl) {
		let text = control.value;
		if (text && text.charAt(0) == text.charAt(0).toLowerCase()) {
			return {
				capitalLetter: {
					capitalLetter: text
				}
			}
		} else {
			return null;
		}
	}
}