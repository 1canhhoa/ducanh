export const generateFormFields = (lang) => {
  return [
    {
      name: 'fullname',
      type: 'input',
      required: true,
    },
    {
      doubleCol: true,
      childrens: [
        {
          name: 'gender',
          type: 'select',
          options: [
            {
              label: lang.form.gender.male,
              value: 'male',
            },
            {
              label: lang.form.gender.female,
              value: 'female',
            },
          ],
        },
        {
          name: 'yearOfBirth',
          type: 'number',
          placeholder: 'yyyy',
          required: true,
        },
      ],
    },
    {
      name: 'email',
      placeholder: 'your.email@gmail.com',
      type: 'input',
      required: true,
    },
    {
      name: 'address',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Hà Nội',
          value: 'HN',
        },
        {
          label: 'Đà Nẵng',
          value: 'DN',
        },
        {
          label: 'Hồ Chí Minh',
          value: 'HCM',
        },
      ],
    },
    {
      name: 'workplace_address',
      type: 'input',
      required: true,
    },
    {
      name: 'recruitment_position',
      type: 'popup',
      required: true,
    },
  ]
}
