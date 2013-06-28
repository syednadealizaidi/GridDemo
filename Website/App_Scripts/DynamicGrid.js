(function ($) {
    var DynamicGrid = kendo.ui.Widget.extend({
        options: {
            name: "DynamicGrid",
            columns: [],
            servicePath: "/odata",
            model: "",
            pageSize: 20,
            height: 500
        },
        element: $(),
        schemaFields: {},
        init: function (element, options) {
            kendo.ui.Widget.fn.init.call(this, element, options);
            this.element.data("kendoDynamicGrid", this);
            this.element = $(element);
            this.options = $.extend(options, this.options);
            this._defineGrid();
        },
        _defineGrid: function () {
            var that = this;
            this._defineModel();
            this._defineColumns();
            var dataSource = new kendo.data.DataSource({
                type: "odata",
                pageSize: that.options.pageSize,
                serverPaging: true,
                serverFiltering: true,
                serverSorting: true,
                transport: {
                    read: {
                        url: kendo.format("{0}/{1}?$select={2}", this.options.servicePath, this.options.model, this._getSelectParm()),
                        dataType: "json"
                    }
                },
                schema: {
                    model: {
                        fields: that.schemaFields
                    },
                    data: function (data) {
                        return data.value;
                    },
                    total: function (data) {
                        return data['odata.count'];
                    }
                },
            });
            this.element.kendoGrid({
                dataSource: dataSource,
                height: this.options.height,
                filterable: true,
                sortable: true,
                pageable: true,
                columns: that.options.columns
            });
        },
        _getSelectParm: function () {
            var results = [];
            for (var i = 0; i < this.options.columns.length; i++) {
                results.push(this.options.columns[i].field);
            }
            return results.join();
        },
        _defineModel: function () {
            var model = this.element.data("model");
            if (model && this.options.model) {
                Error("model(e.g Employee) not defined for grid.");
            } else if (model) {
                this.options.model = model;
            }
        },
        _defineColumns: function () {
            var that = this;
            if (!this.options.columns) {
                this.options.columns = [];
            }
            if (!this.options.columns.length) {
                var columns = this.element.find("i").each(function () {
                    var columnDef = $(this),
                        format = columnDef.data("format"),
                        field = columnDef.data("field"),
                        type = columnDef.data("type") || "string";
                    if (field) {
                        that.schemaFields[field] = { type: type };
                        that.options.columns.push({
                            field: field,
                            title: columnDef.html() || field,
                            width: columnDef.data("width") || 100,
                            format: format ? "{0:" + format + "}" : null
                        });
                    }
                });
                setTimeout(function () {
                    columns.remove();
                }, 100);
            }
        }
    });
    kendo.ui.plugin(DynamicGrid);
})(jQuery);