import * as Yup from 'yup';

const expenseSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  amount: Yup.number()
    .typeError('Amount must be a number')
    .required('Amount is required'),
  date: Yup.string().required('Date is required'),
  category: Yup.mixed()
    .test('is-valid-category', 'Category is required', value =>
      (typeof value === 'string' && value !== '') || (typeof value === 'object' && value !== null)
    )
    .required('Category is required'),
  receipts: Yup.array()
    .of(Yup.mixed())
    .max(3, 'You can upload up to 3 receipts')
    .notRequired(),
  description: Yup.string().notRequired()
});

export default expenseSchema;
