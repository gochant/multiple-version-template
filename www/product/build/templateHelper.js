// 模板模型帮助方法

var helper = {
    getModelFields: function (model, fields) {
        if (fields == null) {
            fields = Object.keys(model.fields).filter(function (value) {
                return !model.fields[value].calculate
            })
        }
        if (typeof fields === 'string') {
            fields = model.views[fields]
        }
        return fields;
    }
};
module.exports = model();