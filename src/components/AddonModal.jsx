import React from "react";

function AddonModal({
  pizzaSizes,
  pizzaToppings,
  setSize,
  setToppings,
  setShowModal,
}) {
  return (
    <div className="fixed top-0 left-0 w-full h-screen flex bg-gray-400 bg-opacity-40 items-center justify-center">
      <div className="flex flex-col bg-secondary p-5 rounded-lg">
        <div className="grid grid-cols-2 bg-secondary">
          <div>
            <h1>{pizzaSizes[0].title}</h1>
            <div className="flex flex-col">
              {pizzaSizes[0].items.map((size, i) => {
                return (
                  <label key={i} htmlFor={size.size}>
                    <input
                      onChange={(e) => setSize(e.target.value)}
                      id={size.size}
                      value={size.size}
                      type="radio"
                      name={size}
                    />
                    {size.size}
                  </label>
                );
              })}
            </div>
          </div>
          <div>
            <h1>{pizzaToppings[0].title}</h1>
            <div className="flex flex-col">
              {pizzaToppings[0].items.map((topping, i) => {
                if (pizzaToppings[0].isRadio) {
                  return (
                    <label key={i} htmlFor={topping.name}>
                      <input
                        onChange={(e) =>
                          setToppings((prev) => [e.target.value])
                        }
                        id={topping.name}
                        value={topping.name}
                        type="radio"
                        name={topping}
                      />
                      {topping.name}
                    </label>
                  );
                }
                return (
                  <label key={i}>
                    <input
                      type="checkbox"
                      name={topping}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setToppings((prev) => [...prev, topping.name]);
                        } else {
                          setToppings((prev) =>
                            prev.filter((item) => item !== topping.name)
                          );
                        }
                      }}
                    />
                    {topping.name}
                  </label>
                );
              })}
            </div>
          </div>
        </div>
        <button
          className="mx-auto mt-3 rounded-md py-1.5 px-5 bg-primary "
          onClick={() => setShowModal(false)}
        >
          OK
        </button>
      </div>
    </div>
  );
}

export default AddonModal;
