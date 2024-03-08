const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "Iam From H1"),
        React.createElement("h2", {}, "Iam from h2"),
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "Iam From Child2 H1"),
        React.createElement("h2", {}, "Iam from H2 from Child2"),
    ])
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent);