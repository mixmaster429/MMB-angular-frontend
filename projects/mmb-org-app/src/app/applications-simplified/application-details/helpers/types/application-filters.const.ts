export const FILTERS = [
  {
    name: 'Interview',
    value: [6, 7, 8, 9, 10],
    isGeneralApplication: false,
    disabled: false,
    tooltip: 'Candidates you have already moved to interview'
  },
  {
    name: 'Shortlist',
    value: [5],
    isGeneralApplication: false,
    disabled: false,
    tooltip: 'Priority screened candidates we recommend you interview'
  },
  {
    name: 'Community',
    value: [4],
    isGeneralApplication: false,
    disabled: false,
    tooltip: 'Suitable or marginally suitable candidates you may want to consider '
  },
  {
    name: 'General',
    value: null,
    isGeneralApplication: true,
    disabled: false,
    tooltip: 'Candidates deemed not suitable for this role, but you may want to consider for others'
  }
];