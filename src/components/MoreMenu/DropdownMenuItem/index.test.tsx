import IconPlus from "../../Icons/Plus";
import DropdownMenuItem from "./index";

const mock = jest.fn();

it("returns item without crashing", () => {
  DropdownMenuItem(
    {
      title: "Add",
      href: "#testing",
      color: "accent",
      icon: IconPlus,
    },
    1,
    mock
  );
});
