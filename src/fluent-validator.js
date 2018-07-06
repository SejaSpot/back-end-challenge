let errors = [];

function ValidationContract() {
    errors = [];
};

ValidationContract.prototype.isRequired = (value, message) => {
    if (!value || value.length <= 0)
        errors.push({ message: message });
};

ValidationContract.prototype.hasMinLen = (value, min, message) => {
    if (!value || value.length < min)
        errors.push({ message: message });
};

ValidationContract.prototype.hasMaxLen = (value, max, message) => {
    if (!value || value.length > max)
        errors.push({ message: message });
};

ValidationContract.prototype.isValid = () => {
    return errors.length == 0;
};
ValidationContract.prototype.errors = () => {
    return errors;
};
module.exports = ValidationContract;