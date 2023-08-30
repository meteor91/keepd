import React, { useEffect } from 'react';
import {
    FormProvider,
    useForm,
    type FieldValues,
    type DefaultValues,
} from 'react-hook-form';
import { FormInput } from './components/FormInput';
import { FormItem } from './components/FormItem';
import { FieldError } from './interfaces';

interface FormProps<T extends FieldValues> {
    onSubmit: (data: T) => void;
    children?: React.ReactNode;
    defaultValues?: DefaultValues<T>;
    fieldErrors?: FieldError<T>[];
}

// eslint-disable-next-line @typescript-eslint/comma-dangle
export const Form = <T extends FieldValues,>(props: FormProps<T>): React.ReactElement => {
    const {
        defaultValues,
        onSubmit,
        children,
        fieldErrors,
    } = props;

    const methods = useForm<T>({
        defaultValues,
        mode: 'onSubmit',
        reValidateMode: 'onSubmit',
    });

    useEffect(() => {
        if (fieldErrors !== undefined) {
            fieldErrors.forEach((fieldError) => {
                methods.setError(fieldError.fieldName, fieldError.error);
            });
        }
    }, [fieldErrors, methods.setError]);

    const { handleSubmit } = methods;

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} >
                {children}
            </form>
        </FormProvider>
    );
};

Form.Input = FormInput;
Form.Item = FormItem;
