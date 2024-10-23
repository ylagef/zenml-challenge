export const formatDate = (value: string) =>
  new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
    timeStyle: 'medium',
    hour12: false
  }).format(new Date(value))
