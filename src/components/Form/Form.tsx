import React from 'react';
import {
    FormProvider,
    useForm,
    type FieldValues,
    type DefaultValues,
} from 'react-hook-form';
import { FormInput } from './components/FormInput';
import { FormItem } from './components/FormItem';
import { type Resolver } from 'react-hook-form/dist/types/resolvers';

interface FormProps<T extends FieldValues> {
    onSubmit: (data: T) => void;
    children?: React.ReactNode;
    defaultValues: DefaultValues<T>;
    resolver?: Resolver<T>;
}

// eslint-disable-next-line @typescript-eslint/comma-dangle
export const Form = <T extends FieldValues,>(props: FormProps<T>): React.ReactElement => {
    const {
        defaultValues,
        onSubmit,
        resolver,
        children,
    } = props;

    const methods = useForm<T>({
        defaultValues,
        resolver,
        mode: 'onSubmit',
    });
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
