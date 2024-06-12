import { Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import MyComponent from "./components/MyComponent";

Builder.registerComponent(Counter, {
  name: "Counter",
});

Builder.registerComponent(MyComponent, {
  name: "MyComponent",
});
