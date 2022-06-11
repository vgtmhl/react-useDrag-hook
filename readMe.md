# useDrag React Hook

useDrag is a react hook that allows you to simply make your components draggable without deploying any logic inside the component itself.

![Example gif](https://github.com/vgtmhl/react-useDrag-hook/blob/master/sample.gif?raw=true)


## Usage

Wrap your component in the `useDrag` hook. 

That's it :)


> `App.tsx`
```
function App() {

  return (
    <div className="App">
      {useDrag(<Example />)}
    </div>
  )
}
```

## Styling options

useDrag provides a HOC component with a default `draggable` class, and a `dragging` class that gets toggled when the component is being dragged.

You should add styles for these classes directly in your components.

In the case of this example, I am using autoprefixer, so I need to reference the classes in the global namespace:

<br/>

> `Example.module.css`
```
:global(.draggable) .example {
    cursor: move;
}

:global(.dragging) .example {
    border: 3px solid #333;
    outline: 2px solid lightskyblue;
}
```