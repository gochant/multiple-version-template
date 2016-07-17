function tab() {
    var tabs = "";

    for (var i = 0; i < stringify.level; i++) {
        tabs += "\t";
    }

    return tabs;
}

function stringify(items) {
    var item,
        itemString,
        levelString = "";

    for (var i = 0; i < items.length; i++) {
        item = items[i];

        if (!item.items) {
            itemString = kendo.stringify(item);
        } else {
            stringify.level++;
            var subnodes = stringify(item.items);
            stringify.level--;

            delete item.items;

            itemString = kendo.stringify(item);

            itemString = itemString.substring(0, itemString.length - 1);

            itemString += ",\"items\":[\r\n" + subnodes + tab() + "]}";
        }

        levelString += tab() + itemString;

        if (i != items.length - 1) {
            levelString += ",";
        }

        levelString += "\r\n";
    }

    return levelString;
}

stringify.level = 1;

$(document).ready(function () {
    var Node = kendo.data.Node;
    var viewModel = kendo.observable({
        autoCompleteValue: null,
        colors: [
            { name: "Red", value: "#f00" },
            { name: "Green", value: "#0f0" },
            { name: "Blue", value: "#00f" }
        ],
        displayAutoCompleteValue: function () {
            var autoCompleteValue = this.get("autoCompleteValue");
            return kendo.stringify(autoCompleteValue);
        },
        comboBoxValue: null,
        displayComboBoxValue: function () {
            var comboBoxValue = this.get("comboBoxValue");
            return kendo.stringify(comboBoxValue);
        },
        dropDownListValue: null,
        displayDropDownListValue: function () {
            var dropDownListValue = this.get("dropDownListValue");
            return kendo.stringify(dropDownListValue);
        },
        numericTextBoxValue: 10,
        displayNumericTextBoxValue: function () {
            var numericTextBoxValue = this.get("numericTextBoxValue");

            return kendo.toString(numericTextBoxValue, "c");
        },
        datePickerValue: new Date(),
        displayDatePickerValue: function () {
            var datePickerValue = this.get("datePickerValue");
            return kendo.toString(datePickerValue, "yyyy-MM-dd");
        },
        timePickerValue: new Date(),
        displayTimePickerValue: function () {
            var timePickerValue = this.get("timePickerValue");

            return kendo.toString(timePickerValue, "hh:mm:ss");
        },
        multiSelectValue: [],
        displayMultiSelectValue: function () {
            var multiSelectValue = this.get("multiSelectValue");
            return kendo.stringify(multiSelectValue);
        },
        gridSource: [
            { Name: "Socks", Price: 18.00, UnitsInStock: 39 },
            { Name: "Gloves", Price: 19.00, UnitsInStock: 17 },
            { Name: "Shoes", Price: 97.00, UnitsInStock: 29 }
        ],
        displayGridSource: function () {
            return stringify(this.get("gridSource").toJSON());
        },
        sliderValue: 5,
        treeviewSource: kendo.observableHierarchy([
            {
                text: "Andrew", expanded: true, items: [
                  { text: "Nancy" },
                  { text: "Steve" }
                ]
            }
        ]),
        displayTreeviewSource: function () {
            return stringify(this.get("treeviewSource").toJSON());
        }
    });

    viewModel.autoCompleteValue = viewModel.colors[1];
    viewModel.dropDownListValue = viewModel.colors[0];
    viewModel.comboBoxValue = viewModel.colors[0];

    kendo.bind($("div.demo-section"), viewModel);
});