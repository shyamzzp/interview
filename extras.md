<button onClick={(e) => {e.stopPropagation();driver.highlight({
      element: '#nice',
      popover: {
        title: 'Title for the Popover',
        description: 'Description for it',
      }
    });}}>Button</button>
<MyComponent />