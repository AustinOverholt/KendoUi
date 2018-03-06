
$(document).ready(function() {
    $("#toolbar").kendoToolBar({
        items: [
            { type: "button", text: "Home" },
            {
                type: "splitButton",
                text: "Applications",
                menuButtons: [
                    { text: "Insert above",  },
                    { text: "Insert between", },
                    { text: "Insert below",  }
                ]
            },
            {
                type: "splitButton",
                text: "Metrics",
                menuButtons: [
                    { text: "Insert above", },
                    { text: "Insert between", },
                    { text: "Insert below", }
                ]
            },
            {
                type: "splitButton",
                text: "Widgets",
                menuButtons: [
                    { text: "Insert above",  },
                    { text: "Insert between", },
                    { text: "Insert below", }
                ]
            },
            {
                type: "splitButton",
                text: "Search",
                icon: "search",
                menuButtons: [
                    { type:"input", text: "Insert" },
                    { text: "Insert between",  },
                    { text: "Insert below", }
                ]
            },
            {
                type: "button",
                text: "Action",
                overflow: "always"
            },

            
        ]
    });

    $("#dropdown").kendoDropDownList({
        optionLabel: "Paragraph",
        dataTextField: "text",
        dataValueField: "value",
        dataSource: [
            { text: "Heading 1", value: 1 },
            { text: "Heading 2", value: 2 },
            { text: "Heading 3", value: 3 },
            { text: "Title", value: 4 },
            { text: "Subtitle", value: 5 }
        ]
    });
});
