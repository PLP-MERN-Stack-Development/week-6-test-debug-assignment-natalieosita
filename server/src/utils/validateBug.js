exports.validateBug = ({ title, description, status }) => {
  const validStatus = ['open', 'in-progress', 'resolved'];
  return Boolean(title && description && (!status || validStatus.includes(status)));
};