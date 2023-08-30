import { ErrorOption, FieldPath, FieldValues } from 'react-hook-form';


export interface FieldError<T extends FieldValues> {
    error: ErrorOption;
    fieldName: FieldPath<T>;
}