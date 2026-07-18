const { useState, useEffect } = React;

function SkillsFilter() {
    const [categories, setCategories] = useState([]);
    const [active, setActive] = useState("All");

    useEffect(function () {
        const boxes = document.querySelectorAll(".skills-box");
        const names = Array.from(boxes).map(function (box) {
            const heading = box.querySelector(".box-heading");
            return heading ? heading.textContent.trim() : "";
        });
        setCategories(names.filter(Boolean));
    }, []);

    useEffect(function () {
        const boxes = document.querySelectorAll(".skills-box");

        boxes.forEach(function (box) {
            const heading = box.querySelector(".box-heading");
            const name = heading ? heading.textContent.trim() : "";

            if (active === "All" || name === active) {
                box.classList.remove("dimmed");
            } else {
                box.classList.add("dimmed");
            }
        });
    }, [active]);

    const allCategories = ["All"].concat(categories);

    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "12px"
        }}>
            {allCategories.map(function (cat) {
                const isActive = cat === active;
                return (
                    <button
                        key={cat}
                        onClick={function () { setActive(cat); }}
                        style={{
                            padding: "8px 18px",
                            borderRadius: "20px",
                            fontSize: "14px",
                            fontWeight: 500,
                            cursor: "pointer",
                            border: isActive ? "1px solid #2DD4BF" : "1px solid #34393E",
                            backgroundColor: isActive ? "#2DD4BF" : "#1B1F23",
                            color: isActive ? "#0B1512" : "#9BA3AA",
                            transition: "all 0.25s ease"
                        }}
                    >
                        {cat}
                    </button>
                );
            })}
        </div>
    );
}

const rootElement = document.getElementById("skills-filter-root");
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<SkillsFilter />);
}