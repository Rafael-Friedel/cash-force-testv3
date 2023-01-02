const formatDate = (date) => date.substr(0, 10).split('-').reverse().join('/');

export default formatDate;
